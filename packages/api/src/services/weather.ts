import { generateId } from '../utils/generateId';

const weatherOptions = [{ label: 'Hot' }, { label: 'Cold' }].map(option => ({
  id: generateId(option.label),
  label: option.label,
}));

export { weatherOptions };
