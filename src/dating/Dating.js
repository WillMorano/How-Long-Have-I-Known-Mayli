import styles from './Dating.module.css';
import { useState, useEffect } from 'react';
import background from '../videos/pink-green-smoke.mp4'

const dayMet = "2020-10-27T19:30:00Z"

const getTimeBreakdown = () => {
  const now = new Date()
  const past = new Date(dayMet)

  let years = now.getFullYear() - past.getFullYear()
  let months = now.getMonth() - past.getMonth()
  let days = now.getDate() - past.getDate()
  let hours = now.getHours() - past.getHours()
  let minutes = now.getMinutes() - past.getMinutes()
  let seconds = now.getSeconds() - past.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes--
  }
  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }
  if (days < 0) {
    const previousMonth = new Date(past.getFullYear(), past.getMonth(), 0)
    days += previousMonth.getDate()
    months--
  }
  if (months < 0) {
    months += 12
    years--
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  }
}

function Dating() {

  const [ time, setTime] = useState(getTimeBreakdown());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime({ ...getTimeBreakdown() })
      }, 1000)
      return () => clearInterval(interval)
    }, []);

  return (
    <div
      className={ styles.container }>
      <video 
        className={ styles.video } 
        autoPlay 
        loop 
        muted
      >
        <source 
          src={ background } 
          type='video/mp4' 
        />
      </video>
      <div
        className={ styles.countdown }>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.years }
              </div>
              <div className={ styles.descrip_text }>
                Years
              </div>
          </div>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.months }
              </div>
              <div className={ styles.descrip_text }>
                Months
              </div>
          </div>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.days }
              </div>
              <div className={ styles.descrip_text }>
                Days
              </div>
          </div>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.hours }
              </div>
              <div className={ styles.descrip_text }>
                Hours
              </div>
          </div>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.minutes }
              </div>
              <div className={ styles.descrip_text }>
                Minutes
              </div>
          </div>
          <div 
            className={ styles.box}>
              <div className={ styles.time_text }>
                { time.seconds }
              </div>
              <div className={ styles.descrip_text }>
                Seconds
              </div>
          </div>
      </div>
      <div className={ styles.summary }>
        <div
          className={ styles.top_line }>
          How Long Have I Dated&nbsp;
          <span className={ styles.name_text }>Mayli</span>
          ?
        </div>
        <div
          className={ styles.bottom_line }>
          I asked Mayli out at Seton Hill on October 27, 2020, around 7:30PM
        </div>
      </div>
    </div>
  );
}

export default Dating;
