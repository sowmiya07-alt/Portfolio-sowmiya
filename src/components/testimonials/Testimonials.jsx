import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'sree prathaa',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Rasif is a great collaborative partner to have. I met Rasif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'srija sethu',
      test: "I've studied with [Your Name] throughout our second year of CSE, and one thing that always stands out is their curiosity for data. Whether it's analyzing datasets or exploring new tools, they constantly push themselves to learn more. Their dedication to data analytics is truly inspiring, and they always help others understand complex concepts with ease.",
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.'
    },
{

      id: 3,
      link: 'https://www.linkedin.com/in/agasi-xalilov/',
      name: 'soundhanya',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Rasif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/javid-aliyev-b343061b6/',
      name: 'senthamizh',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    },
  
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials