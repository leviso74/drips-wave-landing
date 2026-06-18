import { Link } from 'react-router-dom'

export default function AmmPoolDocs() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
      <Link to="/" style={{ color: '#2563eb', textDecoration: 'none', fontSize: 14 }}>&larr; Back to home</Link>
      <h1 style={{ margin: '16px 0 8px' }}>Soroban AMM Liquidity Pool</h1>
      <p style={{ color: '#666', margin: '0 0 32px' }}>Decentralized AMM smart contract on Stellar Soroban</p>

      <Section title="Contract Functions">
        <Function name="initialize(token_a, token_b)" desc="Initialize the pool with two token addresses" />
        <Function name="deposit(to, amount_a, amount_b, min_lp_out)" desc="Add liquidity and mint LP tokens" />
        <Function name="withdraw(to, lp_amount, min_a_out, min_b_out)" desc="Burn LP tokens and withdraw reserves" />
        <Function name="swap_exact_a_for_b(to, amount_in, min_out)" desc="Swap Token A for Token B with slippage protection" />
        <Function name="swap_exact_b_for_a(to, amount_in, min_out)" desc="Swap Token B for Token A with slippage protection" />
        <Function name="get_pool()" desc="View current pool state" />
        <Function name="get_balance(user)" desc="Get LP token balance for an address" />
      </Section>

      <Section title="Formula">
        <div style={{ background: '#f1f5f9', padding: 16, borderRadius: 8, fontSize: 14 }}>
          <p><strong>Constant product:</strong> x &times; y = k</p>
          <p><strong>Swap output (after 0.3% fee):</strong></p>
          <code>amount_out = (amount_in &times; 9970 / 10000) &times; reserve_out / (reserve_in + amount_in &times; 9970 / 10000)</code>
          <p style={{ marginTop: 12 }}><strong>LP mint (initial):</strong> sqrt(amount_a &times; amount_b)</p>
          <p><strong>LP mint (subsequent):</strong> min(amount_a &times; supply / reserve_a, amount_b &times; supply / reserve_b)</p>
        </div>
      </Section>

      <Section title="Security">
        <ul>
          <li>Fixed-point math (no floating point)</li>
          <li>Slippage protection via <code>min_out</code> parameter</li>
          <li>Zero-liquidity edge case guards</li>
          <li>Division-by-zero prevention</li>
        </ul>
      </Section>

      <Section title="Building">
        <pre style={{ background: '#f1f5f9', padding: 16, borderRadius: 8, fontSize: 13 }}>
{`cargo build --target wasm32v1-none --release
cargo test --features testutils`}
        </pre>
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

function Function({ name, desc }: { name: string; desc: string }) {
  return (
    <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
      <code style={{ fontSize: 14, color: '#2563eb' }}>{name}</code>
      <p style={{ margin: '2px 0 0', fontSize: 14, color: '#666' }}>{desc}</p>
    </div>
  )
}
