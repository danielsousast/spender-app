import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 20px 15px;
  background-color: ${Colors.white};
  border-radius: 4px;
  margin: 10px 15px;
  align-self: center;
  width: 95%;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.dark};
  margin-bottom: 10px;
`;

export const List = styled.FlatList``;

export const Content = styled.View`
  flex-direction: row;
`;

export const Chart = styled.View``;

export const ItemListLabel = styled.Text`
  margin-right: 10px;
  color: ${Colors.dark};
`;

export const ItemListValue = styled.Text``;

export const Botton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ButtonBotton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${Colors.asphaltDark};
  margin-left: 5px;
`;
