# Tafting Template Generator

Project skeleton generated from specification.

## Development

```
npm install
npm run dev
```

## Production

```
docker build -t tafting .
docker run -p 3000:3000 tafting
```

## Color Extraction Sample

See `src/utils/colorUtils.ts` for an example using `sharp` and `ml-kmeans` to get dominant colors from an image.
