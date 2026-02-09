import type {IsNonEmptyObject} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsNonEmptyObject< { a: number } >;  // true
type B = IsNonEmptyObject< {} >;             // false
// Manually written content.
