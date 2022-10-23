import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Alice',
    lastName: 'Albuquerque',
    email: 'alice@teste.com',
  },
  {
    firstName: 'Vinicius',
    lastName: 'Rodrigues',
    email: 'vinicius@teste.com',
  },
  {
    firstName: 'Mahmoud',
    email: 'mahmoud@teste.com',
  },
  {
    firstName: 'Kelvin',
    lastName: 'Santos',
    email: 'kelvin@teste.com',
  },
  {
    firstName: 'Mariana',
    email: 'mariana@teste.com',
  },
  {
    firstName: 'Isabele',
    lastName: 'Teixeira',
    email: 'isabele@teste.com',
  },
  {
    firstName: 'Chico',
    lastName: 'Nobrega',
    email: 'chico@teste.com',
  },
  {
    firstName: 'Vincente',
    email: 'vincente@teste.com',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })