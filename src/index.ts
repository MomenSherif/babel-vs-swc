import uuid from './uuid';

const one = {
  asd: 'asd',
  twasd: 'asdasd',
};

const two = {
  asd: 'asd',
  s: 'asdasd',
};

const three = {
  ...one,
  ...two,
};

export function sum(a: number, b: number): number {
  return a + b;
}

export { uuid };
