import type {InstanceType} from "@devtypes/class"

// Examples automatically extracted from the documentation.
class User { id: number; name: string; }
type UserInstance = InstanceType< typeof User >; // User

// Test automatically generated from examples.
const UserInstance: UserInstance = User

// Manually written content.
