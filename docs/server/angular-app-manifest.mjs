
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/zelot/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/zelot"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 495, hash: '57db864949adbcc08a68ced4a98358d8b3d25b2f936be22eccc45b0969fe7efc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '012274cce11484b0691e9f9f7f3e4ea6d046161dd209dea6f5e3281336cdf49e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21604, hash: 'de73d41d264cffe4382d7ae3667d246917cff03e2f59b9714590aa5e379b4b63', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
