const MovieChip =({movie ,selected, setSelected})=>{

    const handleSelection = () => {
        if (selected.includes(movie)) {
          setSelected(selected.filter((item) => item !== movie));
        } else if (selected.length < 3) {
          setSelected([...selected, movie]);
        }
      }

    return(
            <span className="chipsBox" >
                <span className="chipTitle">{movie}</span>
                <span className="CloseChip" onClick={handleSelection} >X</span>
            </span>
    )
}

export default MovieChip;