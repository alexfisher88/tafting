import sharp from 'sharp';
import kmeans from 'ml-kmeans';

export async function extractDominantColors(
  imagePath: string,
  nColors: number = 8
) {
  const image = sharp(imagePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const pixels: number[][] = [];
  for (let i = 0; i < data.length; i += info.channels) {
    pixels.push([data[i], data[i + 1], data[i + 2]]);
  }

  const result = kmeans(pixels, nColors);
  const counts = new Array(nColors).fill(0);
  result.clusters.forEach((c) => counts[c]++);
  const total = pixels.length;
  return result.centroids.map((c, i) => ({
    color: c.centroid.map((v: number) => Math.round(v)) as [number, number, number],
    proportion: counts[i] / total,
  }));
}
