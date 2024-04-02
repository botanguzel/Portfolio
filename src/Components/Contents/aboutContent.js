// TextContent.js
const aboutContent = {
    pageTitle: 'Botan Guzel - About Me',
    header: {
      title: 'About Me',
      description: 'I am a hard-working college student, currently studying computer engineering at Luleå University of Technology.\n'+
      'I am engaged in further developing my knowledge and can effectively lead smaller projects as well as collaborte in teams.\n'+
      'I have proficiency in a variety of programming languages including Python, Java, C# and React.',
      cv: {
        main: 'See My CV',
        loading: 'Loading',
      },
      projects: 'See my projects',
    },
    Experience: {
      title: 'Experience',
      icon: 'bi bi-stars',
      items: [
        {
            title: 'Substitute teacher, StudentConsulting',
            period: 'November 2022 - Today',
            description: 'Basically I follow instructions from the teachers and take initiativ when needed. The main goal is to help'+
            ' students when their teacher is not present and make the teachers days easier when they return.',
        },
        {
            title: 'Server Admin, Freelancer',
            period: 'May 2021 - Augusti 2021',
            description: 'Created and administrated the database of a game, that was hosted privately, for a short term.'
        }
      ],
    },
    Education: {
        title: 'Education',
        icon: 'bi bi-book',
        description: 'When I moved to Sweden from Turkey to pursue my education, I was forced to re-take highschool edication as'+
        ' my higschool diploma from Turkey was not accepted in Sweden. But it did not stop me from achieving what I have wanted.',
        items: [
            {
                schoolName: 'Luleå University of Technology',
                department: 'Computer Engineering',
                period: 'September 2022 - May 2025',
            },
            {
                schoolName: 'NTI Vetenskapsgymnasiet',
                department: 'Technology',
                period: 'September 2017 - May 2021',
            },
        ],
    },
    Courses: {
        title: 'Courses',
        icon: 'bi bi-book-half',
        items: [
            {
                name: 'Nova Hermods',
                courseName: 'Programming 2',
                description: 'An entry level course about Apache.',
                period: 'February 2021 - April 2021',
            },
        ],
    },
    End: {
        title: 'Coding Skills',
        icon: 'bi bi-code-slash',
        description: 'This shows my coding skills at each and every programming language that I have used or can use. It is color'+
        ' coordinated (blue = beginner, green = intermediate, red = advanced)',
    },
  };
  export default aboutContent;
  