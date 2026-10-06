'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  FileSpreadsheet, 
  Users, 
  AlertCircle,
  Home,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { role, setRole, estudianteActivo, mensajes } = useApp();

  const noLeidos = mensajes.filter((m) => !m.leido).length;
  const materiasAdeudadasCount = estudianteActivo.trayectoria.filter((t) => t.status === 'adeudada').length;

  const navLinks = [
    { href: '/', label: 'Inicio', icon: Home },
    { 
      href: '/trayectoria', 
      label: 'Trayectoria Escolar', 
      icon: GraduationCap,
      badge: materiasAdeudadasCount > 0 && role === 'estudiante' ? materiasAdeudadasCount : null,
      badgeColor: 'bg-red-500'
    },
    { 
      href: '/materias-adeudadas', 
      label: 'Materias Adeudadas & Guías', 
      icon: AlertCircle,
      highlight: true
    },
    { href: '/notas', label: 'Planilla de Calificaciones', icon: FileSpreadsheet },
    { href: '/docentes', label: 'Plantel Docente', icon: Users },
    { href: '/intensificacion', label: 'Períodos de Intensificación', icon: Calendar },
    { 
      href: '/mensajes', 
      label: 'Mensajes & Consultas', 
      icon: MessageSquare,
      badge: noLeidos > 0 ? noLeidos : null,
      badgeColor: 'bg-blue-600'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Banner de Identidad Institucional y Selector de Rol */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-300">
              Sistema Institucional de Trayectorias y Acreditación (Nueva Normativa Secundaria)
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">Ciclo Lectivo 2026</span>
          </div>

          {/* Selector de Rol interactivo */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold">Simulador de Rol:</span>
            <div className="inline-flex rounded-md shadow-sm p-0.5 bg-slate-800 border border-slate-700">
              <button
                type="button"
                onClick={() => setRole('estudiante')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  role === 'estudiante'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                ?? Estudiante ({estudianteActivo.nombre.split(' ')[0]})
              </button>
              <button
                type="button"
                onClick={() => setRole('docente')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  role === 'docente'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                ????? Docente (Prof. Valeria Castro)
              </button>
              <button
                type="button"
                onClick={() => setRole('directivo')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                  role === 'directivo'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                ??? Preceptoría / Directivo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-slate-900">EduTrayectoria</span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded uppercase tracking-wider">
                  Nueva Normativa
                </span>
              </div>
              <p className="text-xs text-slate-500 -mt-0.5">Régimen Académico Secundario</p>
            </div>
          </Link>

          {/* Menú de Navegaci?n Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`ml-1 px-1.5 py-0.5 text-[10px] font-bold text-white rounded-full ${link.badgeColor}`}
                    >
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Perfil del Usuario Activo */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900 leading-tight">
                {role === 'estudiante'
                  ? estudianteActivo.nombre
                  : role === 'docente'
                  ? 'Prof. Valeria Castro'
                  : 'Prof. Claudia Méndez (Vicedirección)'}
              </p>
              <p className="text-[11px] text-slate-500">
                {role === 'estudiante'
                  ? `${estudianteActivo.cursoActual} ? ${estudianteActivo.orientacion}`
                  : role === 'docente'
                  ? 'Dpto. Matemática y Exactas'
                  : 'Equipo de Conducción Escolar'}
              </p>
            </div>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-sm ${
              role === 'estudiante' ? 'bg-blue-600' : role === 'docente' ? 'bg-emerald-600' : 'bg-purple-600'
            }`}>
              {role === 'estudiante' ? 'LB' : role === 'docente' ? 'VC' : 'CM'}
            </div>
          </div>
        </div>

        {/* Barra de Navegaci?n Móvil y Tablets */}
        <div className="flex lg:hidden overflow-x-auto py-2 border-t border-slate-100 gap-1.5 no-scrollbar">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-bold bg-red-500 text-white rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
