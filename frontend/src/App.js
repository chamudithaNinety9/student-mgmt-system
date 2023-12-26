
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">   
    <RouterProvider router={MainRoutes} />
    </div>
  );
}

export default App;
