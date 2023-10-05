import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchSearchDataApi} from '../../../services/api';
import './Search.styles.css';
export const SearchComponent = () => {
  const [, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetchSearchDataApi(searchQuery);
      setSearchResult(response?.data?.articles);

      const category = {
        title: `Search Results found - ${searchQuery}`,
        data: response?.data?.articles,
      };
      navigate('/detail/search', {state: {category}});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='search-form'>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
