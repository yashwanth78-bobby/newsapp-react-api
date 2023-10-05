export function meters_to_feet_and_inches(num: number) {
  const length_in_meters = num / 10;
  const length_in_feet = length_in_meters / 0.3048;
  const feet = Math.floor(length_in_feet);
  const inches = Math.round((length_in_feet - feet) * 12);
  return `${feet}' ${inches}"`;
}
