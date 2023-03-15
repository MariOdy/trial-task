import React from "react";
import { DateRangePicker } from "rsuite";
import type { DateRange } from "rsuite/DateRangePicker";
import { format } from "date-fns";

const renderValue = ([from, to]: DateRange) => (
  <>
    {format(from, "dd MMM")} - {format(to, "dd MMM")}
  </>
);

interface RangePickerProps {
  range: DateRange | null;
  setRange: React.Dispatch<React.SetStateAction<DateRange | null>>;
}

const RangePicker: React.FC<RangePickerProps> = ({ range, setRange }) => (
  <DateRangePicker
    value={range}
    onChange={setRange}
    placeholder="Pick a date range"
    showOneCalendar={true}
    renderValue={renderValue}
    size="lg"
  />
);

export default RangePicker;
