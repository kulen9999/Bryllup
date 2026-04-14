import { useState } from "react";
import "./Page.css";
import titel from "../assets/Tittel.png"
import kake from "../assets/Kake.png"
import kirke from "../assets/Kirke.png"
import middag from "../assets/Middag.png"
import slutt from "../assets/Slutt.png"
import door from "../assets/door.png"
import blomsttitel from "../assets/blomst.png"



type Tab = "program" | "meny" | "bordkart" | "sangtekster";

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("program");

  return (
    <div className="page">
      <div className="frame">
        <div className="inner-frame">
          
          <div className="card">
             <img src={titel}  className="titelIMG"></img>
            {/* Top divider */}
            <div className="divider" />

            {/* Tabs */}
            <div className="tabs">
              <button onClick={() => setActiveTab("program")}>Program</button>
              <button onClick={() => setActiveTab("meny")}>Meny</button>
              <button onClick={() => setActiveTab("bordkart")}>Bordkart</button>
              <button onClick={() => setActiveTab("sangtekster")}>Sangtekster</button>
            </div>

            {/* Content */}
            <div className="tab-content">
              {activeTab === "program" && <Program />}
              {activeTab === "meny" && <Meny />}
              {activeTab === "bordkart" && <Bordkart />}
              {activeTab === "sangtekster" && <Sangtekster />}
            </div>

            {/* Bottom divider */}
            <div className="divider" />
            {/*<img src={blomsttitel}  className="titelIMG"></img>*/}
          </div>

        </div>
      </div>
    </div>
  );
}
/* ---------- SUB COMPONENTS ---------- */

function Program() {
  const items = [
    ["12.30", "Vielse", kirke, 32],
    ["13.45", "Brudeparet kjører videre", slutt, 24],
    ["15.00", "Lokalet åpner på vaulali ", door, 32],
    ["16.00", "Brudeparet ankommer", slutt, 24],
    ["16.30", "Middag", middag, 32],
    ["19.00", "Kaffe og kaker", kake, 32],
    ["23.30", "Farvel til brudeparet", slutt, 24],
  ];

  return (
    <div>
      <h1>Program</h1>
      <div className="divider" />
      {items.map(([time, text, icon, size], i) => (
        <div key={i} className="row">
          <span>{time}</span>
          <span>{text}</span>
          {icon!=null && ( 
            <span><img src={icon} height={size}/></span>
          )}
          
        </div>
      ))}
    </div>
  );
}

function Meny() {
  return (
    <div className="menu">
      <h1>Meny</h1>
      <div className="divider" />
      <div className="menu-columns">
        {/* LEFT */}
        <div>
          <h2>Varmt</h2>
          <ul>
            <li>Tapasboller (spicy)</li>
            <li>Tapaspølser</li>
            <li>Sticky-kyllingvinger</li>
            <li>BBQ pigwings</li>
            <li>Asiatiske-kyllingspyd</li>
            <li>Bakte småpoteter</li>
            <li>Baconsurrede-dadler</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2>Kaldt</h2>
          <ul>
            <li>Brokkolisalat++</li>
            <li>Pastasalat pesto, kylling (hvete)</li>
            <li>Spinatsalat</li>
            <li>Melonsalat, fetaost</li>
            <li>Dadler + blåmuggost</li>
            <li>Focaccia (hvete)</li>
            <li>Aioli</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Bordkart() {
  return (
    <div>
      <h1>Bordkart</h1>
      <div className="divider" />
      <p>Kommer snart...</p>
    </div>
  );
}

function Sangtekster() {
  return (
    <div>
      <h1>Sangtekster</h1>
      <div className="divider" />
      <p>Kommer snart...</p>
    </div>
  );
}