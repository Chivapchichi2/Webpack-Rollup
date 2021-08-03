import moment from 'moment';
export const calculateSumOfNumbers = numbers =>
  numbers.reduce((sum, number) => sum + number, 0);

export const getFormattedTime = date =>
  moment(date).format('MMMM Do YYYY, h:mm:ss a');
