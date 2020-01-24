import React, { createContext, useState } from 'react';
import outSideData from '../../data/data';
//1. создаем новый контекст
export const AppContext = createContext();

//2. создаем компонент провайдера
const AppContextProvider = (props) => {
  const [ data ] = useState(outSideData);

  // const newState = JSON.parse(JSON.stringify(data));
  return (
    <AppContext.Provider
      value={{
        data,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
