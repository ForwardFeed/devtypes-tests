import type {DeepRequired} from "@devtypes/transform"
// Examples from the documentation
type User = { id?: number; profile?: { name?: string; address?: { city?: string } } };
type Required = DeepRequired< User >;
// { id: number; profile: { name: string; address: { city: string } } }
