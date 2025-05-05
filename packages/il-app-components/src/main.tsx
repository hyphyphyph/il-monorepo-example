import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <p>Run this:</p>
      <pre>pnpm -F il-app-components storybook</pre>
  </StrictMode>,
)
