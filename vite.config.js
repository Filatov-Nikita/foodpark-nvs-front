import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
         additionalData: `@use "@/assets/scss/mixins/screens.scss" as *;`
      },
    },
  },
  plugins: [
    vue(),
    ViteEjsPlugin({
      title: 'Новый Фуд‑Парк | Аура Новосибирск',
    }),
  ],
})
