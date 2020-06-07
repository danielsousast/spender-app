import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {updateEntry} from '../../services/Entries';
import EntryInput from '../../components/EntryInput';
import CategoryModal from '../../components/CategoryModal';

import {
  Container,
  Content,
  ButtonsBox,
  ButtonCircle,
  AddButton,
  AddButtonTittle,
  CancelButton,
  CancelButtonTittle,
  InputBox,
  CategoryButton,
  CategoryButtonTitle,
  HeaderMenu,
  MenuItem,
  MenuItemLabel,
} from './styles';

export default function EditEntry({navigation, route}) {
  const entry = route.params && route.params.entry;
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActivetab] = useState(entry.amount < 0 && 1);

  function isValid() {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  }

  function handleSave() {
    let amountData = activeTab === 1 ? amount * -1 : amount;
    const data = {
      amount: amountData,
      category,
    };
    updateEntry(data);
    goBack();
  }

  function goBack() {
    navigation.goBack();
  }

  function changeCategory(param) {
    setCategory(param);
    setModalVisible(false);
  }

  return (
    <Container>
      <HeaderMenu>
        <MenuItem active={activeTab} onPress={() => setActivetab(1)}>
          <MenuItemLabel boldText={activeTab === 1 ? 'bold' : 'normal'}>
            Despesa
          </MenuItemLabel>
        </MenuItem>
        <MenuItem active={activeTab} onPress={() => setActivetab(2)}>
          <MenuItemLabel boldText={activeTab === 2 ? 'bold' : 'normal'}>
            Receita
          </MenuItemLabel>
        </MenuItem>
      </HeaderMenu>
      <Content>
        <InputBox>
          <EntryInput value={amount} onChangeText={(e) => setAmount(e)} />
          <CategoryButton onPress={() => setModalVisible(true)}>
            <CategoryButtonTitle>
              {category.name || 'Categoria'}
            </CategoryButtonTitle>
          </CategoryButton>
        </InputBox>
        <ButtonsBox>
          <ButtonCircle>
            <Icon name="enviromento" color="#151515" size={32} />
          </ButtonCircle>
          <ButtonCircle>
            <Icon name="camerao" color="#151515" size={32} />
          </ButtonCircle>
        </ButtonsBox>
        <ButtonsBox>
          <AddButton onPress={handleSave} active={activeTab}>
            <AddButtonTittle>Salvar</AddButtonTittle>
          </AddButton>
          <CancelButton onPress={goBack}>
            <CancelButtonTittle active={activeTab}>Cancelar</CancelButtonTittle>
          </CancelButton>
        </ButtonsBox>
      </Content>

      <CategoryModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onCategoryPress={changeCategory}
        isDebit={activeTab === 1}
      />
    </Container>
  );
}
