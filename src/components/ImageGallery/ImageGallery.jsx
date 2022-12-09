import 'react-toastify/dist/ReactToastify.css';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import GalleryList from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <>
      <GalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <GalleyItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </GalleryList>
    </>
  );
}
