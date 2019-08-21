import smartcharge from "../images/smartcharge-plus.png"
import ezparkn from "../images/ezparkn.png"
import cunyehos from "../images/cuny-ehos.jpg"

// Store list of projects to map onto projects page.
export default [
  {
    name: "Smartcharge Plus",
    description: "Gain a better understanding of how much charging an EV can cost.",
		github_url: 'https://github.com/barriosx/smartcharge-plus',
		image_urls: {
			main: smartcharge,
			screenshots: [],
    },
    live_url: 'https://smartcharge-plus.herokuapp.com/',    
    technologies: ['NodeJS', 'React', 'Puppeteer'],    
		theme_color: '#003e89',
  },
  {
    name: "EZParkn",
    description: "A parking reservation service for CUNY City College students.",
		github_url: 'https://github.com/CSC59939/EZPARKN',
		image_urls: {
			main: ezparkn,
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
		image_urls: {
			main: cunyehos,
			screenshots: [],
    },
    live_url: '',    
    technologies: ['Node.js', 'Angular 2', 'React', 'MongoDB'],    
		theme_color: '#673ab7',
  }

]