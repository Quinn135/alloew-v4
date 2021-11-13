import Head from "next/head";

export default function Other() {
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center
    py-2">
      <Head>
        <title>Other on Alloew!</title>
      </Head>
      <h1>Other/Credits</h1>
      <br />
      <h4>Quinn : Lead Developer</h4><br />
      <h4>Flynn : Lead Artist</h4><br />
      <h4>Jacob : Simpson Creator and Map Designer</h4><br />
      <h4>Mycheal, Richard, Quinn, Flynn, Jacob : Game Tester</h4><br />
      <div className="border-t border-gray-500 w-full"></div>
      <br />
      <a
        target="_blank"
        rel="noreferrer noopener"
        className="btn-primary btn"
        href="https://discord.com/api/oauth2/authorize?client_id=887830738391662592&permissions=0&scope=bot">
        Invite donkey bot to your discord server!
      </a>
      <br />
      <div className="border-t border-gray-500 w-full"></div>
      <br />
      <div className="flex flex-col justify-center
      text-left p-3 items-center">
        <h3 className="text-center">Blog 11/12/21</h3>
        <p className="sm:w-1/3 w-2/3 ">&emsp;&emsp;Lets talk about this website. I coded it from scratch, and this is the fourth, and I think final version of the website. If you have any suggestions for the website, and things that should be added, just email me with the link below. Thanks!</p>
      </div>
      <br />
      <div className="border-t border-gray-500 w-full"></div>
      <h4>Contact me : </h4>
      <a href="mailto:quinn.flynn.coop@gmail.com">
          quinn.flynn.coop@gmail.com
      </a>
    </div>
  )
}
