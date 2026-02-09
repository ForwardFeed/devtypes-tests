import type {Intersect} from "@devtypes/util"
// Examples automatically extracted from the documentation.
type KeysA = 'a' | 'aa'
type KeysB = 'a' | 'bb'
type KeysX = 'x' | 'bb'
type Int1 = Intersect< [ KeysA, KeysB, KeysX ] >   // 'a' | 'bb'
type Int2 = Intersect< [ true, false, 1, true ] >  // true
// Manually written content.
