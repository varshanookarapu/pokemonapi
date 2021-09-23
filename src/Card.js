import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import tachyons from "tachyons";
import card from "./card.css";
import Pokemon from "pokemon-images";

export default function Card() {
  const [num, setNum] = useState();
  const [name, setName] = useState("NA");
  const [height, setHeight] = useState("NA");
  const [weight, setWeight] = useState("NA");

  //const [abilities, setAbilities] = useState("NA");

  useEffect(() => {
    //alert("Hello man , use effect is running");
    //https://pokeapi.co/api/v2/pokemon/${num}
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png-->POKEMON IMAGES

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data);
      setName(res.data.name);
      setHeight(res.data.height);
      setWeight(res.data.weight);
      console.log(res.data.name);
    }
    getData();
  });

  return (
    <div>
      <h1>Poke Poke Pokemons</h1>

      <input
        className="tc bg-washed-red dib w5 h3 br4 grow shadow-2 -m b"
        type="text"
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      />

      <div className="cardbox">
        <h2>I have selected the pokemon Card number {num}</h2>

        <div className="tc bg-washed-green dib br4 pa5 ma2 grow bw2 shadow-5 i">
          <h3>POKEMON</h3>
          <h4>Name: {name}</h4>
          <h4>Height: {height}</h4>
          <h4>Weight: {weight}</h4>
          <h4>Abilities: </h4>
        </div>

        <div className="tc bg-washed-green dib br4 pa5 ma2 grow bw2 shadow-5 i"></div>
      </div>
    </div>
  );
}