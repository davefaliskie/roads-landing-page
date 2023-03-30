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
        
        <div id={styles.section_headline_container}>
          <div id={styles.section_headline}>
            <span className={styles.vLine1}>
              <Image 
                src="/images/node-bright.svg" 
                width={15} 
                height={15} 
                alt="Background Circle Image"
                className={styles.node_sm1}
              />
            </span>
            <span className={styles.vLine2}></span>
            <span className={styles.vLine3}></span>
            <span className={styles.vLine4}></span>
            <span className={styles.vLine5}></span>
            <span className={styles.vLine6}>
              <Image 
                src="/images/node-bright.svg" 
                width={15} 
                height={15} 
                alt="Background Circle Image"
                className={styles.node_sm2}
              />
            </span>

            <div className='text-center text-light'>
              <h1>Interact with audio</h1>
              <p>Record short podcasts on any topic and receive audio comments from other users.</p>
            </div>

            <div className={`${styles.cover_imgs_container} text-center`}>
              <Image 
                src="/images/phone1.png" 
                alt="Screenshot of the app"
                height={400}
                width={200}
                className={styles.phone_shadow}
              />
              <Image 
                src="/images/phone1.png" 
                alt="Screenshot of the app"
                height={460}
                width={230}
                className={`${styles.phone_shadow} mx-4`}
              />
              <Image 
                src="/images/phone1.png" 
                alt="Screenshot of the app"
                height={400}
                width={200}
                class={styles.phone_shadow}
              />
            </div>
          </div>
        </div>

        <div id={styles.section_features}>
          <h2 class="my-5 text-center">Features</h2>

          <div class="container">
            <div class="row">
              <div class={`${styles.backsplash_container} col-7 text-center`} >

                <div class={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phone1.png" 
                  alt="Screenshot of the app"
                  height={400}
                  width={200}
                  class={`${styles.phone_shadow} ${styles.backsplash_image}`}
                />
              </div>

              <div class='col my-auto'>
                <h3>Feature #1</h3>
                <p>This feature description will be max two sentances. and will highlight what is shown in the image.</p>
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </>
  );
}
