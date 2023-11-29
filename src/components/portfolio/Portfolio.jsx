import React from 'react'
import './portfolio.css';
import Img1 from '../../assests/food-order.jpg';
import Img2 from '../../assests/graphical.jpg';
import Img3 from '../../assests/portfolio.jpg';
import Img4 from '../../assests/projectmanagment.jpg';
import Img5 from '../../assests/chatbot.jpg';
const data = [
  {
    id: 1,
    image: Img5,
    title: 'chatbot created using dialogflow with some trained data',
    github: 'https://github.com/Tahaseen2002/dialogflow-full-code',

  },
  {
    id: 2,
    image: Img3,
    title: 'personal web portfolio',
    github: 'https://github.com/Tahaseen2002/webportfolio-react',

  },
  {
    id: 3,
    image: Img2,
    title: 'Graphical password authentication using firebase',
    github: 'https://github.com/Tahaseen2002/react-Graphicalpassword',

  },
  {
    id: 4,
    image: Img4,
    title: 'project managment where we can add title description upload and delete',
    github: 'https://github.com/Tahaseen2002/project-managment-udemy',

  },
  {
    id: 5,
    image: Img1,
    title: 'food delivery app ',
    github: 'https://github.com/Tahaseen2002/food-order-udemy',

  },
]
const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article  key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className="btn">Github</a>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio