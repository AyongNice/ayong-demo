import { Headers, Injectable, NestMiddleware, Param } from "@nestjs/common";
import { CreateAyongDto } from "./dto/create-ayong.dto";
import { UpdateAyongDto } from "./dto/update-ayong.dto";
//yarn add svg-captcha
import * as svgCode from "svg-captcha";
import { CaptchaObj } from "svg-captcha";
import * as session from "express-session";
import { Request, Response, NextFunction } from "express";

interface Param {
  [key: string]: string;
}

@Injectable()
export class AyongService {


  createCode(): CaptchaObj {
    return svgCode.create({
      size: 4,
      fontSize: 50,
      width: 100,
      background: "#89cef3"
    });

  }

  findAll(id: Param) {
    return { code: 200, msg: `关注:阿勇学前端${JSON.stringify(id)}` };
  }


  postOne(req: Body, cookie: string) {
    console.log("cookie--", cookie);
    return { code: 200, msg: `This action returns a #${JSON.stringify(req)} ${JSON.stringify(1)} ayongpostOne` };
  }

  update(id: number, updateAyongDto: UpdateAyongDto) {
    return `This action updates a #${id} ayongupdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} ayongremove`;
  }
}
