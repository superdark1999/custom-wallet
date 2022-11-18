import Home from "./views/Home";
import CreateNewWallet from "./views/CreateNewWallet";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <CreateNewWallet />
    </div>
  );
}

export default App;
