import React, { Component } from "react";

import { VrButton, Image, View, asset, Text } from "react-vr";

export default class Wood extends Component {
  state = {
    displayingHammer: false
  };

  toggleDisplayText = e => {
    console.log(this.state.displayingHammer);
    this.state.displayingHammer
      ? this.setState({ displayingHammer: false })
      : this.setState({ displayingHammer: true });
  };
  render() {
    return (
      <View>
        <VrButton onClick={this.toggleDisplayText}>
          {this.state.displayingHammer === true ? (
            <View>
              <Image
                source={asset("Hammer-2-icon.png")}
                style={{
                  position: "relative",
                  width: 5,
                  height: 5,
                  layoutOrigin: [0, 0],
                  transform: [{ translate: [25, 0, -3] }, { rotateY: -90 }]
                }}
              />
            </View>
          ) : (
            <Image
              source={asset("Wood-5-icon.png")}
              style={{
                position: "relative",
                width: 20,
                height: 20,
                layoutOrigin: [0, 0],
                transform: [{ translate: [38, 1, 18] }, { rotateY: -90 }]
              }}
            />
          )}
        </VrButton>
      </View>
    );
  }
}
