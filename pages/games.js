import Head from "next/head";

export default function Turboman() {
  function TBV(Version, Title) {
    document.getElementById("Turboman").src = "../Turboman/" + Version + "/index.html";
    document.getElementById("Version").innerHTML = "Turboman " + Title + "!";
  }
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center py-2">
      <Head>
        <title>Games on Alloew!</title>
      </Head>
      <h1>Games!</h1>
      <br />
      <details className="border-gray-500 border
      rounded-lg p-3 text-center w-11/12">
        <summary>Turboman</summary>
      <div className="flex flex-col
      items-center justify-center py-2">
        <h3 id="Version">Turboman V1.0 Snapshot 5!</h3>
        <iframe
          id="Turboman"
          style={{ 'width': '90vw', 'height': '70vh', }}
          src={"../Turboman/V1.0S5/index.html"} />
        </div>
        <details className="text-center
        rounded-lg text-white p-3 m-auto
        border-gray-500 border w-11/12">
        <summary>Versions (Click)</summary>
        <div className="flex space-y-1 justify-center flex-row
        flex-wrap space-x-2 p-2">
          <button></button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S5", "V1.0 Snapshot 5")}>
            V1.0S5
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S4.1", "V1.0 Snapshot 4.1")}>
            V1.0S4.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S4", "V1.0 Snapshot 4")}>
            V1.0S4
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S3", "V1.0 Snapshot 3")}>
            V1.0S3
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S2", "V1.0 Snapshot 2")}>
            V1.0S2
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("V1.0S1", "V1.0 Snapshot 1")}>
            V1.0S1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("B1.1.1", "B1.1.1")}>
            B1.1.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("B1.1", "B1.1")}>
            B1.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("B1.0", "B1.0")}>
            B1.0
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A3.3.1", "A3.3.1")}>
            A3.3.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A3.3", "A3.3")}>
            A3.3
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A3.2.1", "A3.2.1")}>
            A3.2.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A3.2", "A3.3.1")}>
            A3.2
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A3.1", "A3.1")}>
            A3.1
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A2.0", "A2.0")}>
            A2.0
          </button>
          <button
            className="btn-primary btn"
            onClick={() => TBV("A1.0", "A1.0")}>
            A1.0
          </button>
        </div>
        </details>
      </details>
      <br />
      <br />
    </div>
  )
}
