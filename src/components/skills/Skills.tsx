import Backend from './Backend'
import DevTools from './DevTools'
import Frontend from './Frontend'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>

        <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
            <DevTools />

        </div>
    </section>
  )
}

export default Skills