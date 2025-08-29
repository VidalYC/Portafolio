import React from "react";

interface CompetencyItem {
  skill: string;
  percentage: number;
  icon: any;
}

export const CompetencyCard = ({ items }: { items: CompetencyItem[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.skill}
                </span>
              </div>
              <div className="text-right">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  {item.percentage}%
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
