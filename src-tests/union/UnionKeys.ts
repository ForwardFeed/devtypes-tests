import type {UnionKeys} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = { a: string } | { b: number };
type K = UnionKeys< U >;  // 'a' | 'b'

// Manually written content.
