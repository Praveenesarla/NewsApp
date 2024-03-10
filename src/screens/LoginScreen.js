import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '293738362598-hhublhp0h2b1e3fbokj880gek2tru1ab.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken, user} = await GoogleSignin.signIn();
      console.log(user);
      navigation.navigate('Tab');
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('Auth', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithEmailAndPassword = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        let uid = res.user.uid;
        storeUser(uid);
        Alert.alert('Success : Logged-In');
        // navigation.navigate('Tab');
      })
      .catch(err => {
        console.log(err);
        Alert.alert(err.nativeErrorMessage);
      });
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flex: 1,
      }}>
      <Text style={styles.SignText}>SignIn</Text>
      <Text style={styles.TermNtext}>
        By continuing, you agree to our Terms of Services and Private Policy.
      </Text>
      <View style={styles.textbox}>
        <Text style={styles.textboxLabel}>Email</Text>
        <TextInput
          value={email}
          style={styles.textboxInput}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <View style={[styles.textbox, {top: 280}]}>
        <Text style={styles.textboxLabel}>Password</Text>
        <TextInput
          style={styles.textboxInput}
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </View>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text
          style={{
            top: 347,
            position: 'absolute',
            left: 250,
            color: 'blue',
          }}>
          Create an account!!
        </Text>
      </Pressable>
      <Pressable onPress={loginWithEmailAndPassword}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </Pressable>

      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={[styles.line, {left: 221}]} />
      <Pressable onPress={onGoogleButtonPress}>
        <View
          style={[
            styles.button,
            {top: 501, flexDirection: 'row', backgroundColor: '#FDF2F2FF'},
          ]}>
          <Icon size={25} name="google" color={'#DE3B40FF'} />
          <Text
            style={[styles.buttonText, {color: '#DE3B40FF', marginLeft: 12}]}>
            Continue with Google
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  SignText: {
    textAlign: 'center',
    position: 'absolute',
    top: 76,
    left: 175,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    color: '#171A1FFF',
  },
  TermNtext: {
    textAlign: 'center',
    position: 'absolute',
    top: 124,
    left: 30,
    width: 350,
    height: 40,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#9095A0FF',
  },
  /* Textbox 1 */
  textbox: {
    position: 'absolute',
    top: 212,
    left: 20,
    opacity: 1,
  },
  textboxInput: {
    color: 'black',
    width: 350,
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9095A0FF' /* neutral-500 */,
  },
  textboxLabel: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    color: 'black',
  },
  /* Button 5 */
  button: {
    backgroundColor: '#EE6D33FF',
    position: 'absolute',
    top: 363,
    left: 20,
    width: 350,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    borderRadius: 4 /* border-m */,
    borderWidth: 1,
    borderColor: '#EE6D33FF',
    borderStyle: 'solid',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: 'white',
    //   font-family: Poppins;
  },
  /* Line 1 */
  line: {
    position: 'absolute',
    top: 454,
    left: 20,
    width: 149,
    height: 0,
    borderWidth: 1,
    borderColor: '#DEE1E6FF' /* neutral-300 */,
    borderStyle: 'solid',
  },
  orText: {
    position: 'absolute',
    top: 443,
    left: 186,
    //   font-family: Poppins; /* Body */
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 22,
    color: '#9095A0FF' /* neutral-500 */,
  },
});
