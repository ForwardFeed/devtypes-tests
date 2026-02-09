import type {IsTuple} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsTuple< [ string, number ] >;  // true
type B = IsTuple< number[] >;            // false
// Manually written content.
