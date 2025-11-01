import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// https://vite.dev/config/
export default defineConfig({
  // base: 'https://foodparkaura.ru/wp-content/themes/foodpark',
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
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      customDomId: '__svg__icons__dom__',
      inject: 'body-last',
      symbolId: 'icon-[dir]-[name]',
    }),
    ViteEjsPlugin({
      title: 'Новый Фуд‑Парк | Аура Новосибирск',
      description: '18 кухонь мира в самом сердце Новосибирска! Вкус, живая музыка, детская площадка и мастер-классы —место, где рождается атмосфера!',
      keywords: 'Еда, рестораны, живая музыка',
    }),
  ],
})
