import "./App.css";
import { UserProvider } from "./UserContext";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
