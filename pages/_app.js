import 'tailwindcss/tailwind.css'
import '../public/styles/globals.css'
import Link from 'next/link'
import Head from "next/head";
import { FaHome, FaGamepad, FaStoreAlt, FaAlignLeft } from 'react-icons/fa'

function MyApp({ Component, pageProps }) {
  return (
    <main
      style={{'backgroundColor': '#100c24',}}
      className="text-white min-h-screen">
      <Head>
        <title>Alloew.com</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="manifest" href="../site.webmanifest" />
      </Head>
      <nav className="flex flex-wrap w-full bg-gray-900
      justify-center sticky top-0 shadow-2xl items-center">
        <a></a>
        <Link href="/">
        <a className="btn-menu btn">
          <FaHome size="32" />
        </a>
        </Link>
        <Link href="/games">
        <a className="btn-menu btn">
          <FaGamepad size="32" />
        </a>
        </Link>
        <Link href="/store">
        <a className="btn-menu btn">
          <FaStoreAlt size="32" />
          </a>
        </Link>
        <Link href="/other">
        <a className="btn-menu btn">
          <FaAlignLeft size="32" />
        </a>
        </Link>
        <a></a>
        </nav>

        <Component {...pageProps} />
    </main>)
}

export default MyApp
