import type {IsObject} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsObject< { a: number } >;  // true
type B = IsObject< number[] >;       // false
// Manually written content.
