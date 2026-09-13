import { execSync } from 'child_process';
import esbuild from 'esbuild';

console.log('Generating dynamic static HTML pages for all routes...');
execSync('npx tsx scripts/generate-static-pages.ts', { stdio: 'inherit' });

console.log('Running client build (Vite)...');
execSync('vite build', { stdio: 'inherit' });

console.log('Running server build (esbuild)...');
esbuild.buildSync({
  entryPoints: ['server.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  packages: 'external',
  sourcemap: true,
  outfile: 'dist/server.cjs'
});

console.log('Build completed successfully.');
