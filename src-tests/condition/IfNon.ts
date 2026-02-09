import type {IfNon} from "@devtypes/condition"

// Examples automatically extracted from the documentation.
type A = IfNon< [ false, false ], 'ok', 'fail' >;  // 'ok'
type B = IfNon< [ false, true ], 'ok', 'fail' >;   // 'fail'

// Test automatically generated from examples.
const A: A = 'ok'
const B: B = 'fail'

// Manually written content.
