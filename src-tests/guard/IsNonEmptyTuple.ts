import type {IsNonEmptyTuple} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsNonEmptyTuple< [ number ] >;  // true
type B = IsNonEmptyTuple< [] >;          // false
// Manually written content.
