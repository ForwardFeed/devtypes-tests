import type {UnionPick} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = string | number | boolean | null;
type Filtered = UnionPick< U, string | number >;  // string | number

// Test automatically generated from examples.
const Filtered: Filtered = string | number

// Manually written content.
