/* eslint-disable */
import React from 'react';
import { SiVisa } from 'react-icons/si';
import { IoHardwareChipOutline } from 'react-icons/io5';
 
function Visa() {
    return (
        <div className="mt-6">
            <div className="flex justify-between align-center">
                <h2 className="text-gray-600 font-bold">Your Visa</h2>
                <a href="#" className="text-gray-600 text-sm">See All</a>
            </div>
            <div className="bg-sky-500 text-white px-6 py-5 rounded-xl flex flex-col justify-between h-[30vh] mt-4">
                <div className="flex justify-between">
                    <IoHardwareChipOutline size="30" />
                    <p className="font-medium">Premium</p>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="font-medium">4000 5127 2123 2018</p>
                    <div className="flex justify-between">
                        <p className="text-xl font-bold">Aurellia</p>
                        <SiVisa size="30" />
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Visa;