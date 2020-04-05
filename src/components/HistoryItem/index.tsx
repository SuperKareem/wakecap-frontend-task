import React from "react";
import * as luxon from "luxon";
import { Label } from "components/Checkbox/StyledInput";
import { StyledWrapper } from "./partials";
import { HistoryItemProps } from "./interfaces";

const HistoryItem: React.FC<HistoryItemProps> = ({ date, label }) => {
  const dateA = luxon.DateTime.fromISO(date.toISOString());
  const dateB = luxon.DateTime.fromISO(new Date().toISOString());
  const { minutes } = dateB.diff(dateA, ["minutes"]).toObject();

  return (
    <StyledWrapper>
      <Label>{label}</Label>

      <span>
        {minutes < 1
          ? "less than 1 minute ago"
          : `${minutes.toFixed()} minutes ago.`}
      </span>
    </StyledWrapper>
  );
};

export default React.memo(HistoryItem);
