export type Join<
  Strings extends ReadonlyArray<string | number>,
  Delimiter extends string,
> = Strings extends []
  ? ''
  : Strings extends readonly [string | number]
  ? `${Strings[0]}`
  : Strings extends readonly [
      string | number,
      ...infer Rest extends ReadonlyArray<string | number>,
    ]
  ? `${Strings[0]}${Delimiter}${Join<Rest, Delimiter>}`
  : string;
