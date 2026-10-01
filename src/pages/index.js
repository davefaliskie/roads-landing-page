import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';
import Head from 'next/head';
import { useEffect } from 'react';
import { generateFAQSchema, renderSchemaScript } from '@/utils/schema';

export default function Home() {
  // Fade sections in as they scroll into view. Skipped for reduced motion.
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(styles.reveal_pending);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const sections = document.querySelectorAll(`.${styles.reveal}`);
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top > window.innerHeight) {
        section.classList.add(styles.reveal_pending);
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => section.classList.remove(styles.reveal_pending));
    };
  }, []);

  const faqItems = [
    {
      question: 'What are collaborative voice memos?',
      answer:
        'Voice memos built for conversation. Friends listen on their own time and reply to specific moments, so nothing loses context.',
    },
    {
      question: 'What is a Voice Thread?',
      answer:
        'An ongoing audio conversation. Start with a recording, and friends add replies over time.',
    },
    {
      question: 'How do I start a Voice Thread?',
      answer: 'Tap record and start talking. Then add a title and post it in your channel.',
    },
    {
      question: 'Do we need to be online at the same time?',
      answer:
        'No. Roads is asynchronous. Record when it works for you, and friends reply when it works for them.',
    },
    {
      question: 'Who can hear my recordings?',
      answer: 'Only the people you invite to your private channel.',
    },
    {
      question: 'Can I reply to a specific part of a recording?',
      answer: 'Yes. Reply to any moment, and your response stays linked to it.',
    },
    {
      question: 'Is there a time limit for recordings?',
      answer: 'No. Record as long as you like.',
    },
    {
      question: 'Can I delete or edit my recordings?',
      answer: "You can delete anything you've made. Editing isn't available yet.",
    },
    {
      question: 'Is Roads Audio free?',
      answer: 'Yes. All core features are free. Premium tools are available with Roads Audio Plus.',
    },
    {
      question: 'How do I delete my account?',
      answer:
        'Go to Settings and tap Delete Account. Your data will be removed. For full instructions view the delete account page.',
    },
  ];

  const faqItemNums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <Head>
        <script {...renderSchemaScript(faqSchema)} />
      </Head>
      <main id="main-content" className={styles.main}>
        <Hero
          title={
            <>
              Chat with friends,{' '}
              <span className={styles.hero_accent}>without scheduling a&nbsp;call</span>
            </>
          }
          subtitle="Roads Audio turns voice memos into ongoing conversations. Record when you have time, listen when you can, and reply when you’re ready."
        />

        {/* <div className='text-center'>
          <h2 className="h2-lg my-lg my-lg">Watch The Demo</h2>
          
          <iframe 
            className="youtube-video"
            src="https://www.youtube.com/embed/w_H7ooZYnAY" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            loading='eager'
            >
          </iframe>
        </div> */}

        <div id={styles.section_reviews}>
          <h2 className="h2-lg my-lg text-center">What People Are Saying</h2>
          <div className="container">
            <div className={`${styles.reveal} row`}>
              <Review
                body="I first started using this app with a friend and it's a lot of fun. We use this app now instead of texting or voicemails since we are both traveling and it makes keeping up with each other a lot easier."
                name="Sethconner10"
              />
              <Review
                body="A game changer, the interactive audio comments bring conversations to life. It's been super fun chatting with my friends from all around the world on Roads."
                name="makk1ntosh"
              />
              <Review
                body="One of the coolest apps I've used in a long time. A great way to communicate with family and friends."
                name="neenu17"
              />
              <Review
                body="Roads allows you to use your voice to stay connected with the world. The app is designed beautifully and is really intuitive."
                name="Nolanmakatche"
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
          <h2 className={`${styles.balanced} h2-lg my-lg text-center mx-2`}>
            Voice memos that turn into real conversations
          </h2>

          <div className="container">
            <div className={`${styles.reveal} row justify-content-center mb-5`}>
              <div className="col-11 col-md-9 col-lg-7">
                <p className={`${styles.balanced} text-center`}>
                  Roads combines the ease of a voice memo with the back-and-forth of a group chat.
                  Share once, and the conversation grows as friends reply on their own time.
                </p>
              </div>
            </div>

            <div className={`${styles.reveal} row justify-content-md-center`}>
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}>
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_player_response.png"
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className="col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start">
                <h3>Start a Voice Thread</h3>
                <p>
                  Share a quick update or a long story. Friends listen and respond whenever it fits
                  their day.
                </p>
              </div>
            </div>

            <div className={`${styles.reveal} row my-5 justify-content-md-center`}>
              <div
                className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`}
              >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_player_simple.png"
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
              <div className="col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start">
                <h3>Reply to the exact moment</h3>
                <p>
                  Comment right where something catches your ear. Your reply stays tied to that
                  moment, so the conversation never loses context.
                </p>
              </div>
            </div>

            <div className={`${styles.reveal} row justify-content-md-center`}>
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}>
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_channel.png"
                  alt="Screenshot of Roads app showing private channel titled 'Friends from way back'"
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className="col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start">
                <h3>Keep it between your people</h3>
                <p>
                  Create private spaces for friends or family. Only the people you invite can listen
                  and reply.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className={`${styles.balanced} h2-lg my-lg text-center mx-2`}>
            Built for the people you want to hear from more often
          </h2>
          <div className="container">
            <div className={`${styles.reveal} row`}>
              <UseCase imagePath="/images/icons/chat.svg" title="Catch up on different schedules" />
              <UseCase imagePath="/images/icons/time.svg" title="Stay close across time zones" />
              <UseCase imagePath="/images/icons/team.svg" title="Keep your friend group talking" />
              <UseCase imagePath="/images/icons/update.svg" title="Send family updates" />
              <UseCase imagePath="/images/icons/book.svg" title="Run a private book club" />
              <UseCase imagePath="/images/icons/podcast.svg" title="Keep a shared audio journal" />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">FAQs</h2>
          <div className={`${styles.reveal} row justify-content-center`}>
            <div className="col-10 col-md-8 col-lg-6">
              <div className="accordion" id="faq_accordion">
                {faqItems.slice(0, -1).map((item, index) => (
                  <FaqItem
                    key={item.question}
                    itemNum={faqItemNums[index]}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
                <FaqItem
                  itemNum="ten"
                  question="How do I delete my account?"
                  answer={
                    <span>
                      Go to Settings and tap Delete Account. Your data will be removed. For full
                      instructions <Link href="/delete-account">view this page.</Link>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_wait_list}>
          <div className={`${styles.cta_panel} ${styles.reveal}`}>
            <h2 className={`${styles.balanced} h2-lg text-center text-primary mx-2`}>
              Start a conversation worth catching up on
            </h2>
            <p className="text-center mx-3">
              Invite a friend, send a voice memo, and keep it going on your own time.
            </p>
            <AppLinks />
          </div>
        </div>
      </main>
    </>
  );
}
