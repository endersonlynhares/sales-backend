import {Injectable} from '@nestjs/common';
import {User} from "./interfaces/user.interface";
import {CreateUserDto} from "./dtos/createUser.dto";
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
    async createUser(createUserDto: CreateUserDto): Promise<User> {

        const saltOrRounds: number = 10
        const passHashed = await bcrypt.hash(createUserDto.password, saltOrRounds)

        return {
            ...createUserDto,
            id: 1
        }
    }
}
