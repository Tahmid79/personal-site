export interface IProject{
    name : string ;
    image : string ;
    description : string ;
    technology : string[] ;
    githubLink : string ;
    demoLink : string ;
}

export const Projects: IProject[] = [
    { 'name': 'Eco Thinkers', 'image': 'ecothinkers.png', 'description': 'Website for environmental consultancy Eco Thinkers showing the services provided and the projects completed by the organization', 'technology' : ['Angular', 'Angular Material','Typescript','Javascript','FlexLayout','Firebase','Circle CI'] , 'githubLink' : '' , 'demoLink' : 'https://www.ecothinkers.net/' },
    { 'name': 'Mobile Health Game On Epilepsy', 'image': 'epi.JPG', 'description': 'Game to help spread awareness about epilepsy', 'technology' : ['Unity' , 'C#' , 'Mixamo Models'] , 'githubLink' : 'https://github.com/Tahmid79/Mobile-Health-Game' , 'demoLink' : '' },
    { 'name': 'Android Running App', 'image': 'maps.jpg', 'description': 'Android app that can show the path of the user while running and record track data', 'technology' : ['Android', 'Google Maps API', 'Java'] , 'githubLink' : 'https://github.com/Tahmid79/Android-Running-App' , 'demoLink' : '' },
    { 'name': 'Propel Your Business', 'image': 'propelBusiness.png', 'description': 'Restaurant landing page', 'technology' : ['Angular', 'Ng Zorro','Typescript','Javascript','FlexLayout','Firebase'] , 'githubLink' : '' , 'demoLink' : 'https://propel-business.web.app/' },
    { 'name': 'Business Starter', 'image': 'businessStarter.png', 'description': 'Startup landing page', 'technology' : ['Angular', 'Angular Material','Typescript','Javascript','FlexLayout'] , 'githubLink' : 'https://github.com/Tahmid79/Business-Starter' , 'demoLink' : 'https://tahmid-business-starter.netlify.app/' }
];
