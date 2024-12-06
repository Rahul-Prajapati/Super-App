import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Movies.css"
import MovieChip from '../components/MovieChip';
import action from "../assets/Images/Action.png"
import romance from "../assets/Images/romance.png"
import drama from "../assets/Images/drama.png"
import thriller from "../assets/Images/thriller.png";
import western from "../assets/Images/western.png";
import horror from "../assets/Images/horror.png";
import fantasy from "../assets/Images/fantasy.png";
import music from "../assets/Images/music.png";
import fiction from "../assets/Images/fiction.png";
import MoviesCard from '../components/MoviesCard';

const MOVIES = [
    {
      value: "action",
      label: "Action",
      image: action,
      background: "#FF5209"
  
    },
    {
      value: "romance",
      label: "Romance",
      image: romance,
      background: "#D7A4FF"
    },
    {
      value: "drama",
      label: "Drama",
      image: drama,
      background: "#148A08"
    },
    {
      value: "thriller",
      label: "Thriller",
      image: thriller,
      background: "#84C2FF"
    },
    {
      value: "western",
      label: "Western",
      image: western,
      background: "#902500"
    },
    {
      value: "horror",
      label: "Horror",
      image: horror,
      background: "#7358FF"
    },
    {
      value: "fantasy",
      label: "Fantasy",
      image: fantasy,
      background: "#FF4ADE"
    },
    {
      value: "music",
      label: "Music",
      image: music,
      background: "#E61E32"
    },
    {
      value: "fiction",
      label: "Fiction",
      image: fiction,
      background: "#6CD061"
    },
  ];


const Movies = ()=>{
    
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const handleNext = () => {
      if (selected.length < 3) {
        alert("Minimum 3 category required")
      }
      else {
        localStorage.setItem("selected", JSON.stringify(selected));
        navigate("/widgets");
      }
    }

    return (
        <div className="mainContainer">     
            <div className="leftContainer">
                <h1 className="heading">Super app</h1>

                <p className="entertainment">
                    Choose your entertainment category
                </p>
                
                <div className='ChipsSection'>
                { selected.map((movieGenre) => (
                      <MovieChip key={movieGenre} movie={movieGenre} selected={selected} setSelected={setSelected} />
                  ))
                }
                </div>

                { (selected.length > 0 && selected.length <=3 ) ? <p className='min-category'>Minimum 3 category required</p> : null}

            </div>

            <div className="rightContainer">
              <div className='MoviesCard'>
                {
                  MOVIES.map((movie) => (
                    <MoviesCard
                     key={movie.value}
                     movie={movie}
                     selected={selected}
                     setSelected={setSelected} />
                  ))
                }

              </div>

              <button onClick={handleNext} className="next">Next Page</button>

            </div>
                
        </div>
    )
}

export default Movies