import type {TupleHas} from "@devtypes/tuple"

// Examples automatically extracted from the documentation.
type HasString = TupleHas< [ number, string, boolean ], string >;  // true
type HasDate = TupleHas< [ number, string, boolean ], Date >;      // false

// Test automatically generated from examples.
const HasString: HasString = true
const HasDate: HasDate = false

// Manually written content.
