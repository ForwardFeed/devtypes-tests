import type {IsUnknown} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type A = IsUnknown< unknown >;  // true
type B = IsUnknown< any >;      // false
type C = IsUnknown< string >;   // false

// Manually written content.
