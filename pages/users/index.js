import React from 'react'
import Link from 'next/link'
 function Users({users}) {
  return (
    <div >
   { users.map((user) => (
      <div  key={user.id} >
         <Link href={`/users/${user.id}` }><p>{user.name}</p></Link>
      </div>
   ))}
   </div>
  )
 }


 export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()


return{
  props : { users:data},
}
}
 
 export default Users