import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  tel,
  whats,
  plusSquare,
  git,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: 1,
    title: "صفحه اصلی",
    url: "#mainpage",
  },
  {
    id: 2,
    title: "خدمات",
    url: "#service",
  },
  {
    id: 3,
    title: "وبلاگ",
    url: "#weblog",
  },
  {
    id: 4,
    title: "آپشن ها",
    url: "#roadmap",
  },
  {
    id: 5,
    title: "تماس با ما",
    url: "#contact",
  },
  
  {
    id: 6,
    title: "ثبت نام",
    url: "#signup",
    onlyMobile: true,
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "پلی به سوی آینده‌ای نوین",
  "وقتی تکنولوژی به زندگی ما رنگ می‌بخشد",
  " تسهیل فرآیندهای روزمره شما",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "تشخیض صدا",
    text: "تشخیص صدا افراد متعلق به ربات",
   /* date: "May 2023",
    status: "اتمام",*/
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "1",
    title: "آشنا به انواع بازی ها",
    text: "ربات ها جوری برنامه نویسی شده اند که  میتوانند انواع بازی مانند مچ را انجام دهند.",
    /*date: "May 2023",
    status: "progress",*/
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "کمک به امور کاری",
    text: "این ربات‌ها می‌توانند به عنوان دستیارهای شخصی عمل کنند و در انجام کارهایی مشابه سیری به شما کمک کنند. شما می‌توانید با آن‌ها صحبت کنید و سوالات خود را مطرح کنید.",
   /* date: "May 2023",
    status: "اتمام",*/
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "تماس تلفنی",
    text: "بخش شگفت انگیز این ربات ها تماس تلفنی است که شما میتوانید تماس تلفنی بگیرید.",
   /* date: "May 2023",
    status: "progress",*/
    imageUrl: roadmap2,
  },
];

export const collabText =
  " همچنین، این ربات‌ها در مسائل کاری و مدیریتی نیز می‌توانند به شما یاری رسانند و با ارائه مشاوره و اطلاعات مفید، فرآیندهای کاری شما را تسهیل کنند.";

export const collabContent = [
  {
    id: "0",
    title: " ربات‌های ریرا، دستیاران شخصی شما!",
    text: collabText,
  },
  {
    id: "1",
    title: "پاسخگویی به سوالات شما در لحظه.",
  },
  {
    id: "2",
    title: "مشاوره در امور کاری و مدیریتی.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tellegram",
    icon: tel,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "WhatsApp",
    icon: whats,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "git",
    icon: git,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "قیمت پایه",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "قیمت",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "خدمات خانگی",
    text: "با ربات‌های ریرا، از خدماتی همچون نظافت، آشپزی و نگهداری خانه بهره‌مند شوید.خدمات منحصر به فرد ربات‌های ریرا، خانه شما را به محیطی راحت و کارآمد تبدیل می‌کند.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "خدمات اداری",
    text: "ربات‌های ریرا علاوه بر خدمات اصلی خود، قابلیت‌های متنوع دیگری نیز دارند. این ربات‌ها می‌توانند به عنوان دستیارهای شخصی عمل کنند و در انجام کارهایی مشابه سیری به شما کمک کنند. شما می‌توانید با آن‌ها صحبت کنید و سوالات خود را مطرح کنید. ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "خدمات شهری",
    text: "ربات‌های ریرا علاوه بر خدمات اصلی خود، قابلیت‌های متنوع دیگری نیز دارند. این ربات‌ها می‌توانند به عنوان دستیارهای شخصی عمل کنند و در انجام کارهایی مشابه سیری به شما کمک کنند. شما می‌توانید با آن‌ها صحبت کنید و سوالات خود را مطرح کنید. ",    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "خدمات خانگی",
    text: "با ربات‌های ریرا، از خدماتی همچون نظافت، آشپزی و نگهداری خانه بهره‌مند شوید.خدمات منحصر به فرد ربات‌های ریرا، خانه شما را به محیطی راحت و کارآمد تبدیل می‌کند.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "خدمات اداری",
    text: "ربات‌های ریرا علاوه بر خدمات اصلی خود، قابلیت‌های متنوع دیگری نیز دارند. این ربات‌ها می‌توانند به عنوان دستیارهای شخصی عمل کنند و در انجام کارهایی مشابه سیری به شما کمک کنند. شما می‌توانید با آن‌ها صحبت کنید و سوالات خود را مطرح کنید. ",    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "خدمات شهری",
    text: "ربات‌های ریرا علاوه بر خدمات اصلی خود، قابلیت‌های متنوع دیگری نیز دارند. این ربات‌ها می‌توانند به عنوان دستیارهای شخصی عمل کنند و در انجام کارهایی مشابه سیری به شما کمک کنند. شما می‌توانید با آن‌ها صحبت کنید و سوالات خود را مطرح کنید. ",    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
