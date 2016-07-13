export default class {
    // @constructor
    constructor(canvas, size, options) {
            if (!canvas) {
                console.log('Invalid params');
                return;
            }
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.size = ((params) => {
                if (params && params.width && params.height) {
                    return Object.assign({}, {
                        width: params.width,
                        height: params.height
                    });
                } else {
                    let _style = window.getComputedStyle(canvas.parentNode);
                    return Object.assign({}, {
                        width: parseInt(_style.width),
                        height: parseInt(_style.height)
                    });
                }
            })(size);
            this.options = Object.assign({}, options);
            this.config();
            this.gradLine_outer = this.ctx.createLinearGradient(this.arcs.outer.grad.start.x, this.arcs.outer.grad.start.y, this.arcs.outer.grad.end.x, this.arcs.outer.grad.end.y);
            this.gradLine_outer.addColorStop(0, '#84bae2');
            this.gradLine_outer.addColorStop(1, '#809bb0');
            this.gradLine_inner = this.ctx.createLinearGradient(this.arcs.inner.grad.start.x, this.arcs.inner.grad.start.y, this.arcs.inner.grad.end.x, this.arcs.inner.grad.end.y);
            this.gradLine_inner.addColorStop(0, '#315788');
            this.gradLine_inner.addColorStop(1, '#0e3965');
        }
        // 细化配置和参数
    config() {
            let _this = this;
            // 设定画布尺寸
            _this.canvas.width = _this.size.width;
            _this.canvas.height = _this.size.height;
            // 旋转动画计数，用来控制旋转触发边界
            _this.rotateCount = 0;
            // 动画是否在进行的标志位
            _this.aniProcessing = true;
            // canvas绘制动画timer
            _this.aniTimer = null;
            // 绘制完毕之后触发ratate的timer
            _this.stopTimer = null;
            // rotate动画控制间隔的timer
            _this.rotateTimer = null;
            // 基础参数
            _this.baseParams = Object.assign({}, {
                // 圆点坐标
                origin: {
                    x: _this.size.width / 2,
                    y: _this.size.height / 2
                },
                // 最大半径
                radius: Math.min(_this.size.width, _this.size.height) / 2,
                // 角度和弧度换算单位
                rate: Math.PI / 180,
                // 画布高/宽的角度
                angle: Math.atan(_this.size.height / _this.size.width),
                // 绘制阶段每帧绘制的角度
                drawStep: 5,
                // 动画阶段每帧旋转的角度
                rotateStep: 2,
                // 绘制完成的时间间隔
                drawDuration: 270/5*17
            });
            let arc_outer = null,
                arc_inner = null;
            // 外环参数
            arc_outer = {
                // 外圈护短半径
                outerRadius: _this.baseParams.radius * 0.9,
                // 内圈弧度半径
                innerRadius: _this.baseParams.radius * 0.9 * 0.4,
                // 外圈初始角度
                outerAngles: {
                    start: -90,
                    end: -90
                },
                // 内圈初始角度
                innerAngles: {
                    start: 0,
                    end: 270
                },
                // 渐变公式
                grad: {
                    start: {
                        x: _this.size.width / 2 - _this.baseParams.radius * 0.9 * Math.cos(_this.baseParams.angle),
                        y: _this.size.height / 2 - _this.baseParams.radius * 0.9 * Math.sin(_this.baseParams.angle)
                    },
                    end: {
                        x: _this.size.width / 2 + _this.baseParams.radius * 0.9 * Math.cos(_this.baseParams.angle),
                        y: _this.size.height / 2 + _this.baseParams.radius * 0.9 * Math.sin(_this.baseParams.angle)
                    }
                }
            };
            // 内环参数
            arc_inner = {
                outerRadius: _this.baseParams.radius * 0.6,
                innerRadius: _this.baseParams.radius * 0.6 * 0.35,
                outerAngles: {
                    start: -180,
                    end: -180
                },
                innerAngles: {
                    start: 90,
                    end: -180
                },
                grad: {
                    start: {
                        x: _this.size.width / 2 - _this.baseParams.radius * 0.6 * Math.cos(_this.baseParams.angle),
                        y: _this.size.height / 2 - _this.baseParams.radius * 0.6 * Math.sin(_this.baseParams.angle)
                    },
                    end: {
                        x: _this.size.width / 2 + _this.baseParams.radius * 0.6 * Math.cos(_this.baseParams.angle),
                        y: _this.size.height / 2 + _this.baseParams.radius * 0.6 * Math.sin(_this.baseParams.angle)
                    }
                }
            };
            _this.arcs = Object.assign({}, {
                outer: arc_outer,
                inner: arc_inner
            });
        }
        // @method 绘制方法
    draw() {
            let _this = this;
            // ratate animation
            function _rotate() {
                if (_this.arcs.outer.outerAngles.end <= (-720 - _this.rotateCount * 360) && _this.arcs.inner.outerAngles.end >= (450 + _this.rotateCount * 360)) {
                    window.cancelAnimationFrame(_this.aniTimer);
                    _this.aniProcessing = false;
                    if (!_this.rotateTimer) {
                        _this.rotateTimer = setTimeout(function() {
                            if (!_this.aniProcessing) {
                                _this.rotateCount++;
                                _this.aniProcessing = true;
                                clearTimeout(_this.rotateTimer);
                                _this.rotateTimer = null;
                                _this.aniTimer = window.requestAnimationFrame(_rotate);
                            }
                        }, 10000);
                    }
                } else {
                    _this.arcs.outer.outerAngles = Object.assign({}, _this.arcs.outer.outerAngles, {
                        start: _this.arcs.outer.outerAngles.start - _this.baseParams.rotateStep,
                        end: _this.arcs.outer.outerAngles.end - _this.baseParams.rotateStep
                    });
                    _this.arcs.outer.innerAngles = Object.assign({}, _this.arcs.outer.innerAngles, {
                        start: _this.arcs.outer.innerAngles.start - _this.baseParams.rotateStep,
                        end: _this.arcs.outer.innerAngles.end - _this.baseParams.rotateStep
                    });
                    _this.arcs.inner.outerAngles = Object.assign({}, _this.arcs.inner.outerAngles, {
                        start: _this.arcs.inner.outerAngles.start + _this.baseParams.rotateStep,
                        end: _this.arcs.inner.outerAngles.end + _this.baseParams.rotateStep
                    });
                    _this.arcs.inner.innerAngles = Object.assign({}, _this.arcs.inner.innerAngles, {
                        start: _this.arcs.inner.innerAngles.start + _this.baseParams.rotateStep,
                        end: _this.arcs.inner.innerAngles.end + _this.baseParams.rotateStep
                    });
                    _this.drawNextFrame();
                    _this.aniTimer = window.requestAnimationFrame(_rotate);
                }
            }
            if (_this.arcs.outer.outerAngles.end <= -360 && _this.arcs.inner.outerAngles.end >= 90) {
                if (!_this.stopTimer) {
                    window.cancelAnimationFrame(_this.aniTimer);
                    _this.stopTimer = setTimeout(function() {
                        _this.aniTimer = window.requestAnimationFrame(_rotate);
                    }, 3000);
                }
            } else {
                //upgrade outer arcs
                _this.arcs.outer.outerAngles = Object.assign({}, _this.arcs.outer.outerAngles, {
                    end: _this.arcs.outer.outerAngles.end - _this.baseParams.drawStep
                });
                _this.arcs.outer.innerAngles.start = 360 + _this.arcs.outer.outerAngles.end;
                //upgrade inner arcs
                _this.arcs.inner.outerAngles = Object.assign({}, _this.arcs.inner.outerAngles, {
                    end: _this.arcs.inner.outerAngles.end + _this.baseParams.drawStep
                });
                _this.arcs.inner.innerAngles.start = _this.arcs.inner.outerAngles.end;
                _this.drawNextFrame();
            }
            _this.aniTimer = window.requestAnimationFrame(_this.draw.bind(_this));
        }
        // @method 绘制下一帧
    drawNextFrame() {
        let _this = this;
        let _angle_1 = (_this.arcs.outer.outerAngles.start - _this.arcs.outer.outerAngles.end) * _this.baseParams.rate;

        let _angle_2 = (_this.arcs.inner.outerAngles.end - _this.arcs.inner.outerAngles.start) * _this.baseParams.rate;

        this.ctx.clearRect(0, 0, _this.size.width, _this.size.height);
        // draw outer arcs
        this.ctx.beginPath();
        this.ctx.arc(_this.baseParams.origin.x, _this.baseParams.origin.y, _this.arcs.outer.outerRadius, _this.arcs.outer.outerAngles.start * _this.baseParams.rate, _this.arcs.outer.outerAngles.end * _this.baseParams.rate, true);
        this.ctx.arc(_this.baseParams.origin.x, _this.baseParams.origin.y, _this.arcs.outer.innerRadius, _this.arcs.outer.innerAngles.start * _this.baseParams.rate, _this.arcs.outer.innerAngles.end * _this.baseParams.rate, false);
        this.ctx.closePath();
        this.ctx.shadowOffsetX = 1;
        this.ctx.shadowOffsetY = 2;
        this.ctx.shadowBlur = 2;
        this.ctx.shadowColor = "rgba(130,129,129,0.75)";
        this.ctx.fillStyle = this.gradLine_outer;
        this.ctx.fill();
        // draw inner arcs
        this.ctx.beginPath();
        this.ctx.arc(_this.baseParams.origin.x, _this.baseParams.origin.y, _this.arcs.inner.outerRadius, _this.arcs.inner.outerAngles.start * _this.baseParams.rate, _this.arcs.inner.outerAngles.end * _this.baseParams.rate, false);
        this.ctx.arc(_this.baseParams.origin.x, _this.baseParams.origin.y, _this.arcs.inner.innerRadius, _this.arcs.inner.innerAngles.start * _this.baseParams.rate, _this.arcs.inner.innerAngles.end * _this.baseParams.rate, true);
        this.ctx.closePath();
        this.ctx.shadowOffsetX = 1;
        this.ctx.shadowOffsetY = 2;
        this.ctx.shadowBlur = 2;
        this.ctx.shadowColor = "rgba(128,155,176,0.9)";
        this.ctx.fillStyle = this.gradLine_inner;
        this.ctx.fill();
    }
}
