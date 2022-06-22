import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import users from './users/index.js'


 function Home({users}) {
  return (
    <div>
    {/* {users.map((user) => (
        <div key={user.id}>
         <p>{user.name}</p> 
         <p>{user.email}</p>
         <p>{user.address.street}</p>
         
        </div>
      ))} */}
      <Link href='/users'>users Page</Link>
   </div>
  )
 }

/* export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()


return{
  props : { users:data},
}
} */
 
 export default Home;