import { useEffect }from 'react'
import { useInterviewsContext } from "../hooks/useInterviewsContext"

// components
// import WorkoutDetails from '../components/WorkoutDetails'
// import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {interviews, dispatch} = useInterviewsContext()

  useEffect(() => {
    const fetchInterviews = async () => {
      const response = await fetch('/api/interview')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_INTERVIEWS', payload: json})
      }
    }

    fetchInterviews()
  }, [dispatch])
console.log(interviews);
  return (
    <div className="home">
      {/* <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm /> */}
      <div className='interviews-container'>
        {interviews.map((interview, index) => {
          return (
            <div className='interview'>
              <p>{interview.title}</p>
              <p>{interview.interviewer}</p>
              <p>{interview.interviewee}</p>
              <p>{interview.date}</p>
              <p>{interview.content}</p>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Home
