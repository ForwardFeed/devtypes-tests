import type {IsAny} from "@devtypes/guard"
// Examples from the documentation
type A = IsAny< any >;     // true
type B = IsAny< string >;  // false
