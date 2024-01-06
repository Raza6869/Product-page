import { createContext, Dispatch, SetStateAction } from "react";

interface ZoomContextProps {
  isZoom: boolean;
  setIsZoom: Dispatch<SetStateAction<boolean>>;
}

const ZoomContext = createContext({} as ZoomContextProps);

export default ZoomContext;
