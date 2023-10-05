import {useLocation} from 'react-router-dom';
import {filterAndSliceArticles} from '../../../utils/filterAndSliceArticles/filterAndSliceArticles';
import {timeElapsedSince} from '../../../utils/timeElapsed/timeElapsed';
import CategoryHeader from '../../atoms/CategoryHeader/Header';
import Loader from '../../atoms/Loader/Loader';
import Card from '../../molecules/Card/Card';
import CategoryComponent from '../../molecules/Category/Category';
import HeaderNavigationMenu from '../../organisms/Navigation/HeaderNavigationMenu';
const DetailPage = () => {
  const location = useLocation();
  const {category}: any = location.state;

  return (
    <>
      {/* nav */}
      <HeaderNavigationMenu title={'React News App'} />
      {/* <h1>Category</h1> */}
      <CategoryComponent />
      <div className='flex-container'>
        <div className='flex-item-left'>
          <CategoryHeader title={category.title} />
          {category.data ? (
            filterAndSliceArticles(category.data, 10).map(
              (article: any, index: number) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.content}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
