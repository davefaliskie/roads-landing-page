import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import ConvertkitEmailForm from '@/components/ConvertkitEmailForm';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Footer from '@/components/Footer';
import HeadlineCover from '@/components/HeadlineCover';

export default function Home() {
  return (
    <>
      <Head>
        <title>Roads - Discover the Future of Audio</title>
      </Head>
      <main className={styles.main}>        
        <NodeOverlay />
        
        < HeadlineCover 
          title="Join The Audio Revolution"
          subtitle="Discover the future of interactive audio with Roads. The first app that lets you experience dynamic audio conversations."
        />

        <div id={styles.section_features}>
          <h2 className="my-lg text-center">How Roads Is Unique?</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/screen4.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-4 offset-md-1 my-auto'>
                <h3>A New Way to Talk</h3>
                  <p>While listening to an episode you can add an audio comment, which will branch off the main recording. Creating a more dynamic conversation over time.</p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 offset-md-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/screen7.png" 
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-4 my-auto order-md-first'>
                <h3>Discuss on Your Time</h3>
                <p>When a comment is created, get notified and create a response to keep the conversation going.</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/screen6.png" 
                  alt="Screenshot of Roads app showing how to select friends to add to a channel."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-4 offset-md-1 my-auto'>
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
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
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
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 text-center">
                <Image 
                    src="/images/phones/screen5.png" 
                    alt="Screenshot of Roads app showing the main player with several comments."
                    height={500}
                    width={250}
                    className={`${styles.backsplash_image} phone_shadow`}
                  />
              </div>
              <div className="col-md-6 col-lg-4 mt-5 mt-md-auto my-auto">
                <h4>Be the first to experience Roads</h4>
                <p className='text-left text-sm'>
                  Join the wait list and be notified as soon as the app launches.
                </p>
                <ConvertkitEmailForm />
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </main>
    </>
  );
}
