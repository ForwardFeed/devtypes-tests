import type {DeepMutable} from "@devtypes/transform"
// Examples from the documentation
type User = { readonly id?: number; profile?: {
  readonly name?: string; address?: { readonly city?: string }
} };
type Mutable = DeepMutable< User >;
// { id: number; profile: { name: string; address: { city: string } } }
