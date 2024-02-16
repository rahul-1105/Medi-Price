import React from 'react'
import FeatureCard from './FeatureCard'

const Service = () => {
  return (
    <div className='w-full h-[615px] flex flex-col items-center gap-12'>
        <h2 className='text-4xl font-semibold tracking-widest'>Services</h2>
        <FeatureCard />
    </div>
  )
}

export default Service