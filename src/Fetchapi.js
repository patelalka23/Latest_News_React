import React, { useEffect, useState } from 'react'

function Fetchapi() {
  const [value , setValue] = useState("Alka")
  useEffect(() => {
    fetchApiFromOrg()
    console.log("hi")
  },[])
  async function fetchApiFromOrg()
  {
    let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=bbfd0222e2354d2bbb4b5c92862941e2")
    let result = await res.json();
    console.log(result)
    console.log(result.articles)
    let p  = result.articles.map((a) => {
      return(
         <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={a.urlToImage} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{a.title}</h5>
      <p class="text-gray-700 text-base mb-4">
       {a.description}
      </p>
      <a  class="font-bold text-xl" href={a.url}>Read More</a>
    </div>
  </div>
</div>
  )
    })

    console.log(p)
    setValue(p);
  }
  return (
   <div>
     {value}
     </div>
  )
}

export default Fetchapi