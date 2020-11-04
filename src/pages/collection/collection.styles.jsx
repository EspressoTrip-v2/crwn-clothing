import styled from 'styled-components';

/* REACT COMPONENTS */
import CollectionItem from '../../components/collection-item/colllection-item.component';

export const CollectionPageContainer = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.h2`
font-size: 38px;
margin: 0 auto 30px;`

export const ItemsContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;`

export const CollectionItemStyled = styled(CollectionItem)`
margin-bottom: 30px;`
