import React from 'react';
import camIcon from '../assets/cam.svg';
import profileImage from '../assets/profile.png';
import BackButton from '../component/BackButton.jsx'; // ⬅️ Import BackButton

const Profile = () => {
  return (
    <div className="h-screen flex items-start justify-center bg-[#F7F8F9]">
      <div className="h-full w-full max-w-md shadow-md rounded-md flex flex-col bg-white overflow-hidden">

        {/* Top Section */}
        <div className="bg-white text-[#1D2226] p-4 pt-5">
          {/* ⬅️ Back Button */}
          <BackButton />
          <h2 className="text-[18px] font-semibold mb-0">Account Settings</h2>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#F7F8F9] flex-1 p-4 overflow-y-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1">
                <img src={camIcon} alt="Camera" className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Marry Doe</h3>
              <p className="text-[#1D2226] text-[14px] leading-relaxed capitalize font-normal">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="text-[#1D2226] text-[14px] leading-relaxed capitalize font-normal">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>

          <hr
            className="my-4 border-0 border-t-[1.5px]"
            style={{
              borderImage: 'repeating-linear-gradient(to right, #CBCBCB 0, #CBCBCB 6px, transparent 6px, transparent 12px) 100% 1',
              borderImageSlice: 1
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
