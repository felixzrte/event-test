import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, icons, images, SIZES} from '../constants';
import {CustomButton, CustomInput, McText} from '../components';
import {Formik} from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
  StyledContainer,
  Logo,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  ButtonText,
  StyledButton,
  StyledInputLabel,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from '../constants/styles';
import {StatusBar} from 'expo-status-bar';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const {height} = useWindowDimensions();

  return (
    <ScrollView>
      <StatusBar style="dark" />

      <StyledContainer>
        <Logo
          style={{height: height * 0.35}}
          resizeMode="cover"
          source={images.mcc}
        />
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="example@gmail.com"
                placeholderTextColor={COLORS.gray}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * * *"
                placeholderTextColor={COLORS.gray}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Don't Have An Account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Register</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </StyledContainer>
    </ScrollView>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={COLORS.blue} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={COLORS.gray}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
