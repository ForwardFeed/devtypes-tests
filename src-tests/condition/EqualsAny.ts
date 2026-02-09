import type {EqualsAny} from "@devtypes/condition"
// Examples from the documentation
type A = EqualsAny< [ string, number, string ] >;  // false
type B = EqualsAny< [ string, string, number ] >;  // true
type C = EqualsAny< [ 1, 2, 3 ] >;                 // false
