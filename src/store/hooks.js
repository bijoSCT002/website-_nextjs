import { useDispatch, useSelector } from "react-redux";

/**
 * Re-export React-Redux hooks so components can import from the store.
 * Use: import { useAppDispatch, useAppSelector } from "../store";
 */
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
