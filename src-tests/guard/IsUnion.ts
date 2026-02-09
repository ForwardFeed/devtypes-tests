import type {IsUnion} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsUnion< string | number >;  // true
type B = IsUnion< string >;           // false

// Manually written content.
