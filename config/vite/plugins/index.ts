import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { autoRegistryComponents } from './component';
import { configStyleImportPlugin } from './styleImport';
import { AutoImportDeps } from './autoImport';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
  ];

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  return vitePlugins;
}
