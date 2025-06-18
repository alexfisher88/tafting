import React from 'react';

interface Props {
  palette: { color: [number, number, number]; proportion: number }[];
}

export default function PaletteDisplay({ palette }: Props) {
  return (
    <div className="flex space-x-2">
      {palette.map((p, i) => (
        <div key={i} className="w-8 h-8" style={{ backgroundColor: `rgb(${p.color.join(',')})` }} />
      ))}
    </div>
  );
}
