import { createContext, useContext } from "react";

export const LayoutContext = createContext<{
  cubeRef: HTMLDivElement | null;
}>({
  cubeRef: null,
});

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  return context;
};
