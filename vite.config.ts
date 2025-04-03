import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxImportSource: '@emotion/react',
    jsxFactory: '_jsx',
    jsxFragment: '_jsxFragment',
    jsxInject: `import { jsx as _jsx, jsxs as _jsxs, Fragment as _jsxFragment } from 'react/jsx-runtime'`,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@shared': path.resolve(__dirname, 'src/components/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@remote': path.resolve(__dirname, 'src/remote'),
    },
  },
})
