export const findMaxRows = () => {
    const num = Math.floor((window.innerHeight-180)/26);
    return num > 25 ? 25 : num < 2 ? 2 : num;
  };
  
export const findMaxColumns = () => {
    const num = Math.floor(window.innerWidth/26);
    return num > 40 ? 40 : num < 2 ? 2 : num;
};

