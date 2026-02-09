import type {Equals} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = Equals< string, string >;  // true
type B = Equals< string, number >;  // false

// Manually written content.
