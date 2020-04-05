/*
 *
 *  Page: `Home`.
 *
 */
import React from "react";
import Select from "react-select";
import styled from "styled-components";
import Button from "components/Button";
import { Context } from "app/store";
import { formatDataForReactSelect } from "./helpers";
import { ReactSelectOption } from "./interfaces";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  width: 260px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const NavigationWrapper = styled.div`
  padding: 20px;
`;

const Home: React.FC = React.memo(
  ({ children }): JSX.Element => {
    const {
      users,
      error,
      loadUserData,
      loadUserTodos,
      loadingUserData,
      todos,
    } = React.useContext(Context);

    const history = useHistory();

    React.useEffect(() => {
      // Fetch users from API
      if (!loadingUserData && users.length < 1) {
        loadUserData();
      }
    }, [loadingUserData, users]);

    const options = React.useMemo(() => formatDataForReactSelect(users), [
      users,
      formatDataForReactSelect,
    ]);

    const onUserSelection = React.useCallback(
      ({ value: userId, label: username }: ReactSelectOption) => {
        loadUserTodos(userId, username, !todos[userId]);
      },
      [todos]
    );

    if (error) {
      return <h1>{error}</h1>;
    }

    const navigateToTodo = React.useCallback(() => {
      history.push("/");
    }, []);

    const navigateToHistory = React.useCallback(() => {
      history.push("/history");
    }, []);

    return (
      <>
        <Wrapper>
          <Select options={options} onChange={onUserSelection} />
          <NavigationWrapper>
            <Button
              buttonType={"secondary"}
              label="TODOs"
              onClick={navigateToTodo}
            />
            <Button
              buttonType={"secondary"}
              label="History"
              onClick={navigateToHistory}
            />
          </NavigationWrapper>
        </Wrapper>
        {children}
      </>
    );
  }
);

export default Home;
