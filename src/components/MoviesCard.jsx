import "./movieCard.css"
const MoviesCard = ({movie, selected, setSelected}) =>{

    const generateBorder = (label) => {
        if (selected.includes(label)) {
          return "6px solid #11B800";
        }
        return "";
      };

    const handleSelection = ()=>{
        if(selected.includes(movie.label)){
            setSelected(selected.filter((item)=> item !== movie.label));         
        }
        else if (selected.length < 3){
            setSelected([...selected, movie.label]);     
        }
    }

    return(
        <div className="card"
         style={{
            border: generateBorder(movie.label),
            backgroundColor:movie.background,
        }} onClick={handleSelection} >
            <h1>{movie.label}</h1>
            <img src={movie.image} alt={movie.label} />
        </div>
    )

}

export default MoviesCard