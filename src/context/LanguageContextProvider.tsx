import { createContext, useState, useContext, ReactNode } from "react";

// Define the types for the context
interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

// Create the LanguageContext with a default value of undefined
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// The LanguageProvider component with type annotations
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("bn");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "bn" ? "en" : "bn"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// The LanguageContextProvider component to wrap your entire app
export const LanguageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
