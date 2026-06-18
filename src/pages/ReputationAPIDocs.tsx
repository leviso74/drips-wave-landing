import { Link } from 'react-router-dom'

export default function ReputationAPIDocs() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontSize: 14 }}>&larr; Back to home</Link>
      <h1 style={{ margin: '16px 0 8px' }}>GitHub Reputation Indexer API</h1>
      <p style={{ color: '#666', margin: '0 0 32px' }}>RESTful API for contributor reputation scoring</p>

      <Section title="Endpoints">
        <Endpoint method="GET" path="/health" desc="Health check" />
        <Endpoint method="POST" path="/api/v1/webhooks/github" desc="Receive GitHub PR merge events" />
        <Endpoint method="GET" path="/api/v1/contributors/:handle/scorecard" desc="Get contributor scorecard" />
      </Section>

      <Section title="Webhook Payload">
        <pre style={{ background: '#f1f5f9', padding: 16, borderRadius: 8, fontSize: 13, overflow: 'auto' }}>{JSON.stringify({
          action: 'closed',
          pull_request: { id: 12345, number: 42, title: 'Fix bug', user: { login: 'dev', id: 1 }, merged_at: '2025-01-15T10:00:00Z', created_at: '2025-01-14T10:00:00Z', closed_at: '2025-01-15T10:00:00Z', additions: 100, deletions: 50, changed_files: 5 },
          repository: { id: 1, name: 'repo', full_name: 'user/repo', owner: { login: 'user' } },
        }, null, 2)}</pre>
      </Section>

      <Section title="Scorecard Response">
        <pre style={{ background: '#f1f5f9', padding: 16, borderRadius: 8, fontSize: 13, overflow: 'auto' }}>{JSON.stringify({
          contributor: 'dev',
          scorecard: { total_pull_requests: 42, total_reviews: 18, total_bug_reports: 3, avg_approval_time_hours: 12.5, bug_resolution_rate: 95, merge_rate: 88, code_quality_score: 82 },
          computed_at: '2025-01-16T10:00:00.000Z',
        }, null, 2)}</pre>
      </Section>

      <Section title="Tech Stack">
        <ul>
          <li>Node.js + Express.js</li>
          <li>PostgreSQL with strategic indexing</li>
          <li>Redis + BullMQ for async job queues</li>
          <li>Zod schema validation</li>
        </ul>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>{title}</h2>
      {children}
    </div>
  )
}

function Endpoint({ method, path, desc }: { method: string; path: string; desc: string }) {
  const color = method === 'GET' ? '#16a34a' : method === 'POST' ? '#2563eb' : '#ca8a04'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
      <span style={{ padding: '2px 8px', borderRadius: 4, background: color, color: '#fff', fontSize: 12, fontWeight: 600, minWidth: 50, textAlign: 'center' }}>{method}</span>
      <code style={{ flex: 1, fontSize: 14 }}>{path}</code>
      <span style={{ color: '#666', fontSize: 14 }}>{desc}</span>
    </div>
  )
}
