import React from "react";
import ReactApexChart from "react-apexcharts";

function MonochromePie({ places, series, colors, pieHeading, pieValue }) {
  const options = {
    chart: {
      width: "100%",
      type: "pie",
    },

    colors: colors,

    labels: places,
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -5,
        },
      },
    },

    dataLabels: {
      formatter(val, opts) {
        const name = opts.w.globals.labels[opts.seriesIndex];
        return [name, val.toFixed(1) + "%"];
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" />
      <div className="text-center">
        <h6 className="fw-bold mb-0">{pieValue}</h6>
        <h6 className="fw-normal mb-0">{pieHeading}</h6>
      </div>
    </div>
  );
}

export default MonochromePie;
