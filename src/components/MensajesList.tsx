'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  MessageSquare, 
  Send, 
  User, 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { Mensaje } from '@/types';

export default function MensajesList() {
  const { mensajes, enviarMensaje, responderMensaje, role, estudianteActivo, docentes } = useApp();
  const [mensajeActivo, setMensajeActivo] = useState<Mensaje>(mensajes[0]);
  const [modalNuevo, setModalNuevo] = useState(false);
  const [respuestaTexto, setRespuestaTexto] = useState('');
  const [filtro, setFiltro] = useState<'todos' | 'intensificacion' | 'cursada'>('todos');

  // Form states para nuevo mensaje
  const [materiaInput, setMateriaInput] = useState('Matemática (Adeudada de 2° año)');
  const [receptorDocenteId, setReceptorDocenteId] = useState(docentes[0].id);
  const [asuntoInput, setAsuntoInput] = useState('');
  const [contenidoInput, setContenidoInput] = useState('');
  const [etiquetaInput, setEtiquetaInput] = useState<'intensificacion' | 'cursada'>('intensificacion');

  const filtrados = mensajes.filter((m) => {
    if (filtro === 'todos') return true;
    return m.etiqueta === filtro;
  });

  const handleEnviarNuevo = (e: React.FormEvent) => {
    e.preventDefault();
    const doc = docentes.find((d) => d.id === receptorDocenteId) || docentes[0];

    enviarMensaje({
      emisorId: estudianteActivo.id,
      emisorNombre: estudianteActivo.nombre,
      emisorRol: 'estudiante',
      receptorId: doc.id,
      receptorNombre: doc.nombre,
      receptorRol: 'docente',
      materia: materiaInput,
      asunto: asuntoInput,
      contenido: contenidoInput,
      etiqueta: etiquetaInput
    });

    setAsuntoInput('');
    setContenidoInput('');
    setModalNuevo(false);
  };

  const handleEnviarRespuesta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!respuestaTexto.trim() || !mensajeActivo) return;

    const autorNombre = role === 'docente' 
      ? 'Prof. Valeria Castro' 
      : role === 'directivo' 
      ? 'Equipo de Conducción Escolar' 
      : estudianteActivo.nombre;

    responderMensaje(mensajeActivo.id, respuestaTexto, autorNombre, role);
    setRespuestaTexto('');
  };

  // Mantener actualizado el mensaje activo si cambia el estado
  const msgActual = mensajes.find((m) => m.id === mensajeActivo?.id) || mensajes[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-100 text-blue-800 rounded-md">
                Canal Oficial de Consultas Pedagógicas
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Comunicación Docente - Alumno
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-2">
              Mensajes y Consultas de Cursada / Intensificación
            </h1>
            <p className="text-xs text-slate-500">
              Despeja dudas sobre ejercicios del cuadernillo, fechas de entrega y pautas de examen para materias cursando o adeudadas.
            </p>
          </div>

          <button
            onClick={() => setModalNuevo(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Nueva Consulta al Profesor</span>
          </button>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 pt-4">
          <span className="text-xs font-semibold text-slate-500">Filtrar por:</span>
          <button
            onClick={() => setFiltro('todos')}
            className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
              filtro === 'todos' ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos ({mensajes.length})
          </button>
          <button
            onClick={() => setFiltro('intensificacion')}
            className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
              filtro === 'intensificacion' ? 'bg-red-600 text-white font-bold' : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            Materias Adeudadas / Intensificación
          </button>
          <button
            onClick={() => setFiltro('cursada')}
            className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
              filtro === 'cursada' ? 'bg-blue-600 text-white font-bold' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Cursada Actual
          </button>
        </div>
      </div>

      {/* Grid de Conversaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna Izquierda: Lista de Hilos */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-2">
            Bandeja de Consultas
          </h2>

          {filtrados.length === 0 ? (
            <p className="text-xs text-slate-400 p-4 text-center">No hay mensajes en esta categoría.</p>
          ) : (
            filtrados.map((msg) => {
              const isSelected = msg.id === msgActual?.id;
              return (
                <button
                  key={msg.id}
                  onClick={() => setMensajeActivo(msg)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-500'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      msg.etiqueta === 'intensificacion'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {msg.etiqueta === 'intensificacion' ? 'Intensificación' : 'Cursada Regular'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{msg.fecha.split(' ')[0]}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-xs leading-snug line-clamp-1">
                    {msg.asunto}
                  </h3>

                  <p className="text-[11px] font-semibold text-slate-600 mt-1">
                    {msg.materia}
                  </p>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {msg.contenido}
                  </p>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                    <span>{msg.emisorNombre} ➔ {msg.receptorNombre}</span>
                    <span className="font-bold text-blue-600">
                      {msg.respuestas.length} respuesta(s)
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Columna Derecha: Vista del Hilo Activo */}
        <div className="lg:col-span-2">
          {msgActual ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full min-h-[500px]">
              {/* Encabezado del Hilo */}
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    msgActual.etiqueta === 'intensificacion'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {msgActual.etiqueta === 'intensificacion' ? 'Materia Adeudada / Intensificación' : 'Cursada Regular'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{msgActual.fecha}</span>
                </div>

                <h2 className="text-xl font-black text-slate-900 mt-2">
                  {msgActual.asunto}
                </h2>

                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  Espacio: {msgActual.materia}
                </p>

                <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Alumno: <strong>{msgActual.emisorNombre}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Profesor receptor: <strong>{msgActual.receptorNombre}</strong>
                  </span>
                </div>
              </div>

              {/* Mensajes del Hilo */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {/* Mensaje Inicial */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                        {msgActual.emisorNombre.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-slate-900">{msgActual.emisorNombre}</span>
                      <span className="text-[10px] px-2 py-0.2 bg-blue-100 text-blue-700 rounded-full font-medium">Estudiante</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">{msgActual.fecha}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap pl-9">
                    {msgActual.contenido}
                  </p>
                </div>

                {/* Respuestas del Docente u otros */}
                {msgActual.respuestas.map((r) => (
                  <div
                    key={r.id}
                    className={`rounded-2xl p-4 border ${
                      r.rol === 'docente'
                        ? 'bg-emerald-50/70 border-emerald-200 ml-6'
                        : 'bg-blue-50/70 border-blue-200 mr-6'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center ${
                          r.rol === 'docente' ? 'bg-emerald-600' : 'bg-blue-600'
                        }`}>
                          {r.emisor.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-900">{r.emisor}</span>
                        <span className={`text-[10px] px-2 py-0.2 rounded-full font-medium ${
                          r.rol === 'docente' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {r.rol === 'docente' ? 'Docente a Cargo' : 'Respuesta'}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{r.fecha}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap pl-9">
                      {r.texto}
                    </p>
                  </div>
                ))}
              </div>

              {/* Caja de Respuesta */}
              <div className="p-4 border-t border-slate-200 bg-slate-50/50 rounded-b-2xl">
                <form onSubmit={handleEnviarRespuesta} className="flex gap-2">
                  <input
                    type="text"
                    value={respuestaTexto}
                    onChange={(e) => setRespuestaTexto(e.target.value)}
                    placeholder={`Responder como ${
                      role === 'docente' ? 'Prof. Valeria Castro' : estudianteActivo.nombre
                    }...`}
                    className="flex-1 px-4 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar</span>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 text-slate-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p className="font-semibold text-slate-700">Selecciona una conversación para leerla</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal: Nueva Consulta al Profesor */}
      {modalNuevo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Enviar Consulta al Profesor
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Comunícate con el docente de tu materia adeudada o de cursada regular.
            </p>

            <form onSubmit={handleEnviarNuevo} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Tipo de Consulta</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setEtiquetaInput('intensificacion')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                      etiquetaInput === 'intensificacion'
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Materia Adeudada / Intensificación
                  </button>
                  <button
                    type="button"
                    onClick={() => setEtiquetaInput('cursada')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                      etiquetaInput === 'cursada'
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Cursada Regular del Año
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Materia</label>
                <input
                  type="text"
                  value={materiaInput}
                  onChange={(e) => setMateriaInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Profesor Destinatario</label>
                <select
                  value={receptorDocenteId}
                  onChange={(e) => setReceptorDocenteId(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {docentes.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.nombre} ({d.asignaciones.map((a) => a.materiaNombre).join(', ')})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Asunto de la Consulta</label>
                <input
                  type="text"
                  value={asuntoInput}
                  onChange={(e) => setAsuntoInput(e.target.value)}
                  placeholder="Ej. Dudas con el ejercicio 14 del cuadernillo"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Mensaje Detallado</label>
                <textarea
                  rows={4}
                  value={contenidoInput}
                  onChange={(e) => setContenidoInput(e.target.value)}
                  placeholder="Escribe tu consulta aquí..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalNuevo(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow cursor-pointer"
                >
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
