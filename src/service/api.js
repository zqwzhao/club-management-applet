import { get, post } from "@/uitls/axios.js";


/* 登录 */
export function login_API(params) {
   return post("/club-management/app/login", params);
}

/**注册 */
export function signIn_API(params) {
   return post("/club-management/app/register", params);
}

/**获取信息 */
export function getUserInfo_API() {
   return post("/club-management/app/get");
}

/**获取社团信息 */
export function getClubInfo_API(params) {
   return
}

/**获取轮播图 */
export function getSwiperListAPI() {
   return get("/club-management/api/slide/applet/list");
}

/**获取活动列表 */
export function getNewsListAPI(params) {
   return get("/club-management/api/activity/applet/page", params)
}

/**获取社团列表 */
export function getClubListAPI(params) {
   return get("/club-management/api/club/applet/page", params)
}


