import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: false, default: ""})
    subtitle: string;

    @Prop({ type: [String], required: true })
    authors: string[];

    @Prop({ required: true })
    genre: string;

    @Prop({ required: false, default: 1 })
    edition: number;

    @Prop({ required: false, default: 'English' })
    language: string;

    @Prop({ required: false, default: null })
    isbn: string;

    @Prop({ required: false, default: null })
    ddc: string;

    @Prop({ required: false, default: null })
    coverUrl: string;

    @Prop({ required: false, default: null })
    description: string;

    @Prop({ required: false, default: null })
    numPages: number;

    @Prop({ type: [String], required: false, default: [] })
    tags: string[];

    @Prop({ required: false, default: null })
    year: number;

    @Prop({ required: false, default: false })
    available: boolean;

    @Prop({ required: false, default: false })
    isRead: boolean;

    @Prop({ required: false, default: 0 })
    numRead: number;

    @Prop({ required: false, default: 'undefined' })
    status: string;

}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);
