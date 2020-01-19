import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";
import Wood from "./Wood";

export default class testvr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("principaleBlenderVR.jpg")} />
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -3] }]
          }}
        />
        <Wood />
      </View>
    );
  }
}

AppRegistry.registerComponent("testvr", () => testvr);
