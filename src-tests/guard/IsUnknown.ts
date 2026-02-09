import type {IsUnknown} from "@devtypes/guard"
// Examples from the documentation
type A = IsUnknown< unknown >;  // true
type B = IsUnknown< any >;      // false
type C = IsUnknown< string >;   // false
