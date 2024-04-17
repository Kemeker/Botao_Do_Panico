// teste função GerenciamentoDeContatos()
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GerenciamentoDeContatos from '../../screens/GerenciamentoDeContatos';

// Mock de navigation prop fornecido pelo React Navigation
const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
    ...props,
  },
});

describe('GerenciamentoDeContatos', () => {
  const props = createTestProps({});
  
  // teste
  test('Botão Contatos deve chamar a função de navegação com o nome correto da tela gerenciamento de contatos', () => {
    const { getByText } = render(<GerenciamentoDeContatos {...props} />);
    fireEvent.press(getByText('Contatos')); // Este texto precisa ser o mesmo que está no botão
    expect(props.navigation.navigate).toHaveBeenCalledWith('GerenciamentoDeContatos'); // Este nome precisa ser o nome da rota exata
  });
});




