import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Login from "./components/views/Login";
import StepOne from "./components/views/StepOne";
import StepTwo from "./components/views/StepTwo";
import StepThree from "./components/views/StepThree";



const  Auth = () => {
  return (
    <Router>
      <Routes>
      <Route  path='/login' exact element={<Login/> } />
      <Route  path='/step3' exact element={ <StepThree/>} />
      <Route  path='/step2' exact element={ <StepTwo/>} />
      <Route  path='/' exact element={ <StepOne/>} />
      </Routes>
  </Router>

  );
}

export default Auth;
