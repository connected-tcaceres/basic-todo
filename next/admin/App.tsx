import { useContext, useEffect } from "react";
import axios from "axios";
import { Admin, Resource, fetchUtils, NotFound } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { stringify } from "query-string";

import { UserList, UserEdit, UserCreate, UserShow } from "./user";
import { TodoList, TodoEdit, TodoCreate, TodoShow } from "./todo";
import { LoggedInUserContext } from "./context/LoggedInUserContext";

const httpClient = (url: any, options = {}) =>
  fetchUtils.fetchJson(url, { ...options, credentials: "include" });

const dataProvider = simpleRestProvider("http://localhost:3001", httpClient);

dataProvider.getList = (resource, params) => {
  const { page, perPage: take } = params.pagination;
  const skip = (page - 1) * take;
  const query = {
    skip,
    take,
  };
  return httpClient(
    `http://localhost:3001/${resource}?${stringify(query)}`
  ).then(({ headers, json }) => ({
    data: json,
    total: parseInt(headers.get("content-range") as string, 10),
  }));
};

const App = () => {
  const { updateUserId } = useContext(LoggedInUserContext);

  useEffect(() => {
    const init = () =>
      axios
        .get("http://localhost:3001/auth/whoami", { withCredentials: true })
        .then(({ data: userId }) => updateUserId(userId));
    init();
  }, []);

  return (
    <Admin dataProvider={dataProvider} disableTelemetry catchAll={NotFound}>
      <Resource
        key="id"
        name="user"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={UserShow}
      />
      <Resource
        key="id"
        name="todo"
        list={TodoList}
        edit={TodoEdit}
        create={TodoCreate}
        show={TodoShow}
      />
    </Admin>
  );
};

export default App;
