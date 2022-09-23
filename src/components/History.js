/* eslint-disable */
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

function History() {
    return (
        <div className="mt-6 px-4 py-3">
            <div className="flex justify-between align-center px-4  ">
                <h2 className="text-gray-600 font-bold">History</h2>
                <a href="#" className="text-gray-600 text-sm flex items-center gap-1">Category <FiChevronDown /></a>
            </div>
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-2 shadow px-4 py-3 rounded-xl w-full">
                    <div>
                        <span className="w-10 h-10 rounded-full bg-blue-100 text-sky-500 flex justify-center items-center"><FiActivity size="20" /></span>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="text-sm">
                            <h3 className="font-medium">Deposit</h3>
                            <p className="text-blue-500">Rp15.000.000,-</p>
                            <p className="flex items-center gap-1 text-gray-600 mt-2"><HiLocationMarker /> Bank Mandiri ATM</p>
                        </div>
                        <div className="text-xs text-gray-600 flex flex-col justify-between">
                            <p className="text-end">11 Maret 2022</p>
                            <p className="text-end">11.21 AM</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 shadow px-4 py-3 rounded-xl w-full">
                    <div>
                        <span className="w-10 h-10 rounded-full bg-blue-100 text-sky-500 flex justify-center items-center"><FiActivity size="20" /></span>
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="text-sm">
                            <h3 className="font-medium">Deposit</h3>
                            <p className="text-blue-500">Rp15.000.000,-</p>
                            <p className="flex items-center gap-1 text-gray-600 mt-2"><HiLocationMarker /> Bank Mandiri ATM</p>
                        </div>
                        <div className="text-xs text-gray-600 flex flex-col justify-between">
                            <p className="text-end">11 Maret 2022</p>
                            <p className="text-end">11.21 AM</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
 
export default History;