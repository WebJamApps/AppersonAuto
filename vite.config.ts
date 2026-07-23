/// <reference types="vitest" />
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));


const APP_ENV_KEYS = [
  'BackendUrl',
  'NODE_ENV',
] as const;

function replaceProcessEnv(env: Record<string, string>): Plugin {
  return {
    name: 'replace-process-env',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.(t|j)sx?$/.test(id)) return null;
      let out = code;
      for (const key of APP_ENV_KEYS) {
        const re = new RegExp(`process\\.env\\.${key}\\b`, 'g');
        out = out.replace(re, JSON.stringify(env[key] ?? ''));
      }
      return out === code ? null : { code: out, map: null };
    },
  };
}

export default defineConfig(({ mode }) => {
  const env: Record<string, string> = { ...loadEnv(mode, process.cwd(), ''), NODE_ENV: mode };
  const isTest = mode === 'test' || process.env.VITEST;
  return {
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
    },
    plugins: [
      ...(isTest ? [] : [replaceProcessEnv(env), checker({ typescript: { tsconfigPath: './tsconfig.build.json' } })]),
      react(),
    ],
    server: {
      port: Number(env.PORT) || 7777,
    },
    resolve: {
      alias: { src: srcDir },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/vitest.setup.ts'],
      css: false,
      mockReset: true,
      testTimeout: 40000,
      include: ['test/**/*.{test,spec}.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'lcov'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/main.tsx'],
      },
    },
  };
});
