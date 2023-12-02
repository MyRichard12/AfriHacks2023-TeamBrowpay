import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components';

const InvoiceTable = () => {
    const navigate = useNavigate();
    const [invoices, setInvoices] = useState([
        { id: 1, date: '2023-01-01', discount: 10, price: 100 },
        { id: 2, date: '2023-01-02', discount: 5, price: 150 },
    ]);
    const handleClick = (id) => {
        navigate(`/invoice/${id}/view`);
    }
    return (
        <div className="flex h-screen">
            <div>
                <Header />
            </div>
            <div className='p-7 w-full'>
                <h1 className='text-3xl mb-4'>Invoices</h1>
                <table className='min-w-full border border-gray-300 w-1'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className="py-2 px-4 border-b text-left">Invoice ID</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Discount</th>
                            <th className="py-2 px-4 border-b text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr key={invoice.id} className="text-left cursor-pointer" onClick={() => handleClick(invoice.id)}>
                                <td className="py-2 px-4 border-b">{invoice.id}</td>
                                <td className="py-2 px-4 border-b">{invoice.date}</td>
                                <td className="py-2 px-4 border-b">{invoice.discount}%</td>
                                <td className="py-2 px-4 border-b">${invoice.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceTable;
