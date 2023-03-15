import React, { useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setSearch(e.target.value), [setSearch]);

  return (
    <label>
      <input
        type="search"
        value={search}
        onChange={onChangeHandler}
        placeholder="Search for anything..."
      />
      <AiOutlineSearch />
    </label>
  );
};

export default Search;
