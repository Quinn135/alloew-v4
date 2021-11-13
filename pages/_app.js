import 'tailwindcss/tailwind.css'
import '../public/styles/globals.css'
import Link from 'next/link'
import Head from "next/head";
import { useRouter } from 'next/router';
import { FaHome, FaGamepad, FaStoreAlt, FaAlignLeft } from 'react-icons/fa'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <main
      style={{'backgroundColor': '#100c24',}}
      className="text-white min-h-screen">
      <Head>
        <title>Alloew.com</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="This is alloew! A place where us and our friends make things for fun! So far, we have Turboman, and more games are coming! We have also started a blog, and I am working on all the technical stuff behind the scenes. Have Fun!!"
        />
        <meta name="" />
        <meta property="og:title" content="Alloew!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://alloew.com/" />
        <meta property="og:image" content="https://alloew.com/images/alloew.png" />
        <meta property="og:description" content="This is alloew! A place where us and our friends make things for fun! So far, we have Turboman, and more games are coming! We have also started a blog, and I am working on all the technical stuff behind the scenes. Have Fun!!" />
        <meta name="theme-color" content="#2315bf" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="manifest" href="../site.webmanifest" />
      </Head>
      <nav className="flex flex-wrap w-full bg-gray-900
      justify-center sticky top-0 shadow-2xl items-center">
        <a></a>
        <Link href="/">
          <a
          className={router.pathname == "/" ? "active btn btn-menu" : "btn btn-menu"}>
          <FaHome size="32" />
        </a>
        </Link>
        <Link href="/games">
          <a
          className={router.pathname == "/games" ? "active btn btn-menu" : "btn btn-menu"}>
          <FaGamepad size="32" />
        </a>
        </Link>
        <Link href="/store">
          <a
          className={router.pathname == "/store" ? "active btn btn-menu" : "btn btn-menu"}>
          <FaStoreAlt size="32" />
          </a>
        </Link>
        <Link href="/other">
          <a
          className={router.pathname == "/other" ? "active btn btn-menu" : "btn btn-menu"}>
          <FaAlignLeft size="32" />
        </a>
        </Link>
        <a></a>
        </nav>

        <Component {...pageProps} />
    </main>)
}

export default MyApp
