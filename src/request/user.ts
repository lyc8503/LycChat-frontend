import {RequestConfig} from "./index";
import {backgroundService, service} from "./service";

export interface PostUserRequest {
  email: string;
  nickname: string;
  password: string;
  username: string;
}

export function postUser(request: PostUserRequest, config: RequestConfig = {service: service}): Promise<undefined> {
  return config.service.post("/users", request)
}

export interface SearchUserRequest {
  keyword: string;
}

export interface UserVO {
  username: string;
}

// search users by username
export function searchUser(request: SearchUserRequest, config: RequestConfig = {service: backgroundService}): Promise<UserVO[]> {
  return config.service.get("/users/search/" + request.keyword)
}
