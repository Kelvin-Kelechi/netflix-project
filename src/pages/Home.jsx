import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'
 

const Home = () => {
  return (
    <> 
    <Main />
    <Row rowID='1' title='Upcoming' fetchURL={request.requestUpcoming} />
    <Row rowID='2' title='Pupolar' fetchURL={request.requestPopular} />
    <Row rowID='3' title='Trending' fetchURL={request.requestTrending} />
    <Row rowID='4' title='Top Rated' fetchURL={request.requestTopRated} />
    <Row rowID='5' title='Horror' fetchURL={request.requestHorror} />
     
    </>
  )
}

export default Home