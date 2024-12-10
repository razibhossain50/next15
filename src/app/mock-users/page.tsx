import { revalidatePath } from "next/cache"
type MockUser = {
    id: number;
    name: string;
  }

export default async function MockUsers(){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    const res = await fetch("https://675821f760576a194d0efb0a.mockapi.io/users")
    const users = await  res.json()

    async function addUser(formData: FormData){
       'use server'
       const name = formData.get("name");
       const res = await fetch("https://675821f760576a194d0efb0a.mockapi.io/users",{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({name})
       });
       const newUser = await res.json()
       revalidatePath("/mock-users")
       console.log(newUser)
    }
    return (
        <>
        <form action={addUser}>
            <input type="text" name="name" required/>
            <button type="submit">submit</button>
        </form>
        <ul>
          {users.map((user:MockUser) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))
          }
        </ul>
        </>
      )
}
