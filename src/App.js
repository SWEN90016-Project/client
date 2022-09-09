import Welcome from "./components/Welcome";
import Login from "./components/Login";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Groups from "./components/groups/Groups";
import TextSearch from "./components/textSearch/TextSearch";
import EnglishStatic from "./components/englishStatic/EnglishStatic";
import Indigenous from "./components/indigenous/Indigenous";
import EnglishDynamic from "./components/englishDynamic/EnglishDynamic";
import Fatsil from "./components/Fatsil";
function App() {
  return (
    <div className="h-screen bg-gray-500">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Homepage" element={<Homepage />}>
              <Route path="Authorization" element={<AuthPage />} />
              <Route path="Groups" element={<Groups />} />
              <Route path="Text" element={<TextSearch />} />
              <Route path="EnglishStatic" element={<EnglishStatic />} />
              <Route path="Indigenous" element={<Indigenous />} />
              <Route path="EnglishDynamic" element={<EnglishDynamic />} />
              <Route path="Fatsil" element={<Fatsil />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
