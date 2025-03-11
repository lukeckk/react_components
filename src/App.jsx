import { useState } from 'react'
import './App.css'
import BusinessCard from './BusinessCard'
import profiles from './../data/profiles.json'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click to add</button>
      <h1>Result: {count}</h1>
      <div className='cards'>
        {
          profiles.map((profile, index) => {
            return (
              <BusinessCard
                key={index} //unique key
                name={profile.name}
                title={profile.title}
                email={profile.email}
                phone={profile.phone}
                profileImage={profile.profileImage}
                tagline={profile.tagline}
              />
            )
          })
        }
      </div>
    </div >
  )
}

export default App
