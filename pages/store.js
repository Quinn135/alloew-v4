import Head from "next/head";

function Image(props) {
  return (
    <div className="border text-center flex flex-col
    justify-center items-center p-3 rounded-lg w-5/6
    m-auto bg-gray-900 border-gray-500 mb-4 mt-4">
        <h3>{props.name}</h3>
      <h4>By : {props.creator}</h4>
      <br />
        <img
          src={"../images/"+props.src}
          className="m-auto object-contain"
          style={{ 'height': '80vh' }}
      ></img>
      <br />
      <a className="btn btn-tertiary"
        href={"../images/" + props.src}
        download>
        Download
      </a>
      <br />
    </div>
  )
}

export default function Store() {
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center text-center py-2">
      <Head>
        <title>Store on Alloew!</title>
      </Head>
      <h1>Welcome to the store!</h1>
      <h4>Here, we sell images that my friends have made (For free!)</h4>
      <br />

      <details className="bg-gray-800 border-gray-500
      w-11/12 border rounded-lg p-3">
        <summary>Homer Simpsons (Click)</summary>
      <Image name="Colored Homer" src="Colored Homer.png"
        creator="Jacob" />
      <Image name="Colorless Homer" src="Colorless Homer.png"
        creator="Jacob" />
      <Image name="Homer is Fine" src="Homer is Fine.png"
        creator="Jacob" />
      <Image
        name="homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer"
        src="homer pregnant with homer inside homers eyes that is throwing up homer thats going to fight homer.png"
        creator="Jacob" />
      <Image name="Fred Simmer" src="Fred Simmer.png"
        creator="Quinn" />
      <Image name="Retro Homer" src="Retro Homer.png"
        creator="Jacob" />
      </details>
    </div>
  )
}
