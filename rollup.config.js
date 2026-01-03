export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.cjs', format: 'cjs', exports: 'default' },
    { file: 'dist/index.mjs', format: 'esm' }
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
