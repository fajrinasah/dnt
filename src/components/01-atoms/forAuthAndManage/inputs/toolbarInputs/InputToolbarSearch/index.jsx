import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function InputToolbarSearch({
  inputId = "",
  inputName = "",
  inputPlaceholder = "",
  refSearch,
}) {
  return (
    <div className="input-toolbar-search d-flex-row">
      <label htmlFor={inputId} className="">
        <span>
          <FontAwesomeIcon icon={faSearch} aria-placeholder="submit search" />
        </span>
        <span className="sr-only">Search</span>
      </label>
      <input
        className="input-for-label"
        type="search"
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        ref={refSearch}
      />
    </div>
  );
}
