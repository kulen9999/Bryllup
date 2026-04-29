import { useState } from "react";
import "./Page.css";
import titel from "../assets/Tittel.jpg"
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
    ["13.45", "Brudeparet kjører videre", slutt, 20],
    ["15.00", "Lokalet åpner på Vaulali ", door, 32],
    ["16.00", "Brudeparet ankommer", slutt, 20],
    ["16.30", "Middag", middag, 32],
    ["19.00", "Kaffe og kaker", kake, 32],
    ["23.30~", "Farvel til brudeparet", slutt, 20],
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
  const tables = [
    {
      table: 0,
      left: ["Terje", "Dorthe", "Anne Emilie", "Mattias", "Anita", "Stig"],
      right: ["Hiba", "Marte", "Markus", "Daniel S.", "Amalie"],
    },
    {
      table: 1,
      left: ["Thea", "Aksel", "Samuel K.", "Martin K."],
      right: ["Martine", "Martin H.", "Karl Jonas"],
    },
    {
      table: 2,
      left: ["Nils Magne", "Tone", "Ole Jakob", "Elin B."],
      right: ["Anne", "Bjørn-Egil", "Hanne"],
    },
    {
      table: 3,
      left: ["Ruben", "Siv Ingfrid", "Kristin", "Bjørn Magne"],
      right: ["Rolf", "Kristian", "Turid Marie"],
    },
    {
      table: 4,
      left: ["Tommy", "Jørn", "Ståle", "Selma"],
      right: ["Solfrid", "Maria G.", "Sven Jostein", "Sandra"],
    },
    {
      table: 5,
      left: ["Ester", "Lisbeth", "Øyvind"],
      right: ["Ingrid", "Arne", "Karl Johan", "Elin T."],
    },
    {
      table: 6,
      left: ["Ane", "Dina", "Sara Oline", "Benjamin"],
      right: ["Belen", "Jaime", "Steffen", "Eirik"],
    },
    {
      table: 7,
      left: ["Silas", "Stine", "Hannah"],
      right: ["Maria K.", "Sine"],
    },
    {
      table: 8,
      left: ["Audun", "Sofie", "Elias"],
      right: ["Synnøve", "Daniel H.", "Julien", "Tonje"],
    },
    {
      table: 9,
      left: ["Roald", "Benedikte"],
      right: ["Endre", "Kristine", "Johannes"],
    },
    {
      table: 10,
      left: ["Pauli", "Samuel Z.", "Ida"],
      right: ["Ole Thomas", "Andreas", "Øivind", "Jannike"],
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedTable, setSelectedTable] = useState<number | null>(-1);
  const tablesSearch = []

  const matchingTables = tables.filter((table) =>
    [...table.left, ...table.right]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const activeTable =
    selectedTable !== null
      ? tables.find((t) => t.table === selectedTable)
      : null;

  if (activeTable) {
    return (
      <div className="bordkart">
        <h1>Bordkart</h1>
        <div className="divider" />

        <button
          className="back-button"
          onClick={() => {
            setSelectedTable(null);
            setSearch("");
          }}
        >
          ← Til oversikt
        </button>

        <div className="single-table-view">
          <h2>
            {activeTable.table === 0
              ? activeTable.name
              : `Bord ${activeTable.table}`}
          </h2>

          <div className="table-detail">
            <div className="table-side">
              {activeTable.left.map((person, i) => (
                <div key={i} className="seat">
                  {person}
                </div>
              ))}
            </div>

            <div className="table-middle" />

            <div className="table-side">
              {activeTable.right.map((person, i) => (
                <div key={i} className="seat">
                  {person}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bordkart">
      <h1>Bordkart</h1>
      <div className="divider" />

      <div className="search-box">
        <input
          type="text"
          placeholder="Søk etter navn..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* SEARCH RESULTS 
      {search.length > 0 && (
        <div className="search-results">
          {matchingTables.length > 0 ? (
            matchingTables.map((table) => (
              <button
                key={table.table}
                className="search-result"
                onClick={() => setSelectedTable(table.table)}
              >
                {table.table === 0
                  ? "Hovedbord"
                  : `Mulig plassering: Bord ${table.table}`}
              </button>
            ))
          ) : (
            <p>Ingen treff</p>
          )}
        </div>
      )}*/}

      {/* HOVEDBORD */}
      {matchingTables.some((m) => m.table === 0) && (
      <div
        className="head-table"
        onClick={() => setSelectedTable(0)}
      >
        <h2>Hovedbord</h2>
      </div>)}

      {/* TABLE LAYOUT */}
      <div className="table-layout">
        <div className="table-column">
          {tables
            .filter((t) => t.table >= 1 && t.table <= 5 && matchingTables.some((m) => m.table === t.table))
            .map((table) => (
              <div
                key={table.table}
                className="table-card"
                onClick={() => setSelectedTable(table.table)}
              >
                <h2>{table.table}</h2>
              </div>
            ))}
        </div>

        <div className="table-column">
          {tables
            .filter((t) => t.table >= 6 && t.table <= 10 && matchingTables.some((m) => m.table === t.table))
            .map((table) => (
              <div
                key={table.table}
                className="table-card"
                onClick={() => setSelectedTable(table.table)}
              >
                <h2>{table.table}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

function Sangtekster() {
  const songs = [
    {
      title: "Alle sammen reiser seg",
      groups: [
        "Foreldre og søsken",
        "Alle besteforeldre",
        "Tanter og onkler",
        "Alle søskenbarn",
        "Alle venner",
        "Alle med parkeringsbot",
        "Fotballfans",
        "De som strikker",
        "Reiseglade",
        "Danseglade tar en snurr",
        "Lesehester",
        "Musikere og sangere",
        "De som snorker",
        "Alle roper høyt hurra"
      ]
    },
    {
      title: "Velsignelsen",
      lyrics: `
Vers 1 x2:
Herren velsigne
Og bevare deg
La sitt ansikt lyse
med nåde på deg
Herren løfte sitt ansikt
mot deg med fred

Refreng:
Amen, amen, amen
Amen, amen, amen

Bro:
Herrens nåde være med deg
Gjennom tusen generasjoner
Din familie, dine barn og
deres barn og deres barn

La hans nærvær være med deg
Være foran, være bak deg
Alltid rundt deg, alltid i deg
Han er med deg, han er med deg

I din medgang, i din motgang
I din inngang og din utgang
Når det mørkner, når det lysner
Han er for deg, han er for deg

Han er for deg, han er for deg
Han er for deg
      `
    }
  ];

  const [index, setIndex] = React.useState(0);

  const nextSong = () => {
    setIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
  <div className="songs">
    <h1>Sangtekster</h1>
    <div className="divider" />

    {/* Title + arrows */}
    <div className="song-header">
      <button onClick={prevSong} className="arrow">‹</button>
      <h2>{songs[index].title}</h2>
      <button onClick={nextSong} className="arrow">›</button>
    </div>

    {/* Lyrics */}
    <div className="lyrics-box">
      {songs[index].groups &&
        songs[index].groups.map((group, i) => (
          <div key={i} className="verse">
            {group!= "Danseglade tar en snurr" && group!="Alle roper høyt hurra" && (
            <>
            <p>{group} reiser seg</p>
            <p>{group} reiser seg, reiser seg</p>
            <p>{group} reiser seg</p>
            </>
            )}
            {group== "Danseglade tar en snurr" && (
            <>
            <p>{group}</p>
            <p>{group}, tar en snurr</p>
            <p>{group}</p>
            </>
            )}
            {group== "Alle roper høyt hurra" && (
            <>
            <p>{group}</p>
            <p>{group}, høyt hurra</p>
            <p>{group}</p>
            </>
            )}
          </div>
        ))}

      {songs[index].lyrics && songs[index].lyrics}
    </div>
  </div>
);
}