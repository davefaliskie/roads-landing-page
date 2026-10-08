import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';
import AppLinks from '@/components/AppLinks';
import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from '@/constants/appLinks';
import styles from '@/styles/Landing.module.scss';

// Same device rules as /download, plus iPads that identify as a Mac.
const storeUrlForDevice = () => {
  const userAgent = navigator.userAgent || '';
  if (/Android/i.test(userAgent)) return GOOGLE_PLAY_URL;
  if (/iPad|iPhone|iPod/i.test(userAgent)) return APPLE_STORE_URL;
  if (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1) return APPLE_STORE_URL;
  return null;
};

// A download link that goes straight to the right store on a phone and opens
// the QR code on a computer. Without script it falls back to /download.
export default function GetAppLink({ className, eventName, children, ...linkProps }) {
  const dialogRef = useRef(null);

  const handleClick = (event) => {
    ReactGA.event({ category: 'Button Click', action: eventName });

    const storeUrl = storeUrlForDevice();
    event.preventDefault();
    if (storeUrl) {
      window.location.href = storeUrl;
    } else {
      dialogRef.current?.showModal();
    }
  };

  // A click on the dialog element itself is a click on the backdrop.
  const handleDialogClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <>
      <Link
        href="/download"
        prefetch={false}
        className={className}
        onClick={handleClick}
        {...linkProps}
      >
        {children}
      </Link>

      <dialog
        ref={dialogRef}
        className={styles.qr_dialog}
        aria-labelledby="qr-dialog-title"
        onClick={handleDialogClick}
      >
        <button
          type="button"
          className={styles.qr_dialog_close}
          aria-label="Close"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <h2 id="qr-dialog-title">Scan to get Roads</h2>
        <p>Point your phone&apos;s camera at the code to download the app.</p>
        <Image
          src="/images/RoadsAppQR.png"
          alt="QR code to download Roads Audio"
          height={220}
          width={220}
          loading="eager"
        />
        <AppLinks />
      </dialog>
    </>
  );
}
