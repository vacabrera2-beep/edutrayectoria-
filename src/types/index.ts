export type UserRole = 'estudiante' | 'docente' | 'directivo';

export type RITERating = 'TEA' | 'TEP' | 'TED' | '-';

export type MateriaStatus = 'aprobada' | 'intensificacion' | 'adeudada' | 'cursando' | 'recursar';

export interface MaterialEstudio {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'cuadernillo' | 'modelo_examen' | 'guia_actividades' | 'pautas_recursado';
  tamano: string;
  fechaSubida: string;
  docenteNombre: string;
  materiaNombre: string;
  anio: number;
  nombreArchivo: string;
}

export interface TrayectoriaMateria {
  id: string;
  materiaId: string;
  nombre: string;
  anio: number;
  status: MateriaStatus;
  calificacionFinal: number | null;
  primerCuatrimestreRITE: RITERating;
  segundoCuatrimestreRITE: RITERating;
  intensificacionDiciembre?: string | null;
  intensificacionFebrero?: string | null;
  docenteAsignado: string;
  docenteEmail: string;
  docenteHorarioConsulta: string;
  materiales: MaterialEstudio[];
}

export interface Estudiante {
  id: string;
  nombre: string;
  dni: string;
  cursoActual: string;
  anioActual: number;
  division: string;
  turno: string;
  orientacion: string;
  legajo: string;
  trayectoria: TrayectoriaMateria[];
}

export interface AsignacionDocente {
  materiaNombre: string;
  anio: number;
  curso: string;
  division: string;
  turno: string;
}

export interface ComisionIntensificacion {
  materiaNombre: string;
  anio: number;
  horarioConsulta: string;
  diaSemana: string;
  lugarAula: string;
  alumnosInscriptos: number;
}

export interface Docente {
  id: string;
  nombre: string;
  dni: string;
  email: string;
  telefono: string;
  situacionRevista: 'Titular' | 'Suplente' | 'Provisional';
  antiguedadAnios: number;
  asignaciones: AsignacionDocente[];
  comisionesIntensificacion: ComisionIntensificacion[];
}

export interface PeriodoIntensificacion {
  id: string;
  titulo: string;
  periodo: string;
  fechaInicio: string;
  fechaFin: string;
  tipo: 'diciembre' | 'febrero' | 'contraturno' | 'cierre_cuatrimestre';
  descripcion: string;
  normativaReferencia: string;
  requisitos: string[];
  destinatarios: string;
  activo: boolean;
}

export interface RespuestaMensaje {
  id: string;
  emisor: string;
  texto: string;
  fecha: string;
  rol: UserRole;
}

export interface Mensaje {
  id: string;
  emisorId: string;
  emisorNombre: string;
  emisorRol: UserRole;
  receptorId: string;
  receptorNombre: string;
  receptorRol: UserRole;
  materia: string;
  asunto: string;
  contenido: string;
  fecha: string;
  leido: boolean;
  etiqueta?: 'intensificacion' | 'cursada' | 'consulta_general';
  respuestas: RespuestaMensaje[];
}

export interface NotaCursoRegistro {
  id: string;
  estudianteId: string;
  estudianteNombre: string;
  dni: string;
  materia: string;
  curso: string;
  informe1: RITERating;
  informe2: RITERating;
  intensificacionDic: string;
  intensificacionFeb: string;
  notaFinal: number | string;
  condicion: 'Aprobado' | 'Intensifica Diciembre' | 'Intensifica Febrero' | 'Recursada';
  observaciones: string;
}
