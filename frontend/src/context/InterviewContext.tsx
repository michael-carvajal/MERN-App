import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';

export interface Interview {
  _id: string,
  title: string
  interviewer: string
  interviewee: string
  date: string
  content: string
}

interface AppState {
  interviews: Interview[] | null;
}

interface SetInterviewsAction {
  type: 'SET_INTERVIEWS';
  payload: Interview[];
}

interface CreateInterviewAction {
  type: 'CREATE_INTERVIEW';
  payload: Interview;
}

interface DeleteInterviewAction {
  type: 'DELETE_INTERVIEW';
  payload: Interview;
}

type Action = SetInterviewsAction | CreateInterviewAction | DeleteInterviewAction;

export const InterviewContext = createContext<{
  interviews: Interview[] | null;
  dispatch: Dispatch<Action>;
}>({ interviews: null, dispatch: () => {} });

export const interviewsReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_INTERVIEWS':
      return {
        ...state,
        interviews: action.payload
      };
    case 'CREATE_INTERVIEW':
      return {
        ...state,
        interviews: [action.payload, ...(state.interviews || [])]
      };
    case 'DELETE_INTERVIEW':
      return {
        ...state,
        interviews: (state.interviews || []).filter((w) => w._id !== action.payload._id)
      };
    default:
      return state;
  }
};

interface InterviewContextProviderProps {
  children: ReactNode;
}

export const InterviewContextProvider: React.FC<InterviewContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(interviewsReducer, {
    interviews: null
  });

  return (
    <InterviewContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InterviewContext.Provider>
  );
};
