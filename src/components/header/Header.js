import React from "react";

import { formatNumber } from "../../helpers/formathelpers";
import css from "./header.module.css";

export default function Header(props) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    props.onChangeFilter(newText);
  };

  const { filter, countryCount, totalPopulation } = props;
  return (
    <div className={css.flexRow}>
      <input
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
      |
      <span className={css.infoSegundo}>
        Paises: <strong>{countryCount}</strong>
      </span>
      |
      <span className={css.info}>
        População:<strong>{formatNumber(totalPopulation)}</strong>
      </span>
      |
    </div>
  );
}
