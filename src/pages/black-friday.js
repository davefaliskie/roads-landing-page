import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AppLinks from '@/components/AppLinks';
import GetAppLink from '@/components/home/GetAppLink';
import landing from '@/styles/Landing.module.scss';
import styles from '@/styles/BlackFriday.module.scss';
import { generateFAQSchema, renderSchemaScript } from '@/utils/schema';
import { DEAL_PRICE, LIFETIME_PRICE, useDealPhase } from '@/utils/blackFriday';

const features = [
  { title: 'Transcripts', body: 'Read along with any Road, or skim one when you can’t listen.' },
  { title: 'Playback speed', body: 'Listen faster to catch up, or slower to take it all in.' },
  { title: 'Auto Play', body: 'Play a whole conversation start to finish, replies and all.' },
  { title: 'Downloads', body: 'Save the recordings you want to keep forever.' },
  { title: 'Upload audio', body: 'Share a recording you already made on your phone.' },
  { title: 'Markers', body: 'Mark the moments you want to come back to.' },
];

const faqItems = [
  {
    question: 'Is this a subscription?',
    answer:
      'No. Lifetime is a one-time purchase. It never renews, and every Plus feature stays unlocked for good.',
  },
  {
    question: 'How long does the Black Friday price last?',
    answer: `From Thursday, November 26 through Tuesday, December 1, 2026 at 11:59 pm ET. After that, Roads Audio Plus Lifetime is ${LIFETIME_PRICE}.`,
  },
  {
    question: 'How do I get it?',
    answer:
      'Open Roads and tap the gold Black Friday banner on your home screen, or tap any Plus feature. Lifetime is the first option on the screen that opens.',
  },
  {
    question: 'I already pay for Plus yearly or monthly. Can I switch?',
    answer:
      'Yes. Buy Lifetime in the app, then cancel your subscription in your App Store or Google Play settings so it doesn’t renew. The stores don’t cancel it for you.',
  },
  {
    question: 'Does it work on iPhone and Android?',
    answer:
      'Yes. Plus is tied to your Roads account, so it unlocks on any phone where you sign in, iPhone or Android.',
  },
  {
    question: 'What does it cost outside the US?',
    answer:
      'Prices here are in US dollars. The App Store and Google Play show the price in your local currency.',
  },
];

const faqSchema = generateFAQSchema(faqItems);

// The gold membership card from the Black Friday reels' end screen.
function GoldCard({ className = '' }) {
  return (
    <div className={`${styles.card_wrap} ${className}`}>
      <div className={styles.card} role="img" aria-label="Roads Audio Plus Lifetime card">
        <span className={styles.card_rings} aria-hidden="true" />
        <div className={styles.card_top}>
          <Image src="/images/RoadsLogoRound.png" alt="" height={44} width={44} />
          <span className={styles.card_brand}>Roads Audio Plus</span>
          <span className={styles.card_tag}>Black Friday</span>
        </div>
        <p className={styles.card_title}>Lifetime</p>
        <p className={styles.card_sub}>Every Plus feature, unlocked.</p>
        <span className={styles.card_pill}>Ends Dec 1</span>
        <span className={styles.card_shine} aria-hidden="true" />
      </div>
    </div>
  );
}

function Price() {
  return (
    <p className={styles.price}>
      <span className={styles.price_was}>
        <span className="visually-hidden">Price after Dec 1: </span>
        <s>{LIFETIME_PRICE}</s>
      </span>
      <span className={styles.price_now}>
        <span className="visually-hidden">Black Friday price: </span>
        {DEAL_PRICE}
      </span>
      <span className={styles.price_once}>once</span>
    </p>
  );
}

export default function BlackFriday() {
  const { phase, timeLeft } = useDealPhase();
  const ended = phase === 'ended';

  return (
    <>
      <Head>
        <script {...renderSchemaScript(faqSchema)} />
      </Head>
      <div id="main-content" className={landing.page}>
        <header className={`${landing.hero} ${styles.hero}`}>
          <nav className={landing.top_bar} aria-label="Main navigation">
            <Link href="/" className={landing.brand} aria-label="Roads Audio home">
              <Image src="/images/RoadsLogoRound.png" alt="" height={36} width={36} />
              <Image src="/images/RoadsTextBlack.png" alt="Roads Audio" height={32} width={80} />
            </Link>
            <GetAppLink className={landing.top_cta} eventName="BlackFridayGetAppClick">
              Get the app
            </GetAppLink>
          </nav>

          <div className={`${landing.hero_inner} ${styles.hero_inner}`}>
            <div className={landing.hero_text}>
              <p className={styles.eyebrow}>Black Friday · Nov 26 – Dec 1</p>
              <h1 className={landing.hero_title}>
                Roads Audio Plus, <span className={landing.accent}>for life.</span>
              </h1>

              {ended ? (
                <>
                  <p className={landing.hero_subtitle}>
                    The Black Friday price has ended. Roads Audio Plus Lifetime is {LIFETIME_PRICE},
                    a one-time purchase with no subscription.
                  </p>
                  <div className={landing.hero_download}>
                    <AppLinks leftAlign="true" />
                  </div>
                </>
              ) : (
                <>
                  {/* Phones show the card here instead; the card says it already. */}
                  <p className={`${landing.hero_subtitle} ${styles.desktop_only}`}>
                    Pay once and keep every Plus feature for good. No subscription.
                  </p>
                  <GoldCard className={styles.card_inline} />
                  <Price />
                  <p className={styles.after}>
                    Goes up to <b>{LIFETIME_PRICE}</b> after Dec 1.
                  </p>
                  {phase === 'live' && timeLeft && (
                    <p className={styles.countdown}>Ends in {timeLeft}</p>
                  )}
                  {phase === 'upcoming' && (
                    <p className={styles.countdown}>Starts Thursday, Nov 26</p>
                  )}
                  <div className={landing.hero_download}>
                    <AppLinks leftAlign="true" />
                  </div>
                  {phase === 'live' && timeLeft && (
                    <p className={styles.how}>
                      Already on Roads? Tap the gold banner on your home screen.
                    </p>
                  )}
                </>
              )}
            </div>

            <GoldCard className={styles.card_side} />
          </div>
        </header>

        <section className={`${landing.section} ${landing.dark}`}>
          <div className={landing.section_inner}>
            <h2 className={landing.section_title}>
              Everything in <span className={landing.accent}>Plus</span>
            </h2>
            <p className={landing.section_lead}>
              Roads is free for voice memos and replies. Plus adds extras for how you listen to,
              save and share your conversations.
            </p>
            <ul className={styles.features}>
              {features.map((feature) => (
                <li key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={landing.section}>
          <div className={landing.section_inner}>
            <h2 className={landing.section_title}>
              Pay once, not <span className={landing.accent}>every year</span>
            </h2>
            <p className={landing.section_lead}>
              {ended
                ? 'Lifetime costs about two and a half years of Plus, and you never pay again.'
                : 'Lifetime costs less than two years of Plus, and you never pay again.'}
            </p>
            <div className={styles.plans}>
              <div className={styles.plan}>
                <h3>Yearly</h3>
                <p className={styles.plan_price}>
                  $39.99 <span>/ year</span>
                </p>
                <p>Renews every year until you cancel.</p>
              </div>
              <div className={`${styles.plan} ${styles.plan_best}`}>
                <h3>Lifetime</h3>
                {ended ? (
                  <p className={styles.plan_price}>
                    {LIFETIME_PRICE} <span>once</span>
                  </p>
                ) : (
                  <p className={styles.plan_price}>
                    <s>{LIFETIME_PRICE}</s> {DEAL_PRICE} <span>once</span>
                  </p>
                )}
                <p>
                  {ended
                    ? 'One purchase. Plus stays unlocked for good.'
                    : `Black Friday price through Dec 1, then ${LIFETIME_PRICE}.`}
                </p>
              </div>
            </div>
            <p className={styles.fine_print}>
              US prices. The App Store and Google Play show your local price.
            </p>
          </div>
        </section>

        <section className={`${landing.section} ${landing.tinted}`}>
          <div className={landing.section_inner}>
            <h2 className={landing.section_title}>FAQs</h2>
            <div className={landing.faq}>
              <div className="accordion accordion-flush" id="bf_faq_accordion">
                {faqItems.map((item, index) => (
                  <div key={item.question} className="accordion-item">
                    <h3 className="accordion-header" id={`bf_faq_heading_${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#bf_faq_collapse_${index}`}
                        aria-expanded="false"
                        aria-controls={`bf_faq_collapse_${index}`}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      id={`bf_faq_collapse_${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`bf_faq_heading_${index}`}
                      data-bs-parent="#bf_faq_accordion"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={landing.section}>
          <div className={`${landing.section_inner} ${landing.cta} ${landing.dark}`}>
            <h2>
              Stay close, for <span className={landing.accent}>good.</span>
            </h2>
            <p>
              {ended
                ? `Roads Audio Plus Lifetime is ${LIFETIME_PRICE}, once.`
                : `${DEAL_PRICE} once, through Tuesday, Dec 1. Then ${LIFETIME_PRICE}.`}
            </p>
            <div className={landing.cta_download}>
              <AppLinks leftAlign="true" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
