import React from 'react'
import Sidecontent from './Sidecontent'
const Sidebar = () => {
  return (
    <div className='sidepanel'>
        <div className='header'>
            TOPICS
        </div>
        <div className='sidecontents'>
            <Sidecontent name = "MongoDB"/>
            <Sidecontent name = "Express JS"/>
            <Sidecontent name = "React"/>
            <Sidecontent name = "Node JS"/>
            <Sidecontent name = "Python"/>
            <Sidecontent name = "C++"/>
            <Sidecontent name = "Java"/>
            <Sidecontent name = "C"/>
            <Sidecontent name = "C#"/>
            <Sidecontent name = "R"/>
            <Sidecontent name = "SQL"/>
            <Sidecontent name = "JavaScript"/>
            <Sidecontent name = "Oracle"/>
            <Sidecontent name = "Kotlin"/>
            <Sidecontent name = "Dart"/>
            <Sidecontent name = "Swift"/>
            <Sidecontent name = "Flutter"/>
        </div>
    </div>  
)
}

export default Sidebar