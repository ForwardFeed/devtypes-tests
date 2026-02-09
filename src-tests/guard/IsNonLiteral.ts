import type {IsNonLiteral} from "@devtypes/guard"
// Examples automatically extracted from the documentation.
type A = IsNonLiteral< string >;  // true
type B = IsNonLiteral< 'a' >;     // false
// Manually written content.
