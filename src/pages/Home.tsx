import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f1f5f9' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 48, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
          Drips Wave Tooling
        </h1>
        <p style={{ fontSize: 18, color: '#94a3b8', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.6 }}>
          A suite of developer tools for the Drips Wave Program — reputation tracking, on-chain AMM liquidity, and contribution analytics.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, textAlign: 'left' }}>
          <ProjectCard
            title="GitHub Reputation Indexer"
            description="Node.js/Express API that ingests GitHub webhooks, maps contributions to developer identities, and computes Code Quality Scores."
            href="/docs/reputation-api"
            tags={['Node.js', 'PostgreSQL', 'Redis', 'BullMQ']}
          />
          <ProjectCard
            title="Soroban AMM Pool"
            description="Decentralized AMM smart contract on Stellar Soroban. Constant product formula, LP tokens, and slippage protection."
            href="/docs/amm-pool"
            tags={['Rust', 'Soroban', 'WASM', 'no_std']}
          />
        </div>

        <div style={{ marginTop: 64, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <StatusBadge label="Reputation API" status="ready" />
          <StatusBadge label="AMM Contract" status="ready" />
          <StatusBadge label="Dashboard" status="ready" />
          <StatusBadge label="Pool UI" status="ready" />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, href, tags }: {
  title: string; description: string; href: string; tags: string[]
}) {
  return (
    <Link to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        background: '#1e293b', borderRadius: 16, padding: 28, border: '1px solid #334155',
        cursor: 'pointer',
      }}>
        <h2 style={{ margin: '0 0 12px', fontSize: 20 }}>{title}</h2>
        <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6, margin: '0 0 20px' }}>{description}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {tags.map(t => (
            <span key={t} style={{ padding: '4px 10px', borderRadius: 6, background: '#334155', fontSize: 12, color: '#cbd5e1' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

function StatusBadge({ label, status }: { label: string; status: 'ready' | 'building' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 20, background: '#1e293b', fontSize: 13 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: status === 'ready' ? '#22c55e' : '#eab308' }} />
      {label}
    </div>
  )
}
