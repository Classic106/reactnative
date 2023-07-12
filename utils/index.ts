interface IObject {
  [key: string]: any;
}

function sortDown<T extends IObject>(data: T[], field: string) {
  const result = [...data].sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
  return result;
}

function sortUp<T extends IObject>(data: T[], field: string) {
    const result = [...data].sort((a, b) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (a[field] < b[field]) {
      return 1;
    }
    return 0;
  });
  return result;
};

export { sortDown, sortUp };
