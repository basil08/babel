import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {

  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ) {}

  async create(createBookDto: CreateBookDto) {

    const {
      title,
      subtitle,
      authors,
      genre,
      edition,
      language,
      isbn,
      ddc,
      publisher,
      coverUrl,
      description,
      numPages,
      tags,
      year,
      available,
      isRead,
      numRead,
      status
    } = createBookDto;

    const maybe = await this.bookModel.findOne({ title: title });

    if (maybe) {
      return -1;
    }

    const authorsArray = authors.split(",").map(t => t.trim());
    const tagsArray = tags.split(",").map(t => t.trim());

    const newBook = new this.bookModel({
      title,
      subtitle,
      authors: authorsArray,
      publisher,
      genre,
      edition,
      language,
      isbn,
      ddc,
      coverUrl,
      description,
      numPages,
      tags: tagsArray,
      year,
      available,
      isRead,
      numRead,
      status
    });

    return newBook.save();
  }

  async findAll() {
    return await this.bookModel.find();
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, updateBookDto);
  }

  async remove(id: string) {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
