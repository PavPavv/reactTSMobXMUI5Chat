export const getClockTime = (time: Date): string => {
  const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

  return `${hours}:${minutes}`;
};

export const isEmptyObj = (obj: object) => {
  return (Object.keys(obj).length) ? false : true;
};

export const getTruncatedString = (str: string): string => {
  if (str.length > 50) {
    const truncatedStr = str.slice(0,58);
    return truncatedStr + '...';
  }
  return str;
};