import { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [darkMagician, setDarkMagician] = useState();
  const [darkMagicianGirl, setDarkMagicianGirl] = useState();
  const [babyDragon, setBabyDragon] = useState();
  const [blueEyesDragon, setBlueEyesDragon] = useState();
  const [obelisk, setObelisk] = useState();
  const [slifer, setSlifer] = useState();
  const [raDragon, setRaDragon] = useState();
  const [morphingJar, setMorphinJar] = useState();
  const [timeWizard, setTimeWizard] = useState();
  const [gaia, setGaia] = useState();
  const [swords, setSwords] = useState();
  const [curseOfDragon, setCurseOfDragon] = useState();
  const [summonedSkull, setSummonedSkull] = useState();
  const [giantSoldier, setGiantSoldier] = useState();
  const [kuriboh, setKuriboh] = useState();
  const [wingedKuriboh, setWingedKuriboh] = useState();

  useEffect(() => {
    const fetchData = async (cardName, setCard) => {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`,
        { mode: "cors" }
      );
      const json = await response.json();
      setCard(json.data[0].card_images[0].image_url_small);
    };

    fetchData("Dark Magician", setDarkMagician);
    fetchData("Dark Magician Girl", setDarkMagicianGirl);
    fetchData("Baby Dragon", setBabyDragon);
    fetchData("Blue-eyes White Dragon", setBlueEyesDragon);
    fetchData("Obelisk The Tormentor", setObelisk);
    fetchData("Slifer The Sky Dragon", setSlifer);
    fetchData("The Winged Dragon Of Ra", setRaDragon);
    fetchData("Morphing Jar", setMorphinJar);
    fetchData("Time Wizard", setTimeWizard);
    fetchData("Gaia The Fierce Knight", setGaia);
    fetchData("Swords Of Revealing Light", setSwords);
    fetchData("Curse Of Dragon", setCurseOfDragon);
    fetchData("Summoned Skull", setSummonedSkull);
    fetchData("Giant Soldier Of Stone", setGiantSoldier);
    fetchData("Kuriboh", setKuriboh);
    fetchData("Winged Kuriboh", setWingedKuriboh);
  }, []);

  return (
    <>
      <h1>Memory Game</h1>
      <h2>
        Get points by clicking on an image but do not click on any more than
        once!
      </h2>
      <img src={darkMagician} alt="" />
      <img src={darkMagicianGirl} alt="" />
      <img src={babyDragon} alt="" />
      <img src={blueEyesDragon} alt="" />
      <img src={obelisk} alt="" />
      <img src={slifer} alt="" />
      <img src={raDragon} alt="" />
      <img src={morphingJar} alt="" />
      <img src={timeWizard} alt="" />
      <img src={gaia} alt="" />
      <img src={swords} alt="" />
      <img src={curseOfDragon} alt="" />  
      <img src={summonedSkull} alt="" />
      <img src={giantSoldier} alt="" />
      <img src={kuriboh} alt="" />
      <img src={wingedKuriboh} alt="" />
    </>
  );
}

export default App;
