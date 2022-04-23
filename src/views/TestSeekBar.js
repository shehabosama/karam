import React, { Component } from 'react';
import {View , TextInput , Switch} from 'react-native';
import ModalSelector from 'react-native-modal-selector'
import { data } from '../utils/countries';

class SampleApp extends Component {

  constructor(props) {
      super(props);

      this.state = {
          textInputValue: ''
      }
  }

  render() {
     

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