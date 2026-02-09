import type {TupleHas} from "@devtypes/tuple"
// Examples from the documentation
type HasString = TupleHas< [ number, string, boolean ], string >;  // true
type HasDate = TupleHas< [ number, string, boolean ], Date >;      // false
