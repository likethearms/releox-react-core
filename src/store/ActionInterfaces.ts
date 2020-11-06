/* eslint-disable @typescript-eslint/no-explicit-any */
// src/store/Action.ts
import { Action as _Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type Action<T> = { type: T };
export type ActionWPayload<T, P> = { type: T; payload: P };
export type ReduxDispatch = ThunkDispatch<any, any, _Action>;
export type GetState = () => any;
