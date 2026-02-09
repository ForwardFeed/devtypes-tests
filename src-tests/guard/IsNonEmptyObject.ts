import type {IsNonEmptyObject} from "@devtypes/guard"
// Examples from the documentation
type A = IsNonEmptyObject< { a: number } >;  // true
type B = IsNonEmptyObject< {} >;             // false
