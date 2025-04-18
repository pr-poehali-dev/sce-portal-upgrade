import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16">
        <h1 className="text-4xl font-bold">Ваше приложение</h1>
        <p className="text-center text-xl">
          Начните разработку с этой базовой структуры
        </p>
        <div className="flex items-center gap-4">
          <button
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={() => setCount((count) => count + 1)}
          >
            Счётчик: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
