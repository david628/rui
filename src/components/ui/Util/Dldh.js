var Dldh = {
  isOpera: navigator.userAgent.toLowerCase().indexOf("opera") > -1,
  isSafari: (/webkit|khtml/).test(navigator.userAgent.toLowerCase()),
  isGecko: !(/webkit|khtml/).test(navigator.userAgent.toLowerCase()) && navigator.userAgent.toLowerCase().indexOf("gecko") > -1,
  isAir: (/adobeair/).test(navigator.userAgent.toLowerCase()),
  isIE: navigator.userAgent.toLowerCase().indexOf("msie") > -1,
  getDom: function(el) {
    if(!el) return null;
    return el.get ? el.get(0) : (typeof el == "string" ? document.getElementById(el) : el);
  },
  preanim: function(a, i) {
    return !a[i] ? false : (typeof a[i] == "object" ? a[i] : {
      duration: a[i + 1],
      callback: a[i + 2],
      easing: a[i + 3]
    });
  },
  addUnits: function(v, defaultUnit) {
    if (v === "" || v == "auto") {
      return v;
    }
    if (v === undefined) {
      return '';
    }
    if (typeof v == "number" || !/\d+(px|em|%|en|ex|pt|in|cm|mm|pc)$/i.test(v)) {
      return v + (defaultUnit || 'px');
    }
    return v;
  },
  Css: {
    hasClass: function(el, className) {
      el = Dldh.getDom(el);
      return className && (' ' + el.className + ' ').indexOf(' ' + className + ' ') != -1;
    },
    addClass : function(el, className){
      if(className instanceof Array) {
        for(var i = 0, len = className.length; i < len; i++) {
          this.addClass(el, className[i]);
        }
      } else {
        if(className && !this.hasClass(el, className)) {
          el.className = el.className + " " + className;
        }
      }
    },
    removeClass : function(el, className) {
      if(!className || !el.className) {
        return;
      }
      if(className instanceof Array) {
        for(var i = 0, len = className.length; i < len; i++) {
          this.removeClass(el, className[i]);
        }
      } else {
        if(this.hasClass(el, className)) {
          el.className = (' ' + el.className + ' ').replace(' ' + className + ' ', ' ');
        }
      }
    },
    getStyle: function(dom, attr){
      return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
    },
    addStyles: function(e, sides, styles) {
      var val = 0, v, w, el = Dldh.getDom(e);
      for (var i = 0, len = sides.length; i < len; i++) {
        v = this.getStyle(el, styles[sides.charAt(i)])
        if (v) {
          w = parseInt(v, 10);
          if (w) {
            val += w;
          }
        }
      }
      return val;
    },
    getBorderWidth: function(el, side) {
      return this.addStyles(el, side, {
        l: "border-left-width",
        r: "border-right-width",
        t: "border-top-width",
        b: "border-bottom-width"
      });
    },
    getPadding: function(el, side) {
      return this.addStyles(el, side, {
        l: "padding-left",
        r: "padding-right",
        t: "padding-top",
        b: "padding-bottom"
      });
    },
    adjustWidth: function(el, width) {
      if (typeof width == "number") {
        width -= (this.getBorderWidth(el, "lr") + this.getPadding(el, "lr"));
        if (width < 0) {
          width = 0;
        }
      }
      return width;
    },
    adjustHeight: function(el, height) {
      if (typeof height == "number") {
        height -= (this.getBorderWidth(el, "tb") + this.getPadding(el, "tb"));
        if (height < 0) {
          height = 0;
        }
      }
      return height;
    },
    setBounds: function(el, x, y, width, height) {
      el = Dldh.getDom(el);
      this.setSize(el, width, height);
      this.setXY(el, [x, y]);
      return el;
    },
    getBox: function(e, contentBox, local) {
      var xy, el = Dldh.getDom(e);
      if (!local) {
        xy = this.getXY(el);
      } else {
        var left = parseInt(this.getStyle(el, "left"), 10) || 0;
        var top = parseInt(this.getStyle(el, "top"), 10) || 0;
        xy = [left, top];
      }
      var w = el.offsetWidth, h = el.offsetHeight, bx;
      if (!contentBox) {
        bx = {
          x: xy[0],
          y: xy[1],
          0: xy[0],
          1: xy[1],
          width: w,
          height: h
        };
      } else {
        var l = this.getBorderWidth(el, "l") + this.getPadding(el, "l");
        var r = this.getBorderWidth(el, "r") + this.getPadding(el, "r");
        var t = this.getBorderWidth(el, "t") + this.getPadding(el, "t");
        var b = this.getBorderWidth(el, "b") + this.getPadding(el, "b");
        bx = {
          x: xy[0] + l,
          y: xy[1] + t,
          0: xy[0] + l,
          1: xy[1] + t,
          width: w - (l + r),
          height: h - (t + b)
        };
      }
      bx.right = bx.x + bx.width;
      bx.bottom = bx.y + bx.height;
      return bx;
    },
    getViewWidth: function(full) {
      return full ? this.getDocumentWidth() : this.getViewportWidth();
    },
    getViewHeight: function(full) {
      return full ? this.getDocumentHeight() : this.getViewportHeight();
    },
    getDocumentHeight: function() {
      var E = (document.compatMode != "CSS1Compat") ? document.body.scrollHeight : document.documentElement.scrollHeight;
      if(Dldh.isSafari) {
        E = document.body.scrollHeight;
      }
      return Math.max(E, this.getViewportHeight());
    },
    getDocumentWidth: function() {
      var E = (document.compatMode != "CSS1Compat") ? document.body.scrollWidth : document.documentElement.scrollWidth;
      if(Dldh.isSafari) {
        E = document.body.scrollWidth;
      }
      return Math.max(E, this.getViewportWidth());
    },
    getViewportHeight: function() {
      var E = this.innerHeight;
      var F = document.compatMode;
      if ((F || Dldh.isIE) && !Dldh.isOpera) {
        E = (F == "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
      }
      return E;
    },
    getViewportWidth: function() {
      var E = this.innerWidth;
      var F = document.compatMode;
      if (F || Dldh.isIE) {
        E = (F == "CSS1Compat") ? document.documentElement.clientWidth : document.body.clientWidth;
      }
      return E;
    },
    getScroll: function(el) {
      el = Dldh.getDom(el);
      if (el == document || el == document.body) {
        var l = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        return {
          left: l,
          top: t
        };
      } else {
        return {
          left: el.scrollLeft,
          top: el.scrollTop
        };
      }
    },
    getXY: function(e) {
      var p,
      pe,
      b,
      bt,
      bl,
      dbd,
      x = 0,
      y = 0,
      scroll,
      hasAbsolute,
      bd = (document.body || document.documentElement),
      ret = [0, 0],
      el = Dldh.getDom(e);
      if (el != bd) {
        if (el.getBoundingClientRect) {
          b = el.getBoundingClientRect();
          scroll = this.getScroll(document);
          ret = [Math.round(b.left + scroll.left), Math.round(b.top + scroll.top)];
        } else {
          p = el;
          hasAbsolute = this.getStyle(el, "position") == "absolute";
          while (p) {
            x += p.offsetLeft;
            y += p.offsetTop;
            hasAbsolute = hasAbsolute || this.getStyle(p, "position") == "absolute";
            if (Dldh.isGecko) {
              y += bt = parseInt(this.getStyle(p, "borderTopWidth"), 10) || 0;
              x += bl = parseInt(this.getStyle(p, "borderLeftWidth"), 10) || 0;
              if (p != el && !this.getStyle(p, 'overflow') == 'visible') {
                x += bl;
                y += bt;
              }
            }
            p = p.offsetParent;
          }
          if (Dldh.isSafari && hasAbsolute) {
            x -= bd.offsetLeft;
            y -= bd.offsetTop;
          }
          if (Dldh.isGecko && !hasAbsolute) {
            x += parseInt(this.getStyle(bd, "borderLeftWidth"), 10) || 0;
            y += parseInt(this.getStyle(bd, "borderTopWidth"), 10) || 0;
          }
          p = el.parentNode;
          while (p && p != bd) {
            if (!Dldh.isOpera || (p.tagName != 'TR' && !this.getStyle(p, "display") == "inline")) {
              x -= p.scrollLeft;
              y -= p.scrollTop;
            }
            p = p.parentNode;
          }
          ret = [x, y];
        }
      }
      return ret;
    },
    setXY: function(el, xy) {
      el = Dldh.getDom(el);
      this.position(el);
      var pts = this.translatePoints(el, xy), style = el.style, pos;
      for (pos in pts) {
        if (!isNaN(pts[pos])) {
          style[pos] = pts[pos] + "px";
        }
      }
    },
    translatePoints: function(e, x, y) {
      var el = Dldh.getDom(e);
      if (typeof x == 'object' || x instanceof Array) {
        y = x[1];
        x = x[0];
      }
      var p = this.getStyle(el, 'position');
      var o = this.getXY(el);
      var l = parseInt(this.getStyle(el, 'left'), 10);
      var t = parseInt(this.getStyle(el, 'top'), 10);
      if (isNaN(l)) {
        l = (p == "relative") ? 0 : el.offsetLeft;
      }
      if (isNaN(t)) {
        t = (p == "relative") ? 0 : el.offsetTop;
      }
      return {
        left: (x - o[0] + l),
        top: (y - o[1] + t)
      };
    },
    position: function(e, pos, zIndex, x, y) {
      var el = Dldh.getDom(e);
      if (!pos) {
        if (this.getStyle(el, 'position') == 'static') {
          el.style.position = 'relative';
        }
      } else {
        el.style.position = pos;
      }
      if (zIndex) {
        el.style.zIndex = zIndex;
      }
      if (x !== undefined && y !== undefined) {
        this.setXY(el, [x, y]);
      } else if (x !== undefined) {
        this.setX(el, x);
      } else if (y !== undefined) {
        this.setY(el, y);
      }
    },
    getAnchorXY: function(el, anchor, local, s) {
      var w, h, vp = false;
      el = Dldh.getDom(el);
      if (!s) {
        if (el == document.body || el == document) {
          vp = true;
          w = this.getViewWidth();
          h = this.getViewHeight();
        } else {
          w = this.getWidth(el);
          h = this.getHeight(el);
        }
      } else {
        w = s.width;
        h = s.height;
      }
      var x = 0, y = 0, r = Math.round;
      switch ((anchor || "tl").toLowerCase()) {
        case "c":
          x = r(w * .5);
          y = r(h * .5);
          break;
        case "t":
          x = r(w * .5);
          y = 0;
          break;
        case "l":
          x = 0;
          y = r(h * .5);
          break;
        case "r":
          x = w;
          y = r(h * .5);
          break;
        case "b":
          x = r(w * .5);
          y = h;
          break;
        case "tl":
          x = 0;
          y = 0;
          break;
        case "bl":
          x = 0;
          y = h;
          break;
        case "br":
          x = w;
          y = h;
          break;
        case "tr":
          x = w;
          y = 0;
          break;
      }
      if (local === true) {
        return [x, y];
      }
      if (vp) {
        var sc = this.getScroll(el);
        return [x + sc.left, y + sc.top];
      }
      var o = this.getXY(el);
      return [x + o[0], y + o[1]];
    },
    getAlignToXY: function(el, pel, p, o) {
      pel = Dldh.getDom(pel);
      if (!pel) {
        throw "Element.alignTo with an element that doesn't exist";
      }
      var c = false, p1 = "", p2 = "";
      el = Dldh.getDom(el);
      o = o || [0, 0];
      if (!p) {
        p = "tl-bl";
      } else if (p == "?") {
        p = "tl-bl?";
      } else if (p.indexOf("-") == -1) {
        p = "tl-" + p;
      }
      p = p.toLowerCase();
      var m = p.match(/^([a-z]+)-([a-z]+)(\?)?$/);
      if (!m) {
        throw "Element.alignTo with an invalid alignment " + p;
      }
      p1 = m[1];
      p2 = m[2];
      c = !!m[3];
      var a1 = this.getAnchorXY(el, p1, true);
      var a2 = this.getAnchorXY(pel, p2, false);
      var x = a2[0] - a1[0] + o[0];
      var y = a2[1] - a1[1] + o[1];
      if (c) {
        var w = this.getWidth(el), h = this.getHeight(el), r = Dldh.lib.Region.getRegion(pel);
        var dw = this.getViewWidth() - 5, dh = this.getViewHeight() - 5;
        var p1y = p1.charAt(0), p1x = p1.charAt(p1.length - 1);
        var p2y = p2.charAt(0), p2x = p2.charAt(p2.length - 1);
        var swapY = ((p1y == "t" && p2y == "b") || (p1y == "b" && p2y == "t"));
        var swapX = ((p1x == "r" && p2x == "l") || (p1x == "l" && p2x == "r"));
        var scrollX = (document.documentElement.scrollLeft || document.body.scrollLeft || 0) + 5;
        var scrollY = (document.documentElement.scrollTop || document.body.scrollTop || 0) + 5;
        if ((x + w) > dw + scrollX) {
          x = swapX ? r.left - w : dw + scrollX - w;
        }
        if (x < scrollX) {
          x = swapX ? r.right : scrollX;
        }
        if ((y + h) > dh + scrollY) {
          y = swapY ? r.top - h : dh + scrollY - h;
        }
        if (y < scrollY) {
          y = swapY ? r.bottom : scrollY;
        }
      }
      return [x, y];
    },
    getCenterXY: function(el) {
      return this.getAlignToXY(el, document, 'c-c');
    },
    alignTo: function(el, element, position, offsets, animate) {
      var xy = this.getAlignToXY(el, element, position, offsets);
      return this.setXY(el, xy, Dldh.preanim(arguments, 3));
    },
    getCenter(el, element) {
      return this.getAlignToXY(el, element, 'c-c');
    },
    center: function(el, centerIn) {
      return this.alignTo(el, centerIn || document, 'c-c');
    },
    getHeight: function(el, contentHeight) {
      el = Dldh.getDom(el);
      var h = el.offsetHeight || 0;
      return contentHeight !== true ? h : h - this.getBorderWidth(el, "tb") - this.getPadding(el, "tb");
    },
    getWidth: function(el, contentWidth) {
      el = Dldh.getDom(el);
      var w = el.offsetWidth || 0;
      return contentWidth !== true ? w : w - this.getBorderWidth(el, "lr") - this.getPadding(el, "lr");
    },
  },
  lib: {}
  //util: {}
  //ui: {}
};
Dldh.lib.Region = function(G, H, E, F) {
  this.top = G;
  this[1] = G;
  this.right = H;
  this.bottom = E;
  this.left = F;
  this[0] = F;
};
Dldh.lib.Region.prototype = {
  contains: function(E) {
    return (E.left >= this.left && E.right <= this.right && E.top >= this.top && E.bottom <= this.bottom);
  },
  getArea: function() {
    return ((this.bottom - this.top) * (this.right - this.left));
  },
  intersect: function(I) {
    var G = Math.max(this.top, I.top);
    var H = Math.min(this.right, I.right);
    var E = Math.min(this.bottom, I.bottom);
    var F = Math.max(this.left, I.left);
    if (E >= G && H >= F) {
      return new Dldh.lib.Region(G, H, E, F);
    } else {
      return null;
    }
  },
  union: function(I) {
    var G = Math.min(this.top, I.top);
    var H = Math.max(this.right, I.right);
    var E = Math.max(this.bottom, I.bottom);
    var F = Math.min(this.left, I.left);
    return new Dldh.lib.Region(G, H, E, F);
  },
  adjust: function(G, F, E, H) {
    this.top += G;
    this.left += F;
    this.right += H;
    this.bottom += E;
    return this;
  }
};
Dldh.lib.Region.getRegion = function(el) {
  el = Dldh.getDom(el);
  var J = Dldh.Css.getXY(el);
  var G = J[1];
  var I = J[0] + el.offsetWidth;
  var E = J[1] + el.offsetHeight;
  var F = J[0];
  return new Dldh.lib.Region(G, I, E, F);
}
// Dldh.lib.Point = function(E, F) {
//   if (E instanceof Array) {
//     F = E[1];
//     E = E[0]
//   }
//   this.x = this.right = this.left = this[0] = E;
//   this.y = this.top = this.bottom = this[1] = F
// };
// Dldh.lib.Point.prototype = new Dldh.lib.Region();
Dldh.Event = {
  bind: function(target, eventType, wrapCallback, option) {
    if(target.addEventListener) {
      target.addEventListener(eventType, wrapCallback, option || false);
    } else if(target.attachEvent) {
      target.attachEvent(`on${eventType}`, wrapCallback);
    }
    return true;
  },
  unbind: function(target, eventType, wrapCallback, option) {
    let useCapture = false;
    if (typeof option === 'object') {
      useCapture = option.capture || false;
    } else if (typeof option === 'boolean') {
      useCapture = option;
    }
    if(target.addEventListener) {
      target.removeEventListener(eventType, wrapCallback, useCapture);
    } else if(target.attachEvent) {
      target.detachEvent(`on${eventType}`, wrapCallback);
    }
    return null;
  }
};
export default Dldh;