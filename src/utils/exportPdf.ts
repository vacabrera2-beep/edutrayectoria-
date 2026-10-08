import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NotaCursoRegistro, Estudiante } from '@/types';

export function exportarPlanillaNotasPDF(
  notas: NotaCursoRegistro[],
  curso: string,
  materia: string,
  docenteNombre: string
) {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  // Encabezado institucional
  doc.setFontSize(15);
  doc.setTextColor(30, 58, 138); // blue-900
  doc.text('ESCUELA SECUNDARIA N° - PROVINCIA DE BUENOS AIRES', 14, 15);

  doc.setFontSize(10);
  doc.setTextColor(50, 50, 50);
  doc.text('REGISTRO INSTITUCIONAL DE TRAYECTORIAS EDUCATIVAS (RITE) - SÁBANA OFICIAL DE CALIFICACIONES', 14, 22);

  // Metadatos del curso y materia
  doc.setFontSize(10);
  doc.setFillColor(243, 244, 246);
  doc.roundedRect(14, 26, 269, 14, 2, 2, 'F');

  doc.setTextColor(17, 24, 39);
  doc.text(`Curso: ${curso}`, 18, 33);
  doc.text(`Espacio Curricular: ${materia}`, 75, 33);
  doc.text(`Docente a cargo: ${docenteNombre}`, 160, 33);
  doc.text(`Ciclo Lectivo: 2026`, 240, 33);

  // Columnas para la tabla
  const head = [
    [
      'N°',
      'Estudiante',
      'DNI',
      '1 Cuatr. (RITE)',
      '2 Cuatr. (RITE)',
      'Intensif. Dic.',
      'Intensif. Feb.',
      'Nota Definitiva',
      'Condición Final',
      'Observaciones'
    ]
  ];

  const body = notas.map((row, index) => [
    index + 1,
    row.estudianteNombre,
    row.dni,
    row.informe1,
    row.informe2,
    row.intensificacionDic,
    row.intensificacionFeb,
    row.notaFinal,
    row.condicion,
    row.observaciones || '-'
  ]);

  autoTable(doc, {
    head,
    body,
    startY: 44,
    theme: 'grid',
    styles: {
      fontSize: 8.5,
      cellPadding: 2,
      halign: 'center',
      valign: 'middle'
    },
    headStyles: {
      fillColor: [37, 99, 235], // blue-600
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    columnStyles: {
      0: { cellWidth: 10 },
      1: { halign: 'left', cellWidth: 48 },
      2: { cellWidth: 24 },
      3: { cellWidth: 24 },
      4: { cellWidth: 24 },
      5: { cellWidth: 25 },
      6: { cellWidth: 25 },
      7: { cellWidth: 20, fontStyle: 'bold' },
      8: { cellWidth: 32 },
      9: { halign: 'left', cellWidth: 37 }
    },
    alternateRowStyles: {
      fillColor: [249, 250, 251]
    }
  });

  // Espacio para firmas al pie
  const finalY = (doc as any).lastAutoTable?.finalY || 160;
  const signatureY = Math.min(finalY + 20, 185);

  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);

  doc.line(20, signatureY, 75, signatureY);
  doc.text('Firma y Aclaración Docente', 25, signatureY + 5);

  doc.line(115, signatureY, 170, signatureY);
  doc.text('Firma y Sello Preceptor/a', 120, signatureY + 5);

  doc.line(210, signatureY, 265, signatureY);
  doc.text('Firma y Sello Equipo Directivo', 213, signatureY + 5);

  doc.save(`Sabana_Notas_${curso.replace(/\s+/g, '_')}_${materia.replace(/\s+/g, '_')}.pdf`);
}

export function exportarBoletinEstudiantePDF(estudiante: Estudiante) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Encabezado
  doc.setFontSize(15);
  doc.setTextColor(30, 58, 138);
  doc.text('ESCUELA SECUNDARIA N°', 105, 14, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(55, 65, 81);
  doc.text('DIRECCIÓN GENERAL DE CULTURA Y EDUCACIÓN - PROV. DE BS. AS.', 105, 20, { align: 'center' });

  doc.setFontSize(11);
  doc.setTextColor(17, 24, 39);
  doc.text('INFORME VALORATIVO DE LA TRAYECTORIA EDUCATIVA (R.I.T.E.)', 105, 26, { align: 'center' });

  doc.setFontSize(8.5);
  doc.setTextColor(100, 100, 100);
  doc.text('Régimen Académico de la Educación Secundaria - Ciclo Lectivo 2026', 105, 31, { align: 'center' });

  // Ficha del estudiante
  doc.setFillColor(243, 244, 246);
  doc.roundedRect(14, 35, 182, 20, 2, 2, 'F');

  doc.setFontSize(9.5);
  doc.setTextColor(17, 24, 39);
  doc.text(`Estudiante: ${estudiante.nombre}`, 18, 41);
  doc.text(`DNI: ${estudiante.dni}`, 120, 41);
  doc.text(`Curso: ${estudiante.cursoActual} (${estudiante.turno})`, 18, 48);
  doc.text(`Orientación: ${estudiante.orientacion}`, 85, 48);
  doc.text(`Legajo: ${estudiante.legajo}`, 150, 48);

  // Tabla con materias actuales y RITE
  const materiasActuales = estudiante.trayectoria.filter((t) => t.anio === estudiante.anioActual);
  const head = [['Materia', '1° Cuatrimestre', '2° Cuatrimestre', 'Situación Actual', 'Docente Asignado']];
  const body = materiasActuales.map((m) => [
    m.nombre,
    m.primerCuatrimestreRITE,
    m.segundoCuatrimestreRITE,
    m.status === 'aprobada' ? 'Aprobada' : m.status === 'intensificacion' ? 'En Intensificación' : 'Cursando',
    m.docenteAsignado
  ]);

  autoTable(doc, {
    head,
    body,
    startY: 58,
    theme: 'grid',
    styles: {
      fontSize: 8.5,
      cellPadding: 2,
      halign: 'center'
    },
    headStyles: {
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    columnStyles: {
      0: { halign: 'left', cellWidth: 50 },
      1: { cellWidth: 28 },
      2: { cellWidth: 28 },
      3: { cellWidth: 36 },
      4: { halign: 'left', cellWidth: 40 }
    }
  });

  // Sección de Materias Pendientes / Adeudadas de años anteriores
  const finalY = (doc as any).lastAutoTable?.finalY || 130;
  const materiasAdeudadas = estudiante.trayectoria.filter((t) => t.status === 'adeudada');

  doc.setFontSize(11);
  doc.setTextColor(185, 28, 28); // red-700
  doc.text('ESPACIOS CURRICULARES PENDIENTES / ADEUDADOS DE AÑOS ANTERIORES', 14, finalY + 10);

  if (materiasAdeudadas.length === 0) {
    doc.setFontSize(9);
    doc.setTextColor(22, 101, 52); // green-800
    doc.text('El estudiante no registra materias adeudadas de ciclos lectivos previos.', 14, finalY + 16);
  } else {
    const headAdeudadas = [['Materia Pendiente', 'Año Original', 'Docente Evaluador', 'Instancia de Acreditación']];
    const bodyAdeudadas = materiasAdeudadas.map((m) => [
      m.nombre,
      `${m.anio}° Año`,
      m.docenteAsignado,
      'Período de Intensificación Dic/Feb'
    ]);

    autoTable(doc, {
      head: headAdeudadas,
      body: bodyAdeudadas,
      startY: finalY + 13,
      theme: 'grid',
      styles: {
        fontSize: 8.5,
        cellPadding: 2,
        halign: 'center'
      },
      headStyles: {
        fillColor: [220, 38, 38], // red-600
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      columnStyles: {
        0: { halign: 'left', cellWidth: 50 },
        1: { cellWidth: 28 },
        2: { halign: 'left', cellWidth: 54 },
        3: { cellWidth: 50 }
      }
    });
  }

  // Cuadro informativo normativa
  const finalY2 = (doc as any).lastAutoTable?.finalY || 180;
  doc.setFillColor(254, 242, 242);
  doc.roundedRect(14, finalY2 + 8, 182, 22, 2, 2, 'F');

  doc.setFontSize(7.5);
  doc.setTextColor(120, 20, 20);
  doc.text('GLOSARIO Y MARCO NORMATIVO:', 18, finalY2 + 13);
  doc.text('• TEA (Trayectoria Educativa Avanzada): Alcanzó los aprendizajes prioritarios previstos (Calificación 7 a 10).', 18, finalY2 + 17);
  doc.text('• TEP (Trayectoria Educativa en Proceso): Requiere afianzar contenidos en período de intensificación.', 18, finalY2 + 21);
  doc.text('• TED (Trayectoria Educativa Discontinua): Escasa vinculación. Requiere intensificación prioritaria presencial.', 18, finalY2 + 25);

  // Firmas
  const signY = finalY2 + 48;
  doc.line(20, signY, 70, signY);
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  doc.text('Firma Preceptor/a', 30, signY + 4);

  doc.line(80, signY, 130, signY);
  doc.text('Firma y Sello Directivo', 88, signY + 4);

  doc.line(140, signY, 190, signY);
  doc.text('Firma Padre/Madre/Tutor', 147, signY + 4);

  doc.save(`Boletin_RITE_${estudiante.nombre.replace(/\s+/g, '_')}.pdf`);
}
