import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculadoraContainer}>
      <Text style={globalStyles.resultadoAnterior}>500</Text>
      <Text style={globalStyles.resultado}>1500</Text>

      <View>
        <View style={globalStyles.boton}>
          <Text style={globalStyles.botonTexto}>1</Text>
        </View>
      </View>
    </View>
  );
};
