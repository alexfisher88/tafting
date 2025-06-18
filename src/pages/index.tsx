import React, { useState } from 'react';
import UploadArea from '../components/UploadArea';
import PaletteDisplay from '../components/PaletteDisplay';
import TemplateGrid from '../components/TemplateGrid';
import YarnCalculator from '../components/YarnCalculator';

interface PaletteItem {
  color: [number, number, number];
  proportion: number;
}

const samplePalette: PaletteItem[] = [
  { color: [255, 0, 0], proportion: 0.25 },
  { color: [0, 255, 0], proportion: 0.25 },
  { color: [0, 0, 255], proportion: 0.25 },
  { color: [255, 255, 0], proportion: 0.25 },
];

export default function Home() {
  const [palette] = useState<PaletteItem[]>(samplePalette);

  return (
    <main className="p-4 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Tafting Template Generator
      </h1>
      <p className="text-center text-gray-600">
        Upload an image to see a simplified tufting template. This demo uses
        placeholder data.
      </p>
      <UploadArea />
      <section>
        <h2 className="font-semibold mb-2">Palette Preview</h2>
        <PaletteDisplay palette={palette} />
      </section>
      <section>
        <h2 className="font-semibold mb-2">Template Grid</h2>
        <TemplateGrid />
      </section>
      <section>
        <h2 className="font-semibold mb-2">Yarn Calculator</h2>
        <YarnCalculator />
      </section>
    </main>
  );
}
