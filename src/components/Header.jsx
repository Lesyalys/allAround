import { useEffect, useState } from "react";
// import { ToggleThemes } from "../interface/ToggleThems";

export const Header = () => {
  const [toggleThem, setToggleThem] = useState(false);

  useEffect(() => {
    // console.log(document.head.style)
    console.log(toggleThem);
  })

  return (
    <header>
      <div className="HeaderBar">
        <span className="Logo">
          <img src="/img/LogoHeader.svg" className="" alt="Logo" />
          <p>CineWorld</p>
        </span>

        <span className="SwithLabel">
          <button onClick={() => setToggleThem(!toggleThem)}>
            <img src="/img/Switch.svg" className="" alt="Theme" />
          </button>
          <p>Dark theme</p>
        </span>
      </div>
    </header>
  );
};
