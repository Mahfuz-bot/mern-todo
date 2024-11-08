import { createContext } from "react";
import { Data } from "../assets/data/datas";

// Define the context with the correct type
export const TaskContext = createContext<Data[] | null>(null);
export const TaskDispatchContext = createContext<
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   React.Dispatch<any>>(() => { });
