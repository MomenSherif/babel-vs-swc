export default function uuid(): string {
  return Math.random().toString(36);
}

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
