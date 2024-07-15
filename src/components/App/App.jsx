import { useEffect, useState } from "react";
import { searchImage } from "../../gallery-api";

import css from './App.module.css';

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";



export default function App() {
  const [galleryArray, setGalleryArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [img, setImg] = useState('');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("")

  const handleSearch = async (newImg) => {
    if (newImg === img) {
      return;
    }

    setTotalPages(0);
    setGalleryArray([]);
    setImg(newImg);
    setPage(1);
  };

  const openModal = (imageUrl) => {
    setSelectedImg(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (img === '') {
      return;
    }

    async function getGalleryApi() {
      try {
        setLoader(true);
        setError(false);

        const data = await searchImage(img, page);

        setTotalPages(data.total_pages);
        setGalleryArray((prevGallery) => {
          return [...prevGallery, ...data.results];
        });
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    }
    getGalleryApi();
  }, [img, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      <main className={css.container}>
        {error ? (
          <ErrorMessage />
        ) : (
          <ImageGallery gallery={galleryArray} onImageClick={openModal} />
        )}
        {totalPages > 1 && page < totalPages && (
          <LoadMoreBtn page={page} onClickMore={setPage} />
        )}
        <Loader loader={loader} />
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImg}
        />
      </main>
    </div>
  );
}

