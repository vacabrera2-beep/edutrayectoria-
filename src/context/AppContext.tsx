'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  UserRole,
  Estudiante,
  Docente,
  PeriodoIntensificacion,
  Mensaje,
  NotaCursoRegistro,
  MaterialEstudio,
  RespuestaMensaje
} from '@/types';
import {
  ESTUDIANTES_MOCK,
  DOCENTES_MOCK,
  PERIODOS_INTENSIFICACION_MOCK,
  MENSAJES_INICIALES,
  NOTAS_CURSO_4TO2DA_MATEMATICA,
  MATERIALES_PRECARGADOS
} from '@/data/mockData';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  estudianteActivo: Estudiante;
  setEstudianteActivo: (est: Estudiante) => void;
  estudiantes: Estudiante[];
  docentes: Docente[];
  materiales: MaterialEstudio[];
  mensajes: Mensaje[];
  periodos: PeriodoIntensificacion[];
  notasCurso: NotaCursoRegistro[];
  updateNota: (id: string, campo: keyof NotaCursoRegistro, valor: any) => void;
  agregarMaterial: (material: Omit<MaterialEstudio, 'id' | 'fechaSubida'>) => void;
  eliminarMaterial: (id: string) => void;
  enviarMensaje: (nuevo: Omit<Mensaje, 'id' | 'fecha' | 'leido' | 'respuestas'>) => void;
  responderMensaje: (mensajeId: string, texto: string, autorNombre: string, autorRol: UserRole) => void;
  asignarDocenteMateria: (docenteId: string, curso: string, materia: string, division: string, turno: string) => void;
  asignarComisionIntensificacion: (docenteId: string, materia: string, anio: number, horario: string, aula: string) => void;
  descargarMaterialArchivo: (material: MaterialEstudio) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('estudiante');
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>(ESTUDIANTES_MOCK);
  const [estudianteActivo, setEstudianteActivo] = useState<Estudiante>(ESTUDIANTES_MOCK[0]);
  const [docentes, setDocentes] = useState<Docente[]>(DOCENTES_MOCK);
  const [materiales, setMateriales] = useState<MaterialEstudio[]>(MATERIALES_PRECARGADOS);
  const [mensajes, setMensajes] = useState<Mensaje[]>(MENSAJES_INICIALES);
  const [periodos, setPeriodos] = useState<PeriodoIntensificacion[]>(PERIODOS_INTENSIFICACION_MOCK);
  const [notasCurso, setNotasCurso] = useState<NotaCursoRegistro[]>(NOTAS_CURSO_4TO2DA_MATEMATICA);

  // Mantener actualizado el estudiante activo si cambian los estudiantes
  useEffect(() => {
    const updated = estudiantes.find((e) => e.id === estudianteActivo.id);
    if (updated) {
      setEstudianteActivo(updated);
    }
  }, [estudiantes, estudianteActivo.id]);

  const updateNota = (id: string, campo: keyof NotaCursoRegistro, valor: any) => {
    setNotasCurso((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [campo]: valor };
          // Auto calcular condicion segun RITE y notas
          if (campo === 'informe1' || campo === 'informe2' || campo === 'notaFinal') {
            if (updated.informe1 === 'TEA' && updated.informe2 === 'TEA') {
              updated.condicion = 'Aprobado';
              if (!updated.notaFinal || updated.notaFinal === '-') updated.notaFinal = 8;
            } else if (updated.informe2 === 'TEP' || updated.informe2 === 'TED') {
              updated.condicion = 'Intensifica Diciembre';
              updated.notaFinal = '-';
            }
          }
          return updated;
        }
        return item;
      })
    );
  };

  const agregarMaterial = (nuevo: Omit<MaterialEstudio, 'id' | 'fechaSubida'>) => {
    const nuevoMaterial: MaterialEstudio = {
      ...nuevo,
      id: `mat-${Date.now()}`,
      fechaSubida: new Date().toLocaleDateString('es-AR')
    };
    setMateriales((prev) => [nuevoMaterial, ...prev]);

    // Asociar a la materia correspondiente en la trayectoria de los estudiantes si adeudan
    setEstudiantes((prev) =>
      prev.map((est) => ({
        ...est,
        trayectoria: est.trayectoria.map((tm) => {
          if (tm.nombre.toLowerCase() === nuevo.materiaNombre.toLowerCase() && tm.anio === nuevo.anio) {
            return {
              ...tm,
              materiales: [nuevoMaterial, ...tm.materiales]
            };
          }
          return tm;
        })
      }))
    );
  };

  const eliminarMaterial = (id: string) => {
    setMateriales((prev) => prev.filter((m) => m.id !== id));
    setEstudiantes((prev) =>
      prev.map((est) => ({
        ...est,
        trayectoria: est.trayectoria.map((tm) => ({
          ...tm,
          materiales: tm.materiales.filter((m) => m.id !== id)
        }))
      }))
    );
  };

  const enviarMensaje = (nuevo: Omit<Mensaje, 'id' | 'fecha' | 'leido' | 'respuestas'>) => {
    const ahora = new Date();
    const formatoFecha = ahora.toLocaleDateString('es-AR') + ' ' + ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    const msg: Mensaje = {
      ...nuevo,
      id: `msg-${Date.now()}`,
      fecha: formatoFecha,
      leido: false,
      respuestas: []
    };
    setMensajes((prev) => [msg, ...prev]);
  };

  const responderMensaje = (mensajeId: string, texto: string, autorNombre: string, autorRol: UserRole) => {
    const ahora = new Date();
    const formatoFecha = ahora.toLocaleDateString('es-AR') + ' ' + ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    const resp: RespuestaMensaje = {
      id: `resp-${Date.now()}`,
      emisor: autorNombre,
      texto,
      fecha: formatoFecha,
      rol: autorRol
    };

    setMensajes((prev) =>
      prev.map((m) => {
        if (m.id === mensajeId) {
          return {
            ...m,
            leido: true,
            respuestas: [...m.respuestas, resp]
          };
        }
        return m;
      })
    );
  };

  const asignarDocenteMateria = (
    docenteId: string,
    curso: string,
    materia: string,
    division: string,
    turno: string
  ) => {
    const anioNum = parseInt(curso.replace(/[^0-9]/g, '')) || 1;
    setDocentes((prev) =>
      prev.map((d) => {
        if (d.id === docenteId) {
          return {
            ...d,
            asignaciones: [
              ...d.asignaciones,
              { materiaNombre: materia, curso, anio: anioNum, division, turno }
            ]
          };
        }
        return d;
      })
    );
  };

  const asignarComisionIntensificacion = (
    docenteId: string,
    materia: string,
    anio: number,
    horario: string,
    aula: string
  ) => {
    setDocentes((prev) =>
      prev.map((d) => {
        if (d.id === docenteId) {
          return {
            ...d,
            comisionesIntensificacion: [
              ...d.comisionesIntensificacion,
              {
                materiaNombre: materia,
                anio,
                horarioConsulta: horario,
                diaSemana: 'A coordinar',
                lugarAula: aula,
                alumnosInscriptos: 0
              }
            ]
          };
        }
        return d;
      })
    );
  };

  // Función para descargar un archivo real generado al vuelo
  const descargarMaterialArchivo = (material: MaterialEstudio) => {
    const contenido = `================================================================================
ESCUELA DE EDUCACIÓN SECUNDARIA (E.E.S.) Nº 16 "FORTALEZA DE LOS KILMES"
Plataforma Institucional EduTrayectoria - Ciclo Lectivo 2026
Régimen Académico Marco - Período de Intensificación y Acreditación
================================================================================

DOCUMENTO: ${material.titulo}
MATERIA: ${material.materiaNombre} (${material.anio}° Año)
DOCENTE RESPONSABLE: ${material.docenteNombre}
FECHA DE PUBLICACIÓN: ${material.fechaSubida}
TIPO: ${material.tipo.toUpperCase().replace('_', ' ')}

--------------------------------------------------------------------------------
DESCRIPCIÓN Y OBJETIVOS PEDAGÓGICOS:
--------------------------------------------------------------------------------
${material.descripcion}

--------------------------------------------------------------------------------
CRITERIOS DE VALORACIÓN Y EVALUACIÓN SEGÚN NUEVA NORMATIVA:
--------------------------------------------------------------------------------
1. Valoración integral de la trayectoria: Presentación de actividades y defensa oral.
2. La acreditación requiere calificación numérica igual o superior a 7 (siete) puntos.
3. Se contempla el acompañamiento presencial en las horas fijadas de contraturno y tutoría.
4. En caso de no alcanzar los objetivos en este período de intensificación, el estudiante
   continuará en la siguiente instancia o accederá al recursado específico del espacio.

--------------------------------------------------------------------------------
CONTENIDOS PRIORITARIOS A EVALUAR:
--------------------------------------------------------------------------------
- Unidad 1: Diagnóstico y conceptos estructurantes del área.
- Unidad 2: Desarrollo de capacidades cognitivas y resolución de problemáticas.
- Unidad 3: Aplicación práctica y articulación de saberes con el año correlativo.

--------------------------------------------------------------------------------
PAUTAS FORMALES DE PRESENTACIÓN:
--------------------------------------------------------------------------------
- Presentar en carpeta individual con carátula oficial (Nombre, Apellido, DNI, Curso y Año).
- Letra legible, prolijidad y constancia de desarrollo paso a paso en ejercicios.
- Entregar en mano al docente evaluador el primer día fijado en el cronograma oficial.

================================================================================
Generado oficialmente por E.E.S. Nº 16 "Fortaleza de los Kilmes" - EduTrayectoria
================================================================================`;

    const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = material.nombreArchivo || `${material.titulo.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        estudianteActivo,
        setEstudianteActivo,
        estudiantes,
        docentes,
        materiales,
        mensajes,
        periodos,
        notasCurso,
        updateNota,
        agregarMaterial,
        eliminarMaterial,
        enviarMensaje,
        responderMensaje,
        asignarDocenteMateria,
        asignarComisionIntensificacion,
        descargarMaterialArchivo
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
}
