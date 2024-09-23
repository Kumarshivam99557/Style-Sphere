import { Routes ,Route} from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegistration from "./pages/auth/registration"


function App() {
 
  return (
    <div className=" flex flex-col overflow-hidden bg-white">
          {/*common components */}
          <h1>header components</h1>
          <Routes>
             <Route path="/auth" element={<AuthLayout/>}>
                <Route path="login" element={<AuthLogin/>} />
                <Route path="registration" element={<AuthRegistration/>} />
                <Route/>
             </Route>
          </Routes>
    </div>
  )
}

export default App
