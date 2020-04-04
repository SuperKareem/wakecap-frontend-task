/*
 *
 *  Page: `Home`.
 *
 */
import React from "react";
import Select from "react-select";
import ToDoItem from "components/ToDoItem";
import { StoreContext } from "app/Store";
import { formatDataForReactSelect } from "./helpers";

const Home = React.memo(
  (): JSX.Element => {
    const { users, error, loadUserData } = React.useContext(StoreContext);

    React.useEffect(() => {
      // Fetch users from API
      loadUserData();
    }, []);

    const options = formatDataForReactSelect(users);

    if (error) {
      return <h1>Error has been accured</h1>;
    }

    return (
      <div>
        <Select options={options} onChange={console.log} />
      </div>
    );
  }
);

export default Home;
