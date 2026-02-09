import type {PathValue} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type User = { id: number; profile: { name: string; address: { city: string } } };
type City = PathValue< User, 'profile.address.city' >;  // string

// Test automatically generated from examples.
const City: City = string

// Manually written content.
