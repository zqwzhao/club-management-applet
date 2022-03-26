import { get, post } from "@/uitls/axios.js";

/**获取轮播图 */
export function getSwiperListAPI() {
   return ["https://cdn.uviewui.com/uview/swiper/swiper3.png", "https://cdn.uviewui.com/uview/swiper/swiper2.png", "https://cdn.uviewui.com/uview/swiper/swiper1.png"];
}

/**获取活动列表 */
export function getNewsListAPI() {
   return [
      { img: "https://cdn.uviewui.com/uview/swiper/swiper3.png", title: "第一条活动标题，劲才精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！最多两行内容，轻微加粗", summary: "简介简洁简介内容，这是简介的内容，更小略带透明的字体，超过长度显示为省略号，一个有点长的简介" },
      { img: "https://cdn.uviewui.com/uview/swiper/swiper3.png", title: "第二条活动标题，劲才精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！精彩！最多两行内容，轻微加粗", summary: "简介简洁简介内容，这是简介的内容，更小略带透明的字体，超过长度显示为省略号，一个有点长的简介" },
   ];
}

/**获取社团列表 */
export function getClubListAPI() {
   return [
      { id: "1", name: "社团 1", category: "分类 1", department: "生态系", joinNumber: 10, watchNum: 300, img: "https://cdn.uviewui.com/uview/goods/1.jpg" },
      { id: "2", name: "社团 2", category: "分类 2", department: "生态系", joinNumber: 11, watchNum: 301, img: "https://cdn.uviewui.com/uview/goods/2.jpg" },
      { id: "1", name: "社团 3", category: "分类 3", department: "生态系", joinNumber: 12, watchNum: 302, img: "https://cdn.uviewui.com/uview/goods/6.jpg" },
      { id: "2", name: "社团 4", category: "分类 4", department: "生态系", joinNumber: 13, watchNum: 303, img: "https://cdn.uviewui.com/uview/goods/5.jpg" },
      { id: "1", name: "社团 5", category: "分类 5", department: "生态系", joinNumber: 14, watchNum: 304, img: "https://cdn.uviewui.com/uview/goods/2.jpg" },
      { id: "2", name: "社团 6", category: "分类 6", department: "生态系", joinNumber: 15, watchNum: 305, img: "https://cdn.uviewui.com/uview/goods/3.jpg" },
      { id: "1", name: "社团 7", category: "分类 7", department: "生态系", joinNumber: 16, watchNum: 306, img: "https://cdn.uviewui.com/uview/goods/4.jpg" },
      { id: "2", name: "社团 8", category: "分类 8", department: "生态系", joinNumber: 17, watchNum: 307, img: "https://cdn.uviewui.com/uview/goods/1.jpg" },
   ];
}

/**获取社团信息 */
export function getClubInfoAPI(params) {
   const { id } = params;
   if (id === "1") {
      return {
         id: "1",
         img: "",
         name: "社团 1",
         category: "分类 1",
         department: "生态系",
         joinNumber: 10,
         watchNum: 300,
         introduce:
            "摄影协会是在校团委领导下的学生社团之一，成立于1986年，在成长的过程中，始终坚持“团结，进取，求实，创新”的宗旨，历年均与高分被评为“一级协会”，“十佳社团”。在1998年，在广东省大学生摄影比赛中获得“一、二、三”等奖，两个优秀奖，会员作品在《中国青年报》、《南方日报》、《西江日报》、《高腰报》以及校级刊物发表，共达200多幅。在2004年3月，率先在学校众多的社团中成为首批社团党支部的协会、成为名副其实的老牌社团。在2005年4月，被共青团中央，金国学联、教育部评为全国高校“优秀学生社团”，七月，摄影协会党支部被评为“优秀基层党组织”。2006年5月，在新图书馆一楼举行为期一星期的“二十周年作品展”活动，同月，举行了由肇庆美伦公司赞助的“香车丽人”摄影大赛。2007年6月，在广东省首届大学生动漫设计与摄影比赛中获得一、二、三等奖；七月，与中国邮政合作举行了“寻找DIY高手”明信片制作大赛。12月，在广东第二届广东大学生校园文化艺术节之摄影大赛中获得2个二等奖，3个优秀将，2个最佳技术运用奖。2008年4月，在摄影名家TCL副董事长郑传烈及其夫人黄妙真女士鼎立支持下举行了青春畅想“郑传烈、黄妙真”杯摄影创作比赛，收集了456幅512张作品，并且聘请了黄妙真女士为摄影社会顾问和指导老师。2008年10月，举行了“留住这一刻”08级新生军训摄影创作大赛，并评出了一、二、三等奖及优秀奖。2008年11月，与汽车爱好者协会举行了题为“与你相约08广州国际汽车展摄影展（摄影大赛）同月，再举行了由国美电器赞助的“金秋校园，摄影情怀”系列摄影展活动。2008年12月，受学校邀请，到“第三届学生代表与团委代表现场拍现场拍照活动。同月，协助西江记者站采访本年度的自强之星。摄影协会现拥有独立的暗房和先进的专业设备收藏了大量的摄影文献资料，此外，摄协还拥有自己的会刊《大学生摄影》，至今已成功发行了十五期，现已并入《肇庆学院青年》报。留住瞬间相遇的幸福，追求多姿多彩的人生！摄影协会将为你提供翱翔的蓝天，摄影协会将是你最佳的选择，摄影协会期待着你的加入。不要再犹豫了，心动不如行动，赶快加入摄协这个温馨的大家庭！",
      };
   } else if (id === "2") {
      return {
         id: "2",
         img: "",
         name: "社团 2",
         category: "分类 2",
         department: "生态系",
         joinNumber: 12,
         watchNum: 451,
         introduce:
            "社团2协会是在校团委领导下的学生社团之一，在成长的过程中，始终坚持“团结，进取，求实，创新”的宗旨，历年均与高分被评为“一级协会”，“十佳社团”。在1998年，在广东省大学生摄影比赛中获得“一、二、三”等奖，两个优秀奖，会员作品在《中国青年报》、《南方日报》、《西江日报》、《高腰报》以及校级刊物发表，共达200多幅。在2004年3月，率先在学校众多的社团中成为首批社团党支部的协会、成为名副其实的老牌社团。在2005年4月，被共青团中央，金国学联、教育部评为全国高校“优秀学生社团”，七月，摄影协会党支部被评为“优秀基层党组织”。2006年5月，在新图书馆一楼举行为期一星期的“二十周年作品展”活动，同月，举行了由肇庆美伦公司赞助的“香车丽人”摄影大赛。2007年6月，在广东省首届大学生动漫设计与摄影比赛中获得一、二、三等奖；七月，与中国邮政合作举行了“寻找DIY高手”明信片制作大赛。12月，在广东第二届广东大学生校园文化艺术节之摄影大赛中获得2个二等奖，3个优秀将，2个最佳技术运用奖。2008年4月，在摄影名家TCL副董事长郑传烈及其夫人黄妙真女士鼎立支持下举行了青春畅想“郑传烈、黄妙真”杯摄影创作比赛，收集了456幅512张作品，并且聘请了黄妙真女士为摄影社会顾问和指导老师。2008年10月，举行了“留住这一刻”08级新生军训摄影创作大赛，并评出了一、二、三等奖及优秀奖。2008年11月，与汽车爱好者协会举行了题为“与你相约08广州国际汽车展摄影展（摄影大赛）同月，再举行了由国美电器赞助的“金秋校园，摄影情怀”系列摄影展活动。2008年12月，受学校邀请，到“第三届学生代表与团委代表现场拍现场拍照活动。同月，协助西江记者站采访本年度的自强之星。摄影协会现拥有独立的暗房和先进的专业设备收藏了大量的摄影文献资料，此外，摄协还拥有自己的会刊《大学生摄影》，至今已成功发行了十五期，现已并入《肇庆学院青年》报。留住瞬间相遇的幸福，追求多姿多彩的人生！摄影协会将为你提供翱翔的蓝天，摄影协会将是你最佳的选择，摄影协会期待着你的加入。不要再犹豫了，心动不如行动，赶快加入摄协这个温馨的大家庭！",
      };
   }
}
