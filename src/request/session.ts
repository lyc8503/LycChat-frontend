import {RequestConfig} from "./index";
import {service} from "./service";


export interface GetSessionResponse {
  login: boolean
  username?: string
}

export function getSession(config: RequestConfig = {service: service}): Promise<GetSessionResponse> {
  return config.service.get("/session")
}


export interface PostSessionRequest {
  password: string;
  username: string;
}

export interface PostSessionResponse {
  expires: number;
  token: string;
}


export function postSession(request: PostSessionRequest, config: RequestConfig = {service: service}): Promise<PostSessionResponse> {
  return config.service.post("/session", request)
}
