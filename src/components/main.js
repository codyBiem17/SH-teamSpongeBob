import { useState } from 'react'
import SHIcon from '../assets/images/sh-icon.png'
import Mic from '../assets/images/google_mic.png'
import SearchIcon from '../assets/images/search-icon.png'

const Main = () => {
  const [value, setValue]= useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

    return (
        <div className="main-body">
          {
            value === '' ?
            <img src={SHIcon} alt="sh-icon" id="sh-icon"/>:
            value
          }
          <form>
            <img src={SearchIcon} 
              alt="search-icon" 
              id="search-icon" 
            />
            <input type="text" id="search-field" value={value} onChange={handleChange}  />
            <img src={Mic} alt="google-mic-icon" id="google-mic-icon" />
            <div className="flex-buttons">
                <button type="button" className="buttons">Google Search</button>
                <button type="button" className="buttons">I'm Feeling Lucky</button>
            </div>
          </form>
          <div id="google-langs">
              <span>Google Search in: </span>
              <a href="hausa">Hausa </a>
              <a href="igbo">Igbo </a>
              <a href="yoruba">Ede Yoruba </a>
              <a href="pidgin">Nigerian Pidgin </a>

          </div>
        </div>
    )
}

export default Main