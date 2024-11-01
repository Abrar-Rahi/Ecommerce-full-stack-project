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
import ViewProduct from "./pages/ViewProduce";
import AddVarient from "./pages/AddVarient";
import ViewVarient from "./pages/ViewVarient";
import AddDiscount from "./pages/AddDiscount";
import Affiliate from "./pages/Affiliate";
import ViewAffiliate from "./pages/ViewAffiliate";
import ViewDiscount from "./pages/ViewDiscount";
import OrderList from "./pages/OrderList";

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
            <Route path="viewProduct" element={<ViewProduct />}></Route>
            <Route path="addVarient" element={<AddVarient />}></Route>
            <Route path="viewVarient" element={<ViewVarient />}></Route>
            <Route path="addDiscount" element={<AddDiscount />}></Route>
            <Route path="viewDiscount" element={<ViewDiscount />}></Route>
            <Route path="affiliate" element={<Affiliate />}></Route>
            <Route path="affiliateBalance" element={<ViewAffiliate />}></Route>
            <Route path="orderList" element={<OrderList />}></Route>
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
