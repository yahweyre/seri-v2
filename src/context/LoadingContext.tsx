import { createContext, useContext, useState } from "react";

type LoadingContextType = {
  loading: boolean;
  finishLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | null>(null);


export function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading, setLoading] = useState(true);


  function finishLoading() {
    setLoading(false);
  }


  return (
    <LoadingContext.Provider
      value={{
        loading,
        finishLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}


export function useLoading() {

  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error(
      "useLoading must be used inside LoadingProvider"
    );
  }

  return context;
}