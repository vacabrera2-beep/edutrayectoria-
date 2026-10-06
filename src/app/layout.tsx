import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'EduTrayectoria | Plataforma Educativa - Nueva Normativa Secundaria',
  description: 'Gestión de Trayectorias Escolares, Materias Adeudadas, Períodos de Intensificación, Sábana de Notas RITE y Comunicación Docente-Alumno.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        <AppProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="font-semibold text-slate-700">EduTrayectoria ? Régimen Académico Marco de Educación Secundaria</p>
              <p>Ciclo Lectivo 2026 ? Registro Institucional de Trayectorias Educativas (RITE)</p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
