import {RequestConfig} from "./index";
import {service} from "./service";

export interface PostUserRequest {
  email: string;
  nickname: string;
  password: string;
  username: string;
}

export function postUser(request: PostUserRequest, config: RequestConfig = { service: service }): Promise<undefined> {
  return config.service.post("/users", request)
}
