import styled from 'styled-components';

/* IMPORT THE REACT COMPONENT TO BE STYLED */
import CustomButton from '../custom-button/custom-button.component';



export const CollectionItemContainer = styled.div` 

width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;


&:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
    }

`
export const CollectionImageContainer = styled.div`

width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;

`
export const CollectionFooterContainer = styled.div`

width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

.name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`
export const CustomButtonStyled = styled(CustomButton)`

width: 80%;
position: absolute;
top: 255px;
opacity: 0.7;
display: none;

`