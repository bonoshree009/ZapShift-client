import React, { useState } from 'react';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

    return (
        <div className='bg-white p-20 rounded'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='text-gray-400 py-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br />packages to business shipments — we deliver on time, every time.</p>     
             <div className='py-7'>
                 <div className="flex gap-8  mb-8">
                     {tabs.map((tab) => ( <button key={tab} onClick={() => setActiveTab(tab)}className={`pb-3 text-sm font-medium transition ${
              activeTab === tab ? "text-green-700 border-b-2 border-green-700": "text-gray-400 hover:text-gray-600"}`}>
            {tab} </button> ))}
      </div>
       <div className="text-gray-500 text-sm leading-relaxed space-y-6">
        {activeTab === "Story" && (
          <>
           