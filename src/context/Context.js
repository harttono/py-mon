import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import { API } from "../utils/util";
const baseUrlPoce = `https://pokeapi.co/`;

const AppContext = createContext();

// supply all state for nested component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [gmail, setGmail] = useState(false);
  const initialState = {
    loading: false,
    data: [],
    limit: 10,
    userData: null || localStorage.getItem("userData"),
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {
        data: { results },
      } = await API.get(`${baseUrlPoce}api/v2/pokemon/?limit=${state.limit}`);
      let fetchingAll = results.map((item) => {
        return fetch(item.url).then((resp) => resp.json());
      });
      let response = Promise.all(fetchingAll);
      response.then((res) => {
        const pocemonsData = res.map((item) => {
          return {
            id: item.id,
            name: item.name,
            imgBackDefault: item.sprites.back_default,
            imgFrontDefault: item.sprites.front_default,
            imgBackShiny: item.sprites.back_shiny,
            imgFrontShiny: item.sprites.front_shiny,
            height: item.height,
            weight: item.weight,
          };
        });

        dispatch({ type: "GET_DATA", payload: pocemonsData });
        setLoading(false);
      });
    } catch (err) {
      dispatch({ type: "GET_ERROR", err });
      setLoading(false);
    }
  };

  const handleLimit = () => {
    dispatch({ type: "UPDATE_LIMIT" });
  };

  const loginWithGmail = (dataLogin) => {
    localStorage.setItem("userData", JSON.stringify(dataLogin));
    dispatch({ type: "LOGIN", dataLogin: dataLogin });
    setGmail(true);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userData");
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleLimit,
        loading,
        setLoading,
        loginWithGmail,
        logout,
        fetchData,
        dispatch,
        gmail,
        setGmail,
        limit: state.limit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// use context as global
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
