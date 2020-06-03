import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Container, AddButton} from './styles';
import BalancePanel from '../../components/BalancePanel';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';

function Home({navigation}) {
  function handleEdit(item) {
    navigation.navigate('newentry', {entry: item});
  }

  return (
    <Container>
      <BalancePanel />
      <EntrySumary onPress={() => navigation.navigate('entries')} />
      <EntryList editAction={handleEdit} />
      <AddButton onPress={() => navigation.navigate('newentry')}>
        <Icon name="plus" size={26} color="#fff" />
      </AddButton>
    </Container>
  );
}

export default Home;
