import React from 'react';

import {
    Container,
    Header,
    Title,
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: string;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory,
} : Props ) {
    return(
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
        </Container>
    );
};
