import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ConvertkitEmailForm from '@/components/ConvertkitEmailForm';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';

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
                className={styles.phone_shadow}
              />
            </div>
          </div>
        </div>

        <div id={styles.section_features}>
          <h2 className="my-5 text-center">Features</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phone1.png" 
                  alt="Screenshot of the app"
                  height={400}
                  width={200}
                  className={`${styles.phone_shadow} ${styles.backsplash_image}`}
                />
              </div>

              <div className='col-4 offset-1 my-auto'>
                <h3>Feature #1</h3>
                <p>This feature description will be max two sentances. and will highlight what is shown in the image.</p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className='col-4 my-auto'>
                <h3>Feature #2</h3>
                <p>This feature description will be max two sentances. and will highlight what is shown in the image.</p>
              </div>
              <div className={`${styles.backsplash_container} col-4 offset-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phone1.png" 
                  alt="Screenshot of the app"
                  height={400}
                  width={200}
                  className={`${styles.phone_shadow} ${styles.backsplash_image}`}
                />
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phone1.png" 
                  alt="Screenshot of the app"
                  height={400}
                  width={200}
                  className={`${styles.phone_shadow} ${styles.backsplash_image}`}
                />
              </div>

              <div className='col-4 offset-1 my-auto'>
                <h3>Feature #3</h3>
                <p>This feature description will be max two sentances. and will highlight what is shown in the image.</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="my-5 text-center">Use Cases</h2>
          <div className="container">
            <div className="row">
              <UseCase />
              <UseCase />
              <UseCase />
              <UseCase />
              <UseCase />
              <UseCase />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="my-5 text-center">FAQ&apos;s</h2>
          <div className="row justify-content-md-center">
            <div className="col-6">
              
              <div className="accordion" id="faq_accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Collapsible Group Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq_accordion">
                    <div className="accordion-body">
                      Aliquam erat volutpat. Morbi sit amet risus dolor. Suspendisse eu nisl at augue lacinia interdum eu ac justo. Vestibulum bibendum, nunc ut posuere malesuada, mauris mauris placerat enim, nec molestie augue velit non nunc. 
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Collapsible Group Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq_accordion">
                    <div className="accordion-body">
                      Aliquam erat volutpat. Morbi sit amet risus dolor. Suspendisse eu nisl at augue lacinia interdum eu ac justo. Vestibulum bibendum, nunc ut posuere malesuada, mauris mauris placerat enim, nec molestie augue velit non nunc. 
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Collapsible Group Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq_accordion">
                    <div className="accordion-body">
                      Quisque sed efficitur mauris. Integer dictum mauris vitae felis ultricies, vel efficitur eros ultricies. Aenean a dolor in nisi consectetur tempor. Integer et ligula eu metus aliquam efficitur. 
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Collapsible Group Item #3
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq_accordion">
                    <div className="accordion-body">
                      Quisque sed efficitur mauris. Integer dictum mauris vitae felis ultricies, vel efficitur eros ultricies. Aenean a dolor in nisi consectetur tempor. Integer et ligula eu metus aliquam efficitur. 
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Collapsible Group Item #3
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq_accordion">
                    <div className="accordion-body">
                      Quisque sed efficitur mauris. Integer dictum mauris vitae felis ultricies, vel efficitur eros ultricies. Aenean a dolor in nisi consectetur tempor. Integer et ligula eu metus aliquam efficitur. 
                    </div>
                  </div>
                </div>
                
              </div>


            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <div className="container">
            <div className="row justify-content-md-center text-center">
              <div className="col-4">
                <Image 
                    src="/images/phone1.png" 
                    alt="Screenshot of the app"
                    height={500}
                    width={250}
                    className={`${styles.phone_shadow} ${styles.backsplash_image}`}
                  />
              </div>
              <div className="col-4 my-auto">
                <h3 className='mb-4'>Secure Your Access Now</h3>
                <ConvertkitEmailForm />
              </div>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}
