import type {Intersect} from "@devtypes/util"

// Examples automatically extracted from the documentation.
type KeysA = 'a' | 'aa'
type KeysB = 'a' | 'bb'
type KeysX = 'x' | 'bb'
type Int1 = Intersect< [ KeysA, KeysB, KeysX ] >   // 'a' | 'bb'
type Int2 = Intersect< [ true, false, 1, true ] >  // true

// Test automatically generated from examples.
const Int1: Int1 = 'a' | 'bb'
const Int2: Int2 = true

// Manually written content.
