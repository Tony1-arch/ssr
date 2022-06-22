import React from 'react'
import Users from '.';


export async function getStaticPaths(){
     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
      }))
    
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
      return { paths, fallback: false }

        /*  return {
             paths:[{params : {id: "1"}, },
                    {params : {id: "2"}, },
                    {params : {id: "3"}, },
                    {params : {id: "4"}, },
                    {params : {id: "5"}, },
                    {params : {id: "6"}, },
                    {params : {id: "7"}, },
                    {params : {id: "8"}, },
                    {params : {id: "9"}, },
                    {params : {id: "10"}, },
            ],
             fallback : false   ,
             
         }
 */
} 
export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await res.json();
    
 
        return { props: { user } }
      
}


function User({user}) {
    return (
      <div >
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.address.street}</p>
              
      </div>
    )
    }
    export default User