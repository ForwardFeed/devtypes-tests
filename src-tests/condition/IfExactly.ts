import type {IfExactly} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = IfExactly< [ true, false, true ], 2, 'yes', 'no' >;  // 'yes'
type B = IfExactly< [ true, true ], 1, 'yes', 'no' >;         // 'no'

// Test automatically generated from examples.
const A: A = 'yes'
const B: B = 'no'

// Manually written content.
