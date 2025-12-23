import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../component/InputField.jsx';
import Button from '../component/Button.jsx';


const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="h-screen bg-[#F7F8F9] flex justify-center items-start">
      <div className="h-[100vh] w-full max-w-[450px] bg-[#F7F8F9] shadow-md rounded-md p-8">
        
      

        <h2 className="text-[28px] font-bold text-[#1D2226] mb-1 leading-tight text-balance">
          Signin to your <br /> PopX account
        </h2>

        <p className="text-[18px] text-[#1D2226] opacity-60 mb-8 leading-relaxed text-balance">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
        </p>

        <InputField
          id="email"
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1 mb-3">{errors.email}</p>}

        <InputField
          id="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1 mb-3">{errors.password}</p>}

        <div className="mt-6">
          <Button
            text="Login"
            buttonColor="#CBCBCB"
            textColor="#FFFFFF"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
