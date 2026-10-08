import { useEffect, useState } from 'react';
import GetAppLink from '@/components/home/GetAppLink';
import styles from '@/styles/Landing.module.scss';

// Mobile-only download bar, shown between the hero and the closing call to action.
export default function StickyDownload({ hideWhileVisible }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const targets = hideWhileVisible
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);
    const onScreen = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      });
      setVisible(onScreen.size === 0);
    });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [hideWhileVisible]);

  return (
    <div
      className={`${styles.sticky_bar} ${visible ? styles.sticky_bar_visible : ''} d-md-none`}
      aria-hidden={!visible}
    >
      <span>Roads Audio</span>
      <GetAppLink
        className={styles.sticky_button}
        eventName="StickyDownloadClick"
        tabIndex={visible ? 0 : -1}
      >
        Get the app, free
      </GetAppLink>
    </div>
  );
}
