import Link from 'next/link';
import styles from '@/styles/BlackFriday.module.scss';
import { DEAL_PRICE, LIFETIME_PRICE, useDealPhase } from '@/utils/blackFriday';

// Top-of-page link to /black-friday, hidden once the deal ends. Remove it after
// Dec 1 along with the rest of the Black Friday wording.
export default function BlackFridayBanner() {
  const { phase } = useDealPhase();
  if (phase === 'ended') return null;

  return (
    <Link href="/black-friday" className={styles.promo}>
      <span>
        <b>Black Friday:</b> Roads Audio Plus for life, {DEAL_PRICE} once (then {LIFETIME_PRICE}).
        Nov 26 – Dec 1.
      </span>
    </Link>
  );
}
