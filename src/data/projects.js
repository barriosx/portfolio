// Store list of projects to map onto projects page.
export default [
  {
    name: "Portfolio",
    description: "Thanks for visiting btw 🔥",
    github_url: 'https://github.com/barriosx/portfolio',
    type: 'personal',
    image_urls: {
      main: "portfolio.png",
      screenshots: [],
    },
    live_url: '',    
    technologies: ['Gatsby', 'Netlify', 'React'],    
    theme_color: '#003e89',
  },
  {
    name: "Smartcharge Plus",
    description: "Gain a better understanding of how much charging an EV can cost.",
		github_url: 'https://github.com/barriosx/smartcharge-plus',
    type: 'personal',
    image_urls: {
			main: "smartcharge-plus.png",
			screenshots: [],
    },
    live_url: '',    
    technologies: ['NodeJS', 'React', 'Puppeteer', 'Heroku'],    
		theme_color: '#003e89',
  },
  {
    name: "CapiCount",
    description: "Score tracker for double-six dominoes",
    github_url: 'https://github.com/barriosx/dominoes-counter',
    type: 'personal',
		image_urls: {
			main: "capicount.png",
			screenshots: [],
    },
    live_url: 'https://capicount.netlify.com/',    
    technologies: ['React', 'Netlify'],    
		theme_color: 'rgba(27, 109, 233, 0.8)',
  },
  {
    name: "EZParkn",
    description: "A parking reservation service for CUNY City College students.",
    github_url: 'https://github.com/CSC59939/EZPARKN',
    type: 'college',
		image_urls: {
			main: "ezparkn.png",
			screenshots: [],
    },
    live_url: 'https://ezparkn-ccny.herokuapp.com/',    
    technologies: ['Node.js', 'React', 'MySQL', 'Socket.io'],    
		theme_color: '#212529',
  },
  {
    name: "CUNY EHOS",
    description: "Handle waste management in CUNY City College labs.",
    github_url: 'https://github.com/barriosx/CUNY-EHOS',
    type: 'college',
		image_urls: {
			main: "cuny-ehos.jpg",
			screenshots: [],
    },
    live_url: '',    
    technologies: ['Node.js', 'Angular 2', 'React', 'MongoDB'],    
		theme_color: '#673ab7',
  },
  {
    name: "Camera/Photo UX",
    description: 
    "Entire experience I built for my customer that allows them to take images of the inside of a manhole.\n\nImplemented a carousel for the ability to navigate a batch-like selection of photos, and the ability to tag the photos.",
    github_url: '',
    type: 'work',
		image_urls: {
			main: "carousel.gif",
			screenshots: [],
    },
    live_url: '',    
    technologies: ['Angular 10', 'SCSS'],    
		theme_color: '#673ab7',
  },
  {
    name: "Typeahead",
    description: 
    "Implemented typeahead for searching assets",
    github_url: '',
    type: 'work',
		image_urls: {
			main: "typeahead.gif",
			screenshots: [],
    },
    live_url: '',    
    technologies: ['Angular 10', 'SCSS'],    
		theme_color: '#673ab7',
  }
]