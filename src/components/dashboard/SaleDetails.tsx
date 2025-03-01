import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

function SaleDetails() {
  const data = [
    { name: 'jun', uv: 40, pv: 24, amt: 24 },
    { name: 'july', uv: 30, pv: 14, amt: 22 },
    { name: 'august', uv: 90, pv: 98, amt: 22 },
    { name: 'nov', uv: 27, pv: 39, amt: 20 },
    { name: 'dec', uv: 58, pv: 48, amt: 21 },
    { name: 'jan', uv: 23, pv: 38, amt: 25 },
    { name: 'feb', uv: 34, pv: 43, amt: 21 },
  ];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="transparent" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FE791B"
            fill="#FFF0E6"
            dot={{ r: 5 }} // Shows points
            activeDot={{ r: 8 }} // Highlights active point
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SaleDetails;
