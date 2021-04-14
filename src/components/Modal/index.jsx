/* eslint-disable */

import React from 'react';
import { ModalContainer, MondalContent, ImgBook, Img ,DescriptionBook, TitleBook, Author, Information, DetailsBook, ContentDescription, CloseButton, MdClear } from './styles';
import Aspas from '../../assets/images/aspas.png';
import Book from '../../assets/images/Book.png';
import Clear from '../../assets/images/cancel.svg';




export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ?
        <ModalContainer>
          <MondalContent showModal={showModal}>

            <ImgBook >
              <Img src={Book}/>
            </ImgBook>
            <DescriptionBook>
              <ContentDescription>
                <TitleBook> Change By Design
                  Second line exampl...</TitleBook>
                <Author> Ti, Julie Zhuo, Fried Maximiilian</Author>
                <Information>
                  <h5> INFORMAÇÕES </h5>
                  <p> Páginas <span> 304 páginas </span></p>
                  <p> Editora <span> Editora Loyola</span> </p>
                  <p> Publicação <span> 2020 </span> </p>
                  <p> Idioma <span> Inglês</span> </p>
                  <p> Título Original <span>  Change By Design</span></p>
                  <p> ISBN-10 <span> 0062856626 </span></p>
                  <p> ISBN-12  <span> 978-0062856623</span></p>
                </Information>
                <DetailsBook>
                  <h3> RESENHA DA EDITORA </h3>
                  <p>  <img src={Aspas} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum </p>
                </DetailsBook>
              </ContentDescription>
            </DescriptionBook>
          </MondalContent>
          <CloseButton type="submit" onClick={() => setShowModal(prev => !prev)} > <MdClear src={Clear}/> </CloseButton>

        </ModalContainer> : null}

    </>
  )
}


