import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Roads</title>
        <meta name="description" content="A New Way To Experience Audio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/Roads.png"
          width={300}
          height={300}
          alt='Roads Logo'
        />
        <h1>Roads</h1>
      </main>
    </>
  )
}
