`use client`;
import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function prismaExample() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     // name: 'Elliott???',
  //     email: 'xelliottx@example-user.com',
  //     password: 'xx'
  //   },
  // });
 
  const users = await prisma.user.findMany();
  return (<div>
    {
      users.map(user => (
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.email}</div>
        </div>
      ))
    }
    
  </div>)
}