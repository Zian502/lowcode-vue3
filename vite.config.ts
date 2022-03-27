import { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './config/vite/plugins';
import { generateModifyVars } from './config/themeConfig';
import { configManualChunk } from './config/vite/optimizer';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const outDir = mode === 'build:doc' ? 'docs' : 'dist';
  console.log(command, mode);

  return {
    base: '/lowcode-vue3/',
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        { find: /^~/, replacement: resolve(__dirname, '') },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    plugins: createVitePlugins(isBuild),
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    build: {
      target: 'es2015',
      rollupOptions: {
        output: {
          manualChunks: configManualChunk,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      outDir,
    }
  }
}

