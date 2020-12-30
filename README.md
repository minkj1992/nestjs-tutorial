# nestjs-tutorial

## 1. 환경 세팅

```bash
# 프로젝트 ..에서 타입할 것
npm new nestjs-tutorial
nest g co cats

# https://github.com/typestack/class-validator#validation-decorators
# for dto validation
npm i class-validator

# https://docs.nestjs.com/techniques/serialization
# serialization(before return Response)
# 필드 exclude등 유용하게 활용
npm i class-transformer

# import { Request } from 'express';
# Request object를 세부적으로 다루기 위해 필요
npm i @types/express


# DTO 재사용
npm i @nestjs/mapped-types

# CRUD (RestAPI, GraphQL 모두 핸들링)
nest g resource movies
```

.git .gitignore등을 생성해주기 때문에 git repo 프로젝트를 연결해주는 방향으로 생성하자

## controller

> https://docs.nestjs.com/controllers

- request handler가 JavaScript 객체 또는 배열을 반환 할 때 자동으로 JSON으로 직렬화
- primitive 타입은 값 그자체로 활용
- In order to take advantage of express typings (as in the request: Request parameter example above), install @types/express package.
- req/res

```ts
import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() req: Request): string {
    return 'all cats';
  }
}
```
