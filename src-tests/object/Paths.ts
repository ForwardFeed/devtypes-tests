import type {Paths} from "@devtypes/object"
// Examples from the documentation
type User = { id: number; profile: { name: string; address: { city: string } } };
type PathList = Paths< User >;
// 'id' | 'profile' | 'profile.name' | 'profile.address' | 'profile.address.city'
