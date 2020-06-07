import React from 'react';
import {Container} from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

function Home({navigation}) {
  function handleEdit(item) {
    navigation.navigate('editentry', {entry: item});
  }

  return (
    <Container>
      <BalancePanel />
      <EntrySumary onPress={() => navigation.navigate('report')} />
      <EntryList onEntryPress={handleEdit} />
    </Container>
  );
}

export default Home;
