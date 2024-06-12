import { defineConfig } from 'vite';
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json');
  const pkg = readJsonFile('package.json');
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

export default defineConfig({
  plugins: [
    webExtension({
      webExtConfig: {
        startUrl: ['https://news.ycombinator.com/'],
      },
      manifest: generateManifest,
      watchFilePaths: ['package.json', 'manifest.json'],
    }),
  ],
});
