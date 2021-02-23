import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState, onSignIn } from '../../redux';
import { Button, Input } from '../../components'
import styles from './styles'

const img = '../../img/background.png'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const { user, error } = useSelector(
    (state: ApplicationState) => state.userReducer
  );

  const { id } = user

  useEffect(() => {
    if(id !== undefined) {
      Alert.alert('Logado com sucesso!')
    }
  }, [user])

  const onPressSignIn = () => {
    dispatch(onSignIn(email, password));
  };



  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require(img)}
          style={styles.img}
        >
        <LinearGradient colors={['rgba(105, 57, 153, 0)', '#693999', '#000']} style={styles.linearGradient}>
          <View style={styles.content}>
            <View style={styles.contentText}>
              <Text style={styles.firstText}>Olá, seja {'\n'}bem-vindo!</Text>
              <Text style={styles.secondText}>Para acessar a plataforma, faça seu login.</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.textInput}>E-MAIL</Text>
              <Input
                placeholder='user.name@mail.com'
                onChangeText={setEmail}
               />
              <Text style={styles.textInput}>SENHA</Text>
              <Input
                placeholder='******'
                onChangeText={setPassword}
               />
            </View>
          </View>
          <Button
            onPress={onPressSignIn}
            title="ENTRAR"
          />
          <Text style={styles.footerText}>Esqueceu seu login ou senha?</Text>
          <TouchableOpacity>
            <Text style={styles.footerText}>Clique aqui</Text>
          </TouchableOpacity>
        </LinearGradient>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default SignIn;
