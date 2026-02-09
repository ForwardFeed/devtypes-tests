import type {IsNonEmptyTuple} from "@devtypes/guard"
// Examples from the documentation
type A = IsNonEmptyTuple< [ number ] >;  // true
type B = IsNonEmptyTuple< [] >;          // false
