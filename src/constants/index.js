import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["About", "The Experience", "Support"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Experience the ultimate audio performance.",
        "Enter Nebulox.",
        "Unmatched sound clarity.",
        
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Advanced Noise Cancelling.", "Immerse yourself in pure sound."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Nebulox headphones offer",
      "the deepest bass and",
      "crystal-clear highs. Feel the music.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["Customizable Sound Profiles.", "Personalize your audio experience."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Nebulox Original",
      color: ["#9BB9BF", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
      price: 199
    },
    {
      id: 2,
      title: "Nebulox in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
      price: 299
    },
    {
      id: 3,
      title: "Nebulox in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
      price: 299
    },
    {
      id: 4,
      title: "Nebulox in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
      price: 199
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];