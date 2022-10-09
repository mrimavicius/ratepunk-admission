import React from 'react'
import ReferCard from '../components/ReferCard'
import ReferSteps from '../components/ReferSteps'
import '../styles/ReferPage.scss'

const ReferPage = () => {
  return (
    <div className='refer-page'>
        <div className='container'>
            <ReferCard/>
            <ReferSteps/>
        </div>
    </div>
  )
}

export default ReferPage