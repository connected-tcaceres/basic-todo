import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get(UserService);
    prismaService = module.get(PrismaService);
  });

  afterEach(async () => {
    await prismaService.user.deleteMany();
  });

  it('can create an instance of the user service', () => {
    expect(service).toBeDefined();
  });

  it('creates a new user', async () => {
    const user = await service.create({
      email: 'email@email.com',
      username: 'username',
    });
    expect(user).toBeDefined();
  });
});
