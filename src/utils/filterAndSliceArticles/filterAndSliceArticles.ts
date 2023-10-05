export function filterAndSliceArticles(articles: any[], maxArticles: number): any[] {
  const filteredData = articles.filter((item) => item.urlToImage !== null);
  return filteredData.slice(0, maxArticles);
}
