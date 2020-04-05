import React from "react";
import { Label, Wrapper } from "components/Checkbox/StyledInput";
import styled from "styled-components";
import * as luxon from "luxon";

const StyledWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  min-height: 45px;
  border: 1px solid #d1d1d1;
  width: 800px;
  margin: 0 auto;
`;

type Props = {
  label: string;
  date: Date;
};

const HistoryItem: React.FC<Props> = ({ date, label }) => {
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
