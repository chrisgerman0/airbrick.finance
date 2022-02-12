import React from "react";
import ReactApexChart from "react-apexcharts";

function Chartbar({ monthlyData, barHeading, barValue }) {
  const series = [
    {
      name: "Rate",
      data: monthlyData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      tickPlacement: "on",
    },

    fill: {
      type: "gradient",
      colors: ["#208390"],
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.85,
        stops: [0, 0, 0],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={305}
      />
      <div className="text-center">
        <h6 className="fw-bold mb-0">{barValue}</h6>
        <h6 className="fw-normal mb-0">{barHeading}</h6>
      </div>
    </div>
  );
}

export default Chartbar;
