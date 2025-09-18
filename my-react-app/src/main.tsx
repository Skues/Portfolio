import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let container = document.getElementById("root")

createRoot(container as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
