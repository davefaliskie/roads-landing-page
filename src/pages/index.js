import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';

export default function Home() {
  return (
    <>
      <main className={styles.main}>        
        <NodeOverlay />
        < Hero 
          title="Have Deeper Conversations"
          subtitle="Roads Audio brings you closer to your friends through deep, podcast-like conversations, letting you connect meaningfully on your time."
        />

        <div className='text-center'>
          <h2 className="h2-lg my-lg my-lg">Watch The Demo</h2>
          
          <iframe 
            className="youtube-video"
            src="https://www.youtube.com/embed/w_H7ooZYnAY" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            loading='eager'
            >
          </iframe>
        </div>

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

        <div className='text-center py-5 mt-5 bg-graident'>
          <Link href="https://www.f6s.com/roads-audio" target="_blank">
            <Image 
              src="/images/f6s.png"
              alt="Top Telecom startups in Virginia"
              height={60}
              width={291}
            />
          </Link>
        </div>
 
        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">How Roads Is Unique</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_player_simple2.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Interactive Conversations</h3>
                  <p>
                    Comment on audio with your voice, creating a completely new layered communication experience.
                  </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_player_nested.png" 
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
               <div className='col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start'>
                <h3>Always Have Context</h3>
                <p>When listening to a comment know exactly what's being referenced, and easily navigate the asynchronous conversation.</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/device_15_channel_invite.png" 
                  alt="Screenshot of Roads app showing how to select friends to add to a channel."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className='col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Control Access</h3>
                <p>You control who has access to your content through channels. Only invited members can listen and collaborate on your conversations.</p>
              </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="h2-lg my-lg text-center">Ways To Use Roads</h2>
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
          <h2 className="h2-lg my-lg text-center">FAQ&apos;s</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="How do I start a conversation on Roads?"
                  answer="You simply hit record in the app and start talking. After you finish recording you can add a title and share your recording in a channel so others can listen."
                />
                <FaqItem 
                  itemNum="two"
                  question="Who can join my channels?"
                  answer="Channels can be joined by anyone the channel owner chooses. If you are friends with someone on Roads you can add them to a channel automatically, if not you can send them a channel invite link. The channel owner controls who is in the channel."
                />
                <FaqItem 
                  itemNum="three"
                  question="How do I listen to comments that have been added to a conversation?"
                  answer="When listening to a conversation if there is a comment, you'll have to option to take the road and listen to the comment. If you decide to listen, when the comment completes playing the original conversation will continue."
                />
                <FaqItem 
                  itemNum="four"
                  question="What is the maximum recording length?"
                  answer="Conversations and comments can be any length."
                />
                <FaqItem 
                  itemNum="five"
                  question="Can I edit or delete my recordings?"
                  answer="There will be no support for editing audio in the initial version. However, you can always delete a recording that you create."
                />
                <FaqItem 
                  itemNum="seven"
                  question="Does the app offer a free trial or a freemium version?"
                  answer="Roads will always have a free version where all the core features will be available. Premium features will also be made available for a small fee."
                />
                <FaqItem 
                  itemNum="eight"
                  question="How can I delete my account and data?"
                  answer={
                    <span>
                      Within the app you can find a <strong>Delete Account</strong> link under settings which will delete your account and all related data. For full instructions <Link href="/delete-account">view this page.</Link>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
          
        </div>

        <div id={styles.section_wait_list}>
          <h2 className='h2-lg my-lg text-center text-primary'>Do More With Your Voice</h2>
          < AppLinks />
        </div>
      </main>
    </>
  );
}
