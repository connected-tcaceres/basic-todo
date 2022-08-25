import { PrismaClient } from '@prisma/client';
import { info } from './data';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.deleteMany();
    await prisma.todo.deleteMany();

    await prisma.$queryRaw`delete from sqlite_sequence where name='User'`;
    await prisma.$queryRaw`delete from sqlite_sequence where name='Todo'`;

    for (const dataRow of info) {
      await prisma.user.create({
        data: {
          ...dataRow.user,
          Todo: {
            create: dataRow.todos,
          },
        },
      });
    }
  } catch {
  } finally {
    await prisma.$disconnect();
  }
};

load();
