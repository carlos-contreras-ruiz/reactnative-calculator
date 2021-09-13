/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  btnDoble?: boolean;
  action: (numeroTexto: string) => void;
}
export const BotonCalc = ({
  text,
  color = '#2D2D2D',
  btnDoble = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...globalStyles.boton,
          backgroundColor: color,
          width: btnDoble ? 180 : 80,
        }}>
        <Text
          style={{
            ...globalStyles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
