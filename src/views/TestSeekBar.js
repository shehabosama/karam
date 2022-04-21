import React, { Component } from 'react';
import {View , TextInput , Switch} from 'react-native';
import ModalSelector from 'react-native-modal-selector'

class SampleApp extends Component {

  constructor(props) {
      super(props);

      this.state = {
          textInputValue: ''
      }
  }

  render() {
      let index = 0;
      const data = [
          { key: index++, section: true, label: 'Fruits' },
          { key: index++, label: 'Red Apples' },
          { key: index++, label: 'Cherries' },
          { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
          // etc...
          // Can also add additional custom keys which are passed to the onChange callback
          { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
      ];

      return (
          <View style={{flex:1, justifyContent:'space-around', padding:50}}>

             
              <ModalSelector
                  data={data}
                  initValue="Select something yummy!!!"
                  onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />

             
              <ModalSelector
                  data={data}
                  initValue="Select something yummy!"
                  supportedOrientations={['landscape']}
                  accessible={true}
                  scrollViewAccessibilityLabel={'Scrollable options'}
                  cancelButtonAccessibilityLabel={'Cancel Button'}
                //  cancelText="close"
                  onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

                  <TextInput
                      style={{ borderColor:'#ccc',}}
                      editable={false}
                      placeholder="Select something yummy!"
                      value={this.state.textInputValue} />

              </ModalSelector>

             
              <ModalSelector
                  data={data}
                  ref={selector => { this.selector = selector; }}
                  customSelector={<Switch onValueChange={() => this.selector.open()} />}
              />
          </View>
      );
  }
}

export default SampleApp;