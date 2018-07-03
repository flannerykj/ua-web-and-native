export type Action = {
  type: string,
  [string]: any
}

export type ActionType = Action;

export type PromiseAction = Promise<ActionType>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

