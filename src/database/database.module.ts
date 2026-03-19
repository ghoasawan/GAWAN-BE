import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  ConfigService } from '@nestjs/config';


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            inject:[ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres', // or 'mysql'
                url: configService.get<string>('CONNECTION_STRING'),
                password: configService.get<string>('DB_PASSWORD'),
                username: configService.get<string>('DB_USERNAME'),
                database: configService.get<string>('DB_DATABASE'),
                entities: [],
                synchronize: true,
            }),
        }),
    ],
})
export class DatabaseModule {}