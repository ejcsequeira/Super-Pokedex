import { singlePokemon } from "../api";

const Searchbar = ({search, setSearch, setPokemons}) => {
    
    

    const onChangeHandler= (e) =>{
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        singlePokemon(search).then((data) => {
            setPokemons((prevPokemons) => (
            [...prevPokemons, data]
            ))
        })
    
        
    }


    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
           
        </div>
    )
}

export default Searchbar;