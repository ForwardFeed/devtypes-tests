import type {ChainMapped} from "@devtypes/object"
// Examples from the documentation
type RestaurantMenu = ChainMapped< [ 'night' | 'day', 'entry' | 'main' | 'dessert' ], () => void >
// {
//   night: { entry: () => void; main: () => void; dessert: () => void };
//   day: { entry: () => void; main: () => void; dessert: () => void };
// }
