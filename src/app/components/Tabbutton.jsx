import React from 'react'

const Tabbutton = ({ active, selectTab, children }) => {
    const buttonClass = active
        ? 'text-white font-extrabold border-b-2 border-purple-500'
        : 'text-[#ADB7BE] border-b-2 border-transparent hover:border-purple-500';

    return (
        <button onClick={selectTab} className="transition-colors duration-300">
            <p className={`font-semibold mr-3 ${buttonClass}`}>
                {children}
            </p>
        </button>
    );
};

export default Tabbutton;
