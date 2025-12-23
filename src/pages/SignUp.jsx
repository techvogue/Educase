import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../component/InputField.jsx';
import Button from '../component/Button.jsx';


const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); 
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
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

    if (!formData.company) newErrors.company = 'Company name is required';
    if (!formData.isAgency) newErrors.isAgency = 'Please select if you are an agency';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[450px] min-h-screen bg-[#F7F8F9] p-6 flex flex-col shadow-lg rounded-xl">

        

        <div className='text-[#1D2226]'>
          <h2 className="text-2xl font-bold mb-1">Create your</h2>
          <h2 className="text-2xl font-bold  mb-4">PopX account</h2>
        </div>

        <InputField
          className="mb-2"
          id="fullName"
          name="fullName"
          label="Full Name"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>}

        <InputField
          className="mb-2"
          id="phone"
          name="phone"
          label="Phone number"
          placeholder="1234567890"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

        <InputField
          className="mb-2"
          id="email"
          name="email"
          label="Email address"
          placeholder="marry@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <InputField
          className="mb-2"
          id="password"
          name="password"
          label="Password"
          placeholder="••••••••"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

        <InputField
          className="mb-2"
          id="company"
          name="company"
          label="Company name"
          placeholder="Company Inc."
          value={formData.company}
          onChange={handleChange}
          required
        />
        {errors.company && <p className="text-red-500 text-sm mb-2">{errors.company}</p>}

        <div className="mt-4 mx-1">
          <label className="block text-sm font-semibold text-[#6C25FF] mb-2">
            Are you an Agency? <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                checked={formData.isAgency === 'Yes'}
                onChange={handleChange}
                className="accent-[#6C25FF] mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="No"
                checked={formData.isAgency === 'No'}
                onChange={handleChange}
                className="accent-[#6C25FF] mr-2"
              />
              No
            </label>
          </div>
          {errors.isAgency && <p className="text-red-500 text-sm mt-2">{errors.isAgency}</p>}
        </div>

        <div className="mt-16 sm:mt-auto">
          <Button
            text="Create Account"
            buttonColor="#6C25FF"
            textColor="#ffffff"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
