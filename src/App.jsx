import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then((response) => response.json())
  .catch((error) => console.error("Error fetching countries:", error));

function App() {
  return (
    <>
      <h1>Get started</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
