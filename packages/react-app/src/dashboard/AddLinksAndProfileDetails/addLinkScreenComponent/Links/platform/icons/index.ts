// import Facebook from "./Facebook.tsx";
// import GitHub from "./GitHub.tsx";
// import LinkedIn from "./LinkedIn.tsx";
// import Twitter from "./Twitter.tsx";
// import YouTube from "./YouTube.tsx";
// import Codepen from "./Codepen.tsx";
// import Codewars from "./Codewars.tsx";
// import DevTo from "./DevTo.tsx";
// import FreeCodeCamp from "./FreeCodeCamp.tsx";
// import FrontendMentor from "./FrontendMentor.tsx";
// import GitLab from "./GitLab.tsx";
// import Hashnode from "./Hashnode.tsx";
// import StackOverflow from "./StackOverflow.tsx";
// import Twitch from "./Twitch.tsx";
//
// export const Icons: Record<string, any> = {
//   Facebook,
//   GitHub,
//   LinkedIn,
//   Twitter,
//   YouTube,
//   Codepen,
//   Codewars,
//   DevTo,
//   FreeCodeCamp,
//   FrontendMentor,
//   GitLab,
//   Hashnode,
//   StackOverflow,
//   Twitch,
// };

import React from "react";

import { default as Facebook } from "./Facebook";
import { default as GitHub } from "./GitHub";
import { default as LinkedIn } from "./LinkedIn";
import { default as Twitter } from "./Twitter";
import { default as YouTube } from "./YouTube";
import { default as Codepen } from "./Codepen";
import { default as Codewars } from "./Codewars";
import { default as DevTo } from "./DevTo";
import { default as FreeCodeCamp } from "./FreeCodeCamp";
import { default as FrontendMentor } from "./FrontendMentor";
import { default as GitLab } from "./GitLab";
import { default as Hashnode } from "./Hashnode";
import { default as StackOverflow } from "./StackOverflow";
import { default as Twitch } from "./Twitch";

export const IconComponents: Record<string, React.FC> = {
  GitHub,
  Twitch,
  DevTo,
  YouTube,
  StackOverflow,
  GitLab,
  Codepen,
  Codewars,
  Facebook,
  Hashnode,
  Twitter,
  FrontendMentor,
  FreeCodeCamp,
  LinkedIn,
};
