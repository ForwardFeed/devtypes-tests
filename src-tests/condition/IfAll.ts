import type {IfAll} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = IfAll< [ true, true ], 'ok', 'fail' >;   // 'ok'
type B = IfAll< [ true, false ], 'ok', 'fail' >;  // 'fail'

// Test automatically generated from examples.
const A: A = 'ok'
const B: B = 'fail'

// Manually written content.
