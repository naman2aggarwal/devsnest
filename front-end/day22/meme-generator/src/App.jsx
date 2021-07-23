import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./components/Meme";

const App = () => {
  const appTitle = "Meme Generator";
  const [meme, setMeme] = useState(null);
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMemes(data.data.memes);
        } else {
          throw new Error("error in getting memes");
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">{appTitle}</h1>
      {meme ? (
        <Meme meme={meme} setMeme={setMeme} />
      ) : (
        memes &&
        memes.map((meme) => (
          <img
            className="meme-template"
            alt={meme.name}
            onClick={() => setMeme(meme)}
            src={meme.url}
            key={meme.id}
          ></img>
        ))
      )}
    </div>
  );
};

export default App;
