import { BrowserRouter, Routes, Route } from "react-router-dom";
import FruitName from "./state";
import Toggle from "./toggle"

function App() {
  return (
    <div>
      {/* <h1>Welcome to the React Blog</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< FruitName />} />
          <Route path="/toggle" element={< Toggle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;