import type {UnionToTuple} from "@devtypes/union"
// Examples from the documentation
type U = 'a' | 'b' | 'c';
type Tup = UnionToTuple< U >;
// [ 'a', 'b', 'c' ] (order may vary)
