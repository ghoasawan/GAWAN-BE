import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_images')
export class ProductImages {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type:'text', unique: true})
    image_url!: string;

    @ManyToOne(() => Product, (product) => product.images)
    @JoinColumn({name: 'product_id'})
    product!: Product;
}