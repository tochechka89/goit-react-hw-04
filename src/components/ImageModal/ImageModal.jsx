
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement("#root"); 

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button onClick={onRequestClose} className={css.btn}>×</button>
      <img src={imageUrl} className={css.img} alt="Modal Content" />
    </Modal>
  );
}
