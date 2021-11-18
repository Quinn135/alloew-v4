import Head from "next/head";

export default function Other() {
  return (
    <div className="flex flex-col dark:bg-gray-900 bg-gray-100
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
      <details className="border-gray-500 border
      rounded-lg p-3 text-center w-11/12">
        <summary>Chat</summary>
        <br />
      <iframe
        style={{ 'width': '90%', 'height': '70vh', }}
        className="rounded-lg m-auto"
        src={"https://deadsimplechat.com/kM-pjLD77"}>
        </iframe>
        <br />
      </details>
      <br />
      <br />
      <details className="border-gray-500 border
      rounded-lg p-3 text-center md:w-2/3 w-11/12">
        <summary>Blog 11/12/21</summary>
      <div className="flex flex-col justify-center
      text-left items-center">
        <p className="sm:w-1/3 w-2/3 ">&emsp;&emsp;This is definitely a real blog.</p>
      </div>
      </details>
      <br />
      <a
        target="_blank"
        rel="noreferrer noopener"
        className="btn-primary btn"
        href="https://discord.com/api/oauth2/authorize?client_id=887830738391662592&permissions=0&scope=bot">
        Invite donkey bot to your discord server!
      </a>
      <div className="border-t border-gray-500 w-full"></div>
      <h4>Contact me : </h4>
      <a href="mailto:quinn.flynn.coop@gmail.com">
          quinn.flynn.coop@gmail.com
      </a>
    </div>
  )
}
