'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CalendarioPage() {
  const { periodos } = useApp();

  const hitos = [
    { fecha: 'Marzo 2026', titulo: 'Inicio del Ciclo Lectivo', desc: 'Comienzo de clases regulares 1? a 6? a?o.' },
    { fecha: 'Julio 2026', titulo: 'Cierre del 1? Informe RITE', desc: 'Primera valoraci?n pedag?gica cuatrimestral (TEA, TEP, TED).' },
    { fecha: 'Septiembre - Noviembre 2026', titulo: 'Acompa?amiento en Contraturno', desc: 'Talleres semanales para estudiantes con materias pendientes.' },
    { fecha: 'Noviembre 2026', titulo: 'Cierre del 2? Informe RITE', desc: 'Definici?n de aprobaci?n directa o derivaci?n a intensificaci?n.' },
    { fecha: '09 al 22 de Diciembre 2026', titulo: 'Per?odo de Intensificaci?n Diciembre', desc: '1? instancia presencial obligatoria para TEP/TED y deudas de a?os anteriores.' },
    { fecha: '15 al 27 de Febrero 2027', titulo: 'Per?odo de Intensificaci?n Febrero', desc: '2? instancia presencial previa al nuevo ciclo lectivo.' },
    { fecha: 'Marzo 2027', titulo: 'Definici?n de Recursado Espec?fico', desc: 'Inscripci?n a contraturno para materias no acreditadas tras febrero.' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900">
          Calendario Acad?mico Institucional 2026 / 2027
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          L?nea de tiempo oficial con las fechas clave de valoraci?n pedag?gica, per?odos de intensificaci?n y recursado.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="relative border-l-2 border-blue-500 ml-4 space-y-6">
          {hitos.map((hito, idx) => (
            <div key={idx} className="relative pl-6">
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{hito.fecha}</span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">{hito.titulo}</h3>
              <p className="text-xs text-slate-600 mt-1">{hito.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
