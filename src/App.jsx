import { RouterProvider } from "react-router-dom";
import { TimeProvider } from "./contexts/TimeContext";
import router from "./routes";

function App() {
  return (
    <TimeProvider>
      <RouterProvider router={router} />
    </TimeProvider>
  );
}

export default App;
