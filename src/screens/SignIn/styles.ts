import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  img: {
    flex: 1,
    // width: '100%',
    resizeMode: 'contain',
    // transform: [{ scale: 0.55 }]
  },
  content: {
    width: 320,
    height: 370,
    alignSelf: 'center',
    justifyContent: "space-around",
    backgroundColor: '#FAF5FF',
    borderRadius: 10,
    marginTop: 230
  },
  input: {
    marginBottom: 60
  },
  textInput: {
    marginLeft: 20,
    color: '#383e71',
    fontSize: 12,
    marginBottom: 1
  },
  contentText: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  firstText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#383E71',
    alignItems: 'center',
    textAlign: 'center'
  },
  secondText: {
    color: '#989FDB',
    fontWeight: '700',
    marginTop: 10
  },
  footerText: {
    marginTop: 15,
    color: '#fff',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

export default styles;