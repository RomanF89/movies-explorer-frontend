import './AboutProject.css'
import MainComponentTitle from '../MainComponentTitle/MainComponentTitle';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <MainComponentTitle
        componentTitle={'О проекте'}
      />
      <div className='about-project__description-blocks'>
        <div className='about-project__description-block'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description'>Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__description-block'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__progress'>
        <div className='about-project__progress_frontend'>
          <p className='about-project__progress-description_frontend'>1 неделя</p>
        </div>
        <div className='about-project__progress_backend'>
          <p className='about-project__progress-description_backend'>4 недели</p>
        </div>
      </div>
      <div className='about-project__progress-caption'>
        <div className='about-project__progress-caption_frontend'>
          <p className='about-project__progress-caption-description_frontend'>Back-end</p>
        </div>
        <div className='about-project__progress-caption_backend'>
          <p className='about-project__progress-caption-description_backend'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
