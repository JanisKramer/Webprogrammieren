import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import "./App.css";
import { Aufgabe1, Aufgabe2 } from "./static/ExText";

function App() {
  return (
    <div className="App">
      <div className="App-header ">React Lektion 2 - Übungen </div>
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <button onClick={() => alert("Klick!")} width="200" heigth="5"
          style={{
            color: "red",
            background: "#FFFFFF",
            cursor: "crosshair",
          }}>Klick mich
          </button>
          <button className="Button" onClick={() => alert("Klick!")}
          >Klick mich
          </button>
        </div>
        
      </div>
      <p>1.4: a) */  b) className = .Butten c)id = #Button(nur diese zuordnung)
      </p>
      <hr></hr>
      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <div id="Elternelement">
            <div id="K1" className="Kinderelement" ></div>
            <div id="K2" className="Kinderelement" ></div>
            <div id="K3" className="Kinderelement" ></div>
            <span id="K4" className="Kinderelement">span</span>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
