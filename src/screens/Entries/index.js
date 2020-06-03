import React from 'react';
import {Container, CloseButton, CloseButtonTittle} from './styles';
import BalanceLabel from '../../components/BalanceLabel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';
import {PickerBox, Picker} from './styles';

const Entries = ({navigation}) => {
  return (
    <Container>
      <BalanceLabel />
      <PickerBox>
        <Picker>
          <Picker.Item label="Todas as categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" />
        </Picker>
      </PickerBox>
      <EntrySumary />
      <EntryList />
      <CloseButton onPress={() => navigation.goBack()}>
        <CloseButtonTittle>Fechar</CloseButtonTittle>
      </CloseButton>
    </Container>
  );
};

export default Entries;
