import { get, post } from "@/uitls/axios.js";
import qs from "qs";

/* 登录 */
export function login_API(params) {
   return post("/club-management/app/login", params);
}

/**注册 */
export function signIn_API(params) {
   return post("/club-management/app/register", params);
}

/**获取系别 */
export function getInstitutes_API() {
   return get("/club-management/sys/config/institutes")
}

/**获取班级 */
export function getclass_API(params) {
   console.log(params);
   return get("/club-management/sys/config/class/list", params)
}

/**获取信息 */
export function getUserInfo_API(params) {
   return post(`/club-management/app/account/applet/info`, qs.stringify(params));
}

/**获取社团信息 */
export function getClubInfo_API(params) {
   return post(`/club-management/api/club/applet/info/${params}`);
}

/**获取专业和类别 */
export function getTypeAndInstitute_API() {
   return get("/club-management/api/club/applet/club-type-institute");
}

/**加入社团 */
export function joinInClub_API(params) {
   return post("/club-management/api/clubapply/applet/add", qs.stringify(params));
}

/**获取活动信息 */
export function getActivityInfo_API(params) {
   return get(`/club-management/api/activity/applet/info/${params}`)
}

/**申请参加活动 */
export function joinInActivity_API(params) {
   return post("/club-management/api/activityapply/applet/add", qs.stringify(params));
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

/**已参加的活动 */
export function getJoinedActivity_API(params) {
   return post("/club-management/api/activity/applet/already/join", qs.stringify(params));
}

/**未审核的活动 */
export function getAuditActivity_API(params) {
   return post("/club-management/api/activity/applet/not/audit", qs.stringify(params));
}

/**已拒绝的活动 */
export function getEndActivity_API(params) {
   return post("/club-management/api/activity/applet/already/refuse", qs.stringify(params));
}

/**已加入的社团 */
export function getJoinedClub_API(params) {
   return post("/club-management/api/club/applet/already/join", qs.stringify(params));
}

/**未审核的社团 */
export function getAuditClub_API(params) {
   return post("/club-management/api/club/applet/not/audit", qs.stringify(params));
}

/**已拒绝的社团 */
export function getEndClub_API(params) {
   return post("/club-management/api/club/applet/already/refuse", qs.stringify(params));
}
