import type {IsType} from "@devtypes/guard"
// Examples from the documentation
type A = IsType< string, string | number >;  // true
type B = IsType< number, string >;           // false
