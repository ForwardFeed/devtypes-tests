import type {IsTypeInList} from "@devtypes/list"

// Examples automatically extracted from the documentation.
type TrueIsFound = IsTypeInList< true, [ 1, 'no', true ] >;      // true
type TrueIsNotFound = IsTypeInList< true, [ 1, 'no', false ] >;  // false
type ListIsEmptySoFalse = IsTypeInList< true, [] >;              // false

// Test automatically generated from examples.
const TrueIsFound: TrueIsFound = true
const TrueIsNotFound: TrueIsNotFound = false
const ListIsEmptySoFalse: ListIsEmptySoFalse = false

// Manually written content.
