import { Module } from "@nestjs/common";
import { AyongService } from "./ayong.service";
import { AyongController } from "./ayong.controller";

@Module({
  controllers: [AyongController],
  providers: [AyongService]
})
export class AyongModule {
}
