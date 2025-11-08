// import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { HeaderForm } from "./components/HeaderForm.jsx";
import { ContainerForm } from "./components/ContainerForm.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <HeaderForm />
      <ContainerForm />
    </div>
  );
}

export default App;
