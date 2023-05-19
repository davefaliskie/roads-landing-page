import Head from 'next/head';
import Hero from '@/components/Hero';

export default function WaitListConfirmed() {
  return (
    <>
      <Head>
        <title>Roads - Wait List Confirmation</title>
      </Head>
      
        
      < Hero 
        title="You're on the list!"
        subtitle="As soon as Roads is launched you'll be the first to know!"
      />

      <div className='my-5'></div>
    </>
  );
}
