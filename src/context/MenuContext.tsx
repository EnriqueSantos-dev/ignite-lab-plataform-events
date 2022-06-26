import { createContext, ReactNode, useContext, useState } from 'react';

interface IMenuContext {
  isActive: boolean;
  setActive: (arg: boolean) => void;
}

export const ContextMenu = createContext({} as IMenuContext);

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  return (
    <ContextMenu.Provider
      value={{ isActive: menuIsActive, setActive: setMenuIsActive }}>
      {children}
    </ContextMenu.Provider>
  );
}

export const useMenuContext = () => useContext(ContextMenu);
