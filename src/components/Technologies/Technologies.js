import './Technologies.css'
import MainComponentTitle from '../MainComponentTitle/MainComponentTitle';

function Technologies() {
  return (
    <section className='technologies' id='technologies'>
      <MainComponentTitle
        componentTitle={'Технологии'}
      />
      <h2 className='technologies__title'>7 технологий</h2>
      <p className='technologies__description'>На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className='technologies__tech-list'>
        <li className='technologies__tech'>HTML</li>
        <li className='technologies__tech'>CSS</li>
        <li className='technologies__tech'>JS</li>
        <li className='technologies__tech'>React</li>
        <li className='technologies__tech'>Git</li>
        <li className='technologies__tech'>Express.js</li>
        <li className='technologies__tech'>MongoDB</li>
      </ul>
    </section>
  )
}

export default Technologies;
