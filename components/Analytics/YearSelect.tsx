import React, { useCallback } from "react";

interface YearSelectProps {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearSelect: React.FC<YearSelectProps> = ({ year, setYear }) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => setYear(Number(e.target.value)),
    [setYear]
  );

  return (
    <input
      placeholder="Select year"
      type="number"
      min="1900"
      max="2099"
      step="1"
      value={String(year)}
      onChange={onChange}
    />
  );
};

export default YearSelect;
