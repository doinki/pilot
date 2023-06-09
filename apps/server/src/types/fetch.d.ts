/* eslint-disable */

type RequestInfo = string | URL | Request;

declare function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response>;

type BodyInit =
  | ArrayBuffer
  | AsyncIterable<Uint8Array>
  | Blob
  | FormData
  | Iterable<Uint8Array>
  | NodeJS.ArrayBufferView
  | URLSearchParams
  | null
  | string;

interface BodyMixin {
  readonly arrayBuffer: () => Promise<ArrayBuffer>;
  readonly blob: () => Promise<Blob>;

  readonly body: ReadableStream | null;
  readonly bodyUsed: boolean;
  readonly formData: () => Promise<FormData>;
  readonly json: () => Promise<unknown>;
  readonly text: () => Promise<string>;
}

interface SpecIterator<T, TReturn = any, TNext = undefined> {
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
}

interface SpecIterableIterator<T> extends SpecIterator<T> {
  [Symbol.iterator](): SpecIterableIterator<T>;
}

interface SpecIterable<T> {
  [Symbol.iterator](): SpecIterator<T>;
}

type HeadersInit =
  | string[][]
  | Record<string, string | ReadonlyArray<string>>
  | Headers;

declare class Headers implements SpecIterable<[string, string]> {
  constructor(init?: HeadersInit);
  readonly append: (name: string, value: string) => void;

  readonly delete: (name: string) => void;

  readonly get: (name: string) => string | null;

  readonly has: (name: string) => boolean;

  readonly set: (name: string, value: string) => void;

  readonly getSetCookie: () => string[];

  readonly forEach: (
    callbackfn: (value: string, key: string, iterable: Headers) => void,
    thisArg?: unknown
  ) => void;

  readonly keys: () => SpecIterableIterator<string>;

  readonly values: () => SpecIterableIterator<string>;

  readonly entries: () => SpecIterableIterator<[string, string]>;

  readonly [Symbol.iterator]: () => SpecIterator<[string, string]>;
}

type RequestCache =
  | 'default'
  | 'force-cache'
  | 'no-cache'
  | 'no-store'
  | 'only-if-cached'
  | 'reload';

type RequestCredentials = 'omit' | 'include' | 'same-origin';

type RequestDestination =
  | ''
  | 'audio'
  | 'audioworklet'
  | 'document'
  | 'embed'
  | 'font'
  | 'image'
  | 'manifest'
  | 'object'
  | 'paintworklet'
  | 'report'
  | 'script'
  | 'sharedworker'
  | 'style'
  | 'track'
  | 'video'
  | 'worker'
  | 'xslt';

interface RequestInit {
  body?: BodyInit;
  credentials?: RequestCredentials;
  dispatcher?: Dispatcher;
  duplex?: RequestDuplex;
  headers?: HeadersInit;
  integrity?: string;
  keepalive?: boolean;
  method?: string;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  signal?: AbortSignal;
  window?: null;
}

type ReferrerPolicy =
  | ''
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';

type RequestRedirect = 'error' | 'follow' | 'manual';

type RequestDuplex = 'half';

declare class Request implements BodyMixin {
  constructor(input: RequestInfo, init?: RequestInit);

  readonly cache: RequestCache;

  readonly credentials: RequestCredentials;

  readonly destination: RequestDestination;

  readonly headers: Headers;

  readonly integrity: string;

  readonly method: string;

  readonly mode: RequestMode;

  readonly redirect: RequestRedirect;

  readonly referrerPolicy: string;

  readonly url: string;

  readonly keepalive: boolean;

  readonly signal: AbortSignal;

  readonly duplex: RequestDuplex;

  readonly body: ReadableStream | null;

  readonly bodyUsed: boolean;

  readonly arrayBuffer: () => Promise<ArrayBuffer>;

  readonly blob: () => Promise<Blob>;

  readonly formData: () => Promise<FormData>;

  readonly json: () => Promise<unknown>;

  readonly text: () => Promise<string>;

  readonly clone: () => Request;
}

interface ResponseInit {
  readonly headers?: HeadersInit;
  readonly status?: number;
  readonly statusText?: string;
}

type ResponseType =
  | 'basic'
  | 'cors'
  | 'default'
  | 'error'
  | 'opaque'
  | 'opaqueredirect';

type ResponseRedirectStatus = 301 | 302 | 303 | 307 | 308;

declare class Response implements BodyMixin {
  constructor(body?: BodyInit, init?: ResponseInit);

  readonly headers: Headers;

  readonly ok: boolean;

  readonly status: number;

  readonly statusText: string;

  readonly type: ResponseType;

  readonly url: string;

  readonly redirected: boolean;

  readonly body: ReadableStream | null;

  readonly bodyUsed: boolean;

  readonly arrayBuffer: () => Promise<ArrayBuffer>;

  readonly blob: () => Promise<Blob>;

  readonly formData: () => Promise<FormData>;

  readonly json: () => Promise<unknown>;

  readonly text: () => Promise<string>;

  readonly clone: () => Response;

  static error(): Response;
  static json(data: any, init?: ResponseInit): Response;
  static redirect(url: string | URL, status: ResponseRedirectStatus): Response;
}
