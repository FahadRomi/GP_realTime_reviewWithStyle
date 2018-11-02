import React, { Component } from 'react';
import { TextInput, Text } from 'react-native'
import { connect } from 'react-redux';

import {
	Card,
	 Section,
	  Button,
		 TextInputt,
		  Spinner
		 } from './common';
import { emailChanged, passwordChanged, loginUser, RegisterUser } from '../actions';

class Register extends Component {
	onEmailChange(text) {
	this.props.emailChanged(text);
	}

	onPasswordChange(text) {
this.props.passwordChanged(text);
}

		onButtonPress() {
			const { email, password } = this.props;

			this.props.RegisterUser({ email, password });
		}

	  renderButton() {
	    if (this.props.loading) {
	      return <Spinner size="large" />;
	    }

	    return (
	      <Button whenPress={this.onButtonPress.bind(this)}>
	        Login
	      </Button>
	    );
	  }

	  render() {
	    return (
	      <Card>
	        <Section>
	          <TextInputt
						label="البريد الإلكتروني"
	            placeholder="email@gmail.com"
	            onChangeText={this.onEmailChange.bind(this)}
	            value={this.props.email}
	          />
	        </Section>

	        <Section>
	          <TextInputt
	            secureTextEntry
							label="كلمة المرور"
	            placeholder="password"
	            onChangeText={this.onPasswordChange.bind(this)}
	            value={this.props.password}
	          />
	        </Section>

	        <Text style={styles.errorTextStyle}>
	          {this.props.error}
	        </Text>

	        <Section>
	          {this.renderButton()}
	        </Section>
	      </Card>
	    );
	  }
	}

	const styles = {
	  errorTextStyle: {
	    fontSize: 20,
	    alignSelf: 'center',
	    color: 'red'
	  }
	};

	const mapStateToProps = ({ auth }) => {
	  const { email, password, error, loading } = auth;

	  return { email, password, error, loading };
	};

	export default connect(mapStateToProps, {
	  emailChanged, passwordChanged, loginUser, RegisterUser
	})(Register);
