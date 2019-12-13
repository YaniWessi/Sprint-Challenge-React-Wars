import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function CharacterList() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      const results = res.data.results;
      console.log(res);
      setPeople(results);
    });
  }, []);
  return (
    <div>
      {people.map(person => {
        return (
          <CharacterCard
            id={person.id}
            name={person.name}
            gender={person.gender}
            height={person.height}
            mass={person.mass}
            skinColor={person.skin_color}
          />
        );
      })}
    </div>
  );
}
export default CharacterList;
