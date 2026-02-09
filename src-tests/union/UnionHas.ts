import type {UnionHas} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = string | number | boolean;
type HasString = UnionHas< U, string >;  // true
type HasDate = UnionHas< U, Date >;      // false

// Test automatically generated from examples.
const HasString: HasString = true
const HasDate: HasDate = false

// Manually written content.
