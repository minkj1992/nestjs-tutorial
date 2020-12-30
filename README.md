# nestjs-tutorial

## Why nestjs?

- typescript(권장), js도 가능 (타입스크립트 세팅 틀 지원)
- Django 처럼 cli로 틀 찍어내기 가능 (ex nest g cotroller <이름>)
- Http 플랫폼 독립적 (express and fastify 사용 가능하며, express 디폴트)
- 다른 nodejs 프레임워크와 달리, 디자인 패턴 강요(IoC, DI) -> 장점이 될수도 있지만, 상대적으로 낮은 자유도, 높은 러닝커브
- CRUD generator 제공 (graphQL, REST, WebSocket 선택가능)
- dto validation / serializer 제공
- unit 테스트 default로 scaffold(di mocking, Jest default)
- health-check 제공 (readiness / liveness health checks)
- Prisma 호환
- 미치도록 친절하고 자세한 문서 ..

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
