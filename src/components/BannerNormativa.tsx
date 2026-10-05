import React from 'react';
import { Info, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function BannerNormativa() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-indigo-700/40 relative overflow-hidden mb-8">
      {/* Background visual elements */}
      <div className="absolute -right-8 -top-8 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute right-32 -bottom-8 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Marco Pedag?gico Vigente
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Nueva Normativa: ?C?mo funciona el R?gimen Acad?mico?
              </h2>
            </div>
          </div>
          <Link
            href="/intensificacion"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
          >
            Ver Calendario de Fechas y Pautas
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
          {/* Card 1: No repitencia en bloque */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-400 font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Acreditaci?n por Materia</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ya <strong>no se repite el a?o completo</strong>. Si adeudas materias de a?os anteriores, avanzas de curso y las intensificas o recursas en contraturno.
            </p>
          </div>

          {/* Card 2: Valoraci?n RITE */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1.5 text-blue-300 font-semibold text-xs">
              <Info className="w-4 h-4" />
              <span>Informes R.I.T.E.</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Informes cuatrimestrales cualitativos: <span className="text-emerald-300 font-medium">TEA</span> (Avanzada), <span className="text-amber-300 font-medium">TEP</span> (En Proceso) y <span className="text-rose-300 font-medium">TED</span> (Discontinua).
            </p>
          </div>

          {/* Card 3: Instancias de Intensificaci?n */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1.5 text-amber-400 font-semibold text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Per?odos de Intensificaci?n</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instancias especiales en <strong>Diciembre</strong> y <strong>Febrero/Marzo</strong> para rendir materias con cuadernillos y defensas orales ante el docente.
            </p>
          </div>

          {/* Card 4: Recursado espec?fico */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1.5 text-purple-300 font-semibold text-xs">
              <Info className="w-4 h-4" />
              <span>Criterios de Recursado</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Si tras los per?odos de intensificaci?n la materia no se aprueba, se recursa en contraturno o articulaci?n sin perder las dem?s materias aprobadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
