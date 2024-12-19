import { View } from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';

let barConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

let barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [200, 45, 28, 80, 99, 43],
        },
    ],
};

const Barchart = ({ data = barData, config=barConfig }) => {
  const [width, setWidth] = useState(200);


  return (
    <View
      className="p-2"
      onLayout={(event) => {
        const containerWidth = event.nativeEvent.layout.width;
        setWidth(containerWidth);
      }}
    >
      <BarChart
        data={data}
        height={200}
        width={width-20}
        chartConfig={config}
      />
    </View>
  );
};

export default Barchart;
