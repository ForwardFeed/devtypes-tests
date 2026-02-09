import type {Promisify} from "@devtypes/functional"

// Examples automatically extracted from the documentation.
type Fn = ( a: string, b: number ) => boolean;
type PromisifiedFn = Promisify< Fn >;
// ( a: string, b: number ) => Promise< boolean >

// Manually written content.
