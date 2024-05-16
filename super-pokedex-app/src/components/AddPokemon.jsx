import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddPokemon({ addPokemon }) {
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImgURL(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleWeightChange = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type || !height || !weight) {
      alert("Please fill in all fields");
      return;
    }
    const newPokemon = {
      id: Date.now(),
      name,
      sprites: { front_default: imgURL || "" },
      types: [{ type: { name: type } }],
      height,
      weight,
      isFavorite: false,
    };
    addPokemon(newPokemon);
    setName("");
    setImgURL("");
    setType("");
    setHeight(0);
    setWeight(0);
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-wrapper">
          <label>Image URL:</label>
          <input type="text" value={imgURL} onChange={handleImgChange} />
        </div>
        <div className="input-wrapper">
          <label>Type:</label>
          <input type="text" value={type} onChange={handleTypeChange} />
        </div>
        <div className="input-wrapper">
          <label>Height:</label>
          <input type="number" value={height} onChange={handleHeightChange} />
        </div>
        <div className="input-wrapper">
          <label>Weight:</label>
          <input type="number" value={weight} onChange={handleWeightChange} />
        </div>
        <button type="submit" className="navbar-link navbar-button">Add Pokémon</button>
      </form>
    </div>
  );
}
