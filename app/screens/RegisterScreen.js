import React from 'react';
import { AppForm } from '../components/forms';

function RegisterScreen(props) {
    return (
        <Screen>
            <AppForm>
                <AppFormField
                    autoCapitalize='always'
                    autoCorrect={false}
                    icon="email"
                    name='name'
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name='email'
                    placeholder="email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

export default RegisterScreen;