import React from 'react';
import {Container, Label, Balance} from './styles';

export default function BalanceLabel(props) {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <Balance>R$ {props.balanceValue || '0'}</Balance>
    </Container>
  );
}
