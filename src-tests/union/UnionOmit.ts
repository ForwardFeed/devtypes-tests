import type {UnionOmit} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = string | number | boolean | null;
type Filtered = UnionOmit< U, string | null >;  // number | boolean

// Manually written content.
