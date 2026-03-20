import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import {Category} from './category.entity';
import { ProductImages } from './productImages.entity';


@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type:'text', unique: true})
    name!: string;

    @Column({type:'text', nullable: true})
    description!: string;

    @Column({type:"int", default: 0})
    price!: number;

    @Column({type:'text', unique: true})
    slug!: string;

    @Column({type:'int'})
    quantity!: number;

    @Column({type:"int", nullable: true, default: 0})
    sold!: number;

    @ManyToOne(() => Category, (category) => category.products,{eager: true})
    @JoinColumn({name: 'category_id'})
    category!: Category;

    @OneToMany(() => ProductImages, (productImages) => productImages.product)
    images!: ProductImages[];

    @UpdateDateColumn()
    updatedAt!: Date;

    @CreateDateColumn()
    createdAt!: Date;
}