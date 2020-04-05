/*
 *
 * Contaienr: `History`.
 *
 */
import React from "react";
import { Context } from "app/Store";
import HistoryItem from "components/HistoryItem";

const History: React.FC = (): JSX.Element => {
  const {
    todos,
    selectedUserId,
    selectedUsername,
    loadingTodos,
  } = React.useContext(Context);

  if (loadingTodos) {
    return <h2>Loading ...</h2>;
  }

  if (selectedUserId) {
    return (
      <>
        {todos[selectedUserId] &&
          todos[selectedUserId].map(
            ({ completed, changed, date, id }) =>
              completed &&
              changed && (
                <HistoryItem
                  key={id}
                  date={date}
                  label={`${selectedUsername} Changed TODO#${id} to done.`}
                />
              )
          )}
      </>
    );
  }

  return null;
};

export default React.memo(History);
