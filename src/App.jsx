import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Buyer from "./pages/Buyer";
import Seller from "./components/form/signup/Seller";
import HelpCenter from "./pages/HelpCenter";
import TrackOrder from "./pages/TrackOrder";
import Policy from "./pages/Policy";
import Cart from "./pages/Cart";
import Electronic from "./pages/category/Electronic";
import Fashion from "./pages/category/Fashion";
import Health from "./pages/category/Health";
import Sports from "./pages/category/Sports";
import Toy from "./pages/category/Toy";
import Books from "./pages/category/Books";
import Groceries from "./pages/category/Groceries";
import Babies from "./pages/category/Babies";
import Pet from "./pages/category/Pet";
import Office from "./pages/category/Office";
import Furniture from "./pages/deals/Furniture";
import Checkout from "./components/checkout/Checkout";
import PostAddForm from "./components/form/post/PostAddForm";
import PostItemForm from "./components/form/post/PostItemForm";
import MobileGadgets from "./components/home/bestdeals/mobilegadgets/MobileGadgets";
import MobileGadDetails from "./components/home/bestdeals/mobilegadgets/MobileGadDetails";
import SellerLogin from "./components/form/login/SellerLogin";
import ProtectedRoute from "./auth/ProtectedRoute";
import GentlyUsed from "./components/home/gentlyUsed/GentlyUsed"; // Make sure to import this
import GentlyUsedDetails from "./components/home/gentlyUsed/GentlyUsedDeatils";
import RecDeals from "./components/home/recommended/RecDeals";
import RecDealDetails from "./components/home/recommended/RecDealDeatils";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/buyer" element={<Buyer />} />
          <Route path="/signup/seller" element={<Seller />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/order" element={<TrackOrder />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/toys" element={<Toy />} />
          <Route path="/books" element={<Books />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/babies" element={<Babies />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/office" element={<Office />} />
          <Route path="/furniture-deals" element={<Furniture />} />
          <Route path="/logout" element={<Logout />} />

          <Route
            path="/postAd"
            element={<ProtectedRoute element={<PostAddForm />} />}
          />
          <Route
            path="/postItems"
            element={<ProtectedRoute element={<PostItemForm />} />}
          />
          <Route path="/mobile-gadgets" element={<MobileGadgets />} />
          <Route path="/mobile-gadgets/:id" element={<MobileGadDetails />} />
          <Route path="/rec-deals" element={<RecDeals />} />
          <Route path="/rec-deals/:id" element={<RecDealDetails />} />
          <Route path="/gently-used" element={<GentlyUsed />} />
          <Route path="/gently-used/:id" element={<GentlyUsedDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/seller-login" element={<SellerLogin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
