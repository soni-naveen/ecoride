import React from "react";
import howitwork from '../assets/howitwork.png';
import { Fullscreen } from "@mui/icons-material";
function Howitworks() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover the easy steps to get started with our app.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg overflow-hidden relative pt-6 pl-6">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/sign-up.jpg")' }}></div>
            <div className="p-6">
              <span className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">1</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
              <p className="text-gray-500">
                Create an account with your email and password.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden relative pt-6 pl-6">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/connect-accounts.jpg")' }}></div>
            <div className="p-6">
              <span className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">2</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Connect Accounts
              </h3>
              <p className="text-gray-500">
                Link your bank accounts and credit cards to your profile.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden relative pt-6 pl-6">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/start-budgeting.jpg")' }}></div>
            <div className="p-6">
              <span className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">3</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Start Budgeting
              </h3>
              <p className="text-gray-500">
                Create a budget and track your spending to reach your financial
                goals.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden relative pt-6 pl-6">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("/monitor-progress.jpg")' }}></div>
            <div className="p-6">
              <span className="absolute top-0 left-0 mt-4 ml-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">4</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Monitor Progress
              </h3>
              <p className="text-gray-500">
                View detailed reports and insights to stay on top of your
                finances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks;
