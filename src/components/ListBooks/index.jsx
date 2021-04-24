
import React, { useEffect, useState } from "react";
import Api from "../../services/Api";
import { Modal } from "../Modal";
import { Paginator } from "../Pagination";
import { Container } from "../../styles/GlobalStyled";
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



const renderBooks = (data, openModal) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <CardBook key={data.id} onClick={() => openModal(item.id)} >
                        <ImgBook>
                            <Img src={item.imageUrl} alt={item.title} />
                        </ImgBook>
                        <ContentDescription>
                            <Title> {item.title}</Title>
                            <AuthorBooks> {item.authors.map((item) => ` ${item},`)}</AuthorBooks>
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









export const ContentBooks = ({ user }) => {
    const [posts, setPosts] = useState([]); //Post do response.data

    const [showModal, setShowModal] = useState("");

    //State pagination

    const [currentPage, setCurrentPage] = useState(1); //pagina atual que vc está
    const [itemsPerPage] = useState(12); //cards por pagina

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const [dataModal, setDataModal] = useState([]);
    const [idModal, setIDmodal] = useState('');
    const pages = [];

    for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;



    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    console.log('aqui', currentItems);

    //Modal
    const openModal = async (id) => {

        await Api.get(`/books/${id}`, {
            headers: {
                Authorization: localStorage.getItem("auth"),
            }
        }).then(response => {
            setShowModal((prev) => !prev);
            setDataModal(response.data);
        });




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

    // loop que remove um item de um array 
    // 
    const arrPost = [];
    for (let i = 0; i < posts.length; i++) {

        if (i <= 24) {
            arrPost.push(posts[i]);
        }
    }

    return (
        <>

           
            <Container >
                <Modal item={dataModal} setDataModal={setDataModal} showModal={showModal} setShowModal={setShowModal} />
                <ContentBookList>

                    {renderBooks(currentItems, openModal)}

                </ContentBookList>

            </Container>
            <div style={{ position: "relative", bottom: 0 }}>
                <Paginator
                    posts={arrPost}
                    currentPage={currentPage}
                    pages={pages}
                    handlePrevBtn={handlePrevBtn}
                    handleNextBtn={handleNextBtn}
                /></div>

        </>
    );
};
ContentBooks.propTypes = {
    user: P.object
}
