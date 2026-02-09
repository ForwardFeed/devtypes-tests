import type {IsUnion} from "@devtypes/guard"
// Examples from the documentation
type A = IsUnion< string | number >;  // true
type B = IsUnion< string >;           // false
