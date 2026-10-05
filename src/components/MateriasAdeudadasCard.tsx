'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { 
  AlertTriangle, 
  Download, 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function MateriasAdeudadasCard() {
  const { estudianteActivo, descargarMaterialArchivo } = useApp();
  const adeudadas = estudianteActivo.trayectoria.filter((t) => t.status === 'adeudada');

  if (adeudadas.length === 0) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-emerald-900">?Trayectoria Limpia! No tienes materias adeudadas</h3>
        <p className="text-xs text-emerald-700 max-w-md mx-auto mt-1">
          Has acreditado con ?xito todos los espacios curriculares de tus a?os anteriores. Contin?a enfoc?ndote en las materias de tu curso actual.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Alerta Destacada Normativa */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 shadow-lg shadow-red-500/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-xl mt-0.5">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                Atenci?n - Nueva Normativa Secundaria
              </span>
              <h2 className="text-xl font-black text-white">
                Tienes {adeudadas.length} materias pendientes de acreditaci?n de a?os anteriores
              </h2>
              <p className="text-xs text-rose-100 mt-1 max-w-2xl leading-relaxed">
                Bajo el R?gimen Acad?mico actual, no repites el a?o, pero debes <strong>intensificar y rendir</strong> estos espacios curriculares en los per?odos oficiales fijados (Diciembre y Febrero) para evitar el recursado obligatorio.
              </p>
            </div>
          </div>

          <Link
            href="/intensificacion"
            className="whitespace-nowrap px-4 py-2 bg-white text-red-700 hover:bg-rose-50 font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5"
          >
            <span>Ver Fechas de Mesas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Lista de Materias Adeudadas */}
      <div className="space-y-4">
        {adeudadas.map((materia) => (
          <div
            key={materia.id}
            className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-red-100 text-red-800 uppercase tracking-wider">
                    Adeudada de {materia.anio}? A?o
                  </span>
                  <span className="text-xs text-slate-500">
                    Ciclo Lectivo Original: {2026 - (estudianteActivo.anioActual - materia.anio)}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {materia.nombre}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/mensajes"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar al Profesor</span>
                </Link>
              </div>
            </div>

            {/* Informaci?n del Docente Asignado y Horario */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-500 font-semibold block mb-0.5">Docente Evaluador / Intensificaci?n:</span>
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" />
                  {materia.docenteAsignado}
                </p>
                <p className="text-slate-500 text-[11px] mt-0.5">{materia.docenteEmail}</p>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block mb-0.5">Horario de Consulta y Tutor?a:</span>
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                  {materia.docenteHorarioConsulta}
                </p>
                <p className="text-[11px] text-slate-500">Instancia presencial de acompa?amiento</p>
              </div>

              <div>
                <span className="text-slate-500 font-semibold block mb-0.5">Pr?xima Instancia de Evaluaci?n:</span>
                <p className="font-bold text-red-700 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-red-600" />
                  Per?odo Diciembre 2026 (09 al 22 de Dic)
                </p>
                <p className="text-[11px] text-slate-500">Defensa oral y entrega de cuadernillo</p>
              </div>
            </div>

            {/* Repositorio de Materiales de Estudio para esta materia */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Materiales Oficiales de Estudio Subidos por el Docente
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {materia.materiales.length} archivo(s) disponible(s)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {materia.materiales.map((mat) => (
                  <div
                    key={mat.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded bg-slate-100 text-slate-700">
                          {mat.tipo.replace('_', ' ')}
                        </span>
                        <span className="text-[11px] text-slate-400">{mat.tamano}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mt-1.5 leading-snug">
                        {mat.titulo}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {mat.descripcion}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[11px] text-slate-400">
                        Subido: {mat.fechaSubida}
                      </span>
                      <button
                        onClick={() => descargarMaterialArchivo(mat)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar Material</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
