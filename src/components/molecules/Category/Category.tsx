import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {categoryTokens} from '../../../constants/categoryToken';
import ButtonComponent from '../../atoms/Button/Button';
import {NewsAppContext} from '../../organisms/context/NewsAppContext';
import './Category.styles.css';
const CategoryComponent = () => {
  const navigate = useNavigate();
  const {
    businessState,
    entertainmentState,
    healthState,
    scienceState,
    sportsState,
    technologyState,
  }: any = useContext(NewsAppContext);
  const categoryDetailPage = (categoryName: any, data: any) => {
    const category = {title: categoryName, data: data};
    navigate(`/detail/${categoryName}`, {state: {category}});
  };
  const handleCategory = (categoryName: any) => {
    switch (categoryName) {
      case 'business':
        categoryDetailPage(categoryName, businessState);
        break;
      case 'entertainment':
        categoryDetailPage(categoryName, entertainmentState);
        break;
      case 'health':
        categoryDetailPage(categoryName, healthState);
        break;
      case 'science':
        categoryDetailPage(categoryName, scienceState);
        break;
      case 'sports':
        categoryDetailPage(categoryName, sportsState);
        break;
      case 'technology':
        categoryDetailPage(categoryName, technologyState);
        break;
      default:
        console.error(`Invalid category: ${categoryName}`);
    }
  };

  return (
    <section className='category-wrapper'>
      {categoryTokens.map(({categoryName, color}) => (
        <ButtonComponent
          key={categoryName}
          onClick={() => handleCategory(categoryName)}
          style={{backgroundColor: color}}>
          {categoryName}
        </ButtonComponent>
      ))}
    </section>
  );
};

export default CategoryComponent;
