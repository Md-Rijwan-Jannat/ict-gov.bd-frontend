import MainLayout from "./components/layout/MainLayout";
import { LanguageContextProvider } from "./context/LanguageContextProvider";

const App = () => {
  return (
    <LanguageContextProvider>
      <MainLayout />
    </LanguageContextProvider>
  );
};

export default App;
