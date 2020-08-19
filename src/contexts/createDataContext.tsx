import React, {useReducer} from 'react';

export default (reducer: any, actions: any, defaultValues: any) => {
  const Context = React.createContext<any>(defaultValues);

  const Provider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValues);

    let boundActions:any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }} >
        {children}
      </Context.Provider>
    )
  };

  return { Context, Provider };
}