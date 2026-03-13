import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import AppLinks from '@/components/AppLinks';
import metaConfig from '@/utils/metaConfig';

export default function BlogsIndex() {
  // Helper function to clean title (remove "| Roads Audio" suffix)
  const cleanTitle = (title) => {
    return title.replace(/\s*\|\s*Roads Audio\s*$/i, '').trim();
  };

  // Get all blog posts from metaConfig
  const blogPosts = Object.entries(metaConfig)
    .filter(([path]) => path.startsWith('/blogs/') && path !== '/blogs')
    .map(([path, meta]) => ({
      path,
      ...meta,
      cleanTitle: cleanTitle(meta.title),
    }))
    // Sort by date published (newest first)
    .sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

  return (
    <>
      <Navigation />
      <main id="main-content">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="h2-lg">Roads Audio Blog</h1>
              <p className="lead">
                Tips, guides, and stories about voice messaging, accessibility, and staying
                connected.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.path} className="col-12 col-md-6 col-lg-4">
                <Link href={post.path} className="blog-card-link">
                  <div className="blog-card h-100">
                    <div className="blog-card-image">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="blog-card-content p-3">
                      <p className="text-sm text-muted mb-2">
                        {new Date(post.datePublished).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h2 className="h5 mb-2">{post.cleanTitle}</h2>
                      <p className="text-sm">{post.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Subtle CTA */}
          <div className="text-center mt-5 pt-4">
            <h2 className="h3 mb-3">Try Roads Audio</h2>
            <p className="mb-4">Start sharing voice messages with the people who matter most.</p>
            <AppLinks />
          </div>
        </div>
      </main>

      <style jsx>{`
        .blog-card-link {
          text-decoration: none;
          color: #000 !important;
          display: block;
          height: 100%;
        }

        .blog-card-link:hover {
          color: #000 !important;
        }

        .blog-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          background: white;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .blog-card-image {
          width: 100%;
          overflow: hidden;
        }

        .blog-card-content {
          flex: 1;
        }

        .blog-card-content h2,
        .blog-card-content p {
          color: #000;
        }

        .text-muted {
          color: #6c757d !important;
        }
      `}</style>
    </>
  );
}
