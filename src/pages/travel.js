import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';

export default function Travel() {
  return (
    <>
      <main className={styles.main}>        
        < Hero 
          title="Go far without losing touch"
          subtitle="Even with time zones and long distances, Roads makes staying close feel simple. Talk when it fits your day, and hear back when it fits theirs."
          deviceImage="/images/phones/travel/device_15_player_full.png"
        />

         <div id={styles.section_reviews}>
          <h2 className="h2-lg my-lg text-center">What People Are Saying</h2>
          <div className="container">
            <div className="row">
              <Review 
                body="Roads allows you to use your voice to stay connected with the world. The app is designed beautifully and is really intuitive."
                name="Nolanmakatche"
              />
              <Review 
                body="I first started using this app with a friend and it's a lot of fun. We use this app now instead of texting or voicemails since we are both traveling and it makes keeping up with each other a lot easier."
                name="Sethconner10"
              />
              <Review 
                body="One of the coolest apps I've used in a long time. A great way to communicate with family and friends."
                name="neenu17"
              />
              <Review 
                body="A game changer, the interactive audio comments bring conversations to life. It's been super fun chatting with my friends from all around the world on Roads."
                name="makk1ntosh"
              />
              <Review 
                body="I've tried a lot of chat apps and didn't think Roads would be any different. Glad I gave it a chance because it's much better than I expected!"
                name="LFO16"
                className="d-none d-md-block"
              />
              <Review 
                body="I was not expecting to use this app as much as I have. It really pulls you in once you start using it!"
                name="Jengla11"
                className="d-none d-md-block"
              />
            </div>
          </div>
        </div>
 
        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">Built for real conversations, no matter the distance</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_player_response.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Talk like you're together</h3>
                  <p>
                    Comment on any moment in a voice message. Keep the conversation natural and connected.
                  </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_player_simple.png" 
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
                <h3>Every reply fits the moment</h3>
                <p>Each response is tied to the exact part of the audio it refers to. Listening feels effortless.</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_channel.png" 
                  alt="Screenshot of Roads app showing private channel titled 'Friends from way back'"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>You decide who listens</h3>
                <p>Create private voice spaces for your friends or family. Only the people you invite can join.</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="h2-lg my-lg text-center">Ways travelers use Roads on the go</h2>
          <div className="container">
            <div className="row">
              <UseCase 
                imagePath="/images/icons/note.svg"
                title="Capture voice notes during your travels"
              />
              <UseCase 
                imagePath="/images/icons/chat.svg"
                title="Share audio journals with a travel buddy"
              />
              <UseCase 
                imagePath="/images/icons/book.svg"
                title="Host a long-distance book club from anywhere"
              />
              <UseCase 
                imagePath="/images/icons/map_close.svg"
                title="Stay close to your partner during solo adventures"
              />
              <UseCase 
                imagePath="/images/icons/team.svg"
                title="Send personal updates to family back home"
              />
              <UseCase 
                imagePath="/images/icons/shared_audio.svg"
                title="Create a shared audio travel log"
              />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">FAQ&apos;s</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="How do I start a voice thread?"
                  answer="Tap record and start talking. Then add a title and post it in your channel."
                />
                <FaqItem 
                  itemNum="two"
                  question="Who can hear my recordings?"
                  answer="Only people you invite. Your channels are private."
                />
                <FaqItem 
                  itemNum="three"
                  question="Can I reply to a specific part of a message?"
                  answer="Yes. You can respond to any moment, and the reply stays linked to that part."
                />
                <FaqItem 
                  itemNum="four"
                  question="Is there a time limit for messages?"
                  answer="No. You can record as long as you like."
                />
                <FaqItem 
                  itemNum="five"
                  question="Can I delete or edit my recordings?"
                  answer="You can delete anything you've made. Editing isn't available yet."
                />
                <FaqItem 
                  itemNum="seven"
                  question="Is it free to use?"
                  answer="Yes. All core features are free. Additional premium tools are available as part of Roads Audio Plus."
                />
                <FaqItem 
                  itemNum="eight"
                  question="How do I delete my account?"
                  answer={
                    <span>
                      Go to Settings and tap Delete Account. Your data will be removed.For full instructions <Link href="/delete-account">view this page.</Link>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg text-center text-primary mx-1'>Keep your circle close, wherever you go</h2>
          <p className='text-center mx-1'>Start a voice thread today and stay connected across time zones.</p>
          < AppLinks />
        </div>
      </main>
    </>
  );
}
