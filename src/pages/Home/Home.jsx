import BrandFeatured from "../../compunant/Brand/BrandFeatured.jsx"
import DiscountSection from "../../compunant/Home/DiscountSection.jsx"
import Slider from "../../compunant/Home/Slider.jsx"
import CardProductsContainer from "../../compunant/Product/CardProductsContainer.jsx"
import HomeCategory from "./HomeCatogry.jsx"


const Home = () => {
  return (
    <div className="font" style={{minHeight:'670px'}}>
    
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title=' السلسلة' btntitle='المزيد' pathText='/shop-products'/>
    <DiscountSection/>
    <CardProductsContainer title=' الانسيال' btntitle='المزيد' pathText='/shop-products'/>
    <CardProductsContainer title=' الحلق' btntitle='المزيد' pathText='/shop-products'/>
    <BrandFeatured title="اشهر الماركات" btntitle='المزيد'/>
    </div>
  )
}

export default Home