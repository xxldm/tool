import AnimationClassEntity from "@/entity/AnimationClassEntity";
import { getRandomInt } from "element-plus/lib/utils/rand";

const animations: ReadonlyArray<AnimationClassEntity> = [
  new AnimationClassEntity("pt-page-moveFromRight", "pt-page-moveToLeft"),
  new AnimationClassEntity("pt-page-moveFromLeft", "pt-page-moveToRight"),
  new AnimationClassEntity("pt-page-moveFromBottom", "pt-page-moveToTop"),
  new AnimationClassEntity("pt-page-moveFromTop", "pt-page-moveToBottom"),
  new AnimationClassEntity(
    "pt-page-moveFromRight pt-page-ontop",
    "pt-page-fade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeft pt-page-ontop",
    "pt-page-fade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottom pt-page-ontop",
    "pt-page-fade"
  ),
  new AnimationClassEntity("pt-page-moveFromTop pt-page-ontop", "pt-page-fade"),
  new AnimationClassEntity(
    "pt-page-moveFromRightFade",
    "pt-page-moveToLeftFade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeftFade",
    "pt-page-moveToRightFade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottomFade",
    "pt-page-moveToTopFade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromTopFade",
    "pt-page-moveToBottomFade"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromRight",
    "pt-page-moveToLeftEasing pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeft",
    "pt-page-moveToRightEasing pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottom",
    "pt-page-moveToTopEasing pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromTop",
    "pt-page-moveToBottomEasing pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromRight pt-page-ontop",
    "pt-page-scaleDown"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeft pt-page-ontop",
    "pt-page-scaleDown"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottom pt-page-ontop",
    "pt-page-scaleDown"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromTop pt-page-ontop",
    "pt-page-scaleDown"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUpDown pt-page-delay300",
    "pt-page-scaleDown"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp pt-page-delay300",
    "pt-page-scaleDownUp"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp",
    "pt-page-moveToLeft pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp",
    "pt-page-moveToRight pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp",
    "pt-page-moveToTop pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp",
    "pt-page-moveToBottom pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUpCenter pt-page-delay400",
    "pt-page-scaleDownCenter"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromRight pt-page-delay200 pt-page-ontop",
    "pt-page-rotateRightSideFirst"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop",
    "pt-page-rotateLeftSideFirst"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromTop pt-page-delay200 pt-page-ontop",
    "pt-page-rotateTopSideFirst"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop",
    "pt-page-rotateBottomSideFirst"
  ),
  new AnimationClassEntity(
    "pt-page-flipInLeft pt-page-delay500",
    "pt-page-flipOutRight"
  ),
  new AnimationClassEntity(
    "pt-page-flipInRight pt-page-delay500",
    "pt-page-flipOutLeft"
  ),
  new AnimationClassEntity(
    "pt-page-flipInBottom pt-page-delay500",
    "pt-page-flipOutTop"
  ),
  new AnimationClassEntity(
    "pt-page-flipInTop pt-page-delay500",
    "pt-page-flipOutBottom"
  ),
  new AnimationClassEntity(
    "pt-page-scaleUp",
    "pt-page-rotateFall pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateInNewspaper pt-page-delay500",
    "pt-page-rotateOutNewspaper"
  ),
  new AnimationClassEntity("pt-page-moveFromRight", "pt-page-rotatePushLeft"),
  new AnimationClassEntity("pt-page-moveFromLeft", "pt-page-rotatePushRight"),
  new AnimationClassEntity("pt-page-moveFromBottom", "pt-page-rotatePushTop"),
  new AnimationClassEntity("pt-page-moveFromTop", "pt-page-rotatePushBottom"),
  new AnimationClassEntity(
    "pt-page-rotatePullRight pt-page-delay180",
    "pt-page-rotatePushLeft"
  ),
  new AnimationClassEntity(
    "pt-page-rotatePullLeft pt-page-delay180",
    "pt-page-rotatePushRight"
  ),
  new AnimationClassEntity(
    "pt-page-rotatePullBottom pt-page-delay180",
    "pt-page-rotatePushTop"
  ),
  new AnimationClassEntity(
    "pt-page-rotatePullTop pt-page-delay180",
    "pt-page-rotatePushBottom"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromRightFade",
    "pt-page-rotateFoldLeft"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromLeftFade",
    "pt-page-rotateFoldRight"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromBottomFade",
    "pt-page-rotateFoldTop"
  ),
  new AnimationClassEntity(
    "pt-page-moveFromTopFade",
    "pt-page-rotateFoldBottom"
  ),
  new AnimationClassEntity(
    "pt-page-rotateUnfoldLeft",
    "pt-page-moveToRightFade"
  ),
  new AnimationClassEntity(
    "pt-page-rotateUnfoldRight",
    "pt-page-moveToLeftFade"
  ),
  new AnimationClassEntity(
    "pt-page-rotateUnfoldTop",
    "pt-page-moveToBottomFade"
  ),
  new AnimationClassEntity(
    "pt-page-rotateUnfoldBottom",
    "pt-page-moveToTopFade"
  ),
  new AnimationClassEntity(
    "pt-page-rotateRoomLeftIn",
    "pt-page-rotateRoomLeftOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateRoomRightIn",
    "pt-page-rotateRoomRightOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateRoomTopIn",
    "pt-page-rotateRoomTopOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateRoomBottomIn",
    "pt-page-rotateRoomBottomOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCubeLeftIn",
    "pt-page-rotateCubeLeftOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCubeRightIn",
    "pt-page-rotateCubeRightOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCubeTopIn",
    "pt-page-rotateCubeTopOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCubeBottomIn",
    "pt-page-rotateCubeBottomOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCarouselLeftIn",
    "pt-page-rotateCarouselLeftOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCarouselRightIn",
    "pt-page-rotateCarouselRightOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCarouselTopIn",
    "pt-page-rotateCarouselTopOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateCarouselBottomIn",
    "pt-page-rotateCarouselBottomOut pt-page-ontop"
  ),
  new AnimationClassEntity(
    "pt-page-rotateSidesIn pt-page-delay200",
    "pt-page-rotateSidesOut"
  ),
  new AnimationClassEntity("pt-page-rotateSlideIn", "pt-page-rotateSlideOut"),
];

export function getAnimationClassByNum(
  animationNum: number,
  otherInClass: string,
  otherOutClass: string
): AnimationClassEntity {
  const animationClass = animations[animationNum];
  animationClass.otherInClass = otherInClass;
  animationClass.otherOutClass = otherOutClass;
  return animationClass;
}

export function getRandomAnimationClass(
  otherInClass: string,
  otherOutClass: string
): AnimationClassEntity {
  return getAnimationClassByNum(
    getRandomInt(animations.length),
    otherInClass,
    otherOutClass
  );
}
