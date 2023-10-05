export const concatenateProperty = (array: any[], property: string | number) => {
  return array.reduce((prev, current) => {
    const regex = /[\n\r]+/g;
    const result = prev.replace(regex, ' ');
    return result + current[property];
  }, '');
};
