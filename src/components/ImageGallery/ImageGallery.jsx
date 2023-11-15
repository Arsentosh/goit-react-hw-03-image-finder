import { Component } from 'react';
import s from './ImageGallery.module.css';
import getImages from '../../services/imgApi';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export default class ImageGallery extends Component {
  state = {
    images: [],
    totalHits: 0,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.props;

    if (prevProps.inputValue !== inputValue || prevProps.page !== page) {
      this.fetchLoad();
    }
  }

  fetchLoad = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalHits: response.totalHits,
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  render() {
    const { images, status, totalHits } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    return (
      <>
        <ul className={s.gallery}>
          {images.map(({ id, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              url={largeImageURL}
              tags={tags}
              onClick={this.props.onClick}
            />
          ))}
        </ul>
        {images.length < totalHits && (
          <Button onClick={this.props.loadMoreBtn} />
        )}
        {images.length === 0 && <p>No results found</p>}
      </>
    );
  }
}
