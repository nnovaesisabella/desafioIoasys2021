/* eslint-disable */
import styled from 'styled-components';

export const ModalContainer = styled.div`

 width:100%;
 min-height:100vh;
 background: rgba(0, 0, 0, 0.8);
 position:absolute;
 top:0;
 left:0;
 display:flex;
 justify-content:center;
 align-items:center;
 text-align:center;
 background-size: cover;
 margin:auto;


@media (max-width:411px){
    
}

`;

export const MondalContent = styled.div`
   width: 700px;
   height: 428px;
   background: #ffffff;
   display:flex;
   position:relative;
   z-index:1;
   border-radius:10px;
   margin-left:auto;
 
 
   @media (max-width:1024px){
    height:auto;
    margin: auto;
    justify-content:cnter;
 }

 @media(max-width:812px){
 display:flex;
 flex-direction: column;
 width: 60%;
 justify-content: center;
 align-items: center;
 }


@media (max-width:411px){
     height:auto;

}

`;
export const ImgBook = styled.div`
   width:50%;
   height: 100%;
   justify-content:center;
   display: flex;
   align-items:center;
   padding:0 0.85rem;
   

`;
export const Img = styled.img`
  width:249;

  @media(max-width:812px){
  grid-template-columns: 1fr;
  width:50%;
  height: 80%;

 }

 @media (max-width: 411px){
   margin-top:15px;

  }

`;

export const DescriptionBook = styled.div`
  overflow: auto;
  width:100%;
  

  @media(max-width:812px){
    display:flex;
    flex-direction:column;
    width: 90%;
    justify-content:center;
    align-items: center;

 }

`;

export const ContentDescription = styled.div`
  width:306px;
  padding:0 1.5rem;


  @media (max-width: 411px){

      width:80%;
  }
`;

export const TitleBook = styled.h2`
  font-size:1.75rem;
  margin-top:48px;
  color: #333333;


`;
export const Author = styled.div`
 font-size: 0.75rem;
 color:#AB2680;
 font-weight:bold;


`;
export const Information = styled.div`
margin-top: 32px;

h5{
  font-weight:700;
  padding-bottom: 15px;
  font-size: 0.75rem;
}

p{
  display:flex;
  justify-content:space-between;
  font-weight:700;
  font-size: 0.75rem;
}

span{
  color: #999999;
  font-weight:600;
  font-size: 0.75rem;
}

`;
export const DetailsBook = styled.div`
  margin-top: 32px;
  padding-bottom:51px;


  h3{
    font-size: 0.75rem;
    padding-bottom:15px;
    font-weight: 800;
    color: #333333;
  }

img{
  padding-right:10px;
}

p{
  font-size: 0.75rem;
  color: #999999;
  font-weight:600;

}

`;


export const CloseButton = styled.button`
   cursor:pointer;
   position: absolute;
   width:32px;
   height:32px;
   border-radius:50%;
   z-index:999;
   top: 16px;
   right:17px;

   @media (max-width:1024px){
     right:100px;
 }


 @media (max-width: 411px){
   right: 50px;

}
 `;

export const MdClear = styled.img`
  height:12px;
  width:12px;
`;
