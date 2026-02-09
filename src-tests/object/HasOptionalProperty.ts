import type {HasOptionalProperty} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: string; b?: number; c: number | undefined };
type IsOpt_b = HasOptionalProperty< Obj, 'b' >;  // true
type IsOpt_c = HasOptionalProperty< Obj, 'c' >;  // false

// Test automatically generated from examples.
const IsOpt_b: IsOpt_b = true
const IsOpt_c: IsOpt_c = false

// Manually written content.
