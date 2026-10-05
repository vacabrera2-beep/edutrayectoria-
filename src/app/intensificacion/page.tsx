'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Download, 
  HelpCircle,
  FileText,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function IntensificacionPage() {
  const { periodos, materiales, descargarMaterialArchivo } = useApp();

  const guiaRecursado = materiales.find((m) => m.tipo === 'pautas_recursado') || materiales[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-md">
                Cronograma Oficial de Acreditaci?n
              </span>
              <span className="text-xs text-slate-500 font-medium">
                R?gimen Acad?mico Marco
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Per?odos de Intensificaci?n & Normativa de Recursado
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1 leading-relaxed">
              Consulta las fechas oficiales de comisiones evaluadoras, per?odos presenciales de acompa?amiento y los criterios pedag?gicos para la acreditaci?n o recursado de materias.
            </p>
          </div>

          <button
            onClick={() => descargarMaterialArchivo(guiaRecursado)}
            className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Pautas de Recursado</span>
          </button>
        </div>

        {/* Explicaci?n did?ctica: ?C?mo funciona el recursado con la nueva normativa? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 space-y-2">
            <h3 className="font-bold flex items-center gap-1.5 text-blue-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              ?Qu? es el Per?odo de Intensificaci?n?
            </h3>
            <p className="leading-relaxed">
              Es un per?odo espec?fico de <strong>ense?anza y evaluaci?n focalizada</strong>. Los alumnos asisten con sus cuadernillos completos y trabajan con el docente de la comisi?n en los n?cleos de aprendizaje prioritarios que no fueron alcanzados durante el ciclo lectivo. La nota m?nima de acreditaci?n es <strong>7 (siete)</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-xs text-purple-950 space-y-2">
            <h3 className="font-bold flex items-center gap-1.5 text-purple-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-purple-600" />
              ?Cu?ndo se debe "Recursar una Materia"?
            </h3>
            <p className="leading-relaxed">
              Bajo la nueva normativa, <strong>el estudiante no repite el a?o en bloque</strong>. Si luego de agotar las instancias de intensificaci?n de Diciembre y Febrero el estudiante a?n adeuda la materia, se habilita el <strong>recursado espec?fico</strong> de ese espacio curricular a contraturno o articulado, permiti?ndole continuar cursando las materias del a?o siguiente.
            </p>
          </div>
        </div>
      </div>

      {/* Lista de Per?odos de Intensificaci?n Oficiales */}
      <div className="space-y-4">
        <h2 className="text-xl font-black text-slate-900">
          Cronograma de Instancias de Intensificaci?n
        </h2>

        {periodos.map((per) => (
          <div
            key={per.id}
            className={`bg-white rounded-2xl p-6 border transition-all ${
              per.activo
                ? 'border-blue-400 shadow-md ring-1 ring-blue-300'
                : 'border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${
                  per.tipo === 'diciembre'
                    ? 'bg-red-100 text-red-700'
                    : per.tipo === 'febrero'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900">{per.titulo}</span>
                    {per.activo && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-full">
                        En Curso / Pr?ximo
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    Fechas: <strong className="text-slate-800">{per.periodo}</strong>
                  </p>
                </div>
              </div>

              <span className="text-xs text-slate-400 font-medium">{per.normativaReferencia}</span>
            </div>

            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              {per.descripcion}
            </p>

            {/* Requisitos de Acreditaci?n */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Requisitos Obligatorios para la Instancia:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                {per.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Destinatarios: <strong className="text-slate-700">{per.destinatarios}</strong>
              </span>
              <Link
                href="/materias-adeudadas"
                className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
              >
                <span>Descargar material para esta instancia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
