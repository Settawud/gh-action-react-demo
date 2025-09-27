import { useState } from 'react'
import './App.css'

const modules = [
  {
    label: 'Lint Sentries',
    description: 'ESLint + TypeScript diagnostics engaged',
    status: 'online',
  },
  {
    label: 'Build Reactor',
    description: 'Vite bundle flux calibrating',
    status: 'charging',
  },
  {
    label: 'Deploy Gate',
    description: 'Awaiting verification ping',
    status: 'standby',
  },
]

const consoleLog = [
  '[00:07] Boot ▸ actions/checkout@v5 :: synced',
  '[00:09] npm install ▸ dependencies locked',
  '[00:12] npm run build ▸ flux stable',
  '[00:14] npm run lint ▸ 0 warnings detected',
  '[00:16] Deploy gate primed · awaiting user ping',
]

function App() {
  const [energy, setEnergy] = useState(64)

  const chargeNeonCore = () => {
    setEnergy((value) => {
      if (value >= 96) {
        return 18
      }
      return Math.min(100, value + 12)
    })
  }

  return (
    <div className="neon-shell">
      <div className="neon-grid" aria-hidden />
      <div className="neon-glow" aria-hidden />
      <div className="neon-scanline" aria-hidden />

      <header className="hero">
        <span className="hero__badge">Node 19 · React Surface</span>
        <h1 className="hero__title">
          Cyberpunk Deployment Hub
          <span className="hero__accent">Neon Build</span>
        </h1>
        <p className="hero__subtitle">
          Boot your React CSR pipeline, monitor lint sentries, and charge the deploy gate across the neon skyline.
        </p>
        <div className="hero__actions">
          <button type="button" className="hero__button" onClick={chargeNeonCore}>
            Charge neon core · {energy}%
          </button>
          <a
            className="hero__link"
            href="https://github.com/features/actions"
            target="_blank"
            rel="noreferrer"
          >
            Inspect workflow schematic
          </a>
        </div>
      </header>

      <main className="dashboard">
        <section className="dashboard__panel">
          <h2 className="panel__title">Subsystems</h2>
          <ul className="panel__list">
            {modules.map(({ label, description, status }) => (
              <li key={label} className="panel__item">
                <div>
                  <span className="panel__item-label">{label}</span>
                  <span className="panel__item-description">{description}</span>
                </div>
                <span className={`status-pill status-pill--${status}`}>{status}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="dashboard__panel dashboard__panel--highlight">
          <h2 className="panel__title">Run Console</h2>
          <p className="panel__lede">
            Workflow <span className="code-pill">deploy-react-csr.yml</span> streaming on the neon mesh.
          </p>
          <div className="console-output">
            {consoleLog.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Crafted with <span className="footer__accent">Vite</span> × <span className="footer__accent">React</span>. Edit{' '}
          <code>src/App.tsx</code> to remix the city.
        </p>
      </footer>
    </div>
  )
}

export default App
