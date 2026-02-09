import type {TupleFlatten} from "@devtypes/tuple"

// Examples automatically extracted from the documentation.
type F = TupleFlatten< [ 1, [ 2, [ 3 ] ], 4 ] >;  // [ 1, 2, 3, 4 ]

// Manually written content.
