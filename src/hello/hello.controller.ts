import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Render, Req, Res } from '@nestjs/common';
import { resolve } from 'path';


@Controller('hello')
export class HelloController {

  @Get()
  @HttpCode(204)
  helloAll(@Req() req) {
    return `Hello all`;
  }

  @Post('/:name')
  // @Header('ContentType', 'application/json')
  postHello(@Body() body, @Param() params, @Query() queries, @Res() res) {
    // return `Post hello ${params.name}, optional = ${JSON.stringify(queries)}, with body = ${JSON.stringify(body)}`;
    res.json(body);
  }

  @Get('/views')
  getViews(@Res() res) {
    res.sendFile(resolve(__dirname + '/../views/hello.html'));
  }

  @Get('/avatar')
  getAvatar(@Res() res) {
    res.sendFile(resolve(__dirname + '/../views/ava.jpg'));
  }

  @Get('/xmind')
  getXmindFile(@Res() res) {
    res.sendFile(resolve(__dirname + '/../views/Hisendy.xmind'));
  }

}
