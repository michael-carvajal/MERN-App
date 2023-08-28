import { useEffect }from 'react'
import { useInterviewsContext } from "../hooks/useInterviewsContext"
import '../styles/Home.css'
import { useAuthContext } from '../hooks/useAuthContext'
// components
// import WorkoutDetails from '../components/WorkoutDetails'
// import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {interviews, dispatch} = useInterviewsContext()
  const user = useAuthContext()

  useEffect(() => {
    const fetchInterviews = async () => {
      const response = await fetch('/api/interview', {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_INTERVIEWS', payload: json})
      }
    }
    if (user) {
      fetchInterviews()
    }
  }, [dispatch])

  if (!interviews) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="home">
      {/* <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm /> */}
      <div className='interviews-container'>
        {interviews?.map((interview, index) => {
          return (
            <div key={`interview-key-${index}`} className='interview'>
              <p> Title: {interview.title}</p>
              <p> Interviewer: {interview.interviewer}</p>
              <p> Interviewee: {interview.interviewee}</p>
              <p> Date: {interview.date}</p>
              <pre> Content: <br/> {interview.content}</pre>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Home
