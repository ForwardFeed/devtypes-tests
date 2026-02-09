import type {InstanceType} from "@devtypes/class"
// Examples from the documentation
class User { id: number; name: string; }
type UserInstance = InstanceType< typeof User >; // User
