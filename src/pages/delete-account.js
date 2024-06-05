import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <>
      <Navigation />
      <div className='container'>
        <div className='col-md-8 mx-auto mt-4'>
          <h2>How to Delete Your Account and Data</h2>
            <p>We understand that you might decide to delete your account and associated data. 
              We've made this process straightforward for you. Please follow the steps below to proceed with the deletion of your account and all associated data:
            </p>
            
            <ol>
              <li>Start by opening the app on your mobile device.</li>
              <li>Go to your profile and tap the settings icon in the upper right.</li>
              <li>In settings, tap the option labeled <strong>Delete Account</strong>.</li>
              <li>
                After selecting <strong>Delete Account</strong>, you'll be asked to confirm your choice. 
                This step is crucial as it informs you that proceeding will permanently delete your account and all associated data.
              </li>
            </ol>

            <h5>Important Note</h5>
            <p>
              Once you confirm the deletion of you account, all your data will be permanently removed, and this action cannot be undone.
            </p>
            <p>
              If you encounter any issues or have any questions during this process, <Link href="mailto:Roads Audio<dave@roadsaudio.com>" className='btn btn-link p-0'>contact us directly</Link>.
            </p>

            <hr className='m-0'></hr>
            <Image 
              src="/images/DeleteAccount.png" 
              alt="How to delete you account on roads"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
        </div>
      </div>
    </>
  )
}