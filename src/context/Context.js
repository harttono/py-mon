import React, { useEffect, useContext, createContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

const url = `https://pokeapi.co/api/v2/pokemon/`;

const AppContext = createContext();

// supply all state for nested component
const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    data: [],
    err: undefined,
    limit: 10,
    showModal: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "SET_LOADING", loading: true });
    try {
      const {
        data: { results },
      } = await axios.get(`${url}?limit=${state.limit}`);
      let fetchingAll = results.map((item) => {
        return fetch(item.url).then((resp) => resp.json());
      });
      let response = Promise.all(fetchingAll);
      response.then((res) => {
        dispatch({ type: "GET_DATA", payload: res });
      });
    } catch (err) {
      dispatch({ type: "GET_ERROR", err });
    }
  };

  const handleLimit = () => {
    dispatch({ type: "UPDATE_LIMIT" });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING", loading: true });
  };

  useEffect(() => {
    fetchData();
  }, [state.limit]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading: false,
        handleLimit,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// use context as global
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
