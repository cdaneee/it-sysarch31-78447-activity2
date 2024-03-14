import React from "react";

function Header() {
    return(
        <header>
            <nav>
              <label className="header-label">CLEARDANE</label>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;