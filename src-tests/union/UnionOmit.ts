import type {UnionOmit} from "@devtypes/union"
// Examples from the documentation
type U = string | number | boolean | null;
type Filtered = UnionOmit< U, string | null >;  // number | boolean
