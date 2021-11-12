import { FaGamepad } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900
    items-center justify-center
    py-2">
      <h1>Welcome to Alloew!</h1>
      <h4>A website where me and my friends make things for fun!</h4>
      <br />
      <div className="rounded border w-2/3 text-center
      justify-center p-2" style={{ 'min-height': '8rem', }}>
        <div className="p-2 border-b">
          <p className="inline-flex items-center">
            <h2>Announcements : </h2>
          </p>
          
        </div>
        <div className="p-2 border-b">
          <h3>New revamped website!</h3>
          <div className="inline-flex items-center">
          <img src="../images/alloew.png" className="object-contain w-1/3" />
          <p className="w-2/3">This is now Alloew Version 4, simpler and better than ever before.</p>
          </div>
        </div>
        <div className="p-2 border-b">
          <h3>Turboman nearing completion</h3>
          <div className="inline-flex items-center">
          <p className="w-2/3">Once Turboman is done, we'll make more, and better games at a much faster speed!</p>
          <FaGamepad size="max" className="object-contain p-3 w-1/3 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
