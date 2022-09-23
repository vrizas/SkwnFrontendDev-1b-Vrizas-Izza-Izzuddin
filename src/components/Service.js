/* eslint-disable */
import React from 'react';
import { BsCreditCardFill, BsQuestionLg } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
 
function Service() {
    return (
        <div className="mt-6">
            <div className="flex justify-between align-center">
                <h2 className="text-gray-600 font-bold">Services</h2>
                <a href="#" className="text-gray-600 text-sm">See All</a>
            </div>
            <div className="mt-4 flex justify-between font-medium text-gray-600">
                <div className="flex flex-col items-center gap-1 text-sm">
                    <span className="w-10 h-10 rounded-full bg-gray-200 text-sky-500 flex justify-center items-center"><BsCreditCardFill size="20" /></span> Card
                </div>
                <div className="flex flex-col items-center gap-1 text-sm">
                    <span className="w-10 h-10 rounded-full bg-gray-200 text-sky-500 flex justify-center items-center"><FaDollarSign size="20" /></span> Finance
                </div>
                <div className="flex flex-col items-center gap-1 text-sm">
                    <span className="w-10 h-10 rounded-full bg-gray-200 text-sky-500 flex justify-center items-center"><BiStats size="20" /></span> Top Up
                </div>
                <div className="flex flex-col items-center gap-1 text-sm">
                    <span className="w-10 h-10 rounded-full bg-gray-200 text-sky-500 flex justify-center items-center"><BsQuestionLg size="20" /></span> Help
                </div>
            </div>
        </div>
    )
}
 
export default Service;