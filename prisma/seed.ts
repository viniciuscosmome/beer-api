import { PrismaClient } from '@prisma/client';

type iSaveRole = {
  id: number;
  level: string;
};

const service = new PrismaClient();
const roleLevels: Array<iSaveRole> = [
  {
    id: 1,
    level: 'USER',
  },
  {
    id: 2,
    level: 'ADMIN',
  },
];

const saveRole = async ({ id, level }: iSaveRole) => {
  await service.roles.upsert({
    where: {
      id,
    },
    update: {},
    create: {
      id,
      level,
    },
  });
};

const seed = async () => {
  for await (const role of roleLevels) {
    await saveRole(role);
  }
};

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await service.$disconnect();
  });
