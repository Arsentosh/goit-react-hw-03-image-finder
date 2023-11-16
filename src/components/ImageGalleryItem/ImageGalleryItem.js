import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  ImageGalleryImage,
  ImageGalleryItemLi,
} from './ImageGalleryItem.style';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ImageGalleryItemLi key={id}>
        <ImageGalleryImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <ModalWindow
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
            isOpen={isModalOpen}
          />
        )}
      </ImageGalleryItemLi>
    );
  }
}
