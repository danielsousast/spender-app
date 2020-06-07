import React from 'react';
import {Container, Label, Balance, BalanceBox} from './styles';

export default function BalanceLabel(props) {
  return (
    <Container>
      <Label>Saldo atual</Label>
      <BalanceBox>
        <Balance>R$ {props.balanceValue || '0'}</Balance>
      </BalanceBox>
    </Container>
  );
}
