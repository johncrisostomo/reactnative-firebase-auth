import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { createAccount, requestOTP } from '../function_endpoints.json';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(createAccount, { phone: this.state.phone });
      await axios.post(requestOTP, { phone: this.state.phone })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ marginBotton: 10 }}>
        <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
