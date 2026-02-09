import type {IsObject} from "@devtypes/guard"
// Examples from the documentation
type A = IsObject< { a: number } >;  // true
type B = IsObject< number[] >;       // false
