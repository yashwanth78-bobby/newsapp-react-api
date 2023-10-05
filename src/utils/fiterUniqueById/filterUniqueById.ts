export function filterUniqueById(arr: any[], key: string | number) {
  return Object.values(
    arr.reduce((acc, cur) => {
      if (!acc[cur[key]]) {
        acc[cur[key]] = cur;
      }
      return acc;
    }, {}),
  );
}
