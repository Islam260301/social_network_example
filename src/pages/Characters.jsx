import React from "react";
import s from "../styles/Characters.module.css";
import karasunoHeroes from "../data/heroes/Karasuno";

export const Characters = () => {
  return (
    <div className={s.characters_wrapper}>
      <table id={s.characters_table}>
        <tbody>
          <tr className={s.titles}>
            <th>Name</th>
            <th>Number</th>
            <th>Position</th>
            <th>Year</th>
          </tr>
          {karasunoHeroes.team.map((person) => {
            return (
              <tr key={person.number}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td>{person.position}</td>
                <td>{person.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
