import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { ProductPage } from "./page/ProductPage";

export const apiUrl = import.meta.env.VITE_BACKEND_URL;

const App: React.FC = () => {
  return (
    <div className="app">
      <nav className="w-full bg-slate-200 shadow">
        <div className="w-full max-w-[1050px] flex justify-start mx-auto ">
          <Navigation />
        </div>
      </nav>
      <main>
        <ProductPage />
      </main>
    </div>
  );
};

export default App;
