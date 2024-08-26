"use client";

import { LineChart } from "@mui/x-charts";
import { useState } from "react";

const Chart = () => {
  const [chartData, setChartData] = useState({
    xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
    series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
  });

  // useEffect(() => {
  //   // Any additional setup or data fetching can be done here
  //   // I'll assume the data is static and set it immediately
  //   setChartData({
  //     xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
  //     series: [{ data: [2, 5.5, 2, 8.5, 1.5, 5] }],
  //   });
  // }, []);

  return (
    <LineChart
      xAxis={chartData.xAxis}
      series={chartData.series}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{
        vertical: true,
        horizontal: true,
      }}
      sx={{
        "& .MuiChartsAxis-root": {
          stroke: "white",
        },
        "& .MuiChartsTick-root": {
          stroke: "white",
          fill: "white",
        },
        "& .MuiChartsGrid-root": {
          stroke: "white",
          color: "white",
          fill: "white",
          strokeWidth: 1,
        },
        "& .MuiChartsGridLine-vertical, & .MuiChartsGridLine-horizontal": {
          stroke: "white",
          color: "white",
          strokeWidth: 1,
        },
      }}
    />
  );
};

export default Chart;

/*
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10], style: { stroke: 'white', strokeWidth: 1 }, tick: { stroke: 'white', fontSize: isSmallScreen ? 10 : 14 } }]}
        yAxis={[{ style: { stroke: 'white', strokeWidth: 1 }, tick: { stroke: 'white', fontSize: isSmallScreen ? 10 : 14 } }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            color: 'white',
          },
        ]}
        height={300}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{
          vertical: { stroke: 'white', strokeWidth: 0.5 },
          horizontal: { stroke: 'white', strokeWidth: 0.5 },
        }}
      />

*/
