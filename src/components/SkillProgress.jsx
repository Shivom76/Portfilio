// src/components/SkillProgress.jsx

import React from 'react';

export default function SkillProgress({ skill, percentage }) {
  // Ensure percentage is between 0 and 100
  const normalizedPercentage = Math.max(0, Math.min(100, percentage));

  // Determine width based on percentage
  const progressBarWidth = { width: `${normalizedPercentage}%` };

  return (
    <div className="mb-4">
      {/* Skill Name */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-200">{skill}</span>
        <span className="text-xs font-semibold text-gray-300">{normalizedPercentage}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        {/* Progress Fill */}
        <div 
          className="h-2.5 rounded-full 
                     bg-gradient-to-r from-indigo-400 to-cyan-400 
                     transition-all duration-700 ease-out" 
          style={progressBarWidth}
          aria-valuenow={normalizedPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          role="progressbar"
        ></div>
      </div>
    </div>
  );
}