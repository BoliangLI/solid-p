import { A } from '@solidjs/router';
import Comp from '../Comp';

export default function Home() {
  return (
    <main style={{ 'max-width': '800px', margin: '0 auto', padding: '48px 24px' }}>
      <h1
        style={{
          'font-size': '36px',
          'font-weight': '700',
          color: '#111827',
          'margin-bottom': '16px',
        }}
      >
        Hello world!!!!
      </h1>
      <Comp />
      <nav style={{ 'margin-top': '32px' }}>
        <A
          href="/blog"
          style={{
            display: 'inline-flex',
            'align-items': 'center',
            gap: '8px',
            color: '#2563eb',
            'font-size': '16px',
            'font-weight': '500',
            'text-decoration': 'none',
            padding: '10px 20px',
            'border-radius': '8px',
            border: '1px solid #2563eb',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2563eb';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#2563eb';
          }}
        >
          {'Visit Blog ->'}
        </A>
      </nav>
    </main>
  );
}
