import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            inject:[ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get<string>('CONNECTION_STRING'),
                entities: [],
                synchronize: true,
            }),
        }),
    ],
})
export class DatabaseModule {}