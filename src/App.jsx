import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-600">
        <h1 className="text-4xl font-bold text-center text-white">
          Hello World!
        </h1>
      </div>
    </>
  );
}

export default App;
