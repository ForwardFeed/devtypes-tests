import type {IsNonLiteral} from "@devtypes/guard"
// Examples from the documentation
type A = IsNonLiteral< string >;  // true
type B = IsNonLiteral< 'a' >;     // false
