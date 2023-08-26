// custom-msg.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CustomMsg = createParamDecorator((data: string, ctx: ExecutionContext) => {
    // 在业务方法的参数中返回自定义消息（如果未提供则返回默认消息）
    return data || 'Default custom message';
});
