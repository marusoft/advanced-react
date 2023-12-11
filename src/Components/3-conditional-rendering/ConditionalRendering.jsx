import { useEffect, useState } from "react";


const ConditionalRendering = () => {
 const [isLoading, setIsLoading] = useState(true);

 
useEffect(()=>{
  setTimeout(() => {
    // finsihed fetching data
    setIsLoading(false)
  }, 4000)
}, [])
 if(isLoading){
  return <h2>Loading ...</h2>
 }
  return (
    <div>
      <h1>Conditional Rendering in React</h1>
    </div>
  )
}
export default ConditionalRendering;