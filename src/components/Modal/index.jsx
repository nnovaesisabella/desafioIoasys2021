/* eslint-disable */

import React from 'react';
import { ModalContainer, MondalContent, ImgBook, Img, DescriptionBook, TitleBook, Author, Information, DetailsBook, ContentDescription, CloseButton, MdClear } from './styles';




export const Modal = ({ showModal, setShowModal, data }) => {
  return (
      <>

      {showModal ?
              <ModalContainer>
                  {data.map((item) => {
                      return (
                          <MondalContent showModal={showModal} key={data.id}>

                              <ImgBook >
                                  <Img src={item.imageUrl} alt={item.title} style={{width:200}}/>
                              </ImgBook>
                              <DescriptionBook>
                                  <ContentDescription>
                                      <TitleBook> {item.title}</TitleBook>
                                      <Author>{item.authors.map((item) => ` ${item},`) }</Author>
                                      <Information>
                                          <h5> INFORMAÇÕES </h5>
                                          <p> Páginas <span>{item.pageCount} </span></p>
                                          <p> Editora <span>{item.publisher}</span> </p>
                                          <p> Publicação <span>{item.published} </span> </p>
                                          <p> Idioma <span> {item.language}</span> </p>
                                          <p> Título Original <span>{item.title} </span></p>
                                          <p> ISBN-10 <span> {item.isbn10 }</span></p>
                                          <p> ISBN-12  <span>{item.isbn13}</span></p>
                                      </Information>
                                      <DetailsBook>
                                          <h3> RESENHA DA EDITORA </h3>
                                          <p>{item.description}</p>
                                      </DetailsBook>
                                  </ContentDescription>
                              </DescriptionBook>
                          </MondalContent>
                      )
                  })}
          <CloseButton type="submit" onClick={() => setShowModal(prev => !prev)} >  </CloseButton>

        </ModalContainer> : null}

    </>
  )
}


