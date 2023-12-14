import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRouter } from "./router/MainRouter";
import { PropTypesComponent } from "./components";

const App = () => {
  return (
    <div>
      <MainRouter />
      <PropTypesComponent name="Feli Messi" loading={true} age={22} />
    </div>
  );
};

export default App;
