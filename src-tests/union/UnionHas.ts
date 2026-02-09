import type {UnionHas} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = string | number | boolean;
type HasString = UnionHas< U, string >;  // true
type HasDate = UnionHas< U, Date >;      // false

// Manually written content.
