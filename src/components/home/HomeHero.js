import Image from 'next/image';
import Link from 'next/link';
import AppLinks from '@/components/AppLinks';
import GetAppLink from '@/components/home/GetAppLink';
import styles from '@/styles/Landing.module.scss';

// The stalled "let's find a time" texts from the App Store hero screenshot.
const texts = [
  { day: 'Monday', body: 'Call this week? I have news' },
  { day: 'Thursday', body: 'Stuck at work. Tomorrow?' },
  { day: 'Three weeks later', body: 'We really need to catch up' },
];

function BeforeTexts({ intro }) {
  return (
    <div className={`${styles.texts} ${intro ? styles.intro : ''}`} aria-hidden={intro}>
      <p className={styles.visual_label}>Before Roads</p>
      <div
        className={styles.text_stack}
        role="img"
        aria-label="Text messages between two friends who keep failing to schedule a call."
      >
        {texts.map((text) => (
          <div key={text.day} className={styles.text_chip}>
            <span>{text.day}</span>
            {text.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <header className={styles.hero}>
      <nav className={styles.top_bar} aria-label="Main navigation">
        <Link href="/" className={styles.brand} aria-label="Roads Audio home">
          <Image src="/images/RoadsLogoRound.png" alt="" height={36} width={36} />
          <Image src="/images/RoadsTextBlack.png" alt="Roads Audio" height={32} width={80} />
        </Link>
        <GetAppLink className={styles.top_cta} eventName="HeroGetAppClick">
          Get the app
        </GetAppLink>
      </nav>

      <div className={styles.hero_inner}>
        <div className={styles.hero_text}>
          <h1 className={styles.hero_title}>
            You keep <span className={styles.accent}>meaning</span> to&nbsp;call.
          </h1>
          <p className={styles.hero_subtitle}>
            Roads turns voice memos into conversations, so you and your friends stay close without
            needing to schedule a call.
          </p>

          <div className={styles.hero_download}>
            <AppLinks leftAlign="true" />
          </div>

          <ul className={styles.proof}>
            <li>
              <span className={styles.star} aria-hidden="true">
                ★
              </span>{' '}
              4.96 on the App Store
            </li>
            <li>Free</li>
          </ul>
        </div>

        <div className={styles.hero_visual}>
          <BeforeTexts />
          <div className={styles.hero_after}>
            {/* Phones only: the texts play over the phone's spot, then give way to it. */}
            <BeforeTexts intro />
            <Image
              src="/images/phones/device_player_full.png"
              alt="Roads app playing a voice memo from Isabella, 'I think I'm leaving my job to open the studio', with voice replies from two friends."
              height={800}
              width={400}
              sizes="(min-width: 992px) 360px, 70vw"
              className={styles.hero_phone}
              priority
            />
            <p className={`${styles.visual_label} ${styles.visual_label_on}`}>With Roads</p>
            <p className={styles.visual_caption}>Say it now. They reply when they&apos;re free.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.qr} d-none d-xl-block`}>
        <Image
          src="/images/RoadsAppQR.png"
          alt="QR code to download Roads Audio"
          height={120}
          width={120}
        />
      </div>
    </header>
  );
}
