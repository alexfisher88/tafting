import React from 'react';

export default function UploadArea() {
  return (
    <div className="border p-4">
      <input type="file" accept="image/*" />
    </div>
  );
}
