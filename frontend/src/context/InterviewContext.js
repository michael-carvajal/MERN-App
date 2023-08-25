import { createContext, useReducer } from 'react'

export const InterviewContext = createContext()

export const interviewsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INTERVIEWS':
      return {
        interviews: action.payload
      }
    case 'CREATE_INTERVIEW':
      return {
        interviews: [action.payload, ...state.interviews]
      }
    case 'DELETE_INTERVIEW':
      return {
        interviews: state.interviews.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const InterviewContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(interviewsReducer, {
    interviews: null
  })

  return (
    <InterviewContext.Provider value={{...state, dispatch}}>
      { children }
    </InterviewContext.Provider>
  )
}
