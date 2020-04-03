export const stripTypenames = (obj: any, propToDelete: string) => {
  for (const property in obj) {
    if (typeof obj[property] === "object") {
      delete obj.property;
      const newData = stripTypenames(obj[property], propToDelete);
      obj[property] = newData;
    } else {
      if (property === propToDelete) {
        delete obj[property];
      }
    }
  }
  return obj;
};
