import type { App, Plugin } from 'vue';

const withInstall = <T>(comp: T) => {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp);
  };

  return comp as T & Plugin;
};

export default withInstall