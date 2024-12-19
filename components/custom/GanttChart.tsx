import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import Svg, { Rect, Line, Text as SvgText, Circle } from "react-native-svg";

const GanttChart = () => {
  const screenWidth = Dimensions.get("window").width;

  // Updated gnatt_data
  const gnatt_data = [
    {
      Id: 1,
      Type: "timing",
      data: [
        [0, 2],
        [4, 7],
        [11, 16],
      ],
    },
    {
      Id: 2,
      Type: "freq",
      data: [1, 4, 5, 7, 8],
    },
    {
      Id: 3,
      Type: "timing",
      data: [
        [2, 4],
        [6, 7],
        [20, 22],
      ],
    },
    {
      Id: 4,
      Type: "timing",
      data: [
        [3, 8],
        [10, 12],
        [15, 18],
      ],
    },
    {
      Id: 5,
      Type: "timing",
      data: [
        [5, 10],
        [13, 14],
        [17, 20],
      ],
    },
    {
      Id: 6,
      Type: "freq",
      data: [2, 3, 6, 12],
    },
    {
      Id: 7,
      Type: "freq",
      data: [8, 9, 15, 19],
    },
    {
      Id: 8,
      Type: "freq",
      data: [7, 14, 18, 21],
    },
    {
      Id: 9,
      Type: "freq",
      data: [11, 13, 16, 23],
    },
  ];

  // Constants for chart dimensions
  const barHeight = 10; // Increased for better spacing
  const barSpacing = 10; // More spacing between rows
  const labelWidth = 50; // Space for task labels
  const timeScaleFactor = (screenWidth - labelWidth-150) / 24; // Dynamically scale to fill width
  const freqMarkerRadius = 6; // Larger frequency dots for better visibility

  const chartHeight =
    gnatt_data.length * (barHeight + barSpacing) + 80; // Calculate dynamic height

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "rgba(255,255,255,0.3)",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Combined Gantt Chart
      </Text>
      <Svg width={screenWidth} height={300}>
        {/* Chart Area */}
        {gnatt_data.map((entry, index) => {
          const rowY = index * (barHeight + barSpacing) + barHeight / 2;

          return (
            <React.Fragment key={`task-${entry.Id}`}>
              {/* Horizontal row line */}
              <Line
                x1={labelWidth}
                y1={rowY}
                x2={screenWidth - 20}
                y2={rowY}
                stroke="gray"
                strokeWidth="1"
              />
              {/* Timing bars */}
              {entry.Type === "timing" &&
                entry.data.map(([start, end], barIndex) => (
                  <Rect
                    key={`bar-${entry.Id}-${barIndex}`}
                    x={labelWidth + start * timeScaleFactor}
                    y={rowY - barHeight / 2}
                    width={(end - start) * timeScaleFactor}
                    height={barHeight}
                    fill="blue"
                  />
                ))}
              {/* Frequency dots */}
              {entry.Type === "freq" &&
                entry.data.map((point, pointIndex) => (
                  <Circle
                    key={`dot-${entry.Id}-${pointIndex}`}
                    cx={labelWidth + point * timeScaleFactor}
                    cy={rowY}
                    r={freqMarkerRadius}
                    fill="red"
                  />
                ))}
              {/* Task label */}
              <SvgText
                x={0}
                y={rowY + 5}
                fontSize={14}
                fill="black"
                textAnchor="start"
              >
                Task {entry.Id}
              </SvgText>
            </React.Fragment>
          );
        })}

        {/* Hours Labels */}
        {[...Array(25).keys()].map((hour) => (
          <SvgText
            key={`hour-label-${hour}`}
            x={labelWidth + hour * timeScaleFactor}
            y={chartHeight - 30}
            fontSize={12}
            fill="black"
            textAnchor="middle"
          >
            {hour}
          </SvgText>
        ))}

        {/* X-Axis */}
        <Line
          x1={labelWidth}
          y1={chartHeight - 50}
          x2={screenWidth - 20}
          y2={chartHeight - 50}
          stroke="black"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
};

export default GanttChart;
