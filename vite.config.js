import reactRefresh from '@vitejs/plugin-react-refresh';
/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: '/Invo-Academy-Ai-Section-Project/',
  css: {
    devSourcemap: true
  },
  plugins: [reactRefresh()],
  server: {
    host: '127.0.0.1',
    port: 3000
  }
};
