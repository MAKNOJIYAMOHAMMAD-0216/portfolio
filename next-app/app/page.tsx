"use client";
import React, { useState } from 'react';

const initialChapters = [
  { id: 1, title: 'પતરંગા પાર્ક', status: 'pending' },
  { id: 2, title: 'તમારો મત આપો', status: 'pending' },
  { id: 3, title: 'છ પગ ને બે પાંખ', status: 'pending' },
  { id: 4, title: 'આપણી પૃથ્વી તો બચાવો, મારા દોસ્તો ને પણ', status: 'pending' },
  { id: 5, title: 'ઠંડક - બોખ્ખો - બિલ્લી', status: 'pending' },
  { id: 6, title: 'જીવવા દો અને જીવો', status: 'pending' },
  { id: 7, title: 'પ્રશ્નક્ષેત્રમાં પરાક્રમ', status: 'pending' },
  { id: 8, title: 'ચોટી મુંડો ઘૂઘૂઘૂ', status: 'pending' },
  { id: 9, title: 'શુભરાત્રિ', status: 'pending' },
];

export default function Home() {
  const [chapters, setChapters] = useState(initialChapters);

  const updateStatus = (id: number, newStatus: string) => {
    setChapters(chapters.map(ch => ch.id === id ? { ...ch, status: newStatus } : ch));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'complete': return 'bg-green-100 text-green-800 border-green-300';
      case 'incomplete': return 'bg-red-100 text-red-800 border-red-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f9f6] p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
        {/* Decorative elements similar to the first image */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q30,40 80,10" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="80" cy="10" r="3" fill="black" />
            <path d="M20,85 Q40,50 85,20" stroke="black" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        <div className="bg-[#bce0cd] py-8 px-12 text-center border-b-[12px] border-white">
          <h1 className="text-5xl font-serif italic text-gray-800 tracking-wide">Study Timetable</h1>
          <p className="mt-2 text-gray-700">અનુક્રમણિકા ટ્રેકર (Index Tracker)</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-1 font-bold text-center text-gray-500 uppercase text-sm tracking-wider py-2 bg-gray-50 rounded">ક્રમ</div>
            <div className="md:col-span-7 font-bold text-gray-500 uppercase text-sm tracking-wider py-2 px-4 bg-gray-50 rounded">પ્રકરણ (Chapter)</div>
            <div className="md:col-span-4 font-bold text-center text-gray-500 uppercase text-sm tracking-wider py-2 bg-gray-50 rounded">Status</div>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center group transition-all duration-200 hover:-translate-y-1">
                {/* Chapter Number */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#bce0cd] flex items-center justify-center font-bold text-gray-700 shadow-sm">
                    {chapter.id}
                  </div>
                </div>

                {/* Chapter Title */}
                <div className="md:col-span-7 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-gray-800">{chapter.title}</h3>
                </div>

                {/* Status Controls */}
                <div className="md:col-span-4 flex justify-center gap-2">
                  <select 
                    value={chapter.status}
                    onChange={(e) => updateStatus(chapter.id, e.target.value)}
                    className={`w-full p-3 rounded-xl border appearance-none text-center font-medium shadow-sm cursor-pointer transition-colors ${getStatusColor(chapter.status)}`}
                  >
                    <option value="pending">⏳ Pending</option>
                    <option value="complete">✅ Complete</option>
                    <option value="incomplete">❌ Incomplete</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
