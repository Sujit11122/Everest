export default function landing(){
    return(
        <div>
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
        </div>
    )
}