import React, {useState, useEffect} from 'react';
import {
  Container,
  Input,
  ButtonsBox,
  ButtonCircle,
  AddButton,
  AddButtonTittle,
  CancelButton,
  CancelButtonTittle,
  InputBox,
} from './styles';
import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry, removeEntry} from '../../services/Entries';

export default function NewEntry({navigation, route}) {
  const entry = route.params
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        entryAt: new Date(),
      };

  const [balanceValue, setBalanceValue] = useState(200.0);
  const [amount, setAmount] = useState(`${entry.amount}`);

  function isValid() {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  }

  function handleSave() {
    const data = {
      amount: parseFloat(amount),
    };
    saveEntry(data, entry);
    goBack();
  }

  function handleRemove() {
    removeEntry(entry);
    goBack();
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BalanceLabel balanceValue={balanceValue} />

      <InputBox>
        <Input value={amount} onChangeText={(e) => setAmount(e)} />
        <Input />
      </InputBox>
      <ButtonsBox>
        <ButtonCircle />
        <ButtonCircle />
        <ButtonCircle />
      </ButtonsBox>
      <ButtonsBox>
        <AddButton onPress={handleSave}>
          <AddButtonTittle>Adicionar</AddButtonTittle>
        </AddButton>
        <CancelButton onPress={goBack}>
          <CancelButtonTittle>Cancelar</CancelButtonTittle>
        </CancelButton>
      </ButtonsBox>
    </Container>
  );
}
