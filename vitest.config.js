import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{tsx,js,ts}'],
      all: true,
      reporter: ['html', 'clover', 'text'],
    },
    root: '.',
    reporters: ['verbose'],
  },
});
