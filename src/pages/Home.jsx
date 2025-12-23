import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../component/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center bg-[#F7F8F9]">
      <div className="w-full max-w-[450px] h-full flex flex-col justify-end p-4 md:p-6 bg-[#F7F8F9] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className='mb-8 sm:mb-0'>
          <h2 className="text-[28px] font-bold text-[#1D2226] mb-1 leading-tight">
            Welcome to PopX
          </h2>

          <p className="text-[18px] text-[#1D2226] opacity-60 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
          </p>

          <div className="flex flex-col gap-4">
            <Button
              text="Create Account"
              buttonColor="#6C25FF"
              textColor="#FFFFFF"
              onClick={() => navigate('/signup')}
            />
            <Button
              text="Already Registered? Login"
              buttonColor="#CBCBCB"
              textColor="#000000"
              onClick={() => navigate('/login')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
