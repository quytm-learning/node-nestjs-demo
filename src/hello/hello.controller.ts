import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Req, Res } from '@nestjs/common';

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

}
