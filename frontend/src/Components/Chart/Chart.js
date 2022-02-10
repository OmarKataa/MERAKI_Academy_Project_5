import React, { useState } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryPie,
} from "victory";
import ApexCharts from "apexcharts";
import "./styleChart.css";
export default function Chart() {
  
  var options1 = {
    series: [
      {
        name: "Discharge Patient",
        data: [12, 22, 14, 18, 22, 13, 17],
      },
      {
        name: "Admit Patient",
        data: [28, 39, 23, 36, 45, 32, 43],
      },
    ],
    chart: {
      height: 275,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#ee3158", "#1dbfc1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "#e7e7e7",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    legend: {
      show: false,
    },
  };

  var chart1 = new ApexCharts(
    document.querySelector("#overview_trend"),
    options1
  );
  chart1.render();
  // -------------chart Circlur
  var options = {
    series: [30, 25, 30, 25],
    chart: {
      height: 200,
      type: "polarArea",
    },
    labels: ["Male", "Female", "Child", "Germany"],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: "right",
    },
    colors: ["#3246D3", "#00D0FF", "#ee3158", "#ffa800"],
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart432"), options);
  chart.render();
  const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 },
  ];

  const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 },
  ];

  const data2015 = [
    { quarter: 1, earnings: 18000 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 15000 },
    { quarter: 4, earnings: 12000 },
  ];
  return (
    <div className="chart">
      <div className="box-body">
        <div id="chart432"></div>
        <div id="overview_trend"></div>
      </div>
      <h1>Victory Tutorial</h1>
      

      {/* <VictoryPie
         colorScale={["tomato", "black", "gold", "cyan", "navy" ]}
  data={[
    { x: "Cats", y: 10 },
    { x: "Dogs", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 },
    { x: "Birds", y: 10 }
  ]}
/>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material} animate={{duration: 1000}}
        >
          
          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={data2012}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2013}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2014}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2015}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart> */}
    </div>
  );
}
