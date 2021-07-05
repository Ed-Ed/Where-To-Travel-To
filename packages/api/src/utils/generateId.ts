const generateId = (label: string) => label.toLowerCase().split(' ').join('-');

export { generateId };
