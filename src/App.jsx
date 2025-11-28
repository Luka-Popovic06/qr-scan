import { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [visibility, setVisibility] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [seconds, setSeconds] = useState(13);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    // 1️⃣ setTimeout za sakrivanje
    const timeout = setTimeout(() => {
      setVisibility(false);
    }, 3000);

    // 2️⃣ setInterval za odbrojavanje
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 3️⃣ Cleanup funkcija
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    setRestart(false);
  }, [visibility]);

  useEffect(() => {
    if (seconds === 0) setIsDisabled(false);
  }, [seconds]);

  const reset = () => {
    setSeconds(13);
    setVisibility(true);
    setIsDisabled(true);
    setRestart(true);
  };
  return (
    <>
      <div className="btn-generate-box">
        <Button
          disabledState={isDisabled}
          btnType={"button"}
          variation="trigger"
          clickAction={() => reset()}
        >
          Generate
        </Button>
      </div>
      {visibility ? (
        <div className="loader"></div>
      ) : (
        <main className="container">
          <div
            className="qr-box"
            style={
              seconds === 0
                ? { backgroundColor: "#f54c4c" }
                : { backgroundColor: "#4cf568" }
            }
          >
            <div className="img-box">
              <img src="scanner-BBreW-S_.png" alt="qr" />
            </div>
            {seconds === 0 && <p>Time is up!</p>}
            <Button
              disabledState={isDisabled}
              btnType={"button"}
              variation="trigger"
              clickAction={() => reset()}
            >
              Generate
            </Button>
          </div>
          <div className="time-box">{seconds} s</div>
          <Button
            disabledState={isDisabled}
            btnType={"button"}
            variation="standard"
          >
            Download
          </Button>
        </main>
      )}
    </>
  );
}

export default App;
