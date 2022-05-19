import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid'
import path from 'path';
import * as fs from 'fs'


@Injectable()
export class FilesService {

  async createFile(file): Promise<string> {
    try {
      const filename = uuid.v4() + '.jpg'
      const filePath = path.resolve(__dirname, '..', 'static')
      if(!fs.existsSync(filePath)){
        // @ts-ignore
        fs.mkdir(filePath, {recursive: true})
      }
      fs.writeFileSync(path.join(filePath, filename), file.buffer)

      return filename
    } catch (e) {
      throw new HttpException('Exception during capturing file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
