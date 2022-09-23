import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { BsQuestionCircleFill } from 'react-icons/bs';
import Statistic from '../components/Statistic';
import History from '../components/History';

function FinancePage() {
  return (
    <div>
       <header className="flex flex-col gap-5 bg-sky-500 text-white px-4 py-8">
            <div className="flex justify-between w-full">
                <Link to="/" className="font-medium flex gap-2 items-center">
                    <FiChevronLeft />
                    Account Finance
                </Link>
                <button><BsQuestionCircleFill/></button>
            </div>
            <div>
                <p className="font-bold text-2xl">Rp. 25.550.000,-</p>
                <p>12 June 2022</p>
            </div>
        </header>
        <main>
            <Statistic />
            <History />
        </main> 
    </div>
  );
}

export default FinancePage;
