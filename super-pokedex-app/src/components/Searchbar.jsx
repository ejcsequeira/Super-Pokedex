import { singlePokemon } from "../api";

const Searchbar = ({
  setSearch,
  setPokemons,
  lowerCaseSearch,
  setlowerCaseSearch,
}) => {
  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    setlowerCaseSearch(newValue.toLowerCase());
  };

  const onButtonClickHandler = () => {
    singlePokemon(lowerCaseSearch).then((data) => {
      console.log(data)
      setPokemons((prevPokemons) => [...prevPokemons, data]);
    });
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
