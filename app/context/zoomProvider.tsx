//next imports
import { useState } from "react";
//context
import ZoomContext from "./zoomContext";

interface ProviderProps {
  children: React.ReactNode;
}

export default function ZoomProvider({ children }: ProviderProps) {
  const [isZoom, setIsZoom] = useState(false);

  return (
    <ZoomContext.Provider value={{ setIsZoom, isZoom }}>
      {children}
    </ZoomContext.Provider>
  );
}
