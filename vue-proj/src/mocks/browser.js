import { setupWorker } from 'msw';
import handler from './handlers';

// eslint-disable-next-line import/prefer-default-export
export const worker = setupWorker(...handler);
