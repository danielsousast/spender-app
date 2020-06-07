import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  List,
  ItemListLabel,
  Botton,
  Label,
  ButtonBotton,
  ItemList,
  PointBox,
  ItemListBox,
  ItemListValueBox,
  ItemListValue,
  ItemListBotton,
  ItemListBottonLabel,
} from './styles';
import {getEntries} from '../../services/Entries';
import Colors from '../../styles/Colors';

export default function SumaryList(props) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();

      setEntries(data);
    }

    loadEntries();
  }, []);

  return (
    <Container>
      <Title>Ultimos lançamentos</Title>
      <List
        data={entries}
        renderItem={({item}) => (
          <ItemList
            activeOpacity={0.6}
            onPress={() => props.onEntryPress(item)}>
            <PointBox>
              <Icon name="history" size={20} />
            </PointBox>
            <ItemListBox>
              <ItemListLabel> Padaria Super pão </ItemListLabel>
              <ItemListBotton>
                <Icon name="access-time" color={Colors.metal} />
                <ItemListBottonLabel>Dia 12</ItemListBottonLabel>
                <Icon name="person-pin" color={Colors.metal} />
                <ItemListBottonLabel>Localização</ItemListBottonLabel>
              </ItemListBotton>
            </ItemListBox>
            <ItemListValueBox>
              <ItemListValue>R$ {String(item.amount)}</ItemListValue>
            </ItemListValueBox>
          </ItemList>
        )}
        keyExtractor={(item) => item.id}
      />
      <Botton>
        <Label>Ultimos 7 dias</Label>
        <ButtonBotton>
          <Icon name="insert-chart" color={Colors.metalDark} size={20} />
          <Label>Ver mais</Label>
        </ButtonBotton>
      </Botton>
    </Container>
  );
}
