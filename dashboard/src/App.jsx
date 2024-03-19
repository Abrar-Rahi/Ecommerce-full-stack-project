import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import OtpValidation from "./pages/OtpValidation";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Newpass from "./pages/Newpass";
import Homepage from "./pages/Homepage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/otpValidation/:email/:otp" element={<OtpValidation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/newpass/:token" element={<Newpass />}></Route>
        <Route path="/home" element={<Homepage />}></Route>

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
