import { FaGamepad } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center text-center
    py-2">
      <Head>
        <title>Home on Alloew!</title>
      </Head>
      <h1>Welcome to Alloew!</h1>
      <h4>A website where me and my friends make things for fun!</h4>
      <br />
      <div className="rounded-lg border w-2/3 text-center
      justify-center p-2 border-gray-500" style={{ 'min-height': '8rem', }}>
        <div className="p-2 border-b border-gray-500">
          <h3>New revamped website!</h3>
          <div className="inline-flex items-center">
          <img src="../images/alloew.png" className="hidden sm:block object-contain w-1/3" />
          <p className="w-full sm:w-2/3">This is now Alloew Version 4, simpler and better than ever before.</p>
          </div>
        </div>
        <div className="p-2 border-b border-gray-500">
          <h3>Turboman nearing completion</h3>
          <div className="inline-flex items-center">
          <p className="w-full sm:w-2/3">Once Turboman is done, we'll make more, and better games!</p>
          <FaGamepad size="max" className="hidden sm:block object-contain p-3 w-1/3 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
