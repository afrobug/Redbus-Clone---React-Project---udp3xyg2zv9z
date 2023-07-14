import React from 'react'
import { BusCard } from './BusCard'

export const BusDetail = ({busName,arrivalTime,departureTime,ticketPrice}) => {
  return (
    <div>
        <BusCard busName={busName} arrivalTime={arrivalTime} departureTime={departureTime} ticketPrice={ticketPrice}/>
    </div>
  )
}
