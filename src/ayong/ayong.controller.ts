import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  Delete,
  Headers,
  Request,
  Query,
  Res,
  Req, Session, Inject
} from "@nestjs/common";
import { AyongService } from "./ayong.service";
import { UpdateAyongDto } from "./dto/update-ayong.dto";
import { CaptchaObj } from "svg-captcha";

interface UserDto {
  name: string;
}

@Controller({
  path: "ayong",
  version: "1"
})
export class AyongController {
  constructor(private readonly ayongService: AyongService) {
  }

  @Get("code")
  createCode(@Req() req, @Res() res) {
    const code: CaptchaObj = this.ayongService.createCode();

    /** 设置响应头 **/
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Content-Type", "image/svg+xml");

    /** !!! 设置后端的session 为了后端接口使用 @Session()读取 设置的Session**/
    req.session.code = code.text;

    /**  设置前端cookie**/
    res.cookie("captcha", code.text, { httpOnly: true });
    res.type("image/svg+xml");
    res.send(code);
  }

  @Post("verify")
  verify(@Headers("cookie") cookie, @Session() session) {
    console.log(cookie, session);
  }

  @Get("test/:id")
  findAll(@Param() id) {
    return this.ayongService.findAll(id);
  }

  @Post("qwer")
  @HttpCode(401)
  postTest(@Body() req, @Headers("cookie") cookie) {
    return this.ayongService.postOne(req, cookie);
  }


  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAyongDto: UpdateAyongDto) {
    return this.ayongService.update(+id, updateAyongDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ayongService.remove(+id);
  }

}
