'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './src/Style';
import InputButton from './src/InputButton';

const inputButtons = [
    ['MC', 'MR', 'M+', 'M-'],
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    ['.', 0, '=', '+'],
    ['𝛑','x²','C', 'CE']
];

export default class ReactCalculator extends Component {
//constructor
    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            memoryValue: 0,
            selectedSymbol: null
        };

        this.state = this.initialState;
    }
//render layout
    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.displayMemoryContainer}>
                    <Text style={Style.displayMemory}>{this.state.memoryValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }
  //render buttons
    _renderInputButtons() {

       let views = inputButtons.map((row, idx) => {
           let inputRow = row.map((buttonVal, columnIdx) => {
               return <InputButton
                           value={buttonVal}
                           highlight={this.state.selectedSymbol === buttonVal}
                           onPress={()=> this._onInputButtonPressed(buttonVal)}
                           key={'butt-' + columnIdx} />;
           });

           return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
       });

       return views;
   }
   //pressing buttons
    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input);
            default:
                return this._handleStringInput(input);
        }
    }
  //number input
    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        });
    }
  //string handler
    _handleStringInput(str) {
        switch (str) {

          //memory
          case 'MC':
            this.setState({memoryValue: 0});
          break;
          case 'MR':
            this.setState({inputValue: this.state.memoryValue});
          break;
          case 'M+':
            this.setState({memoryValue: this.state.memoryValue + this.state.inputValue});
          break;
          case 'M-':
            this.setState({memoryValue: this.state.memoryValue - this.state.inputValue});
          break;

          // CE button
            case 'CE':
              this.setState(this.initialState);
            break;
         // C button
            case 'C':
              this.setState({inputValue: 0});
            break;
        // :, *, + , - button
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break;
      // kwadraad button
            case 'x²':
              this.setState({inputValue: this.state.inputValue * this.state.inputValue});
            break;

            case '𝛑':
              this.setState({inputValue: this.state.inputValue * Math.PI});
            break;
     // = button
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                });
                break;
        }
    }

}
