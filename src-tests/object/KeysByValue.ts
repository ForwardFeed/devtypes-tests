import type {KeysByValue} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type Obj = { a: number; b: string; c: number; d: boolean };
type NumKeys = KeysByValue< Obj, number >;  // 'a' | 'c'

// Test automatically generated from examples.
const NumKeys: NumKeys = 'a' | 'c'

// Manually written content.
