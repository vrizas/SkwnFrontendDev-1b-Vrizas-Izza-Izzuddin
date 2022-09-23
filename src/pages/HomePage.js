import React from 'react';
import Activity from '../components/Activity';
import Service from '../components/Service';
import Visa from '../components/Visa';
import profilePic from '../assets/images/profile-pic.jpg';

function HomePage() {
  return (
    <div className="px-4 py-3">
        <header className="flex justify-between">
          <div>
            <p className="text-gray-600">Hello,</p>
            <h1 className="font-bold text-xl">Aurellia!</h1>
          </div>
          <img src={profilePic} alt="" className="w-14 h-14 rounded-full" />
        </header>
        <main>
            <Visa />
            <Service />
            <Activity />
        </main>  
    </div>
  );
}

export default HomePage;
