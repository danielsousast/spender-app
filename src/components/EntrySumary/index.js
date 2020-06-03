import React from 'react';
import {
  Container,
  Title,
  Content,
  Chart,
  List,
  ItemListLabel,
  Botton,
  ButtonBotton,
  Label,
} from './styles';

const list = ['alimentação', 'alugel', 'Academia'];

export default function EntrySumary(props) {
  return (
    <Container>
      <Title>Entradas</Title>
      <Content>
        <Chart />
        <List
          data={list}
          renderItem={({item, index}) => (
            <ItemListLabel>alimentação 50</ItemListLabel>
          )}
        />
      </Content>
      <Botton>
        <Label>Ultimos 7 dias</Label>
        <ButtonBotton onPress={props.onPress}>
          <Label>Ver mais</Label>
        </ButtonBotton>
      </Botton>
    </Container>
  );
}
