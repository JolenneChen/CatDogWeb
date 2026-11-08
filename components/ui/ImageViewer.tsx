"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Animal } from "@/lib/api";

interface ImageViewerProps {
  initialImage: Animal;
  endpoint: string;
  label: string;
}

export function ImageViewer({ initialImage, endpoint, label }: ImageViewerProps) {
  const [image, setImage] = useState<Animal>(initialImage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dipanggil saat tombol "Next Image" ditekan
  async function nextImage() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, { cache: "no-store" });
      if (!res.ok) throw new Error("Gagal memuat gambar");
      const data: Animal = await res.json();
      setImage(data);
    } catch {
      setError(`Gagal memuat gambar ${label}, coba lagi.`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {/* Kartu gambar */}
      <div className="mt-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        {error ? (
          <div className="flex h-72 items-center justify-center rounded-lg bg-gray-100 text-sm text-red-500">
            {error}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.url}
            alt={`Foto ${label}`}
            className="max-h-[480px] w-full rounded-lg object-contain"
          />
        )}
      </div>

      {/* Tombol ganti gambar */}
      <div className="mt-4 flex justify-center">
        <Button size="lg" onClick={nextImage} disabled={loading}>
          {loading ? "Memuat..." : "Next Image"}
        </Button>
      </div>
    </>
  );
}