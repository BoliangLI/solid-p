import { createSignal, For } from 'solid-js';
import { A } from '@solidjs/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with SolidJS',
    excerpt:
      'Learn the fundamentals of SolidJS and why it is one of the fastest UI frameworks available today. We cover reactivity, components, and more.',
    date: '2026-02-01',
    author: 'Alice Chen',
    tags: ['SolidJS', 'JavaScript', 'Tutorial'],
  },
  {
    id: 2,
    title: 'Understanding Fine-Grained Reactivity',
    excerpt:
      'Dive deep into how fine-grained reactivity works under the hood and how SolidJS leverages it to deliver exceptional performance.',
    date: '2026-01-25',
    author: 'Bob Liu',
    tags: ['Reactivity', 'Performance'],
  },
  {
    id: 3,
    title: 'Building a Full-Stack App with Vite and Solid',
    excerpt:
      'A practical guide to scaffolding, developing, and deploying a full-stack application using Vite as the build tool and SolidJS on the frontend.',
    date: '2026-01-18',
    author: 'Carol Wang',
    tags: ['Vite', 'Full-Stack', 'Deployment'],
  },
  {
    id: 4,
    title: 'State Management Patterns in SolidJS',
    excerpt:
      'Explore different approaches to managing application state in SolidJS, from signals and stores to context providers.',
    date: '2026-01-10',
    author: 'David Zhang',
    tags: ['State Management', 'Patterns'],
  },
  {
    id: 5,
    title: 'Server-Side Rendering with SolidStart',
    excerpt:
      'Learn how SolidStart enables server-side rendering, streaming, and other advanced features for production-ready applications.',
    date: '2026-01-03',
    author: 'Eva Li',
    tags: ['SSR', 'SolidStart'],
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = createSignal('');

  const filteredPosts = () => {
    const query = searchQuery().toLowerCase();
    if (!query) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  };

  return (
    <main style={{ 'max-width': '800px', margin: '0 auto', padding: '48px 24px' }}>
      <A href="/" style={{ color: '#6b7280', 'text-decoration': 'none', 'font-size': '14px' }}>
        {'<- Back to Home'}
      </A>

      <h1
        style={{
          'font-size': '36px',
          'font-weight': '700',
          color: '#111827',
          'margin-top': '24px',
          'margin-bottom': '8px',
          'line-height': '1.2',
        }}
      >
        Blog
      </h1>
      <p
        style={{
          color: '#6b7280',
          'font-size': '16px',
          'margin-bottom': '32px',
          'line-height': '1.6',
        }}
      >
        Thoughts, tutorials, and insights on modern web development.
      </p>

      <div style={{ 'margin-bottom': '32px' }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery()}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #e5e7eb',
            'border-radius': '8px',
            'font-size': '15px',
            color: '#111827',
            background: '#f9fafb',
            outline: 'none',
            'box-sizing': 'border-box',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#2563eb')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
        />
      </div>

      <div style={{ display: 'flex', 'flex-direction': 'column', gap: '0' }}>
        <For each={filteredPosts()}>
          {(post) => (
            <article
              style={{
                padding: '24px 0',
                'border-bottom': '1px solid #f3f4f6',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f9fafb';
                e.currentTarget.style.padding = '24px 16px';
                e.currentTarget.style.margin = '0 -16px';
                e.currentTarget.style.borderRadius = '8px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.padding = '24px 0';
                e.currentTarget.style.margin = '0';
                e.currentTarget.style.borderRadius = '0';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  'align-items': 'center',
                  gap: '12px',
                  'margin-bottom': '8px',
                  'font-size': '13px',
                  color: '#9ca3af',
                }}
              >
                <time>{formatDate(post.date)}</time>
                <span>{'--'}</span>
                <span>{post.author}</span>
              </div>
              <h2
                style={{
                  'font-size': '20px',
                  'font-weight': '600',
                  color: '#111827',
                  'margin-bottom': '8px',
                  'line-height': '1.4',
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  color: '#6b7280',
                  'font-size': '15px',
                  'line-height': '1.6',
                  'margin-bottom': '12px',
                }}
              >
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '6px' }}>
                <For each={post.tags}>
                  {(tag) => (
                    <span
                      style={{
                        'font-size': '12px',
                        padding: '2px 10px',
                        'border-radius': '999px',
                        background: '#eff6ff',
                        color: '#2563eb',
                        'font-weight': '500',
                      }}
                    >
                      {tag}
                    </span>
                  )}
                </For>
              </div>
            </article>
          )}
        </For>
      </div>

      {filteredPosts().length === 0 && (
        <div
          style={{
            'text-align': 'center',
            padding: '48px 0',
            color: '#9ca3af',
          }}
        >
          <p style={{ 'font-size': '16px' }}>No posts found matching your search.</p>
        </div>
      )}
    </main>
  );
}
