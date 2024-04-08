import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from "./components/Signup";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/Welcome'
import SelectReason from './components/SelectReason';
import Email from './components/Email';
function App() {
  const [formData1, setFormData1] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [formData2, setFormData2] = useState({
    location: "",
    image: null
  })
  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };
  const handleImageChange = (base64Image) => {
    setFormData2({ ...formData2, image: base64Image });
  };

  
  // const handleSubmit = async () => {
  //   try {
  //       const response = await axios.post('http://localhost:3000/api/reg/signupDribble');
  //       console.log(response.data); // Handle response data as needed
  //       // Redirect to a success page or any other page after successful submission
  //   } catch (error) {
  //       console.error('Error:', error);
  //   }
  // };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup formData={formData1} handleChange={handleChange1} />} />
        <Route path="/welcome" element={<Welcome formData={formData2} handleChange={handleChange2} handleImageChange={handleImageChange} />} />
        <Route path="/selectReason" element={<SelectReason formData={[formData1,formData2]} />} />
        <Route path="/emailverify" element={<Email/>} />
      </Routes>

    </Router>
  )
}
export default App
