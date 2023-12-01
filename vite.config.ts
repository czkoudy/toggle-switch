import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import dts from "vite-plugin-dts"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), dts(), cssInjectedByJsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, './src/lib/index.ts'),
        name: 'ToggleSwitch',
        fileName: (format) => `index.${format}.js`
      },
      // outDir: 'build',
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        }
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  });
};
