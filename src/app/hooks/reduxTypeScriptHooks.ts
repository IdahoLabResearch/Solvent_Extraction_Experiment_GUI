{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useSelector` and `useDispatch`

//Typed `useSelector` to work better with TypeScript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Typed `useDispatch` to work better with TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch;
