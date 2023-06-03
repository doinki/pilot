export interface Noop {
  (): void;
  <T>(value: T): T;
}

const noop: Noop = <T>(value?: T) => {
  return value;
};

export default noop;
