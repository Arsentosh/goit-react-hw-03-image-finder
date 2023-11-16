import { Component } from 'react';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import {
  SearchBarHeader,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.style';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please fill the field!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FcSearch size="20px" />
          </SearchButton>
          <SearchInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
