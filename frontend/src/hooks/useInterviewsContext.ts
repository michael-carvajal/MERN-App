import { InterviewContext } from '../context/InterviewContext'
import { useContext } from 'react'

export const useInterviewsContext = () => {
  const context = useContext(InterviewContext)

  if (!context) {
    throw Error('useInterviewsContext must be used inside an InterviewsContextProvider')
  }

  return context
}
