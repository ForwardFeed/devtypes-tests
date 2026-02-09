import type {IsType} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsType< string, string | number >;  // true
type B = IsType< number, string >;           // false
// Manually written content.
