import { useEffect, useState } from "react";
import { Track } from "../models/Track";
import ColorThief from "colorthief";
import { AlbumColor } from "../models/Album";

const adjustLightness = (
  r: number,
  g: number,
  b: number,
  factor = 1.4
): string => {
  const hsl = rgbToHsl(r, g, b);
  hsl[2] = Math.min(100, hsl[2] * factor);
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
};

const rgbToHsl = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number, l: number;
  l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // No saturation
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h *= 60;
  }

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
};

const getTextContrast = (r: number, g: number, b: number): string => {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
};

export const useAlbumColors = (tracks: Track[]): Record<string, AlbumColor> => {
  const [colors, setColors] = useState<Record<string, AlbumColor>>({});

  useEffect(() => {
    const fetchColors = async () => {
      const newColors: Record<string, AlbumColor> = {};
      const promises = tracks.map((track) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.src = track.album.images[0].url;
          img.onload = () => {
            const colorThief = new ColorThief();
            const [r, g, b] = colorThief.getColor(img);
            const background = adjustLightness(r, g, b);
            const text = getTextContrast(r, g, b);
            newColors[track.album.images[0].url] = { background, text };
            resolve();
          };
        });
      });

      await Promise.all(promises);
      setColors(newColors);
    };

    fetchColors();
  }, [tracks]);

  return colors;
};
