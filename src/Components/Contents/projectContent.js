const projectContent = {
    title: 'Botan Guzel - Projects',
    description: 'You can see the details of my projects and test them in my ',
    link: 'https://github.com/botanguzel?tab=repositories',
    icon_link: 'bi bi-github-fill',
    python: {
        name: 'Python Projects',
        items: [
            {
                projectName: 'Search Download & Train',
                projectDescription: 'This python program makes use of different libraries but mainly uses tkinter as GUI and'+
                ' tensorflow to train the machine. User needs to provide its own Google API-key and Google Custom Search'+
                ' Engine ID in order to login to application. Then the user can adjust the search settings as they wish before bulk'+
                ' downloading the images. After the download process has finished the program automatically locks itself from further'+
                ' search and begins to training process. The training process time completely depends on the amount of images that will'+
                ' be processed. Then the trained machine output will be saved to a folder choosen by user or system default.',
                projectImg: '/images/search&train.jpg',
                imgAlt: 'Search & Train Image'
            },
            {
                projectName: 'Hangman',
                projectDescription:'This is a hangman game. With this project i demonstrated how tKinter-library could be specialized.'+
                ' This game shows an image of a guy being hanged as the wrong letters have been chosen. There are different difficulty'+
                ' levels such as beginner, intermediate and hard. It supports two language, however I have made the language packs as'+
                ' \'.txt\' files which lets the user to easily change the language. Apart from this, there is a time-mode as well which'+
                ' shows how the timer functions can be used together with tKinter without freezing the main application.',
                projectImg: '/images/hangman.jpg',
                imgAlt: 'Hangman Img'
            },
        ]
    },
    java: {
        name: 'Java Projects',
        items: [
            {
                projectName: 'Simulator',
                projectDescription: 'A simulator app, that simulates a supermarket and its customers. Basically simulates a supermarket with'+
                'given inputs (\'cash register, max amount of customers, picking time, payment time, seed\'). Then the application will'+
                'simulate supermarket for 10 seconds, and return each and every event that happened, with all the details such as event type'+
                'event time, customer number etc.',
                projectImg: '/images/sim.jpg',
                imgAlt: 'Simulator image'
            },
        ],
    },
    html: {
        name: 'HTML Projects',
        items: [
            {
                projectName: 'OneSolution - website is under construction',
                projectDescription: 'This website was built with HTML, PHP and Python, and it is locally hosted. This website shows three'+
                ' events in a small town named Seyrek in Turkey. After registering to the site, the users can add/edit/remove complaints or'+
                ' suggestions for the town. Those complaints or suggestions are power and water outages, animal problems (Turkey have alot of'+
                ' stray dogs and cats on the streets and some of them can get violent at some times), and lastly other problems where users'+
                ' can share whatever their problem or suggestion is. Complaints are shown in a seperate page with its own map and complaints'+
                ' are shown clearly on the map each with their own icon, and suggestions are shown in the same way on another page.',
                link: 'onesolution.botanguzel.com',
            },
            {
                projectName: 'RecipeBox',
                projectDescription: 'This is a recipe website, where users can find different recipes. The database for recipes was created by me'+
                ' through web scraping and I have applied some general changes to make it fit to the website. The users can create find recipes'+
                ' without creating an account. However, if they choose to create an account then they can add comments, save the recipes and rate'+
                ' them. It is an simple to use website to find different recipes.',
                link: 'recipebox.botanguzel.com',
            },
            {
                projectName: 'BotanGuzel',
                projectDescription: 'This website have been built with React and this is my portfolio where organizations or people can see'+
                ' information about me and if they choose so, they can view my CV too.',
                link: 'botanguzel.com',
            },
        ],
    }


};

export default projectContent;