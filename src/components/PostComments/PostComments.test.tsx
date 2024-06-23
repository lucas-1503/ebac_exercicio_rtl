import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve permitir a inserção de dois comentários', () => {
        render(<Post />);
    
        const inputElement = screen.getByTestId('comment-input');
        const buttonElement = screen.getByTestId('add-comment-button');
    
        // Inserir o primeiro comentário
        fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(buttonElement);
    
        // Inserir o segundo comentário
        fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } });
        fireEvent.click(buttonElement);
    
        // Verificar se os comentários foram adicionados
        const commentList = screen.getByTestId('comment-list');
        expect(commentList.children.length).toBe(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        });
    });