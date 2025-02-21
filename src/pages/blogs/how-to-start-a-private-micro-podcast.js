import Navigation from '@/components/Navigation';
import Image from 'next/image';
import AppLinks from '@/components/AppLinks';


// slug: how-to-start-a-private-micro-podcast
export default function Blog() {
  return (
    <>
      <Navigation />
      <div id="blog-content" className='container'>
        <div className='col-md-10 col-lg-8 col-xl-6 mx-auto'>
          <h1>How to Start a Private Micro Podcast</h1>

          <p className='text-sm'>
            Published on February 21, 2024 by Dave Faliskie
          </p>

          <Image 
            src="/images/blogs/001/CommunicationReinvented.png" 
            alt="Radio on the left, Roads app on the right"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />

        </div>
      </div>
    </>
  )
}
 