import type {UnionToTuple} from "@devtypes/union"

// Examples automatically extracted from the documentation.
type U = 'a' | 'b' | 'c';
type Tup = UnionToTuple< U >;
// [ 'a', 'b', 'c' ] (order may vary)

// Manually written content.
