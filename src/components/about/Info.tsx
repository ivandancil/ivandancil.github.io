

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
            < i className='bx  bx-medal-star-alt about_icon'  ></i> 
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">Years of Work</span>
        </div>

         <div className="about_box">
          < i className='bx  bx-briefcase-alt bx-rotate-90 bx-flip-horizontal about_icon'  ></i> 
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">Number of Projects</span>
        </div>

          <div className="about_box">
            < i className='bx  bx-message-circle-question-mark bx-rotate-90 bx-flip-horizontal about_icon'  ></i> 
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info