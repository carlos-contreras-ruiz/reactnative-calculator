import {useRef, useState} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [resultado, setResultado] = useState('100');
  const [numeroAnt, setNumeroAnt] = useState('');
  //No renderiza de nuevo la aplicacion
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumeroAnt('0');
    setResultado('0');
  };

  const armarNumero = (numeroTxt: string) => {
    //no aceptar doble punto
    if (resultado.includes('.') && numeroTxt === '.') return;

    if (resultado.startsWith('0') || resultado.startsWith('-0')) {
      if (numeroTxt === '.') {
        setResultado(resultado + numeroTxt);
      } else if (numeroTxt === '0' && numeroTxt.includes('.')) {
        setResultado(resultado + numeroTxt);
      } else if (numeroTxt !== '0' && !numeroTxt.includes('.')) {
        setResultado(numeroTxt);
      } else {
        setResultado(numeroTxt);
      }
    } else {
      setResultado(resultado + numeroTxt);
    }
  };

  const cambiarResToAnterior = () => {
    if (resultado.endsWith('.')) {
      setNumeroAnt(resultado.slice(0, -1));
    } else {
      setNumeroAnt(resultado);
    }

    setResultado('0');
  };

  const btnDividir = () => {
    cambiarResToAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarResToAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    cambiarResToAnterior();
    ultimaOperacion.current = Operadores.suma;
  };
  const btnRestar = () => {
    cambiarResToAnterior();
    ultimaOperacion.current = Operadores.resta;
  };

  const calcular = () => {
    const num1 = Number(resultado);
    const num2 = Number(numeroAnt);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setResultado(`${num1 + num2}`);
        break;
      case Operadores.resta:
        setResultado(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setResultado(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setResultado(`${num2 / num1}`);
        break;

      default:
        break;
    }
    setNumeroAnt('0');
  };

  const positivoNegativo = () => {
    if (resultado.includes('-')) {
      setResultado(resultado.replace('-', ''));
    } else {
      setResultado('-' + resultado);
    }
  };

  return {
    numeroAnt,
    resultado,
    limpiar,
    positivoNegativo,
    armarNumero,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular,
  };
};
