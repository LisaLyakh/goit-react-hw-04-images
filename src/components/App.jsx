import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import getApiResult from '../service/apiService';
import { toast } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Container from './App.styled';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getFetch() {
      try {
        setLoading(true);
        const updatedImages = await getApiResult(searchQuery, page);
        if (updatedImages.length === 0) {
          toast('No results');
          setLoading(false);
          return;
        }
        setImages(prevImages => [...prevImages, ...updatedImages]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getFetch();
  }, [searchQuery, page]);

  const onSubmit = newQuery => {
    if (searchQuery === newQuery || newQuery.trim() === '') {
      toast('can`t be empty');
      return;
    }
    setSearchQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length !== 0 && !loading && (
        <Button loadMore={() => setPage(prevPage => prevPage + 1)} />
      )}
      {loading && <Loader />}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
