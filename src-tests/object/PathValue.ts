import type {PathValue} from "@devtypes/object"

// Examples automatically extracted from the documentation.
type User = { id: number; profile: { name: string; address: { city: string } } };
type City = PathValue< User, 'profile.address.city' >;  // string

// Manually written content.
