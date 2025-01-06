import React from "react";

const Tab = ({ tab, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="tab-button py-2 px-4 hover:bg-gray-200"
    >
      <img src={tab.icon} alt={tab.name} className="w-6 h-6 mr-2" />
      {tab.name}
    </button>
  );
};

export default Tab;
