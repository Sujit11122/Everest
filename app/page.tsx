import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-500">
      <div className=" text-center font-bold text-green-600">
        <h2> Project tailwind</h2>
      </div>
      <div className=".text-left text-black" >
        <p> This is the left alignment</p>
      </div>
      <div className="text-right text-black">
        <p> This is the right alignment</p>
      </div>
      <hr></hr>
      <div className="m-4" >
        <ul className="list-disc">
        <li>Sudhakar</li>
        <li>Riyaj</li>
        <li>Bishow</li>
        </ul>
      </div>
        <div className="flex justify-center  text-yellow-600">
          <button className="m=1 p=1 bg-green-300 rounded-lg">Click Me</button>
        </div>
        <div className="flex justify-center text-white">
          <button className="m=1 p=1 bg-orange-600 rounded-lg">
            Hover Over Me
          </button>
        </div>
        <div className="border border-red-700 rounded-lg m-4 p-4">
          <p> This section has a border and corners.</p>
        </div>
        <div className="p-4 m-4 bg-slate-300 rounded-lg ">
          <p>This section has a padding and margin</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="p-3 m-3 bg-slate-200">Grid 1</div>
          <div className="p-3 m-3 bg-slate-200">Grid 2</div>
        </div>
        <div className="p-5 m-5 bg-amber-600">
          <p className="font-serif">
            {" "}
            Australia beats England and lead by 2-0 in odi series.
          </p>
        </div>
        <div className="shadow-md m-3 p-3 border border-rose-800"> this is shadow</div>
        
          <footer className="text-center bg-orange-400" style={{border:"2px solid red"}}>
            <p>Contact</p>
            <p>Email: sujit.gautam@selu.edu</p>
            <p>Phone number: 9859565676</p>
          </footer>
        
      
    </div>
  );
}
