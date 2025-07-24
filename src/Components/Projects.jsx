import React from 'react'
import ProjectCard from './ProjectCard'
import '../css/Project_card.css'
import My_weather from '../assets/My weather.png'
import WordsWiz from '../assets/WordWiz.png'
import Task_lister from '../assets/Task Lister.png'

function Projects() {
  return (
    <div className="Projects" id='Projects'>
      <h2 id='Project-heading'>My Projects</h2>
      <h3 id='Project-headline'>Each Project is a unique peice of development 🧩</h3>

<ProjectCard
  image={WordsWiz}
  name='WordsWiz'
  description={`WordsWiz Text Utility: A React-based single-page application designed to perform real-time text transformations. 
It allows users to convert text to uppercase, lowercase, remove extra spaces, count characters/words, and even read text aloud using speech synthesis. 
Built with Bootstrap for responsive design, it also supports dark/light themes and ensures accessibility and quick performance across devices.`}
  repoLink="https://github.com/salmankhalid7/Wordswiz"
  liveLink="https://salmankhalid7.github.io/Wordswiz/"
/>

<ProjectCard
  image={My_weather}
  name='Open Weather'
  description={`Weather App: A dynamic JavaScript application that provides live weather updates using the OpenWeatherMap API. 
It displays current temperature, humidity, wind speed, and a 7-day weather forecast with icons. 
Built using async/await for clean API handling and Flexbox for a responsive layout, the app also includes error handling and a city search feature for global coverage.`}
  repoLink="https://github.com/salmankhalid7/Open-Weather"
  liveLink="https://salmankhalid7.github.io/Open-Weather/"
  reverse={true}
/>

<ProjectCard
  image={Task_lister}
  name='Task Lister'
  description={`Task Lister (To-Do App): A fully functional task manager built with vanilla JavaScript. 
It allows users to add, edit, delete, filter, and prioritize tasks with color-coded importance. 
Tasks are saved in localStorage for persistence across sessions. 
The app includes due dates, search functionality, bulk deletion, and a mobile-responsive design that makes it ideal for daily task management.`}
  repoLink="https://github.com/salmankhalid7/Task-Lister"
  liveLink="https://salmankhalid7.github.io/Task-Lister/"
/>

    </div>
  )
}

export default Projects