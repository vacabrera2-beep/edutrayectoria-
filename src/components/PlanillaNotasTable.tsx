'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { exportarPlanillaNotasPDF } from '@/utils/exportPdf';
import { exportarPlanillaNotasExcel } from '@/utils/exportExcel';
import { 
  Download, 
  FileSpreadsheet, 
  FileText, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  UserCheck, 
  Filter
} from 'lucide-react';
import { RITERating } from '@/types';

export default function PlanillaNotasTable() {
  const { notasCurso, updateNota, role } = useApp();
  const [cursoSeleccionado, setCursoSeleccionado] = useState<string>('4° 2da');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<string>('Matemática');
  const [busqueda, setBusqueda] = useState<string>('');

  const docenteNombre = 'Prof. Valeria Castro';

  const filtrados = notasCurso.filter((row) =>
    row.estudianteNombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    row.dni.includes(busqueda)
  );

  const aprobadosCount = notasCurso.filter((r) => r.condicion === 'Aprobado').length;
  const intensificanCount = notasCurso.filter((r) => r.condicion.includes('Intensifica')).length;
  const tasaAprobacion = Math.round((aprobadosCount / notasCurso.length) * 100) || 0;

  const handleDescargarPDF = () => {
    exportarPlanillaNotasPDF(notasCurso, cursoSeleccionado, materiaSeleccionada, docenteNombre);
  };

  const handleDescargarExcel = () => {
    exportarPlanillaNotasExcel(notasCurso, cursoSeleccionado, materiaSeleccionada, docenteNombre);
  };

  return (
    <div className="space-y-6">
      {/* Encabezado y Estadísticas del Curso */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-100 text-blue-800 rounded-md">
                Libreta y Sábana Digital R.I.T.E.
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Normativa de Acreditación Secundaria
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-2">
              Planilla de Calificaciones por Curso
            </h1>
            <p className="text-xs text-slate-500">
              Espacio: <strong className="text-slate-800">{materiaSeleccionada}</strong> | División: <strong className="text-slate-800">{cursoSeleccionado}</strong> | Docente: <strong className="text-slate-800">{docenteNombre}</strong>
            </p>
          </div>

          {/* Botones de Descarga Oficial */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDescargarPDF}
              className="flex items-center gap-2 px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Descargar Sábana en PDF</span>
            </button>

            <button
              onClick={handleDescargarExcel}
              className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Exportar a Excel (CSV)</span>
            </button>
          </div>
        </div>

        {/* Tarjetas de Métricas de Evaluación */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase">Matrícula Total</span>
              <UserCheck className="w-5 h-5 text-slate-500" />
            </div>
            <p className="text-2xl font-black text-slate-900 mt-1">{notasCurso.length} Alumnos</p>
            <p className="text-[11px] text-slate-500">Inscriptos en {cursoSeleccionado}</p>
          </div>

          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 uppercase">Aprobados / TEA</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-2xl font-black text-emerald-700 mt-1">{aprobadosCount} ({tasaAprobacion}%)</p>
            <p className="text-[11px] text-emerald-600">Alcanzaron objetivos sin intensificar</p>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase">Para Intensificación</span>
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-2xl font-black text-amber-700 mt-1">{intensificanCount} Alumnos</p>
            <p className="text-[11px] text-amber-600">Requieren período Diciembre / Febrero</p>
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
            <Filter className="w-4 h-4 text-slate-400" />
            <span>Curso:</span>
          </div>
          <select
            value={cursoSeleccionado}
            onChange={(e) => setCursoSeleccionado(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="4° 2da">4° 2da (Secundaria Superior)</option>
            <option value="2° 1ra">2° 1ra (Ciclo Básico)</option>
            <option value="3° 2da">3° 2da (Ciclo Básico)</option>
          </select>

          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold ml-2">
            <span>Materia:</span>
          </div>
          <select
            value={materiaSeleccionada}
            onChange={(e) => setMateriaSeleccionada(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Matemática">Matemática</option>
            <option value="Prácticas del Lenguaje">Prácticas del Lenguaje</option>
            <option value="Historia">Historia</option>
            <option value="Físico-Química">Físico-Química</option>
          </select>
        </div>

        {/* Input de Búsqueda de Alumno */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Buscar por alumno o DNI..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabla Oficial de Calificaciones RITE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">N°</th>
                <th className="py-3.5 px-4">Estudiante</th>
                <th className="py-3.5 px-3">DNI</th>
                <th className="py-3.5 px-3 text-center">1° Cuatrimestre (RITE)</th>
                <th className="py-3.5 px-3 text-center">2° Cuatrimestre (RITE)</th>
                <th className="py-3.5 px-3 text-center">Intensif. Diciembre</th>
                <th className="py-3.5 px-3 text-center">Intensif. Febrero</th>
                <th className="py-3.5 px-3 text-center">Nota Final</th>
                <th className="py-3.5 px-4 text-center">Condición</th>
                <th className="py-3.5 px-4">Observaciones Pedagógicas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtrados.map((row, index) => {
                const isAprobado = row.condicion === 'Aprobado';
                return (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-center text-slate-400 font-semibold">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {row.estudianteNombre}
                    </td>
                    <td className="py-3 px-3 text-slate-500 font-mono text-[11px]">
                      {row.dni}
                    </td>

                    {/* Selector de RITE 1 */}
                    <td className="py-3 px-3 text-center">
                      <select
                        value={row.informe1}
                        onChange={(e) => updateNota(row.id, 'informe1', e.target.value as RITERating)}
                        className={`px-2 py-1 rounded text-xs font-bold cursor-pointer border ${
                          row.informe1 === 'TEA'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : row.informe1 === 'TEP'
                            ? 'bg-amber-100 text-amber-800 border-amber-300'
                            : row.informe1 === 'TED'
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="TEA">TEA</option>
                        <option value="TEP">TEP</option>
                        <option value="TED">TED</option>
                        <option value="-">-</option>
                      </select>
                    </td>

                    {/* Selector de RITE 2 */}
                    <td className="py-3 px-3 text-center">
                      <select
                        value={row.informe2}
                        onChange={(e) => updateNota(row.id, 'informe2', e.target.value as RITERating)}
                        className={`px-2 py-1 rounded text-xs font-bold cursor-pointer border ${
                          row.informe2 === 'TEA'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : row.informe2 === 'TEP'
                            ? 'bg-amber-100 text-amber-800 border-amber-300'
                            : row.informe2 === 'TED'
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="TEA">TEA</option>
                        <option value="TEP">TEP</option>
                        <option value="TED">TED</option>
                        <option value="-">-</option>
                      </select>
                    </td>

                    {/* Intensificación Diciembre */}
                    <td className="py-3 px-3 text-center">
                      <input
                        type="text"
                        value={row.intensificacionDic}
                        onChange={(e) => updateNota(row.id, 'intensificacionDic', e.target.value)}
                        className="w-24 text-center px-1.5 py-1 text-xs border border-slate-200 rounded font-medium focus:ring-1 focus:ring-blue-500"
                      />
                    </td>

                    {/* Intensificación Febrero */}
                    <td className="py-3 px-3 text-center">
                      <input
                        type="text"
                        value={row.intensificacionFeb}
                        onChange={(e) => updateNota(row.id, 'intensificacionFeb', e.target.value)}
                        className="w-24 text-center px-1.5 py-1 text-xs border border-slate-200 rounded font-medium focus:ring-1 focus:ring-blue-500"
                      />
                    </td>

                    {/* Nota Final */}
                    <td className="py-3 px-3 text-center">
                      <input
                        type="text"
                        value={row.notaFinal}
                        onChange={(e) => updateNota(row.id, 'notaFinal', e.target.value)}
                        className={`w-14 text-center px-1.5 py-1 text-xs font-black rounded border ${
                          isAprobado
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      />
                    </td>

                    {/* Condición */}
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        isAprobado
                          ? 'bg-emerald-100 text-emerald-800'
                          : row.condicion.includes('Diciembre')
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {row.condicion}
                      </span>
                    </td>

                    {/* Observaciones */}
                    <td className="py-3 px-4 text-slate-600 text-[11px]">
                      <input
                        type="text"
                        value={row.observaciones}
                        onChange={(e) => updateNota(row.id, 'observaciones', e.target.value)}
                        className="w-full px-2 py-1 text-xs border border-transparent hover:border-slate-200 focus:border-blue-400 rounded bg-transparent focus:bg-white"
                        placeholder="Agregar nota pedagógica..."
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pie de tabla informativo */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            💡 <strong>Régimen Académico:</strong> La calificación final acreditada debe ser igual o superior a 7 (siete). Los cambios en RITE recalculan automáticamente la condición.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> TEA = 7 a 10
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
              <Clock className="w-3.5 h-3.5" /> TEP = Intensifica
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-rose-700">
              <AlertTriangle className="w-3.5 h-3.5" /> TED = Prioritaria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
