import type {ListElement} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type E1 = ListElement< number[] >;                   // number
type E2 = ListElement< Set< string > >;              // string
type E3 = ListElement< Record< string, boolean > >;  // boolean

// Test automatically generated from examples.
const E1: E1 = number
const E2: E2 = string
const E3: E3 = boolean

// Manually written content.
