import {StyleSheet} from 'react-native';
export const globalStyles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  resultado: {
    fontSize: 40,
    color: 'white',
    textAlign: 'right',
  },
  resultadoAnterior: {
    fontSize: 30,
    color: 'white',
    textAlign: 'right',
  },

  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 5,
  },
});
