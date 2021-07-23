import { useState } from "react";
import "./Meme.css";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "teasty",
    password: "PPS$Asr52ttCfaF",
    boxes: [],
  });

  const queryParameters = () => {
    let tempObj = {};
    form.boxes.forEach((box, i) => {
      tempObj = { ...tempObj, [`boxes[${i}][text]`]: box.text };
    });
    let newObj = { ...form, ...tempObj };
    delete newObj.boxes;

    const paramArr = Object.entries(newObj).map(([key, value]) => {
      return `${key}=${value}`;
    });
    return "?" + paramArr.join("&");
  };
  const generateMeme = async (e) => {
    e.preventDefault();
    for (let box of form.boxes) {
      if (box === undefined || box.text.trim() === "") {
        alert("captions can't be empty");
        return;
      }
    }
    fetch(`https://api.imgflip.com/caption_image${queryParameters()}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setMeme({ ...meme, url: data.data.url });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="meme">
      <img className="meme-img" src={meme.url} alt={meme.name} />
      <form onSubmit={(e) => generateMeme(e)}>
        <div className="meme-captions">
          {[...Array(meme.box_count)].map((_, i) => (
            <input
              key={i}
              type="text"
              placeholder={`Caption ${i + 1}`}
              onChange={(e) => {
                let boxes = form.boxes;
                boxes[i] = { text: e.target.value };
                setForm({ ...form, boxes: boxes });
              }}
            />
          ))}
        </div>

        <div className="action-buttons">
          <button type="submit" className="btn btn-primary">
            Generate Meme
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMeme(null);
            }}
            className="btn btn-secondary"
          >
            Choose Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default Meme;
