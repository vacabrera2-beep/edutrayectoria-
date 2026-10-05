'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import BannerNormativa from '@/components/BannerNormativa';
import { 
  GraduationCap, 
  AlertCircle, 
  FileSpreadsheet, 
  Calendar, 
  MessageSquare, 
  Users, 
  Download, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { exportarBoletinEstudiantePDF } from '@/utils/exportPdf';

export default function HomePage() {
  const { role, estudianteActivo, notasCurso, periodos, mensajes, descargarMaterialArchivo } = useApp();

  const adeudadas = estudianteActivo.trayectoria.filter((t) => t.status === 'adeudada');
  const proximoPeriodo = periodos[0]; // Diciembre 2026
  const noLeidos = mensajes.filter((m) => !m.leido).length;

  return (
    <div className="space-y-8">
      {/* Banner Explicativo de la Nueva Normativa */}
      <BannerNormativa />

      {/* Saludo y Estado Principal seg?n Rol */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Panel Oficial ? Rol Activo: {role.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            {role === 'estudiante'
              ? `?Hola, ${estudianteActivo.nombre.split(' ')[0]}!`
              : role === 'docente'
              ? 'Bienvenida, Prof. Valeria Castro'
              : 'Bienvenida, Direcci?n / Secretar?a'}
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
            {role === 'estudiante'
              ? `Est?s cursando ${estudianteActivo.cursoActual} (${estudianteActivo.orientacion}). Recuerda revisar tus materias adeudadas y descargar los materiales de intensificaci?n.`
              : role === 'docente'
              ? 'Gestiona la carga de notas RITE (TEA, TEP, TED), descarga la s?bana oficial en PDF/Excel y atiende las consultas de alumnos en intensificaci?n.'
              : 'Supervisa las trayectorias de toda la instituci?n, organiza el plantel docente y coordina las comisiones de intensificaci?n.'}
          </p>
        </div>

        {role === 'estudiante' && (
          <button
            onClick={() => exportarBoletinEstudiantePDF(estudianteActivo)}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Descargar mi Bolet?n R.I.T.E.</span>
          </button>
        )}
      </div>

      {/* Alerta de Materias Adeudadas (si el estudiante tiene) */}
      {role === 'estudiante' && adeudadas.length > 0 && (
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-white/20 rounded-xl mt-0.5">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                Aviso Importante de Trayectoria Escolar
              </span>
              <h2 className="text-xl font-black text-white mt-0.5">
                Tienes {adeudadas.length} materia(s) adeudada(s) de a?os anteriores
              </h2>
              <p className="text-xs text-rose-100 mt-1 max-w-xl">
                Espacios curriculares: <strong>{adeudadas.map((a) => `${a.nombre} (${a.anio}? a?o)`).join(', ')}</strong>. Tienes cuadernillos y modelos de examen asignados para rendir en el per?odo de intensificaci?n.
              </p>
            </div>
          </div>

          <Link
            href="/materias-adeudadas"
            className="whitespace-nowrap px-4 py-2.5 bg-white text-red-700 hover:bg-rose-50 font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2"
          >
            <span>Ver y Descargar Materiales</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Grid de Accesos R?pidos y M?dulos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Trayectoria Escolar */}
        <Link
          href="/trayectoria"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Mi Trayectoria Escolar
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Visualiza tu mapa hist?rico a?o por a?o (1? a 6? a?o), notas finales y estado de avance bajo la nueva normativa.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600">
            <span>Explorar Trayectoria</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 2: Materias Adeudadas & Material */}
        <Link
          href="/materias-adeudadas"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
              Materias Adeudadas & Materiales
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Descarga directa de cuadernillos oficiales, gu?as de intensificaci?n y modelos de examen para preparar las mesas evaluadoras.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-red-600">
            <span>Descargar Gu?as</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 3: Planilla de Calificaciones */}
        <Link
          href="/notas"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Planilla de Calificaciones por Curso
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              S?bana oficial de notas RITE con descarga en formato PDF y exportaci?n en Excel (CSV) para preceptores y docentes.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-600">
            <span>Ver S?bana de Notas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 4: Plantel Docente */}
        <Link
          href="/docentes"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              Plantel Docente y Asignaciones
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Directorio de profesores, designaci?n de comisiones evaluadoras para intensificaci?n y horarios de consulta en contraturno.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-purple-600">
            <span>Administrar Plantel</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 5: Per?odos de Intensificaci?n y Recursado */}
        <Link
          href="/intensificacion"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              Fechas de Inter?s & Recursado
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Cronograma oficial de intensificaci?n de Diciembre y Febrero, requisitos de acreditaci?n y pautas de recursado.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600">
            <span>Consultar Calendario</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 6: Mensajes y Consultas */}
        <Link
          href="/mensajes"
          className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              Comunicaci?n con el Profesor
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Canal directo para consultar dudas sobre la materia, coordinar tutor?as y recibir devoluciones pedag?gicas.
            </p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600">
            <span>Abrir Mensajer?a</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Banner de Pr?xima Instancia de Evaluaci?n Oficial */}
      {proximoPeriodo && (
        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Pr?xima Instancia Institucional
              </span>
              <h3 className="text-lg font-black text-white">{proximoPeriodo.titulo}</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Per?odo: <strong className="text-white">{proximoPeriodo.periodo}</strong> ? {proximoPeriodo.destinatarios}
              </p>
            </div>
          </div>

          <Link
            href="/intensificacion"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow transition-colors whitespace-nowrap"
          >
            Ver Requisitos de Acreditaci?n
          </Link>
        </div>
      )}
    </div>
  );
}
