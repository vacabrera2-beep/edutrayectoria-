import { NotaCursoRegistro } from '@/types';

export function exportarPlanillaNotasExcel(
  notas: NotaCursoRegistro[],
  curso: string,
  materia: string,
  docenteNombre: string
) {
  const headers = [
    'Nro',
    'Estudiante',
    'DNI',
    'Curso',
    'Materia',
    'Docente',
    '1er Cuatrimestre (RITE)',
    '2do Cuatrimestre (RITE)',
    'Intensificacion Diciembre',
    'Intensificacion Febrero',
    'Nota Final',
    'Condicion',
    'Observaciones'
  ];

  const rows = notas.map((row, index) => [
    index + 1,
    `"${row.estudianteNombre}"`,
    `"${row.dni}"`,
    `"${curso}"`,
    `"${materia}"`,
    `"${docenteNombre}"`,
    `"${row.informe1}"`,
    `"${row.informe2}"`,
    `"${row.intensificacionDic}"`,
    `"${row.intensificacionFeb}"`,
    `"${row.notaFinal}"`,
    `"${row.condicion}"`,
    `"${(row.observaciones || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

  // UTF-8 BOM para que Excel en espa?ol abra con tildes y caracteres correctos
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Planilla_Calificaciones_${curso.replace(/\s+/g, '_')}_${materia.replace(/\s+/g, '_')}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
