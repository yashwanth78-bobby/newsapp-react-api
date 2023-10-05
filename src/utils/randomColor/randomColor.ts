import { badgeColorTokens } from '../../tokens/colors';
export const getRandomColor = () => {
  const randomColor =
    badgeColorTokens[Math.floor(Math.random() * badgeColorTokens.length)];
  return randomColor;
};
