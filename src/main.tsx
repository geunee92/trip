import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'jotai'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Global styles={globalStyles} />
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
