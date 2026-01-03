export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs', format: 'cjs', sourcemap: true },
    { file: 'dist/index.mjs', sourcemap: true }
  ],
  external: [
    'fs',
    'https',
    'http',
    'path',
    'mime/lite',
    'mime/types/standard.js',
    'mime/types/other.js',
    'opener',
    'express',
    'killable',
    'compression',
    'serve-index',
    'connect-history-api-fallback',
    'http-proxy-middleware'
  ]
}
