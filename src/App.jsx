import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import cat from "./assets/standingCat.jpg";
import whyNotCatBlack from "./assets/whyNotCatBlack.jpg";
import sillyCatHoldingHeartTextBlack from "./assets/sillyCatHoldingHeartTextBlack.jpg";
import pleaseDontDoThisText from "./assets/pleaseDontDoThisText.jpg";
import iWillCryText from "./assets/iWillCryText.jpg";
import iAmSorryText from "./assets/iAmSorryText.jpg";
import iWillCryNowText from "./assets/iWillCryNowText.jpg";
import bunnuPleaseText from "./assets/bunnuPleaseText.jpg";
import iReallyLoveYouText from "./assets/iReallyLoveYouText.jpg";
import iWillDieText from "./assets/iWillDieText.jpg";
import dieThanSayYesText from "./assets/dieThanSayYesText.jpg";
import youReallyThoughtText from "./assets/youReallyThoughtText.jpg";
import dancingCat from "./assets/dancingCat.gif";

function App() {
  const [yesSize, setYesSize] = useState(31);
  const [noSize, setNoSize] = useState(31);
  const [image, setImage] = useState(cat);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showSorryText, setShowSorryText] = useState(false);
  const handleNoClick = () => {
    setYesSize(yesSize + 5);
    setNoSize(noSize - 3);
    console.log(noSize);
    if (noSize === 31) setImage(whyNotCatBlack);
    if (noSize === 28) setImage(sillyCatHoldingHeartTextBlack);
    if (noSize === 25) setImage(pleaseDontDoThisText);
    if (noSize === 22) setImage(iWillCryText);
    if (noSize === 19) setImage(iAmSorryText);
    if (noSize === 16) setImage(iWillCryNowText);
    if (noSize === 13) setImage(bunnuPleaseText);
    if (noSize === 10) setImage(iReallyLoveYouText);
    if (noSize === 7) setImage(iWillDieText);
    if (noSize === 4) setImage(dieThanSayYesText);
    if (noSize === 1) setImage(youReallyThoughtText);
    if (noSize < 1) {
      setNoSize(0);
    }
  };

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  const handleShowSorryText = () => {
    setShowSorryText(true);
  };

  return (
    <div className="container">
      {isAccepted && <img className="dancing-cat" src={dancingCat} />}
      {isAccepted ? (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <div className="celebration">
            <h1>Yay! You're my Valentine!❤️🎉</h1>
            <p style={{ color: "black", fontSize: "35px", fontWeight: "bold" }}>
              I love you munnu {"<3"}
            </p>
            {!showSorryText && (
              <button onClick={handleShowSorryText}>Please Open This</button>
            )}
            {showSorryText && (
              <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
                I am really sorry Bunnu 🥺 I never wanted to fight with you
                maine sach me jaan puch ke nahi kara kuch bhi I just wish mai
                sab revert kar paata But I can't now and I just want to say
                sorry and I just want to tell you that I really love you with
                all my heart and tere naa hone se mujhe bhot fark padhta hai I
                just want you and you only and I will try my best to keep you
                with me as long as I can. Jo bhi humari ladhai hui usme meri bhi
                galti thi and I am sorry for that and for my words just know tu
                aaj bhi mera chhota babu hai and I want to keep you like that
                only and I am really sorry for the times I don't treat you like
                that I will try my best to stay calm in our fights. I just wish
                we meet soon and fix everything. Hope this helps and you feel
                better after reading this.
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <img src={image} alt="Pleasee 🥺" className="cute-image" />
          <h1>Will you be my Valentine? ❤️</h1>
          <div className="buttons">
            <button
              style={{ fontSize: yesSize }}
              className="yes"
              onClick={handleYesClick}
            >
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
        </>
      )}
    </div>
  );
}

export default App;
