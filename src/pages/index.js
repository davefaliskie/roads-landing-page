import styles from '@/styles/Landing.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import AppLinks from '@/components/AppLinks';
import HomeHero from '@/components/home/HomeHero';
import StickyDownload from '@/components/home/StickyDownload';
import { generateFAQSchema, renderSchemaScript } from '@/utils/schema';

const steps = [
  {
    title: 'Record a memo',
    body: 'Share a quick update or a long story, whenever you have a few minutes.',
  },
  {
    title: 'Friends reply to the moment',
    body: 'They listen on their own time and answer right where something caught their ear.',
  },
  {
    title: 'It becomes a conversation',
    body: 'Replies branch off and build on each other, when people have time to talk.',
  },
];

const features = [
  {
    image: '/images/phones/device_road_popup.png',
    alt: "Roads app asking 'Play This Road?' for Ray's reply, 'What nobody told me about going solo', at a specific moment in a voice memo.",
    title: 'Replies land right in context',
    body: 'Reply to the exact moment something catches your ear. Your reply stays pinned there, so friends hear it right where it belongs.',
  },
  {
    image: '/images/phones/device_channel.png',
    alt: "Roads app showing a private channel called 'Day Ones' with seven members and four conversations.",
    title: 'Private channels for your people',
    body: 'Make a space for your friend group, your family, or just the two of you. Only the people you invite can listen and reply.',
  },
  {
    image: '/images/phones/device_home.png',
    alt: 'Roads app home screen listing five channels and new conversations from friends.',
    title: 'Every friendship in one place',
    body: 'New memos and replies from all your channels show up on one home screen, ready to play whenever you have a few minutes.',
  },
];

const channels = [
  {
    image: 'day-ones',
    name: 'Day Ones',
    body: "The friends who've known you the longest.",
    link: { href: '/blogs/private-voice-messaging-apps', label: 'Why private groups work' },
  },
  {
    image: 'book-club',
    name: 'Book Club',
    body: 'Talk through each chapter as you read.',
    link: { href: '/blogs/book-club-app', label: 'Run a virtual book club' },
  },
  {
    image: 'family',
    name: 'Family',
    body: 'Updates everyone can hear, wherever they live.',
    link: { href: '/blogs/stay-connected-long-distance-family', label: 'Staying close from afar' },
  },
  {
    image: 'audio-journal',
    name: 'Audio Journal',
    body: 'Think out loud and keep it for later.',
    link: { href: '/blogs/audio-journaling', label: 'Start an audio journal' },
  },
  {
    image: 'just-us',
    name: 'Just Us',
    body: 'A private space for the two of you.',
    link: { href: '/blogs/couples-communication-app', label: 'Voice memos for couples' },
  },
];

const reviews = [
  {
    body: "I first started using this app with a friend and it's a lot of fun. We use this app now instead of texting or voicemails since we are both traveling and it makes keeping up with each other a lot easier.",
    name: 'Sethconner10',
  },
  {
    body: "A game changer, the interactive audio comments bring conversations to life. It's been super fun chatting with my friends from all around the world on Roads.",
    name: 'makk1ntosh',
  },
  {
    body: "One of the coolest apps I've used in a long time. A great way to communicate with family and friends.",
    name: 'neenu17',
  },
  {
    body: 'Roads allows you to use your voice to stay connected with the world. The app is designed beautifully and is really intuitive.',
    name: 'Nolanmakatche',
  },
  {
    body: "I've tried a lot of chat apps and didn't think Roads would be any different. Glad I gave it a chance because it's much better than I expected!",
    name: 'LFO16',
    extra: true,
  },
  {
    body: 'I was not expecting to use this app as much as I have. It really pulls you in once you start using it!',
    name: 'Jengla11',
    extra: true,
  },
];

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
    question: 'Does Roads work with screen readers?',
    answer:
      'Yes. Roads works with VoiceOver on iPhone and TalkBack on Android, and it keeps improving with direct feedback from blind and visually impaired users.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Go to Settings and tap Delete Account. Your data will be removed. For full instructions view the delete account page.',
    display: (
      <span>
        Go to Settings and tap Delete Account. Your data will be removed. For full instructions{' '}
        <Link href="/delete-account">view this page.</Link>
      </span>
    ),
  },
];

const faqSchema = generateFAQSchema(faqItems);

// The sticky download bar stays hidden while either of these is on screen.
const downloadSections = [`.${styles.hero}`, '#get-roads'];

export default function Home() {
  const videoRef = useRef(null);

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

  // The demo loop plays while it is on screen, and never for reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    if (
      !video ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <script {...renderSchemaScript(faqSchema)} />
      </Head>
      <div id="main-content" className={styles.page}>
        <HomeHero />

        <section className={`${styles.section} ${styles.dark}`}>
          <div className={styles.section_inner}>
            <h2 className={styles.section_title}>
              Voice memos that turn into <span className={styles.accent}>conversations</span>
            </h2>
            <p className={styles.section_lead}>
              Roads combines the ease of a voice memo with the back-and-forth of a group chat. Share
              once, and the conversation grows as friends reply on their own time.
            </p>

            <div className={`${styles.video_frame} ${styles.reveal}`}>
              <video
                ref={videoRef}
                src="/videos/roads-header.mp4"
                poster="/videos/roads-header-poster.jpg"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Animation of a voice memo playing while three friends' replies branch off at different timestamps."
              />
            </div>

            <ol className={`${styles.steps} ${styles.reveal}`}>
              {steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.section_inner}>
            <h2 className={styles.section_title}>
              Built for real <span className={styles.accent}>catch-ups</span>
            </h2>
            <p className={styles.section_lead}>
              The big news, the half-formed plans, the things you learned this year. Room for all of
              it, without the scheduling.
            </p>

            {features.map((feature) => (
              <div key={feature.title} className={`${styles.feature} ${styles.reveal}`}>
                <div className={styles.feature_media}>
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    height={540}
                    width={270}
                    sizes="270px"
                  />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.tinted}`}>
          <div className={styles.section_inner}>
            <h2 className={styles.section_title}>
              A <span className={styles.accent}>channel</span> for each of your people
            </h2>
            <p className={styles.section_lead}>
              Start with your closest friends, then add a channel for anyone you want to hear from
              more often.
            </p>

            <ul className={`${styles.channels} ${styles.reveal}`}>
              {channels.map((channel) => (
                <li key={channel.name} className={styles.channel}>
                  <Image
                    src={`/images/channels/${channel.image}.png`}
                    alt=""
                    height={88}
                    width={88}
                  />
                  <h3>{channel.name}</h3>
                  <p>{channel.body}</p>
                  {channel.link && (
                    <Link href={channel.link.href} className={styles.channel_link}>
                      {channel.link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.section_inner}>
            <h2 className={styles.section_title}>What people are saying</h2>
            <p className={styles.rating}>
              <Image src="/images/fiveStar.svg" alt="" height={24} width={130} />
              4.96 on the App Store
            </p>

            <div className={`${styles.reviews} ${styles.reveal}`}>
              {reviews.map((review) => (
                <figure
                  key={review.name}
                  className={`${styles.review} ${review.extra ? styles.review_extra : ''}`}
                >
                  <Image
                    src="/images/fiveStar.svg"
                    alt="Five star review"
                    height={20}
                    width={108}
                  />
                  <blockquote>{review.body}</blockquote>
                  <figcaption>{review.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.section_tight}`}>
          <div className={`${styles.section_inner} ${styles.access} ${styles.reveal}`}>
            <div>
              <h2>
                Built with the blind and low-vision <span className={styles.accent}>community</span>
              </h2>
              <p>
                Roads is voice first, and many of the people who use it every day are blind or
                visually impaired. Their direct feedback has shaped a long list of updates.
              </p>
              <Link href="/blogs/audio-app-for-blind-users" className={styles.text_link}>
                How Roads works for blind users
              </Link>
            </div>
            <ul>
              <li>Works with VoiceOver on iPhone and TalkBack on Android</li>
              <li>Talk and listen instead of typing and reading</li>
              <li>Updated with direct feedback from blind and visually impaired users</li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.tinted}`}>
          <div className={styles.section_inner}>
            <h2 className={styles.section_title}>FAQs</h2>
            <div className={`${styles.faq} ${styles.reveal}`}>
              <div className="accordion accordion-flush" id="faq_accordion">
                {faqItems.map((item, index) => (
                  <div key={item.question} className="accordion-item">
                    <h3 className="accordion-header" id={`faq_heading_${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq_collapse_${index}`}
                        aria-expanded="false"
                        aria-controls={`faq_collapse_${index}`}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      id={`faq_collapse_${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`faq_heading_${index}`}
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="accordion-body">{item.display || item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="get-roads" className={styles.section}>
          <div className={`${styles.section_inner} ${styles.cta} ${styles.dark} ${styles.reveal}`}>
            <h2>
              Stay close, even when life gets <span className={styles.accent}>busy.</span>
            </h2>
            <p>
              Invite a friend, send a voice memo, and keep the conversation going on your own time.
            </p>
            <div className={styles.cta_download}>
              <AppLinks leftAlign="true" />
            </div>
          </div>
        </section>

        <StickyDownload hideWhileVisible={downloadSections} />
      </div>
    </>
  );
}
