export default function Turboman() {
  function TBV(Version, Title) {
    document.getElementById("Turboman").src = "../Turboman/" + Version + "/index.html";
    document.getElementById("Version").innerHTML = "Turboman " + Title + "!";
  }
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center py-2">
      <h1>Games!</h1>
      <br />
      <div className="flex flex-col border rounded-lg
      items-center justify-center py-2">
        <h3 id="Version">Turboman B1.1.1!</h3>
        <iframe
          id="Turboman"
          style={{ 'height': '90vh', 'width': '90vw', }}
          src={"../Turboman/B1.1.1/index.html"} />
      </div>
      <br />
      <details className="text-center bg-gray-800
        w-11/12 rounded text-white">
        <summary className="text-2xl">Versions (Click)</summary>
        <div className="flex space-y-1 justify-center flex-row
        flex-wrap space-x-2 p-2">
          <button></button>
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
      <br />
      <iframe
        style={{ 'height': '90vh', 'width': '90vw', }}
        className="rounded-lg"
        src={"https://deadsimplechat.com/kM-pjLD77"}>
      </iframe>
    </div>
  )
}
