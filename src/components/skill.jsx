import '../styles/skill.css'


const Skill = (props) => {
    return (
        <>
            <div className="container-skill" style={{ borderColor: props.color }}>
                <div className='img' style={{ backgroundImage: `url(${props.img})` }}></div>
                <p >{props.title}</p>
            </div>
        </>
    )

}

export default Skill;