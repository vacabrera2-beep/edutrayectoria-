'use client';

import React from 'react';
import MateriasAdeudadasCard from '@/components/MateriasAdeudadasCard';
import MaterialesManager from '@/components/MaterialesManager';

export default function MateriasAdeudadasPage() {
  return (
    <div className="space-y-8">
      <MateriasAdeudadasCard />
      <div className="pt-4 border-t border-slate-200">
        <MaterialesManager />
      </div>
    </div>
  );
}
