import { 
  Estudiante, 
  Docente, 
  PeriodoIntensificacion, 
  Mensaje, 
  NotaCursoRegistro,
  MaterialEstudio
} from '@/types';

export const MATERIALES_PRECARGADOS: MaterialEstudio[] = [
  {
    id: 'mat-mate-2',
    titulo: 'Cuadernillo Oficial de Intensificación - Matemática 2°°° Año',
    descripcion: 'Contiene los 4 núcleos prioritarios: Números Enteros y Racionales, Ecuaciones de 1° Grado, Proporcionalidad y Geometr?a (Teorema de Pit?goras). Incluye 35 ejercicios prácticos obligatorios para entregar.',
    tipo: 'cuadernillo',
    tamano: '2.4 MB',
    fechaSubida: '15/09/2026',
    docenteNombre: 'Prof. Valeria Castro',
    materiaNombre: 'Matemática',
    anio: 2,
    nombreArchivo: 'Cuadernillo_Intensificacion_Matematica_2do.pdf'
  },
  {
    id: 'mat-mate-2-exam',
    titulo: 'Modelo de Evaluación y Rúbrica de Acreditación - Matemática 2',
    descripcion: 'Ejemplos de consignas y criterios de corrección según la nueva normativa para el período de intensificación de diciembre y febrero.',
    tipo: 'modelo_examen',
    tamano: '850 KB',
    fechaSubida: '28/09/2026',
    docenteNombre: 'Prof. Valeria Castro',
    materiaNombre: 'Matemática',
    anio: 2,
    nombreArchivo: 'Modelo_Examen_Matematica_2do_Diciembre.pdf'
  },
  {
    id: 'mat-hist-3',
    titulo: 'Guía de Fuentes y Análisis Cr?tico - Historia 3°°° Año',
    descripcion: 'Trabajo práctico integrador sobre Conformación del Estado Nacional, Modelo Agroexportador y Movimientos Obreros. Requisito para la instancia de coloquio.',
    tipo: 'guia_actividades',
    tamano: '3.1 MB',
    fechaSubida: '10/09/2026',
    docenteNombre: 'Prof. Diego Morales',
    materiaNombre: 'Historia',
    anio: 3,
    nombreArchivo: 'Guia_Fuentes_Historia_3ro_Intensificacion.pdf'
  },
  {
    id: 'mat-norm-rec',
    titulo: 'Pautas de Recursado y Articulaci?n de Materias Pendientes',
    descripcion: 'Documento normativo institucional: C?mo funciona el cursado en contraturno, cupos máximos de materias adeudadas simultáneas y cronograma de comisiones evaluadoras.',
    tipo: 'pautas_recursado',
    tamano: '1.2 MB',
    fechaSubida: '01/08/2026',
    docenteNombre: 'Equipo Directivo / Preceptoría',
    materiaNombre: 'Institucional',
    anio: 4,
    nombreArchivo: 'Pautas_Institucionales_Recursado_2026.pdf'
  },
  {
    id: 'mat-fisqui-2',
    titulo: 'Cuadernillo Teórico-Práctico - Físico-Química 2°°° Año',
    descripcion: 'Estados de la materia, sistemas materiales, tabla periódica y transformaciones químicas. Guía con actividades de laboratorio explicadas.',
    tipo: 'cuadernillo',
    tamano: '1.8 MB',
    fechaSubida: '05/09/2026',
    docenteNombre: 'Prof. Gabriel Fernández',
    materiaNombre: 'Físico-Química',
    anio: 2,
    nombreArchivo: 'Cuadernillo_FisicoQuimica_2do_Anio.pdf'
  }
];

export const ESTUDIANTES_MOCK: Estudiante[] = [
  {
    id: 'est-1',
    nombre: 'Lucas Benítez',
    dni: '48.912.456',
    cursoActual: '4° 2da',
    anioActual: 4,
    division: '2da',
    turno: 'Mañana',
    orientacion: 'Ciencias Sociales',
    legajo: 'LEG-2023-418',
    trayectoria: [
      // 1 A?O - TODAS APROBADAS
      {
        id: 't-1-1',
        materiaId: 'm-mat-1',
        nombre: 'Matemática',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Carlos Rossi',
        docenteEmail: 'carlos.rossi@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 11:30 - 12:50',
        materiales: []
      },
      {
        id: 't-1-2',
        materiaId: 'm-leng-1',
        nombre: 'Prácticas del Lenguaje',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 9,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Domínguez',
        docenteEmail: 'silvina.dominguez@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes 09:00 - 10:20',
        materiales: []
      },
      {
        id: 't-1-3',
        materiaId: 'm-cs-1',
        nombre: 'Ciencias Sociales',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Diego Morales',
        docenteEmail: 'diego.morales@escuela.edu.ar',
        docenteHorarioConsulta: 'Miércoles 10:00 - 11:30',
        materiales: []
      },
      {
        id: 't-1-4',
        materiaId: 'm-cn-1',
        nombre: 'Ciencias Naturales',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Gabriel Fernández',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 08:00 - 09:30',
        materiales: []
      },
      {
        id: 't-1-5',
        materiaId: 'm-ing-1',
        nombre: 'Inglés',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Mariana López',
        docenteEmail: 'mariana.lopez@escuela.edu.ar',
        docenteHorarioConsulta: 'Jueves 13:00 - 14:20',
        materiales: []
      },

      // 2 A?O - MATEM?TICA ADEUDADA
      {
        id: 't-2-1',
        materiaId: 'm-mat-2',
        nombre: 'Matemática',
        anio: 2,
        status: 'adeudada',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEP',
        segundoCuatrimestreRITE: 'TED',
        intensificacionDiciembre: 'Present? cuadernillo incompleto (Calificación: 5)',
        intensificacionFebrero: 'Pendiente de acreditación',
        docenteAsignado: 'Prof. Valeria Castro',
        docenteEmail: 'valeria.castro@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes 14:00 - 15:30 hs (Aula 12)',
        materiales: [
          MATERIALES_PRECARGADOS[0],
          MATERIALES_PRECARGADOS[1]
        ]
      },
      {
        id: 't-2-2',
        materiaId: 'm-leng-2',
        nombre: 'Prácticas del Lenguaje',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Domínguez',
        docenteEmail: 'silvina.dominguez@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes 09:00 - 10:20',
        materiales: []
      },
      {
        id: 't-2-3',
        materiaId: 'm-hist-2',
        nombre: 'Historia',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Diego Morales',
        docenteEmail: 'diego.morales@escuela.edu.ar',
        docenteHorarioConsulta: 'Miércoles 10:00 - 11:30',
        materiales: []
      },
      {
        id: 't-2-4',
        materiaId: 'm-geog-2',
        nombre: 'Geografía',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Lucía Vázquez',
        docenteEmail: 'lucia.vazquez@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 14:00 - 15:20',
        materiales: []
      },
      {
        id: 't-2-5',
        materiaId: 'm-fisqui-2',
        nombre: 'Físico-Química',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEP',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Gabriel Fernández',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 08:00 - 09:30',
        materiales: []
      },

      // 3 A?O - HISTORIA ADEUDADA
      {
        id: 't-3-1',
        materiaId: 'm-mat-3',
        nombre: 'Matemática',
        anio: 3,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Roberto Gómez',
        docenteEmail: 'roberto.gomez@escuela.edu.ar',
        docenteHorarioConsulta: 'Jueves 10:40 - 12:00',
        materiales: []
      },
      {
        id: 't-3-2',
        materiaId: 'm-leng-3',
        nombre: 'Prácticas del Lenguaje',
        anio: 3,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Domínguez',
        docenteEmail: 'silvina.dominguez@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes 09:00 - 10:20',
        materiales: []
      },
      {
        id: 't-3-3',
        materiaId: 'm-hist-3',
        nombre: 'Historia',
        anio: 3,
        status: 'adeudada',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TED',
        segundoCuatrimestreRITE: 'TEP',
        intensificacionDiciembre: 'No se present? a la instancia oral',
        intensificacionFebrero: 'Pendiente de acreditación',
        docenteAsignado: 'Prof. Diego Morales',
        docenteEmail: 'diego.morales@escuela.edu.ar',
        docenteHorarioConsulta: 'Miércoles 10:00 - 11:30 hs (Aula 8)',
        materiales: [
          MATERIALES_PRECARGADOS[2]
        ]
      },
      {
        id: 't-3-4',
        materiaId: 'm-biol-3',
        nombre: 'Biología',
        anio: 3,
        status: 'aprobada',
        calificacionFinal: 9,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Laura Quiroga',
        docenteEmail: 'laura.quiroga@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 08:00 - 09:20',
        materiales: []
      },

      // 4 A?O - A?O ACTUAL (CURSANDO)
      {
        id: 't-4-1',
        materiaId: 'm-mat-4',
        nombre: 'Matemática',
        anio: 4,
        status: 'intensificacion',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEP',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Valeria Castro',
        docenteEmail: 'valeria.castro@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes y Jueves 07:45 - 09:45',
        materiales: []
      },
      {
        id: 't-4-2',
        materiaId: 'm-lit-4',
        nombre: 'Literatura',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Silvina Domínguez',
        docenteEmail: 'silvina.dominguez@escuela.edu.ar',
        docenteHorarioConsulta: 'Miércoles 08:00 - 10:00',
        materiales: []
      },
      {
        id: 't-4-3',
        materiaId: 'm-hist-4',
        nombre: 'Historia',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Diego Morales',
        docenteEmail: 'diego.morales@escuela.edu.ar',
        docenteHorarioConsulta: 'Jueves 10:00 - 12:00',
        materiales: []
      },
      {
        id: 't-4-4',
        materiaId: 'm-geog-4',
        nombre: 'Geografía',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Lucía Vázquez',
        docenteEmail: 'lucia.vazquez@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 10:00 - 11:30',
        materiales: []
      },
      {
        id: 't-4-5',
        materiaId: 'm-fis-4',
        nombre: 'Física',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Gabriel Fernández',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 10:00 - 12:00',
        materiales: []
      },
      {
        id: 't-4-6',
        materiaId: 'm-nticx-4',
        nombre: 'NTICx (Nuevas Tecnologías)',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Martín Peralta',
        docenteEmail: 'martin.peralta@escuela.edu.ar',
        docenteHorarioConsulta: 'Martes 10:00 - 12:00',
        materiales: []
      }
    ]
  },
  {
    id: 'est-2',
    nombre: 'Martina Rossi',
    dni: '49.123.890',
    cursoActual: '3° 1ra',
    anioActual: 3,
    division: '1ra',
    turno: 'Tarde',
    orientacion: 'Ciclo Básico',
    legajo: 'LEG-2024-112',
    trayectoria: [
      {
        id: 't-mr-1',
        materiaId: 'm-fisqui-2',
        nombre: 'Físico-Química',
        anio: 2,
        status: 'adeudada',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TED',
        segundoCuatrimestreRITE: 'TEP',
        docenteAsignado: 'Prof. Gabriel Fernández',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 14:00 - 15:30',
        materiales: [MATERIALES_PRECARGADOS[4]]
      }
    ]
  },
  {
    id: 'est-3',
    nombre: 'Joaquín Silva',
    dni: '47.550.210',
    cursoActual: '5° 1ra',
    anioActual: 5,
    division: '1ra',
    turno: 'Mañana',
    orientacion: 'Economía y Administración',
    legajo: 'LEG-2022-094',
    trayectoria: []
  }
];

export const DOCENTES_MOCK: Docente[] = [
  {
    id: 'doc-valeria',
    nombre: 'Prof. Valeria Castro',
    dni: '29.345.678',
    email: 'valeria.castro@escuela.edu.ar',
    telefono: '+54 11 4455-8899',
    situacionRevista: 'Titular',
    antiguedadAnios: 12,
    asignaciones: [
      { materiaNombre: 'Matemática', anio: 2, curso: '2° 1ra', division: '1ra', turno: 'Mañana' },
      { materiaNombre: 'Matemática', anio: 4, curso: '4° 2da', division: '2da', turno: 'Mañana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Matemática',
        anio: 2,
        horarioConsulta: 'Martes 14:00 - 15:30 hs',
        diaSemana: 'Martes',
        lugarAula: 'Aula 12 (Contraturno)',
        alumnosInscriptos: 8
      },
      {
        materiaNombre: 'Matemática',
        anio: 4,
        horarioConsulta: 'Jueves 14:00 - 15:30 hs',
        diaSemana: 'Jueves',
        lugarAula: 'Aula Magna',
        alumnosInscriptos: 5
      }
    ]
  },
  {
    id: 'doc-diego',
    nombre: 'Prof. Diego Morales',
    dni: '27.890.123',
    email: 'diego.morales@escuela.edu.ar',
    telefono: '+54 11 5566-7788',
    situacionRevista: 'Titular',
    antiguedadAnios: 15,
    asignaciones: [
      { materiaNombre: 'Historia', anio: 3, curso: '3° 2da', division: '2da', turno: 'Mañana' },
      { materiaNombre: 'Historia', anio: 4, curso: '4° 2da', division: '2da', turno: 'Mañana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Historia',
        anio: 3,
        horarioConsulta: 'Miércoles 10:00 - 11:30 hs',
        diaSemana: 'Miércoles',
        lugarAula: 'Aula 8',
        alumnosInscriptos: 6
      }
    ]
  },
  {
    id: 'doc-silvina',
    nombre: 'Prof. Silvina Domínguez',
    dni: '31.234.567',
    email: 'silvina.dominguez@escuela.edu.ar',
    telefono: '+54 11 6677-8899',
    situacionRevista: 'Titular',
    antiguedadAnios: 9,
    asignaciones: [
      { materiaNombre: 'Literatura', anio: 4, curso: '4° 2da', division: '2da', turno: 'Mañana' },
      { materiaNombre: 'Prácticas del Lenguaje', anio: 1, curso: '1° 1ra', division: '1ra', turno: 'Mañana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Prácticas del Lenguaje',
        anio: 1,
        horarioConsulta: 'Lunes 14:00 - 15:30 hs',
        diaSemana: 'Lunes',
        lugarAula: 'Biblioteca',
        alumnosInscriptos: 3
      }
    ]
  },
  {
    id: 'doc-gabriel',
    nombre: 'Prof. Gabriel Fernández',
    dni: '30.123.456',
    email: 'gabriel.fernandez@escuela.edu.ar',
    telefono: '+54 11 7788-9900',
    situacionRevista: 'Provisional',
    antiguedadAnios: 6,
    asignaciones: [
      { materiaNombre: 'Físico-Química', anio: 2, curso: '2° 1ra', division: '1ra', turno: 'Tarde' },
      { materiaNombre: 'Física', anio: 4, curso: '4° 2da', division: '2da', turno: 'Mañana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Físico-Química',
        anio: 2,
        horarioConsulta: 'Viernes 14:00 - 15:30 hs',
        diaSemana: 'Viernes',
        lugarAula: 'Laboratorio de Ciencias',
        alumnosInscriptos: 7
      }
    ]
  }
];

export const PERIODOS_INTENSIFICACION_MOCK: PeriodoIntensificacion[] = [
  {
    id: 'per-dic-2026',
    titulo: 'Período de Intensificación de Diciembre 2026',
    periodo: '09/12/2026 al 22/12/2026',
    fechaInicio: '2026-12-09',
    fechaFin: '2026-12-22',
    tipo: 'diciembre',
    descripcion: 'Instancia presencial intensiva para estudiantes que obtuvieron valoración TEP (En Proceso) o TED (Discontinua) en la cursada del año en curso, y para estudiantes con materias pendientes/adeudadas de años previos.',
    normativaReferencia: 'Régimen Académico Marco - Resolución CFE y Disposición Provincial DGCyE',
    requisitos: [
      'Presentación obligatoria del Cuadernillo de Actividades completo y corregido en mano.',
      'Asistencia mínima al 80% de los encuentros de intensificación en el horario fijado.',
      'Defensa individual o coloquio con el docente de la comisión evaluadora.',
      'Acreditación con nota numérica igual o superior a 7 (siete).'
    ],
    destinatarios: 'Alumnos que adeudan materias de años anteriores y alumnos que no alcanzaron TEA en el 2° informe del ciclo lectivo.',
    activo: true
  },
  {
    id: 'per-feb-2027',
    titulo: 'Período de Intensificación de Febrero / Marzo 2027',
    periodo: '15/02/2027 al 27/02/2027',
    fechaInicio: '2027-02-15',
    fechaFin: '2027-02-27',
    tipo: 'febrero',
    descripcion: 'Segunda instancia de intensificación antes del inicio formal del Ciclo Lectivo 2027. Instancia decisiva para determinar la condición de acreditación final o pase a recursado específico de la materia.',
    normativaReferencia: 'Art. 42 a 48 - Régimen de Acreditación y Promoción',
    requisitos: [
      'Inscripción previa en Preceptoría antes del 10 de Febrero.',
      'Carpeta de intensificación con devoluciones de Diciembre cumplimentadas.',
      'Evaluación escrita u oral ante la comisión docente evaluadora.'
    ],
    destinatarios: 'Estudiantes que no acreditaron en Diciembre 2026 o con materias pendientes de arrastre.',
    activo: false
  },
  {
    id: 'per-contraturno-2026',
    titulo: 'Dispositivo Institucional de Acompañamiento en Contraturno',
    periodo: '01/09/2026 al 30/11/2026',
    fechaInicio: '2026-09-01',
    fechaFin: '2026-11-30',
    tipo: 'contraturno',
    descripcion: 'Clases semanales de 80 minutos fuera del turno habitual de cursada destinadas a estudiantes que adeudan espacios curriculares de años anteriores.',
    normativaReferencia: 'Estrategias de Fortalecimiento de las Trayectorias Educativas',
    requisitos: [
      'Asistencia semanal al aula designada.',
      'Seguimiento continuo con el profesor a cargo.'
    ],
    destinatarios: 'Estudiantes con 1 o más materias adeudadas de 1, 2 o 3° año.',
    activo: true
  }
];

export const NOTAS_CURSO_4TO2DA_MATEMATICA: NotaCursoRegistro[] = [
  {
    id: 'not-1',
    estudianteId: 'est-1',
    estudianteNombre: 'Benítez, Lucas',
    dni: '48.912.456',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEP',
    informe2: 'TEP',
    intensificacionDic: 'Pendiente',
    intensificacionFeb: '-',
    notaFinal: '-',
    condicion: 'Intensifica Diciembre',
    observaciones: 'Adeuda además Matemática de 2° año. Asiste a contraturno los martes.'
  },
  {
    id: 'not-2',
    estudianteId: 'est-20',
    estudianteNombre: 'Alonso, Sofía',
    dni: '48.887.112',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 9,
    condicion: 'Aprobado',
    observaciones: 'Trayectoria destacada. Trabajos completos.'
  },
  {
    id: 'not-3',
    estudianteId: 'est-21',
    estudianteNombre: 'Carrizo, Bautista',
    dni: '48.654.321',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 8,
    condicion: 'Aprobado',
    observaciones: 'Acredit? aprendizajes esperados.'
  },
  {
    id: 'not-4',
    estudianteId: 'est-22',
    estudianteNombre: 'Díaz, Candela',
    dni: '48.334.890',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEP',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 7,
    condicion: 'Aprobado',
    observaciones: 'Logr? recuperar contenidos prioritarios en el 2 cuatrimestre.'
  },
  {
    id: 'not-5',
    estudianteId: 'est-23',
    estudianteNombre: 'Gómez, Matías',
    dni: '48.777.654',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TED',
    informe2: 'TED',
    intensificacionDic: 'Pendiente',
    intensificacionFeb: '-',
    notaFinal: '-',
    condicion: 'Intensifica Diciembre',
    observaciones: 'Baja asistencia. Requiere intensificación prioritaria.'
  },
  {
    id: 'not-6',
    estudianteId: 'est-24',
    estudianteNombre: 'López, Camila',
    dni: '48.900.123',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 10,
    condicion: 'Aprobado',
    observaciones: 'Excelente rendimiento y participación constante.'
  },
  {
    id: 'not-7',
    estudianteId: 'est-25',
    estudianteNombre: 'Martínez, Mateo',
    dni: '48.456.789',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEP',
    informe2: 'TEP',
    intensificacionDic: 'Pendiente',
    intensificacionFeb: '-',
    notaFinal: '-',
    condicion: 'Intensifica Diciembre',
    observaciones: 'Debe entregar cuadernillo de funciones.'
  },
  {
    id: 'not-8',
    estudianteId: 'est-26',
    estudianteNombre: 'Navarro, Valentina',
    dni: '48.222.111',
    materia: 'Matemática',
    curso: '4° 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 8,
    condicion: 'Aprobado',
    observaciones: 'Aprobada sin necesidad de intensificación.'
  }
];

export const MENSAJES_INICIALES: Mensaje[] = [
  {
    id: 'msg-1',
    emisorId: 'est-1',
    emisorNombre: 'Lucas Benítez',
    emisorRol: 'estudiante',
    receptorId: 'doc-valeria',
    receptorNombre: 'Prof. Valeria Castro',
    receptorRol: 'docente',
    materia: 'Matemática (Adeudada de 2° año)',
    asunto: 'Consulta sobre entrega de ejercicios del Cuadernillo de 2° año',
    contenido: 'Buenas tardes Profesora Valeria, quería consultarle si los ejercicios del módulo de Ecuaciones se entregan en hojas aparte o en la misma carpeta el día del período de intensificación de diciembre. Ya completé la primera parte.',
    fecha: '02/10/2026 15:40',
    leido: true,
    etiqueta: 'intensificacion',
    respuestas: [
      {
        id: 'resp-1',
        emisor: 'Prof. Valeria Castro',
        texto: 'Hola Lucas! Muy bien por avanzar. Por favor presentalos en hojas de carpeta numeradas con tu nombre y apellido, listos para la defensa oral que haremos el primer día de la intensificación. Este martes en el contraturno de 14:00 a 15:30 podés traérmelos para una primera revisión si querés.',
        fecha: '02/10/2026 18:15',
        rol: 'docente'
      }
    ]
  },
  {
    id: 'msg-2',
    emisorId: 'est-1',
    emisorNombre: 'Lucas Benítez',
    emisorRol: 'estudiante',
    receptorId: 'doc-diego',
    receptorNombre: 'Prof. Diego Morales',
    receptorRol: 'docente',
    materia: 'Historia (Adeudada de 3° año)',
    asunto: 'Material para el coloquio de Historia 3',
    contenido: 'Profesor Morales, descargué la guía de fuentes de 3° año. ?El coloquio de diciembre incluye la unidad de la Generación del 80 o solo hasta la consolidaci?n del Estado Nacional?',
    fecha: '04/10/2026 11:20',
    leido: true,
    etiqueta: 'intensificacion',
    respuestas: [
      {
        id: 'resp-2',
        emisor: 'Prof. Diego Morales',
        texto: 'Hola Lucas. Incluye hasta la Generación del 80 inclusive. En la guía tenés los fragmentos de texto específicos a analizar. Acercate el miércoles al aula 8 a las 10:00 si tenés dudas con el texto de Halperin Donghi.',
        fecha: '04/10/2026 14:00',
        rol: 'docente'
      }
    ]
  }
];
