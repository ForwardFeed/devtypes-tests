import type {IsNever} from "@devtypes/guard"
// Examples from the documentation
type A = IsNever< never >;   // true
type B = IsNever< string >;  // false
