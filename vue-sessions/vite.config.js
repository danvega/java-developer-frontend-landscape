import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${env.VITE_API_URL ?? 'http://localhost:8080'}`;
  return {
    server: {
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true
        }
      }
    },
    plugins: [vue()]
  };
})