import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ConvertkitEmailForm from '@/components/ConvertkitEmailForm';
import NodeOverlay from '@/components/NodeOverlay';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roads</title>
        <meta name="description" content="A New Way To Experience Audio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Image src="/Roads.png" width={300} height={300} alt="Roads Logo" />
        <h1>Roads</h1>
        <ConvertkitEmailForm /> */}
        
        <NodeOverlay />
        <div id={styles.section_headline}>
          <div className='text-center text-light'>
            <h1>Interact with audio</h1>
            <p>Record short podcasts on any topic and receive audio comments from other users.</p>
          </div>

          <div className='text-center mt-5'>
            <Image 
              src="/images/phone1.png" 
              alt="Screenshot of the app"
              height={360}
              width={180}
              className={styles.phone_shadow}
            />
            <Image 
              src="/images/phone1.png" 
              alt="Screenshot of the app"
              height={420}
              width={210}
              className={`${styles.phone_shadow} mx-4`}
            />
            <Image 
              src="/images/phone1.png" 
              alt="Screenshot of the app"
              height={360}
              width={180}
              className={styles.phone_shadow}
            />
          </div>
        </div>
      </main>
    </>
  );
}
