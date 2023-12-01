import React, { useState } from 'react';
import { Header } from '../components';

const InvoicePreview = () => {
    return (
        <div className="flex h-screen">
            <div>
                <Header />
            </div>
            <div className='p-7 w-full'>
                <h1 className='text-3xl mb-4'>Invoices Details</h1>
                <div className='grid grid-cols-2 gap-7 border-2 p-5 rounded shadow-lg mb-5'>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Customer Name:</span>
                        <span>Adeyanju</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Invoice Id:</span>
                        <span>Bujux121</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Date:</span>
                        <span>02/03/2023</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Product Name:</span>
                        <span>Caramel</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Quantity:</span>
                        <span>3</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Unit Price:</span>
                        <span>#3000</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Total Price:</span>
                        <span>#9000</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-7 border-2 p-5 rounded shadow-lg mb-5'>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Customer Name:</span>
                        <span>Adeyanju</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Invoice Id:</span>
                        <span>Bujux121</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Date:</span>
                        <span>02/03/2023</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Product Name:</span>
                        <span>Caramel</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Quantity:</span>
                        <span>3</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800'>
                        <span>Unit Price:</span>
                        <span>#3000</span>
                    </div>
                    <div className='flex justify-between text-xl text-slate-800 border-r-2 pr-6'>
                        <span>Total Price:</span>
                        <span>#9000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoicePreview;
