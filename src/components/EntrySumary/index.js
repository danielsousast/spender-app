import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
import Colors from '../../styles/Colors';

const list = ['alimentação', 'alugel', 'Academia'];

export default function EntrySumary(props) {
  return (
    <Container>
      <Title>Entradas</Title>
      <Content>
        <Chart />
        <List
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => (
            <ItemListLabel>alimentação 50</ItemListLabel>
          )}
        />
      </Content>
      <Botton>
        <Label>Ultimos 7 dias</Label>
        <ButtonBotton onPress={props.onPress}>
          <Icon name="insert-chart" color={Colors.metalDark} size={20} />
          <Label>Ver mais</Label>
        </ButtonBotton>
      </Botton>
    </Container>
  );
}
