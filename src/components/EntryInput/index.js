import React, {useState} from 'react';
import {Container, Input, UnitButton, UnitButtonTitle} from './styles';

export default function EntryInput(props) {
  return (
    <Container>
      <UnitButton>
        <>
          <UnitButtonTitle>R$</UnitButtonTitle>
        </>
      </UnitButton>
      <Input
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={props.value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => props.onChangeText(rawValue)}
      />
    </Container>
  );
}
