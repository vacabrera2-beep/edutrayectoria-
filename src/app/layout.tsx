import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'E.E.S. Nº " | EduTrayectoria',
  description: 'Sistema Institucional de Trayectorias Escolares y Régimen Académico - Escuela de Educación Secundaria Nº ".',
  authors: [{ name: 'Vanina Cabrera' }],
  creator: 'Vanina Cabrera',
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
          <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="font-bold text-slate-800">
                  Escuela de Educación Secundaria (E.E.S.) Nº  &ldquo;
                </p>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  Ciclo Lectivo 2026 • Registro Institucional de Trayectorias Educativas (R.I.T.E.)
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-semibold text-slate-700">
                  Diseño y Programación: <span className="text-blue-700 font-bold">Vanina Cabrera</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  Plataforma EduTrayectoria
                </p>
              </div>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
