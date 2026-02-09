import type {IfAny} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = IfAny< [ false, true ], 'ok', 'fail' >;   // 'ok'
type B = IfAny< [ false, false ], 'ok', 'fail' >;  // 'fail'

// Test automatically generated from examples.
const A: A = 'ok'
const B: B = 'fail'

// Manually written content.
