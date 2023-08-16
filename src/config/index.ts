import {DynamicModule, Global, MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";


const counten = {
    provide: 'api',
    useValue: {baseName: 'ayong666'}
}


@Global()
@Module({
    providers: [counten],
    exports: [
        counten
    ]
})
export class Config {
    static forRot(res: { [key: string]: string }): DynamicModule {
        return {
            module: Config,
            providers: [{
                provide: 'api',
                useValue: {baseName: 'ayong666' + res?.name}
            }],
            exports: [
                {
                    provide: 'api',
                    useValue: {baseName: 'ayong666' + res?.name}
                }
            ]


        }
    }

}
