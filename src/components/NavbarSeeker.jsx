import React, { useState } from 'react';
import { Home, User, Settings, Files, Menu, Bell, TrendingUp } from 'lucide-react';

export default function NavbarSeeker() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: User, label: 'Profile' },
    { icon: Files, label: 'Resume Builder' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`relative h-screen bg-gray-50`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-30 ${
          isExpanded ? 'w-60' : 'w-18'
        } bg-gradient-to-b from-slate-900 to-slate-800 transition-all duration-300 ease-in-out shadow-2xl`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {/* Logo/Header */}
        <div className="flex items-center h-20 px-6 border-b border-slate-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Menu className="text-white w-6 h-6 min-w-6" />
          <span
            className={`ml-4 text-white font-bold text-xl whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            CareerMatch
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="mt-8 px-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex items-center w-full px-3 py-3 mb-2 rounded-lg transition-all duration-200 group ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6 min-w-6" />
                <span
                  className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                  } overflow-hidden`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 w-full border-t border-slate-700">
          <div className="flex items-center px-6 py-4">
            <div className="w-10 h-10 rounded-full left-2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold min-w-10">
              JD
            </div>
            <div
              className={`ml-3 transition-all duration-300 ${
                isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              } overflow-hidden`}
            >
              <p className="text-white font-medium text-sm whitespace-nowrap">John Doe</p>
              <p className="text-slate-400 text-xs whitespace-nowrap">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
