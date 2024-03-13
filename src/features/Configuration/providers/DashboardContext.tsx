import { Dispatch, ReactElement, SetStateAction, createContext, useState } from 'react';

type DashboardStateProps = {
  isOpen: boolean;
  toggle: () => void; 
};

const initialState: DashboardStateProps = {
  isOpen: false,
  toggle: () => {},
} 

const DashboardContext = createContext(initialState);

export const DashboardContextProvider = ({ children } : { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <DashboardContext.Provider value={{ isOpen, toggle }}>
      { children }
    </DashboardContext.Provider>
  )
};

export default DashboardContext;