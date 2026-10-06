'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  Download, 
  FileText, 
  PlusCircle, 
  Search, 
  Filter, 
  BookOpen, 
  Trash2, 
  CheckCircle2, 
  User, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { MaterialEstudio } from '@/types';

export default function MaterialesManager() {
  const { materiales, agregarMaterial, eliminarMaterial, descargarMaterialArchivo, role } = useApp();
  const [busqueda, setBusqueda] = useState('');
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');
  const [modalNuevo, setModalNuevo] = useState(false);

  // Form states para subir nuevo material
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState<'cuadernillo' | 'modelo_examen' | 'guia_actividades' | 'pautas_recursado'>('cuadernillo');
  const [materiaNombre, setMateriaNombre] = useState('Matemática');
  const [anio, setAnio] = useState(2);
  const [nombreArchivo, setNombreArchivo] = useState('');

  const filtrados = materiales.filter((mat) => {
    const matchText = mat.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                      mat.materiaNombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                      mat.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const matchTipo = filtroTipo === 'todos' || mat.tipo === filtroTipo;
    return matchText && matchTipo;
  });

  const handleCrearMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    agregarMaterial({
      titulo,
      descripcion,
      tipo,
      tamano: '1.5 MB',
      docenteNombre: role === 'docente' ? 'Prof. Valeria Castro' : 'Equipo Institucional',
      materiaNombre,
      anio: Number(anio),
      nombreArchivo: nombreArchivo || `${titulo.replace(/\\s+/g, '_')}.pdf`
    });

    // Reset y cerrar
    setTitulo('');
    setDescripcion('');
    setNombreArchivo('');
    setModalNuevo(false);
  };

  return (
    <div className="space-y-6">
      {/* Header del Repositorio */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-100 text-blue-800 rounded-md">
                Banco Institucional de Recursos Pedagógicos
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Nueva Normativa Secundaria
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-2">
              Cuadernillos y Materiales para Intensificar y Rendir
            </h1>
            <p className="text-xs text-slate-500">
              Guías de estudio, trabajos prácticos y modelos de examen para materias adeudadas de años anteriores y períodos de intensificación.
            </p>
          </div>

          {(role === 'docente' || role === 'directivo') && (
            <button
              onClick={() => setModalNuevo(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Publicar Nuevo Material</span>
            </button>
          )}
        </div>

        {/* Buscador y Filtros */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar por materia, tema o título..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Filtrar:</span>
            {['todos', 'cuadernillo', 'modelo_examen', 'guia_actividades', 'pautas_recursado'].map((t) => (
              <button
                key={t}
                onClick={() => setFiltroTipo(t)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  filtroTipo === t
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t === 'todos' ? 'Todos' : t.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Materiales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrados.map((mat) => (
          <div
            key={mat.id}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full ${
                  mat.tipo === 'cuadernillo'
                    ? 'bg-blue-100 text-blue-800'
                    : mat.tipo === 'modelo_examen'
                    ? 'bg-rose-100 text-rose-800'
                    : mat.tipo === 'guia_actividades'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {mat.tipo.replace('_', ' ')}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{mat.tamano}</span>
              </div>

              <h3 className="font-bold text-slate-900 text-base mt-2.5 group-hover:text-blue-600 transition-colors leading-snug">
                {mat.titulo}
              </h3>

              <div className="flex items-center gap-2 mt-1 mb-2">
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {mat.materiaNombre} ({mat.anio}° Año)
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {mat.descripcion}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="text-[11px] text-slate-400">
                <p className="font-medium text-slate-600">{mat.docenteNombre}</p>
                <p>Fecha: {mat.fechaSubida}</p>
              </div>

              <div className="flex items-center gap-1.5">
                {(role === 'docente' || role === 'directivo') && (
                  <button
                    onClick={() => eliminarMaterial(mat.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Eliminar material"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => descargarMaterialArchivo(mat)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para subir nuevo material (Docente/Directivo) */}
      {modalNuevo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Publicar Material Pedagógico
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Sube una guía de intensificación, trabajo práctico o modelo de examen para los estudiantes.
            </p>

            <form onSubmit={handleCrearMaterial} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Título del Documento</label>
                <input
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Ej. Cuadernillo de Recuperación - 2° Cuatrimestre"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Materia</label>
                  <input
                    type="text"
                    value={materiaNombre}
                    onChange={(e) => setMateriaNombre(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Año</label>
                  <select
                    value={anio}
                    onChange={(e) => setAnio(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((a) => (
                      <option key={a} value={a}>{a}° Año</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Tipo de Material</label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="cuadernillo">Cuadernillo Integral de Intensificación</option>
                  <option value="modelo_examen">Modelo de Examen / Rúbrica</option>
                  <option value="guia_actividades">Guía de Actividades Prácticas</option>
                  <option value="pautas_recursado">Pautas de Recursado y Articulación</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Descripción y Contenidos Clave</label>
                <textarea
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  placeholder="Detalla los núcleos de aprendizaje prioritarios que evalúa este material..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Nombre del Archivo Descargable</label>
                <input
                  type="text"
                  value={nombreArchivo}
                  onChange={(e) => setNombreArchivo(e.target.value)}
                  placeholder="Ej. Cuadernillo_Matematica_2026.pdf"
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  Subir y Publicar Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
