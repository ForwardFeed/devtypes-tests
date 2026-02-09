import type {Widen} from "@devtypes/util"

// Examples automatically extracted from the documentation.
type A = Narrow< 'hello' >;  // string
type B = Narrow< true >;     // boolean

// Test automatically generated from examples.
const A: A = string
const B: B = boolean

// Manually written content.
