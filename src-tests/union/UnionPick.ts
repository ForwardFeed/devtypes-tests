import type {UnionPick} from "@devtypes/union"
// Examples from the documentation
type U = string | number | boolean | null;
type Filtered = UnionPick< U, string | number >;  // string | number
