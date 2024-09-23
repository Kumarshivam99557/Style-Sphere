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


function App() {
 
  return (
    <div className=" flex flex-col overflow-hidden bg-white">
          {/*common components */}

          <Routes>
             <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<AuthLogin/>} />
                <Route path="registration" element={<AuthRegistration/>} />
                <Route/>
             </Route>
             <Route path="/admin" element={<AdminLayout/>}>
                <Route path="products" element={<AdminProduct/>} />
                <Route path="orders" element={<AdminOrder/>} />
                <Route path="dashboard" element={<AdminDashboard/>} />
                <Route path="features" element={<AdminFeatures/>} />
             </Route>
             <Route path="/shop" element={<ShoppingLayout/>}>
                 <Route path="home" element={<ShoppingHome/>} /> 
                 <Route path="account" element={<ShoppingAccount/>} />
                 <Route path="listing" element={<ShoppingListing/>} />
                 <Route path="checkout" element={<ShoppingCheckout/>} />
             </Route>
             <Route path="*" element={<PageNotFound/>}  />
          </Routes>
    </div>
  )
}

export default App
