import { describe, expect, it } from 'vitest';
import categories from '../lib/portfolio-data.json';
describe('Supplied injectable portfolio', () => {
 it('includes all 93 products from the supplied website', () => {
  expect(categories.reduce((count, category) => count + category.products.length, 0)).toBe(93);
 });
 it('preserves the 12 supplied therapy areas', () => {
  expect(categories).toHaveLength(12);
 });
 it('preserves the supplied Artesunate strengths', () => {
  const product = categories.find(c => c.id === 'anti-malarial')?.products.find(p => p.name === 'Artesunate');
  expect(product?.strength).toBe('30mg · 60mg · 120mg (dry powder)');
 });
});
