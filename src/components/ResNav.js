import React, { useState, useEffect } from "react";

function ResNav() {
  const [navToggle, setNavToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleBtn = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    const updateDimension = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <nav>
      {(navToggle || windowWidth > 600) && (
        <ul className="menu">
          <li className="nav-item">Home</li>
          <li className="nav-item"><a className="nav-link" href="https://www.youtube.com">Watching</a></li>
          <li className="nav-item"><a className="nav-link" href="https://www.amazon.com">Shopping</a></li>
          <li className ="nav-item"><a className="nav-link" href="https://www.audible.com">Listening</a></li>
        </ul>
      )}

      <button onClick={toggleBtn} className="nav-btn">
        Open nav
      </button>
    </nav>
  );
}

export default ResNav;