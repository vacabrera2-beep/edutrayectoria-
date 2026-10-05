'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  PlusCircle, 
  UserCheck, 
  Clock, 
  Mail, 
  Phone, 
  Check, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export default function PlantelDocenteManager() {
  const { docentes, asignarDocenteMateria, asignarComisionIntensificacion } = useApp();
  const [docenteSeleccionado, setDocenteSeleccionado] = useState(docentes[0]);
  const [modalAsignacion, setModalAsignacion] = useState(false);
  const [modalIntensificacion, setModalIntensificacion] = useState(false);

  // Form states
  const [materiaInput, setMateriaInput] = useState('Matemática');
  const [cursoInput, setCursoInput] = useState('5° 1ra');
  const [divisionInput, setDivisionInput] = useState('1ra');
  const [turnoInput, setTurnoInput] = useState('Mañana');

  // Intensificacion form
  const [materiaIntInput, setMateriaIntInput] = useState('Matemática');
  const [anioIntInput, setAnioIntInput] = useState(2);
  const [horarioIntInput, setHorarioIntInput] = useState('Lunes 14:00 - 15:30 hs');
  const [aulaIntInput, setAulaIntInput] = useState('Aula 5 (Contraturno)');

  const handleGuardarAsignacion = (e: React.FormEvent) => {
    e.preventDefault();
    asignarDocenteMateria(
      docenteSeleccionado.id,
      cursoInput,
      materiaInput,
      divisionInput,
      turnoInput
    );
    setModalAsignacion(false);
  };

  const handleGuardarIntensificacion = (e: React.FormEvent) => {
    e.preventDefault();
    asignarComisionIntensificacion(
      docenteSeleccionado.id,
      materiaIntInput,
      Number(anioIntInput),
      horarioIntInput,
      aulaIntInput
    );
    setModalIntensificacion(false);
  };

  return (
    <div className="space-y-6">
      {/* Banner Superior Institucional */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-purple-100 text-purple-800 rounded-md">
                Gestión del Plantel Docente
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Organización Curricular & Acompañamiento a las Trayectorias
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-2">
              Directorio de Docentes y Asignaciones
            </h1>
            <p className="text-xs text-slate-500">
              Administración de profesores por curso y designación de docentes a cargo de comisiones de materias adeudadas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalAsignacion(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Asignar Materia a Curso</span>
            </button>
            <button
              onClick={() => setModalIntensificacion(true)}
              className="flex items-center gap-2 px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Designar en Intensificación</span>
            </button>
          </div>
        </div>

        {/* Explicación de cómo funciona el plantel con la nueva normativa */}
        <div className="mt-4 p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 text-xs text-purple-900 leading-relaxed">
          <strong>¿Cómo se vincula el docente con las materias adeudadas?</strong> Según el Régimen Académico actual, los alumnos que adeudan materias de ciclos anteriores tienen asignado un <em>docente tutor/evaluador</em> (quien puede ser el docente del área en el año en curso o un docente con horas designadas en contraturno). El alumno ve este contacto directamente en su panel para descargar las guías y rendir.
        </div>
      </div>

      {/* Grid: Lista de Docentes a la izquierda, Detalle a la derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna Izquierda: Directorio */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-sm font-bold text-slate-900 px-2 flex items-center justify-between">
            <span>Plantel Docente ({docentes.length})</span>
            <Users className="w-4 h-4 text-slate-400" />
          </h2>

          <div className="space-y-2">
            {docentes.map((d) => {
              const isSelected = d.id === docenteSeleccionado.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setDocenteSeleccionado(d)}
                  className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-slate-900 text-sm">{d.nombre}</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      d.situacionRevista === 'Titular'
                        ? 'bg-emerald-100 text-emerald-800'
                        : d.situacionRevista === 'Provisional'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {d.situacionRevista}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{d.email}</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-600 font-medium">
                    <span>{d.asignaciones.length} curso(s) regulares</span>
                    <span>•</span>
                    <span className="text-purple-700 font-bold">{d.comisionesIntensificacion.length} comisión(es) intensificación</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha: Detalle Completo del Docente Seleccionado */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  Situación de Revista: {docenteSeleccionado.situacionRevista}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {docenteSeleccionado.nombre}
                </h3>
                <p className="text-xs text-slate-500">
                  DNI: {docenteSeleccionado.dni} • Antigüedad: {docenteSeleccionado.antiguedadAnios} años
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-600">
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{docenteSeleccionado.email}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{docenteSeleccionado.telefono}</span>
                </p>
              </div>
            </div>

            {/* Asignaciones de Cursos Regulares */}
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Cursos Regulares Asignados (Ciclo 2026)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {docenteSeleccionado.asignaciones.map((asig, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{asig.materiaNombre}</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                        {asig.curso}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      División {asig.division} • Turno {asig.turno}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comisiones de Intensificación y Adeudadas */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-600" />
                Comisiones de Intensificación / Acompañamiento a Materias Adeudadas
              </h4>

              {docenteSeleccionado.comisionesIntensificacion.length === 0 ? (
                <p className="text-xs text-slate-500 italic p-3 bg-slate-50 rounded-xl">
                  Este docente no tiene comisiones de intensificación asignadas actualmente.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {docenteSeleccionado.comisionesIntensificacion.map((com, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-purple-200 bg-purple-50/40">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-purple-900 text-sm">{com.materiaNombre}</span>
                        <span className="px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-extrabold text-[10px]">
                          {com.anio}° Año
                        </span>
                      </div>
                      <p className="text-xs text-purple-800 font-medium mt-1">
                        Horario: {com.horarioConsulta}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-purple-100 text-[11px] text-purple-700">
                        <span>Lugar: {com.lugarAula}</span>
                        <span className="font-bold">{com.alumnosInscriptos} alumnos a cargo</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Asignar Materia a Curso */}
      {modalAsignacion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Asignar Materia a {docenteSeleccionado.nombre}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Agrega una nueva división de cursada regular al profesor.
            </p>

            <form onSubmit={handleGuardarAsignacion} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Espacio Curricular</label>
                <input
                  type="text"
                  value={materiaInput}
                  onChange={(e) => setMateriaInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Curso</label>
                  <input
                    type="text"
                    value={cursoInput}
                    onChange={(e) => setCursoInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej. 4° 2da"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">División</label>
                  <input
                    type="text"
                    value={divisionInput}
                    onChange={(e) => setDivisionInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Turno</label>
                <select
                  value={turnoInput}
                  onChange={(e) => setTurnoInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Vespertino">Vespertino</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalAsignacion(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow cursor-pointer"
                >
                  Guardar Asignación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Designar en Intensificación */}
      {modalIntensificacion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Designar Comisión de Intensificación
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Asigna a {docenteSeleccionado.nombre} como docente evaluador/tutor para alumnos que adeudan una materia de años previos.
            </p>

            <form onSubmit={handleGuardarIntensificacion} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Materia a Intensificar</label>
                <input
                  type="text"
                  value={materiaIntInput}
                  onChange={(e) => setMateriaIntInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Año de la Materia</label>
                <select
                  value={anioIntInput}
                  onChange={(e) => setAnioIntInput(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value={1}>1° Año</option>
                  <option value={2}>2° Año</option>
                  <option value={3}>3° Año</option>
                  <option value={4}>4° Año</option>
                  <option value={5}>5° Año</option>
                  <option value={6}>6° Año</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Horario y Días de Consulta / Contraturno</label>
                <input
                  type="text"
                  value={horarioIntInput}
                  onChange={(e) => setHorarioIntInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Ej. Martes 14:00 - 15:30 hs"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Aula / Espacio Físico</label>
                <input
                  type="text"
                  value={aulaIntInput}
                  onChange={(e) => setAulaIntInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Ej. Aula 12 (Contraturno)"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalIntensificacion(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow cursor-pointer"
                >
                  Confirmar Designación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
