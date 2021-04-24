/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Api from "../../services/Api";
import { Modal } from "../Modal";
import { Paginator } from "../Pagination";
import P from 'prop-types'
import {
    ContentBookList,
    CardBook,
    ImgBook,
    PublishingBooks,
    Img,
    ContentDescription,
    Title,
    AuthorBooks,
    NumberPages,
    EditionBooks,
} from "./style";



const renderBooks = (data,openModal) => {
    return (
        <>
        {data.map((item, index) => {
        return (
          <CardBook key={data.id}  onClick={() => openModal(index)} >
            <ImgBook>
              <Img src={item.imageUrl} alt={item.title} />
            </ImgBook>
            <ContentDescription>
              <Title> {item.title}</Title>
              <AuthorBooks> {item.authors.map((item)=> ` ${item},`)}</AuthorBooks>
              <NumberPages> {item.pageCount} páginas</NumberPages>
              <EditionBooks> {item.publisher}</EditionBooks>
              <PublishingBooks>Publicado em {item.published}</PublishingBooks>
            </ContentDescription>
          </CardBook>
        );

        })};
         </>
         );
}









export const ContentBooks = ({user}) => {
    const [posts, setPosts] = useState([]); //Post do response.data

    const [showModal, setShowModal] = useState("");

    //State pagination

    const [currentPage, setCurrentPage] = useState(1); //pagina atual que vc está
    const [itemsPerPage] = useState(12); //cards por pagina

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const pages = [];

    for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
        pages.push(i);
    }

    console.log("====================================");
    console.log(posts);
    console.log("====================================");
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log('====================================');
    console.log("POSTS",posts);
    console.log('====================================');


    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    console.log('aqui',currentItems);

    //Modal
    const openModal = () => {
        setShowModal((prev) => !prev);

    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage + 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    useEffect(() => {
        Api.get("/books?page=1&amount=25&category=biographies", {
            headers: {
                Authorization: localStorage.getItem("auth"),
            },
        })
            .then((response) => {
                setPosts(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => console.log(error.message));

    }, []);

    return (
        <>
            <ContentBookList>

                {renderBooks(currentItems, openModal)}


                <Modal showModal={showModal} setShowModal={setShowModal} data={currentItems}/>
                <Paginator
                    posts={posts}
                    currentPage={currentPage}
                    pages={pages}
                    handlePrevBtn={handlePrevBtn}
                    handleNextBtn={handleNextBtn}
                />

            </ContentBookList>



        </>
    );
};
ContentBooks.propTypes={
    user:P.object
}
