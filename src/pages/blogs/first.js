import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      <Navigation />
      <div id="blog-content" className='container'>
        <div className='col-md-10 col-lg-8 col-xl-6 mx-auto'>
          <h1>The Evolution of Audio: From Radio to Roads</h1>

          <p className='text-sm'>
            Published on August 28, 2023 by Dave Faliskie
          </p>

          <Image 
            src="/images/blogs/001/CommunicationReinvented.png" 
            alt="Radio on the left, Roads app on the right"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />

          <p className='my-4 hightlight'>
            The sounds that surround us have a profound impact on our lives. The human voice, music, news broadcasts - they all hold immense power. In this exploration, we trace the journey of audio communication, observing its evolution from the early days of radio to the innovative platforms of today.
          </p>

          <h2>The Dawn of Radio</h2>
        </div>
      </div>
    </>
  )
}
 