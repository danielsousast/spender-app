import React, {useEffect, useState} from 'react';
import {
  Container,
  Title,
  List,
  ItemListLabel,
  Botton,
  Label,
  ButtonBotton,
  ItemList,
  EditButton,
  EditButtonTittle,
} from './styles';
import {getEntries} from '../../services/Entries';

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
          <ItemList>
            <ItemListLabel>{String(item.amount)}</ItemListLabel>
            <EditButton onPress={() => props.editAction(item)}>
              <EditButtonTittle>Edit</EditButtonTittle>
            </EditButton>
          </ItemList>
        )}
        keyExtractor={(item) => item.id}
      />
      <Botton>
        <Label>Ultimos 7 dias</Label>
        <ButtonBotton>
          <Label>Ver mais</Label>
        </ButtonBotton>
      </Botton>
    </Container>
  );
}
