import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive"); 

  const handleClick = (newColor) => {
    setColor(newColor);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-yellow px-3 py-2 rounded-3xl'>
        <button onClick={() => handleClick("red")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' 
        style={{backgroundColor: "red"} }
        >
        Red</button>
        <button onClick={() => handleClick("blue")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' 
        style={{backgroundColor: "blue"} }
        >
        Blue</button>
        <button onClick={() => handleClick("green")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' 
        style={{backgroundColor: "green"} }
        >
        Green</button>
        <button onClick={() => handleClick("gray")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' 
        style={{backgroundColor: "gray"} }
        >
        Gray</button>
        <button onClick={() => handleClick("brown")} className='outline-none px-4 py-1 text-white rounded-full shadow-lg' 
        style={{backgroundColor: "brown"} }
        >
       Brown</button>
      </div>
     </div>
    </div>
  );
}

export default App;

