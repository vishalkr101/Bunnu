import { useState } from "react";
import "./App.css";
import cat from "./assets/cat.jpg"
// import cuteImage from "./cute-image.png"; // Add a cute image in the src folder

function App() {
  const [yesSize, setYesSize] = useState(26);
  const [noSize, setNoSize] = useState(26);
  const [showImage, setShowImage] = useState(false);

  const handleNoClick = () => {
    setYesSize(yesSize + 10);
    setNoSize(noSize - 5);
    if (noSize <= 10) {
      setNoSize(0);
      setShowImage(true);
    }
  };

  return (
    <div className="container">
      <img src={cat} alt="Pleasee 🥺" className="cute-image" />
      <h1>Will you be my Valentine? ❤️</h1>
      <div className="buttons">
        <button style={{ fontSize: yesSize }} className="yes">
          Yes ❤️
        </button>
        {noSize > 0 && (
          <button
            style={{ fontSize: noSize }}
            className="no"
            onClick={handleNoClick}
          >
            No 😢
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
