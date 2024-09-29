import { Routes ,Route} from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegistration from "./pages/auth/registration"
import AdminLayout from "./components/admin-view/layout"
import AdminProduct from "./pages/admin-view/product"
import AdminOrder from "./pages/admin-view/order"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminFeatures from "./pages/admin-view/features"
import ShoppingLayout from "./components/shoping-view/layout"
import PageNotFound from "./pages/not-found"
import ShoppingHome from "./pages/shoping-view/home"
import ShoppingAccount from "./pages/shoping-view/account"
import ShoppingListing from "./pages/shoping-view/listing"
import ShoppingCheckout from "./pages/shoping-view/checkout"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkAuth } from "./Store/Auth-Slice"

function App() {
  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // console.log("isLoading", isLoading, "user", user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="registration" element={<AuthRegistration />} />
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="products" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrder />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />
      </Routes>
    </div>
  );
}

export default App;
