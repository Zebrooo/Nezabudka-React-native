import { StyleSheet } from 'react-native';

const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  title: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 20,
    marginHorizontal: '20%',
    width: '60%',
    borderColor: 'black',
    borderRadius: 5,
  },
  btn: {
    borderWidth: 1,
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'green',
    backgroundColor: 'rgba(0, 249, 166, 1)',
    borderRadius: 25,
    shadowColor: 'rgba(0, 0, 255, .2)',
  },
  gText: {
    fontSize: 18,
  },
});

export default gStyle;
