import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let fakeUserService: Partial<UserService>;

  beforeEach(async () => {
    fakeUserService = {
      create: (createUserDto: CreateUserDto) =>
        Promise.resolve({
          id: 1,
          ...createUserDto,
        } as User),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: fakeUserService,
        },
      ],
    }).compile();

    controller = module.get(UserController);
  });

  it('can create an instance of the user controller', () => {
    expect(controller).toBeDefined();
  });

  it('create - creates a user with the given info', async () => {
    const user = await controller.create({
      email: 'email@email.com',
      username: 'username',
    });
    expect(user).toBeDefined();
  });
});
