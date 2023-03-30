import '@/styles/globals.scss'
import { Montserrat } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={montserrat.className}>
    <Component {...pageProps} />
  </main>
}
