import type {StaticMethodNames} from "@devtypes/class"
// Examples from the documentation
class Utils { static create() {} static format() {} }
type StaticMethods = StaticMethodNames< typeof Utils >; // 'create' | 'format'
