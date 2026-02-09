import type {IsTypeRecursive} from "@devtypes/guard"

// Examples automatically extracted from the documentation.
type RecursiveType = { r: RecursiveType };
type Recursive = IsTypeRecursive< RecursiveType >;                                // true

type PotentialRecursiveType = { r: PotentialRecursiveType | null };
type PotentialRecursive = IsTypeRecursive< PotentialRecursiveType >;              // true             
type IsNotRecursive = IsTypeRecursive< { a: { a: { a: { a: { a: 'a' } } } } } >;  // false

// Test automatically generated from examples.
const Recursive: Recursive = true
const PotentialRecursive: PotentialRecursive = true
const IsNotRecursive: IsNotRecursive = false

// Manually written content.
