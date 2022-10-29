import { createContext, useContext, useState } from "react";

const initialState = {
  mafia: 0,
  peaceful: 0,
  maniac: 0,
  doc: 0,
  butterfly: 0,
  sherif: 0,
  setMafia: () => {},
  setPeaceful: () => {},
  setManiac: () => {},
  setDoc: () => {},
  setButterfly: () => {},
};

const PersonsContext = createContext(initialState);

export const PersonsProvider = ({ children }) => {
  const [mafia, setMafia] = useState(0);
  const [peaceful, setPeaceful] = useState(0);
  const [maniac, setManiac] = useState(0);
  const [doc, setDoc] = useState(0);
  const [butterfly, setButterfly] = useState(0);
  const [sherif, setSherif] = useState(0);

  return (
    <PersonsContext.Provider
      value={{
        mafia,
        peaceful,
        maniac,
        doc,
        butterfly,
        sherif,
        setMafia,
        setPeaceful,
        setManiac,
        setDoc,
        setButterfly,
        setSherif,
      }}
    >
      {children}
    </PersonsContext.Provider>
  );
};

export const usePersons = () => useContext(PersonsContext);
