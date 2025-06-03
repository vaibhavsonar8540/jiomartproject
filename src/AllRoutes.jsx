import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Homepage.jsx/Home'
import Cart from './Pages/Cart/Cart'
import SignIn from './Pages/Authentication/SignIn'
import SignUp from './Pages/Authentication/SignUp'
import Description from './Components/Description/DescriptionPage'
import PrivatePage from './Components/PrivatePage'
import Drinks from './Grocery/Drinks'
import IceFrozen from './Grocery/IceFrozen'
import GroceryData from './Grocery/GroceryData'
import Favourite from './Favourite/Favourite'
import Blockbuster from './Pages/Blockbuster/Blockbuster'
import LootDeal from './Pages/LootDeal/LootDeal'
import GroceryDis from './Pages/GroceryDiscount/GroceryDis'
import SmartPhone from './Pages/Smartphone/SmartPhone'
import Cricket from './Pages/Cricket/Cricket'
import GlobalStore from './Pages/GlobalStore/GlobalStore'
import Cleaner from './Pages/GlobalStore/Cleaner/Cleaner'
import Haircare from './Pages/GlobalStore/HairCare/HairCare'
import KitchenHome from './Pages/kitchenhomeappliances/kitchenhome'
import Caution from './Pages/JioMart Care/Caution'
import Shopping from './Pages/LootDeal/Shopping'
import Iphone from './Pages/Iphone/Iphone'
import Toys from './Pages/Toys/Toys'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/grocery' element={<GroceryData />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/product/:category/:id" element={<PrivatePage><Description /></PrivatePage>} />
        <Route path='/drink' element={<Drinks />} />
        <Route path='/icefrozen' element={<IceFrozen />} />
         <Route path='/blockbuster' element={<Blockbuster/>} />
         <Route path='/loot' element={<LootDeal/>}></Route>
        <Route path='/favourite' element={<PrivatePage><Favourite /></PrivatePage>} />
        <Route path='/grocerydis' element={<GroceryDis/>}></Route>
        <Route path='/smartphone' element={<SmartPhone/>}></Route>
        <Route path='/cricket' element={<Cricket/>}></Route>
        <Route path='/globalstore' element={<GlobalStore/>}></Route>
        <Route path='/cleaner' element={<Cleaner/>}></Route>
        <Route path='/haircare' element={<Haircare/>}></Route>
        <Route path='/kitHome' element={<KitchenHome/>}></Route>
        <Route path='/shopping' element={<Shopping/>}></Route>
        <Route path='/caution' element={<Caution/>}></Route>
        <Route path='/iphone' element={<Iphone/>}></Route>
        <Route path='/toys' element={<Toys/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
