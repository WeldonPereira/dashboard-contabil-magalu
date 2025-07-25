"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface FinanceIndicatorsChartProps {
  title?: string;
  data: { name: string; valor: number }[];
}

const FinanceIndicatorsChart: React.FC<FinanceIndicatorsChartProps> = ({
  title = "Índices Financeiros",
  data,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-2 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 pl-3 pt-3 pb-2 border-b border-gray-200 text-gray-700">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            type="number"
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#6b7280"
            fontSize={12}
            width={140}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(251 191 36 / 0.2)" }}
            contentStyle={{
              borderRadius: 8,
              borderColor: "#e5e7eb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              fontSize: 13,
            }}
          />
          <Bar dataKey="valor" radius={[0, 0, 0, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.valor <= 0 ||
                  entry.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "") === "endividamento"
                    ? "#dc2626"
                    : "#16a34a"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceIndicatorsChart;
