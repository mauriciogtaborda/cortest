export const findIndexById = (arr, id) => arr.findIndex(object => object.id === id);
  
export const replaceObjectInArray = (arr, obj) => {
    const index = findIndexById(arr, obj.id);
    if (index!== -1) {
      arr[index] = obj;
    }
    return arr;
  };

  
export const prioridades = ['Alta', 'Media','Baja'];
export const estados = ['Nueva', 'En proceso','Finalizada'];