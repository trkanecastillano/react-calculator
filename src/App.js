import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect }  from 'react';
import './App.css'


const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const equals = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("");
    }
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        clear();
        break;
      case "Backspace":
        backspace();
        break;
      case "Enter":
        equals();
        break;
      default:
        if (
          /[0-9]|[-+*/.]/.test(e.key)
        ) {
          setResult(result.concat(e.key));
        }
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [result]);

  return (
    <>
      <h1 className="mt-4">Kane Erryl G. Castillano</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Casio Calculator</h4>
          </div>
        </div>
        <div>
          <form>
            <input type="text" value={result} readOnly />
          </form>

          <div className="keypad">
            <button onClick={clear} id="clear" className="delete">AC</button>
            <button onClick={backspace} id="backspace" className="delete">C</button>
            <button name="/" onClick={handleClick} className="operators">&divide;</button>
            <button name="7"  onClick={handleClick} className="numbers">7</button>
            <button name="8"  onClick={handleClick} className="numbers">8</button>
            <button name="9"  onClick={handleClick} className="numbers">9</button>
            <button name="*"  onClick={handleClick} className="operators">&times;</button>
            <button name="4"  onClick={handleClick} className="numbers">4</button>
            <button name="5"  onClick={handleClick} className="numbers">5</button>
            <button name="6"  onClick={handleClick} className="numbers">6</button>
            <button name="-"  onClick={handleClick} className="operators">&ndash;</button>
            <button name="1"  onClick={handleClick} className="numbers">1</button>
            <button name="2"  onClick={handleClick} className="numbers">2</button>
            <button name="3"  onClick={handleClick} className="numbers">3</button>
            <button name="+"  onClick={handleClick} className="operators">+</button>
            <button name="0"  onClick={handleClick} className="numbers">0</button>
            <button name="."  onClick={handleClick} className="numbers">.</button>
            <button onClick={equals} className="numbers">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
