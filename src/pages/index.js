import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ConvertkitEmailForm from '@/components/ConvertkitEmailForm';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';

export default function Home() {
  const current_year = new Date().getFullYear();
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
              <h1>Join the Audio Revolution</h1>
              <div className='row justify-content-center'>
                <p className='col-6'>
                  Discover the future of interactive audio with Roads. The first app that let you experience dynamic audio conversations.
                </p>
              </div>
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
          <h2 className="my-lg text-center">How Roads Is Unique?</h2>

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
                <h3>A New Way to Talk</h3>
                  <p>While listening to an episode you can add an audio comment, which will branch off the main recording. Creating a more dynamic conversation over time.</p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className='col-4 my-auto'>
                <h3>Discuss on Your Time</h3>
                <p>When a comment is created, get notified and create a response to keep the conversation going.</p>
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
                <h3>Control Access</h3>
                <p>You control who has access to your recordings through channels. Only invited members can listen and collaborate on your episodes.</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="my-lg text-center">Ways To Use Roads</h2>
          <div className="container">
            <div className="row">
              <UseCase 
                imagePath="/images/icons/note.svg"
                title="Record voice notes for yourself"
              />
              <UseCase 
                imagePath="/images/icons/chat.svg"
                title="Chat with a friend asynchronously"
              />
              <UseCase 
                imagePath="/images/icons/book.svg"
                title="Create a virtual book club"
              />
              <UseCase 
                imagePath="/images/icons/lecture.svg"
                title="Record a lecture and answer questions"
              />
              <UseCase 
                imagePath="/images/icons/team.svg"
                title="Share weekly updates with your team"
              />
              <UseCase 
                imagePath="/images/icons/podcast.svg"
                title="Co-create podcasts with others"
              />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="my-lg text-center">FAQ&apos;s</h2>
          <div className="row justify-content-md-center">
            <div className="col-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="How do I create an episode on Roads?"
                  answer="You simply hit record in the app and start talking. After you finish recording you'll be able to name the episode and add it to channels so others can listen."
                />
                <FaqItem 
                  itemNum="two"
                  question="Who can join my channels?"
                  answer="Channels can be joined by anyone the channel owner chooses. If you are friends with someone on Roads you can add them to a channel automatically, if not you can send them a channel invite link. The channel owner controls who is in the channel."
                />
                <FaqItem 
                  itemNum="three"
                  question="How do I listen to comments that have been added to an episode?"
                  answer="When listening to an episode if there was a comment left you'll have to option to listen via a pop up. If you decide to listen, when the comment is complete playing the original episode will continue."
                />
                <FaqItem 
                  itemNum="four"
                  question="What is the maximum length for an episode or comment?"
                  answer="Episodes and comments can be any length."
                />
                <FaqItem 
                  itemNum="five"
                  question="Can I edit or delete a comment?"
                  answer="There will be no support for editing audio comments in the initial version. However, you can always delete a comment or episode that you create. "
                />
                <FaqItem 
                  itemNum="six"
                  question="When will Roads be available?"
                  answer="Roads is expected to launch for iOS and Android in June 2023. A web version will be released at a later time."
                />
                <FaqItem 
                  itemNum="seven"
                  question="Does the app offer a free trial or a freemium version?"
                  answer="Roads will always have a free version where all the core features will be available. Premium features will also be made available for a small fee."
                />
              </div>


            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <div className="container my-lg">
            <div className="row justify-content-md-center">
              <div className="col-4">
                <Image 
                    src="/images/phone1.png" 
                    alt="Screenshot of the app"
                    height={500}
                    width={250}
                    className={`${styles.phone_shadow} ${styles.backsplash_image}`}
                  />
              </div>
              <div className="col-4 my-auto ">
                <h4>Be the first to experience Roads</h4>
                <p className='text-left text-sm'>
                  Join the wait list and be notified as soon as the app launches.
                </p>
                <ConvertkitEmailForm />
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_footer}>
          <div className='text-center py-4'>
            <Link href="https://1manstartup.com/privacy-policy" target="_blank" className='btn btn-link'>
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className='btn btn-link'>
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="mailto:Roads Audio<dave@1manstartup.com>" className='btn btn-link'>
              Contact
            </Link>
            <p>Copyright © {current_year}, 1ManStartup LLC. All Rights Reserved.</p>
          </div>
        </div>

      </main>
    </>
  );
}
