import React, {useEffect, useState} from 'react';
import {Container, CloseButton, CloseButtonTittle} from './styles';
import EntrySumary from '../../components/EntrySumary';
import EntryList from '../../components/EntryList';
import {PickerBox, Picker} from './styles';
import {getAllCategories} from '../../services/Categories';

const Report = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await getAllCategories();

      setCategories(data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <PickerBox>
        <Picker>
          <Picker.Item label="Todas as categorias" />
          {categories &&
            categories.map((item, index) => (
              <Picker.Item key={index} label={item.name} />
            ))}
        </Picker>
        <Picker>
          <Picker.Item label="Ultimos 7 dias" />
        </Picker>
      </PickerBox>
      <EntrySumary />
      <EntryList />
    </Container>
  );
};

export default Report;
