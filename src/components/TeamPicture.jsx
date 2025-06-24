import React from 'react'

const TeamPicture = () => {

    const team = [
        {
        position: "Chief Executive Officer",
            picture: "/image/Ceo.jpg",
            alternative: "CEO"
        }, {
            position: "Senior Developer",
            picture: "/image/Sr-Dev.jpg",
            alternative: "Senior Developer"
        }, {
            position: "QA Tester",
            picture: "/image/QaTester.jpg",
            alternative: "QA Tester"
        }, {
            position: "Front-end Developer",
            picture: "/image/Front-End.jpg",
            alternative: "Front-end"
        }, {
            position: "Back-end Developer",
            picture: "/image/Back-End.jpg",
            alternative: "Back-end"
        }
    ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-20 pb-24 text-center'>
        {team.map((devs, i) =>{
            return (
            <div key={i}>
                <img src={devs.picture} alt={devs.alternative} className='h-28 mx-auto mb-2 rounded-full object-cover' />
                <h2 className='text-sm font-medium'>{devs.position}</h2>
            </div>
            );
        })}
    </div>
  )
}

export default TeamPicture
