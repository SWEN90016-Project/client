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
import IndigenousCommunityKnowledge from "./components/englishStatic/IndigenousCommunityKnowledge";
import CulturallyRelevantPerspective from "./components/englishStatic/CulturallyRelevantPerspective";
import Fatsil from "./components/Fatsil";
import Main from "./components/Main";
import SamplePage from "./components/SamplePage";
import AuthService from "./Services/auth.service";
import { useEffect, useState, createContext } from "react";
export const UserTokenContext = createContext(null);
function App() {
  const [authLevel, setAuthLevel] = useState("read");
  const [username, setUsername] = useState("Null");
  const [loading, setLoading] = useState(true);
  let url = location.href;
  document.body.addEventListener(
    "click",
    () => {
      requestAnimationFrame(() => {
        if (url !== location.href) {
          // console.log("url changed");
          url = location.href;
        }
      });
    },
    true
  );
  useEffect(() => {
    const getLevel = async () => {
      try {
        const response = await AuthService.getAuthLevel();
        // console.log(response);
        setUsername(response.username);
        setAuthLevel(response.Permissions);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getLevel();
  }, [url]);

  if (loading) {
    return <div className="bg-white">Loading</div>;
  }
  return (
    <UserTokenContext.Provider value={{ authLevel, username }}>
      <div className="h-screen bg-gray-500">
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Sample" element={<SamplePage />} />
              <Route path="/Homepage" element={<Main />}>
                <Route path="" element={<Homepage />} />
                <Route path="Authorization" element={<AuthPage />} />
                <Route path="Groups" element={<Groups />} />
                <Route path="Text" element={<TextSearch />} />
                <Route path="EnglishStatic" element={<EnglishStatic />} />
                <Route
                  path="EnglishStatic/IndigenousCommunityKnowledge"
                  element={<IndigenousCommunityKnowledge />}
                />
                <Route
                  path="EnglishStatic/CulturallyRelevantPerspective"
                  element={<CulturallyRelevantPerspective />}
                />
                <Route path="Indigenous" element={<Indigenous />} />
                <Route path="EnglishDynamic" element={<EnglishDynamic />} />
                <Route path="Fatsil" element={<Fatsil />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </UserTokenContext.Provider>
  );
}

export default App;
