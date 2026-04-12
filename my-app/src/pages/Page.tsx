import { useState } from "react";
import "./Page.css";
import titel from "../assets/Tittel.png"
import kake from "../assets/Kake.png"
import kirke from "../assets/Kirke.png"
import middag from "../assets/Middag.png"
import slutt from "../assets/Slutt.png"
import door from "../assets/door.png"
import blomsttitel from "../assets/blomst.png"



type Tab = "program" | "meny" | "bordkart";

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("program");

  return (
    <div className="page">
      <div className="frame">
        <div className="inner-frame">
          
          <div className="card">
             <img src={titel}></img>
            {/* Top divider */}
            <div className="divider" />

            {/* Tabs */}
            <div className="tabs">
              <button onClick={() => setActiveTab("program")}>Program</button>
              <button onClick={() => setActiveTab("meny")}>Meny</button>
              <button onClick={() => setActiveTab("bordkart")}>Bordkart</button>
            </div>

            {/* Content */}
            <div className="tab-content">
              {activeTab === "program" && <Program />}
              {activeTab === "meny" && <Meny />}
              {activeTab === "bordkart" && <Bordkart />}
            </div>

            {/* Bottom divider */}
            <div className="divider" />

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
    ["13.45", "Brudeparet kjører videre", slutt, 16],
    ["15.00", "Lokalet åpner på vaulali ", door, 32],
    ["16.00", "Brudeparet ankommer", slutt, 16],
    ["16.30", "Middag", middag, 32],
    ["19.00", "Kaffe og kaker", kake, 32],
    ["23.30", "Farvel til brudeparet", slutt, 16],
  ];

  return (
    <div>
      <h1>Program</h1>
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
    <div>
      <h1>Meny</h1>

      <h2>Varmt</h2>
      <ul>
        <li>Tapasboller med spicy tomatsaus</li>
        <li>Tapaspølser med løk og paprika</li>
        <li>Sticky kyllingvinger</li>
        <li>BBQ-marinerte pigwings</li>
        <li>Asiatiske kyllingspyd</li>
        <li>Krydderbakte småpoteter</li>
        <li>Baconsurrede dadler</li>
      </ul>

      <h2>Kaldt</h2>
      <ul>
        <li>Brokkolisalat med rødløk, eple, granateple, mango</li>
        <li>Pastasalat med rød pesto og kylling (hvete)</li>
        <li>Spinatsalat med avokado og spekeskinke</li>
        <li>Melonsalat med fetaost</li>
        <li>Dadler med blåmuggost og valnøtter</li>
        <li>Focaccia (hvete)</li>
        <li>Aioli</li>
      </ul>
    </div>
  );
}

function Bordkart() {
  return (
    <div>
      <h1>Bordkart</h1>
      <p>Kommer snart...</p>
    </div>
  );
}