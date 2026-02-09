import type {UnionHas} from "@devtypes/union"
// Examples from the documentation
type U = string | number | boolean;
type HasString = UnionHas< U, string >;  // true
type HasDate = UnionHas< U, Date >;      // false
