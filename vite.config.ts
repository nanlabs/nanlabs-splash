import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

const vitePluginPWA = () =>
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'nanlabs-splash-2',
      short_name: 'nanlabs-splash-2',
      description: 'nanlabs-splash-2',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths(), vitePluginPWA()],
  base: process.env.VITE_APP_BASE_URL,
  esbuild: {
    loader: 'tsx',
    include: 'src/**/*.{ts,tsx,js,jsx}',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
});
