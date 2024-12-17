import { View } from 'react-native';
import React, { useState } from 'react';
import { PieChart } from 'react-native-chart-kit';

const Piechart = (props) => {
  const [width, setWidth] = useState(200); // Default width

  return (
    <View
      style={{ backgroundColor: 'green', padding: 10 }}
      onLayout={(event) => {
        const containerWidth = event.nativeEvent.layout.width; // Get the width of the View
        setWidth(containerWidth); // Set the width state
        console.log(containerWidth)
      }}
    >
      <PieChart
        data={props.data}
        accessor={"population"}
        height={200}
        width={width-20} // Dynamically set width
        chartConfig={props.config}
      />
    </View>
  );
};

export default Piechart;
