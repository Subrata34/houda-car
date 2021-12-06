import React from 'react'
import Nevigation from '../Nevigation/Nevigation'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Products from '../Produects/Products'
import Review from '../Review/Review'
import ItemReview from '../ItemsReview/ItemReview'

const Home = () => {
    return (
        <div>
        <Nevigation></Nevigation>
        <Banner></Banner>
        <Products></Products>
        <ItemReview></ItemReview>
        <Review></Review>
        <Footer></Footer>
        </div>
    )
}

export default Home
