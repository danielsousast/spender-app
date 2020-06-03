import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 15px;
  background-color: #ccc;
  border-radius: 4px;
  margin: 5px 15px 0 15px;
  align-self: center;
  width: 95%;
  background-color: ${Colors.dark};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const List = styled.FlatList``;

export const ItemList = styled.View`
  flex-direction: row;
`;

export const ItemListLabel = styled.Text`
  margin-right: 10px;
  color: #fff;
`;

export const EditButton = styled.TouchableOpacity``;

export const EditButtonTittle = styled.Text``;

export const Botton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonBotton = styled.TouchableOpacity``;

export const Label = styled.Text`
  color: ${Colors.light};
`;
