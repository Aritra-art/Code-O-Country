import { useState } from "react";
import "./styles.css";

export default function App() {
  var color = "orange";
  var likeCounter = 0;

  function likeChangeHandler() {
    likeCounter++;
    setLikeCounter(likeCounter);
  }

  function inputChangeHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = flags[userInput];
    //console.log(meaning);

    if (meaning === undefined) {
      setUserInput("");
      setMeaning("Cannot recognise the country 💔");
    } else {
      setUserInput(event.target.value + " : ");
      setMeaning(meaning);
    }
  }

  var flags = {
    India: "In",
    Bangladesh: "BD",
    Pakistan: "PAK",
    Indonesia: "ID",
    Australia: "AU",
    Brazil: "BR",
    Argentina: "AR",
    SouthAfrica: "ZA",
    NewZealand: "NZ",
    Japan: "JP",
    Netherlands: "NL",
    Russia: "RU",
    Switzerland: "CH",
    Germany: "DE",
    Canada: "CA",
    France: "FR",
    Myanmar: "MM",
    Colombia: "CO"
  };

  var recent = Object.keys(flags);

  function recentEventHandler(recent) {
    var meaning = flags[recent];
    setMeaning(meaning);
    setUserInput(recent + " : ");
  }

  var [likeCounter, setLikeCounter] = useState(10);
  var [userInput, setUserInput] = useState("Your code will appear here");
  var [meaning, setMeaning] = useState("");

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: color,
          marginTop: "0rem",
          marginBottom: "0.5rem",
          borderRadius: "0.8rem",
          padding: "1rem"
        }}
      >
        Code-O-Pedia
      </h1>
      <small style={{ color: "grey" }}>Your own Country Code Manager</small>
      <h3 style={{ fontSize: "1rem", marginTop: "3.8rem" }}>
        Enter Country Name 👇
      </h3>
      <div>
        <input
          placeHolder={
            "put your country name to get the code, First letter should be capital"
          }
          onChange={inputChangeHandler}
          style={{
            padding: "1rem",
            width: "85%",
            borderRadius: "1rem",
            marginTop: "0.2rem",
            border: "2px solid orange"
          }}
        />
      </div>
      <h2 style={{ marginTop: "2.8rem" }}>
        {userInput}
        {meaning}
      </h2>
      <h3
        style={{ color: "grey", marginTop: "2.5rem", marginBottom: "3.5rem" }}
      >
        Recent Searches
      </h3>
      <div style={{ marginLeft: "2.8rem" }}>
        {recent.map((recent) => {
          return (
            <span
              onClick={() => recentEventHandler(recent)}
              key={recent}
              style={{
                float: "left",
                margin: "1rem",
                cursor: "pointer",
                border: "3px solid #3b82f6",
                padding: "1rem",
                fontFamily: "Inconsolata",
                fontWeight: "bold",
                backgroundColor: "#4ade80",
                borderRadius: "0.8rem"
              }}
            >
              {recent}
            </span>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "#4ade80",
          marginTop: "25rem",
          padding: "1rem",
          paddingTop: "1rem",
          borderRadius: "0.8rem"
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "centre",
            marginLeft: "2rem"
          }}
        >
          If you<strong> like</strong> our service then please thumbs up.
          <span style={{ paddingLeft: "4.4rem" }}>
            <button
              onClick={likeChangeHandler}
              style={{
                padding: "0.6rem",
                backgroundColor: "#3b82f6",
                borderRadius: "0.6rem"
              }}
            >
              👍
            </button>
            <span style={{ textDecoration: "none", paddingLeft: "1rem" }}>
              <strong>{likeCounter}</strong>
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}
