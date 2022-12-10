import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldnum] = useState(0);
  const [operator, setOperator] = useState(0);

  const inputNum = (e) => {
    let input = e.target.value;

    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const porcentaje = () => {
    setNum(num / 100);
  };
  const operatorHandler = (e) => {
    let operatorInput = e.target.value;

    setOperator(operatorInput);
    setOldnum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "*") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    }
  };

  return (
    <div className="container">
      <div className="calculadora">
        <div className="display">
          <div />
          <div>{num}</div>
        </div>
        <button className="col-2">(</button>
        <button className="col-2">)</button>
        <button>X!</button>
        <button className="operador">
          X<sup>2</sup>
        </button>
        <button className="operador">√</button>
        <button className="operador">
          <sup>n</sup>√
        </button>
        <button className="operador">sin</button>
        <button className="operador">cos</button>
        <button className="operador">tg</button>
        <button className="operador">
          X<sup>3</sup>
        </button>
        <button className="operador">
          <sup>3</sup>√
        </button>
        <button className="operador">
          X<sup>n</sup>
        </button>
        <button className="numero" value={1} onClick={inputNum}>
          1
        </button>
        <button className="numero" value={2} onClick={inputNum}>
          2
        </button>
        <button className="numero" value={3} onClick={inputNum}>
          3
        </button>
        <button className="operador" value={"/"} onClick={operatorHandler}>
          /
        </button>
        <button className="operador" onClick={porcentaje}>
          %
        </button>
        <button className="operador">ln</button>
        <button className="numero" value={4} onClick={inputNum}>
          4
        </button>
        <button className="numero" value={5} onClick={inputNum}>
          5
        </button>
        <button className="numero" value={6} onClick={inputNum}>
          6
        </button>
        <button className="operador" value={"*"} onClick={operatorHandler}>
          *
        </button>
        <button className="operador">log</button>
        <button className="operador">e</button>
        <button className="numero" value={7} onClick={inputNum}>
          7
        </button>
        <button className="numero" value={8} onClick={inputNum}>
          8
        </button>
        <button className="numero" value={9} onClick={inputNum}>
          9
        </button>
        <button className="operador" value={"-"} onClick={operatorHandler}>
          -
        </button>
        <button className="operador" onClick={clear}>
          AC
        </button>
        <button className="operador col-3" onClick={calculate}>
          =
        </button>
        <button className="col-2 numero" value={"."} onClick={inputNum}>
          .
        </button>
        <button className="numero" value={0} onClick={inputNum}>
          0
        </button>
        <button className="operador">π</button>
        <button className="operador" value={"+"} onClick={operatorHandler}>
          +
        </button>
        <button className="operador">MR</button>
      </div>
    </div>
  );
}

export default App;
