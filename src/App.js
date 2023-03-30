import './App.css';
import Sidebar from "./Components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ledpage from './Pages/ledpage'
import testallpage from './Pages/testallpage';
import ltepage from "./Pages/ltepage";
import macadspage from "./Pages/macadspage";
import refreshpage from "./Pages/refreshpage";
import speedpage from "./Pages/speedpage";
import trpage from "./Pages/trpage";
import wifipage from "./Pages/wifipage";
import wpspage from "./Pages/wpspage";
import usbpage from "./Pages/usbpage";
import Ledpage from "./Pages/ledpage";
function App() {
  return (
    <div className="App">

        <Router>
            <Sidebar/>
            <Routes>
                <Route path="/ledpage" element={ledpage}/>
                <Route path='/ltepage' element={ltepage}/>
                <Route path='/macadspage' element={macadspage}/>
                <Route path='/refreshpage' element={refreshpage}/>
                <Route path='/speedpage' element={speedpage}/>
                <Route path='/testallpage' element={testallpage}/>
                <Route path='/trpage' element={trpage}/>
                <Route path='/wifipage' element={wifipage}/>
                <Route path='/wpspage' element={wpspage}/>
                <Route path='/usbpage' element={usbpage}/>
            </Routes>

        </Router>

    </div>
  );
}

export default App;
