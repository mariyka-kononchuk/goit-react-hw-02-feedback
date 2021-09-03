import s from './Section.module.css';

const Section = ({ title, children }) => (
    <div>
        <div className={s.title}>{title}</div>
        <div>{children}</div>
    </div>
)

export default Section;