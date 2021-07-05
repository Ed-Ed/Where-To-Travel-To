import { generateId } from '../utils/generateId';

const activityOptions = [
  { label: 'Beach' },
  { label: 'Party' },
  { label: 'Food' },
  { label: 'Water Sports' },
  { label: 'Hiking' },
  { label: 'Biking' },
].map(option => ({
  id: generateId(option.label),
  label: option.label,
}));

export { activityOptions };
