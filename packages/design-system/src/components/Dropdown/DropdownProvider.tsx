import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";

import type { DropdownTheme } from "./Dropdown.theme";

export type DropdownProviderProps = Partial<DropdownTheme>;

type DropdownProviderContext = ReturnType<typeof useDropdownValues>;

const DropdownContext = createContext<Partial<DropdownProviderContext>>({});

// For inferring return type
const useDropdownValues = (props: DropdownProviderProps) => {
  return props;
};

export const DropdownProvider = ({
  children,
  ...props
}: PropsWithChildren<DropdownProviderProps>): JSX.Element => {
  const values = useDropdownValues(props);
  return (
    <DropdownContext.Provider value={values}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error("useDropdown was used outside of its Provider");
  }
  return context;
};

export default DropdownProvider;
