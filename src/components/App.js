import profilePic from '../assets/images/profile-pic.jpg';
import Visa from './Visa';

function App() {
  return (
    <div className="max-w-[600px] min-h-screen bg-gray-100 m-auto">
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
        </main>  
      </div>
      
    </div>
  );
}

export default App;
