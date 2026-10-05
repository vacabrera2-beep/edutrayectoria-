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
    titulo: 'Cuadernillo Oficial de Intensificaci?n - Matem?tica 2? A?o',
    descripcion: 'Contiene los 4 n?cleos prioritarios: N?meros Enteros y Racionales, Ecuaciones de 1? Grado, Proporcionalidad y Geometr?a (Teorema de Pit?goras). Incluye 35 ejercicios pr?cticos obligatorios para entregar.',
    tipo: 'cuadernillo',
    tamano: '2.4 MB',
    fechaSubida: '15/09/2026',
    docenteNombre: 'Prof. Valeria Castro',
    materiaNombre: 'Matem?tica',
    anio: 2,
    nombreArchivo: 'Cuadernillo_Intensificacion_Matematica_2do.pdf'
  },
  {
    id: 'mat-mate-2-exam',
    titulo: 'Modelo de Evaluaci?n y R?brica de Acreditaci?n - Matem?tica 2?',
    descripcion: 'Ejemplos de consignas y criterios de correcci?n seg?n la nueva normativa para el per?odo de intensificaci?n de diciembre y febrero.',
    tipo: 'modelo_examen',
    tamano: '850 KB',
    fechaSubida: '28/09/2026',
    docenteNombre: 'Prof. Valeria Castro',
    materiaNombre: 'Matem?tica',
    anio: 2,
    nombreArchivo: 'Modelo_Examen_Matematica_2do_Diciembre.pdf'
  },
  {
    id: 'mat-hist-3',
    titulo: 'Gu?a de Fuentes y An?lisis Cr?tico - Historia 3? A?o',
    descripcion: 'Trabajo pr?ctico integrador sobre Conformaci?n del Estado Nacional, Modelo Agroexportador y Movimientos Obreros. Requisito para la instancia de coloquio.',
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
    descripcion: 'Documento normativo institucional: C?mo funciona el cursado en contraturno, cupos m?ximos de materias adeudadas simult?neas y cronograma de comisiones evaluadoras.',
    tipo: 'pautas_recursado',
    tamano: '1.2 MB',
    fechaSubida: '01/08/2026',
    docenteNombre: 'Equipo Directivo / Preceptor?a',
    materiaNombre: 'Institucional',
    anio: 4,
    nombreArchivo: 'Pautas_Institucionales_Recursado_2026.pdf'
  },
  {
    id: 'mat-fisqui-2',
    titulo: 'Cuadernillo Te?rico-Pr?ctico - F?sico-Qu?mica 2? A?o',
    descripcion: 'Estados de la materia, sistemas materiales, tabla peri?dica y transformaciones qu?micas. Gu?a con actividades de laboratorio explicadas.',
    tipo: 'cuadernillo',
    tamano: '1.8 MB',
    fechaSubida: '05/09/2026',
    docenteNombre: 'Prof. Gabriel Fern?ndez',
    materiaNombre: 'F?sico-Qu?mica',
    anio: 2,
    nombreArchivo: 'Cuadernillo_FisicoQuimica_2do_Anio.pdf'
  }
];

export const ESTUDIANTES_MOCK: Estudiante[] = [
  {
    id: 'est-1',
    nombre: 'Lucas Ben?tez',
    dni: '48.912.456',
    cursoActual: '4? 2da',
    anioActual: 4,
    division: '2da',
    turno: 'Ma?ana',
    orientacion: 'Ciencias Sociales',
    legajo: 'LEG-2023-418',
    trayectoria: [
      // 1? A?O - TODAS APROBADAS
      {
        id: 't-1-1',
        materiaId: 'm-mat-1',
        nombre: 'Matem?tica',
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
        nombre: 'Pr?cticas del Lenguaje',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 9,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Dom?nguez',
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
        docenteHorarioConsulta: 'Mi?rcoles 10:00 - 11:30',
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
        docenteAsignado: 'Prof. Gabriel Fern?ndez',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 08:00 - 09:30',
        materiales: []
      },
      {
        id: 't-1-5',
        materiaId: 'm-ing-1',
        nombre: 'Ingl?s',
        anio: 1,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Mariana L?pez',
        docenteEmail: 'mariana.lopez@escuela.edu.ar',
        docenteHorarioConsulta: 'Jueves 13:00 - 14:20',
        materiales: []
      },

      // 2? A?O - MATEM?TICA ADEUDADA
      {
        id: 't-2-1',
        materiaId: 'm-mat-2',
        nombre: 'Matem?tica',
        anio: 2,
        status: 'adeudada',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEP',
        segundoCuatrimestreRITE: 'TED',
        intensificacionDiciembre: 'Present? cuadernillo incompleto (Calificaci?n: 5)',
        intensificacionFebrero: 'Pendiente de acreditaci?n',
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
        nombre: 'Pr?cticas del Lenguaje',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Dom?nguez',
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
        docenteHorarioConsulta: 'Mi?rcoles 10:00 - 11:30',
        materiales: []
      },
      {
        id: 't-2-4',
        materiaId: 'm-geog-2',
        nombre: 'Geograf?a',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Luc?a V?zquez',
        docenteEmail: 'lucia.vazquez@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 14:00 - 15:20',
        materiales: []
      },
      {
        id: 't-2-5',
        materiaId: 'm-fisqui-2',
        nombre: 'F?sico-Qu?mica',
        anio: 2,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEP',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Gabriel Fern?ndez',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 08:00 - 09:30',
        materiales: []
      },

      // 3? A?O - HISTORIA ADEUDADA
      {
        id: 't-3-1',
        materiaId: 'm-mat-3',
        nombre: 'Matem?tica',
        anio: 3,
        status: 'aprobada',
        calificacionFinal: 7,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Roberto G?mez',
        docenteEmail: 'roberto.gomez@escuela.edu.ar',
        docenteHorarioConsulta: 'Jueves 10:40 - 12:00',
        materiales: []
      },
      {
        id: 't-3-2',
        materiaId: 'm-leng-3',
        nombre: 'Pr?cticas del Lenguaje',
        anio: 3,
        status: 'aprobada',
        calificacionFinal: 8,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: 'TEA',
        docenteAsignado: 'Prof. Silvina Dom?nguez',
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
        intensificacionFebrero: 'Pendiente de acreditaci?n',
        docenteAsignado: 'Prof. Diego Morales',
        docenteEmail: 'diego.morales@escuela.edu.ar',
        docenteHorarioConsulta: 'Mi?rcoles 10:00 - 11:30 hs (Aula 8)',
        materiales: [
          MATERIALES_PRECARGADOS[2]
        ]
      },
      {
        id: 't-3-4',
        materiaId: 'm-biol-3',
        nombre: 'Biolog?a',
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

      // 4? A?O - A?O ACTUAL (CURSANDO)
      {
        id: 't-4-1',
        materiaId: 'm-mat-4',
        nombre: 'Matem?tica',
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
        docenteAsignado: 'Prof. Silvina Dom?nguez',
        docenteEmail: 'silvina.dominguez@escuela.edu.ar',
        docenteHorarioConsulta: 'Mi?rcoles 08:00 - 10:00',
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
        nombre: 'Geograf?a',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Luc?a V?zquez',
        docenteEmail: 'lucia.vazquez@escuela.edu.ar',
        docenteHorarioConsulta: 'Lunes 10:00 - 11:30',
        materiales: []
      },
      {
        id: 't-4-5',
        materiaId: 'm-fis-4',
        nombre: 'F?sica',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Gabriel Fern?ndez',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 10:00 - 12:00',
        materiales: []
      },
      {
        id: 't-4-6',
        materiaId: 'm-nticx-4',
        nombre: 'NTICx (Nuevas Tecnolog?as)',
        anio: 4,
        status: 'cursando',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TEA',
        segundoCuatrimestreRITE: '-',
        docenteAsignado: 'Prof. Mart?n Peralta',
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
    cursoActual: '3? 1ra',
    anioActual: 3,
    division: '1ra',
    turno: 'Tarde',
    orientacion: 'Ciclo B?sico',
    legajo: 'LEG-2024-112',
    trayectoria: [
      {
        id: 't-mr-1',
        materiaId: 'm-fisqui-2',
        nombre: 'F?sico-Qu?mica',
        anio: 2,
        status: 'adeudada',
        calificacionFinal: null,
        primerCuatrimestreRITE: 'TED',
        segundoCuatrimestreRITE: 'TEP',
        docenteAsignado: 'Prof. Gabriel Fern?ndez',
        docenteEmail: 'gabriel.fernandez@escuela.edu.ar',
        docenteHorarioConsulta: 'Viernes 14:00 - 15:30',
        materiales: [MATERIALES_PRECARGADOS[4]]
      }
    ]
  },
  {
    id: 'est-3',
    nombre: 'Joaqu?n Silva',
    dni: '47.550.210',
    cursoActual: '5? 1ra',
    anioActual: 5,
    division: '1ra',
    turno: 'Ma?ana',
    orientacion: 'Econom?a y Administraci?n',
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
      { materiaNombre: 'Matem?tica', anio: 2, curso: '2? 1ra', division: '1ra', turno: 'Ma?ana' },
      { materiaNombre: 'Matem?tica', anio: 4, curso: '4? 2da', division: '2da', turno: 'Ma?ana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Matem?tica',
        anio: 2,
        horarioConsulta: 'Martes 14:00 - 15:30 hs',
        diaSemana: 'Martes',
        lugarAula: 'Aula 12 (Contraturno)',
        alumnosInscriptos: 8
      },
      {
        materiaNombre: 'Matem?tica',
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
      { materiaNombre: 'Historia', anio: 3, curso: '3? 2da', division: '2da', turno: 'Ma?ana' },
      { materiaNombre: 'Historia', anio: 4, curso: '4? 2da', division: '2da', turno: 'Ma?ana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Historia',
        anio: 3,
        horarioConsulta: 'Mi?rcoles 10:00 - 11:30 hs',
        diaSemana: 'Mi?rcoles',
        lugarAula: 'Aula 8',
        alumnosInscriptos: 6
      }
    ]
  },
  {
    id: 'doc-silvina',
    nombre: 'Prof. Silvina Dom?nguez',
    dni: '31.234.567',
    email: 'silvina.dominguez@escuela.edu.ar',
    telefono: '+54 11 6677-8899',
    situacionRevista: 'Titular',
    antiguedadAnios: 9,
    asignaciones: [
      { materiaNombre: 'Literatura', anio: 4, curso: '4? 2da', division: '2da', turno: 'Ma?ana' },
      { materiaNombre: 'Pr?cticas del Lenguaje', anio: 1, curso: '1? 1ra', division: '1ra', turno: 'Ma?ana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'Pr?cticas del Lenguaje',
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
    nombre: 'Prof. Gabriel Fern?ndez',
    dni: '30.123.456',
    email: 'gabriel.fernandez@escuela.edu.ar',
    telefono: '+54 11 7788-9900',
    situacionRevista: 'Provisional',
    antiguedadAnios: 6,
    asignaciones: [
      { materiaNombre: 'F?sico-Qu?mica', anio: 2, curso: '2? 1ra', division: '1ra', turno: 'Tarde' },
      { materiaNombre: 'F?sica', anio: 4, curso: '4? 2da', division: '2da', turno: 'Ma?ana' }
    ],
    comisionesIntensificacion: [
      {
        materiaNombre: 'F?sico-Qu?mica',
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
    titulo: 'Per?odo de Intensificaci?n de Diciembre 2026',
    periodo: '09/12/2026 al 22/12/2026',
    fechaInicio: '2026-12-09',
    fechaFin: '2026-12-22',
    tipo: 'diciembre',
    descripcion: 'Instancia presencial intensiva para estudiantes que obtuvieron valoraci?n TEP (En Proceso) o TED (Discontinua) en la cursada del a?o en curso, y para estudiantes con materias pendientes/adeudadas de a?os previos.',
    normativaReferencia: 'R?gimen Acad?mico Marco - Resoluci?n CFE y Disposici?n Provincial DGCyE',
    requisitos: [
      'Presentaci?n obligatoria del Cuadernillo de Actividades completo y corregido en mano.',
      'Asistencia m?nima al 80% de los encuentros de intensificaci?n en el horario fijado.',
      'Defensa individual o coloquio con el docente de la comisi?n evaluadora.',
      'Acreditaci?n con nota num?rica igual o superior a 7 (siete).'
    ],
    destinatarios: 'Alumnos que adeudan materias de a?os anteriores y alumnos que no alcanzaron TEA en el 2? informe del ciclo lectivo.',
    activo: true
  },
  {
    id: 'per-feb-2027',
    titulo: 'Per?odo de Intensificaci?n de Febrero / Marzo 2027',
    periodo: '15/02/2027 al 27/02/2027',
    fechaInicio: '2027-02-15',
    fechaFin: '2027-02-27',
    tipo: 'febrero',
    descripcion: 'Segunda instancia de intensificaci?n antes del inicio formal del Ciclo Lectivo 2027. Instancia decisiva para determinar la condici?n de acreditaci?n final o pase a recursado espec?fico de la materia.',
    normativaReferencia: 'Art. 42 a 48 - R?gimen de Acreditaci?n y Promoci?n',
    requisitos: [
      'Inscripci?n previa en Preceptor?a antes del 10 de Febrero.',
      'Carpeta de intensificaci?n con devoluciones de Diciembre cumplimentadas.',
      'Evaluaci?n escrita u oral ante la comisi?n docente evaluadora.'
    ],
    destinatarios: 'Estudiantes que no acreditaron en Diciembre 2026 o con materias pendientes de arrastre.',
    activo: false
  },
  {
    id: 'per-contraturno-2026',
    titulo: 'Dispositivo Institucional de Acompa?amiento en Contraturno',
    periodo: '01/09/2026 al 30/11/2026',
    fechaInicio: '2026-09-01',
    fechaFin: '2026-11-30',
    tipo: 'contraturno',
    descripcion: 'Clases semanales de 80 minutos fuera del turno habitual de cursada destinadas a estudiantes que adeudan espacios curriculares de a?os anteriores.',
    normativaReferencia: 'Estrategias de Fortalecimiento de las Trayectorias Educativas',
    requisitos: [
      'Asistencia semanal al aula designada.',
      'Seguimiento continuo con el profesor a cargo.'
    ],
    destinatarios: 'Estudiantes con 1 o m?s materias adeudadas de 1?, 2? o 3? a?o.',
    activo: true
  }
];

export const NOTAS_CURSO_4TO2DA_MATEMATICA: NotaCursoRegistro[] = [
  {
    id: 'not-1',
    estudianteId: 'est-1',
    estudianteNombre: 'Ben?tez, Lucas',
    dni: '48.912.456',
    materia: 'Matem?tica',
    curso: '4? 2da',
    informe1: 'TEP',
    informe2: 'TEP',
    intensificacionDic: 'Pendiente',
    intensificacionFeb: '-',
    notaFinal: '-',
    condicion: 'Intensifica Diciembre',
    observaciones: 'Adeuda adem?s Matem?tica de 2? a?o. Asiste a contraturno los martes.'
  },
  {
    id: 'not-2',
    estudianteId: 'est-20',
    estudianteNombre: 'Alonso, Sof?a',
    dni: '48.887.112',
    materia: 'Matem?tica',
    curso: '4? 2da',
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
    materia: 'Matem?tica',
    curso: '4? 2da',
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
    estudianteNombre: 'D?az, Candela',
    dni: '48.334.890',
    materia: 'Matem?tica',
    curso: '4? 2da',
    informe1: 'TEP',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 7,
    condicion: 'Aprobado',
    observaciones: 'Logr? recuperar contenidos prioritarios en el 2? cuatrimestre.'
  },
  {
    id: 'not-5',
    estudianteId: 'est-23',
    estudianteNombre: 'G?mez, Mat?as',
    dni: '48.777.654',
    materia: 'Matem?tica',
    curso: '4? 2da',
    informe1: 'TED',
    informe2: 'TED',
    intensificacionDic: 'Pendiente',
    intensificacionFeb: '-',
    notaFinal: '-',
    condicion: 'Intensifica Diciembre',
    observaciones: 'Baja asistencia. Requiere intensificaci?n prioritaria.'
  },
  {
    id: 'not-6',
    estudianteId: 'est-24',
    estudianteNombre: 'L?pez, Camila',
    dni: '48.900.123',
    materia: 'Matem?tica',
    curso: '4? 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 10,
    condicion: 'Aprobado',
    observaciones: 'Excelente rendimiento y participaci?n constante.'
  },
  {
    id: 'not-7',
    estudianteId: 'est-25',
    estudianteNombre: 'Mart?nez, Mateo',
    dni: '48.456.789',
    materia: 'Matem?tica',
    curso: '4? 2da',
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
    materia: 'Matem?tica',
    curso: '4? 2da',
    informe1: 'TEA',
    informe2: 'TEA',
    intensificacionDic: '-',
    intensificacionFeb: '-',
    notaFinal: 8,
    condicion: 'Aprobado',
    observaciones: 'Aprobada sin necesidad de intensificaci?n.'
  }
];

export const MENSAJES_INICIALES: Mensaje[] = [
  {
    id: 'msg-1',
    emisorId: 'est-1',
    emisorNombre: 'Lucas Ben?tez',
    emisorRol: 'estudiante',
    receptorId: 'doc-valeria',
    receptorNombre: 'Prof. Valeria Castro',
    receptorRol: 'docente',
    materia: 'Matem?tica (Adeudada de 2? a?o)',
    asunto: 'Consulta sobre entrega de ejercicios del Cuadernillo de 2? a?o',
    contenido: 'Buenas tardes Profesora Valeria, quer?a consultarle si los ejercicios del m?dulo de Ecuaciones se entregan en hojas aparte o en la misma carpeta el d?a del per?odo de intensificaci?n de diciembre. Ya complet? la primera parte.',
    fecha: '02/10/2026 15:40',
    leido: true,
    etiqueta: 'intensificacion',
    respuestas: [
      {
        id: 'resp-1',
        emisor: 'Prof. Valeria Castro',
        texto: 'Hola Lucas! Muy bien por avanzar. Por favor presentalos en hojas de carpeta numeradas con tu nombre y apellido, listos para la defensa oral que haremos el primer d?a de la intensificaci?n. Este martes en el contraturno de 14:00 a 15:30 pod?s tra?rmelos para una primera revisi?n si quer?s.',
        fecha: '02/10/2026 18:15',
        rol: 'docente'
      }
    ]
  },
  {
    id: 'msg-2',
    emisorId: 'est-1',
    emisorNombre: 'Lucas Ben?tez',
    emisorRol: 'estudiante',
    receptorId: 'doc-diego',
    receptorNombre: 'Prof. Diego Morales',
    receptorRol: 'docente',
    materia: 'Historia (Adeudada de 3? a?o)',
    asunto: 'Material para el coloquio de Historia 3?',
    contenido: 'Profesor Morales, descargu? la gu?a de fuentes de 3? a?o. ?El coloquio de diciembre incluye la unidad de la Generaci?n del 80 o solo hasta la consolidaci?n del Estado Nacional?',
    fecha: '04/10/2026 11:20',
    leido: true,
    etiqueta: 'intensificacion',
    respuestas: [
      {
        id: 'resp-2',
        emisor: 'Prof. Diego Morales',
        texto: 'Hola Lucas. Incluye hasta la Generaci?n del 80 inclusive. En la gu?a ten?s los fragmentos de texto espec?ficos a analizar. Acercate el mi?rcoles al aula 8 a las 10:00 si ten?s dudas con el texto de Halperin Donghi.',
        fecha: '04/10/2026 14:00',
        rol: 'docente'
      }
    ]
  }
];
