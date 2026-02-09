import type {IsLiteral} from "@devtypes/guard"
// Examples from the documentation
type A = IsLiteral< 'hello' >;  // true
type B = IsLiteral< 42 >;       // true
type C = IsLiteral< true >;     // true
type D = IsLiteral< string >;   // false
