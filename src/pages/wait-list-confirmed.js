import Head from 'next/head';
import Footer from '@/components/Footer';
import HeadlineCover from '@/components/HeadlineCover';

export default function WaitListConfirmed() {
  return (
    <>
      <Head>
        <title>Roads - Wait List Confirmation</title>
      </Head>
      
        
      < HeadlineCover 
        title="You're on the list!"
        subtitle="As soon as Roads is launched you'll be the first to know!"
      />

      <div className='my-5'></div>

      <Footer />
    </>
  );
}
