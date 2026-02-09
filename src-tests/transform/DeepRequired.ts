import type {DeepRequired} from "@devtypes/transform"

// Examples automatically extracted from the documentation.
type User = { id?: number; profile?: { name?: string; address?: { city?: string } } };
type Required = DeepRequired< User >;
// { id: number; profile: { name: string; address: { city: string } } }

// Manually written content.
