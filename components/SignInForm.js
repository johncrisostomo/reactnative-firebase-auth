import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { verifyOTP } from '../function_endpoints';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(verifyOTP, {
        phone: this.state.phone,
        code: this.state.code
      });
      
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View>
          <View style={{ marginBotton: 10 }}>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </View>

          <View style={{ marginBotton: 10 }}>
            <FormLabel>Enter Code</FormLabel>
            <FormInput
              value={this.state.code}
              onChangeText={code => this.setState({ code })}
            />
          </View>
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

export default SignInForm;
