import type {Exact} from "@devtypes/guard"
// Examples from the documentation
type A = Exact< { a: number }, { a: number } >;             // { a: number }
type B = Exact< { a: number; b: number }, { a: number } >;  // never
