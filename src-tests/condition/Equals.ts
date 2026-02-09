import type {Equals} from "@devtypes/condition"
// Examples from the documentation
type A = Equals< string, string >;  // true
type B = Equals< string, number >;  // false
