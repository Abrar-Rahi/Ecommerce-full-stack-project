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
import CreateCat from "./pages/CreateCat";
import CreateSubCat from "./pages/CreateSubCat";
import ViewCatrgory from "./pages/ViewCatrgory";
import ViewSubCat from "./pages/ViewSubCat";
import AddProduct from "./pages/AddProduct";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />}></Route>
        <Route path="/otpValidation/:email/:otp" element={<OtpValidation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/newpass/:token" element={<Newpass />}></Route>

        <Route path="/dashboard" element={<Homepage />}>
            <Route path="createCategory" element={<CreateCat />}></Route>
            <Route path="createSubCategory" element={<CreateSubCat />}></Route>
            <Route path="viewCategory" element={<ViewCatrgory />}></Route>
            <Route path="viewSubCategory" element={<ViewSubCat />}></Route>
            <Route path="addProduct" element={<AddProduct />}></Route>
        </Route>

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
