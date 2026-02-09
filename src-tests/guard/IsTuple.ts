import type {IsTuple} from "@devtypes/guard"
// Examples from the documentation
type A = IsTuple< [ string, number ] >;  // true
type B = IsTuple< number[] >;            // false
