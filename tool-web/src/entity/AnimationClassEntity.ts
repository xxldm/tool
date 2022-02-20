/**
 * 一组页面切换的动画class
 */
export default class AnimationClassEntity {
  // 进入页面必要class，不允许外部读取、不允许修改
  private readonly _animationInClass: string;
  // 退出页面必要class，不允许外部读取、不允许修改
  private readonly _animationOutClass: string;
  // 进入页面自定义class，用来自行添加额外的效果
  otherInClass = "";
  // 退出页面自定义class，用来自行添加额外的效果
  otherOutClass = "";

  constructor(animationInClass: string, animationOutClass: string) {
    this._animationInClass = animationInClass;
    this._animationOutClass = animationOutClass;
  }

  get animationInClass(): string {
    return this.otherInClass + " " + this._animationInClass;
  }

  get animationOutClass(): string {
    return this.otherOutClass + " " + this._animationOutClass;
  }
}
