'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { TrayectoriaMateria } from '@/types';
import { exportarBoletinEstudiantePDF } from '@/utils/exportPdf';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  BookOpen, 
  Download, 
  MessageSquare, 
  User, 
  FileText,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function TrayectoriaGrid() {
  const { estudianteActivo, descargarMaterialArchivo } = useApp();
  const [selectedAnio, setSelectedAnio] = useState<number>(estudianteActivo.anioActual);

  const materiasPorAnio: { [key: number]: TrayectoriaMateria[] } = {
    1: estudianteActivo.trayectoria.filter((t) => t.anio === 1),
    2: estudianteActivo.trayectoria.filter((t) => t.anio === 2),
    3: estudianteActivo.trayectoria.filter((t) => t.anio === 3),
    4: estudianteActivo.trayectoria.filter((t) => t.anio === 4),
    5: estudianteActivo.trayectoria.filter((t) => t.anio === 5),
    6: estudianteActivo.trayectoria.filter((t) => t.anio === 6),
  };

  const adeudadas = estudianteActivo.trayectoria.filter((t) => t.status === 'adeudada');
  const aprobadas = estudianteActivo.trayectoria.filter((t) => t.status === 'aprobada');
  const cursando = estudianteActivo.trayectoria.filter((t) => t.status === 'cursando' || t.status === 'intensificacion');

  const anios = [1, 2, 3, 4, 5, 6];

  const getStatusBadge = (status: string, calif: number | null) => {
    switch (status) {
      case 'aprobada':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Aprobada {calif ? `(${calif})` : ''}
          </span>
        );
      case 'adeudada':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 animate-pulse">
            <AlertCircle className="w-3 h-3 text-red-600" />
            Adeudada de A?o Anterior
          </span>
        );
      case 'intensificacion':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            En Intensificaci?n Activa
          </span>
        );
      case 'cursando':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <BookOpen className="w-3 h-3 text-blue-600" />
            Cursando Regular
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Resumen Superior de Trayectoria */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-md">
                Legajo: {estudianteActivo.legajo}
              </span>
              <span className="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded-md">
                DNI: {estudianteActivo.dni}
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-2">
              Trayectoria Escolar de {estudianteActivo.nombre}
            </h1>
            <p className="text-sm text-slate-500">
              Curso Actual: <strong className="text-slate-800">{estudianteActivo.cursoActual}</strong> ? Turno {estudianteActivo.turno} ? Orientaci?n en {estudianteActivo.orientacion}
            </p>
          </div>

          <button
            onClick={() => exportarBoletinEstudiantePDF(estudianteActivo)}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Descargar Bolet?n R.I.T.E. (PDF Oficial)
          </button>
        </div>

        {/* Tarjetas de Estad?sticas de la Trayectoria */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Aprobadas</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-3xl font-black text-emerald-700 mt-1">{aprobadas.length}</p>
            <p className="text-[11px] text-emerald-600 font-medium">Espacios curriculares acreditados</p>
          </div>

          <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-800 uppercase tracking-wider">Adeudadas</span>
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl font-black text-red-700 mt-1">{adeudadas.length}</p>
            <p className="text-[11px] text-red-600 font-medium">De a?os anteriores para intensificar</p>
          </div>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">En Curso</span>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-black text-blue-700 mt-1">{cursando.length}</p>
            <p className="text-[11px] text-blue-600 font-medium">Materias del ciclo lectivo actual</p>
          </div>

          <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">Estado Acad?mico</span>
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-base font-bold text-purple-900 mt-1">Acompa?amiento</p>
            <p className="text-[11px] text-purple-700 font-medium">Habilitado a avanzar con intensificaci?n</p>
          </div>
        </div>
      </div>

      {/* Selector de A?os Escolares (1? a 6? a?o) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {anios.map((num) => {
          const countMaterias = materiasPorAnio[num]?.length || 0;
          const hasAdeudada = materiasPorAnio[num]?.some((m) => m.status === 'adeudada');
          const isCurrent = estudianteActivo.anioActual === num;
          const isSelected = selectedAnio === num;

          return (
            <button
              key={num}
              onClick={() => setSelectedAnio(num)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{num}? A?o</span>
              {isCurrent && (
                <span className="px-1.5 py-0.5 text-[9px] bg-blue-500 text-white rounded font-bold">
                  Actual
                </span>
              )}
              {hasAdeudada && (
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grilla de Materias del A?o Seleccionado */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">
            Materias de {selectedAnio}? A?o {selectedAnio === estudianteActivo.anioActual ? '(Cursada Actual)' : ''}
          </h2>
          <span className="text-xs font-medium text-slate-500">
            {materiasPorAnio[selectedAnio]?.length || 0} materias registradas
          </span>
        </div>

        {(!materiasPorAnio[selectedAnio] || materiasPorAnio[selectedAnio].length === 0) ? (
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">A?n no hay materias registradas para {selectedAnio}? a?o.</p>
            <p className="text-xs text-slate-500">Se habilitar?n al momento de la inscripci?n formal al ciclo correlativo.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materiasPorAnio[selectedAnio].map((mat) => {
              const isAdeudada = mat.status === 'adeudada';
              return (
                <div
                  key={mat.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    isAdeudada
                      ? 'border-red-300 shadow-md ring-1 ring-red-200 bg-gradient-to-b from-red-50/20 to-white'
                      : 'border-slate-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-base leading-tight">
                      {mat.nombre}
                    </h3>
                    {getStatusBadge(mat.status, mat.calificacionFinal)}
                  </div>

                  {/* Informes RITE */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs mb-3 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">1? Cuatrimestre (RITE):</span>
                      <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        mat.primerCuatrimestreRITE === 'TEA'
                          ? 'bg-emerald-100 text-emerald-800'
                          : mat.primerCuatrimestreRITE === 'TEP'
                          ? 'bg-amber-100 text-amber-800'
                          : mat.primerCuatrimestreRITE === 'TED'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {mat.primerCuatrimestreRITE}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">2? Cuatrimestre (RITE):</span>
                      <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        mat.segundoCuatrimestreRITE === 'TEA'
                          ? 'bg-emerald-100 text-emerald-800'
                          : mat.segundoCuatrimestreRITE === 'TEP'
                          ? 'bg-amber-100 text-amber-800'
                          : mat.segundoCuatrimestreRITE === 'TED'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {mat.segundoCuatrimestreRITE}
                      </span>
                    </div>

                    {mat.calificacionFinal && (
                      <div className="flex justify-between items-center pt-1 border-t border-slate-200">
                        <span className="font-semibold text-slate-700">Calificaci?n Acreditada:</span>
                        <span className="font-black text-emerald-700 text-sm">{mat.calificacionFinal}</span>
                      </div>
                    )}
                  </div>

                  {/* Detalle si adeuda */}
                  {isAdeudada && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-900 mb-3 space-y-1">
                      <p className="font-bold flex items-center gap-1.5 text-red-800">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Instancia de Intensificaci?n Pendiente
                      </p>
                      <p className="text-[11px] text-red-700">
                        {mat.intensificacionDiciembre || 'Requiere rendir en el per?odo oficial de intensificaci?n.'}
                      </p>
                    </div>
                  )}

                  {/* Informaci?n del Docente */}
                  <div className="pt-2 border-t border-slate-100 text-xs space-y-1">
                    <p className="text-slate-600 flex items-center gap-1.5 font-medium">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mat.docenteAsignado}</span>
                    </p>
                    <p className="text-slate-500 text-[11px] pl-5">
                      Consulta: {mat.docenteHorarioConsulta}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="flex items-center gap-2 mt-4 pt-2">
                    {mat.materiales && mat.materiales.length > 0 ? (
                      <button
                        onClick={() => descargarMaterialArchivo(mat.materiales[0])}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Descargar Gu?a</span>
                      </button>
                    ) : (
                      <span className="flex-1 text-[11px] text-slate-400 py-1.5 text-center">
                        Sin material pendiente
                      </span>
                    )}

                    <Link
                      href="/mensajes"
                      className="p-1.5 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg border border-slate-200 transition-colors"
                      title="Enviar mensaje al docente"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
