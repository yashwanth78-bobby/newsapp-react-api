import {default as React, useContext, useEffect, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import {filterAndSliceArticles} from '../../../utils/filterAndSliceArticles/filterAndSliceArticles';
import {timeElapsedSince} from '../../../utils/timeElapsed/timeElapsed';
import CategoryHeader from '../../atoms/CategoryHeader/Header';
import Loader from '../../atoms/Loader/Loader';
import Card from '../../molecules/Card/Card';
import CategoryComponent from '../../molecules/Category/Category';
import HeaderNavigationMenu from '../../organisms/Navigation/HeaderNavigationMenu';
import {NewsAppContext} from '../../organisms/context/NewsAppContext';
import './Home.styles.css';

const HomeComponent: React.FC = () => {
  const navigate = useNavigate();
  const {
    businessState,
    setBusinessState,
    entertainmentState,
    setEntertainmentState,
    healthState,
    setHealthState,
    scienceState,
    setScienceState,
    sportsState,
    setSportsState,
    technologyState,
    setTechnologyState,
    // fetchSearchData,
    // queryState,
    // searchQuery,
    // searchResult,
  }: any = useContext(NewsAppContext);

  const initialState = {
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
    loading: true,
    error: null,
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...state,
          [action.category]: action.articles,
          loading: false,
          error: null,
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const API_KEY = 'f463419c4e4c4ebd96549c95688e979b';
  // const key0 = 'f7b752bd9b9643719d2c31079822f9d8'; // tan
  // const key1 = '6e256f9c5c604636a85c33f828af7b7e'; //dav
  // const key2 = '4cc2340375884cc5abde119594fbb772'; //aim
  // const key3 = 'be0cebd1f6e64786a22b1450f3d122a9';
  // const key4 = '2d55f494fe674381af5e990d5d995b6e';
  // const key5 = 'ac009e2e2d1b4cc3a6ec7087c51a73af';
  const fetchArticles = async (category: any) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      switch (category) {
        case 'business':
          setBusinessState(data.articles);
          break;
        case 'entertainment':
          setEntertainmentState(data.articles);
          break;
        case 'health':
          setHealthState(data.articles);
          break;
        case 'science':
          setScienceState(data.articles);
          break;
        case 'sports':
          setSportsState(data.articles);
          break;
        case 'technology':
          setTechnologyState(data.articles);
          break;
        default:
          console.error(`Invalid category: ${category}`);
      }
      dispatch({type: 'FETCH_SUCCESS', category, articles: data.articles});
    } catch (error) {
      dispatch({type: 'FETCH_ERROR', error});
    }
  };

  useEffect(() => {
    fetchArticles('business');
    fetchArticles('entertainment');
    fetchArticles('health');
    fetchArticles('science');
    fetchArticles('sports');
    fetchArticles('technology');
  }, []);

  const {
    // business,
    // entertainment,
    // health,
    // science,
    // sports,
    // technology,
    loading,
    error,
  } = state;

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const categoryDetailPage = (val: any, data: any) => {
    const category = {title: val, data: data};
    navigate(`/detail/${val}`, {state: {category}});
  };
  return (
    <>
      {/* nav */}
      <HeaderNavigationMenu title={'React News App'} />
      {/* <h1>Category</h1> */}
      <CategoryComponent />
      <div className='flex-container'>
        {/* left */}
        <div className='flex-item-left'>
          <CategoryHeader
            title={'Technology'}
            onClick={() => categoryDetailPage('technology', technologyState)}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(technologyState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
        {/* center */}

        <div className='flex-item-center'>
          <CategoryHeader
            title={'Health'}
            onClick={() => categoryDetailPage('health', healthState)}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(healthState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
        {/* right */}
        <div className='flex-item-right'>
          <CategoryHeader
            title={'Science'}
            onClick={() => categoryDetailPage('science', scienceState)}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(scienceState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
      </div>
      <div className='flex-container'>
        {/* left */}
        <div className='flex-item-left'>
          <CategoryHeader
            title={'Sports'}
            onClick={() => categoryDetailPage('sports', sportsState)}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(sportsState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
        {/* center */}

        <div className='flex-item-center'>
          <CategoryHeader
            title={'Entertainment'}
            onClick={() =>
              categoryDetailPage('entertainment', entertainmentState)
            }
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(entertainmentState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
        {/* right */}
        <div className='flex-item-right'>
          <CategoryHeader
            title={'Business'}
            onClick={() => categoryDetailPage('business', businessState)}
          />
          {/* <HorizontalLine color={'#EEEEEE'} height={2} /> */}

          {loading ? (
            <Loader />
          ) : (
            filterAndSliceArticles(businessState, 3).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
