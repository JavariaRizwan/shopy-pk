

// export default App
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav-Footer/nav';
import Foot from "../Nav-Footer/footer";
import GlobalStyles from "../components/GlobalScrollbar";
import Home from '../components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from '../components/LoginForm';
import './App.css'
import Faq from "../components/FAQs"
import VerifyOTP from '../components/VerifyOTP';
import ScrollToTop from '../components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Logout from '../components/Logout';
import Landing from '../components/product-landing';
import Cart from '../components/Cart';
import HelpCenter from '../components/HelpCenter';
import TrackOrder from '../components/TrackOrder';
import TermsAndConditions from '../components/Terms_Conditions';
import ContactUs from '../components/ContactUs';
import AdminPanel from '../AdminRights/AdminPanel';
import AddProduct  from '../AdminRights/AddProducts';
import AddBrands from '../AdminRights/AddBrands';
import AddCategory from "../AdminRights/AddCategory";
import AllProducts from '../components/allProducts';
import Categories from "../components/categories";
import UserProfile from '../User_Profiles/uProfile';
import CompleteProducts from '../components/allProductsWithoutCategory';
import Checkout from '../User_Profiles/Checkout';
import PrivacyPolicy from '../components/PrivacyPolicy';
import CookiePolicy from '../components/cookiePolicy';
import SearchProducts from '../components/searchProductsCards';



function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  // Define admin route paths
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isCheckout=location.pathname.startsWith('/checkout');
  
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <GlobalStyles />

      {/* Show Nav and Categories only if not on admin route */}
      {!isAdminRoute && <Nav />}
      {!isAdminRoute && !isCheckout &&  <Categories />}

      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
        <Route path="/admin/add-brand" element={<AddBrands />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Faqs" element={<Faq />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/TandC" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/all-products" element={<CompleteProducts />} />
        <Route path="/products_per_category/:id" element={<AllProducts />} />
        <Route path="/productLanding/:id" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user_profile/:id" element={<UserProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/search-tags/:tag" element={<SearchProducts />}/>
      </Routes>

      {/* Footer visible only if not on admin route */}
      {!isAdminRoute && <Foot />}
    </>
  );
}

export default App;
