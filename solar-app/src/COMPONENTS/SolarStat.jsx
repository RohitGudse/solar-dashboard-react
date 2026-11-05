
import React from "react";

const stats = [
  {
    title: "Total Energy Generated",
    value: "1,250 kWh",
    change: "+12.5%",
    icon: "☀️",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Energy Consumption",
    value: "850 kWh",
    change: "+5.2%",
    icon: "⚡",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Solar Efficiency",
    value: "94.8%",
    change: "+3.8%",
    icon: "📈",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Total Savings",
    value: "₹12,500",
    change: "+18.4%",
    icon: "💰",
    color: "bg-purple-100 text-purple-600",
  },
];

const SolarStats = () => {
  return (
    <section className="w-full p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Solar Statistics
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your solar energy performance
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                {stat.change}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-sm font-medium text-gray-500">
                {stat.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-800">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarStats;
