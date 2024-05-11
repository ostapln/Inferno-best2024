import { defineConfig } from 'vite';
  

export default defineConfig({
     
    server: {
        port: 5174,
        proxy: {
          // Proxy /api requests to your API server
          '/api': {
            target: 'http://198.46.226.156', // Replace with your API server's URL
            changeOrigin: true,
            secure: false,
          },
          '/signalr': {
            target: 'http://198.46.226.156',
            changeOrigin: true,
            secure: false,
            ws: true, // it`s important to use SignalR with Websockets as transport
          },
        },
      },
     
});
