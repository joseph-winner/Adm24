import React from 'react'
import Layout from './Layout'
import Banner from '../Screens/HomeScreen/Banner/Banner'
import Featured from '../Screens/HomeScreen/Featured/Featured'
import Categories from '../Screens/HomeScreen/Categories/Categories'
import Cta from '../Screens/HomeScreen/Cta/Cta'
import News from '../Screens/HomeScreen/News/News'
import RecomendedNews from '../Screens/HomeScreen/News/Recomended/RecomendedNews'
import PopularProducts from '../Screens/HomeScreen/PopularProducts/PopularProducts'
import UpcomingEvents from '../Screens/HomeScreen/Events/UpcomingEvents'
import Jobs from '../Screens/HomeScreen/Jobs/Jobs'
import GroupRecomendation from '../Screens/HomeScreen/GroupRecomendation/GroupRecomendation'

export default function HomeScreen() {
  return (
    <Layout>
        <Banner />
        <Featured />
        <Categories />
        <Cta />
        <News />
        <RecomendedNews />
        <GroupRecomendation />
        <PopularProducts />
        <UpcomingEvents />
        <Jobs />
    </Layout>
  )
}
