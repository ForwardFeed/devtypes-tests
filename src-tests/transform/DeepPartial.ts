import type {DeepPartial} from "@devtypes/transform"
// Examples from the documentation
type User = { id: number; profile: { name: string; address: { city: string } } };
type PartialUser = DeepPartial< User >;
// { id?: number; profile?: { name?: string; address?: { city?: string } } }
