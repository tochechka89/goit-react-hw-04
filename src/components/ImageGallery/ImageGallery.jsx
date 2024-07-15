import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({ gallery, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {gallery.map((item) => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard item={item} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}