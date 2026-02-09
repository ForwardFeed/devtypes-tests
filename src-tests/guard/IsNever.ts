import type {IsNever} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsNever< never >;   // true
type B = IsNever< string >;  // false
// Manually written content.
