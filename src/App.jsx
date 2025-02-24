import { useState } from "react"




function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed w-full flex flex-wrap justify-end top-12 px-12">
          <div className="flex flex-wrap flex-col justify-center gap-3 bg-white shadow-xl rounded-xl px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "red", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              red
            </button>
            <button
              onClick={() => setColor("teal")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "teal", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              teal
            </button>
            <button
              onClick={() => setColor("purple")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "purple", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              purple
            </button>
            <button
              onClick={() => setColor("yellowgreen")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "yellowgreen", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              yellowgreen
            </button>
            <button
              onClick={() => setColor("olive")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "olive", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              olive
            </button>
            <button
              onClick={() => setColor("blue")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "blue", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              blue
            </button>
            <button
              onClick={() => setColor("black")}
              className="rounded-full px-4 py-2 text-[#fff] cursor-pointer"
              style={{ backgroundColor: "black", boxShadow: "0 3px 3px rgba(0, 0, 0, 0.15)" }}>
              black
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
