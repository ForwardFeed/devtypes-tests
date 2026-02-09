import type {UnionKeys} from "@devtypes/union"
// Examples from the documentation
type U = { a: string } | { b: number };
type K = UnionKeys< U >;  // 'a' | 'b'
