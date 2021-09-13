import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculatorScreen = () => {
  const {
    numeroAnt,
    resultado,
    limpiar,
    positivoNegativo,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    armarNumero,
    calcular,
  } = useCalculadora();

  return (
    <View style={globalStyles.calculadoraContainer}>
      {numeroAnt !== '0' && (
        <Text style={globalStyles.resultadoAnterior}>{numeroAnt}</Text>
      )}

      <Text
        style={globalStyles.resultado}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {resultado}
      </Text>

      <View style={globalStyles.row}>
        <BotonCalc text="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="/" color="#FF9427" action={btnDividir} />
      </View>

      <View style={globalStyles.row}>
        <BotonCalc text="7" action={armarNumero} />
        <BotonCalc text="8" action={armarNumero} />
        <BotonCalc text="9" action={armarNumero} />
        <BotonCalc text="X" color="#FF9427" action={btnMultiplicar} />
      </View>

      <View style={globalStyles.row}>
        <BotonCalc text="4" action={armarNumero} />
        <BotonCalc text="5" action={armarNumero} />
        <BotonCalc text="6" action={armarNumero} />
        <BotonCalc text="-" color="#FF9427" action={btnRestar} />
      </View>

      <View style={globalStyles.row}>
        <BotonCalc text="1" action={armarNumero} />
        <BotonCalc text="2" action={armarNumero} />
        <BotonCalc text="3" action={armarNumero} />
        <BotonCalc text="+" color="#FF9427" action={btnSumar} />
      </View>

      <View style={globalStyles.row}>
        <BotonCalc text="0" btnDoble action={armarNumero} />
        <BotonCalc text="." action={armarNumero} />
        <BotonCalc text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
