import React from 'react'
import './dashboard.scss';

const AdminDashboard = () => {
    return (
        <>
        <div class="col p-5">

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                    <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-orange-600 dark:text-orange-100 bg-orange-200 dark:bg-orange-500">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Total Order</p>
                        <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">169</p>
                    </div>
                </div>
            </div>
            <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                    <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-blue-600 dark:text-blue-100 bg-blue-200 dark:bg-blue-500">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Order Pending</p>
                        <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">34</p>
                    </div>
                </div>
            </div>
            <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                    <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-teal-600 dark:text-teal-100 bg-teal-200 dark:bg-teal-500">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Order Processing</p>
                        <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">59</p>
                    </div>
                </div>
            </div>
            <div class="min-w-0 rounded-lg ring-1 ring-black ring-opacity-4 overflow-hidden bg-white dark:bg-gray-800 flex h-full">
                <div class="p-4 flex items-center border border-gray-200 dark:border-gray-800 w-full rounded-lg">
                    <div class="flex items-center justify-center p-3 rounded-full h-12 w-12 text-center mr-4 text-lg text-green-600 dark:text-green-100 bg-green-200 dark:bg-green-500">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">Order Delivered</p>
                        <p class="text-2xl font-bold leading-none text-gray-600 dark:text-gray-200">65</p>
                    </div>
                </div>
            </div>
            </div>
       


    </div> 
        </>
    )
}

export default AdminDashboard;