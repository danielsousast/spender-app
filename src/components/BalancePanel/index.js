import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Container, Label, Balance} from './styles';

export default function BalancePanel(props) {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <Balance>{props.balanceValue || 'R$ 0,00'}</Balance>
    </Container>
  );
}
