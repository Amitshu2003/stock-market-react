import LeftContainer from "./LeftContainer"
import MainContainer from "./MainContainer";

function App() {
  return (
      <div className="flex flex-col sm:flex-row">
      <LeftContainer />
      <MainContainer />
      </div>
  );
}

export default App;
