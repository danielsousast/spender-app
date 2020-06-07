import React, {useEffect, useState} from 'react';
import {
  Container,
  Content,
  List,
  CloseButton,
  CloseButtonTitle,
  CategoryTouch,
  CategoryName,
} from './styles';
import {
  getAllCategories,
  getDebitCategories,
  getCreditCategories,
} from '../../services/Categories';

export default function CategoryModal(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function loadCategories() {
      let data = null;
      if (props.isDebit) {
        data = await getDebitCategories();
      } else {
        data = await getCreditCategories();
      }
      console.log(props.isDebit);

      setCategories(data);
    }

    loadCategories();
  }, [props.isDebit]);

  function closeModal() {
    props.closeModal();
    //setCategories([]);
  }

  return (
    <Container
      visible={props.visible}
      animationType="slide"
      transparent={false}>
      <Content>
        <List
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CategoryTouch onPress={() => props.onCategoryPress(item)}>
              <CategoryName color={item.color}>{item.name}</CategoryName>
            </CategoryTouch>
          )}
        />
      </Content>
      <CloseButton onPress={closeModal}>
        <CloseButtonTitle>Fechar</CloseButtonTitle>
      </CloseButton>
    </Container>
  );
}
