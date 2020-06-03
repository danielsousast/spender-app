import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 20px 15px;
  background-color: ${Colors.dark};
  border-radius: 4px;
  margin: 10px 15px;
  align-self: center;
  width: 95%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.white};
  margin-bottom: 10px;
`;

export const List = styled.FlatList``;

export const Content = styled.View`
  flex-direction: row;
`;

export const Chart = styled.View``;

export const ItemListLabel = styled.Text`
  margin-right: 10px;
  color: ${Colors.white};
`;

export const ItemListValue = styled.Text``;

export const Botton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonBotton = styled.TouchableOpacity``;

export const Label = styled.Text`
  color: ${Colors.light};
`;
