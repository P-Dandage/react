import React, { useState } from 'react'
import Header from '../../Componets/Header/Header'
import Exploremenu from '../../Componets/Exploremenu/Exploremenu'
import FoodDisplay from '../../Componets/FoodDisplay/FoodDisplay';
import AppDownload from '../../Componets/AppDownload/AppDownload';




function Home() {
  const [category,setCategory] = useState("All");
  return (
    
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category}></FoodDisplay>
       <AppDownload></AppDownload>
   
    </div>
  )
}

export default Home
