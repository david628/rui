(function(config) {
        var ba = navigator.userAgent.toLowerCase()
            , da = window
            , ea = document
            , ga = ea.documentElement;
        function ka(a) {
            return -1 !== ba.indexOf(a)
        }
        var la = /([a-z0-9]*\d+[a-z0-9]*)/;
        function ma() {
            var a = na;
            if (!a)
                return null;
            var a = a.toLowerCase()
                , b = null;
            if (b = a.match(/angle \((.*)\)/))
                a = b[1],
                    a = a.replace(/\s*direct3d.*$/, "");
            a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
            if (0 <= a.indexOf("intel")) {
                b = ["Intel"];
                0 <= a.indexOf("mobile") && b.push("Mobile");
                (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
                if (0 <= a.indexOf("haswell"))
                    b.push("Haswell");
                else if (0 <= a.indexOf("ivy"))
                    b.push("HD 4000");
                else if (0 <= a.indexOf("sandy"))
                    b.push("HD 3000");
                else if (0 <= a.indexOf("ironlake"))
                    b.push("HD");
                else {
                    0 <= a.indexOf("hd") && b.push("HD");
                    var c = a.match(la);
                    c && b.push(c[1].toUpperCase())
                }
                return b = b.join(" ")
            }
            return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"],
            0 <= a.indexOf("geforce") && b.push("geForce"),
            0 <= a.indexOf("quadro") && b.push("Quadro"),
            0 <= a.indexOf("nvs") && b.push("NVS"),
            a.match(/\bion\b/) && b.push("ION"),
                a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ? b.push("GE") : a.match(/fx\b/) && b.push("FX"),
            (c = a.match(la)) && b.push(c[1].toUpperCase().replace("GS", "")),
                0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"),
                b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"],
            0 <= a.indexOf("mobil") && b.push("Mobility"),
                c = a.indexOf("radeon"),
            0 <= c && b.push("Radeon"),
                0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"),
            0 <= a.indexOf("hd") && b.push("HD"),
            0 <= c && (a = a.substring(c)),
            (c = a.match(la)) && b.push(c[1].toUpperCase().replace("HD", "")),
                b = b.join(" ")) : a.substring(0, 100)
        }
        var oa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";")
            , pa = "ActiveXObject"in da
            , sa = "devicePixelRatio"in da && 1 < da.devicePixelRatio || pa && "matchMedia"in da && da.matchMedia("(min-resolution:144dpi)") && da.matchMedia("(min-resolution:144dpi)").matches
            , ta = ka("windows nt")
            , ua = -1 !== ba.search(/windows nt [1-5]\./)
            , va = -1 !== ba.search(/windows nt 5\.[12]/)
            , wa = ua && !va;
        ka("windows nt 10");
        var xa = ka("windows phone")
            , ya = ka("macintosh")
            , za = ka("Mb2345Browser")
            , Aa = ka("ipad;") || ka("ipad ")
            , Ba = Aa && sa
            , Ca = ka("ipod touch;")
            , Da = ka("iphone;") || ka("iphone ")
            , Ea = Da || Aa || Ca
            , Fa = Ea && -1 !== ba.search(/ os [456]_/);
        Ea && ba.search(/ os [4-8]_/);
        var Ga = Ea && -1 !== ba.search(/ os [78]_/);
        Ea && ka("os 8_");
        var Ja = Ea && ka("os 10_")
            , Ka = ka("android")
            , La = -1 !== ba.search(/android [123]/)
            , Ma = ka("android 4");
        Ka && -1 === ba.search(/android [1-4]/) || ba.search(/android 4.4/);
        var Na = Ka ? "android" : Ea ? "ios" : ta ? "windows" : ya ? "mac" : "other"
            , Oa = pa && !da.XMLHttpRequest
            , Pa = pa && !ea.querySelector
            , Qa = pa && !ea.addEventListener
            , Ra = pa && ka("ie 9")
            , Sa = pa && ka("msie 10")
            , Ta = pa && ka("rv:11")
            , Ua = ka("edge")
            , Va = ka("qtweb")
            , Wa = ka("ucbrowser")
            , Xa = ka("alipay") || Ka && Wa
            , Ya = ka("miuibrowser")
            , Za = ka("micromessenger")
            , $a = ka("mqqbrowser")
            , ab = ka("baidubrowser")
            , chrome = (ka("chrome") || ka("crios")) && !Za && !ab && !$a && !Ua && !Ya
            , bb = chrome && ka("chromium")
            , cb = chrome && !bb && 30 < parseInt(ba.split("chrome/")[1])
            , db = ka("firefox")
            , eb = db && 27 < parseInt(ba.split("firefox/")[1])
            , fb = (ya || Ea) && ka("safari") && ka("version/")
            , gb = ya && fb && 7 < parseInt(ba.split("version/")[1])
            , hb = Ea && ka("aliapp")
            , ib = Ea && (!$a && !Wa && !Za && !chrome && !db && !fb || hb && !Wa)
            , jb = Ka || Ea || xa || ka("mobile")
            , kb = da.navigator && da.navigator.msPointerEnabled && !!da.navigator.msMaxTouchPoints
            , lb = da.navigator && da.navigator.pointerEnabled && !!da.navigator.maxTouchPoints
            , mb = lb || kb
            , nb = "ontouchstart"in ea || mb
            , ob = function() {
            if (!jb)
                return da.devicePixelRatio || 1;
            var a = document.getElementsByTagName("meta");
            if (window.parent && window.parent !== window)
                try {
                    if (window.parent.location.origin === window.location.origin)
                        a = window.parent.document.getElementsByTagName("meta");
                    else
                        return 1
                } catch (b) {
                    return 1
                }
            for (var c = a.length - 1; 0 <= c; c -= 1)
                if ("viewport" === a[c].name) {
                    var c = a[c].content, d;
                    -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
                    a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
                    c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
                    if (d) {
                        if (c >= a)
                            return d > c ? c : d < a ? a : d
                    } else if (c >= a)
                        return 1 <= a ? 1 : Math.min(c, 1);
                    console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
                    return null
                }
        }()
            , pb = sa && (!jb || !!ob && 1 <= ob)
            , qb = pa && "transition"in ga.style
            , rb = !!ea.createElementNS && !!ea.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
            , sb = ea.createElement("canvas")
            , vb = !(!sb || !sb.getContext)
            , wb = window.URL || window.webkitURL
            , xb = !pa && !(Wa && Ka) && window.Worker && wb && wb.createObjectURL && window.Blob
            , yb = ""
            , na = ""
            , zb = 0
            , Ab = {
            alpha: !0,
            antialias: !0,
            depth: !0,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !0,
            stencil: !1
        }
            , Bb = function() {
            if (!window.forceWebGL && (!vb || !xb || ib && hb && !Wa))
                return !1;
            for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
                try {
                    b = sb.getContext(a[c], window.forceWebGL ? {
                        alpha: !1,
                        antialias: !0,
                        depth: !0
                    } : Ab)
                } catch (d) {}
                if (b) {
                    if (b.drawingBufferWidth !== sb.width || b.drawingBufferHeight !== sb.height)
                        break;
                    if (window.forceWebGL)
                        return yb = a[c],
                            zb = Infinity,
                            !0;
                    if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension)
                        break;
                    zb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
                    var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
                    if (!e)
                        break;
                    zb = Math.min(zb, e[0], e[1]);
                    fb && "mac" === Na && (zb = Math.min(zb, 4096));
                    e = Math.max(screen.width, screen.height);
                    pb && (e *= Math.min(2, window.devicePixelRatio || 1));
                    if (e > zb)
                        break;
                    if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision)
                        break;
                    na = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
                    if ((b = ma()) && -1 !== oa.indexOf(b))
                        break;
                    yb = a[c];
                    return !0
                }
            }
            return !1
        }()
            , Cb = Bb && (cb || eb || gb) && ("mac" === Na || "windows" === Na) && !jb
            , Db = !vb || Va || xa || jb && db || Ra || Fa || Ba || Ca || La || ka("gt-n710") || wa
            , Eb = !Db && !Cb && (Ma || Ga || Ea && Za || !jb)
            , Fb = Cb ? "vw" : Db ? "d" : Eb ? "dv" : "v"
            , Gb = ka("webkit")
            , Hb = "WebKitCSSMatrix"in da && "m11"in new window.WebKitCSSMatrix
            , Ib = "MozPerspective"in ga.style
            , Jb = "OTransition"in ga.style
            , Kb = qb || Hb || Ib || Jb
            , Lb = void 0 !== config[8] ? config[8] : !0
            , Mb = void 0 !== config[9] ? config[9] : !0
            , Nb = void 0 !== config[10] ? config[10] : !0
            , Ob = void 0 !== config[11] ? config[11] : !0
            , Pb = void 0 !== config[12] ? config[12] : null
            , Qb = !rb && jb && vb
            , Rb = !0;
        try {
            if ("undefined" === typeof da.localStorage)
                Rb = !1;
            else {
                var Sb = (new Date).getTime() + "";
                da.localStorage.setItem("_test", Sb);
                da.localStorage.getItem("_test") !== Sb && (Rb = !1);
                da.localStorage.removeItem("_test")
            }
        } catch (Tb) {
            Rb = !1
        }
        config.l = {
            S9: Aa,
            T9: Da,
            size: Da ? 100 : Ka ? 200 : 500,
            Av: ya,
            rea: ta,
            Vz: Ea,
            fha: Ja,
            dh: Ka,
            d6: La,
            wR: Xa,
            Ep: Na,
            Ry: ab,
            wba: $a,
            SI: fb,
            vW: Za,
            mn: pa,
            Lg: Oa,
            op: Pa,
            X9: Ra,
            wS: Sa,
            Id: Qa,
            U9: Ta,
            r8: Ua,
            Y9: pa && !Ta,
            S$: za,
            Ij: Rb,
            Ee: Rb && Ob && !jb && chrome,
            Pk: Pb,
            geolocation: jb || pa && !Qa || Ua,
            Pda: Wa,
            rB: Wa && !chrome,
            chrome: chrome,
            gG: sa && chrome,
            uG: db,
            Y: jb,
            Y$: jb && Gb,
            wT: jb && Hb,
            X$: jb && da.opera,
            kd: sa,
            xB: ob,
            ga: pb,
            he: nb,
            yT: kb,
            tI: lb,
            kU: mb,
            U6: 57 <= parseInt(ba.split("chrome/")[1]),
            tW: Gb,
            V9: qb,
            uW: Hb,
            P8: Ib,
            Iaa: Jb,
            Py: Kb,
            Bk: rb,
            sp: vb,
            XS: xb,
            Gs: Nb,
            Bf: Cb,
            pW: yb,
            rW: Ab,
            XG: na,
            R$: zb,
            Fea: !1,
            lR: Lb,
            az: Lb && !Db,
            s6: Lb ? Fb : "d",
            CQ: Lb ? Bb : !1,
            fw: Lb && vb,
            Yl: Lb && Bb,
            kha: Lb && (!Db || Bb),
            rn: Mb && !!da.WebSocket && !ab,
            Lha: Qb,
            Kaa: vb || Qb ? "c" : "d"
        };
        var Ub = config;
        config = void 0;
        var Vb = {
            overlay: ["style"],
            "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
            "AMap.MarkerList": ["AMap.TplUtils"],
            Map3D: ["vectorlayer", "wgl"]
        };
        window.AMap ? (window.AMap.version = "1536672475630",
            window.AMap.uB = {
                iC: function(a) {
                    a(Ub)
                }
            }) : window.AMap = {
            version: "1536672475630",
            uB: {
                iC: function(a) {
                    a(Ub)
                }
            }
        };
        Ub.Ug = "1536672475630";
        Ub.Uo = Vb;
        Ub.iA = "raster";
        for (var Wb = document.head || document.getElementsByTagName("head")[0], Xb = ".vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1;overflow:hidden}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 3px 14px rgba(0,0,100,0.6);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left;border:#c0c0c0 solid 1px}.amap-info-outer:hover,.amap-menu-outer:hover{box-shadow:0 3px 14px rgba(0,0,0,0.75)}.amap-info-content{background:#fff;border:1px solid #ccc;padding:10px 18px 10px 10px;+margin:0 10px;+padding:10px 0;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info-sharp{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}".replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" + Ub[2].split(",")[0] + "/"), Yb = null, kc = 0, lc = Wb.childNodes.length; kc < lc; kc++)
            if (1 === Wb.childNodes[kc].nodeType) {
                Yb = Wb.childNodes[kc];
                break
            }
        if (Xb)
            if (Wb) {
                var mc = document.createElement("style");
                mc.setAttribute("type", "text/css");
                mc.setAttribute("class", "AMap.style");
                mc.styleSheet ? mc.styleSheet.cssText = Xb : mc.innerHTML = Xb;
                Yb ? Wb.insertBefore(mc, Yb) : Wb.appendChild(mc)
            } else
                document.write("<style type='text/css'>" + Xb + "</style>");
        var f = f || {
            Pa: {
                Cd: 0,
                Tn: []
            }
        }
            , w = {
            D: {},
            control: {},
            C: {}
        };
        f.CLASS_NAME = "AMap";
        f.e = f.BuryPoint = {
            tT: {},
            QH: {},
            options: {},
            fI: {},
            IN: {},
            JN: {},
            FO: {},
            GO: {}
        };
        f.e.Cg = f.BuryPoint.dic = {
            "AMap.event": {
                c: "ev",
                m: {
                    addDomListener: "a",
                    addListener: "b",
                    addListenerOnce: "c",
                    removeListener: "d",
                    trigger: "e"
                }
            },
            AMap: {
                c: "aa",
                m: {
                    convertFrom: "a"
                }
            },
            "AMap.Map": {
                c: "m",
                o: {
                    view: "a",
                    layers: "b",
                    level: "c",
                    center: "d",
                    zooms: "e",
                    lang: "f",
                    cursor: "g",
                    crs: "h",
                    animateEnable: "i",
                    isHotspot: "j",
                    defaultLayer: "k",
                    rotateEnable: "l",
                    resizeEnable: "m",
                    dragEnable: "n",
                    zoomEnable: "o",
                    doubleClickZoom: "p",
                    keyboardEnable: "q",
                    jogEnable: "r",
                    scrollWheel: "s",
                    touchZoom: "t",
                    mapStyle: "u",
                    "features ": "v",
                    zoom: "w"
                },
                m: {
                    setMapStyle: "a",
                    getMapStyle: "b",
                    getFeatures: "c",
                    setFeatures: "d",
                    setLang: "e",
                    getLang: "f",
                    setCity: "g",
                    getCity: "h",
                    getAdcode: "i",
                    setLimitBounds: "j",
                    clearLimitBounds: "k",
                    getLimitBounds: "l",
                    setZoom: "m",
                    getZoom: "n",
                    getCenter: "o",
                    setCenter: "p",
                    setRotation: "q",
                    getBounds: "r",
                    getStatus: "s",
                    setStatus: "t",
                    getResolution: "u",
                    getScale: "v",
                    getDefaultCursor: "w",
                    setDefaultCursor: "x",
                    zoomIn: "y",
                    zoomOut: "z",
                    setZoomAndCenter: "0",
                    setBounds: "1",
                    clearMap: "2",
                    destroy: "3",
                    addControl: "4",
                    removeControl: "5",
                    clearControl: "6",
                    clearInfoWindow: "7",
                    remove: "8",
                    add: "9",
                    getAllOverlays: "a1",
                    getSize: "a2",
                    getContainer: "a3",
                    panTo: "a4",
                    panBy: "a5",
                    setFitView: "a6",
                    setLayers: "a7",
                    getLayers: "a8",
                    getDefaultLayer: "a9",
                    setDefaultLayer: "a0",
                    pixelToLngLat: "b0",
                    lnglatToPixel: "b1",
                    drawPolyline: "b2",
                    drawPolygon: "b3",
                    drawCircle: "b4"
                }
            },
            "AMap.View2D": {
                c: "v",
                o: {
                    center: "a",
                    rotation: "b",
                    zoom: "c",
                    crs: "d"
                }
            },
            "AMap.Buildings": {
                p: "AMap.Layer",
                c: "b"
            },
            "AMap.CustomLayer": {
                p: "AMap.Layer",
                c: "c",
                o: {
                    map: "a",
                    zIndex: "b",
                    opacity: "c",
                    zooms: "d"
                },
                m: {
                    setOpacity: "2a",
                    getContainer: "2b",
                    show: "2c",
                    hide: "2d",
                    setzIndex: "2e"
                }
            },
            "AMap.ImageLayer": {
                p: "AMap.Layer",
                c: "i",
                o: {
                    bounds: "a",
                    url: "b",
                    map: "c",
                    opacity: "d",
                    visible: "e",
                    zIndex: "f",
                    zooms: "g"
                },
                m: {
                    getMap: "4a",
                    show: "4b",
                    getOpacity: "4c",
                    setOpacity: "4d",
                    getBounds: "4e",
                    setBounds: "4f",
                    getImageUrl: "4g",
                    setImageUrl: "4h",
                    hide: "4i",
                    setOptions: "4j",
                    getOptions: "4k"
                }
            },
            "AMap.Layer": {
                c: "l",
                m: {
                    getZooms: "a",
                    setOpacity: "b",
                    show: "c",
                    hide: "d",
                    setMap: "e",
                    getMap: "f",
                    setzIndex: "g"
                }
            },
            "AMap.MassMarks": {
                p: "AMap.Layer",
                c: "ma",
                o: {
                    zIndex: "a",
                    opacity: "b",
                    zooms: "c",
                    anchor: "d",
                    url: "e",
                    size: "f",
                    cursor: "g",
                    alwaysRender: "h"
                },
                m: {
                    setData: "0a",
                    getData: "0b",
                    getStyle: "0c",
                    setStyle: "0d",
                    setMap: "0e"
                }
            },
            "AMap.TileLayer": {
                p: "AMap.Layer",
                c: "tl",
                o: {
                    map: "a",
                    tileSize: "b",
                    tileUrl: "c",
                    errorUrl: "d",
                    getTileUrl: "e",
                    zIndex: "f",
                    opacity: "g",
                    zooms: "h",
                    detectRetina: "i"
                },
                m: {
                    setTextIndex: "3a",
                    getTiles: "3b",
                    setTileUrl: "3d",
                    getTileUrl: "3e",
                    getZooms: "3f",
                    stopRefresh: "3g",
                    startRefresh: "3h",
                    reload: "3i"
                }
            },
            "AMap.TileLayer.Satellite": {
                p: "AMap.TileLayer",
                c: "s",
                o: {
                    map: "a",
                    zIndex: "b",
                    opacity: "c",
                    zooms: "d",
                    detectRetina: "e"
                }
            },
            "AMap.TileLayer.RoadNet": {
                p: "AMap.TileLayer",
                c: "r",
                o: {
                    map: "a",
                    zIndex: "b",
                    opacity: "c",
                    zooms: "d",
                    detectRetina: "e"
                }
            },
            "AMap.TileLayer.Traffic": {
                p: "AMap.TileLayer",
                c: "t",
                o: {
                    map: "a",
                    zIndex: "b",
                    opacity: "c",
                    zooms: "d",
                    detectRetina: "e",
                    autoRefresh: "f",
                    interval: "g"
                }
            },
            "AMap.LayerGroup": {
                p: "AMap.Overlay",
                c: "LayerGroup",
                o: {}
            },
            "AMap.OverlayGroup": {
                p: "AMap.Overlay",
                c: "OverlayGroup",
                o: {}
            },
            "AMap.Vector": {
                p: "AMap.Overlay",
                c: "v",
                m: {
                    show: "4a",
                    hide: "4b",
                    getVisible: "4c",
                    getOptions: "4d",
                    setOptions: "4e",
                    setDraggable: "4f"
                }
            },
            "AMap.VectorTile": {
                p: "AMap.Layer",
                c: "vt"
            },
            "AMap.Circle": {
                p: "AMap.Vector",
                c: "ci",
                o: {
                    map: "a",
                    zIndex: "b",
                    center: "c",
                    radius: "d",
                    strokeColor: "e",
                    strokeOpacity: "f",
                    strokeWeight: "g",
                    fillColor: "h",
                    fillOpacity: "i",
                    strokeStyle: "j",
                    extData: "k",
                    strokeDasharray: "l"
                },
                m: {
                    setCenter: "8a",
                    getCenter: "8b",
                    setRadius: "8c",
                    getRadius: "8d",
                    contains: "8e"
                }
            },
            "AMap.Ellipse": {
                p: "AMap.Vector",
                c: "ei",
                o: {
                    map: "a",
                    zIndex: "b",
                    center: "c",
                    radius: "d",
                    strokeColor: "e",
                    strokeOpacity: "f",
                    strokeWeight: "g",
                    fillColor: "h",
                    fillOpacity: "i",
                    strokeStyle: "j",
                    extData: "k",
                    strokeDasharray: "l"
                },
                m: {
                    setCenter: "8a",
                    getCenter: "8b",
                    setRadius: "8c",
                    getRadius: "8d",
                    contains: "8e"
                }
            },
            "AMap.Rectangle": {
                p: "AMap.Vector",
                c: "ra",
                o: {
                    map: "a",
                    zIndex: "b",
                    center: "c",
                    radius: "d",
                    strokeColor: "e",
                    strokeOpacity: "f",
                    strokeWeight: "g",
                    fillColor: "h",
                    fillOpacity: "i",
                    strokeStyle: "j",
                    extData: "k",
                    strokeDasharray: "l"
                },
                m: {
                    setCenter: "8a",
                    getCenter: "8b",
                    setRadius: "8c",
                    getRadius: "8d",
                    contains: "8e"
                }
            },
            "AMap.ContextMenu": {
                p: "AMap.Overlay",
                c: "cm",
                o: {
                    position: "a",
                    content: "b",
                    width: "c"
                },
                m: {
                    addItem: "2a",
                    removeItem: "2b",
                    open: "2c",
                    close: "2d"
                }
            },
            "AMap.GroundImage": {
                p: "AMap.ImageLayer",
                c: "g",
                o: {
                    map: "a",
                    clickable: "b",
                    opacity: "c"
                },
                m: {
                    setMap: "8a"
                }
            },
            "AMap.Icon": {
                c: "ic",
                o: {
                    size: "a",
                    imageOffset: "b",
                    image: "c",
                    imageSize: "c"
                },
                m: {
                    setImageSize: "a",
                    getImageSize: "b"
                }
            },
            "AMap.ImageMarker": {
                p: "AMap.Overlay",
                c: "im",
                m: {
                    setPosition: "3a",
                    getBounds: "3b",
                    getPosition: "3c",
                    hide: "3d",
                    show: "3e",
                    setCursor: "3f",
                    setRotation: "3g",
                    setzIndex: "3h"
                }
            },
            "AMap.InfoWindow": {
                p: "AMap.Overlay",
                c: "iw",
                o: {
                    isCustom: "a",
                    autoMove: "b",
                    closeWhenClickMap: "c",
                    content: "d",
                    size: "e",
                    offset: "f",
                    position: "g",
                    showShadow: "h"
                },
                m: {
                    open: "1a",
                    close: "1b",
                    setContent: "1c",
                    getContentU: "1d",
                    getContent: "1e",
                    setPosition: "1f",
                    setOffset: "1g",
                    getPosition: "1h",
                    setSize: "1i",
                    getSize: "1j",
                    getIsOpen: "1k"
                }
            },
            "AMap.Marker": {
                p: "AMap.Overlay",
                c: "mk",
                o: {
                    map: "a",
                    position: "b",
                    offset: "c",
                    icon: "d",
                    content: "e",
                    topWhenClick: "f",
                    topWhenMouseOver: "g",
                    draggable: "h",
                    raiseOnDrag: "j",
                    cursor: "k",
                    visible: "l",
                    zIndex: "m",
                    angle: "n",
                    autoRotation: "o",
                    animation: "p",
                    shadow: "q",
                    title: "r",
                    clickable: "s",
                    shape: "t",
                    extData: "u"
                },
                m: {
                    setRaiseOnDrag: "9a",
                    setPosition: "9b",
                    getPosition: "9c",
                    setIcon: "9d",
                    getIcon: "9e",
                    setContent: "9f",
                    getContent: "9g",
                    hide: "9h",
                    show: "9i",
                    setCursor: "9j",
                    setRotation: "9k",
                    setAngle: "9l",
                    getAngle: "9m",
                    setOffset: "9n",
                    getOffset: "9o",
                    setzIndex: "9p",
                    setOpacity: "9q",
                    setDraggable: "9r",
                    getDraggable: "9s",
                    moveTo: "9t",
                    moveAlong: "9u",
                    stopMove: "9v",
                    setShadow: "9w",
                    getShadow: "9x",
                    setClickable: "9y",
                    getClickable: "9z",
                    setTitle: "90",
                    getTitle: "91",
                    setLabel: "92",
                    getLabel: "93",
                    setTop: "94",
                    getTop: "95",
                    setShape: "96",
                    getShape: "97",
                    setAnimation: "98",
                    getAnimation: "99",
                    getMap: "9a1"
                }
            },
            "AMap.MarkerShape": {
                c: "ms",
                o: {
                    coords: "a",
                    type: "b"
                }
            },
            "AMap.Overlay": {
                c: "o",
                m: {
                    show: "a",
                    hide: "b",
                    setMap: "c",
                    getMap: "d",
                    setExtData: "e",
                    getExtData: "f"
                }
            },
            "AMap.Poly": {
                p: "AMap.Vector",
                c: "ly",
                m: {
                    setPath: "5a",
                    getPath: "5b"
                }
            },
            "AMap.Polygon": {
                p: "AMap.Poly",
                c: "gn",
                o: {
                    map: "a",
                    zIndex: "b",
                    path: "c",
                    strokeColor: "d",
                    strokeOpacity: "e",
                    strokeWeight: "f",
                    fillColor: "g",
                    fillOpacity: "h",
                    extData: "i",
                    strokeStyle: "j",
                    strokeDasharray: "k"
                },
                m: {
                    getArea: "6a",
                    toString: "6b",
                    contains: "6c"
                }
            },
            "AMap.Polyline": {
                p: "AMap.Poly",
                c: "le",
                o: {
                    map: "a",
                    zIndex: "b",
                    geodesic: "c",
                    isOutline: "d",
                    outlineColor: "e",
                    path: "f",
                    strokeColor: "g",
                    strokeOpacity: "h",
                    strokeWeight: "i",
                    strokeStyle: "j",
                    strokeDasharray: "k",
                    extData: "l"
                },
                m: {
                    getLength: "7a"
                }
            },
            "AMap.Text": {
                p: "AMap.Overlay"
            },
            "AMap.Panorama": {
                c: "aa"
            },
            "AMap.PanoramaMarker": {
                c: "ar"
            },
            "AMap.PanoramaService": {
                c: "ae"
            },
            "AMap.AdvancedInfoWindow": {
                p: "AMap.InfoWindow",
                c: "pa",
                o: {
                    autoMove: "a",
                    closeWhenClickMap: "b",
                    content: "c",
                    offset: "d",
                    position: "e",
                    panel: "f",
                    searchRadius: "g",
                    placeSearch: "h",
                    driving: "i",
                    walking: "j",
                    transit: "k",
                    asOrigin: "l",
                    asDestination: "m"
                },
                m: {
                    clear: "aa",
                    searchPoiByKeyWord: "ab"
                }
            },
            "AMap.AntiCrabFrame": {
                c: "pb",
                m: {
                    setMapStyle: "a"
                }
            },
            "AMap.ArrivalRange": {
                c: "pc",
                m: {
                    search: "a"
                }
            },
            "AMap.Autocomplete": {
                c: "pd",
                o: {
                    type: "a",
                    city: "b",
                    input: "c"
                },
                m: {
                    setType: "a",
                    setCity: "b",
                    search: "c"
                }
            },
            "AMap.AutoPanby": {
                c: "pe"
            },
            "AMap.CircleEditor": {
                c: "pf",
                m: {
                    open: "a",
                    close: "b"
                }
            },
            "AMap.EllipseEditor": {
                c: "pfa",
                m: {
                    open: "a",
                    close: "b"
                }
            },
            "AMap.RectangleEditor": {
                c: "pfb",
                m: {
                    open: "a",
                    close: "b"
                }
            },
            "AMap.CitySearch": {
                c: "pg",
                m: {
                    getLocalCity: "a",
                    getCityByIp: "b"
                }
            },
            "AMap.CloudDataLayer": {
                c: "ph",
                o: {
                    map: "a",
                    query: "b",
                    clickable: "c"
                },
                m: {
                    reload: "a",
                    setMap: "b",
                    getMap: "c",
                    setOptions: "d",
                    wrapUrl: "e"
                }
            },
            "AMap.CloudDataSearch": {
                c: "pi",
                o: {
                    keywords: "a",
                    filter: "b",
                    orderBy: "c",
                    pageSize: "d",
                    pageIndex: "e"
                },
                m: {
                    setOptions: "a",
                    clear: "b",
                    setPageIndex: "c",
                    setPageSize: "d",
                    searchNearBy: "e",
                    searchById: "f",
                    searchByDistrict: "g",
                    searchInPolygon: "h"
                }
            },
            "AMap.CloudDataSearchRender": {
                c: "pj"
            },
            "AMap.DistrictSearch": {
                c: "pk",
                o: {
                    level: "a",
                    extensions: "b",
                    subdistrict: "c"
                },
                m: {
                    setLevel: "a",
                    setExtensions: "b",
                    setSubdistrict: "c",
                    search: "d"
                }
            },
            "AMap.DragRoute": {
                c: "pl",
                o: {
                    polyOptions: "a",
                    startMarkerOptions: "b",
                    midMarkerOptions: "c",
                    endMarkerOptions: "d",
                    showTraffic: "e"
                },
                m: {
                    setAvoidPolygons: "a",
                    clearAvoidPolygons: "b",
                    getAvoidPolygons: "c",
                    setAvoidRoad: "d",
                    clearAvoidRoad: "e",
                    getAvoidRoad: "f",
                    search: "g",
                    setPolicy: "h",
                    showRoute: "i",
                    close: "j",
                    open: "k",
                    getWays: "l",
                    getRoute: "m",
                    destroy: "n",
                    getPolyline: "o",
                    getStart: "p",
                    getEnd: "q",
                    getPoint: "r",
                    getRoutes: "s"
                }
            },
            "AMap.Driving": {
                c: "pm",
                o: {
                    policy: "a",
                    extensions: "b",
                    map: "c",
                    panel: "d",
                    hideMarkers: "e"
                },
                m: {
                    clear: "a",
                    search: "b",
                    setAvoidPolygons: "c",
                    clearAvoidPolygons: "d",
                    getAvoidPolygons: "e",
                    setAvoidRoad: "f",
                    clearAvoidRoad: "g",
                    getAvoidRoad: "h",
                    setPolicy: "i",
                    setLocation: "j",
                    close: "k",
                    open: "l"
                }
            },
            "AMap.DrivingRender": {
                c: "pp"
            },
            "AMap.Geocoder": {
                c: "pq",
                o: {
                    city: "a",
                    radius: "b",
                    extensions: "c"
                },
                m: {
                    getLocation: "a",
                    setCity: "b",
                    getAddress: "c"
                }
            },
            "AMap.Geolocation": {
                c: "pr",
                o: {
                    enableHighAccuracy: "a",
                    timeout: "b",
                    maximumAge: "c",
                    convert: "d",
                    showButton: "e",
                    buttonDom: "f",
                    buttonPosition: "g",
                    buttonOffset: "h",
                    showMarker: "i",
                    markerOptions: "j",
                    showCircle: "k",
                    circleOptions: "l",
                    panToLocation: "m",
                    zoomToAccuracy: "n",
                    useNative: "o"
                },
                m: {
                    isSupported: "a",
                    getCurrentPosition: "b",
                    watchPosition: "c",
                    clearWatch: "d"
                }
            },
            "AMap.GetLL": {
                c: "ps"
            },
            "AMap.Heatmap": {
                c: "pt",
                o: {
                    radius: "a",
                    gradient: "b",
                    opacity: "c",
                    zooms: "d"
                },
                m: {
                    setOptions: "a",
                    getOptions: "b",
                    setDataSet: "c",
                    getDataSet: "d",
                    addDataPoint: "e",
                    setMap: "f",
                    hide: "g",
                    show: "h",
                    getMap: "i",
                    setzIndex: "j",
                    getzIndex: "k"
                }
            },
            "AMap.HotSpot": {
                c: "pu",
                m: {
                    setMap: "a"
                }
            },
            "AMap.LineSearch": {
                c: "pv",
                o: {
                    pageIndex: "a",
                    pageSize: "b",
                    city: "c",
                    extensions: "d"
                },
                m: {
                    setPageIndex: "a",
                    setPageSize: "b",
                    setCity: "c",
                    searchById: "d",
                    search: "e"
                }
            },
            "AMap.MapType": {
                c: "pw",
                m: {
                    hide: "a",
                    show: "b"
                }
            },
            "AMap.Cluster": {
                c: "px"
            },
            "AMap.MarkerClusterer": {
                c: "py",
                o: {
                    gridSize: "a",
                    minClusterSize: "b",
                    maxZoom: "c",
                    averageCenter: "d",
                    styles: "e",
                    zoomOnClick: "f"
                },
                m: {
                    disperse: "a",
                    addMarker: "b",
                    addMarkers: "c",
                    removeMarker: "d",
                    removeMarkers: "e",
                    clearMarkers: "f",
                    getClustersCount: "g",
                    getMap: "h",
                    setMap: "i",
                    getMarkers: "j",
                    setMarkers: "k",
                    getGridSize: "l",
                    setGridSize: "m",
                    getMinClusterSize: "n",
                    setMinClusterSize: "o",
                    getMaxZoom: "p",
                    setMaxZoom: "q",
                    isAverageCenter: "r",
                    setAverageCenter: "s",
                    getStyles: "t",
                    setStyles: "u"
                }
            },
            "AMap.MouseTool": {
                c: "pz",
                m: {
                    marker: "a",
                    polyline: "b",
                    polygon: "c",
                    rectangle: "d",
                    circle: "e",
                    rule: "f",
                    measureArea: "g",
                    rectZoomIn: "h",
                    rectZoomOut: "i",
                    close: "j"
                }
            },
            "AMap.WebGLTool": {
                c: "pz",
                m: {
                    parse: "a"
                }
            },
            "AMap.OverView": {
                c: "p0",
                o: {
                    tileLayer: "a",
                    isOpen: "b",
                    visible: "c"
                },
                m: {
                    open: "a",
                    close: "b",
                    getTileLayer: "c",
                    setTileLayer: "d",
                    show: "e",
                    hide: "f"
                }
            },
            "AMap.PlaceSearch": {
                c: "p1",
                o: {
                    city: "a",
                    type: "b",
                    lang: "c",
                    pageSize: "d",
                    pageIndex: "e",
                    extensions: "f",
                    map: "g",
                    panel: "h"
                },
                m: {
                    clear: "a",
                    setLang: "b",
                    searchInBounds: "c",
                    searchNearBy: "d",
                    getDetails: "e",
                    setType: "f",
                    setPageIndex: "g",
                    setPageSize: "h",
                    setCity: "i",
                    close: "j",
                    open: "k"
                }
            },
            "AMap.PlaceSearchLayer": {
                c: "p2",
                o: {
                    map: "a",
                    keywords: "b"
                },
                m: {
                    setMap: "a",
                    setKeywords: "b"
                }
            },
            "AMap.PlaceSearchRender": {
                c: "p3"
            },
            "AMap.PolyEditor": {
                c: "p4",
                m: {
                    open: "a",
                    close: "b"
                }
            },
            "AMap.RangingTool": {
                c: "p5",
                o: {
                    startMarkerOptions: "a",
                    midMarkerOptions: "b",
                    endMarkerOptions: "c",
                    lineOptions: "d",
                    tmpLineOptions: "e",
                    startLabelText: "f",
                    midLabelText: "g",
                    endLabelText: "h",
                    startLabelOffset: "i",
                    midLabelOffset: "j",
                    endLabelOffset: "k"
                },
                m: {
                    turnOn: "a",
                    turnOff: "b"
                }
            },
            "AMap.RoadInfoSearch": {
                c: "p6",
                o: {
                    pageIndex: "a",
                    pageSize: "b",
                    city: "c"
                },
                m: {
                    setPageIndex: "a",
                    setPageSize: "b",
                    setCity: "c",
                    roadInfoSearchByRoadId: "d",
                    roadInfoSearchByRoadName: "e",
                    crossInfoSearchByCrossId: "f",
                    crossInfoSearchByRoadName: "g"
                }
            },
            "AMap.Scale": {
                c: "p7",
                m: {
                    show: "a",
                    hide: "b"
                }
            },
            "AMap.StationSearch": {
                c: "p8",
                o: {
                    pageIndex: "a",
                    pageSize: "b",
                    city: "c"
                },
                m: {
                    setPageIndex: "a",
                    setPageSize: "b",
                    setCity: "c",
                    searchById: "d",
                    search: "e"
                }
            },
            "AMap.ControlBar": {},
            "AMap.ToolBar": {
                c: "p9",
                o: {
                    offset: "a",
                    ruler: "b",
                    direction: "c",
                    autoPosition: "d",
                    locationMarker: "e",
                    useNative: "f"
                },
                m: {
                    getOffset: "a",
                    setOffset: "b",
                    hideRuler: "c",
                    showRuler: "d",
                    hideDirection: "e",
                    showDirection: "f",
                    hideLocation: "g",
                    showLocation: "h",
                    hide: "i",
                    show: "j",
                    doLocation: "k",
                    getLocation: "l"
                }
            },
            "AMap.Transfer": {
                c: "1",
                o: {
                    city: "a",
                    policy: "b",
                    nightflag: "c",
                    cityd: "d",
                    extensions: "e",
                    map: "f",
                    panel: "g",
                    hideMarkers: "h"
                },
                m: {
                    clear: "a",
                    search: "b",
                    leaveAt: "c",
                    setPolicy: "d",
                    setCity: "e",
                    setCityd: "f",
                    close: "g",
                    open: "h"
                }
            },
            "AMap.TransferRender": {
                c: "2"
            },
            "AMap.UTFGrid": {
                c: "3",
                m: {
                    setMap: "a"
                }
            },
            "AMap.Walking": {
                c: "4",
                o: {
                    map: "a",
                    panel: "b",
                    hideMarkers: "c"
                },
                m: {
                    clear: "a",
                    search: "b",
                    close: "c",
                    open: "d"
                }
            },
            "AMap.WalkingRender": {
                c: "5"
            },
            "AMap.Weather": {
                c: "6",
                m: {
                    getLive: "a",
                    getForecast: "b"
                }
            },
            "AMap.IndoorMap": {
                p: "AMap.CustomLayer",
                c: "7",
                o: {
                    alwaysShow: "9a"
                },
                m: {
                    showIndoorMap: "9a",
                    showFloor: "9b",
                    showFloorBar: "9c",
                    hideFloorBar: "9d",
                    hideLabels: "9e",
                    showLabels: "9f",
                    getSelectedBuildingId: "9g",
                    getSelectedBuilding: "9h",
                    setSelectedBuildingId: "9i",
                    getVisibleBuildingIds: "9j"
                }
            },
            "AMap.Riding": {
                c: "prd",
                o: {
                    map: "a",
                    panel: "b",
                    policy: "c"
                },
                m: {
                    clear: "a",
                    search: "b",
                    close: "c",
                    open: "d",
                    setPolicy: "e"
                }
            },
            "AMap.RidingRender": {
                c: "prdr"
            },
            "AMap.BezierCurve": {
                p: "AMap.Polyline",
                c: "AMap.BezierCurve",
                o: {
                    tolerance: "tolerance",
                    interpolateNumLimit: "interpolateNumLimit"
                }
            },
            "AMap.BezierCurveEditor": {
                c: "AMap.BezierCurveEditor",
                o: {
                    getMarkerOptions: "getMarkerOptions",
                    getCtrlLineOptions: "getCtrlLineOptions"
                }
            },
            "AMap.GeometryUtil": {
                c: "AMap.GeometryUtil"
            },
            "AMap.GeoJSON": {
                c: "AMap.GeoJSON"
            }
        };
        f.e.z9 = f.BuryPoint.getMethodName = function(a, b) {
            if (!this.Cg[a])
                return b;
            var c;
            for (c = this.Cg[a].m && this.Cg[a].m[b]; !c && this.Cg[a].p; ) {
                var d = this.Cg[a].p;
                c = this.Cg[d].m && this.Cg[d].m[b];
                a = d
            }
            c || (c = b);
            return c
        }
        ;
        f.e.add = f.BuryPoint.add = function(a, b, c) {
            var d;
            if (d = this.Cg[a] ? this.Cg[a].c : a) {
                if (b) {
                    a = this.z9(a, b);
                    if (!a)
                        return;
                    d += "," + a
                }
                this.tT[d] = 1;
                c && (this.QH[d] = c)
            }
        }
        ;
        f.e.$a = f.BuryPoint.addOptions = function(a, b) {
            var c = this.Cg[a].c, d, e;
            for (e in b)
                b.hasOwnProperty(e) && ((d = this.Cg[a].o && this.Cg[a].o[e]) || (d = e),
                    d = c + "," + d,
                    this.options[d] = 1);
            "AMap.Map" === a && this.hY(a, b, ["mapStyle", "lang", "renderer", "zoom"])
        }
        ;
        f.e.hY = f.BuryPoint._addOptionsValue = function(a, b, c) {
            for (var d = 0, e, g; d < c.length; d++)
                e = c[d],
                b && b[e] && (g = {},
                    g[e] = b[e],
                    this.Z5(a, g))
        }
        ;
        f.e.Z5 = f.BuryPoint.addOptionsValue = function(a, b) {
            var c = this.Cg[a].c, d, e;
            for (e in b)
                b.hasOwnProperty(e) && ((d = this.Cg[a].o && this.Cg[a].o[e]) || (d = e),
                    d = c + "," + d,
                    this.fI[d] = b[e])
        }
        ;
        f.e.send = f.BuryPoint.send = function() {
            var a = [], b = [], c = [], d = [], e = f.e, g;
            for (g in e.tT)
                1 !== e.IN[g] && a.push(g);
            for (g in e.QH)
                1 !== e.JN[g] && b.push(g + "=" + e.QH[g]);
            for (g in e.options)
                1 !== e.FO[g] && c.push(g);
            for (g in e.fI)
                1 !== e.GO[g] && d.push(g + "=" + e.fI[g]);
            if (0 < a.length || 0 < b.length || 0 < c.length || 0 < d.length)
                new f.Ka.Xa(f.w.bc + "://webapi.amap.com/count?" + ["type=f", "k=" + f.w.key, "u=" + f.w.Jm, "m=" + (f.l.Y ? 1 : 0), "pf=" + f.l.Ep, "methods=" + a.join("@"), "methodsParams=" + b.join("@"), "options=" + c.join("@"), "optionsValue=" + d.join("@")].join("&")),
                    e.clear(a, b, c, d);
            window.setTimeout(e.send, 1E4)
        }
        ;
        f.e.clear = f.BuryPoint.clear = function(a, b, c, d) {
            for (var e = 0; e < a.length; e++)
                this.IN[a[e]] = 1;
            for (e = 0; e < b.length; e++)
                this.JN[b[e].split("=")[0]] = 1;
            for (e = 0; e < c.length; e++)
                this.FO[c[e]] = 1;
            for (e = 0; e < d.length; e++)
                this.GO[d[e].split("=")[0]] = 1
        }
        ;
        window.setTimeout(f.e.send, 1E4);
        f.Z = function() {}
        ;
        f.Z.extend = f.Z.extend = function(a) {
            function b() {}
            function c() {
                this.B && (this.B.apply(this, arguments),
                this.CLASS_NAME && f.e.add(this.CLASS_NAME));
                if (!d && this.ph) {
                    var a = document.createElement("style");
                    a.setAttribute("type", "text/css");
                    this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
                    this.ph = this.ph.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + f.w.cb + "/");
                    a.styleSheet ? a.styleSheet.cssText = this.ph : a.innerHTML = this.ph;
                    for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, g = b.childNodes.length; e < g; e++)
                        if (1 === b.childNodes[e].nodeType) {
                            c = b.childNodes[e];
                            break
                        }
                    c ? b.insertBefore(a, c) : b.appendChild(a)
                }
                d = !0
            }
            var d = !1;
            b.prototype = this.prototype;
            var e = new b;
            e.constructor = c;
            c.prototype = e;
            for (var g in this)
                this.hasOwnProperty(g) && "prototype" !== g && (c[g] = this[g]);
            a.CV && (f.extend(c, a.CV),
                a.CV = null);
            a.ea && (f.extend.apply(null, [e].concat(a.ea)),
                a.ea = null);
            a.G && e.G && (a.G = f.extend({}, e.G, a.G));
            f.extend(e, a);
            a.toString && (e.toString = a.toString);
            c.Kc = this.prototype;
            return c
        }
        ;
        f.Z.fb = f.Z.include = function(a) {
            f.extend(this.prototype, a)
        }
        ;
        f.extend = function(a) {
            var b = Array.prototype.slice.call(arguments, 1), c, d, e, g;
            d = 0;
            for (e = b.length; d < e; d += 1)
                for (c in g = b[d] || {},
                    g)
                    Object.prototype.hasOwnProperty.call(g, c) && ("function" === typeof g[c] && "function" === typeof a[c] && (g[c].oa = a[c]),
                        a[c] = g[c]);
            return a
        }
        ;
        f.Z.cn = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if ("string" === typeof c)
                        this.prototype[b] && (this.prototype[c] = this.prototype[b]);
                    else
                        for (var d = 0, e = c.length; d < e; d++)
                            this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
                }
        }
        ;
        f.ia = {
            h: function(a, b, c, d, e) {
                if (this.Kg(a, b, c || this))
                    return this;
                var g = this.Yj = this.Yj || {};
                g[a] = g[a] || [];
                e ? g[a].unshift({
                    lb: b,
                    yf: c || this,
                    Pl: d
                }) : g[a].push({
                    lb: b,
                    yf: c || this,
                    Pl: d
                });
                "complete" === a && this.ya && this.r(a);
                return this
            },
            Kg: function(a, b, c) {
                var d = this.Yj;
                if (b && c) {
                    if (d && a in d && d[a])
                        for (var e = 0; e < d[a].length; e += 1)
                            if (d[a][e].lb === b && d[a][e].yf === c)
                                return !0;
                    return !1
                }
                return d && a in d && d[a] && 0 < d[a].length
            },
            H: function(a, b, c) {
                if (!this.Kg(a))
                    return this;
                var d = this.Yj;
                if (d && d[a])
                    for (var e = 0; e < d[a].length; e += 1)
                        if (!(d[a][e].lb !== b && "mv" !== b || c && d[a][e].yf !== c)) {
                            d[a].splice(e, 1);
                            d[a].length || (d[a] = null);
                            break
                        }
                return this
            },
            r: function(a, b) {
                if (!this.Kg(a))
                    return this;
                var c = {
                    type: a
                };
                b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? f.a.Xz(b) ? c.value = b : c = f.extend(c, b) : c.value = b;
                for (var d = [].concat(this.Yj[a]), e = 0; e < d.length; e += 1)
                    d[e].lb && (d[e].lb.call(d[e].yf || this, c),
                    d[e].Pl && this.Yj[a] && this.Yj[a].splice(e, 1));
                return this
            },
            sj: function(a) {
                a ? this.Yj && this.Yj[a] && (this.Yj[a] = null) : this.Yj = null;
                return this
            }
        };
        f.ia.on || (f.ia.on = f.ia.h);
        f.ia.off || (f.ia.off = f.ia.H);
        f.ia.emit || (f.ia.emit = f.ia.r);
        f.be = {
            set: function(a, b, c) {
                var d = this.fi;
                if (d && d[a]) {
                    var d = d[a]
                        , e = "set" + this.gS(a);
                    d[e] ? (d[e](b, c),
                    c || this.BA(a, b)) : d.set(a, b, c)
                } else
                    (this.vh = this.vh || {})[a] = b,
                    c || this.BA(a, b)
            },
            gS: function(a) {
                return a.charAt(0).toUpperCase() + a.substr(1)
            },
            get: function(a, b, c) {
                var d, e = this.fi;
                d = "get" + this.gS(a);
                if (e && e[a])
                    return c = e[a],
                        c[d] ? c[d](b) : c.get(a, b);
                if (this[d] && !c)
                    return this[d](b);
                if (this.vh && this.vh.hasOwnProperty(a))
                    return this.vh[a]
            },
            X: function(a, b, c) {
                this.fi || (this.fi = {});
                this.fi[a] !== b && (b.h(a, function(b) {
                    this.BA(a, b)
                }, this),
                    this.fi[a] = b,
                c || this.BA(a))
            },
            Sd: function(a, b, c) {
                for (var d = 0; d < a.length; d += 1)
                    this.X(a[d], b, !c)
            },
            bi: function(a) {
                this.fi && this.fi[a] && (this.fi[a].H(a, "mv", this),
                    this.fi[a] = void 0)
            },
            Rn: function() {
                if (this.fi)
                    for (var a in this.fi)
                        this.fi.hasOwnProperty(a) && this.bi(a)
            },
            BA: function(a, b) {
                if (this[a + "Changed"])
                    this[a + "Changed"](b);
                else
                    this.GQ && this.GQ();
                this.r(a, b)
            },
            nha: function(a, b, c) {
                var d = new (f.Z.extend({
                    ea: [f.ia, f.be]
                }));
                d.GQ = function() {
                    for (var b = !0, e = 0; e < a.length; e += 1)
                        d.get(a[e]) || (b = !1);
                    b && (d.Rn(),
                        c())
                }
                ;
                for (var e = 0; e < a.length; e += 1)
                    d.X(a[e], b)
            },
            If: function(a, b) {
                var c, d;
                for (c in a)
                    a.hasOwnProperty(c) && (d = a[c],
                        this.set(c, d, b))
            }
        };
        f.w = {
            localStorage: !0,
            Oy: 500,
            De: !0,
            nd: {
                dark: "#202020",
                blue_night: "#090d20",
                test: "#033447",
                mapv: "#000001",
                techblue: "#000b11",
                insight: "#19212a",
                "default": "#fcf9f2"
            },
            Kha: "dark light blue darkblue fresh grey midblue".split(" "),
            key: "6cb85da518029607d421917b7ddeb94a",
            bc: "http",
            qd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
            Vc: "http://restapi.amap.com",
            cb: "http://webapi.amap.com",
            tA: "http://gaode.com",
            xp: "http://m.amap.com",
            Bv: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
            dA: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
            TI: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
            KA: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
            LA: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
            mw: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
            yw: "http://vector.amap.com",
            xw: "vdata.amap.com",
            yW: "ws"
        };
        function nc(a) {
            f.Z.Uo = a.Uo;
            f.l = a.l;
            f.iA = a.iA;
            f.hba = a[7];
            a.l = null;
            f.w.cb = a[2].split(",")[0];
            f.w.Ug = a.Ug;
            f.w.yv = a.yv;
            var b = f.w.bc = f.w.cb.split(":")[0];
            "https" === b && (f.w.yW = "wss",
                f.w.Vc = f.w.Vc.replace("http", "https"),
                f.w.Bv = f.w.Bv.replace("http", "https"),
                f.w.dA = f.w.dA.replace("http", "https"),
                f.w.TI = f.w.TI.replace("http", "https"),
                f.w.KA = f.w.KA.replace("http", "https"),
                f.w.LA = f.w.LA.replace("http", "https"),
                f.w.mw = f.w.mw.replace("http", "https"),
                f.w.yw = f.w.yw.replace("http", "https"));
            var c = window.location.href;
            0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
            f.w.N8 = c;
            c = encodeURIComponent(c);
            f.w.Jm = c;
            f.w.ig = f.w.cb + "/theme/v1.3/markers/" + (f.l.kd ? "b" : "n");
            var d = document.createElement("style");
            d.type = "text/css";
            f.w.J7 = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
            var e = ".amap-container{cursor:" + f.w.J7 + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
            d.styleSheet ? (b = function() {
                try {
                    d.styleSheet.cssText = e
                } catch (a) {}
            }
                ,
                d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
            (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
            f.w.mode = Number(a[3]);
            f.w.qd = a[1];
            f.w.key = a[0];
            f.w.qu = a[4];
            f.w.Rc = a[5];
            f.w.O5 = a[6]
        }
        window.AMap && window.AMap.uB && window.AMap.uB.iC && window.AMap.uB.iC(nc);
        f.Vi = {
            So: Math.PI / 180,
            xba: 180 / Math.PI,
            jG: 6378137
        };
        (function() {
                function a(a) {
                    return "undefined" === typeof a ? "" : a
                }
                f.Mf = {
                    C9: function(b) {
                        b.name = a(b.name);
                        var c = [b.y, b.x, b.name];
                        if (f.l.Y) {
                            var d = [f.w.xp + "/callAPP?", "src=jsapi_q"];
                            d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                            d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                            d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                            d.push("&mo=" + encodeURIComponent(f.w.xp + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                            return d.join("")
                        }
                        return f.w.tA + "?q=" + c.join(",") + "&src=jsapi_q"
                    },
                    YR: function(b) {
                        b.name = a(b.name);
                        b.address = a(b.address);
                        b.x = a(b.x);
                        b.y = a(b.y);
                        var c = [b.id, b.y, b.x, b.name, b.address];
                        if (f.l.Y) {
                            var d = [f.w.xp + "/callAPP?", "src=jsapi_p"];
                            d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                            d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                            d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                            return d.join("")
                        }
                        return f.w.tA + "?p=" + c.join(",") + "&src=jsapi_p"
                    },
                    WR: function(b) {
                        if (f.l.Y) {
                            var c = [f.w.xp + "/callAPP?", "src=jsapi_detail"];
                            c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                            b.name = a(b.name);
                            b.x = a(b.x);
                            b.y = a(b.y);
                            c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                            c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                            c.push("&mo=" + encodeURIComponent(f.w.xp + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                            return c.join("")
                        }
                        return f.w.tA + "/detail/" + b.id + "?src=jsapi_detail"
                    },
                    UG: function(b) {
                        b.sname = a(b.sname);
                        "" === b.sname && (b.sname = "\u8d77\u70b9");
                        b.dname = a(b.dname);
                        "" === b.dname && (b.dname = "\u7ec8\u70b9");
                        b.mcount = a(b.mcount);
                        b.my = a(b.my);
                        b.mx = a(b.mx);
                        b.mname = a(b.mname);
                        var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                        if (f.l.Y) {
                            var d = [f.w.xp + "/callAPP?", "src=jsapi_r_" + b.t];
                            d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                            var e = b.t;
                            0 === b.t ? e = 2 : 2 === b.t && (e = 4);
                            d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
                            d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                            d.push("&mo=" + encodeURIComponent(f.w.xp + "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                            return d.join("")
                        }
                        return f.w.tA + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
                    },
                    On: function(a) {
                        f.l.Y ? window.location.href = a : window.open(a)
                    }
                }
            }
        )();
        "function" !== typeof Object.keys && (Object.keys = function(a) {
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push(c);
                return b
            }
        );
        f.a = {
            cB: [],
            Ya: 268435456,
            Uu: {
                start: function(a) {
                    a.startTime = new Date;
                    a.UV = [];
                    var b = (new Date).getTime();
                    a.id = requestAnimationFrame(function d() {
                        var e = (new Date).getTime();
                        a.UV.push(e - b);
                        b = e;
                        a.id = requestAnimationFrame(d)
                    })
                },
                cancel: function(a) {
                    a.id && cancelAnimationFrame(a.id)
                },
                stop: function(a) {
                    a.y7 = new Date - a.startTime;
                    this.cancel(a);
                    a.Uu = Math.round(1E3 / (a.y7 / (a.UV.length + 1)))
                }
            },
            Db: function(a) {
                if ("object" === typeof a && null !== a) {
                    if (a.zp || this.Kr(a, "Float32Array") || this.Kr(a, "Uint16Array"))
                        return a;
                    var b = this.isArray(a) ? [] : {}, c;
                    for (c in a)
                        a.hasOwnProperty(c) && (b[c] = f.a.Db(a[c]));
                    return b
                }
                return a
            },
            Ak: function(a) {
                return "function" === typeof a
            },
            Hv: function() {},
            keys: function(a) {
                if ("function" === typeof Object.keys)
                    return Object.keys(a);
                var b = [], c;
                for (c in a)
                    a.hasOwnProperty(c) && b.push(c);
                return b
            },
            map: function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
                    , d = [];
                if (a && a.length)
                    f.a.cf(a, function() {
                        for (var e = arguments.length, g = Array(e), h = 0; h < e; h++)
                            g[h] = arguments[h];
                        d[g[1]] = b.apply(c || a, g)
                    });
                else
                    return a;
                return d
            },
            cf: function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (a && a.length)
                    for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++)
                        ;
            },
            find: function(a, b) {
                for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++)
                    if ("function" === typeof b) {
                        if (b.call(c, a[d], d, a))
                            return a[d]
                    } else if (a[d] === b)
                        return a[d];
                return null
            },
            Xz: function(a) {
                return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
            },
            OJ: function(a, b) {
                var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM", d, e;
                "v5" < (b || "v5") ? (d = c.length,
                    e = 512) : (d = 27,
                    c = c.substr(0, 27),
                    e = 333);
                var g, h, k, l, m;
                h = [];
                k = NaN;
                l = 0;
                for (m = a.length; l < m; l++)
                    g = a[l],
                        g = c.indexOf(g),
                        isNaN(k) ? k = g * d : (h.push(k + g - e),
                            k = NaN);
                return h
            },
            tca: function(a, b) {
                for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
                    var g = c * e
                        , h = g + c;
                    h > b.length && (h = b.length);
                    for (; g < h; g += 1)
                        a(b[g])
                }
            },
            RQ: function(a) {
                var b = {
                    aliceblue: "#f0f8ff",
                    antiquewhite: "#faebd7",
                    aqua: "#00ffff",
                    aquamarine: "#7fffd4",
                    azure: "#f0ffff",
                    beige: "#f5f5dc",
                    bisque: "#ffe4c4",
                    black: "#000000",
                    blanchedalmond: "#ffebcd",
                    blue: "#0000ff",
                    blueviolet: "#8a2be2",
                    brown: "#a52a2a",
                    burlywood: "#deb887",
                    cadetblue: "#5f9ea0",
                    chartreuse: "#7fff00",
                    chocolate: "#d2691e",
                    coral: "#ff7f50",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cyan: "#00ffff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    darkgreen: "#006400",
                    darkkhaki: "#bdb76b",
                    darkmagenta: "#8b008b",
                    darkolivegreen: "#556b2f",
                    darkorange: "#ff8c00",
                    darkorchid: "#9932cc",
                    darkred: "#8b0000",
                    darksalmon: "#e9967a",
                    darkseagreen: "#8fbc8f",
                    darkslateblue: "#483d8b",
                    darkslategray: "#2f4f4f",
                    darkturquoise: "#00ced1",
                    darkviolet: "#9400d3",
                    deeppink: "#ff1493",
                    deepskyblue: "#00bfff",
                    dimgray: "#696969",
                    dodgerblue: "#1e90ff",
                    firebrick: "#b22222",
                    floralwhite: "#fffaf0",
                    forestgreen: "#228b22",
                    fuchsia: "#ff00ff",
                    gainsboro: "#dcdcdc",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gray: "#808080",
                    green: "#008000",
                    greenyellow: "#adff2f",
                    honeydew: "#f0fff0",
                    hotpink: "#ff69b4",
                    indianred: "#cd5c5c",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    khaki: "#f0e68c",
                    lavender: "#e6e6fa",
                    lavenderblush: "#fff0f5",
                    lawngreen: "#7cfc00",
                    lemonchiffon: "#fffacd",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lightcyan: "#e0ffff",
                    lightgoldenrodyellow: "#fafad2",
                    lightgrey: "#d3d3d3",
                    lightgreen: "#90ee90",
                    lightpink: "#ffb6c1",
                    lightsalmon: "#ffa07a",
                    lightseagreen: "#20b2aa",
                    lightskyblue: "#87cefa",
                    lightslategray: "#778899",
                    lightsteelblue: "#b0c4de",
                    lightyellow: "#ffffe0",
                    lime: "#00ff00",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    magenta: "#ff00ff",
                    maroon: "#800000",
                    mediumaquamarine: "#66cdaa",
                    mediumblue: "#0000cd",
                    mediumorchid: "#ba55d3",
                    mediumpurple: "#9370d8",
                    mediumseagreen: "#3cb371",
                    mediumslateblue: "#7b68ee",
                    mediumspringgreen: "#00fa9a",
                    mediumturquoise: "#48d1cc",
                    mediumvioletred: "#c71585",
                    midnightblue: "#191970",
                    mintcream: "#f5fffa",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    oldlace: "#fdf5e6",
                    olive: "#808000",
                    olivedrab: "#6b8e23",
                    orange: "#ffa500",
                    orangered: "#ff4500",
                    orchid: "#da70d6",
                    palegoldenrod: "#eee8aa",
                    palegreen: "#98fb98",
                    paleturquoise: "#afeeee",
                    palevioletred: "#d87093",
                    papayawhip: "#ffefd5",
                    peachpuff: "#ffdab9",
                    peru: "#cd853f",
                    pink: "#ffc0cb",
                    plum: "#dda0dd",
                    powderblue: "#b0e0e6",
                    purple: "#800080",
                    rebeccapurple: "#663399",
                    red: "#ff0000",
                    rosybrown: "#bc8f8f",
                    royalblue: "#4169e1",
                    saddlebrown: "#8b4513",
                    salmon: "#fa8072",
                    sandybrown: "#f4a460",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    skyblue: "#87ceeb",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    snow: "#fffafa",
                    springgreen: "#00ff7f",
                    steelblue: "#4682b4",
                    tan: "#d2b48c",
                    teal: "#008080",
                    thistle: "#d8bfd8",
                    tomato: "#ff6347",
                    turquoise: "#40e0d0",
                    violet: "#ee82ee",
                    wheat: "#f5deb3",
                    white: "#ffffff",
                    whitesmoke: "#f5f5f5",
                    yellow: "#ffff00",
                    yellowgreen: "#9acd32"
                };
                return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
            },
            rz: function(a, b, c) {
                var d, e;
                d = Math.floor(c / 2);
                e = c - d;
                d = (1 << d) - 1 << e;
                e = (1 << e) - 1;
                return [c, a & d | b & e, b & d | a & e]
            },
            sz: function(a) {
                return a ? encodeURIComponent(a) : ""
            },
            Hd: function(a, b, c, d) {
                c = a[b].i[c];
                if ("undefined" === typeof c)
                    return null;
                a = a[b].s;
                if ("number" === typeof c)
                    return a[c];
                for (; "undefined" === typeof c[d.toString()] && !(d -= 1,
                3 > d); )
                    ;
                d = c[d.toString()];
                return "number" === typeof d ? a[d] : null
            },
            TU: function(a) {
                return f.a.xf("ff" + a)
            },
            xf: function(a) {
                for (var b = [], c = 0, d = a.length; c < d; c += 2)
                    b.push(parseInt(a.substr(c, 2), 16));
                b.push((b.shift() / 255).toFixed(2));
                return "rgba(" + b.join(",") + ")"
            },
            ms: function(a) {
                return f.a.Ho("ff" + a)
            },
            Ho: function(a) {
                for (var b = [], c = 0, d = a.length; c < d; c += 2)
                    b.push(parseInt(a.substr(c, 2), 16) / 255);
                b.push(b.shift());
                return b
            },
            tp: function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b))
                        return !1;
                return !0
            },
            pk: function(a, b) {
                return 0 > b ? a : a.slice(0, b).concat(a.slice(b + 1, a.length))
            },
            UF: function(a, b) {
                var c = f.a.indexOf(a, b);
                return f.a.pk(a, c)
            },
            indexOf: function(a, b) {
                if (!a || !a.length)
                    return -1;
                if (a.indexOf)
                    return a.indexOf(b);
                for (var c = 0; c < a.length; c += 1)
                    if (a[c] === b)
                        return c;
                return -1
            },
            bind: function(a, b) {
                var c = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
                return function() {
                    return a.apply(b, c || arguments)
                }
            },
            rb: function(a, b) {
                b = b || {};
                a.G = f.extend({}, a.G, b);
                return a.G
            },
            qR: function() {
                return !1
            },
            KR: function(a, b) {
                return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
            },
            Fb: function() {
                var a = 0;
                return function(b) {
                    b._amap_id || (a += 1,
                        b._amap_id = a);
                    return b._amap_id
                }
            }(),
            v8: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
            Ai: Date.now ? function() {
                    return Date.now()
                }
                : function() {
                    return (new Date).getTime()
                }
            ,
            sha: function(a, b, c, d) {
                var e;
                if (d) {
                    var g = 0, h, k = this.Ai;
                    e = function() {
                        h = k();
                        if (h - g < b)
                            return !1;
                        g = h;
                        a.apply(c, arguments)
                    }
                } else {
                    var l, m, n;
                    n = function() {
                        l = !1;
                        m && (e.apply(c, m),
                            m = !1)
                    }
                    ;
                    e = function() {
                        l ? m = arguments : (l = !0,
                            a.apply(c, arguments),
                            setTimeout(n, b))
                    }
                }
                return e
            },
            df: function(a, b) {
                return Number(Number(a).toFixed(b || 0))
            },
            isArray: function(a) {
                return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
            },
            Kr: function(a, b) {
                return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
            },
            ea: function(a, b) {
                return -1 !== this.indexOf(a, b)
            },
            FV: function(a) {
                var b = 0;
                if (0 === a.length)
                    return b;
                for (var c, d = 0, e = a.length; d < e; d += 1)
                    c = a.charCodeAt(d),
                        b = (b << 5) - b + c,
                        b &= b;
                return b
            },
            iga: function(a, b) {
                b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
                for (var c = "", d = 0, e = a.length; d < e; d++)
                    c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
                return c
            },
            N7: function(a, b) {
                var c = (a + "").slice(-2)
                    , d = (b + "").slice(-2);
                a = a.slice(0, -2);
                b = b.slice(0, -2);
                var e = parseInt((d + c).slice(1))
                    , d = parseInt("1" + d) / 3E3;
                a -= parseInt("1" + c) / 3E3 * (Math.ceil(e / 250) % 2 ? 1 : -1);
                b -= d * (1 < e / 500 ? 1 : -1);
                return new f.W(parseFloat(a).toFixed(5),parseFloat(b).toFixed(5))
            },
            FT: function(a) {
                return "undefined" !== typeof JSON && JSON.stringify ? f.a.FV(JSON.stringify(a)) : null
            },
            Tia: function(a, b) {
                if (b || !a.hasOwnProperty("_amap_hash")) {
                    var c = f.a.FT(a);
                    c && (a._amap_hash = c)
                }
                return a._amap_hash
            },
            iepngFix: function(a) {
                function b() {
                    for (var a; c.length; )
                        a = c.shift(),
                            window.DD_belatedPNG.fixPng(a);
                    d.vH = !0
                }
                this.jU || (this.jU = [],
                    this.vH = !1);
                var c = this.jU
                    , d = this;
                if ("img" === a.tagName.toLowerCase())
                    c.push(a);
                else {
                    a = a.getElementsByTagName("*");
                    for (var e = 0; e < a.length; e += 1)
                        c.push(a[e])
                }
                window.DD_belatedPNG && this.vH ? setTimeout(function() {
                    b()
                }, 100) : this.vH || f.ib.load("AMap.FixPng", b)
            },
            ra: function(a) {
                if (f.a.isArray(a))
                    if (f.a.isArray(a[0]))
                        for (var b = 0; b < a.length; b += 1)
                            a[b] = f.a.ra(a[b]);
                    else if (b = typeof a[0],
                    "string" === b || "number" === b)
                        return new f.W(a[0],a[1]);
                return a
            },
            Ql: function(a) {
                return f.a.isArray(a) ? new f.sc(a[0],a[1]) : a
            }
        };
        (function() {
                function a(a) {
                    window.clearTimeout(a)
                }
                function b(a) {
                    var b, c, d = ["webkit", "moz", "o", "ms"];
                    for (b = 0; b < d.length && !c; b += 1)
                        c = window[d[b] + a];
                    return c
                }
                function c(a) {
                    var b = +new Date
                        , c = Math.max(0, (f.l.dh ? 50 : 20) - (b - d));
                    d = b + c;
                    return window.setTimeout(a, c)
                }
                var d = 0
                    , e = window.requestAnimationFrame || b("RequestAnimationFrame") || c
                    , g = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
                f.a.cc = function(a, b, c, d) {
                    a = f.a.bind(a, b);
                    if (c)
                        a();
                    else
                        return e.call(window, a, d)
                }
                ;
                f.a.$f = function(a) {
                    a && g.call(window, a)
                }
            }
        )();
        f.a.OU = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(a) {
            var b = Date.now();
            return setTimeout(function() {
                a({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 70 - (Date.now() - b))
                    }
                })
            }, 0)
        }
        ;
        f.a.DQ = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(a) {
            clearTimeout(a)
        }
        ;
        (function(a) {
                var b = 1
                    , c = {};
                a.a.Fca = function(a, b) {
                    if (c[a]) {
                        var g = c[a];
                        g.dw = 1;
                        g.result = b;
                        if (g.qj) {
                            for (var h = g.qj, k = 0, l = h.length; k < l; k++)
                                h[k].call(null, b);
                            g.qj = null
                        }
                    }
                }
                ;
                a.a.b7 = function(a) {
                    c[a] = null
                }
                ;
                a.a.lea = function(a, b) {
                    if (c[a]) {
                        var g = c[a];
                        0 < g.dw ? b(null, g.result) : (g.qj || (g.qj = []),
                            g.qj.push(b))
                    } else
                        b(null, a)
                }
                ;
                a.a.MG = function(d, e) {
                    var g = navigator.geolocation;
                    if (!a.l.Vz || "https:" === document.location.protocol)
                        return d(null, g);
                    var h;
                    e && e.mea && (h = "f" + b++,
                        c[h] = {
                            dw: 0
                        });
                    var k = null
                        , l = !1;
                    e && e.timeout && (k = setTimeout(function() {
                        k = void 0;
                        d({
                            code: 3,
                            info: "TIME_OUT",
                            message: "Get geolocation time out."
                        });
                        l = !0
                    }, e.timeout));
                    g.getCurrentPosition(function() {
                        l || (clearTimeout(k),
                            k = void 0,
                            d(null, g))
                    }, function(b) {
                        l || (clearTimeout(k),
                            k = void 0,
                            2 === b.code && 0 < b.message.indexOf("permission") ? a.ib.load("AMap.GeoRemoteLoc", function() {
                                d(null, a.TW, h)
                            }) : d(null, g))
                    }, {
                        timeout: 1E3
                    });
                    return h
                }
            }
        )(f);
        (function(a) {
                var b = a.Z.extend({
                    ea: [a.ia],
                    B: function() {}
                });
                a.hm = new b
            }
        )(f);
        (function(a) {
                var b = a.Z.extend({
                    ea: [a.ia],
                    B: function() {
                        this.D0()
                    },
                    D0: function() {
                        a.hm && a.hm.h("vecTileParsed.buildings", this.k0, this)
                    },
                    PS: function(a) {
                        return a.map.kN
                    },
                    MR: function(a) {
                        return this.PS(a) ? a.map.wD : null
                    },
                    Cca: function(a, b) {
                        if (b) {
                            var e = b.map;
                            e && (e.wD ? e.wD.toString() : "") !== (a ? a.toString() : "") && (e.wD = a || [],
                                e.set("display", 0))
                        }
                    },
                    jV: function(a, b) {
                        if (b) {
                            var e = b.map;
                            e && e.kN !== a && (e.kN = a,
                                e.set("display", 0))
                        }
                    },
                    bfa: function() {},
                    gN: function(a, b) {
                        if (a)
                            for (var e = 0, g = a.length; e < g; e++)
                                a[e] && 0 > b.indexOf(a[e]) && b.push(a[e])
                    },
                    tR: function(b) {
                        if (!b)
                            return null;
                        b = b.map.Wa;
                        for (var d = 0, e = b.length; d < e; d++)
                            if (a.D.Xi && b[d]instanceof a.D.Xi && b[d].Oa && b[d].Oa.length && (-1 !== b[d].Oa.indexOf("building") || -1 !== b[d].Oa.indexOf("poilabel")))
                                return b[d];
                        return null
                    },
                    R8: function(a) {
                        if (a = this.tR(a)) {
                            if (a = a.qa.get("tiles", null, !0))
                                a = a[0];
                            else
                                return null;
                            if (!a || !a.length)
                                return null;
                            for (var b = [], e = 0, g = a.length; e < g; e++) {
                                var h = a[e];
                                h.Wf && h.Wf.de && this.gN(h.Wf.de, b)
                            }
                            return b
                        }
                    },
                    k0: function(a) {
                        if (a.hw && a.hw.Wf && (a = a.hw.Wf.de)) {
                            var b = [];
                            this.gN(a, b);
                            this.r("vecTileParsed.builds.found", {
                                zQ: b
                            })
                        }
                    }
                });
                a.pg = new b
            }
        )(f);
        (function(a) {
                function b() {
                    return {
                        checkup: function() {
                            var a = Array.prototype.slice.call(arguments, 0);
                            a.pop()(null, a)
                        }
                    }
                }
                function c(a) {
                    return {
                        injectCode: function(b, c) {
                            var d = null
                                , e = null;
                            try {
                                d = (new Function("self",b))(a)
                            } catch (g) {
                                e = g.toString()
                            }
                            c(e, d)
                        }
                    }
                }
                function d(a) {
                    function b(c, d) {
                        function e(a, b, c) {
                            a = {
                                zs: Date.now(),
                                qs: h,
                                error: a,
                                result: b
                            };
                            if (c)
                                for (var g in c)
                                    c.hasOwnProperty(g) && (a[g] = c[g]);
                            d(a)
                        }
                        var g = c.eH
                            , h = c.qs
                            , l = c.NF
                            , m = c.Au
                            , v = c.k6 || []
                            , s = a._wkHandlers[g];
                        s ? s[l] ? m ? s[l].apply(s, v.concat(e)) : e(null, s[l].apply(s, v)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + g)
                    }
                    var c = [];
                    a.Ly = function(a) {
                        c.push.apply(c, a)
                    }
                    ;
                    a.addEventListener("message", function(d) {
                        function e(b) {
                            if (x) {
                                x.push(b);
                                var d = !!b.jaa;
                                d || t++;
                                if (t > h)
                                    console.error("Resp len wrong!!");
                                else if (b = t === h,
                                d || b) {
                                    d = 1 < x.length ? {
                                        gca: x
                                    } : x[0];
                                    d.zs = Date.now();
                                    d.Hia = u;
                                    if (c.length) {
                                        try {
                                            a.postMessage(d, c)
                                        } catch (g) {
                                            a.postMessage(d),
                                                console.error(g)
                                        }
                                        c.length = 0
                                    } else
                                        a.postMessage(d);
                                    x.length = 0;
                                    b && (e = x = null)
                                }
                            } else
                                console.error("Seemed callback already sent!!")
                        }
                        var g = d.data;
                        d = g.eca || [g];
                        for (var h = d.length, t = 0, u = Date.now() - g.zs, x = [], g = 0; g < h; g++)
                            b(d[g], e)
                    }, !1)
                }
                function e(d, h) {
                    this.G = a.extend({
                        batchSend: !0,
                        lazy: !1,
                        libPolyfills: null
                    }, h);
                    this.Xq = [];
                    this.lt = this.G.clientId || "w" + g++;
                    this.G.onReady && this.aI(this.G.onReady);
                    this.ox = this.w_();
                    if ("function" === typeof d) {
                        var m = {};
                        m[this.ox] = d;
                        d = m
                    }
                    d[e.WG] = c;
                    d[this.uM()] = b;
                    this.Ex = d;
                    this.TO();
                    this.G.lazy || this.er();
                    a.Nz || !1 === this.G.hostWorker || (a.Nz = this)
                }
                var g = 1
                    , h = 1;
                a.extend(e, {
                    WG: "_g_",
                    Pca: function(a) {
                        if (!a.cY) {
                            var b = [];
                            a.addEventListener("message", function(a) {
                                a = a.data;
                                a = a.gca || [a];
                                for (var c = 0, d = a.length; c < d; c++) {
                                    var e = a[c], g;
                                    a: {
                                        g = e.qs;
                                        for (var h = !!e.jaa, k = 0, x = b.length; k < x; k++) {
                                            var v = b[k];
                                            if (g === v.qs) {
                                                h || b.splice(k, 1);
                                                g = v;
                                                break a
                                            }
                                        }
                                        g = void 0
                                    }
                                    g ? g.Au.call(null, e.error, e.result, !0) : console.warn("Receive worker msg: ", e)
                                }
                            }, !1);
                            a.RX = b;
                            a.cY = !0
                        }
                    }
                });
                a.extend(e.prototype, {
                    w_: function() {
                        return "_def_" + this.lt
                    },
                    uM: function() {
                        return "_cln_" + this.lt
                    },
                    r4: function() {
                        var a = Array.prototype.slice.call(arguments, 0);
                        this.WO = a;
                        if (this.Sq) {
                            for (var b = 0, c = this.Sq.length; b < c; b++)
                                this.Sq[b].apply(null, a);
                            this.Sq.length = 0
                        }
                    },
                    Ly: function(a) {
                        this.j4 && this.Xq.push.apply(this.Xq, a)
                    },
                    aI: function(a) {
                        this.WO ? a.apply(null, this.WO) : (this.Sq || (this.Sq = []),
                            this.Sq.push(a))
                    },
                    er: function(b) {
                        var c = this;
                        if (!c.zL) {
                            c.zL = !0;
                            var d = function(d, e) {
                                d && a.l.XS && console.warn(d);
                                c.r4.call(c, d, e);
                                b && b(d, e)
                            };
                            a.l.XS ? this.i4(function(a, b) {
                                b ? this.L0(b, function(a, c) {
                                    a ? d(a) : (this.by(c),
                                        this.fF = c,
                                        this.Xq.length = 0,
                                        this.Px = null,
                                        d(null, {
                                            t6: b,
                                            sea: c
                                        }))
                                }) : d("Worker start failed!")
                            }) : d("Worker not supported!")
                        }
                    },
                    ES: function(a, b, c) {
                        var d = this;
                        a = a || d.ox;
                        var g = {};
                        d.fL(a, b, g);
                        d.by(null, g);
                        d.aI(function(h) {
                            h ? c(h) : d.fF ? (h = d.AM(b, d.iD(d.lt, a)),
                                d.fF.sendMessage(e.WG + ":injectCode", h, function(a, b) {
                                    a || d.by(d.fF, g);
                                    c(a, b)
                                })) : c("Worker msger missing!!")
                        })
                    },
                    iD: function(a, b) {
                        if (!a || !b)
                            throw Error("clientId or ns missing!!");
                        return a + "_" + b
                    },
                    P_: function(a, b, c) {
                        function d() {
                            var b = Array.prototype.slice.call(arguments, 0);
                            c.sendMessage.apply(c, [a].concat(b))
                        }
                        var e = this;
                        if (!c)
                            return function() {
                                e.zL || "utilCall" === e.G.lazy && e.er();
                                b.apply(this.Px, arguments)
                            }
                                ;
                        d._proxy2Worker = !0;
                        return d
                    },
                    TO: function() {
                        this.by(null)
                    },
                    SY: function(a) {
                        var b = {}, c;
                        for (c in a)
                            a.hasOwnProperty(c) && this.fL(c, a[c], b);
                        return b
                    },
                    fL: function(a, b, c) {
                        b = b.call(null, !1);
                        for (var d in b)
                            b.hasOwnProperty(d) && (c[a + ":" + d] = b[d],
                            a === this.ox && (c[d] = b[d]))
                    },
                    by: function(a, b) {
                        b || (this.Px || (this.Px = this.SY(this.Ex)),
                            b = this.Px);
                        for (var c in b)
                            if (b.hasOwnProperty(c)) {
                                var d = b[c];
                                "function" === typeof d && (this[c] = this.P_(c, d, a))
                            }
                        this.j4 = !!a
                    },
                    AM: function(a, b) {
                        var c = a.toString(), d, c = c.replace(/^function([^\(]*)\(/, function() {
                            d = "_prep_h" + h++;
                            return "function " + d + "("
                        });
                        return d ? c + ';if(self._wkHandlers["' + b + '"]){ console.log(self._wkHandlers["' + b + '"]); throw new Error("' + b + ' already exists!"); }self._wkHandlers["' + b + '"]=' + d + ".call(null,self)||{};" + d + "=null;" : (console.error("No function match!!"),
                            !1)
                    },
                    i4: function(a) {
                        var b = this.lt, c = [], d;
                        for (d in this.Ex)
                            if (this.Ex.hasOwnProperty(d)) {
                                var g = this.AM(this.Ex[d], this.iD(b, d));
                                g && c.push(g)
                            }
                        b = this.G.libPolyfills || [];
                        d = 0;
                        for (g = b.length; d < g; d++)
                            b[d] = "(" + b[d].toString() + ")(self);";
                        var h = b.join(";\n") + ";\n" + c.join(";\n")
                            , c = this.G.hostWorker
                            , r = this;
                        c && c !== r ? c.aI(function(b, c) {
                            b ? a.call(r, b) : c.sea.sendMessage(e.WG + ":injectCode", h, function(b) {
                                b ? a.call(r, b) : a.call(r, null, c.t6)
                            })
                        }) : setTimeout(function() {
                            a.call(r, null, r.s5(h))
                        }, 0)
                    },
                    s5: function(a) {
                        var b = {
                            type: "text/javascript; charset=utf-8"
                        };
                        a = "self._wkHandlers={};(" + d.toString() + ")(self);\n" + a;
                        var c;
                        try {
                            var e = window.URL || window.webkitURL
                                , g = e.createObjectURL(new Blob([a],b));
                            c = new Worker(g);
                            setTimeout(function() {
                                e.revokeObjectURL(g);
                                g = null
                            }, 3E3)
                        } catch (h) {
                            console.error(h);
                            return
                        }
                        return c
                    },
                    FZ: function(b) {
                        var c = 1
                            , d = b.RX
                            , e = this
                            , g = !!e.G.batchSend;
                        return function(h) {
                            var r = Array.prototype.slice.call(arguments, 1)
                                , t = "function" === typeof r[r.length - 1] ? r.pop() : null
                                , u = e.lt
                                , x = h.split(":")
                                , v = e.ox;
                            1 < x.length && (h = x[1],
                                v = x[0]);
                            r = {
                                zs: a.a.Ai(),
                                eH: e.iD(u, v),
                                Au: !!t,
                                qs: u + "_" + c++,
                                NF: h,
                                k6: r
                            };
                            t && d.push({
                                NF: r.NF,
                                eH: r.eH,
                                zs: r.zs,
                                qs: r.qs,
                                Au: t
                            });
                            g ? e.vY(b, r) : e.Qq(b, r)
                        }
                    },
                    Qq: function(a, b) {
                        if (this.Xq.length) {
                            try {
                                a.postMessage(b, this.Xq)
                            } catch (c) {
                                a.postMessage(b),
                                    console.error(c)
                            }
                            this.Xq.length = 0
                        } else
                            a.postMessage(b)
                    },
                    vY: function(b, c) {
                        b.$D || (b.$D = []);
                        b.$D.push(c);
                        if (!b.RO) {
                            var d = this;
                            b.RO = setTimeout(function() {
                                b.RO = null;
                                var c = b.$D;
                                c.length && (d.Qq(b, 1 === c.length ? c[0] : {
                                    zs: a.a.Ai(),
                                    eca: c
                                }),
                                    c.length = 0)
                            }, 0)
                        }
                    },
                    k5: function(a) {
                        var b = this;
                        a.addEventListener("error", function(a) {
                            console.error(a);
                            b.TO(null)
                        }, !1);
                        e.Pca(a)
                    },
                    L0: function(a, b) {
                        var c = this;
                        c.k5(a);
                        var d = this.FZ(a);
                        if (e.oZ)
                            b.call(c, null, {
                                sendMessage: d
                            });
                        else {
                            e.oZ = !0;
                            var g = [c.uM() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function(a, e) {
                                var h = !0;
                                if (a || !e || e.length !== g.length - 2)
                                    h = !1;
                                else
                                    for (var k = 0, x = e.length; k < x; k++)
                                        if (e[k] !== g[k + 1]) {
                                            h = !1;
                                            break
                                        }
                                h ? b.call(c, null, {
                                    sendMessage: d
                                }) : (console.error(a),
                                    b.call(c, "Self checkup failed!!"))
                            }
                            ];
                            d.apply(c, g)
                        }
                    }
                });
                a.at = e
            }
        )(f);
        (function() {
                if (!f.md) {
                    f.md = {
                        Fd: {},
                        nv: {}
                    };
                    var a = f.md
                        , b = f.md.Fd
                        , c = f.a
                        , d = f.w;
                    b.start = function(b) {
                        a.nv[b.id] = {
                            J: b.J,
                            time: {
                                DS: c.Ai()
                            },
                            J6: function() {
                                return c.Ai() - this.time.DS
                            }
                        }
                    }
                    ;
                    b.end = function(b) {
                        var d = a.nv[b.id]
                            , e = d.time
                            , d = c.bind(d.J6, d)
                            , l = b.index
                            , m = b.key;
                        "function" !== typeof b.Rc && (b.Rc = function() {}
                        );
                        if (void 0 === e[m])
                            void 0 === l ? e[m] = d() : (e[m] = [],
                                e[m][l] = d());
                        else if (void 0 !== l && void 0 === e[m][l])
                            e[m][l] = d();
                        else
                            return b.Rc(Error("Duplicate Invoke"));
                        b.Rc(null)
                    }
                    ;
                    b.push = function(b) {
                        var c = a.nv[b.id].time
                            , d = b.key
                            , e = b.fm;
                        "function" !== typeof b.Rc && (b.Rc = function() {}
                        );
                        if (void 0 === c[d])
                            c[d] = e;
                        else
                            return b.Rc(Error("Duplicate Invoke"));
                        b.Rc(null)
                    }
                    ;
                    b.send = function(b) {
                        var c = d.bc + "://webapi.amap.com/count?"
                            , k = f.extend(e({
                            J: a.nv[b.id].J
                        }), b.params || {})
                            , l = f.a;
                        b.params && b.params.rs && !b.params.type && (b = a.nv[b.id].time,
                            delete b.DS,
                            k = f.extend(k, b));
                        b = [];
                        for (var m in k)
                            l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
                        b.push("jl=" + (d.yv ? 1 : 0));
                        if (l.Kr(window.performance, "performance") && l.Kr(window.performance.getEntriesByType, "function")) {
                            var n = 0
                                , p = ["webapi.amap.com", "100.69.169.127", "localhost"]
                                , q = ["/maps", "/css"];
                            l.cf(window.performance.getEntriesByType("resource"), function(a) {
                                var b = void 0
                                    , c = void 0;
                                a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
                                a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
                                b && c && l.ea(p, b) && l.ea(q, c) && (n += parseInt(a.responseEnd - a.startTime))
                            });
                            0 !== n && b.push("sd=" + n)
                        }
                        new f.Ka.Xa(c + b.join("&"))
                    }
                    ;
                    var e = function(a) {
                        var b = f.l;
                        a = f.g.DR(a.J);
                        return {
                            type: "q",
                            resolution: a.width + "*" + a.height,
                            k: d.key,
                            u: d.Jm,
                            iw: b.Bf ? 1 : 0,
                            cw: b.CQ ? 1 : 0,
                            gc: b.XG,
                            m: b.Y ? 1 : 0,
                            cv: b.az ? 1 : 0,
                            pf: b.Ep,
                            dpr: window.devicePixelRatio,
                            screenwidth: screen.width,
                            scale: b.xB || 0,
                            detect: b.ga ? 1 : 0,
                            v: d.qu
                        }
                    }
                }
            }
        )();
        f.g = {
            get: function(a) {
                return "string" === typeof a ? document.getElementById(a) : a
            },
            Bz: function(a) {
                if (!a)
                    return [0, 0];
                var b = a.clientWidth
                    , c = a.clientHeight;
                b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth,
                    c = c || a.childNodes[0].clientHeight);
                window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth),
                    c = Math.max(c, a.childNodes[0].scrollHeight));
                return [b, c]
            },
            yha: function(a, b) {
                var c = document.head || document.getElementsByTagName("head")[0];
                if (c) {
                    var d = document.createElement("link");
                    d.setAttribute("rel", "stylesheet");
                    d.setAttribute("type", "text/css");
                    d.setAttribute("href", a);
                    b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
                } else
                    document.write("<link rel='stylesheet' href='" + a + "'/>")
            },
            Hd: function(a, b) {
                var c = a.style[b];
                !c && a.currentStyle && (c = a.currentStyle[b]);
                c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
                c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
                c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
                return "auto" === c ? null : c
            },
            av: function(a) {
                if (a)
                    return new f.sc(a.clientWidth || document.body.clientWidth,a.clientHeight || (f.l.mn ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight),!0)
            },
            DR: function(a) {
                return new f.sc(a.clientWidth,a.clientHeight)
            },
            Lz: function(a) {
                var b = 0, c = 0, d = a, e = document.body, g = document.documentElement, h, k = f.l.op;
                do {
                    b += d.offsetTop || 0;
                    c += d.offsetLeft || 0;
                    b += parseInt(f.g.Hd(d, "borderTopWidth"), 10) || 0;
                    c += parseInt(f.g.Hd(d, "borderLeftWidth"), 10) || 0;
                    h = f.g.Hd(d, "position");
                    if (d.offsetParent === e && "absolute" === h)
                        break;
                    if ("fixed" === h) {
                        b += e.scrollTop || g.scrollTop || 0;
                        c += e.scrollLeft || g.scrollLeft || 0;
                        break
                    }
                    d = d.offsetParent
                } while (d);d = a;
                do {
                    if (d === e)
                        break;
                    b -= d.scrollTop || 0;
                    c -= d.scrollLeft || 0;
                    f.g.a8() || !f.l.tW && !k || (c += d.scrollWidth - d.clientWidth,
                    k && "hidden" !== f.g.Hd(d, "overflow-y") && "hidden" !== f.g.Hd(d, "overflow") && (c += 17));
                    d = d.parentNode
                } while (d);return new f.I(c,b)
            },
            a8: function() {
                f.g.UZ || (f.g.UZ = !0,
                    f.g.TZ = "ltr" === f.g.Hd(document.body, "direction"));
                return f.g.TZ
            },
            create: function(a, b, c) {
                a = document.createElement(a);
                c && (a.className = c);
                b && b.appendChild(a);
                return a
            },
            eR: function() {
                document.selection && document.selection.empty && document.selection.empty();
                this.s3 || (this.s3 = document.onselectstart,
                    document.onselectstart = f.a.qR)
            },
            kR: function() {},
            sda: function(a, b, c) {
                c ? this.xa(a, b) : this.Fa(a, b)
            },
            lp: function(a, b) {
                if (a && b)
                    return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            },
            xa: function(a, b) {
                a && b && !f.g.lp(a, b) && (a.className += (a.className ? " " : "") + b)
            },
            wca: function(a, b) {
                a && (a.className = b || "")
            },
            Fa: function(a, b) {
                function c(a, c) {
                    return c === b ? "" : a
                }
                a && b && (a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
            },
            SR: function(a, b) {
                return 1 === b ? "" : "opacity"in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
            },
            Xl: function(a, b) {
                if (a.style)
                    if ("opacity"in a.style)
                        a.style.opacity = b;
                    else if ("filter"in a.style) {
                        var c = Math.round(100 * b);
                        a.style.filter = "";
                        100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
                    }
            },
            qJ: function(a) {
                for (var b = document.documentElement.style, c = 0; c < a.length; c += 1)
                    if (a[c]in b)
                        return a[c];
                return !1
            },
            eS: function(a) {
                var b = f.l.uW;
                return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
            },
            Sga: function(a, b) {
                return f.g.eS(b.add(b.bd(-1 * a))) + (" scale(" + a + ") ")
            },
            Pia: function(a, b, c) {
                a.tg = b;
                !c && f.l.Py ? (b = f.g.eS(b),
                    c = a.style[f.g.He].split("rotate"),
                    1 < c.length ? (c[0] = b,
                        a.style[f.g.He] = c.join("rotate")) : a.style[f.g.He] = b,
                f.l.wT && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px",
                    a.style.top = b.y + "px")
            },
            ee: function(a) {
                a.tg || (a.tg = a.style.left ? new f.I(parseInt(a.style.left),parseInt(a.style.top)) : new f.I(0,0));
                return a.tg
            },
            Nia: function(a, b) {
                a = a instanceof Array ? a : [a];
                for (var c = 0; c < a.length; c += 1)
                    a[c].style.cssText = b
            },
            gV: function(a, b) {
                ";" !== b[b.length - 1] && (b += ";");
                return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b,
                    !0) : !1
            },
            Aa: function(a, b) {
                a = a instanceof Array ? a : [a];
                for (var c = 0; c < a.length; c += 1)
                    for (var d in b)
                        b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
                return this
            },
            Uv: function(a) {
                for (; a.childNodes.length; )
                    a.removeChild(a.childNodes[0])
            },
            remove: function(a) {
                a && a.parentNode && a.parentNode.removeChild(a)
            },
            rotate: function(a, b, c) {
                var d = f.g.He;
                c = c || {
                    x: a.clientWidth / 2,
                    y: a.clientHeight / 2
                };
                d ? (a.style[d] = "" + (" rotate(" + b + "deg)"),
                    a.style[f.g.Pn[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180),
                    b = Math.sin(b * Math.PI / 180),
                    a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()",
                0 < a.filters.length && (a = a.filters.item(0),
                    a.Dx = -c.x * d + c.y * b + c.x,
                    a.Dy = -c.x * b - c.y * d + c.y,
                    a.M11 = a.M22 = d,
                    a.M12 = -(a.M21 = b)))
            },
            bS: function(a, b, c) {
                var d = f.g.He;
                c = c || {
                    x: a.clientWidth / 2,
                    y: a.clientHeight / 2
                };
                return d ? f.g.Pn[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (f.g.Pn[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
            },
            Mk: function(a, b, c) {
                a.width = b;
                a.height = c
            },
            getElementsByClassName: function(a, b, c) {
                b = b || "*";
                c = c || document;
                if (c.getElementsByClassName)
                    return c.getElementsByClassName(a);
                b = c.getElementsByTagName(b);
                a = RegExp("(^|\\s)" + a + "(\\s|$)");
                c = [];
                for (var d = 0, e; d < b.length; d++)
                    e = b[d],
                    a.test(e.className) && c.push(e);
                return c
            },
            fillText: function(a, b) {
                if (a)
                    return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b,
                        a
            }
        };
        (function() {
                var a = f.g.qJ(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
                f.extend(f.g, {
                    eR: function() {
                        f.A.h(window, "selectstart", f.A.preventDefault);
                        if (a) {
                            var c = document.documentElement.style;
                            "none" !== c[a] && (b = c[a],
                                c[a] = "none")
                        }
                    },
                    kR: function() {
                        f.A.H(window, "selectstart", f.A.preventDefault);
                        a && "none" !== b && (document.documentElement.style[a] = b,
                            b = "none")
                    },
                    U7: function() {
                        f.A.h(window, "dragstart", f.A.preventDefault)
                    },
                    x8: function() {
                        f.A.H(window, "dragstart", f.A.preventDefault)
                    }
                })
            }
        )();
        f.g.He = f.g.qJ(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
        f.g.Pn = {
            transform: "transform",
            WebkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            MozTransform: "-moz-transform",
            msTransform: "-ms-transform"
        };
        f.g.Rw = f.g.qJ(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
        f.g.Sea = "webkitTransition" === f.g.Rw || "OTransition" === f.g.Rw ? f.g.Rw + "End" : "transitionend";
        f.A = {
            h: function(a, b, c, d) {
                function e(b) {
                    b = b || window.event;
                    b.target = b.target || b.srcElement;
                    return c.call(d || a, b, k)
                }
                var g = f.a.Fb(a) + "_" + f.a.Fb(c) + "_" + f.a.Fb(d || a)
                    , h = b + g;
                if (a[h])
                    return this;
                var k = b;
                f.l.uG && "mousewheel" === b && (b = "DOMMouseScroll");
                if (f.l.mn && ("mouseover" === b || "mouseout" === b)) {
                    var l = e;
                    b = "mouseover" === b ? "mouseenter" : "mouseleave";
                    e = function(a) {
                        l(a)
                    }
                }
                if (f.l.kU && 0 === b.indexOf("touch"))
                    return a[h] = e,
                        this.V5(a, b, e, g);
                f.l.he && "dblclick" === b && this.S5 && this.S5(a, e, g);
                "addEventListener"in a ? a.addEventListener(b, e, !1) : "attachEvent"in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
                a[h] = e;
                return this
            },
            Pl: function(a, b, c, d) {
                var e = this;
                this.h(a, b, function h(k) {
                    e.H(a, b, h, d);
                    return c.call(d || a, k || window.event, b)
                }, d)
            },
            H: function(a, b, c, d) {
                c = f.a.Fb(a) + "_" + f.a.Fb(c) + "_" + f.a.Fb(d || a);
                d = b + c;
                var e = a[d];
                f.l.uG && "mousewheel" === b && (b = "DOMMouseScroll");
                !f.l.mn || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
                f.l.kU && -1 < b.indexOf("touch") ? this.Iba(a, b, c) : f.l.he && "dblclick" === b && this.Eba ? this.Eba(a, c) : "removeEventListener"in a ? a.removeEventListener(b, e, !1) : "detachEvent"in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
                a[d] = null;
                return this
            },
            Ria: function(a, b) {
                var c = document.createEvent("MouseEvents");
                c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
                b.target.dispatchEvent(c)
            },
            stopPropagation: function(a) {
                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
                return this
            },
            ada: function(a) {
                var b = f.A.stopPropagation;
                f.l.he && (f.A.h(a, "touchstart", b, this),
                    f.A.h(a, "touchmove", b, this),
                    f.A.h(a, "touchend", b, this));
                f.l.Y || (f.A.h(a, "mousedown", b, this),
                    f.A.h(a, "mouseup", b, this),
                    f.A.h(a, "mousemove", b, this));
                f.l.tI && (f.A.h(a, "pointerdown", b, this),
                    f.A.h(a, "pointerup", b, this),
                    f.A.h(a, "pointermove", b, this));
                f.l.yT && (f.A.h(a, "MSPointerDown", b, this),
                    f.A.h(a, "MSPointerUp", b, this),
                    f.A.h(a, "MSPointerMove", b, this))
            },
            preventDefault: function(a) {
                a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                return this
            },
            stop: function(a) {
                return f.A.preventDefault(a).stopPropagation(a)
            },
            vca: function(a) {
                return a && a.getBoundingClientRect ? (a.cC = a.getBoundingClientRect(),
                    a.RK = [a.clientLeft, a.clientTop],
                    !0) : !1
            },
            Rda: function(a) {
                a.cC && (a.cC = null,
                    a.RK = null)
            },
            A8: function(a, b) {
                var c = b.cC || b.getBoundingClientRect()
                    , d = b.RK || [b.clientLeft, b.clientTop];
                return new f.I(a.clientX - c.left - d[0],a.clientY - c.top - d[1])
            },
            xi: function(a, b) {
                if (b && b.getBoundingClientRect)
                    return this.A8(a, b);
                var c = document.body
                    , d = document.documentElement
                    , c = new f.I(f.l.he ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft),f.l.he ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
                return b ? c.Sa(f.g.Lz(b)) : c
            },
            SS: function(a) {
                return 1 === a.which || 0 === a.button || 1 === a.button
            }
        };
        f.extend(f.A, {
            ZD: [],
            MN: !1,
            V5: function(a, b, c, d) {
                switch (b) {
                    case "touchstart":
                        return this.Y5(a, b, c, d);
                    case "touchend":
                        return this.W5(a, b, c, d);
                    case "touchmove":
                        return this.X5(a, b, c, d)
                }
            },
            tk: function(a) {
                if (f.l.tI)
                    return a;
                switch (a) {
                    case "pointerdown":
                        return "MSPointerDown";
                    case "pointerup":
                        return "MSPointerUp";
                    case "pointercancel":
                        return "MSPointerCancel";
                    case "pointermove":
                        return "MSPointerMove"
                }
            },
            Y5: function(a, b, c, d) {
                function e(a) {
                    for (var b = !1, d = 0; d < g.length; d += 1)
                        if (g[d].pointerId === a.pointerId) {
                            b = !0;
                            break
                        }
                    b || g.push(a);
                    a.touches = g.slice();
                    a.changedTouches = [a];
                    c(a)
                }
                var g = this.ZD;
                a["_amap_touchstart" + d] = e;
                a.addEventListener(this.tk("pointerdown"), e, !1);
                this.MN || (a = function(a) {
                    for (var b = 0; b < g.length; b += 1)
                        if (g[b].pointerId === a.pointerId) {
                            g.splice(b, 1);
                            break
                        }
                }
                    ,
                    document.documentElement.addEventListener(this.tk("pointerup"), a, !1),
                    document.documentElement.addEventListener(this.tk("pointercancel"), a, !1),
                    this.MN = !0);
                return this
            },
            X5: function(a, b, c, d) {
                function e(a) {
                    if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
                        for (var b = 0; b < g.length; b += 1)
                            if (g[b].pointerId === a.pointerId) {
                                g[b] = a;
                                break
                            }
                        a.touches = g.slice();
                        a.changedTouches = [a];
                        c(a)
                    }
                }
                var g = this.ZD;
                a["_amap_touchmove" + d] = e;
                a.addEventListener(this.tk("pointermove"), e, !1);
                return this
            },
            W5: function(a, b, c, d) {
                function e(a) {
                    for (var b = 0; b < g.length; b += 1)
                        if (g[b].pointerId === a.pointerId) {
                            g.splice(b, 1);
                            break
                        }
                    a.touches = g.slice();
                    a.changedTouches = [a];
                    c(a)
                }
                var g = this.ZD;
                a["_amap_touchend" + d] = e;
                a.addEventListener(this.tk("pointerup"), e, !1);
                a.addEventListener(this.tk("pointercancel"), e, !1);
                return this
            },
            Iba: function(a, b, c) {
                c = a["_amap_" + b + c];
                switch (b) {
                    case "touchstart":
                        a.removeEventListener(this.tk("pointerdown"), c, !1);
                        break;
                    case "touchmove":
                        a.removeEventListener(this.tk("pointermove"), c, !1);
                        break;
                    case "touchend":
                        a.removeEventListener(this.tk("pointerup"), c, !1),
                            a.removeEventListener(this.tk("pointercancel"), c, !1)
                }
                return this
            }
        });
        (function() {
                function a(a) {
                    var b = a.target || a.srcElement;
                    b.$K && g(b.$K);
                    b.$K = e(function() {
                        var c = b.Vk;
                        if (c && c.Uk)
                            for (var d = 0; d < c.Uk.length; d += 1)
                                c.Uk[d].call(c, a)
                    })
                }
                function b() {
                    var b = this.contentDocument.defaultView;
                    b.Vk = this.aY;
                    b.addEventListener("resize", a);
                    a.call(b, {
                        target: b
                    })
                }
                var c = document.attachEvent
                    , d = navigator.userAgent.match(/(Trident|Edge)/)
                    , e = f.a.cc
                    , g = f.a.$f;
                f.extend(f.A, {
                    a6: function(e, g) {
                        if (!e.Uk)
                            if (e.Uk = [],
                                c)
                                e.Vk = e,
                                    e.attachEvent("onresize", a);
                            else {
                                "static" === window.getComputedStyle(e).position && (e.style.position = "relative");
                                var l = e.Vk = document.createElement("object");
                                l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                                l.aY = e;
                                l.onload = b;
                                l.type = "text/html";
                                d && e.appendChild(l);
                                l.data = "about:blank";
                                d || e.appendChild(l)
                            }
                        e.Uk.push(g)
                    },
                    pia: function(b, d) {
                        b.Uk.splice(b.Uk.indexOf(d), 1);
                        b.Uk.length || (c ? b.detachEvent("onresize", a) : (b.Vk.contentDocument.defaultView.removeEventListener("resize", a),
                            b.Vk = !b.removeChild(b.Vk)))
                    },
                    c7: function(a) {
                        a.Uk = null;
                        if (a.Vk) {
                            var b = a.Vk;
                            b.parentNode === a && b.parentNode.removeChild(b);
                            a.Vk = null
                        }
                    }
                })
            }
        )();
        var oc;
        f.ib = {
            Z$: f.w.cb + "/maps",
            Uo: f.Z.Uo,
            KH: 0,
            bs: [],
            Qo: {},
            hg: function(a, b) {
                function c() {
                    d += 1;
                    d === e.length && b && b()
                }
                a.length || b();
                for (var d = 0, e = [], g = 0; g < a.length; g += 1) {
                    var h = this.Uo[a[g]];
                    if (h)
                        for (var k = 0; k < h.length; k += 1)
                            e.push(h[k]);
                    e.push(a[g])
                }
                for (g = 0; g < e.length; g += 1)
                    this.rG(e[g], c)
            },
            rv: function(a) {
                for (var b = 0; b < a.length; b += 1)
                    if (1 !== this.kz(a[b]).status)
                        return !1;
                return !0
            },
            rG: function(a, b) {
                var c = this.kz(a);
                if (1 === c.status)
                    b && b();
                else {
                    b && c.gr.push(b);
                    try {
                        if (f.l.Ij && window.localStorage) {
                            var d = window.localStorage["_AMap_" + a];
                            d && (d = JSON.parse(d),
                                d.version === f.w.Ug ? (window._jsload_(a, d.script, !0),
                                d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                        }
                    } catch (e) {}
                    if (0 === c.status) {
                        this.tba(a);
                        var g = this;
                        g.KH || (g.KH = 1,
                            window.setTimeout(function() {
                                g.KH = 0;
                                var a = g.Z$ + "/modules?v=" + f.w.qu + "&key=" + f.w.key + "&m=" + g.bs.join(",") + "&vrs=" + f.w.Ug;
                                f.ib.CC(g.bs.join(","));
                                g.bs = [];
                                c.QA = g.F$(a)
                            }, 1));
                        c.status = -1
                    }
                }
            },
            CC: function(a) {
                new f.Ka.Xa(f.w.Vc + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + f.w.key, "m=" + a].join("&"),{
                    callback: "callback"
                })
            },
            load: function(a, b) {
                var c = this.Uo[a];
                if (c) {
                    for (var d = [], e = 0; e < c.length; e += 1)
                        d.push(c[e]);
                    d.push(a);
                    for (var g = 0, c = function() {
                        g += 1;
                        g === d.length && b && b()
                    }, e = 0; e < d.length; e += 1)
                        this.rG(d[e], c)
                } else
                    this.rG(a, b)
            },
            tba: function(a) {
                for (var b = 0; b < this.bs.length; b += 1)
                    if (this.bs[b] === a)
                        return;
                this.bs.push(a)
            },
            Pj: function(a, b) {
                var c = this.kz(a);
                try {
                    eval(b)
                } catch (d) {
                    return
                }
                c.status = 1;
                for (var e = 0, g = c.gr.length; e < g; e += 1)
                    c.gr[e]();
                c.gr = []
            },
            Tfa: function(a, b) {
                var c = this;
                c.timeout = setTimeout(function() {
                    1 !== c.Qo[a].status ? (c.remove(a),
                        c.load(a, b)) : clearTimeout(c.timeout)
                }, 5E3)
            },
            kz: function(a) {
                this.Qo[a] || (this.Qo[a] = {},
                    this.Qo[a].status = 0,
                    this.Qo[a].gr = []);
                return this.Qo[a]
            },
            remove: function(a) {
                this.Qo[a] = null
            },
            F$: function(a) {
                f.w.mode && (a += "&mode=" + f.w.mode);
                var b = document.createElement("script");
                b.charset = "utf-8";
                a && 0 === a.indexOf(f.w.cb) && (b.crossOrigin = "Anonymous");
                b.src = a;
                document.body.appendChild(b);
                return b
            }
        };
        window._jsload_ = function(a, b, c) {
            var d = f.ib.kz(a);
            d.QA && 0 <= f.a.indexOf(document.body.childNodes, d.QA) && document.body.removeChild(d.QA);
            d.QA = null;
            try {
                if (!c && window.localStorage && b && "" !== b && f.l.Ij) {
                    var e = window.localStorage["_AMap_" + a]
                        , e = e || "{}"
                        , e = JSON.parse(e);
                    e.version !== f.w.Ug || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                        version: f.w.Ug,
                        script: b
                    })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                        version: f.w.Ug,
                        script: b,
                        css: e.css
                    }))
                }
            } catch (g) {}
            f.ib.Pj(a, b)
        }
        ;
        window._cssload_ = function(a, b, c) {
            try {
                !c && window.localStorage && b && "" !== b && f.l.Ij && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    css: b,
                    version: f.w.Ug
                }))
            } catch (d) {}
            var e = document.createElement("style");
            e.type = "text/css";
            -1 === f.w.cb.indexOf("webapi.amap.com") && (b = b.replace(eval("/webapi.amap.com/gi"), f.w.cb.split("://")[1]));
            "https" === f.w.bc && (b = b.replace(eval("/http:/gi"), "https:"));
            e.styleSheet ? (a = function() {
                try {
                    e.styleSheet.cssText = b
                } catch (a) {}
            }
                ,
                e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
            a = document.head || document.getElementsByTagName("head")[0];
            2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
        }
        ;
        (function(a) {
                var b = f.l;
                if (!f.indexedDB && b.Ee) {
                    var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB
                        , d = a.IDBKeyRange || a.pja || a.Gha || a.Fha;
                    if (c) {
                        var e = f.a
                            , g = null;
                        a = "amap-jsapi" + (a.Hea ? "-debug" : "");
                        var h = f.extend({}, f.ia), k;
                        try {
                            k = c.open(a),
                                k.onsuccess = function() {
                                    g = this.result;
                                    h.r("dbReady", {
                                        status: "success"
                                    })
                                }
                                ,
                                k.onerror = function() {
                                    h.r("dbReady", {
                                        status: "error"
                                    })
                                }
                                ,
                                k.onblocked = function() {
                                    h.r("dbReady", {
                                        status: "blocked"
                                    })
                                }
                                ,
                                k.onupgradeneeded = function(a) {
                                    a.currentTarget.result.createObjectStore("tile", {
                                        keyPath: "tileKey"
                                    })
                                }
                        } catch (l) {
                            b.Ee = !1
                        } finally {
                            if (!b.Ee)
                                return
                        }
                        var b = function(a) {
                            return function() {
                                try {
                                    return a.apply(this, arguments)
                                } catch (b) {
                                    var c = arguments[arguments.length - 1];
                                    "function" === typeof c && setTimeout(function() {
                                        c({
                                            code: 4
                                        })
                                    }, 1)
                                }
                            }
                        }
                            , m = b(function(a, b) {
                            return null === g ? (setTimeout(function() {
                                b && b({
                                    code: 3
                                })
                            }, 1),
                                null) : g.transaction("tile", a).objectStore("tile")
                        })
                            , n = function(a, b) {
                            for (var c = -1, d = 0, e = b.length; d < e; d++)
                                if (b[d] > a) {
                                    c = d;
                                    break
                                }
                            return c
                        };
                        f.indexedDB = {
                            ru: b(function(a, b) {
                                g ? "function" === typeof a && a() : h.h("dbReady", function(c) {
                                    "success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
                                        code: 3,
                                        status: status
                                    })
                                })
                            }),
                            count: b(function(a) {
                                var b = this
                                    , c = arguments;
                                this.ru(function() {
                                    b.CC.apply(b, c)
                                }, a)
                            }),
                            CC: b(function(a) {
                                var b = m("readonly", a).count();
                                b.onsuccess = function() {
                                    a(null, b.result)
                                }
                                ;
                                b.onerror = function() {
                                    a({
                                        code: 7
                                    })
                                }
                            }),
                            get: b(function(a, b) {
                                var c = this
                                    , d = arguments;
                                this.ru(function() {
                                    c.o_.apply(c, d)
                                }, b)
                            }),
                            o_: b(function(a, b) {
                                var c = m("readonly", b);
                                if (e.isArray(a)) {
                                    var g = []
                                        , h = a.slice(0);
                                    a.sort();
                                    c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                                        if (c = c.target.result) {
                                            var d = e.indexOf(h, c.value.tileKey);
                                            -1 !== d && (g[d] = c.value);
                                            c["continue"](a[n(c.value.tileKey, a)])
                                        } else
                                            b && b(null, g.filter(function(a) {
                                                return void 0 !== a
                                            }))
                                    }
                                } else
                                    c = c.get(a),
                                        c.onsuccess = function(a) {
                                            b && b(null, a.target.result)
                                        }
                                        ,
                                        c.onerror = function() {
                                            b && b({
                                                code: 1
                                            })
                                        }
                            }),
                            add: b(function(a, b) {
                                var c = this
                                    , d = arguments;
                                this.ru(function() {
                                    c.eY.apply(c, d)
                                }, b)
                            }),
                            eY: b(function(a, b) {
                                e.isArray(a) || (a = [a]);
                                for (var c = a.length, d = 0, g = c; d < g; d++) {
                                    var h = m("readwrite", b).add(a[d]);
                                    h.onsuccess = function() {
                                        0 === --c && b(null)
                                    }
                                    ;
                                    h.onerror = function(a) {
                                        -1 === a.target.error.message.indexOf("Key already exists") ? (b({
                                            code: 5
                                        }),
                                            c = 0) : 0 === --c && b(null)
                                    }
                                }
                            }),
                            remove: b(function(a, b) {
                                var c = this
                                    , d = arguments;
                                this.ru(function() {
                                    c.y4.apply(c, d)
                                }, b)
                            }),
                            y4: b(function(a, b) {
                                var c = m("readwrite", b);
                                e.isArray(a) || (a = [a]);
                                a = a.sort();
                                c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                                    if (c = c.target.result) {
                                        if (e.ea(c.value.tileKey, a))
                                            c["delete"]();
                                        c["continue"](a[n(c.value.tileKey, a)])
                                    } else
                                        b && b(null)
                                }
                            }),
                            clear: b(function(a) {
                                var b = this
                                    , c = arguments;
                                this.ru(function() {
                                    b.ax.apply(b, c)
                                }, a)
                            }),
                            ax: b(function(a) {
                                var b = m("readwrite", a).clear();
                                b.onsuccess = function() {
                                    a && a(null)
                                }
                                ;
                                b.onerror = function() {
                                    a && a({
                                        code: 2
                                    })
                                }
                            })
                        }
                    } else
                        b.Ee = !1
                }
            }
        )(window);
        (function() {
                function a(a) {
                    u.data.keys = u.data.keys.filter(function(b) {
                        return !q.ea(a, b)
                    }).concat(a)
                }
                function b(a) {
                    return [f.w.Ug, a.Oi.replace(/\//g, ","), a.Bf ? "w" : "v", t(a.ga, a.De), l(a.url)].join("|")
                }
                function c() {
                    u.data.keys.length >= u.QB && d()
                }
                function d() {
                    var a = u.data.keys.length
                        , b = Math.floor(a / 2);
                    a > u.QB && (b = Math.floor(a - u.QB / 2));
                    a = u.data.keys.slice(0, b);
                    u.data.keys = u.data.keys.slice(b + 1);
                    r.remove(a, function(a) {
                        a && 3 === a.code && (p.Ee = !1)
                    })
                }
                function e() {
                    h();
                    v.setItem(u.key, u.data, !0);
                    p.Ee && r && r.clear(function(a) {
                        a && 3 === a.code && (p.Ee = !1)
                    })
                }
                function g() {
                    h();
                    var a = v.getItem(u.key, !0);
                    a && (a.wB === u.data.wB && a.gQ === u.data.gQ ? u.data = a : e())
                }
                function h() {
                    u.data = {
                        wB: p.Pk,
                        gQ: f.w.Ug,
                        keys: [],
                        ag: {},
                        Nh: {}
                    };
                    u.bm = {}
                }
                function k(a) {
                    a && (u.data.wB = a,
                        p.Pk = a)
                }
                function l(a) {
                    var b = "limg";
                    /flds=([^&]+)/.test(a) && (b = RegExp.$1);
                    return b
                }
                function m(a) {
                    if ("object" === typeof a && null !== a) {
                        var b = [];
                        if (q.isArray(a))
                            if (Object.keys(a).length == a.length)
                                b = a.map(function(a) {
                                    return m(a)
                                });
                            else {
                                b.push("__arrayObject");
                                var c = {}, d;
                                for (d in a)
                                    (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = m(a[d]));
                                b.push(c);
                                b.push(a.map(function(a) {
                                    return m(a)
                                }))
                            }
                        else if (q.Kr(a, "Float32Array"))
                            b.push("__Float32Array"),
                                b.push(Array.prototype.slice.call(a));
                        else if (q.Kr(a, "Uint16Array"))
                            b.push("__Uint16Array"),
                                b.push(Array.prototype.slice.call(a));
                        else
                            for (d in b = {},
                                a)
                                a.hasOwnProperty(d) && (b[d] = m(a[d]));
                        return b
                    }
                    return a
                }
                function n(a) {
                    if ("object" === typeof a && null !== a) {
                        var b = {};
                        if (q.isArray(a))
                            if ("__Float32Array" === a[0])
                                b = new Float32Array(a[1]);
                            else if ("__Uint16Array" === a[0])
                                b = new Uint16Array(a[1]);
                            else if ("__arrayObject" === a[0]) {
                                b = n(a[2]);
                                a = a[1];
                                for (var c in a)
                                    a.hasOwnProperty(c) && (b[c] = a[c])
                            } else
                                b = a.map(function(a) {
                                    return n(a)
                                });
                        else
                            for (c in a)
                                a.hasOwnProperty(c) && (b[c] = n(a[c]));
                        return b
                    }
                    return a
                }
                var p = f.l
                    , q = f.a;
                if (!f.eo && (f.l.fw || f.l.Yl) && (p.Ee || p.Ij)) {
                    var r = f.indexedDB
                        , t = function(a, b) {
                        return [a ? 1 : 0, p.Y ? 1 : 0, b ? 1 : 0].join()
                    }
                        , u = {
                        QB: 1E3,
                        key: "_AMap_data.tileKeys"
                    }
                        , x = []
                        , v = {
                        getItem: function(a, b) {
                            var c = localStorage.getItem(a);
                            if (c && b) {
                                var d;
                                try {
                                    d = JSON.parse(c)
                                } catch (e) {
                                    d = null
                                }
                                c = d
                            }
                            return c
                        },
                        setItem: function(a, b, c) {
                            var d = b;
                            c && (d = JSON.stringify(b),
                            1.5 < d.length / 1024 / 1024 && Object.keys(b.Nh).length && (b.Nh = {},
                                d = JSON.stringify(b)));
                            try {
                                localStorage.setItem(a, d)
                            } catch (g) {
                                e()
                            }
                        }
                    };
                    f.eo = {
                        get: function(c, d) {
                            function g(a) {
                                var b = {
                                    hH: v,
                                    W$: T,
                                    ag: u.data.ag
                                };
                                /\|limg/.test(M[0]) ? b.x$ = h(a) : b.Kd = k(a);
                                d && d(null, b)
                            }
                            function h(a) {
                                var b = [];
                                a.forEach(function(a) {
                                    a.data.forEach(function(a) {
                                        b.push(a)
                                    })
                                });
                                return b
                            }
                            function k(a) {
                                var b = [];
                                l(c.url).split(",").forEach(function(c) {
                                    a.forEach(function(a) {
                                        if (a = a.data[c]) {
                                            var d = a.Ni;
                                            a.Ni = new f.di(d.z,d.x,d.y);
                                            a.Ni.Q = d.Q;
                                            for (var e in a.Ja)
                                                a.Ja.hasOwnProperty(e) && delete a.Ja[e].Xn;
                                            b.push(a)
                                        }
                                    })
                                });
                                return b
                            }
                            var t = c.oda
                                , v = []
                                , M = []
                                , T = []
                                , Z = [];
                            if ("FS" !== c.type && !u.data.keys.length)
                                return d({
                                    code: 1
                                });
                            t.forEach(function(a) {
                                var d = b({
                                    Oi: a.key,
                                    url: c.url,
                                    Bf: c.Bf,
                                    ga: c.D.ga,
                                    De: c.De
                                });
                                "FS" !== c.type || p.Ee ? "FS" !== c.type || /\|w\|/.test(d) ? q.ea(u.data.keys, d) ? (v.push(a),
                                    M.push(d)) : T.push(a) : (x.push(d),
                                    u.data.Nh[d] ? (v.push(a),
                                        M.push(d),
                                        Z.push({
                                            data: n(u.data.Nh[d]),
                                            tileKey: d
                                        })) : q.ea(u.data.keys, d) ? (v.push(a),
                                        M.push(d)) : T.push(a)) : /\|w\|/.test(d) ? T.push(a) : (x.push(d),
                                    u.data.Nh[d] ? (v.push(a),
                                        M.push(d),
                                        Z.push({
                                            data: n(u.data.Nh[d]),
                                            tileKey: d
                                        })) : T.push(a))
                            });
                            if (M.length) {
                                if (!p.Ee)
                                    return g(Z);
                                var B = M.slice(0);
                                if (Z.length) {
                                    if (Z.length === B.length)
                                        return g(Z);
                                    Z.forEach(function(a) {
                                        a = q.indexOf(B, a.tileKey);
                                        B.splice(a, 1)
                                    })
                                }
                                r.get(B, function(b, h) {
                                    if (b)
                                        3 === b.code ? p.Ee = !1 : e(),
                                        d && d({
                                            code: 1
                                        });
                                    else {
                                        "FS" === c.type && h.length && h.forEach(function(a) {
                                            /\|w\|/.test(a.tileKey) || (u.data.Nh[a.tileKey] = m(a.data))
                                        });
                                        if (Z.length) {
                                            var l = [];
                                            h = h.concat(Z);
                                            h.forEach(function(a) {
                                                var b = q.indexOf(x, a.tileKey);
                                                l[b] = a
                                            });
                                            h = l = l.filter(function(a) {
                                                return void 0 !== a
                                            })
                                        }
                                        h.length === M.length ? (g(h),
                                            a(M)) : (e(),
                                        d && d({
                                            code: 1
                                        }))
                                    }
                                })
                            } else
                                d && d({
                                    code: 1
                                })
                        },
                        dm: function(a) {
                            a.xs.forEach(function(c) {
                                c = b({
                                    Oi: c.key,
                                    url: a.url,
                                    Bf: a.Bf,
                                    ga: a.D.ga,
                                    De: a.De
                                });
                                u.bm[c] && delete u.bm[c]
                            })
                        },
                        set: function(a, c) {
                            a.Pk && a.Pk !== u.data.wB && (k(a.Pk),
                                e(),
                            c && c({
                                code: 2
                            }));
                            if (a.Hi) {
                                var d = b({
                                    Oi: a.Oi,
                                    url: a.url,
                                    Bf: a.Bf,
                                    ga: a.D.ga,
                                    De: a.De
                                });
                                if (p.Ee || q.ea(x, d)) {
                                    var g = u.bm[d] || [];
                                    g.push(q.Db(a.data));
                                    u.bm[d] = g
                                }
                            } else
                                a.Kd.forEach(function(c) {
                                    var d = b({
                                        Oi: c.Oi,
                                        url: a.url,
                                        Bf: a.Bf,
                                        ga: a.D.ga,
                                        De: a.De
                                    });
                                    if (p.Ee || q.ea(x, d)) {
                                        var e = u.bm[d] || {};
                                        e[c.yd] = q.Db(c);
                                        u.bm[d] = e
                                    }
                                });
                            u.data.ag = {
                                "x-vd-v": a["x-vd-v"],
                                tv: a.tv,
                                bgc: a.bgc
                            }
                        },
                        flush: function() {
                            var a = !0;
                            return function() {
                                var b = this;
                                if (a) {
                                    if (Object.keys(u.data.Nh).length)
                                        for (var c in u.data.Nh)
                                            u.data.Nh.hasOwnProperty(c) && !q.ea(x, c) && delete u.data.Nh[c];
                                    p.Ee ? r.count(function(a, c) {
                                        a || (c !== u.data.keys.length ? (r.clear(function(a) {
                                            !a && b.tx()
                                        }),
                                            u.data.keys = []) : b.tx())
                                    }) : b.tx();
                                    a = !1
                                } else
                                    b.tx()
                            }
                        }(),
                        tx: function() {
                            var a = {}
                                , b = []
                                , d = Object.keys(u.bm)
                                , g = [];
                            d.length ? (d.forEach(function(c) {
                                var d = u.bm[c];
                                c.split("|").pop().split(",").every(function(a) {
                                    return "limg" === a ? d && 3 === d.length : d && void 0 !== d[a]
                                }) ? (q.ea(u.data.keys, c) || (g.push(c),
                                    b.push({
                                        tileKey: c,
                                        data: d
                                    })),
                                q.ea(x, c) && void 0 === u.data.Nh[c] && (u.data.Nh[c] = m(d))) : a[c] = d
                            }),
                            b.length && (p.Ee ? r.add(b, function(a) {
                                a ? 3 !== a.code ? e() : p.Ee = !1 : (u.data.keys = u.data.keys.concat(g),
                                    v.setItem(u.key, u.data, !0),
                                    c())
                            }) : v.setItem(u.key, u.data, !0)),
                                u.bm = a) : (v.setItem(u.key, u.data, !0),
                                c())
                        }
                    };
                    g()
                }
            }
        )();
        f.W = f.Z.extend({
            B: function(a, b, c) {
                var d = parseFloat(b)
                    , e = parseFloat(a);
                if (isNaN(a) || isNaN(b))
                    throw "Invalid Object: LngLat(" + e + ", " + d + ")";
                !0 !== c && (d = Math.max(Math.min(d, 90), -90),
                    e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
                this.N = d;
                this.L = e
            },
            Ez: function() {
                return f.a.df(this.L, 6)
            },
            Dz: function() {
                return f.a.df(this.N, 6)
            },
            add: function(a, b) {
                return new f.W(this.L + a.L,this.N + a.N,b)
            },
            Sa: function(a, b) {
                return new f.W(this.L - a.L,this.N - a.N,b)
            },
            ec: function(a, b) {
                return new f.W(this.L / a,this.N / a,b)
            },
            bd: function(a, b) {
                return new f.W(this.L * a,this.N * a,b)
            },
            Eg: function(a) {
                return f.GB.distance(this, a)
            },
            offset: function(a, b) {
                if (isNaN(a) || isNaN(b))
                    return !1;
                var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.N * Math.PI / 180))
                    , c = this.L + 180 * c / Math.PI
                    , d = 2 * Math.asin(Math.round(b) / 12756274);
                return new f.W(c,this.N + 180 * d / Math.PI)
            },
            yb: function(a) {
                a = f.a.ra(a);
                return a instanceof f.W ? 1E-9 >= Math.max(Math.abs(this.N - a.N), Math.abs(this.L - a.L)) : !1
            },
            toString: function() {
                return f.a.df(this.L, 6) + "," + f.a.df(this.N, 6)
            },
            Pi: function() {
                return [this.L, this.N]
            },
            Db: function() {
                var a = this.controlPoints
                    , b = new f.W(this.L,this.N);
                a && (b.controlPoints = [].concat(a));
                return b
            }
        });
        f.W.r9 = function(a, b, c) {
            c = c + 1 || Math.round(Math.abs(a.L - b.L));
            if (!c || 0.001 > Math.abs(a.L - b.L))
                return [];
            var d = []
                , e = f.Vi.So
                , g = f.Vi.xba
                , h = Math.asin
                , k = Math.sqrt
                , l = Math.sin
                , m = Math.pow
                , n = Math.cos
                , p = Math.atan2
                , q = a.N * e;
            a = a.L * e;
            var r = b.N * e;
            b = b.L * e;
            for (var h = 2 * h(k(m(l((q - r) / 2), 2) + n(q) * n(r) * m(l((a - b) / 2), 2))), t, u, x, v, e = 1; e < c; e += 1)
                t = 1 / c * e,
                    u = l((1 - t) * h) / l(h),
                    x = l(t * h) / l(h),
                    t = u * n(q) * n(a) + x * n(r) * n(b),
                    v = u * n(q) * l(a) + x * n(r) * l(b),
                    u = u * l(q) + x * l(r),
                    u = p(u, k(m(t, 2) + m(v, 2))),
                    t = p(v, t),
                    d.push(new f.W(t * g,u * g));
            return d
        }
        ;
        f.W.cn({
            Ez: "getLng",
            Dz: "getLat",
            add: "add",
            Sa: "subtract",
            ec: "divideBy",
            bd: "multiplyBy",
            Eg: "distance",
            offset: "offset",
            yb: "equals",
            toString: "toString"
        });
        f.Nd = f.Z.extend({
            B: function() {
                var a = null
                    , b = null;
                if (2 === arguments.length)
                    a = f.a.ra(arguments[0]),
                        b = f.a.ra(arguments[1]);
                else if (4 === arguments.length)
                    a = new f.W(arguments[0],arguments[1]),
                        b = new f.W(arguments[2],arguments[3]);
                else
                    throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
                this.Eb = a;
                this.Cb = b
            },
            $u: function() {
                return this.Eb
            },
            Yu: function() {
                return this.Cb
            },
            yi: function() {
                return new f.W(this.Eb.L,this.Cb.N,!0)
            },
            hn: function() {
                return new f.W(this.Cb.L,this.Eb.N,!0)
            },
            contains: function(a) {
                var b = this.Eb, c = this.Cb, d;
                a instanceof f.Nd ? (d = a.Eb,
                    a = a.Cb) : d = a = f.a.ra(a);
                var e = d.L
                    , g = b.L
                    , h = a.L
                    , k = c.L;
                g > k && (k += 360,
                0 > e && (e += 360),
                0 > h && (h += 360));
                return d.N >= b.N && a.N <= c.N && e >= g && h <= k
            },
            Me: function(a) {
                var b = this.Eb
                    , c = this.Cb
                    , d = a.Eb;
                a = a.Cb;
                var e = a.L >= b.L && d.L <= c.L;
                return a.N >= b.N && d.N <= c.N && e
            },
            Hg: function() {
                return new f.W(this.Eb.L > this.Cb.L ? (this.Eb.L + this.Cb.L + 360) / 2 % 360 : (this.Eb.L + this.Cb.L) / 2,(this.Eb.N + this.Cb.N) / 2)
            },
            extend: function(a) {
                this.Eb.L = Math.min(this.Eb.L, a.L);
                this.Eb.N = Math.min(this.Eb.N, a.N);
                this.Cb.L = Math.max(this.Cb.L, a.L);
                this.Cb.N = Math.max(this.Cb.N, a.N);
                return this
            },
            Qda: function(a) {
                return this.extend(a.Eb).extend(a.Cb)
            },
            toString: function() {
                return this.Eb.toString() + ";" + this.Cb.toString()
            },
            Db: function() {
                return new f.Nd(this.Eb.Db(),this.Cb.Db())
            },
            yb: function(a) {
                return a instanceof f.Nd ? this.Eb.yb(a.Eb) && this.Cb.yb(a.Cb) : !1
            },
            gg: function() {
                return Math.abs(this.Cb.L - this.Eb.L)
            },
            eg: function() {
                return Math.abs(this.Eb.N - this.Cb.N)
            }
        });
        f.Nd.cn({
            $u: "getSouthWest",
            Yu: "getNorthEast",
            yi: "getNorthWest",
            hn: "getSouthEast",
            contains: "contains",
            Me: "intersects",
            Hg: "getCenter"
        });
        f.I = f.Z.extend({
            B: function(a, b, c) {
                if (isNaN(a) || isNaN(b))
                    throw "Invalid Object: Pixel(" + a + ", " + b + ")";
                this.x = c ? Math.round(a) : Number(a);
                this.y = c ? Math.round(b) : Number(b)
            },
            Ud: function() {
                return this.x
            },
            jd: function() {
                return this.y
            },
            add: function(a, b) {
                return new f.I(this.x + a.x,this.y + a.y,b)
            },
            Sa: function(a, b) {
                return new f.I(this.x - a.x,this.y - a.y,b)
            },
            ec: function(a, b) {
                return new f.I(this.x / a,this.y / a,b)
            },
            bd: function(a, b) {
                return new f.I(this.x * a,this.y * a,b)
            },
            Eg: function(a) {
                var b = a.x - this.x;
                a = a.y - this.y;
                return Math.sqrt(b * b + a * a)
            },
            floor: function() {
                return new f.I(Math.floor(this.x),Math.floor(this.y))
            },
            round: function() {
                return new f.I(this.x,this.y,!0)
            },
            yb: function(a) {
                return a instanceof f.I && this.x === a.x && this.y === a.y
            },
            Db: function(a) {
                return new f.I(this.x,this.y,a)
            },
            toString: function() {
                return this.x + "," + this.y
            },
            Pi: function() {
                return [this.x, this.y]
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            direction: function() {
                var a = this.x
                    , b = this.y;
                if (0 === a && 0 === b)
                    return null;
                if (0 === a)
                    return 0 < b ? Math.PI / 2 : -Math.PI / 2;
                var c = 180 * Math.atan(b / a) / Math.PI;
                return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
            },
            Po: function(a) {
                var b = this.length()
                    , c = a.length();
                return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
            }
        });
        f.I.cn({
            Ud: "getX",
            jd: "getY",
            add: "add",
            Sa: "subtract",
            ec: "divideBy",
            bd: "multiplyBy",
            Eg: "distance",
            yb: "equals",
            toString: "toString"
        });
        f.sc = f.Z.extend({
            B: function(a, b, c) {
                if (isNaN(a) || isNaN(b))
                    throw "Invalid Object: Size(" + a + ", " + b + ")";
                this.width = c ? Math.round(a) : Number(a);
                this.height = c ? Math.round(b) : Number(b)
            },
            gg: function() {
                return this.width
            },
            eg: function() {
                return this.height
            },
            As: function() {
                return new f.I(this.gg(),this.eg())
            },
            contains: function(a) {
                return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
            },
            yb: function(a) {
                return a instanceof f.sc && this.width === a.width && this.height === a.height
            },
            toString: function() {
                return this.gg() + "," + this.eg()
            }
        });
        f.sc.cn({
            gg: "getWidth",
            eg: "getHeight",
            toString: "toString"
        });
        f.dK = f.Z.extend({
            B: function(a) {
                this.path = a;
                if (a[0]instanceof f.I) {
                    this.path = [];
                    for (var b = 0; b < a.length; b += 1)
                        this.path.push([a[b].x, a[b].y])
                } else if (a[0]instanceof f.W)
                    for (this.path = [],
                             b = 0; b < a.length; b += 1)
                        this.path.push([a[b].L, a[b].N]);
                this.bounds = a
            },
            contains: function(a, b) {
                a instanceof f.I ? a = [a.x, a.y] : a instanceof f.W && (a = [a.L, a.N]);
                return f.zc.Tc(a, this.path, b)
            }
        });
        f.te = f.Z.extend({
            B: function() {
                if (2 === arguments.length)
                    this.qb = arguments[0],
                        this.tc = arguments[1];
                else if (1 === arguments.length && arguments[0]instanceof Array || 4 === arguments.length) {
                    var a = arguments[0]instanceof Array ? arguments[0] : arguments;
                    this.qb = new f.I(a[0],a[1]);
                    this.tc = new f.I(a[2],a[3])
                } else
                    throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
            },
            Hg: function(a) {
                return new f.I((this.qb.x + this.tc.x) / 2,(this.qb.y + this.tc.y) / 2,a)
            },
            contains: function(a) {
                var b;
                a instanceof f.te ? (b = a.qb,
                    a = a.tc) : b = a;
                return b.x > this.qb.x && a.x < this.tc.x && b.y > this.qb.y && a.y < this.tc.y
            },
            gg: function() {
                return this.tc.x - this.qb.x
            },
            eg: function() {
                return this.tc.y - this.qb.y
            },
            Me: function(a, b) {
                b || 0 === b || (b = 20);
                var c = this.qb
                    , d = this.tc
                    , e = a.qb
                    , g = a.tc
                    , h = g.y >= c.y - b && e.y <= d.y + b;
                return g.x >= c.x - b && e.x <= d.x + b && h
            },
            toString: function() {
                return this.qb + ";" + this.tc
            },
            Db: function() {
                return new f.te(this.qb.Db(),this.tc.Db())
            }
        });
        f.F = {};
        f.F.vF = function(a) {
            for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)
                f.F.uz(b, a[c]);
            return b
        }
        ;
        f.F.pQ = function(a, b, c) {
            var d = Math.min.apply(null, a);
            a = Math.max.apply(null, a);
            var e = Math.min.apply(null, b);
            b = Math.max.apply(null, b);
            return f.F.D7(d, a, e, b, c)
        }
        ;
        f.F.buffer = function(a, b) {
            a[0] -= b;
            a[1] -= b;
            a[2] += b;
            a[3] += b
        }
        ;
        f.F.Db = function(a) {
            return a.slice()
        }
        ;
        f.F.Tc = function(a, b) {
            return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
        }
        ;
        f.F.TQ = function(a, b) {
            return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
        }
        ;
        f.F.dga = function() {
            return [Infinity, Infinity, -Infinity, -Infinity]
        }
        ;
        f.F.D7 = function(a, b, c, d, e) {
            return "undefined" !== typeof e ? (e[0] = a,
                e[2] = b,
                e[1] = c,
                e[3] = d,
                e) : [a, c, b, d]
        }
        ;
        f.F.empty = function(a) {
            a[0] = a[1] = Infinity;
            a[2] = a[3] = -Infinity;
            return a
        }
        ;
        f.F.yb = function(a, b) {
            return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
        }
        ;
        f.F.extend = function(a, b) {
            b[0] < a[0] && (a[0] = b[0]);
            b[2] > a[2] && (a[2] = b[2]);
            b[1] < a[1] && (a[1] = b[1]);
            b[3] > a[3] && (a[3] = b[3])
        }
        ;
        f.F.uz = function(a, b) {
            b[0] < a[0] && (a[0] = b[0]);
            b[0] > a[2] && (a[2] = b[0]);
            b[1] < a[1] && (a[1] = b[1]);
            b[1] > a[3] && (a[3] = b[1])
        }
        ;
        f.F.yga = function(a) {
            return [a[0], a[1]]
        }
        ;
        f.F.zga = function(a) {
            return [a[2], a[1]]
        }
        ;
        f.F.Hg = function(a) {
            return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
        }
        ;
        f.F.Hga = function(a, b, c, d, e) {
            var g = b * d[0] / 2;
            d = b * d[1] / 2;
            b = Math.cos(c);
            c = Math.sin(c);
            g = [-g, -g, g, g];
            d = [-d, d, -d, d];
            var h, k, l;
            for (h = 0; 4 > h; h += 1)
                k = g[h],
                    l = d[h],
                    g[h] = a[0] + k * b - l * c,
                    d[h] = a[1] + k * c + l * b;
            return f.F.pQ(g, d, e)
        }
        ;
        f.F.eg = function(a) {
            return a[3] - a[1]
        }
        ;
        f.F.Tga = function(a) {
            return [a[2] - a[0], a[3] - a[1]]
        }
        ;
        f.F.Xga = function(a) {
            return [a[0], a[3]]
        }
        ;
        f.F.Yga = function(a) {
            return [a[2], a[3]]
        }
        ;
        f.F.gg = function(a) {
            return a[2] - a[0]
        }
        ;
        f.F.Me = function(a, b) {
            return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
        }
        ;
        f.F.tp = function(a) {
            return a[2] < a[0] || a[3] < a[1]
        }
        ;
        f.F.normalize = function(a, b) {
            return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
        }
        ;
        f.F.Jia = function(a, b) {
            var c = (a[2] - a[0]) / 2 * (b - 1)
                , d = (a[3] - a[1]) / 2 * (b - 1);
            a[0] -= c;
            a[2] += c;
            a[1] -= d;
            a[3] += d
        }
        ;
        f.F.touches = function(a, b) {
            return f.F.Me(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
        }
        ;
        f.F.transform = function(a, b, c) {
            a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
            b(a, a, 2);
            return f.F.pQ([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
        }
        ;
        f.Nd.fb({
            B: function() {
                var a = f.Nd.prototype.B;
                return function() {
                    a.apply(this, arguments);
                    this.southwest = this.Eb;
                    this.northeast = this.Cb
                }
            }(),
            extend: function() {
                var a = f.Nd.prototype.extend;
                return function() {
                    a.apply(this, arguments);
                    this.Eb.lng = this.Eb.L;
                    this.Eb.lat = this.Eb.N;
                    this.Cb.lng = this.Cb.L;
                    this.Cb.lat = this.Cb.N;
                    return this
                }
            }()
        });
        f.W.fb({
            B: function() {
                var a = f.W.prototype.B;
                return function() {
                    a.apply(this, arguments);
                    this.lng = parseFloat(this.L.toFixed(6));
                    this.lat = parseFloat(this.N.toFixed(6))
                }
            }()
        });
        f.Sw = f.Z.extend({
            B: function(a, b, c, d) {
                this.bL = a;
                this.oL = b;
                this.BL = c;
                this.WL = d
            },
            transform: function(a, b) {
                return this.JP(a.Db(), b)
            },
            JP: function(a, b) {
                b = b || 1;
                a.x = b * (this.bL * a.x + this.oL);
                a.y = b * (this.BL * a.y + this.WL);
                return a
            },
            Sda: function(a, b) {
                b = b || 1;
                return new f.I((a.x / b - this.oL) / this.bL,(a.y / b - this.WL) / this.BL)
            }
        });
        f.Tk = f.Z.extend({
            B: function(a) {
                this.PB = a.MAX_LATITUDE || 85.0511287798;
                a.project && a.unproject && (this.Pb = a.project,
                    this.Kf = a.unproject)
            }
        });
        f.Tk.BK = {
            Pb: function(a) {
                return new f.I(a.L,a.N)
            },
            Kf: function(a, b) {
                return new f.W(a.x,a.y,b)
            }
        };
        f.Tk.AX = new f.Tk({
            MAX_LATITUDE: 85.0511287798,
            project: function(a) {
                var b = Math.PI / 180
                    , c = this.PB
                    , c = Math.max(Math.min(c, a.N), -c);
                a = a.L * b;
                b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
                return new f.I(a,b,!1)
            },
            unproject: function(a, b) {
                var c = 180 / Math.PI;
                return new f.W(a.x * c,(2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c,b)
            }
        });
        f.Tk.CK = {
            PB: 85.0840591556,
            VB: 6356752.3142,
            UB: 6378137,
            Pb: function(a) {
                var b = Math.PI / 180
                    , c = this.PB
                    , d = Math.max(Math.min(c, a.N), -c)
                    , e = this.UB
                    , c = this.VB;
                a = a.L * b * e;
                b *= d;
                e = c / e;
                e = Math.sqrt(1 - e * e);
                d = e * Math.sin(b);
                d = Math.pow((1 - d) / (1 + d), 0.5 * e);
                b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
                b = -c * Math.log(b);
                return new f.I(a,b)
            },
            Kf: function(a, b) {
                for (var c = 180 / Math.PI, d = this.UB, e = this.VB, g = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1,
                0 < k); )
                    l = d * Math.sin(h),
                        l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h,
                        h += l;
                return new f.W(g,h * c,b)
            }
        };
        f.Lf = {};
        f.Lf.Ew = {
            xv: function(a, b) {
                var c = this.$d.Pb(a)
                    , d = this.scale(b);
                return this.nw.JP(c, d)
            },
            Ov: function(a, b, c) {
                b = this.scale(b);
                a = this.nw.Sda(a, b);
                return this.$d.Kf(a, c)
            },
            Pb: function(a) {
                return this.$d.Pb(a)
            },
            scale: function(a) {
                return 256 << a
            },
            SG: function(a) {
                return 12756274 * Math.PI / (256 * Math.pow(2, a))
            }
        };
        f.Lf.FB = f.extend({}, f.Lf.Ew, {
            code: "EPSG:3857",
            $d: f.Tk.AX,
            nw: new f.Sw(0.5 / Math.PI,0.5,-0.5 / Math.PI,0.5),
            Pb: function(a) {
                return this.$d.Pb(a).bd(6378137)
            }
        });
        f.Lf.jK = f.extend({}, f.Lf.Ew, {
            code: "EPSG:3395",
            $d: f.Tk.CK,
            nw: function() {
                var a = f.Tk.CK;
                return new f.Sw(0.5 / (Math.PI * a.UB),0.5,-0.5 / (Math.PI * a.VB),0.5)
            }()
        });
        f.Lf.kK = f.extend({}, f.Lf.Ew, {
            code: "EPSG:4326",
            $d: f.Tk.BK,
            nw: new f.Sw(1 / 360,0.5,-1 / 360,0.25)
        });
        f.Lf.Qea = f.extend({}, f.Lf.Ew, {
            $d: f.Tk.BK,
            nw: new f.Sw(1,0,1,0)
        });
        f.nT = {
            Pb: function(a, b) {
                a = f.a.ra(a);
                return this.rl.xv(a, b || this.get("zoom"))
            },
            Kf: function(a, b, c) {
                return this.rl.Ov(a, b || this.get("zoom"), c)
            },
            wha: function(a, b) {
                return this.Pb(a, b)
            },
            xga: function(a, b) {
                return this.Kf(a, b)
            },
            Rm: function(a, b) {
                var c = this.get("size").As().ec(2);
                if (a.yb(c))
                    return this.get("center");
                c = this.we(a, b);
                return this.Dd(c)
            },
            Gl: function(a) {
                a = this.Ob(a);
                return this.Be(a)
            },
            v7: function(a) {
                return this.Dd(a.ec(this.get("resolution", 20)))
            },
            Ob: function(a) {
                a = f.a.ra(a);
                return this.Pb(a, 20)
            },
            Dd: function(a) {
                return a ? this.Kf(a, 20) : a
            },
            C$: function(a) {
                a = f.a.ra(a);
                return this.Pb(a, 20).Sa(f.a.Yc)
            },
            Q8: function(a) {
                return this.Kf(a.add(f.a.Yc), 20)
            },
            vha: function(a, b, c) {
                a = f.a.ra(a);
                return this.Ob(a).bd(c || this.get("resolution", 20))
            },
            Cga: function(a) {
                return a ? this.Pb(this.get("center"), a) : this.get("centerPixel")
            }
        };
        w.bC = f.Z.extend({
            ea: [f.ia, f.be],
            G: {
                center: new f.W(116.397128,39.916527),
                zoom: 13,
                rotation: 0,
                crs: "EPSG3857"
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.View2D";
                f.e.$a("AMap.View2D", a);
                a = a || {};
                a.center && (a.center = f.a.ra(a.center));
                this.G = a
            }
        });
        w.Tb = f.Z.extend({
            ea: [f.ia, f.be, f.nT],
            G: {
                features: "all",
                dragEnable: !0,
                showIndoorMap: f.l.Y ? !1 : !0,
                lang: "zh_cn",
                keyboardEnable: !0,
                doubleClickZoom: !0,
                "3rdpartyDataEnable": !1,
                scrollWheel: !0,
                zoomEnable: !0,
                jogEnable: !0,
                continuousZoomEnable: !0,
                resizeEnable: !1,
                animateEnable: !0,
                rotateEnable: !1,
                labelzIndex: 99,
                showFog: !0,
                touchZoom: !0,
                zooms: [3, f.l.Y ? f.l.kd ? 19 : 20 : 18],
                defaultCursor: "url(" + f.w.cb + "/theme/v1.3/openhand.cur),default",
                limitBounds: null,
                logoUrl: f.w.cb + "/theme/v1.3/logo@1x.png",
                logoUrlRetina: f.w.cb + "/theme/v1.3/logo@2x.png",
                copyright: "\x3c!--v1.4.1--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
                isHotspot: !f.l.Y,
                baseRender: f.l.s6,
                overlayRender: f.l.Kaa,
                mapStyle: "normal",
                showBuildingBlock: f.l.Bf,
                crs: "EPSG3857",
                rotation: 0,
                pitch: 0,
                yaw: 0,
                scale: 1,
                center: new f.W(116.397128,39.916527),
                zoom: 13,
                detectRetina: !0,
                pitchEnable: !1,
                buildingAnimation: !f.l.Y,
                maxPitch: 83,
                turboMode: !0
            },
            poiOnAMAP: function(a) {
                f.e.add(this.CLASS_NAME, "poiOnAMAP");
                var b = {}
                    , c = f.a.ra(a.location);
                b.id = a.id;
                c && (b.y = c.N,
                    b.x = c.L);
                b.name = a.name;
                b.address = a.address;
                f.Mf.On(f.Mf.YR(b))
            },
            detailOnAMAP: function(a) {
                f.e.add(this.CLASS_NAME, "detailOnAMAP");
                var b = {}
                    , c = f.a.ra(a.location);
                b.id = a.id;
                c && (b.y = c.N,
                    b.x = c.L);
                b.name = a.name;
                f.Mf.On(f.Mf.WR(b))
            },
            setLabelzIndex: function(a) {
                return this.set("labelzIndex", a)
            },
            getLabelzIndex: function() {
                return this.get("labelzIndex", null, !0)
            },
            setMapStyle: function(a) {
                f.e.add(this.CLASS_NAME, "setMapStyle", a);
                -1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0),
                    this.set("mapStyle", a)) : this.set("styleUrl", a);
                this.LH()
            },
            getMapStyle: function() {
                f.e.add(this.CLASS_NAME, "getMapStyle");
                return this.get("styleUrl") || this.get("mapStyle", null, !0)
            },
            getFeatures: function() {
                f.e.add(this.CLASS_NAME, "getFeatures");
                return this.get("features", null, !0)
            },
            setFeatures: function(a) {
                f.e.add(this.CLASS_NAME, "setFeatures");
                this.set("features", a)
            },
            setLang: function(a) {
                f.e.add(this.CLASS_NAME, "setLang", a);
                "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a),
                this.wk && this.wk.RU(this))
            },
            getLang: function() {
                f.e.add(this.CLASS_NAME, "getLang");
                return this.get("lang", null, !0)
            },
            setCity: function(a, b) {
                f.e.add(this.CLASS_NAME, "setCity");
                var c = this;
                (new f.Ka.Xa(f.w.Vc + "/v3/config/district?subdistrict=0&extensions=all&key=" + f.w.key + "&s=rsv3&output=json&keywords=" + a,{
                    callback: "callback"
                })).h("complete", function(a) {
                    if ((a = a.districts) && a.length)
                        try {
                            var e = a[0].center.split(","), g;
                            switch (a[0].level) {
                                case "city":
                                    g = 10;
                                    break;
                                case "province":
                                    g = 7;
                                    break;
                                case "district":
                                    g = 12;
                                    break;
                                case "country":
                                    g = 4;
                                    break;
                                default:
                                    g = 12
                            }
                            -1 !== a[0].name.indexOf("\u5e02") && (g = 10);
                            c.setZoomAndCenter(g, new f.W(e[0],e[1]), !0);
                            b && b.call(c, e, g)
                        } catch (h) {}
                }, this)
            },
            getCity: function(a, b) {
                f.e.add(this.CLASS_NAME, "getCity");
                var c = f.w.Vc + "/v3/geocode/regeo?&extensions=&&key=" + f.w.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
                (new f.Ka.Xa(c,{
                    callback: "callback",
                    cr: !0,
                    yd: "REGEO"
                })).h("complete", function(b) {
                    b = b.regeocode.addressComponent;
                    a({
                        province: b.province,
                        city: b.city instanceof Array ? "" : b.city,
                        citycode: b.citycode instanceof Array ? "" : b.citycode,
                        district: b.district instanceof Array ? "" : b.district
                    })
                }, this)
            },
            B: function(a, b) {
                this.id = f.a.Fb(this);
                this.CLASS_NAME = "AMap.Map";
                f.e.$a("AMap.Map", b);
                b = b || {};
                b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") && (b.styleUrl = b.mapStyle,
                    delete b.mapStyle);
                b.bgColor && f.extend(f.w.nd, b.bgColor);
                b.maxPitch && (b.maxPitch = Math.min(this.G.maxPitch, Math.max(b.maxPitch, 0)));
                b.pitch && (b.pitch = Math.min(b.maxPitch || this.G.maxPitch, Math.max(b.pitch, 0)));
                f.w.Zy = b.buildingColor || null;
                b.mobile && (f.l.Y = !0);
                b.noPoi && (f.w.iaa = !0);
                b.editEnable && (b.nolimg = 1,
                    b.showIndoorMap = !1);
                "3D" === b.viewMode && f.l.Yl && (b.showIndoorMap = !1,
                void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock);
                this.rn = b.disableSocket ? !1 : f.l.rn;
                b.server && (f.w.Vc = b.server);
                b.vdataUrl && (f.w.xw = b.vdataUrl);
                if ("string" === typeof a) {
                    if (a = this.J = document.getElementById(a),
                        !a)
                        return
                } else
                    "DIV" === a.tagName && (this.J = a);
                this.J.oC && this.J.oC.destroy();
                f.md.Fd.start({
                    id: this.id,
                    J: this.J
                });
                this.J.oC = this;
                var c = this.G.zooms[1]
                    , d = this.G.zooms[0];
                b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]),
                !0 === b.expandZoomRange && (c = f.l.Y ? f.l.kd ? 19 : 20 : 20),
                    b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
                b.forceZooms && (b.zooms = b.forceZooms);
                b = this.M6(b);
                c = this.getSize();
                b.center && (b.center = f.a.ra(b.center));
                this.rl = this.E7(b.crs || this.G.crs, b.center || this.G.center);
                this.n6(c, b);
                d = b.lang;
                "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
                f.l.Id && (b.rotateEnable = !1);
                f.a.rb(this, b);
                this.If(this.G);
                "rotateEnable"in b || "3D" !== b.viewMode || !f.l.Yl || this.set("rotateEnable", !0);
                "pitchEnable"in b || "3D" !== b.viewMode || !f.l.Yl || this.set("pitchEnable", !0);
                b.forceVector && (f.l.Bf ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
                b.disableVector && this.set("baseRender", "d");
                "dom" === b.renderer && (this.set("baseRender", "d"),
                    this.set("overlayRender", "d"));
                b.baseRender && this.set("baseRender", b.baseRender);
                c = Math.max(c.width, c.height);
                f.l.ga && (c *= Math.min(2, window.devicePixelRatio || 1));
                "vw" === this.get("baseRender") && c > f.l.R$ && this.set("baseRender", "dv");
                c = this.get("zoom", null, !0);
                d = this.get("zooms");
                c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
                this.set("zoom", c);
                this.G.zoom = c;
                this.F7(this.G);
                this.FF();
                f.l.sp && this.Q5();
                var e = this;
                this.If({
                    overlays: [],
                    infos: {},
                    controls: {}
                });
                c = [];
                b.forceVector && (c.push("vectorlayer"),
                    c.push("overlay"));
                "3D" === b.viewMode && f.l.Yl && c.push("Map3D");
                b.editEnable && (c.push("edit"),
                    c.push("labelDir"));
                this.ga = f.l.ga && this.get("detectRetina");
                this.lW(b);
                f.ib.hg(c, function() {
                    if (!e.get("destroy")) {
                        var b = new f.Tb(a,e);
                        b.Sd("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
                        b.h("complete", function() {
                            this.r("complete")
                        }, e, !0);
                        b.rl = e.rl;
                        e.Sd(["zoomSlow", "panTo", "targetLevel", "render"], b);
                        b.Sd(["size", "bounds"], e);
                        e.loaded = !0;
                        e.r("coreMapCreated")
                    }
                })
            },
            getViewMode_: function() {
                return this.view.type
            },
            U8: function(a, b, c) {
                var d = new f.W(a[4],a[5]);
                if ((a = new f.Nd(a[0],a[1],a[2],a[3])) && b && d) {
                    for (var e = c[1]; e > c[0]; e -= 1) {
                        var g = this.Pb(a.Eb, e)
                            , h = this.Pb(a.Cb, e);
                        if (Math.abs(h.x - g.x) < b.width && Math.abs(g.y - h.y) < b.height)
                            break
                    }
                    return [d, Math.min(e + 1, c[1])]
                }
                return null
            },
            n6: function(a, b) {
                if (!(b && b.center && b.zoom)) {
                    var c = this.U8(f.w.qd, a, b.zooms);
                    b.center = b.center || c && c[0];
                    "number" !== typeof b.zoom && (b.zoom = c && c[1])
                }
            },
            E7: function(a, b) {
                if (b instanceof f.W) {
                    if ("string" === typeof a) {
                        switch (a) {
                            case "EPSG3395":
                                return f.Lf.jK;
                            case "EPSG4326":
                                return f.Lf.kK
                        }
                        return f.Lf.FB
                    }
                    if (a.pointToLngLat && a.lngLatToPoint)
                        return {
                            Ov: a.pointToLngLat,
                            xv: a.lngLatToPoint,
                            SG: a.getResolution
                        };
                    throw "illegal projection";
                }
                var c = this.get("zoom", null, !0);
                return {
                    SG: function(a) {
                        return Math.pow(2, c - a)
                    },
                    xv: function() {},
                    Ov: function() {}
                }
            },
            Nca: function(a, b) {
                var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, g;
                for (g in a)
                    if (a.hasOwnProperty(g) && -1 !== f.a.indexOf(c, g)) {
                        var h = this.get(g);
                        void 0 === h || h === a[g] || h.yb && h.yb(a[g]) || (d[g] = this.get(g),
                            e = !0)
                    }
                e && (this.Tw = new f.sh(d,a,null,0),
                    this.Tw.transition = function(a, c, e) {
                        e /= b || 300;
                        if (1 <= e)
                            return c;
                        var g = {}, h;
                        for (h in d)
                            d.hasOwnProperty(h) && (g[h] = "center" === h ? a[h].add(c[h].Sa(a[h]).bd(e)) : a[h] + (c[h] - a[h]) * e);
                        return g
                    }
                    ,
                    this.Tw.Ol = function(b) {
                        b === a && (this.Tw.stop(),
                            this.yc = null);
                        for (var c in b)
                            b.hasOwnProperty(c) && ("center" === c ? this.setCenter(b[c], !0) : this.set(c, b[c]))
                    }
                    ,
                    this.Tw.Pj(this))
            },
            F7: function(a) {
                "3D" === this.get("viewMode") && f.l.Yl ? (this.set("baseRender", "vw"),
                    this.view = new f.NX(this,a)) : this.view = new f.bC(this,a);
                this.yS()
            },
            yS: function() {
                this.ih = "d" < this.get("baseRender") || "3D" === this.view.type
            },
            featuresChanged: function() {
                this.FF()
            },
            LH: function() {
                this.FF();
                this.dJ()
            },
            dJ: function() {
                if (this.Dj && "3D" !== this.view.type) {
                    var a = !0
                        , b = this.getMapStyle();
                    if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b)
                        a = !1;
                    var b = this.getLayers(), c;
                    for (c in b)
                        "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Dj && (a = !1);
                    this.Dj.getMap() !== this && this.Dj.setMap(this);
                    this.Dj.set("visible", a)
                }
            },
            FF: function() {
                this.lW();
                if (this.view && "3D" !== this.view.type) {
                    var a = this.get("baseRender");
                    if (a && !("dv" < a)) {
                        var b = this.get("features", null, !0)
                            , c = this.getMapStyle()
                            , d = this.get("editEnable");
                        b && c && (f.l.az && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"),
                            this.iI = a) : this.iI && (this.set("baseRender", this.iI),
                            this.iI = null));
                        this.yS()
                    }
                }
            },
            Q5: function() {
                var a = this;
                AMap.plugin(["AMap.IndoorMap"], function() {
                    !a.Dj && a.J && (a.indoorMap = a.Dj = new AMap.IndoorMap({
                        innerLayer: !0
                    }),
                        a.dJ(),
                        f.a.cc(function() {
                            a.r("indoor_create", {
                                target: a
                            });
                            a.set("display")
                        }))
                })
            },
            layersChanged: function() {
                var a = this.getLayers();
                this.jA = !1;
                for (var b = 0; b < a.length; b += 1)
                    a[b].getMap() !== this && a[b].setMap(this),
                    a[b].jA && (this.jA = !0);
                this.dJ()
            },
            getMapNumber: function() {
                if (this.map)
                    return this.map.Tv()
            },
            getAdcode: function() {
                f.e.add(this.CLASS_NAME, "getAdcode");
                return f.w.O5
            },
            lW: function() {
                if (!this.ET) {
                    var a = f.l.Y || f.a.ea(["d", "dv"], this.get("baseRender")) || !f.a.ea(["normal"], this.get("mapStyle", "amap://styles/normal")) || "3D" === this.get("viewMode") || "all" !== this.get("features") || this.G.defaultLayer || this.get("editEnable") || !this.get("turboMode") ? !1 : !0
                        , b = this.get("wpoLayer");
                    b && !a ? (this.Ki(b),
                        this.set("wpoLayer", void 0)) : !b && a && this.get("layers") && (b = new w.D.nb({
                        Rv: !0,
                        zIndex: 100
                    }),
                        b.V0 = !0,
                        this.set("wpoLayer", b, !0),
                        this.get("layers").push(b))
                }
            },
            M6: function(a) {
                a || (a = {});
                if (a.hasOwnProperty("defaultLayer")) {
                    a.layers = [a.defaultLayer];
                    var b = a.defaultLayer;
                    b.lF = !0;
                    this.set("defaultLayer", b, !0)
                }
                a.layers && 0 !== a.layers.length ? this.ET = !0 : (b = new w.D.nb,
                    a.layers = [b],
                    b.lF = !0,
                    this.set("defaultLayer", b, !0));
                if (b = a.view)
                    b.G.rotation && (a.rotation = b.G.rotation),
                    b.G.center && (a.center = b.G.center),
                    b.G.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.G.zoom))),
                    b.G.crs && (a.crs = b.G.crs);
                a.level && !a.zoom && (a.zoom = a.level);
                return a
            },
            setLimitBounds: function(a) {
                f.e.add(this.CLASS_NAME, "setLimitBounds");
                a instanceof f.Nd || (a = null);
                this.set("limitBounds", a)
            },
            clearLimitBounds: function() {
                f.e.add(this.CLASS_NAME, "clearLimitBounds");
                this.set("limitBounds", null)
            },
            getLimitBounds: function() {
                f.e.add(this.CLASS_NAME, "getLimitBounds");
                return this.get("limitBounds", null, !0)
            },
            Ky: function(a) {
                var b = this.get("layers");
                0 <= f.a.indexOf(b, a) || (b.push(a),
                    this.set("layers", b))
            },
            vu: function(a) {
                var b = this.get("overlays");
                0 <= f.a.indexOf(b, a) || (a instanceof w.C.Wj ? (this.get("overlays").push(a),
                this.hz instanceof w.C.Wj && this.hz.close(),
                    this.hz = a,
                    this.set("contextmenu", a, !0)) : (a instanceof w.C.Od && (this.xk instanceof w.C.Od && this.gs(this.xk),
                    this.xk = a),
                    this.get("overlays").push(a)),
                    this.r("overlays"))
            },
            Ki: function(a) {
                var b = this.get("layers");
                a = f.a.indexOf(b, a);
                -1 !== a && this.set("layers", f.a.pk(b, a))
            },
            gs: function(a) {
                var b = this.get("overlays");
                this.set("overlays", f.a.pk(b, f.a.indexOf(b, a)))
            },
            setZoom: function(a, b) {
                f.e.add(this.CLASS_NAME, "setZoom");
                a = this.wG(a);
                var c = this.get("zooms");
                a > c[1] && (a = c[1]);
                a < c[0] && (a = c[0]);
                this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a),
                    this.r("zoomstart"),
                    this.r("zoomchange"),
                    this.r("zoomend")) : this.set("zoomSlow", a))
            },
            getZoom: function() {
                f.e.add(this.CLASS_NAME, "getZoom");
                return this.wG(this.get("targetLevel") || this.get("zoom", null, !0))
            },
            getCenter: function() {
                f.e.add(this.CLASS_NAME, "getCenter");
                return this.get("center", null, !0)
            },
            setCenter: function(a, b) {
                f.e.add(this.CLASS_NAME, "setCenter");
                a = f.a.ra(a);
                b || !this.loaded ? (this.r("movestart"),
                    this.set("center", a),
                    this.r("mapmove"),
                    this.map ? this.map.r("moveend") : this.r("moveend")) : this.panTo(a)
            },
            getCoordsBound: function() {
                return this.view.zj()
            },
            setRotation: function(a) {
                f.e.add(this.CLASS_NAME, "setRotation");
                !f.l.Id && this.get("rotateEnable") && this.set("rotation", a)
            },
            getRotation: function() {
                f.e.add(this.CLASS_NAME, "getRotation");
                return this.get("rotateEnable") && this.get("rotation") || 0
            },
            setPitch: function(a) {
                a = Math.min(this.get("maxPitch"), Math.max(a, 0));
                f.e.add(this.CLASS_NAME, "setRotation");
                !f.l.Id && this.get("pitchEnable") && this.set("pitch", a)
            },
            getPitch: function() {
                f.e.add(this.CLASS_NAME, "getRotation");
                return this.get("pitchEnable") && this.get("pitch") || 0
            },
            getBounds: function() {
                f.e.add(this.CLASS_NAME, "getBounds");
                return this.view.Gc()
            },
            getStatus: function() {
                f.e.add(this.CLASS_NAME, "getStatus");
                for (var a = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1)
                    b[a[c]] = this.get(a[c], null, !0);
                return b
            },
            setStatus: function(a) {
                f.e.add(this.CLASS_NAME, "setStatus");
                for (var b in a)
                    a.hasOwnProperty(b) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
            },
            getResolution: function(a) {
                f.e.add(this.CLASS_NAME, "getResolution");
                a = (a = f.a.ra(a)) ? a.N : this.get("center", null, !0).N;
                return this.get("resolution") * Math.cos(a * Math.PI / 180)
            },
            getScale: function(a) {
                f.e.add(this.CLASS_NAME, "getScale");
                return this.getResolution() * (a || 96) / 0.0254
            },
            getDefaultCursor: function() {
                f.e.add(this.CLASS_NAME, "getDefaultCursor");
                return this.get("defaultCursor", null, !0)
            },
            setDefaultCursor: function(a) {
                f.e.add(this.CLASS_NAME, "setDefaultCursor");
                return this.set("defaultCursor", a, !0)
            },
            zoomIn: function(a) {
                f.e.add(this.CLASS_NAME, "zoomIn");
                this.setZoom(this.getZoom() + 1, a)
            },
            zoomOut: function(a) {
                f.e.add(this.CLASS_NAME, "zoomOut");
                this.setZoom(this.getZoom() - 1, a)
            },
            wG: function(a) {
                return this.view && "3D" === this.view.type ? f.a.df(a, 4) : Math.round(a)
            },
            setZoomAndCenter: function(a, b, c) {
                f.e.add(this.CLASS_NAME, "setZoomAndCenter");
                b = f.a.ra(b);
                a = this.wG(a);
                var d = this.get("zooms");
                a > d[1] && (a = d[1]);
                a < d[0] && (a = d[0]);
                this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0),
                    this.setCenter(b, !0))
            },
            clearMap: function() {
                f.e.add(this.CLASS_NAME, "clearMap");
                for (var a = this.get("overlays"), b = 0; b < a.length; b += 1)
                    a[b].set("map", null, !0);
                this.set("overlays", []);
                if (this.map && this.map.Wa)
                    for (var a = this.map.Wa, c = a.length, b = 0; b < c; b += 1)
                        a[b].qa instanceof w.D.IB && a[b].qa.setMap(null)
            },
            destroy: function() {
                f.e.add(this.CLASS_NAME, "destroy");
                this.Dj && (this.Dj.setMap(),
                    this.indoorMap = this.Dj = null);
                this.set("overlays", []);
                this.set("layers", []);
                var a = this.get("controls");
                a.remove = [];
                for (var b in a.Pc)
                    a.Pc.hasOwnProperty(b) && a.remove.push(a.Pc[b]);
                a.Pc = [];
                a.add = [];
                this.set("controls", a);
                this.set("destroy", !0);
                this.ya = !1;
                this.Rn();
                this.J = null
            },
            addControl: function(a) {
                f.e.add(this.CLASS_NAME, "addControl");
                var b = f.a.Fb(a)
                    , c = this.get("controls") || {};
                c.Pc = c.Pc || {};
                c.Pc[b] || (c.Pc[b] = a);
                c.add = c.add || [];
                c.add.push(a);
                this.set("controls", c)
            },
            removeControl: function(a) {
                f.e.add(this.CLASS_NAME, "removeControl");
                var b = f.a.Fb(a)
                    , c = this.get("controls") || {};
                c.Pc = c.Pc || {};
                c.Pc[b] && delete c.Pc[b];
                c.remove = c.remove || [];
                c.remove.push(a);
                this.set("controls", c)
            },
            clearControl: function() {
                f.e.add(this.CLASS_NAME, "clearControl");
                var a = this.get("controls") || {};
                a.remove = a.remove || [];
                a.Pc = a.Pc || {};
                for (var b in a.Pc)
                    a.Pc.hasOwnProperty(b) && (a.remove.push(a.Pc[b]),
                        delete a.Pc[b]);
                this.set("controls", a)
            },
            plugin: function(a, b) {
                "string" === typeof a && (a = [a]);
                for (var c = 0; c < a.length; c += 1) {
                    var d = a[c].split(".");
                    "function" === typeof window[d[0]][d[1]] && (a.splice(c, 1),
                        c -= 1)
                }
                if (0 === a.length)
                    return b(),
                        this;
                for (var e = a.length, c = 0; c < a.length; c += 1)
                    f.ib.load(a[c], function() {
                        e -= 1;
                        0 === e && b()
                    });
                return this
            },
            clearInfoWindow: function() {
                f.e.add(this.CLASS_NAME, "clearInfoWindow");
                var a = this.get("overlays");
                a && 0 !== a.length && this.xk && this.xk.close()
            },
            remove: function(a) {
                f.e.add(this.CLASS_NAME, "remove");
                a instanceof Array || (a = [a]);
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
                }
            },
            add: function(a) {
                f.e.add(this.CLASS_NAME, "add");
                a instanceof Array || (a = [a]);
                for (var b = 0; b < a.length; b += 1) {
                    var c = a[b];
                    c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
                }
            },
            getAllOverlays: function(a, b) {
                f.e.add(this.CLASS_NAME, "getAllOverlays");
                var c = this.get("overlays");
                if (a) {
                    for (var d = "amap." + a.toLowerCase(), e = [], g = 0; g < c.length; g += 1)
                        d !== c[g].CLASS_NAME.toLowerCase() || !b && (c[g].na || c[g].isOfficial) || e.push(c[g]);
                    return e
                }
                if (!b) {
                    e = [];
                    for (g = 0; g < c.length; g += 1)
                        c[g].na || c[g].isOfficial || e.push(c[g]);
                    c = e
                }
                d = this.get("layers");
                e = [];
                if (d)
                    for (var g = 0, h = d.length; g < h; g += 1)
                        d[g]instanceof w.D.IB && e.push(d[g]);
                return c.concat(e)
            },
            triggerResize: function() {
                this.map && this.map.zE()
            },
            refreshSize: function() {
                this.ex = this.Y8()
            },
            Y8: function() {
                return f.g.DR(this.J)
            },
            getSize: function() {
                f.e.add(this.CLASS_NAME, "getSize");
                (!this.ex || 10 > this.ex.width * this.ex.height) && this.refreshSize();
                return this.ex
            },
            getContainer: function() {
                f.e.add(this.CLASS_NAME, "getContainer");
                return this.J
            },
            panTo: function(a) {
                f.e.add(this.CLASS_NAME, "panTo");
                a = f.a.ra(a);
                this.loaded ? this.set("panTo", a) : this.setCenter(a)
            },
            panBy: function(a, b, c) {
                f.e.add(this.CLASS_NAME, "panBy");
                var d = this.get("rotation") * Math.PI / 180
                    , e = a * Math.cos(d) + Math.sin(d) * b;
                a = -Math.sin(d) * a + Math.cos(d) * b;
                b = this.loaded && this.map && this.map.yc ? this.map.yc.KV : this.get("centerCoords");
                d = Math.pow(2, 20 - this.getZoom());
                e = b.add(new f.I(-e * d,-a * d));
                e = this.Dd(e);
                !this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e)
            },
            setFitView: function(a, b, c, d) {
                f.e.add(this.CLASS_NAME, "setFitView");
                if (a = this.TR(a)) {
                    if (c = this.Cz(a, 0, new f.I(40,40), c, d))
                        b = b || !this.getBounds().contains(a.Hg()) || f.l.Y && 1 < Math.abs(c[0] + this.get("zoom", null, !0)),
                            this.setZoomAndCenter(c[0], c[1], b);
                    return a
                }
            },
            TR: function(a) {
                if (a)
                    if (a instanceof w.C.Pf)
                        a = [a];
                    else {
                        if (!(a instanceof Array))
                            return null
                    }
                else
                    a = this.getAllOverlays();
                if (a) {
                    for (var b, c = 0; c < a.length; c += 1) {
                        var d = a[c];
                        !d.get("visible") || d instanceof w.C.Od || d instanceof w.C.Wj || (d = d.getBounds()) && (b = b ? d.Qda(b) : d)
                    }
                    return b
                }
            },
            setBounds: function(a, b, c, d, e, g) {
                f.e.add(this.CLASS_NAME, "setBounds");
                c = this.Cz(a, b, c, e, g);
                d = d || !this.getBounds().contains(a.Hg()) || f.l.Y && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
                this.setZoomAndCenter(c[0], c[1], d);
                return a
            },
            IR: function(a, b, c, d, e) {
                a = this.TR(a);
                return this.Cz(a, b, c, d, e)
            },
            Cz: function(a, b, c, d, e) {
                b = b ? Number(b) : 0;
                var g = this.TT || this.get("zooms")[1];
                e = this.getSize().As();
                var h = 0
                    , k = 0;
                if (d) {
                    var k = d[0]
                        , l = d[1]
                        , h = d[2];
                    d = d[3];
                    e.x -= h + d;
                    e.y -= k + l;
                    h = (h - d) / 2;
                    k = (k - l) / 2
                }
                d = this.get("zooms");
                for (c && (e = e.Sa(c)); g > d[0] && !(c = this.Pb(a.Eb, g),
                    l = this.Pb(a.Cb, g),
                a.Eb.L > a.Cb.L && (l.x += this.Pb(new f.W(180,0), g).x),
                Math.abs(l.x - c.x) < e.x && Math.abs(c.y - l.y) < e.y); g -= 1)
                    ;
                e = f.l.Y ? 17 : 18;
                b = Math.min(d[1], e, Math.max(d[0], g + b));
                a = this.Kf(this.Pb(a.Hg(), b).Sa(new f.I(h,k)), b);
                return [b, a]
            },
            setLayers: function(a) {
                f.e.add(this.CLASS_NAME, "setLayers");
                for (var b = 0; b < a.length; b += 1)
                    a[b].set("map", this, !0);
                this.set("layers", a)
            },
            getLayers: function() {
                f.e.add(this.CLASS_NAME, "getLayers");
                return this.get("layers", null, !0)
            },
            getDefaultLayer: function() {
                f.e.add(this.CLASS_NAME, "getDefaultLayer");
                return this.get("defaultLayer", null, !0)
            },
            setDefaultLayer: function(a) {
                f.e.add(this.CLASS_NAME, "setDefaultLayer");
                a.lF = !0;
                var b = this.get("defaultLayer")
                    , c = this.get("layers");
                if (b) {
                    if (a === b)
                        return;
                    b.lF = !1;
                    c = f.a.pk(c, f.a.indexOf(c, b))
                }
                this.set("defaultLayer", a, !0);
                c.push(a);
                this.setLayers(c)
            },
            pixelToLngLat: function(a, b) {
                f.e.add(this.CLASS_NAME, "pixelToLngLat");
                return this.Kf(a, b)
            },
            lnglatToPixel: function(a, b) {
                f.e.add(this.CLASS_NAME, "lnglatToPixel");
                return this.Pb(a, b)
            },
            drawPolyline: function(a) {
                f.e.add(this.CLASS_NAME, "drawPolyline");
                this.set("draw", "polyline");
                this.set("drawStyle", a || {
                    strokeColor: "#006600",
                    Va: 0.9
                })
            },
            drawPolygon: function(a) {
                f.e.add(this.CLASS_NAME, "drawPolygon");
                this.set("draw", "polygon");
                this.set("drawStyle", a || {
                    strokeColor: "#006600",
                    Va: 0.9,
                    fillColor: "#FFAA00",
                    $c: 0.9
                })
            },
            drawCircle: function(a) {
                f.e.add(this.CLASS_NAME, "drawCircle");
                this.set("draw", "circle");
                this.set("drawStyle", a || {
                    strokeColor: "#006600",
                    Va: 0.9,
                    fillColor: "#006600",
                    $c: 0.9
                })
            },
            Kz: function() {
                return this.view.Kz()
            },
            endDraw: function() {
                this.set("draw", null)
            },
            isGoogleTileVisible: function() {
                return this.map && this.map.zD()
            },
            Be: function(a, b) {
                return this.view.Be(a, b)
            },
            we: function(a, b) {
                return this.view.we(a, b)
            }
        });
        w.Tb.cn({
            C$: "lngLatToGeodeticCoord",
            Q8: "geodeticCoordToLngLat",
            Cz: "getFitZoomAndCenterByBounds",
            IR: "getFitZoomAndCenterByOverlays",
            Gl: "lnglatTocontainer",
            lnglatTocontainer: "lngLatToContainer",
            Rm: "containTolnglat",
            containTolnglat: "containerToLngLat",
            Ob: "lngLatToP20",
            Dd: "p20ToLngLat",
            Be: "p20ToContainer",
            we: "containerToP20",
            Pb: "project",
            Kf: "unproject"
        });
        w.Tb.fb({
            isHotspotChanged: function() {
                if ("undefined" !== typeof this.ev && (this.f7(),
                    this.get("isHotspot"))) {
                    var a = this.get("layers", null, !0);
                    a && a.length && !this.ev && this.jA && this.Daa()
                }
            },
            Daa: function() {
                if (this.wk)
                    this.vS();
                else {
                    var a = this;
                    this.plugin("AMap.HotSpot", function() {
                        if (!a.ev) {
                            if (!a.wk) {
                                var b = new f.Of;
                                new w.C.Od;
                                a.wk = b
                            }
                            a.vS()
                        }
                    })
                }
            },
            f7: function() {
                this.wk && this.R9()
            },
            QT: function(a) {
                a.type = "hotspotover";
                a.isIndoorPOI = !1;
                this.r("hotspotover", a)
            },
            OT: function(a) {
                a.type = "hotspotclick";
                a.isIndoorPOI = !1;
                this.r("hotspotclick", a)
            },
            PT: function(a) {
                a.type = "hotspotout";
                a.isIndoorPOI = !1;
                this.r("hotspotout", a)
            },
            vS: function() {
                var a = this.wk;
                this.wk.setMap(this);
                a.h("mouseover", this.QT, this);
                a.h("click", this.OT, this);
                a.h("mouseout", this.PT, this)
            },
            R9: function() {
                var a = this.wk;
                a.H("mouseover", this.QT, this);
                a.H("click", this.OT, this);
                a.H("mouseout", this.PT, this);
                this.wk.setMap(null);
                this.wk = null
            }
        });
        w.event = {
            V: function(a, b, c, d) {
                f.e.add("AMap.event", "addDomListener");
                f.A.h(a, b, c, d);
                return new f.Gw(0,a,b,c,d)
            },
            R5: function() {},
            addListener: function(a, b, c, d) {
                f.e.add("AMap.event", "addListener");
                f.a.Ak(a.addListener) ? a.addListener(b, c, d) : (a.Kg || (a.Kg = f.ia.Kg),
                    f.ia.h.call(a, b, c, d));
                return new f.Gw(1,a,b,c,d)
            },
            uu: function(a, b, c, d) {
                f.e.add("AMap.event", "addListenerOnce");
                f.a.Ak(a.uu) ? a.uu(b, c, d) : (a.Kg || (a.Kg = f.ia.Kg),
                    f.ia.h.call(a, b, c, d, !0));
                return new f.Gw(1,a,b,c,d)
            },
            cz: function(a) {
                f.a.Ak(a.cz) ? a.cz() : f.ia.sj.call(a)
            },
            ir: function(a, b) {
                f.a.Ak(a.ir) ? a.ir(b) : f.ia.sj.call(a, b)
            },
            removeListener: function(a) {
                f.e.add("AMap.event", "removeListener");
                a instanceof f.Gw && (f.a.Ak(a.zk.removeListener) ? a.zk.removeListener(a) : 0 === a.type ? f.A.H(a.zk, a.oG, a.cH, a.yf) : 1 === a.type && (a.zk.Kg || (a.zk.Kg = f.ia.Kg),
                    f.ia.H.call(a.zk, a.oG, a.cH, a.yf)))
            },
            M: function(a, b) {
                f.e.add("AMap.event", "trigger");
                var c = Array.prototype.slice.call(arguments, 1);
                f.a.Ak(a.M) ? a.M.apply(a, c) : (a.Kg || (a.Kg = f.ia.Kg),
                    f.ia.r.apply(a, c))
            }
        };
        f.Gw = f.Z.extend({
            B: function(a, b, c, d, e) {
                this.type = a;
                this.zk = b;
                this.oG = c;
                this.cH = d;
                this.yf = e
            }
        });
        var pc = {
            V: "addDomListener",
            R5: "addDomListenerOnce",
            addListener: "addListener",
            uu: "addListenerOnce",
            cz: "clearInstanceListeners",
            ir: "clearListeners",
            removeListener: "removeListener",
            M: "trigger"
        }, qc;
        for (qc in pc)
            pc.hasOwnProperty(qc) && (w.event[pc[qc]] = w.event[qc]);
        f.event = w.event;
        f.event.V(window, "beforeunload", f.e.send);
        w.D.hc = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a) {
                this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
                f.a.rb(this, a);
                this.If(this.G)
            },
            getContainer: function() {
                if (this.D && this.D.R)
                    return this.D.R.Jg()
            },
            getZooms: function() {
                f.e.add(this.CLASS_NAME, "getZooms");
                return this.get("zooms", null, !0)
            },
            setOpacity: function(a) {
                f.e.add(this.CLASS_NAME, "setOpacity");
                a !== this.get("opacity", null, !0) && this.set("opacity", a)
            },
            getOpacity: function() {
                return this.get("opacity", null, !0)
            },
            show: function() {
                f.e.add(this.CLASS_NAME, "show");
                this.set("visible", !0);
                this.Dn && this.D.j.layersChanged()
            },
            hide: function() {
                f.e.add(this.CLASS_NAME, "hide");
                this.set("visible", !1);
                this.Dn && this.D.j.layersChanged()
            },
            setMap: function(a) {
                f.e.add(this.CLASS_NAME, "setMap");
                var b = this.get("map");
                a ? (b && a !== b && b.Ki(this),
                    this.set("map", a)) : b && (b.Ki(this),
                    this.set("map", null, !0),
                    this.Hh = !1,
                this.kf && this.kf())
            },
            getMap: function() {
                f.e.add(this.CLASS_NAME, "getMap");
                return this.get("map", null, !0)
            },
            mapChanged: function() {
                this.get("map") && this.get("map").Ky(this)
            },
            setzIndex: function(a) {
                f.e.add(this.CLASS_NAME, "setzIndex");
                this.set("zIndex", a)
            },
            getzIndex: function() {
                return this.get("zIndex", null, !0)
            }
        });
        w.D.nb = w.D.hc.extend({
            G: {
                tileSize: 256,
                visible: !0,
                opacity: 1,
                zIndex: 0,
                noLimg: 1,
                zooms: [3, 20],
                getTileUrl: f.l.Y ? f.w.mw : f.w.Bv,
                errorUrl: f.a.v8,
                detectRetina: !0,
                className: "amap-layer",
                mapNumber: "",
                cacheSize: f.l.size
            },
            B: function(a) {
                f.e.$a("AMap.TileLayer", a);
                (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
                this.S6(a);
                var b = a.zooms;
                b && b[1] >= this.Th[0] ? (b[0] < this.Th[0] && (b[0] = this.Th[0]),
                b[1] > this.Th[1] && (b[1] = this.Th[1])) : a.zooms = [this.Th[0], this.Th[1]];
                this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
                arguments.callee.oa.call(this, a);
                a.Rv && (this.Rv = !0)
            },
            setTextIndex: function(a) {
                f.e.add(this.CLASS_NAME, "setTextIndex");
                this.set("textIndex", a)
            },
            tH: function() {
                if (this.get("createTile"))
                    return !1;
                var a = this.get("getTileUrl");
                return a !== f.w.Bv && a !== f.w.mw ? !1 : !0
            },
            HQ: function() {
                if (!this.tH())
                    return !1;
                var a = this.get("map");
                return a && a.ih && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
            },
            eh: function(a) {
                var b = this.HQ()
                    , c = this.get("map");
                this.tH() && (b ? this.set("mapNumber", "GS(2018)1709") : this.set("mapNumber", "GS(2018)1709"));
                if (this.Rv)
                    return new f.D.nb(this,a,null,this.G.maxDataZoom);
                if (b)
                    if (this.Dn = !0,
                        f.D.Xi) {
                        if ("dv" === c.get("baseRender") && !this.get("watermark")) {
                            var d = f.w.dA;
                            f.l.ga && this.get("detectRetina") && (d = f.w.dA.replace("scl=1", "scl=2"));
                            (b = c.get("showBuildingBlock")) || (d = d.replace("ltype=3", "ltype=11"));
                            d = new f.D.nb(this,a,this.Bt(d),void 0,!0);
                            b && (d.Yh = new f.D.Ac(new w.D.nb({
                                zooms: [16, 20],
                                innerLayer: "true"
                            }),a,["building"]),
                                d.Yh.type = "\u697c\u5757\u56fe\u5c42",
                                d.Yh.Sd(["visible", "opacity", "zIndex"], d, !0),
                                d.Yh.zu(c.get("mapStyle") || "normal"));
                            d.type = "\u6805\u683c\u5e95\u56fe";
                            return d
                        }
                        if ("v" <= c.get("baseRender") || this.get("watermark"))
                            return "3D" == a.O.view.type ? (c = new f.D.Ac(this,a,["region", "road"]),
                                c.type = "\u77e2\u91cf\u5e95\u56fe",
                                c.Yh = new f.D.Ac(new w.D.nb({
                                    zooms: [16, 20],
                                    zIndex: 50,
                                    innerLayer: "true"
                                }),a,["building"]),
                                c.Yh.Wd = 17,
                                c.Yh.type = "\u697c\u5757\u56fe\u5c42",
                                c.Yh.Sd(["visible", "opacity"], c, !0),
                                c.Yh.zu("normal")) : (c = new f.D.Ac(this,a,["region", "building", "road"]),
                                c.type = "\u77e2\u91cf\u5e95\u56fe"),
                                c
                    } else
                        return ["vectorlayer", "overlay"];
                else
                    return this.Dn = !1,
                        new f.D.nb(this,a,null,this.G.maxDataZoom)
            },
            getTileUrlChanged: function() {
                var a = this.get("getTileUrl");
                if (a === f.w.Bv || a === f.w.mw || a === f.w.KA)
                    this.jA = !0;
                "string" === typeof a && (a = this.Bt(a));
                this.set("tileFun", a)
            },
            S6: function(a) {
                this.Th || (this.Th = [this.G.zooms[0], this.G.zooms[1]]);
                var b;
                a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
                f.l.Y && f.l.ga && this.G.detectRetina && !b && (this.Th[1] -= 1)
            },
            getTiles: function() {
                f.e.add(this.CLASS_NAME, "getTiles");
                var a = this.get("tiles", null, !0);
                if (a && a.length)
                    a = a[0];
                else
                    return [];
                for (var b = [], c, d = 0; d < a.length; d += 1)
                    a[d].key && (c = a[d].key.split("/"),
                        b.push("" + c[1] + "," + c[2]));
                return b
            },
            reload: function() {
                f.e.add(this.CLASS_NAME, "reload");
                this.set("reload", 1)
            },
            Jn: function() {
                var a = this.get("map", null, !0);
                this.setMap(null);
                this.Hh = !1;
                this.setMap(a)
            },
            setTileUrl: function(a) {
                f.e.add(this.CLASS_NAME, "setTileUrl");
                this.HQ() ? (this.set("getTileUrl", a),
                    this.Jn()) : this.set("getTileUrl", a)
            },
            Bt: function(a) {
                var b = this, c, d, e;
                return function(g, h, k) {
                    g = (g + Math.pow(2, k)) % Math.pow(2, k);
                    if ("number" !== typeof (g + h + k))
                        return null;
                    var l = b.get("map")
                        , m = "zh_cn";
                    l && (m = l.get("lang") || "zh_cn");
                    k = a.replace("[x]", g).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                    if (!c) {
                        if (d = a.match(/\{.*\}/))
                            e = d.toString().replace("{", "").replace("}", ""),
                                e = e.split(",");
                        c = !0
                    }
                    e && e.length && (k = k.replace(d, e[Math.abs(g + h) % e.length]));
                    return k
                }
            },
            getTileUrl: function(a, b, c) {
                f.e.add(this.CLASS_NAME, "getTileUrl");
                return this.get("tileFun", null, !0)(a, b, c)
            },
            getZooms: function() {
                f.e.add(this.CLASS_NAME, "getZooms");
                return this.get("zooms", null, !0)
            }
        });
        w.D.nb.HB = w.D.nb.extend({
            G: {
                getTileUrl: function(a, b, c) {
                    var d = "zh_cn";
                    if (this && this.get) {
                        var e = this.get("map");
                        e && (d = e.get("lang") || "zh_cn")
                    }
                    return "http://grid.amap.com/grid/" + c + "/" + a + "/" + b + "?src=jsapi&key=" + f.w.key + "&lang=" + d + "&dpiType=" + (f.l.kd ? "wprd" : "webrd")
                },
                zooms: [10, 18],
                zIndex: 2
            },
            B: function(a) {
                arguments.callee.oa.apply(this, arguments)
            }
        });
        w.D.nb.HK = w.D.nb.extend({
            G: {
                getTileUrl: f.w.TI,
                zooms: [3, 20],
                zIndex: 2,
                maxDataZoom: 18,
                detectRetina: !1,
                mapNumber: "GS(2019)3913",
                className: "amap-layer amap-satellite",
                cacheSize: f.l.size
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.TileLayer.Satellite";
                this.Th = [3, 20];
                arguments.callee.oa.apply(this, arguments);
                f.e.$a(this.CLASS_NAME, a)
            }
        });
        w.D.nb.FK = w.D.nb.extend({
            G: {
                getTileUrl: f.w.KA,
                zooms: [3, 20],
                zIndex: 3,
                type: "overlayer",
                maxDataZoom: 18,
                className: "amap-layer amap-roadnet",
                cacheSize: f.l.size
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.TileLayer.RoadNet";
                this.Th = [3, 20];
                arguments.callee.oa.apply(this, arguments);
                f.e.$a(this.CLASS_NAME, a)
            },
            eh: function(a) {
                if (this.get("map").ih) {
                    this.Dn = !0;
                    var b = f.w.LA;
                    f.l.ga && this.get("detectRetina") && (b = f.w.LA.replace("scl=1", "scl=2"));
                    a = new f.D.nb(this,a,this.Bt(b),this.G.maxDataZoom)
                } else
                    this.Dn = !1,
                        a = new f.D.nb(this,a);
                return a
            }
        });
        w.D.nb.LK = w.D.nb.extend({
            G: {
                getTileUrl: function(a, b, c) {
                    return f.w.bc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
                },
                zooms: [6, 20],
                zIndex: 4,
                type: "overlayer",
                autoRefresh: !1,
                interval: 180,
                maxDataZoom: 17,
                alwaysRender: !f.l.gG,
                className: "amap-layer amap-traffic",
                cacheSize: f.l.size
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.TileLayer.Traffic";
                this.Th = [6, 20];
                arguments.callee.oa.apply(this, arguments);
                this.startRefresh();
                f.e.$a(this.CLASS_NAME, a)
            },
            stopRefresh: function() {
                f.e.add(this.CLASS_NAME, "stopRefresh");
                this.CA && (clearInterval(this.CA),
                    this.CA = null)
            },
            startRefresh: function() {
                f.e.add(this.CLASS_NAME, "startRefresh");
                if (this.get("autoRefresh") && !this.CA) {
                    var a = this;
                    this.CA = setInterval(function() {
                        a.reload();
                        a.r("refresh")
                    }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
                }
            },
            reload: function() {
                f.e.add(this.CLASS_NAME, "reload");
                f.a.cc(function() {
                    this.set("reload")
                }, this)
            },
            kf: function() {
                this.stopRefresh();
                this.get("map") && this.get("map").H("zoomstart", this.reload, this)
            },
            eh: function(a) {
                var b = this.get("map")
                    , b = a.O;
                b.h("zoomstart", this.reload, this);
                return "d" !== b.get("baseRender") ? f.D.kq ? a = new f.D.kq(this,a) : ["vt"] : a = new f.D.nb(this,a,null,this.G.maxDataZoom)
            }
        });
        w.D.nb.QW = w.D.nb.extend({
            G: {
                zooms: [3, 20],
                zIndex: 12,
                className: "amap-layer amap-flexible",
                cacheSize: f.l.size
            },
            B: function(a) {
                this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
                arguments.callee.oa.call(this, a)
            },
            setCreateTile: function(a) {
                "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
            },
            getCreateTile: function() {
                return this.get("createTile", null, !0)
            }
        });
        w.D.kc = w.D.hc.extend({
            G: {
                visible: !0,
                zooms: [3, 25],
                type: "overlay",
                zIndex: 5,
                alwaysRender: !0
            },
            B: function(a) {
                arguments.callee.oa.apply(this, arguments)
            },
            eh: function(a) {
                return new f.D.kc(this,a)
            }
        });
        w.D.Yn = w.D.hc.extend({
            G: {
                zooms: [16, 20],
                zIndex: 8,
                url: f.w.yw + "/vector/buildings",
                wallColor: [200, 190, 180],
                strokeColor: [145, 140, 135],
                CAM_Z: 400,
                lineCap: "round",
                lineJoin: "round",
                lineWidth: 1,
                fadeFactor: 1,
                visible: !0
            },
            B: function() {
                arguments.callee.oa.apply(this, arguments);
                this.CLASS_NAME = "AMap.Buildings"
            },
            eh: function(a) {
                if (f.D.Yn)
                    return "3D" === a.O.view.type ? (a = new f.D.Ac(this,a,["building"]),
                        a.Wd = 17,
                        a) : new f.D.Yn(this,a);
                if (f.l.sp)
                    return ["building", "overlay"]
            }
        });
        w.D.DB = w.D.hc.extend({
            G: {
                visible: !0,
                zooms: [3, f.l.Y ? 20 : 18],
                opacity: 1,
                type: "overlay",
                zIndex: 6
            },
            B: function(a) {
                arguments.callee.oa.apply(this, arguments)
            },
            eh: function(a) {
                return f.D.Ts ? new f.D.Ts(this,a) : ["imagelayer"]
            },
            getMap: function() {
                f.e.add(this.CLASS_NAME, "getMap");
                return this.vh.map
            },
            show: function() {
                f.e.add(this.CLASS_NAME, "show");
                this.set("visible", !0);
                this.r("options")
            },
            getOpacity: function() {
                f.e.add(this.CLASS_NAME, "getOpacity");
                return this.get("opacity", null, !0)
            },
            setOpacity: function(a) {
                f.e.add(this.CLASS_NAME, "setOpacity");
                this.set("opacity", a)
            },
            getBounds: function() {
                f.e.add(this.CLASS_NAME, "getBounds");
                return this.get("bounds", null, !0).Db()
            },
            setBounds: function(a) {
                f.e.add(this.CLASS_NAME, "setBounds");
                this.r("bounds", a);
                this.setOptions({
                    bounds: a
                })
            },
            hide: function() {
                f.e.add(this.CLASS_NAME, "hide");
                this.set("visible", !1);
                this.r("options")
            },
            setOptions: function(a) {
                f.e.add(this.CLASS_NAME ? this.CLASS_NAME : "AMap.ImageLayer", "setOptions");
                this.If(a);
                this.r("options")
            },
            getOptions: function() {
                f.e.add(this.CLASS_NAME, "getOptions");
                var a = {}, b;
                for (b in this.G)
                    this.G.hasOwnProperty(b) && (a[b] = this.get(b));
                return a
            },
            getElement: function() {
                return this.D.R ? this.D.R.zb : this.D.Lk ? this.D.Lk.zb : null
            }
        });
        w.D.Ts = w.D.DB.extend({
            B: function(a) {
                a && a.url && (a.__source__ = a.url);
                arguments.callee.oa.apply(this, arguments);
                this.CLASS_NAME = "AMap.ImageLayer"
            },
            getImageUrl: function() {
                f.e.add(this.CLASS_NAME, "getImageUrl");
                return this.get("__source__")
            },
            setImageUrl: function(a) {
                f.e.add(this.CLASS_NAME, "setImageUrl");
                return this.set("__source__", a)
            }
        });
        w.D.MX = w.D.DB.extend({
            B: function(a) {
                a && a.url && (a.__source__ = a.url);
                arguments.callee.oa.apply(this, arguments);
                this.CLASS_NAME = "AMap.VideoLayer"
            },
            getVideoUrl: function() {
                f.e.add(this.CLASS_NAME, "getVideoUrl");
                return this.get("__source__")
            },
            setVideoUrl: function(a) {
                f.e.add(this.CLASS_NAME, "setVideoUrl");
                return this.set("__source__", a)
            }
        });
        w.D.IW = w.D.DB.extend({
            B: function(a) {
                a && a.canvas && (a.__source__ = a.canvas);
                arguments.callee.oa.apply(this, arguments);
                this.CLASS_NAME = "AMap.CanvasLayer"
            },
            getCanvas: function() {
                f.e.add(this.CLASS_NAME, "getCanvas");
                return this.get("__source__")
            },
            setCanvas: function(a) {
                f.e.add(this.CLASS_NAME, "setCanvas");
                return this.set("__source__", a)
            },
            reFresh: function() {
                this.D && (this.D.gw = !0,
                    this.D.set("display"))
            }
        });
        w.D.iX = w.D.hc.extend({
            G: {
                visible: !0,
                zooms: [3, f.l.Y ? 20 : 18],
                type: "overlay",
                zIndex: 5,
                cursor: "pointer",
                alwaysRender: !0,
                stable: !0,
                bubble: !0,
                className: "amap-mass"
            },
            B: function(a, b) {
                this.CLASS_NAME = "AMap.MassMarks";
                f.e.$a(this.CLASS_NAME, b);
                f.l.sp && (this.Mg = !0,
                b.size && (b.size = f.a.Ql(b.size)),
                    this.setData(a),
                    f.a.rb(this, b),
                    b.style ? (this.If(this.G, !0),
                        this.setStyle(b.style)) : this.setStyle(this.G))
            },
            clear: function() {
                this.set("dataSources", "")
            },
            getStyle: function() {
                f.e.add(this.CLASS_NAME, "getStyle");
                return this.Mi
            },
            setStyle: function(a) {
                f.e.add(this.CLASS_NAME, "setStyle");
                if (a instanceof Array) {
                    for (var b = 0; b < a.length; b += 1)
                        a[b].size = f.a.Ql(a[b].size),
                            a.Re = Math.max(a.Re || 0, a[b].size.width + a[b].anchor.x),
                            a.Ef = Math.max(a.Re || 0, a[b].size.height + a[b].anchor.y);
                    this.Mi = a
                } else
                    a.size && (a.size = f.a.Ql(a.size)),
                        this.If(a, !0),
                        this.Mi = {
                            anchor: this.get("anchor"),
                            url: this.get("url"),
                            size: this.get("size")
                        },
                        this.Mi.Re = this.Mi.size.width + this.Mi.anchor.x,
                        this.Mi.Ef = this.Mi.size.height + this.Mi.anchor.y;
                this.r("style")
            },
            setData: function(a) {
                f.e.add(this.CLASS_NAME, "setData");
                this.set("dataSources", a)
            },
            getData: function() {
                f.e.add(this.CLASS_NAME, "getData");
                return this.get("datas") || this.get("dataSources")
            },
            setMap: function(a) {
                f.e.add(this.CLASS_NAME, "setMap");
                f.l.sp && (a ? (this.get("map") && this.get("map").Ki(this),
                    this.set("map", a)) : this.get("map") && (this.get("map").Ki(this),
                    this.set("map", null, !0),
                    this.Hh = !1,
                this.kf && this.kf()))
            },
            eh: function(a) {
                return f.ib.rv(["cvector"]) ? (a = new f.D.kc(this,a),
                    this.X("datas", a),
                    a) : ["cvector"]
            }
        });
        w.D.IB = w.D.Ts.extend({
            B: function(a, b, c) {
                f.e.$a("AMap.GroundImage", c);
                c = c || {};
                this.Oe = !0;
                var d = parseFloat(c.opacity);
                isNaN(d) && (d = 1);
                arguments.callee.oa.call(this, {
                    url: a,
                    bounds: b,
                    clickable: c.clickable,
                    opacity: d,
                    map: c.map,
                    zooms: c.zooms || [3, 20]
                });
                this.CLASS_NAME = "AMap.GroundImage"
            },
            taa: function(a) {
                this.get("bounds").contains(a.lnglat) && (a.target = this,
                    this.r("click", a))
            },
            uaa: function(a) {
                this.get("bounds").contains(a.lnglat) && (a.target = this,
                    this.r("dblclick", a))
            },
            setMap: function(a) {
                f.e.add(this.CLASS_NAME, "setMap");
                a ? (this.get("map") && (this.get("map").Ki(this),
                this.OQ && w.event.removeListener(this.OQ),
                this.bR && w.event.removeListener(this.bR)),
                    this.set("map", a)) : this.get("map") && (this.get("map").Ki(this),
                    this.vh.map = null)
            },
            mapChanged: function() {
                this.get("map") && (this.get("map").Ky(this),
                this.get("clickable") && (this.OQ = w.event.addListener(this.get("map"), "click", this.taa, this),
                    this.bR = w.event.addListener(this.get("map"), "dblclick", this.uaa, this)))
            }
        });
        w.C.Pf = f.Z.extend({
            ea: [f.ia, f.be, {
                ra: f.a.ra
            }],
            G: {
                extData: {},
                bubble: !1,
                clickable: !0,
                draggable: !1
            },
            B: function() {
                this.Mx = f.a.Fb(this)
            },
            Lga: function() {
                return this.Mx
            },
            Ufa: function() {
                this.get("map", null, !0) && this.setMap(this.get("map"))
            },
            mapChanged: function() {
                this.get("map", null, !0) && this.get("map", null, !0).vu(this)
            },
            show: function() {
                f.e.add(this.CLASS_NAME, "show");
                this.set("visible", !0)
            },
            hide: function() {
                f.e.add(this.CLASS_NAME, "hide");
                this.set("visible", !1)
            },
            setMap: function(a) {
                f.e.add(this.CLASS_NAME, "setMap");
                a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).gs(this),
                    this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).gs(this),
                    this.set("map", null, !0)))
            },
            getMap: function() {
                f.e.add(this.CLASS_NAME, "getMap");
                return this.get("map", null, !0)
            },
            setExtData: function(a) {
                f.e.add(this.CLASS_NAME, "setExtData");
                this.set("extData", a)
            },
            getExtData: function() {
                f.e.add(this.CLASS_NAME, "getExtData");
                return this.get("extData", null, !0)
            }
        });
        w.C.kc = w.C.Pf.extend({
            B: function(a) {
                w.C.kc.Kc.B.apply(this, arguments)
            },
            show: function() {
                this.set("visible", !0);
                this.r("show", {
                    type: "show",
                    target: this
                })
            },
            hide: function() {
                this.set("visible", !1);
                this.r("hide", {
                    type: "hide",
                    target: this
                })
            },
            getVisible: function() {
                return this.get("visible", null, !0)
            },
            getOptions: function() {
                var a = {}
                    , b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" ")
                    , c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" ")
                    , d = ["fillColor", "fillOpacity", "path", "lineJoin"]
                    , e = ["center", "radius"]
                    , g = ["bounds"]
                    , h = [];
                this instanceof w.C.Lb && (h = b.concat(c));
                this instanceof w.C.Rb && (h = b.concat(d));
                this instanceof w.C.lf && (h = b.concat(e).concat(d));
                this instanceof w.C.Zn && (h = b.concat(e).concat(d));
                this instanceof w.C.co && (h = b.concat(d).concat(g));
                for (b = 0; b < h.length; b += 1)
                    a[h[b]] = this.get(h[b], null, !0);
                return a
            },
            setOptions: function(a) {
                a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []),
                    a.path = this.ra(a.path));
                a.center && (a.center = this.ra(a.center));
                var b;
                a.hasOwnProperty("map") && (b = a.map,
                    delete a.map);
                this.If(a);
                void 0 !== b && (this.setMap(b),
                    a.map = b);
                this.r("options");
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            setDraggable: function(a) {
                this.set("draggable", a)
            }
        });
        w.C.Pw = w.C.kc.extend({
            G: {
                visible: !0,
                zIndex: 10,
                strokeColor: "#006600",
                strokeOpacity: 0.9,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                lineJoin: "miter",
                path: []
            },
            B: function(a) {
                w.C.Pw.Kc.B.apply(this, arguments)
            },
            setPath: function(a, b) {
                f.e.add(this.CLASS_NAME, "setPath");
                a && a.length || (a = []);
                a = this.ra(a);
                this.set("path", a);
                this.r("change", {
                    type: "change",
                    target: this
                });
                b || this.r("setPath")
            },
            getPath: function() {
                f.e.add(this.CLASS_NAME, "getPath");
                return this.get("path", null, !0)
            },
            Gc: function() {
                var a = this.get("path");
                if (!a || !a.length)
                    return null;
                a[0]instanceof f.W && (a = [a]);
                for (var b = new f.Nd(180,90,-180,-90), c = 0; c < a.length; c += 1)
                    for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1)
                        b.extend(d[e]);
                return b
            }
        });
        w.C.Pw.cn({
            Gc: "getBounds"
        });
        w.C.Ue = f.Z.extend({
            ea: [f.ia, f.be],
            G: {
                size: new f.sc(36,36),
                imageOffset: new f.I(0,0),
                image: f.w.cb + "/theme/v1.3/markers/0.png",
                imageSize: null
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.Icon";
                f.e.$a(this.CLASS_NAME, a);
                a = a || {};
                a.size && (a.size = f.a.Ql(a.size));
                a.imageSize && (a.imageSize = f.a.Ql(a.imageSize));
                f.a.rb(this, a);
                this.If(this.G)
            },
            setImageSize: function(a) {
                f.e.add(this.CLASS_NAME, "setImageSize");
                a = f.a.Ql(a);
                this.set("imageSize", a)
            },
            getImageSize: function() {
                f.e.add(this.CLASS_NAME, "getImageSize");
                return this.get("imageSize", null, !0)
            }
        });
        w.C.hX = f.Z.extend({
            ea: [f.ia, f.be],
            G: {
                coords: [],
                type: ""
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.MarkerShape";
                f.e.$a(this.CLASS_NAME, a);
                f.a.rb(this, a);
                this.If(this.G)
            }
        });
        w.C.eb = w.C.Pf.extend({
            G: {
                cursor: "pointer",
                visible: !0,
                zIndex: 100,
                angle: 0,
                textAlign: "left",
                verticalAlign: "top",
                autoRotation: !1,
                opacity: 1,
                offset: new f.I(-9,-31),
                size: new f.I(19,33),
                raiseOnDrag: !1,
                topWhenClick: !1,
                topWhenMouseOver: !1,
                animation: "AMAP_ANIMATION_NONE"
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.Marker";
                f.e.$a(this.CLASS_NAME, a);
                a = a || {};
                this.Oe = !0;
                this.n1 = f.a.Fb(this);
                a.position && (a.position = this.ra(a.position));
                f.a.rb(this, a);
                f.l.Id && (this.G.angle = 0);
                this.If(this.G, !0);
                this.mapChanged()
            },
            getId: function() {
                return this.n1
            },
            setRaiseOnDrag: function(a) {
                f.e.add(this.CLASS_NAME, "setRaiseOnDrag");
                this.set("raiseOnDrag", a)
            },
            setPosition: function(a) {
                f.e.add(this.CLASS_NAME, "setPosition");
                a = this.ra(a);
                this.set("position", a)
            },
            getBounds: function() {
                var a = this.getPosition().Db();
                return new f.Nd(a,a.Db())
            },
            mapChanged: function() {
                this.get("map", null, !0) && (this.get("position", null, !0) || this.set("position", this.get("map").get("center")),
                    this.get("map", null, !0).vu(this))
            },
            getPosition: function() {
                f.e.add(this.CLASS_NAME, "getPosition");
                return this.get("position", null, !0)
            },
            setIcon: function(a) {
                f.e.add(this.CLASS_NAME, "setIcon");
                this.set("icon", a)
            },
            getIcon: function() {
                f.e.add(this.CLASS_NAME, "getIcon");
                return this.get("icon", null, !0)
            },
            setContent: function(a) {
                f.e.add(this.CLASS_NAME, "setContent");
                this.set("content", a)
            },
            getContent: function() {
                f.e.add(this.CLASS_NAME, "getContent");
                return this.get("content", null, !0)
            },
            getContentDom: function() {
                return this.get("contentDom", null, !0)
            },
            hide: function() {
                f.e.add(this.CLASS_NAME, "hide");
                this.set("visible", !1)
            },
            show: function() {
                f.e.add(this.CLASS_NAME, "show");
                this.set("visible", !0)
            },
            setCursor: function(a) {
                f.e.add(this.CLASS_NAME, "setCursor");
                this.set("cursor", a)
            },
            setRotation: function(a) {
                f.e.add(this.CLASS_NAME, "setRotation");
                f.l.Id || this.set("angle", a)
            },
            setAngle: function(a) {
                f.e.add(this.CLASS_NAME, "setAngle");
                f.l.Id || "number" !== typeof a || this.set("angle", a)
            },
            getAngle: function() {
                f.e.add(this.CLASS_NAME, "getAngle");
                return this.get("angle", null, !0)
            },
            setOffset: function(a) {
                f.e.add(this.CLASS_NAME, "setOffset");
                this.set("offset", a)
            },
            getOffset: function() {
                f.e.add(this.CLASS_NAME, "getOffset");
                return this.get("offset", null, !0)
            },
            setTextAlign: function(a) {
                f.e.add(this.CLASS_NAME, "setTextAlign");
                this.set("textAlign", a)
            },
            getTextAlign: function() {
                f.e.add(this.CLASS_NAME, "getTextAlign");
                return this.get("textAlign", null, !0)
            },
            setVerticalAlign: function(a) {
                f.e.add(this.CLASS_NAME, "setVerticalAlign");
                this.set("verticalAlign", a)
            },
            getVerticalAlign: function() {
                f.e.add(this.CLASS_NAME, "getVerticalAlign");
                return this.get("verticalAlign", null, !0)
            },
            setzIndex: function(a) {
                f.e.add(this.CLASS_NAME, "setzIndex");
                this.set("zIndex", a)
            },
            getzIndex: function() {
                f.e.add(this.CLASS_NAME, "getzIndex");
                return this.get("zIndex", null, !0)
            },
            setOpacity: function(a) {
                f.e.add(this.CLASS_NAME, "setOpacity");
                this.set("opacity", a)
            },
            setDraggable: function(a) {
                f.e.add(this.CLASS_NAME, "setDraggable");
                this.set("draggable", a)
            },
            getDraggable: function() {
                f.e.add(this.CLASS_NAME, "getDraggable");
                return this.get("draggable", null, !0)
            },
            moveTo: function(a, b, c) {
                f.e.add(this.CLASS_NAME, "moveTo");
                a = this.ra(a);
                this.set("move", {
                    ze: a,
                    speed: b,
                    lb: c
                })
            },
            moveAlong: function(a, b, c, d) {
                f.e.add(this.CLASS_NAME, "moveAlong");
                this.set("move", {
                    ze: a,
                    speed: b,
                    lb: c,
                    V6: d
                })
            },
            stopMove: function() {
                f.e.add(this.CLASS_NAME, "stopMove");
                this.set("move", !1)
            },
            pauseMove: function() {
                f.e.add(this.CLASS_NAME, "pauseMove");
                var a = this.get("move");
                if (!a)
                    return !1;
                a.action = "pause";
                this.set("move", a);
                return !0
            },
            resumeMove: function() {
                f.e.add(this.CLASS_NAME, "resumeMove");
                var a = this.get("move");
                if (!a)
                    return !1;
                a.action = "resume";
                this.set("move", a);
                return !0
            },
            setShadow: function(a) {
                f.e.add(this.CLASS_NAME, "setShadow");
                this.set("shadow", a)
            },
            getShadow: function() {
                f.e.add(this.CLASS_NAME, "getShadow");
                return this.get("shadow", null, !0)
            },
            setClickable: function(a) {
                f.e.add(this.CLASS_NAME, "setClickable");
                a !== this.getClickable() && this.set("clickable", a)
            },
            getClickable: function() {
                f.e.add(this.CLASS_NAME, "getClickable");
                return this.get("clickable", null, !0)
            },
            setTitle: function(a, b) {
                f.e.add(this.CLASS_NAME, "setTitle");
                "string" === typeof a && this.set("title", a, b)
            },
            getTitle: function() {
                f.e.add(this.CLASS_NAME, "getTitle");
                return this.get("title", null, !0)
            },
            setLabel: function(a) {
                f.e.add(this.CLASS_NAME, "setLabel");
                a && (a.hasOwnProperty("content") || a.hasOwnProperty("offSet")) || (a = {
                    content: ""
                });
                a = f.extend({}, this.get("label"), a);
                this.set("label", a)
            },
            getLabel: function() {
                f.e.add(this.CLASS_NAME, "getLabel");
                return this.get("label", null, !0)
            },
            setTop: function(a, b) {
                f.e.add(this.CLASS_NAME, "setTop");
                this.set("isTop", a, b)
            },
            getTop: function() {
                f.e.add(this.CLASS_NAME, "getTop");
                return this.get("isTop", null, !0)
            },
            setShape: function(a, b) {
                f.e.add(this.CLASS_NAME, "setShape");
                this.set("shape", a, b)
            },
            getShape: function() {
                f.e.add(this.CLASS_NAME, "getShape");
                return this.get("shape", null, !0)
            },
            setAnimation: function(a, b) {
                f.e.add(this.CLASS_NAME, "setAnimation");
                this.set("animation", a, b)
            },
            getAnimation: function() {
                f.e.add(this.CLASS_NAME, "getAnimation");
                return this.get("animation", null, !0)
            },
            getMap: function() {
                f.e.add(this.CLASS_NAME, "getMap");
                return this.get("map", null, !0)
            },
            markOnAMAP: function(a) {
                f.e.add(this.CLASS_NAME, "markOnAMAP");
                a = a || {};
                var b = {};
                b.name = a.name || this.get("name", null, !0) || "";
                a = this.ra(a.position) || this.get("position", null, !0);
                b.y = a.N;
                b.x = a.L;
                f.Mf.On(f.Mf.C9(b))
            }
        });
        f.Nt = {
            vU: 12,
            dfa: function() {},
            QO: function() {
                if (f.Ra && f.Ra.length) {
                    var a = f.Nt.Su(JSON.stringify({
                        mks: f.Ra,
                        from: f.w.N8,
                        key: f.w.key
                    }));
                    new f.Ka.XMLHttpRequest(f.w.cb + "/count",{
                        u7: "data=" + a,
                        yd: "POST"
                    });
                    f.Ra = []
                }
            },
            Su: function(a) {
                for (var b = "", c = 0, d = a.length; c < d; c++)
                    b += String.fromCharCode((a.charCodeAt(c) + 256) % 65535);
                return b
            },
            fh: function(a) {
                for (var b = "", c = 0, d = a.length; c < d; c++)
                    b += String.fromCharCode((a.charCodeAt(c) - 256 + 65535) % 65535);
                return b
            }
        };
        if (f.l.az && !f.l.Y && (new Date).getHours() === f.Nt.vU) {
            var rc = setInterval(function() {
                (new Date).getHours() !== f.Nt.vU ? clearInterval(rc) : f.Nt.QO()
            }, 6E3);
            f.event.V(window, "beforeunload", f.Nt.QO)
        }
        ;w.C.Wj = w.C.Pf.extend({
            G: {
                visible: !1,
                items: []
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.ContextMenu";
                f.e.$a(this.CLASS_NAME, a);
                this.Oe = !0;
                f.a.rb(this, a);
                this.G.items = [];
                this.If(this.G)
            },
            addItem: function(a, b, c) {
                f.e.add(this.CLASS_NAME, "addItem");
                this.get("items").push({
                    bW: a,
                    lb: b,
                    rA: c
                });
                this.r("items")
            },
            removeItem: function(a, b) {
                f.e.add(this.CLASS_NAME, "removeItem");
                var c = this.get("items"), d, e;
                for (e = 0; e < c.length; e += 1)
                    if (d = c[e],
                    d.bW === a && d.lb === b) {
                        c.splice(e, 1);
                        break
                    }
                this.r("items")
            },
            open: function(a, b) {
                f.e.add(this.CLASS_NAME, "open");
                b = f.a.ra(b);
                this.set("position", b);
                this.map ? this.map && this.map !== a && (this.map.gs(this),
                    this.map = a,
                    this.setMap(a)) : (this.map = a,
                    this.setMap(a));
                this.r("open", {
                    type: "open",
                    target: this
                })
            },
            close: function() {
                f.e.add(this.CLASS_NAME, "close");
                this.setMap(null);
                this.map && (this.map = this.map.hz = null,
                    this.r("close", {
                        type: "close",
                        target: this
                    }))
            }
        });
        w.C.Od = w.C.Pf.extend({
            G: {
                visible: !0,
                offset: new f.I(0,0),
                showShadow: !1,
                closeWhenClickMap: !1,
                retainWhenClose: !0,
                autoMove: !0
            },
            B: function(a) {
                this.CLASS_NAME = "AMap.InfoWindow";
                f.e.$a(this.CLASS_NAME, a);
                a = a || {};
                this.Oe = !0;
                a && a.size && (a.size = f.a.Ql(a.size));
                f.a.rb(this, a);
                this.If(this.G);
                a.position && this.set("position", f.a.ra(a.position), !0)
            },
            open: function(a, b) {
                f.e.add(this.CLASS_NAME, "open");
                b = f.a.ra(b);
                if (a && !this.hB && (b = b || this.get("position", null, !0))) {
                    this.r("change", {
                        type: "change",
                        target: this
                    });
                    var c = this.get("map", null, !0);
                    c && c === a ? this.set("position", b) : (this.map = a,
                    a.xk && a.xk.close(),
                        this.set("position", b, !0),
                        this.setMap(a));
                    this.r("open", {
                        type: "open",
                        target: this
                    })
                }
            },
            close: function() {
                f.e.add(this.CLASS_NAME, "close");
                this.setMap(null);
                this.map = null;
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            setContent: function(a) {
                f.e.add(this.CLASS_NAME, "setContent");
                this.set("content", a);
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            getContentU: function() {
                f.e.add(this.CLASS_NAME, "getContentU");
                return this.get("content", null, !0)
            },
            getContentDom: function() {
                return this.get("contentDom", null, !0)
            },
            getContent: function() {
                f.e.add(this.CLASS_NAME, "getContent");
                return this.get("content", null, !0)
            },
            setPosition: function(a) {
                f.e.add(this.CLASS_NAME, "setPosition");
                a = f.a.ra(a);
                this.set("position", a);
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            setOffset: function(a) {
                f.e.add(this.CLASS_NAME, "setOffset");
                this.set("offset", a);
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            getPosition: function() {
                f.e.add(this.CLASS_NAME, "getPosition");
                return this.get("position", null, !0)
            },
            setSize: function(a) {
                f.e.add(this.CLASS_NAME, "setSize");
                a = f.a.Ql(a);
                this.set("size", a);
                this.r("change", {
                    type: "change",
                    target: this
                })
            },
            getSize: function(a) {
                f.e.add(this.CLASS_NAME, "getSize");
                var b = this.get("size", null, !0);
                if (b)
                    return b;
                if (this.C && !a)
                    return new f.sc(this.C.bg.offsetWidth,this.C.bg.offsetHeight)
            },
            getIsOpen: function() {
                f.e.add(this.CLASS_NAME, "getIsOpen");
                return !!this.get("map")
            }
        });
        w.C.Lb = w.C.Pw.extend({
            G: {
                isOutline: !1,
                outlineColor: "#000000",
                geodesic: !1,
                borderWeight: 1
            },
            B: function(a) {
                w.C.Lb.Kc.B.apply(this, arguments);
                this.CLASS_NAME = "AMap.Polyline";
                f.e.$a(this.CLASS_NAME, a);
                this.Oe = !0;
                a = a || {};
                a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
                a.path && (a.path = this.ra(a.path));
                f.a.rb(this, a);
                this.setOptions(this.G)
            },
            getLength: function() {
                f.e.add(this.CLASS_NAME, "getLength");
                for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1)
                    b += a[c].Eg(a[c + 1]);
                return parseFloat(b.toFixed(2))
            }
        });
        (function(a) {
                function b(a, b, c, d) {
                    if (1 <= a)
                        return d;
                    var e = 1 - a;
                    return e * e * b + 2 * e * a * c + a * a * d
                }
                function c(a, b, c, d, e) {
                    if (1 <= a)
                        return e;
                    var g = 3 * (c[0] - b[0])
                        , h = 3 * (d[0] - c[0]) - g
                        , t = 3 * (c[1] - b[1]);
                    c = 3 * (d[1] - c[1]) - t;
                    return [(e[0] - b[0] - g - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + g * a + b[0], (e[1] - b[1] - t - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + t * a + b[1]]
                }
                function d(a, c, d, e) {
                    return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
                }
                function e(b, c) {
                    c = a.a.ra(c);
                    return b.xv(c, 20).Pi()
                }
                function g(b, c) {
                    a.a.isArray(c) && (c = new a.I(c[0],c[1]));
                    return b.Ov(c, 20)
                }
                function h(b, g, h, n, p, q) {
                    var r = null;
                    if (b && h && h.length) {
                        b = [b];
                        b.push.apply(b, h);
                        b.push(g);
                        h = 0;
                        for (r = b.length; h < r; h++)
                            b[h] = e(n, b[h]);
                        h = a.extend({
                            tolerance: 4,
                            interpolateNumLimit: [3, 300]
                        }, q);
                        q = h.tolerance;
                        h = h.interpolateNumLimit;
                        q = Math.max(2, q);
                        for (var t = r = 0, u = 0, x = b.length; u < x - 1; u++)
                             var v = b[u]
                                 , s = b[u + 1]
                                 , r = r + Math.abs(s[0] - v[0])
                                 , t = t + Math.abs(s[1] - v[1]);
                        a: {
                            p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, t) / p / q)));
                            q = null;
                            switch (b.length) {
                                case 3:
                                    q = d;
                                    break;
                                case 4:
                                    q = c;
                                    break;
                                default:
                                    r = null;
                                    break a
                            }
                            h = [];
                            r = [0].concat(b);
                            for (t = 1; t < p - 2; t++)
                                r[0] = t / p,
                                    h.push(q.apply(null, r));
                            h.push(b[b.length - 1]);
                            r = h
                        }
                    }
                    return r || [e(n, g)]
                }
                a.fK = {
                    lia: d,
                    fga: c,
                    NR: function(a, b, c, d) {
                        var e, g, r = [];
                        e = 0;
                        for (g = a.length; e < g; e += 1)
                            r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
                        return r
                    },
                    t9: function(a, b, c, d) {
                        a = this.NR(a, b, c, d);
                        c = [];
                        d = 0;
                        for (var e = a.length; d < e; d++)
                            c.push(g(b, a[d]));
                        return c
                    }
                }
            }
        )(f);
        w.C.Os = w.C.Lb.extend({
            G: {
                tolerance: 4,
                interpolateNumLimit: [3, 300]
            },
            B: function(a) {
                w.C.Os.Kc.B.apply(this, arguments);
                this.CLASS_NAME = "AMap.BezierCurve";
                f.e.$a(this.CLASS_NAME, a)
            },
            getLength: function() {
                f.e.add(this.CLASS_NAME, "getLength");
                this.get("map");
                var a = this.getInterpolateLngLats();
                return f.GB.distanceOfLine(a)
            },
            getInterpolateLngLats: function() {
                var a = this.get("map");
                return f.fK.t9(this.get("path"), a && a.rl || f.Lf.FB, Math.pow(2, 2), this.G)
            },
            getSerializedPath: function() {
                f.e.add(this.CLASS_NAME, "getSerializedPath");
                for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if (e instanceof f.W) {
                        var g = [];
                        if (e.controlPoints)
                            for (var h = 0, k = e.controlPoints.length; h < k; h++)
                                g.push(e.controlPoints[h].Ez()),
                                    g.push(e.controlPoints[h].Dz());
                        g.push(e.Ez());
                        g.push(e.Dz());
                        b.push(g)
                    } else
                        b.push(e)
                }
                return b
            },
            ra: function(a) {
                var b = typeof a[0];
                if (f.a.isArray(a) && "object" === b) {
                    for (b = 0; b < a.length; b += 1)
                        a[b] = this.M3(a[b]);
                    return a
                }
                return [this.Uha(a)]
            },
            M3: function(a) {
                var b;
                if (a instanceof f.W)
                    b = a;
                else {
                    b = typeof a[0];
                    var c, d, e = [];
                    if ("string" === b || "number" === b) {
                        d = a.length;
                        if (d % 2)
                            throw Error("LngLat number should be even, now it's " + d);
                        b = new f.W(a[d - 2],a[d - 1]);
                        c = 0;
                        for (d -= 2; c < d; c += 2)
                            e.push(new f.W(a[c],a[c + 1]))
                    } else if (f.a.isArray(a[0]))
                        for (d = a.length,
                                 b = new f.W(a[d - 1][0],a[d - 1][1]),
                                 c = 0,
                                 d -= 1; c < d; c++)
                            e.push(new f.W(a[c][0],a[c][1]));
                    else
                        throw Error("AMap.LngLat expected, now it's " + a);
                    b && e.length && (b.controlPoints = f.a.ra(e))
                }
                if (b.controlPoints && 2 < b.controlPoints.length)
                    throw Error("Control Points Number should be 1 or 2 !");
                return b
            }
        });
        w.C.Rb = w.C.Pw.extend({
            B: function(a) {
                w.C.Rb.Kc.B.apply(this, arguments);
                this.CLASS_NAME = "AMap.Polygon";
                f.e.$a(this.CLASS_NAME, a);
                this.Oe = !0;
                a = a || {};
                a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
                a.path && (a.path = this.ra(a.path));
                f.a.rb(this, f.extend({
                    fillColor: "#FFAA00",
                    fillOpacity: 0.9
                }, a));
                this.setOptions(this.G)
            },
            QG: function(a) {
                var b = 6378137 * Math.PI / 180
                    , c = 0
                    , d = a.length;
                if (3 > d)
                    return 0;
                for (var e = 0; e < d - 1; e += 1)
                     var g = a[e]
                         , h = a[e + 1]
                         , k = g.L * b * Math.cos(g.N * Math.PI / 180)
                         , g = g.N * b
                         , l = h.L * b * Math.cos(h.N * Math.PI / 180)
                         , c = c + (k * h.N * b - l * g);
                e = a[e];
                a = a[0];
                d = e.L * b * Math.cos(e.N * Math.PI / 180);
                e = e.N * b;
                h = a.L * b * Math.cos(a.N * Math.PI / 180);
                c += d * a.N * b - h * e;
                return 0.5 * Math.abs(c)
            },
            getArea: function() {
                f.e.add(this.CLASS_NAME, "getArea");
                var a = this.get("path", null, !0), b;
                if (!a.length || a[0]instanceof f.W)
                    b = this.QG(a);
                else {
                    b = this.QG(a[0]);
                    for (var c = 1; c < a.length; c += 1)
                        b -= this.QG(a[c])
                }
                return Number(b.toFixed(2))
            },
            toString: function() {
                f.e.add(this.CLASS_NAME, "toString");
                return this.get("path").join(";")
            },
            contains: function(a) {
                f.e.add(this.CLASS_NAME, "contains");
                a = f.a.ra(a);
                var b = this.get("path");
                b.length && b[0]instanceof f.W && (b = [b]);
                a = [a.L, a.N];
                for (var c, d = 0, e = b.length; d < e && (c = this.L6(b[d]),
                f.zc.nn(c) || c.reverse(),
                    c = f.zc.Tc(a, c, 0 === d ? !0 : !1),
                0 < d && (c = !c),
                    c); d += 1)
                    ;
                return c
            },
            L6: function(a) {
                for (var b = [], c = 0; c < a.length; c += 1)
                    b.push([a[c].L, a[c].N]);
                return b
            }
        });
        w.C.lf = w.C.kc.extend({
            G: {
                visible: !0,
                zIndex: 10,
                strokeColor: "#006600",
                strokeOpacity: 0.9,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                radius: 1E3,
                fillColor: "#006600",
                fillOpacity: 0.9
            },
            B: function(a) {
                w.C.lf.Kc.B.apply(this, arguments);
                this.CLASS_NAME = "AMap.Circle";
                f.e.$a(this.CLASS_NAME, a);
                a = a || {};
                a.center && (a.center = f.a.ra(a.center));
                a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
                f.a.rb(this, a);
                this.Oe = this.G.center ? !0 : !1;
                this.setOptions(this.G)
            },
            setCenter: function(a, b) {
                f.e.add(this.CLASS_NAME, "setCenter");
                (a = f.a.ra(a)) && a instanceof f.W && (this.set("center", a),
                    this.r("change", {
                        type: "change",
                        target: this
                    }),
                this.Oe || (this.Oe = !0,
                this.get("map") && this.get("map").r("overlays")),
                b || this.r("setCenter"))
            },
            getCenter: function() {
                f.e.add(this.CLASS_NAME, "getCenter");
                return this.get("center", null, !0)
            },
            setRadius: function(a, b) {
                f.e.add(this.CLASS_NAME, "setRadius");
                this.set("radius", a);
                this.r("change", {
                    type: "change",
                    target: this
                });
                b || this.r("setRadius")
            },
            getRadius: function() {
                f.e.add(this.CLASS_NAME, "getRadius");
                return this.get("radius", null, !0)
            },
            getBounds: function() {
                var a = this.get("center")
                    , b = this.get("radius");
                if (!a)
                    return null;
                var c = a.offset(-b, -b)
                    , a = a.offset(b, b);
                return new f.Nd(c,a)
            },
            contains: function(a) {
                f.e.add(this.CLASS_NAME, "contains");
                return this.get("center").Eg(a) <= this.get("radius") ? !0 : !1
            }
        });
        var sc = f.Z.extend({
            B: function(a) {
                var b = Array(3), c;
                c = a instanceof Array ? a : a instanceof f.km || a instanceof f.Pd ? a.elements : arguments;
                b[0] = c[0] || 0;
                b[1] = c[1] || 0;
                b[2] = c[2] || 0;
                this.elements = b
            },
            length: function() {
                var a = this.elements;
                return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
            },
            normalize: function() {
                var a = this.elements
                    , b = a[0]
                    , c = a[1]
                    , d = a[2]
                    , e = Math.sqrt(b * b + c * c + d * d);
                if (e) {
                    if (1 === e)
                        return this
                } else
                    return a[0] = 0,
                        a[1] = 0,
                        a[2] = 0,
                        this;
                e = 1 / e;
                a[0] = b * e;
                a[1] = c * e;
                a[2] = d * e;
                return this
            },
            Db: function() {
                return new f.Pd(this)
            },
            copy: function(a) {
                var b = this.elements;
                a = a.elements;
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                return this
            },
            set: function(a, b, c) {
                var d = this.elements;
                d[0] = a;
                d[1] = b;
                d[2] = c
            },
            yb: function(a) {
                var b = this.elements;
                a = a.elements;
                return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
            },
            daa: function(a) {
                var b = this.elements;
                b[0] *= a;
                b[1] *= a;
                b[2] *= a;
                return this
            },
            add: function(a) {
                var b = this.elements;
                a = a.elements;
                b[0] += a[0];
                b[1] += a[1];
                b[2] += a[2];
                return this
            },
            Jfa: function(a, b) {
                var c = a.elements
                    , d = b.elements
                    , e = this.elements;
                e[0] = c[0] + d[0];
                e[1] = c[1] + d[1];
                e[2] = c[2] + d[2];
                return this
            },
            sub: function(a) {
                a = a.elements;
                var b = this.elements;
                b[0] -= a[0];
                b[1] -= a[1];
                b[2] -= a[2];
                return this
            },
            bB: function(a, b) {
                var c = a.elements
                    , d = b.elements
                    , e = this.elements;
                e[0] = c[0] - d[0];
                e[1] = c[1] - d[1];
                e[2] = c[2] - d[2];
                return this
            },
            QF: function(a) {
                a = a.elements;
                var b = this.elements;
                b[0] = b[1] * a[2] - b[2] * a[1];
                b[1] = b[2] * a[0] - b[0] * a[2];
                b[2] = b[0] * a[1] - b[1] * a[0];
                return this
            },
            $Q: function(a, b) {
                var c = a.elements
                    , d = b.elements
                    , e = this.elements;
                e[0] = c[1] * d[2] - c[2] * d[1];
                e[1] = c[2] * d[0] - c[0] * d[2];
                e[2] = c[0] * d[1] - c[1] * d[0];
                return this
            },
            rr: function(a) {
                a = a.elements;
                var b = this.elements;
                return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
            }
        });
        f.Pd = sc;
        var tc = f.Z.extend({
            B: function(a) {
                var b = Array(4), c;
                c = a instanceof Array ? a : arguments;
                b[0] = c[0];
                b[1] = c[1];
                b[2] = c[2];
                b[3] = c[3];
                this.elements = b
            },
            multiply: function(a) {
                var b = this.elements;
                b[0] *= a;
                b[1] *= a;
                b[2] *= a;
                b[3] *= a
            }
        });
        f.km = tc;
        (function(a) {
                function b(a) {
                    this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                }
                b.prototype.set = function(a) {
                    var b, e;
                    b = a.elements;
                    e = this.elements;
                    if (b !== e) {
                        for (a = 0; 16 > a; ++a)
                            e[a] = b[a];
                        return this
                    }
                }
                ;
                b.prototype.concat = function(a) {
                    var b, e, g, h, k, l, m;
                    e = b = this.elements;
                    g = a.elements;
                    if (b === g)
                        for (g = Array(16),
                                 a = 0; 16 > a; ++a)
                            g[a] = b[a];
                    for (a = 0; 4 > a; a++)
                        h = e[a],
                            k = e[a + 4],
                            l = e[a + 8],
                            m = e[a + 12],
                            b[a] = h * g[0] + k * g[1] + l * g[2] + m * g[3],
                            b[a + 4] = h * g[4] + k * g[5] + l * g[6] + m * g[7],
                            b[a + 8] = h * g[8] + k * g[9] + l * g[10] + m * g[11],
                            b[a + 12] = h * g[12] + k * g[13] + l * g[14] + m * g[15];
                    return this
                }
                ;
                b.prototype.multiply = b.prototype.concat;
                b.prototype.Mj = function(b) {
                    var d = this.elements;
                    b = b.elements;
                    var e = new a.km
                        , g = e.elements;
                    g[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
                    g[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] * d[13];
                    g[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
                    g[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
                    return e
                }
                ;
                b.prototype.Dca = function(a) {
                    var b, e, g;
                    b = a.elements;
                    a = this.elements;
                    e = Array(16);
                    e[0] = b[5] * b[10] * b[15] - b[5] * b[11] * b[14] - b[9] * b[6] * b[15] + b[9] * b[7] * b[14] + b[13] * b[6] * b[11] - b[13] * b[7] * b[10];
                    e[4] = -b[4] * b[10] * b[15] + b[4] * b[11] * b[14] + b[8] * b[6] * b[15] - b[8] * b[7] * b[14] - b[12] * b[6] * b[11] + b[12] * b[7] * b[10];
                    e[8] = b[4] * b[9] * b[15] - b[4] * b[11] * b[13] - b[8] * b[5] * b[15] + b[8] * b[7] * b[13] + b[12] * b[5] * b[11] - b[12] * b[7] * b[9];
                    e[12] = -b[4] * b[9] * b[14] + b[4] * b[10] * b[13] + b[8] * b[5] * b[14] - b[8] * b[6] * b[13] - b[12] * b[5] * b[10] + b[12] * b[6] * b[9];
                    e[1] = -b[1] * b[10] * b[15] + b[1] * b[11] * b[14] + b[9] * b[2] * b[15] - b[9] * b[3] * b[14] - b[13] * b[2] * b[11] + b[13] * b[3] * b[10];
                    e[5] = b[0] * b[10] * b[15] - b[0] * b[11] * b[14] - b[8] * b[2] * b[15] + b[8] * b[3] * b[14] + b[12] * b[2] * b[11] - b[12] * b[3] * b[10];
                    e[9] = -b[0] * b[9] * b[15] + b[0] * b[11] * b[13] + b[8] * b[1] * b[15] - b[8] * b[3] * b[13] - b[12] * b[1] * b[11] + b[12] * b[3] * b[9];
                    e[13] = b[0] * b[9] * b[14] - b[0] * b[10] * b[13] - b[8] * b[1] * b[14] + b[8] * b[2] * b[13] + b[12] * b[1] * b[10] - b[12] * b[2] * b[9];
                    e[2] = b[1] * b[6] * b[15] - b[1] * b[7] * b[14] - b[5] * b[2] * b[15] + b[5] * b[3] * b[14] + b[13] * b[2] * b[7] - b[13] * b[3] * b[6];
                    e[6] = -b[0] * b[6] * b[15] + b[0] * b[7] * b[14] + b[4] * b[2] * b[15] - b[4] * b[3] * b[14] - b[12] * b[2] * b[7] + b[12] * b[3] * b[6];
                    e[10] = b[0] * b[5] * b[15] - b[0] * b[7] * b[13] - b[4] * b[1] * b[15] + b[4] * b[3] * b[13] + b[12] * b[1] * b[7] - b[12] * b[3] * b[5];
                    e[14] = -b[0] * b[5] * b[14] + b[0] * b[6] * b[13] + b[4] * b[1] * b[14] - b[4] * b[2] * b[13] - b[12] * b[1] * b[6] + b[12] * b[2] * b[5];
                    e[3] = -b[1] * b[6] * b[11] + b[1] * b[7] * b[10] + b[5] * b[2] * b[11] - b[5] * b[3] * b[10] - b[9] * b[2] * b[7] + b[9] * b[3] * b[6];
                    e[7] = b[0] * b[6] * b[11] - b[0] * b[7] * b[10] - b[4] * b[2] * b[11] + b[4] * b[3] * b[10] + b[8] * b[2] * b[7] - b[8] * b[3] * b[6];
                    e[11] = -b[0] * b[5] * b[11] + b[0] * b[7] * b[9] + b[4] * b[1] * b[11] - b[4] * b[3] * b[9] - b[8] * b[1] * b[7] + b[8] * b[3] * b[5];
                    e[15] = b[0] * b[5] * b[10] - b[0] * b[6] * b[9] - b[4] * b[1] * b[10] + b[4] * b[2] * b[9] + b[8] * b[1] * b[6] - b[8] * b[2] * b[5];
                    g = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
                    if (0 === g)
                        return this;
                    g = 1 / g;
                    for (b = 0; 16 > b; b++)
                        a[b] = e[b] * g;
                    return this
                }
                ;
                b.prototype.ov = function() {
                    return (new b).Dca(this)
                }
                ;
                b.prototype.lV = function(a, b, e, g, h) {
                    var k, l, m, n;
                    if (a === b || e === g || 1 === h)
                        throw "null frustum";
                    l = 1 / (b - a);
                    m = 1 / (g - e);
                    n = 1 / (1 - h);
                    k = this.elements;
                    k[0] = 2 * l;
                    k[1] = 0;
                    k[2] = 0;
                    k[3] = 0;
                    k[4] = 0;
                    k[5] = 2 * m;
                    k[6] = 0;
                    k[7] = 0;
                    k[8] = 0;
                    k[9] = 0;
                    k[10] = -2 * n;
                    k[11] = 0;
                    k[12] = -(b + a) * l;
                    k[13] = -(g + e) * m;
                    k[14] = -(1 + h) * n;
                    k[15] = 1;
                    return this
                }
                ;
                b.prototype.Hca = function(a, b, e, g) {
                    var h, k;
                    if (e === g || 0 === b)
                        throw "null frustum";
                    if (0 >= e)
                        throw "near <= 0";
                    if (0 >= g)
                        throw "far <= 0";
                    a /= 2;
                    k = Math.sin(a);
                    if (0 === k)
                        throw "null frustum";
                    h = 1 / (g - e);
                    k = Math.cos(a) / k;
                    a = this.elements;
                    a[0] = k / b;
                    a[1] = 0;
                    a[2] = 0;
                    a[3] = 0;
                    a[4] = 0;
                    a[5] = k;
                    a[6] = 0;
                    a[7] = 0;
                    a[8] = 0;
                    a[9] = 0;
                    a[10] = -(g + e) * h;
                    a[11] = -1;
                    a[12] = 0;
                    a[13] = 0;
                    a[14] = -2 * e * g * h;
                    a[15] = 0
                }
                ;
                b.prototype.TA = function(a, b, e) {
                    var g = this.elements;
                    g[0] = a;
                    g[4] = 0;
                    g[8] = 0;
                    g[12] = 0;
                    g[1] = 0;
                    g[5] = b;
                    g[9] = 0;
                    g[13] = 0;
                    g[2] = 0;
                    g[6] = 0;
                    g[10] = e;
                    g[14] = 0;
                    g[3] = 0;
                    g[7] = 0;
                    g[11] = 0;
                    g[15] = 1;
                    return this
                }
                ;
                b.prototype.scale = function(a, b, e) {
                    var g = this.elements;
                    g[0] *= a;
                    g[4] *= b;
                    g[8] *= e;
                    g[1] *= a;
                    g[5] *= b;
                    g[9] *= e;
                    g[2] *= a;
                    g[6] *= b;
                    g[10] *= e;
                    g[3] *= a;
                    g[7] *= b;
                    g[11] *= e;
                    return this
                }
                ;
                b.prototype.oV = function(a, b, e) {
                    var g = this.elements;
                    g[12] = a;
                    g[13] = b;
                    g[14] = e;
                    return this
                }
                ;
                b.prototype.translate = function(a, b, e) {
                    var g = this.elements;
                    g[12] += g[0] * a + g[4] * b + g[8] * e;
                    g[13] += g[1] * a + g[5] * b + g[9] * e;
                    g[14] += g[2] * a + g[6] * b + g[10] * e;
                    g[15] += g[3] * a + g[7] * b + g[11] * e;
                    return this
                }
                ;
                b.prototype.$I = function(a, b, e, g) {
                    var h, k, l, m, n, p, q, r;
                    a = Math.PI * a / 180;
                    h = this.elements;
                    k = Math.sin(a);
                    a = Math.cos(a);
                    0 !== b && 0 === e && 0 === g ? (0 > b && (k = -k),
                        h[0] = 1,
                        h[4] = 0,
                        h[8] = 0,
                        h[12] = 0,
                        h[1] = 0,
                        h[5] = a,
                        h[9] = -k,
                        h[13] = 0,
                        h[2] = 0,
                        h[6] = k,
                        h[10] = a,
                        h[14] = 0,
                        h[3] = 0,
                        h[7] = 0,
                        h[11] = 0) : 0 === b && 0 !== e && 0 === g ? (0 > e && (k = -k),
                        h[0] = a,
                        h[4] = 0,
                        h[8] = k,
                        h[12] = 0,
                        h[1] = 0,
                        h[5] = 1,
                        h[9] = 0,
                        h[13] = 0,
                        h[2] = -k,
                        h[6] = 0,
                        h[10] = a,
                        h[14] = 0,
                        h[3] = 0,
                        h[7] = 0,
                        h[11] = 0) : 0 === b && 0 === e && 0 !== g ? (0 > g && (k = -k),
                        h[0] = a,
                        h[4] = -k,
                        h[8] = 0,
                        h[12] = 0,
                        h[1] = k,
                        h[5] = a,
                        h[9] = 0,
                        h[13] = 0,
                        h[2] = 0,
                        h[6] = 0,
                        h[10] = 1,
                        h[14] = 0,
                        h[3] = 0,
                        h[7] = 0,
                        h[11] = 0) : (l = Math.sqrt(b * b + e * e + g * g),
                    1 !== l && (l = 1 / l,
                        b *= l,
                        e *= l,
                        g *= l),
                        l = 1 - a,
                        m = b * e,
                        n = e * g,
                        p = g * b,
                        q = b * k,
                        r = e * k,
                        k *= g,
                        h[0] = b * b * l + a,
                        h[1] = m * l + k,
                        h[2] = p * l - r,
                        h[3] = 0,
                        h[4] = m * l - k,
                        h[5] = e * e * l + a,
                        h[6] = n * l + q,
                        h[7] = 0,
                        h[8] = p * l + r,
                        h[9] = n * l - q,
                        h[10] = g * g * l + a,
                        h[11] = 0,
                        h[12] = 0,
                        h[13] = 0,
                        h[14] = 0);
                    h[15] = 1;
                    return this
                }
                ;
                b.prototype.rotate = function(a, d, e, g) {
                    return this.concat((new b).$I(a, d, e, g))
                }
                ;
                a.nf = b
            }
        )(f);
        w.C.Zn = w.C.Rb.extend({
            G: {
                visible: !0,
                zIndex: 10,
                strokeColor: "#006600",
                strokeOpacity: 0.9,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                radius: [1E3, 1E3],
                fillColor: "#006600",
                fillOpacity: 0.9
            },
            B: function() {
                var a = this
                    , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , b = f.extend(this.G, b)
                    , c = this.Km(b);
                b.path = c;
                w.C.Zn.Kc.B.call(this, b);
                this.set("path", c);
                this.get("center") && this.get("map") || (this.Oe = !1);
                this.CLASS_NAME = "AMap.Ellipse";
                f.e.$a(this.CLASS_NAME, b);
                this.on("movepoly", function(b) {
                    var c = a.get("map");
                    b = c.Dd(c.Ob(a.get("center")).add(b.as));
                    "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                    a.set("center", b)
                })
            },
            Km: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , b = []
                    , c = a.center || this.get("center")
                    , d = a.map || this.get("map");
                if (c && d)
                    for (var c = f.a.ra(c), e = a.radius || this.get("radius"), g = d.Ob(c), a = g.x, g = g.y, h = f.a.map(e, function(a) {
                        return a / (d.view.getResolution(20) * Math.cos(c.N * Math.PI / 180))
                    }), e = h[0], h = h[1], k = f.l.Y, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
                        var n = m * l
                            , n = {
                            x: a + e * Math.cos(n),
                            y: g + h * Math.sin(n)
                        };
                        b.push(d.Dd(n))
                    }
                return b
            },
            mapChanged: function() {
                f.a.Ak(w.C.Zn.Kc.mapChanged) && w.C.Zn.Kc.mapChanged.apply(this);
                this.setPath(this.Km());
                !this.Oe && this.get("map") && (this.Oe = !0,
                    this.get("map").r("overlays"))
            },
            setCenter: function(a, b) {
                f.e.add(this.CLASS_NAME, "setCenter");
                (a = f.a.ra(a)) && a instanceof f.W && (this.set("center", a),
                    this.set("path", this.Km()),
                    this.r("change", {
                        type: "change",
                        target: this
                    }),
                this.Oe || (this.Oe = !0,
                this.get("map") && this.get("map").r("overlays")),
                b || this.r("setCenter"))
            },
            setRadius: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
                f.e.add(this.CLASS_NAME, "setRadius");
                a && 2 === a.length && (this.set("radius", a),
                    this.set("path", this.Km()),
                b || (this.r("change", {
                    type: "change",
                    target: this
                }),
                    this.r("setPath")))
            },
            setOptions: function(a) {
                w.C.Zn.Kc.setOptions.call(this, a);
                a.radius && this.setRadius(a.radius, !0);
                a.center && this.setCenter(a.center, !0)
            },
            getRadius: function() {
                f.e.add(this.CLASS_NAME, "getRadius");
                return this.get("radius", null, !0)
            },
            getCenter: function() {
                f.e.add(this.CLASS_NAME, "getCenter");
                return this.get("center", null, !0)
            }
        });
        w.C.co = w.C.Rb.extend({
            G: {
                visible: !0,
                zIndex: 10,
                strokeColor: "#006600",
                strokeOpacity: 0.9,
                strokeWeight: 3,
                strokeStyle: "solid",
                strokeDasharray: [10, 5],
                fillColor: "#006600",
                fillOpacity: 0.9
            },
            B: function() {
                var a = this
                    , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , b = f.extend(this.G, b)
                    , c = this.Km(b);
                b.path = c;
                w.C.co.Kc.B.call(this, b);
                this.setPath(c);
                this.G.bounds && this.get("map") || (this.Oe = !1);
                this.CLASS_NAME = "AMap.Rectangle";
                f.e.$a(this.CLASS_NAME, b);
                this.on("movepoly", function(b) {
                    var c = a.get("map")
                        , g = a.get("bounds")
                        , h = c.Dd(c.Ob(g.Eb).add(b.as));
                    b = c.Dd(c.Ob(g.Cb).add(b.as));
                    "3D" === c.view.type && a.set("deltaPos", [0, 0]);
                    a.set("bounds", new f.Nd(h,b))
                })
            },
            Km: function() {
                var a = []
                    , b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
                if (b) {
                    var c = b.getSouthWest()
                        , b = b.getNorthEast();
                    f.a.cf([new f.W(c.L,c.N), new f.W(b.L,c.N), new f.W(b.L,b.N), new f.W(c.L,b.N)], function(b) {
                        return a.push(b)
                    })
                }
                return a
            },
            mapChanged: function() {
                f.a.Ak(w.C.co.Kc.mapChanged) && w.C.co.Kc.mapChanged.apply(this);
                this.setPath(this.Km());
                !this.Oe && this.get("map") && (this.Oe = !0,
                    this.get("map").r("overlays"))
            },
            setOptions: function(a) {
                w.C.co.Kc.setOptions.call(this, a);
                a.bounds && this.setBounds(a.bounds, !0)
            },
            setBounds: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
                f.e.add(this.CLASS_NAME, "setBounds");
                a && a instanceof f.Nd && (this.set("bounds", a),
                    this.set("path", this.Km()),
                this.Oe || (this.Oe = !0,
                this.get("map") && this.get("map").r("overlays")),
                b || (this.r("change", {
                    type: "change",
                    target: this
                }),
                    this.r("setBounds")))
            },
            getBounds: function() {
                f.e.add(this.CLASS_NAME, "getCenter");
                return this.get("bounds", null, !0)
            }
        });
        w.C.KK = w.C.eb.extend({
            G: {
                text: "",
                textAlign: "center",
                verticalAlign: "middle",
                offset: new f.I(0,0)
            },
            B: function(a) {
                w.C.KK.Kc.B.apply(this, arguments);
                this.CLASS_NAME = "AMap.Text";
                f.e.$a(this.CLASS_NAME, a);
                this.C0();
                this.setText(this.get("text"));
                this.setStyle(this.get("style"))
            },
            C0: function() {
                if (!this.nu) {
                    var a = document.createElement("div");
                    a.className = "amap-overlay-text-container";
                    this.nu = a
                }
            },
            getText: function() {
                f.e.add(this.CLASS_NAME, "getText");
                return this.get("text", null, !0)
            },
            setText: function(a) {
                f.e.add(this.CLASS_NAME, "setText");
                a || 0 === a || (a = "");
                f.g.sda(this.nu, "amap-overlay-text-empty", !a);
                f.e.add(this.CLASS_NAME, "setText");
                this.set("text", a);
                this.nu.innerHTML = a;
                this.wU()
            },
            setStyle: function(a) {
                f.e.add(this.CLASS_NAME, "setStyle");
                f.extend(this.nu.style, a);
                this.wU()
            },
            wU: function() {
                this.setContent(this.nu);
                this.setShadow(this.getShadow())
            }
        });
        f.sK = {
            find: function(a) {
                return f.a.find(this.lq || [], a)
            },
            Az: function() {
                return this.lq || []
            },
            Pc: function(a) {
                return null !== this.find(a)
            },
            add: function(a) {
                var b = this
                    , c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Hv
                    , d = this.lq || (this.lq = []);
                f.a.isArray(a) ? f.a.cf(a, function(a) {
                    b.add(a, c)
                }) : null === this.find(a) && (d.push(a),
                    c(a));
                return this
            },
            remove: function(a) {
                var b = this
                    , c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Hv
                    , d = this.lq;
                if (d)
                    if (f.a.isArray(a))
                        f.a.cf(a, function(a) {
                            b.remove(a, c)
                        });
                    else {
                        var e = f.a.indexOf(d, a);
                        -1 !== e && (c(d[e]),
                            d.splice(e, 1))
                    }
                return this
            },
            clear: function() {
                this.cf(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.Hv);
                this.lq = [];
                return this
            },
            cf: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.Hv
                    , b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                f.a.cf(this.lq || [], function() {
                    for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)
                        d[e] = arguments[e];
                    c = d[0];
                    f.a.Ak(c.cf) ? c.cf(a, b) : a.apply(b || c, d)
                });
                return this
            },
            El: function(a) {
                for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++)
                    c[d - 1] = arguments[d];
                this.cf(function(b) {
                    b && f.a.Ak(b[a]) && b[a].apply(b, c)
                });
                return this
            },
            h: function(a) {
                var b = arguments;
                this.cf(function(a) {
                    a.on.apply(a, b)
                });
                return this
            },
            H: function(a) {
                var b = arguments;
                this.cf(function(a) {
                    a.off.apply(a, b)
                });
                return this
            },
            addListener: function() {
                this.h.apply(this, arguments)
            },
            uu: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.Hv
                    , c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                this.cf(function(d) {
                    d.on.call(d, event, function() {
                        b();
                        d.off(a)
                    }, c)
                })
            },
            removeListener: function(a) {
                this.H(a.oG, a.cH, a.yf)
            },
            M: function(a, b) {
                this.cf(function(c) {
                    c.emit(a, b)
                })
            }
        };
        w.C.Xj = w.C.Pf.extend({
            ea: [f.sK],
            B: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                w.C.Xj.Kc.B.apply(this);
                this.CLASS_NAME = "AMap.OverlayGroup";
                this.map = null;
                this.add(a)
            },
            dc: function(a) {
                this.El("setMap", a);
                this.set("map", a);
                this.map = a;
                return this
            },
            mapChanged: function() {},
            vu: function(a) {
                var b = this;
                this.add(a, function(a) {
                    b.map && a.setMap(b.map)
                });
                return this
            },
            gs: function(a) {
                var b = this;
                this.remove(a, function(a) {
                    a.getMap() === b.map && a.setMap(null)
                });
                return this
            },
            Sc: function() {
                var a = this;
                this.clear(function(b) {
                    b.getMap() === a.map && b.setMap(null)
                });
                return this
            },
            fH: function() {
                this.El("hide");
                return this
            },
            show: function() {
                this.El("show");
                return this
            },
            rb: function() {
                this.El("setOptions", 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
                return this
            }
        });
        w.C.Xj.cn({
            find: "getOverlay",
            Az: "getOverlays",
            vu: ["addOverlay", "addOverlays"],
            Pc: "hasOverlay",
            gs: ["removeOverlay", "removeOverlays"],
            Sc: "clearOverlays",
            cf: "eachOverlay",
            dc: "setMap",
            rb: "setOptions",
            show: "show",
            fH: "hide",
            h: "on",
            H: "off"
        });
        (function(a, b) {
                function c(a, b) {
                    if (!a.length)
                        return !1;
                    for (var c = 0, d = a.length; c < d; c++) {
                        var e = a[c];
                        if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap)
                            return !1
                    }
                    return !0
                }
                function d(a) {
                    for (var b = [], c = 0, d = a.length; c < d; c++)
                        b.push(a[c].geometry.coordinates);
                    return b
                }
                function e(a) {
                    if (!a)
                        return [];
                    a = b.a.ra(a);
                    for (var c = [], d = 0, e = a.length; d < e; d++)
                        c[d] = a[d].Pi();
                    return c
                }
                a.C.oK = a.C.Xj.extend({
                    B: function(c) {
                        a.C.oK.Kc.B.call(this, []);
                        this.CLASS_NAME = "AMap.GeoJSON";
                        b.e.$a(this.CLASS_NAME, c);
                        this.G = b.extend({
                            getMarker: function(b, c) {
                                return new a.C.eb({
                                    position: c
                                })
                            },
                            getPolyline: function(b, c) {
                                return new a.C.Lb({
                                    path: c
                                })
                            },
                            getPolygon: function(b, c) {
                                return new a.C.Rb({
                                    path: c
                                })
                            },
                            coordsToLatLng: function(a) {
                                return a
                            }
                        }, c);
                        if (!this.G.coordsToLatLngs) {
                            var d = this.G.coordsToLatLng;
                            this.G.coordsToLatLngs = function(a) {
                                for (var b = [], c = 0, e = a.length; c < e; c++)
                                    b.push(d.call(null, a[c]));
                                return b
                            }
                        }
                        this.importData(this.G.geoJSON)
                    },
                    importData: function(a) {
                        if (a && (a = this.z0(a),
                            a.length)) {
                            this.vu(a);
                            var b = this.G.map;
                            if (b)
                                for (var c = 0, d = a.length; c < d; c++)
                                    a[c].setMap(b)
                        }
                    },
                    toGeoJSON: function() {
                        for (var a = this.Az(), b = [], c = 0, d = a.length; c < d; c++)
                            b[c] = a[c].toGeoJSON();
                        return b
                    },
                    z0: function(a) {
                        if (a) {
                            b.a.isArray(a) || (a = [a]);
                            for (var c = [], d = 0, e = a.length; d < e; d++) {
                                var m = this.A0(a[d]);
                                m && c.push(m)
                            }
                            return c
                        }
                    },
                    wL: function(a) {
                        var b = "Feature" === a.type ? a.geometry : a
                            , b = this.G.coordsToLatLng(b ? b.coordinates : null)
                            , b = this.G.getMarker(a, b);
                        this.Gm(a, b);
                        return b
                    },
                    VY: function(c) {
                        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                            e.push(this.wL(b.extend({}, c, {
                                type: "Feature",
                                properties: {
                                    _isAmap: !0,
                                    _pointIndex: l,
                                    _parentProperities: c.properties
                                },
                                geometry: {
                                    type: "Point",
                                    coordinates: d[l]
                                }
                            })));
                        d = new a.C.Xj(e);
                        this.Gm(c, d);
                        return d
                    },
                    vL: function(a) {
                        var b = "Feature" === a.type ? a.geometry : a
                            , b = this.G.coordsToLatLngs(b ? b.coordinates : null)
                            , b = this.G.getPolyline(a, b);
                        this.Gm(a, b);
                        return b
                    },
                    UY: function(c) {
                        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                            e.push(this.vL(b.extend({}, c, {
                                type: "Feature",
                                properties: {
                                    _isAmap: !0,
                                    _lineStringIndex: l,
                                    _parentProperities: c.properties
                                },
                                geometry: {
                                    type: "LineString",
                                    coordinates: d[l]
                                }
                            })));
                        d = new a.C.Xj(e);
                        this.Gm(c, d);
                        return d
                    },
                    xL: function(a) {
                        for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++)
                            c.push(this.G.coordsToLatLngs(b[d]));
                        b = this.G.getPolygon(a, c);
                        this.Gm(a, b);
                        return b
                    },
                    WY: function(c) {
                        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++)
                            e.push(this.xL(b.extend({}, c, {
                                type: "Feature",
                                properties: {
                                    _isAmap: !0,
                                    _polygonIndex: l,
                                    _parentProperities: c.properties
                                },
                                geometry: {
                                    type: "Polygon",
                                    coordinates: d[l]
                                }
                            })));
                        d = new a.C.Xj(e);
                        this.Gm(c, d);
                        return d
                    },
                    NY: function(c) {
                        for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++)
                            e.push(this.uD(b.extend({}, c, {
                                type: "Feature",
                                properties: {
                                    _isAmap: !0,
                                    _geometryIndex: l,
                                    _parentProperities: c.properties
                                },
                                geometry: d[l]
                            })));
                        d = new a.C.Xj(e);
                        this.Gm(c, d);
                        return d
                    },
                    A0: function(b) {
                        if (b)
                            switch (b.type) {
                                case "Feature":
                                    return this.uD(b);
                                case "FeatureCollection":
                                    for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
                                        var n = this.uD(c[e]);
                                        n && d.push(n)
                                    }
                                    c = new a.C.Xj(d);
                                    this.Gm(b, c);
                                    return c;
                                default:
                                    throw Error("Invalid GeoJSON object." + b.type);
                            }
                    },
                    Gm: function(a, c) {
                        c && a.properties && c.setExtData && c.setExtData(b.extend({}, c.getExtData() || {}, {
                            _geoJsonProperties: a.properties
                        }))
                    },
                    uD: function(a) {
                        var b = "Feature" === a.type ? a.geometry : a;
                        if (!(b && b.coordinates || b))
                            return null;
                        switch (b.type) {
                            case "Point":
                                return this.wL(a);
                            case "MultiPoint":
                                return this.VY(a);
                            case "LineString":
                                return this.vL(a);
                            case "MultiLineString":
                                return this.UY(a);
                            case "Polygon":
                                return this.xL(a);
                            case "MultiPolygon":
                                return this.WY(a);
                            case "GeometryCollection":
                                return this.NY(a);
                            default:
                                throw Error("Invalid GeoJSON geometry." + b.type);
                        }
                    }
                });
                a.C.Xj.fb({
                    toGeoJSON: function(a) {
                        a = a || this.Az();
                        for (var b = [], e = 0, l = a.length; e < l; e++)
                            a[e].toGeoJSON && (b[e] = a[e].toGeoJSON());
                        a = this.getExtData() || {};
                        if (c(b, "Point"))
                            b = {
                                type: "Feature",
                                properties: a._geoJsonProperties || {},
                                geometry: {
                                    type: "MultiPoint",
                                    coordinates: d(b)
                                }
                            };
                        else if (c(b, "LineString"))
                            b = {
                                type: "Feature",
                                properties: a._geoJsonProperties || {},
                                geometry: {
                                    type: "MultiLineString",
                                    coordinates: d(b)
                                }
                            };
                        else if (c(b, "Polygon"))
                            b = {
                                type: "Feature",
                                properties: a._geoJsonProperties || {},
                                geometry: {
                                    type: "MultiPolygon",
                                    coordinates: d(b)
                                }
                            };
                        else if (c(b, "*")) {
                            a = a._geoJsonProperties || {};
                            for (var e = [], l = 0, m = b.length; l < m; l++)
                                e.push(b[l].geometry);
                            b = {
                                type: "Feature",
                                properties: a,
                                geometry: {
                                    type: "GeometryCollection",
                                    geometries: e
                                }
                            }
                        } else
                            b = {
                                type: "FeatureCollection",
                                properties: a._geoJsonProperties || {},
                                features: b
                            };
                        return b
                    }
                });
                a.C.eb.fb({
                    toGeoJSON: function() {
                        return {
                            type: "Feature",
                            properties: (this.getExtData() || {})._geoJsonProperties || {},
                            geometry: {
                                type: "Point",
                                coordinates: this.getPosition().Pi()
                            }
                        }
                    }
                });
                a.C.Lb.fb({
                    toGeoJSON: function() {
                        return {
                            type: "Feature",
                            properties: (this.getExtData() || {})._geoJsonProperties || {},
                            geometry: {
                                type: "LineString",
                                coordinates: e(this.getPath())
                            }
                        }
                    }
                });
                a.C.Rb.fb({
                    toGeoJSON: function() {
                        var a = (this.getExtData() || {})._geoJsonProperties || {}, c;
                        if (c = this.getPath()) {
                            c = b.a.ra(c);
                            b.a.isArray(c[0]) || (c = [c]);
                            for (var d = [], l = 0, m = c.length; l < m; l++)
                                d[l] = e(c[l]);
                            c = d
                        } else
                            c = [];
                        return {
                            type: "Feature",
                            properties: a,
                            geometry: {
                                type: "Polygon",
                                coordinates: c
                            }
                        }
                    }
                })
            }
        )(w, f);
        w.D.OB = w.D.hc.extend({
            ea: [f.sK],
            B: function(a) {
                w.D.OB.Kc.B.call(this, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
                this.CLASS_NAME = "AMap.LayerGroup";
                this.map = null;
                this.add(a)
            },
            dc: function(a) {
                this.El("setMap", a);
                this.set("map", a);
                this.map = a;
                return this
            },
            mapChanged: function() {},
            Ky: function(a) {
                var b = this;
                this.add(a, function(a) {
                    b.map && a.setMap(b.map)
                });
                return this
            },
            Ki: function(a) {
                var b = this;
                this.remove(a, function(a) {
                    a.getMap() === b.map && a.setMap(null)
                });
                return this
            },
            a7: function() {
                var a = this;
                this.clear(function(b) {
                    b.getMap() === a.map && b.setMap(null)
                });
                return this
            },
            fH: function() {
                this.El("hide");
                return this
            },
            show: function() {
                this.El("show");
                return this
            },
            reload: function() {
                this.El("reload");
                return this
            },
            rb: function() {
                var a = this
                    , b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                    , c = f.a.keys(b);
                f.a.cf(c, function(c) {
                    a.El("set", c, b[c])
                });
                return this
            }
        });
        w.D.OB.cn({
            find: "getLayer",
            Az: "getLayers",
            Ky: ["addLayer", "addLayers"],
            Pc: "hasLayer",
            Ki: ["removeLayer", "removeLayers"],
            a7: "clearLayers",
            cf: "eachLayer",
            dc: "setMap",
            rb: "setOptions",
            show: "show",
            fH: "hide",
            reload: "reload",
            h: "on",
            H: "off"
        });
        f.mX = w.Tb.extend({
            B: function(a, b) {
                b && (b.center = b.position,
                    b.zoom = 11);
                arguments.callee.oa.apply(this, arguments);
                window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
            }
        });
        f.nX = w.C.eb.extend({
            B: function(a) {
                arguments.callee.oa.apply(this, arguments)
            }
        });
        f.zc = {
            Vm: function(a, b) {
                for (var c = Infinity, d = 0, e = 1, g = b.length; e < g; d = e,
                    e += 1)
                    c = Math.min(c, f.zc.Wca(a, [b[d], b[e]]));
                return Math.sqrt(c)
            },
            Wca: function(a, b) {
                return this.Vca(a, this.PQ(a, b))
            },
            Vca: function(a, b) {
                var c = a[0] - b[0]
                    , d = a[1] - b[1];
                return c * c + d * d
            },
            hia: function(a, b, c, d) {
                d = d || 1E-6;
                if (c[0] === b[0]) {
                    var e = Math.min(b[1], c[1]);
                    b = Math.max(b[1], c[1]);
                    return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
                }
                var e = Math.min(b[0], c[0])
                    , g = Math.max(b[0], c[0]);
                return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d && a[0] >= e && a[0] <= g
            },
            PQ: function(a, b) {
                var c = a[0]
                    , d = a[1]
                    , e = b[0]
                    , g = b[1]
                    , h = e[0]
                    , e = e[1]
                    , k = g[0]
                    , g = g[1]
                    , l = k - h
                    , m = g - e
                    , c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
                0 >= c || (1 <= c ? (h = k,
                    e = g) : (h += c * l,
                    e += c * m));
                return [h, e]
            },
            nn: function(a) {
                for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], g, h, k = 0; k < b; k += 1)
                    h = a[k],
                        g = h[0],
                        h = h[1],
                        c += (g - e) * (h + d),
                        e = g,
                        d = h;
                return 0 < c
            },
            Tc: function(a, b, c) {
                var d = a[0];
                a = a[1];
                var e = !1, g, h, k, l, m = b.length, n = 0;
                for (l = m - 1; n < m; l = n,
                    n += 1) {
                    var p = !1;
                    g = b[n][0];
                    h = b[n][1];
                    k = b[l][0];
                    l = b[l][1];
                    if (g === d && h === a || k === d && l === a)
                        return c ? !0 : !1;
                    if (h < a === l >= a) {
                        g = (k - g) * (a - h) / (l - h) + g;
                        if (d === g)
                            return c ? !0 : !1;
                        p = d < g
                    }
                    p && (e = !e)
                }
                return e
            },
            lU: function(a, b) {
                function c(a, b, c, d) {
                    var e = [a[0] - b[0], a[1] - b[1]]
                        , g = [c[0] - d[0], c[1] - d[1]];
                    a = a[0] * b[1] - a[1] * b[0];
                    c = c[0] * d[1] - c[1] * d[0];
                    d = 1 / (e[0] * g[1] - e[1] * g[0]);
                    return [(a * g[0] - c * e[0]) * d, (a * g[1] - c * e[1]) * d]
                }
                function d(a, b, c) {
                    return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
                }
                var e, g, h, k, l = a;
                e = b[b.length - 2];
                for (var m = 0, n = b.length - 1; m < n; m++) {
                    g = b[m];
                    var p = l
                        , l = [];
                    h = p[p.length - 1];
                    for (var q = 0, r = p.length; q < r; q++)
                        k = p[q],
                            d(k, e, g) ? (d(h, e, g) || l.push(c(e, g, h, k)),
                                l.push(k)) : d(h, e, g) && l.push(c(e, g, h, k)),
                            h = k;
                    e = g
                }
                if (3 > l.length)
                    return [];
                l.push(l[0]);
                return l
            }
        };
        (function(a) {
                function b(b, c) {
                    var d;
                    a: {
                        switch (b) {
                            case "EPSG3395":
                                d = a.Lf.jK;
                                break a;
                            case "EPSG4326":
                                d = a.Lf.kK;
                                break a
                        }
                        d = a.Lf.FB
                    }
                    return {
                        project: function(b) {
                            a.a.isArray(b) && (b = new a.W(b[0],b[1]));
                            return d.xv(b, c).Pi()
                        },
                        unproject: function(b) {
                            a.a.isArray(b) && (b = new a.I(b[0],b[1]));
                            return d.Ov(b, c).Pi()
                        },
                        normalizePoint: function(b) {
                            return a.a.ra(b)
                        },
                        distance: function(b, c) {
                            a.e.add(this.CLASS_NAME, "distance");
                            c = this.normalizePoint(c);
                            if (a.a.isArray(c))
                                return this.distanceToLine(b, c);
                            b = this.normalizePoint(b);
                            var d = a.Vi.So
                                , e = Math.cos
                                , g = b.N * d
                                , h = c.N * d
                                , k = 2 * a.Vi.jG
                                , d = c.L * d - b.L * d
                                , e = (1 - e(h - g) + (1 - e(d)) * e(g) * e(h)) / 2;
                            return k * Math.asin(Math.sqrt(e))
                        },
                        ringArea: function(b) {
                            a.e.add(this.CLASS_NAME, "ringArea");
                            b = this.normalizeLine(b);
                            var c = a.Vi.jG * a.Vi.So
                                , d = 0
                                , e = b.length;
                            if (3 > e)
                                return 0;
                            for (var g = 0; g < e - 1; g += 1)
                                 var h = b[g]
                                     , k = b[g + 1]
                                     , u = h.L * c * Math.cos(h.N * a.Vi.So)
                                     , h = h.N * c
                                     , x = k.L * c * Math.cos(k.N * a.Vi.So)
                                     , d = d + (u * k.N * c - x * h);
                            g = b[g];
                            b = b[0];
                            e = g.L * c * Math.cos(g.N * a.Vi.So);
                            g = g.N * c;
                            k = b.L * c * Math.cos(b.N * a.Vi.So);
                            d += e * b.N * c - k * g;
                            return 0.5 * Math.abs(d)
                        },
                        sphericalCalotteArea: function(b) {
                            a.e.add(this.CLASS_NAME, "sphericalCalotteArea");
                            var c = a.Vi.jG;
                            b = c - c * Math.cos(b / c);
                            return 2 * Math.PI * c * b
                        }
                    }
                }
                function c() {
                    return {
                        normalizePoint: function(a) {
                            return a && a.x && a.y ? [a.x, a.y] : a
                        },
                        distance: function(a, b) {
                            var c = a[0] - b[0]
                                , d = a[1] - b[1];
                            return Math.sqrt(c * c + d * d)
                        },
                        project: function(a) {
                            return a
                        },
                        unproject: function(a) {
                            return a
                        },
                        ringArea: function(a) {
                            for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
                                var q = a[p - 1]
                                    , r = a[p];
                                b[0] = e[0] - r[0];
                                b[1] = e[1] - r[1];
                                c[0] = e[0] - q[0];
                                c[1] = e[1] - q[1];
                                d += b[0] * c[1] - b[1] * c[0]
                            }
                            return d / 2
                        }
                    }
                }
                function d(a) {
                    for (var b = 0, c = 0; c < a.length - 1; c++)
                         var d = a[c]
                             , e = a[c + 1]
                             , b = b + (e[0] - d[0]) * (e[1] + d[1]);
                    return 0 >= b
                }
                function e(b) {
                    this.CLASS_NAME = "AMap.GeometryUtil";
                    this.Bb = a.extend({
                        onSegmentTolerance: 5,
                        crs: "EPSG3857",
                        maxZoom: 20
                    }, b);
                    this.setCrs(this.Bb.crs)
                }
                a.extend(e.prototype, {
                    clone: function(b) {
                        return new e(a.extend({}, this.Bb, b))
                    },
                    isPoint: function(b) {
                        return b && (b instanceof a.W || a.a.isArray(b) && !isNaN(b[0]))
                    },
                    normalizePoint: function(a) {
                        return a
                    },
                    normalizeLine: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)
                            b.push(this.normalizePoint(a[c]));
                        return b
                    },
                    normalizeMultiLines: function(b) {
                        a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
                        for (var c = [], d = 0, e = b.length; d < e; d++)
                            c.push(this.normalizeLine(b[d]));
                        return c
                    },
                    setCrs: function(d) {
                        a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Bb.maxZoom))
                    },
                    distance: function() {
                        throw Error("distance Not implemented!");
                    },
                    Hq: function(a, b) {
                        a = this.normalizeLine(a);
                        this.isPoint(a[0]) || (a = a[0]);
                        for (var c = [], d = 0, e = a.length; d < e; d++)
                            c.push(this.project(a[d]));
                        !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c),
                            c.reverse());
                        return c
                    },
                    m4: function(a) {
                        for (var b = [], c = 0, d = a.length; c < d; c++)
                            b.push(this.unproject(a[c]));
                        return b
                    },
                    closestOnSegment: function(b, c, d) {
                        a.e.add(this.CLASS_NAME, "closestOnSegment");
                        b = a.zc.PQ(this.project(b), this.Hq([c, d]));
                        return this.unproject(b)
                    },
                    closestOnLine: function(a, b) {
                        b = this.normalizeLine(b);
                        for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
                            var p = this.closestOnSegment(a, b[e], b[e + 1])
                                , q = this.distance(a, p);
                            q < c && (c = q,
                                d = p)
                        }
                        return d
                    },
                    distanceToSegment: function(a, b, c) {
                        return this.distanceToLine(a, [b, c])
                    },
                    distanceToLine: function(a, b) {
                        b = this.normalizeLine(b);
                        this.isPoint(b[0]) || (b = b[0]);
                        for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++)
                             var n = this.closestOnSegment(a, b[d], b[d + 1])
                                 , c = Math.min(c, this.distance(a, n));
                        return c
                    },
                    isPointOnSegment: function(b, c, d, e) {
                        a.e.add(this.CLASS_NAME, "isPointOnSegment");
                        if (!e && 0 !== e || 0 > e)
                            e = this.Bb.onSegmentTolerance;
                        return this.distanceToSegment(b, c, d) <= e
                    },
                    isPointOnLine: function(a, b, c) {
                        b = this.normalizeLine(b);
                        for (var d = 0, e = b.length; d < e - 1; d++)
                            if (this.isPointOnSegment(a, b[d], b[d + 1], c))
                                return !0;
                        return !1
                    },
                    isPointOnRing: function(a, b, c) {
                        b = this.normalizeLine(b);
                        for (var d = 0, e = b.length; d < e; d++)
                            if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c))
                                return !0;
                        return !1
                    },
                    isPointOnPolygon: function(a, b, c) {
                        b = this.normalizeMultiLines(b);
                        for (var d = 0, e = b.length; d < e; d++)
                            if (this.isPointOnRing(a, b[d], c))
                                return !0;
                        return !1
                    },
                    makesureClockwise: function(a) {
                        d(a) || (a = [].concat(a),
                            a.reverse());
                        return a
                    },
                    makesureAntiClockwise: function(a) {
                        d(a) && (a = [].concat(a),
                            a.reverse());
                        return a
                    },
                    isPointInRing: function(b, c) {
                        a.e.add(this.CLASS_NAME, "isPointInRing");
                        c = this.normalizeLine(c);
                        var d = this.Hq(c, !0);
                        return a.zc.Tc(this.project(b), d, !1)
                    },
                    isRingInRing: function(a, b) {
                        for (var c = 0, d = a.length; c < d; c++)
                            if (!this.isPointInRing(a[c], b))
                                return !1;
                        return !0
                    },
                    isPointInPolygon: function(a, b) {
                        b = this.normalizeMultiLines(b);
                        for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]),
                        0 < d && (c = !c),
                            c); d += 1)
                            ;
                        return c
                    },
                    doesSegmentsIntersect: function(b, c, d, e) {
                        a.e.add(this.CLASS_NAME, "doesSegmentsIntersect");
                        var m = this.Hq([b, c, d, e]);
                        b = m[0];
                        c = m[1];
                        d = m[2];
                        e = m[3];
                        var m = !1
                            , n = (e[0] - d[0]) * (b[1] - d[1]) - (e[1] - d[1]) * (b[0] - d[0])
                            , p = (c[0] - b[0]) * (b[1] - d[1]) - (c[1] - b[1]) * (b[0] - d[0]);
                        b = (e[1] - d[1]) * (c[0] - b[0]) - (e[0] - d[0]) * (c[1] - b[1]);
                        0 !== b && (c = n / b,
                            p /= b,
                        0 <= c && 1 >= c && 0 <= p && 1 >= p && (m = !0));
                        return m
                    },
                    doesSegmentLineIntersect: function(a, b, c) {
                        c = this.normalizeLine(c);
                        for (var d = 0, e = c.length; d < e - 1; d++)
                            if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1]))
                                return !0;
                        return !1
                    },
                    doesSegmentRingIntersect: function(a, b, c) {
                        c = this.normalizeLine(c);
                        for (var d = 0, e = c.length; d < e; d++)
                            if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1]))
                                return !0;
                        return !1
                    },
                    doesSegmentPolygonIntersect: function(a, b, c) {
                        c = this.normalizeMultiLines(c);
                        for (var d = 0, e = c.length; d < e; d++)
                            if (this.doesSegmentRingIntersect(a, b, c[d]))
                                return !0;
                        return !1
                    },
                    doesLineLineIntersect: function(a, b) {
                        a = this.normalizeLine(a);
                        for (var c = 0, d = a.length; c < d - 1; c++)
                            if (this.doesSegmentLineIntersect(a[c], a[c + 1], b))
                                return !0;
                        return !1
                    },
                    doesLineRingIntersect: function(a, b) {
                        a = this.normalizeLine(a);
                        for (var c = 0, d = a.length; c < d - 1; c++)
                            if (this.doesSegmentRingIntersect(a[c], a[c + 1], b))
                                return !0;
                        return !1
                    },
                    doesRingRingIntersect: function(a, b) {
                        a = this.normalizeLine(a);
                        for (var c = 0, d = a.length; c < d; c++)
                            if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b))
                                return !0;
                        return !1
                    },
                    tZ: function(a, b) {
                        function c() {
                            var a = [e[0] - n[0], e[1] - n[1]]
                                , b = [p[0] - q[0], p[1] - q[1]]
                                , d = e[0] * n[1] - e[1] * n[0]
                                , g = p[0] * q[1] - p[1] * q[0]
                                , h = 1 / (a[0] * b[1] - a[1] * b[0]);
                            return [(d * b[0] - g * a[0]) * h, (d * b[1] - g * a[1]) * h]
                        }
                        function d(a) {
                            return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
                        }
                        a = this.makesureAntiClockwise(a);
                        b = this.makesureClockwise(b);
                        var e, n, p, q, r = a;
                        e = b[b.length - 1];
                        for (var t = 0, u = b.length; t < u; t++) {
                            n = b[t];
                            var x = r
                                , r = [];
                            p = x[x.length - 1];
                            for (var v = 0, s = x.length; v < s; v++)
                                q = x[v],
                                    d(q) ? (d(p) || r.push(c()),
                                        r.push(q)) : d(p) && r.push(c()),
                                    p = q;
                            e = n
                        }
                        return r
                    },
                    ringRingClip: function(b, c) {
                        a.e.add(this.CLASS_NAME, "ringRingClip");
                        b = this.Hq(b);
                        c = this.Hq(c);
                        var d = this.tZ(b, c);
                        return this.m4(d)
                    },
                    ringArea: function() {
                        throw Error("distance Not implemented!");
                    },
                    distanceOfLine: function(a) {
                        a = this.normalizeLine(a);
                        for (var b = 0, c = 0, d = a.length; c < d - 1; c++)
                            b += this.distance(a[c], a[c + 1]);
                        return b
                    },
                    isClockwise: function(a) {
                        a = this.Hq(a);
                        return d(a)
                    }
                });
                a.GB = new e
            }
        )(f);
        var uc = {
            Pixel: f.I,
            LngLat: f.W,
            Size: f.sc,
            Bounds: f.Nd,
            PixelBounds: f.te,
            event: w.event,
            Panorama: f.mX,
            PanoramaMarker: f.nX,
            Map: w.Tb,
            View2D: w.bC,
            GroundImage: w.D.IB,
            Marker: w.C.eb,
            ImageMarker: w.C.Jea,
            Text: w.C.KK,
            Icon: w.C.Ue,
            MarkerShape: w.C.hX,
            Polyline: w.C.Lb,
            BezierCurve: w.C.Os,
            Polygon: w.C.Rb,
            Circle: w.C.lf,
            Ellipse: w.C.Zn,
            Rectangle: w.C.co,
            ContextMenu: w.C.Wj,
            InfoWindow: w.C.Od,
            Buildings: w.D.Yn,
            TileLayer: w.D.nb,
            ImageLayer: w.D.Ts,
            CanvasLayer: w.D.IW,
            VideoLayer: w.D.MX,
            VectorLayer: w.D.kc,
            MassMarks: w.D.iX,
            LayerGroup: w.D.OB,
            OverlayGroup: w.C.Xj,
            GeoJSON: w.C.oK,
            CANVAS: "canvas",
            DOM: "dom",
            GeometryUtil: f.GB
        };
        uc.plugin = uc.service = w.Tb.prototype.plugin;
        uc.TileLayer.Satellite = w.D.nb.HK;
        uc.TileLayer.RoadNet = w.D.nb.FK;
        uc.TileLayer.Flexible = w.D.nb.QW;
        uc.TileLayer.Traffic = w.D.nb.LK;
        uc.Panorama.Events = w.event;
        uc.TileLayer.PanoramaLayer = w.D.nb.Lea;
        uc.UA = {
            ie: f.l.mn,
            ielt9: f.l.Id,
            ielt11: f.l.Y9,
            mobile: f.l.Y,
            android: f.l.dh,
            ios: f.l.Vz
        };
        uc.Browser = {
            ua: navigator.userAgent,
            mobile: f.l.Y,
            plat: f.l.Ep,
            mac: f.l.Av,
            windows: f.l.rea,
            ios: f.l.Vz,
            iPad: f.l.S9,
            iPhone: f.l.T9,
            android: f.l.dh,
            android23: f.l.d6,
            chrome: f.l.chrome,
            firefox: f.l.uG,
            safari: f.l.SI,
            wechat: f.l.vW,
            uc: f.l.Pda,
            qq: f.l.wba,
            ie: f.l.mn,
            ie6: f.l.Lg,
            ie7: f.l.op,
            ie8: f.l.Id && !f.l.op && !f.l.Lg,
            ie9: f.l.X9,
            ie10: f.l.wS,
            ie11: f.l.U9,
            edge: f.l.r8,
            ielt9: f.l.Id,
            baidu: f.l.Ry,
            isLocalStorage: f.l.Ij,
            isGeolocation: !!navigator.geolocation,
            mobileWebkit: f.l.Y$,
            mobileWebkit3d: f.l.wT,
            mobileOpera: !!f.l.X$,
            retina: f.l.kd,
            touch: !!f.l.he,
            msPointer: !!f.l.yT,
            pointer: !!f.l.tI,
            webkit: f.l.tW,
            ie3d: f.l.V9,
            webkit3d: f.l.uW,
            gecko3d: f.l.P8,
            opera3d: f.l.Iaa,
            any3d: f.l.Py,
            isCanvas: f.l.sp,
            isSvg: f.l.Bk,
            isVML: f.l.mn,
            isWorker: !!window.Worker,
            isWebsocket: !!window.WebSocket,
            isWebGL: function() {
                for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
                    try {
                        c = a.getContext(b[d])
                    } catch (e) {}
                    if (c)
                        if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height)
                            break;
                        else
                            return !0
                }
                return !1
            }
        };
        uc.Util = {
            colorNameToHex: f.a.RQ,
            rgbHex2Rgba: f.a.TU,
            argbHex2Rgba: f.a.xf,
            isEmpty: f.a.tp,
            deleteItemFromArray: f.a.UF,
            deleteItemFromArrayByIndex: f.a.pk,
            indexOf: f.a.indexOf,
            format: f.a.df,
            isArray: f.a.isArray,
            isDOM: f.a.Xz,
            includes: f.a.ea,
            requestIdleCallback: f.a.OU,
            cancelIdleCallback: f.a.DQ,
            requestAnimFrame: f.a.cc,
            cancelAnimFrame: f.a.$f
        };
        uc.DomUtil = {
            getViewport: f.g.av,
            getViewportOffset: f.g.Lz,
            create: f.g.create,
            setClass: f.g.wca,
            hasClass: f.g.lp,
            addClass: f.g.xa,
            removeClass: f.g.Fa,
            setOpacity: f.g.Xl,
            rotate: f.g.rotate,
            setCss: f.g.Aa,
            empty: f.g.Uv,
            remove: f.g.remove,
            TRANSFORM: f.g.He,
            TRANSITION: f.g.Rw
        };
        var vc = f.w;
        uc.User = {
            key: vc.key
        };
        window.AMap = uc;
        window.AMap.BuryPoint = f.BuryPoint;
        window.AMap.Class = f.Z;
        if (!vc.yv && "undefined" !== typeof arguments && arguments.callee)
            try {
                if (f.l.Ij && window.localStorage) {
                    var wc = window.localStorage["_AMap_" + f.iA];
                    wc && JSON.parse(wc).version === vc.Ug || window.localStorage.setItem("_AMap_" + f.iA, JSON.stringify({
                        version: vc.Ug,
                        script: "(" + arguments.callee + ")(config)"
                    }));
                    var xc = new Image;
                    xc.src = vc.cb + "/maps/cookie?key=amap_ver&value=" + vc.Ug;
                    document.body.appendChild(xc);
                    xc.onload = xc.onerror = xc.onabort = function() {
                        document.body.removeChild(xc)
                    }
                }
            } catch (yc) {}
        ;window.AMap.convertFrom = function(a, b, c) {
            f.e.add("AMap", "convertFrom", b);
            var d = f.w.Vc + "/v3/assistant/coordinate/convert";
            a = f.a.ra(a);
            var e = [];
            if (a instanceof Array) {
                for (var g = 0, h = a.length; g < h; g += 1)
                    e.push(a[g] + "");
                e = e.join(";")
            } else
                e = a + "";
            b = ["key=" + f.w.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
            d += 0 < b.length ? "?" + b.join("&") : "";
            d = new f.Ka.Xa(d,{
                callback: "callback"
            });
            d.h("complete", function(a) {
                if ("1" === a.status) {
                    a = a.locations.split(";");
                    for (var b = 0; b < a.length; b += 1) {
                        var d = a[b].split(",");
                        a[b] = new AMap.LngLat(d[0],d[1])
                    }
                    c && "function" === typeof c && c("complete", {
                        info: "ok",
                        locations: a
                    })
                } else
                    c && "function" === typeof c && c("error", a.info)
            }, this);
            d.h("error", function(a) {
                c && "function" === typeof c && c("error", a.info)
            }, this)
        }
        ;
        f.Ka = f.Ka || {};
        f.Ka.XB = f.Z.extend({
            ea: [f.ia],
            B: function(a, b) {
                this.G = {
                    callback: "cbk",
                    type: "json",
                    charset: "utf-8"
                };
                b = b || {};
                f.a.rb(this, b);
                this.url = a;
                this.send(a, b.yd, b.u7)
            },
            send: function(a) {
                var b = f.g.create("script");
                b.type = "text/javascript";
                b.charset = this.G.charset;
                var c = this;
                f.l.Id ? b.onreadystatechange = function() {
                        "loaded" !== this.readyState && "complete" !== this.readyState || c.r("complete")
                    }
                    : (b.onload = function() {
                            c.r("complete")
                        }
                            ,
                            b.onerror = function() {
                                c.r("error", {
                                    status: 0,
                                    info: "service error",
                                    url: a
                                })
                            }
                    );
                b.src = a;
                document.getElementsByTagName("head")[0].appendChild(b)
            }
        });
        f.Ka.Xa = f.Ka.XB.extend({
            N6: function() {
                if (f.a.eV)
                    return f.a.cB.push(this),
                        !0
            },
            hca: function() {
                this.r("error", {
                    info: "TIME_OUT_A"
                })
            },
            send: function(a, b, c, d) {
                function e() {
                    window[g] = null;
                    try {
                        window[g] = null
                    } catch (a) {}
                    h.onerror = null;
                    h.parentNode && h.parentNode.removeChild(h)
                }
                if (!this.G.cr || !this.N6()) {
                    a = encodeURI(a);
                    var g = this.G.fun;
                    if (!g || window[g])
                        g = f.a.KR("jsonp_", 6) + "_";
                    var h = document.createElement("script");
                    h.type = "text/javascript";
                    h.charset = "utf-8";
                    h.async = !0;
                    var k = this;
                    f.l.Id || (h.onerror = function() {
                            e();
                            k.r("error", {
                                info: "REQUEST_FAILED",
                                url: a
                            })
                        }
                    );
                    window[g] = function(a) {
                        e();
                        if (k.G.callbackFunction)
                            k.G.callbackFunction.call(k.G.context, a);
                        else if (3E4 === a.errcode && a.data)
                            f.a.eV = !0,
                                f.ib.load("AMap.AntiCrabFrame", function() {
                                    f.a.cr || (f.a.cr = new f.EW);
                                    f.a.cB.push(k);
                                    f.a.cr.open(k.G.yd, a.data.host, k.pI || "", k.url)
                                });
                        else {
                            if (a instanceof Array || "string" === typeof a)
                                a = {
                                    data: a
                                };
                            a.wga = g;
                            k.r("complete", a)
                        }
                    }
                    ;
                    b = "?";
                    -1 !== a.indexOf("?") && (b = "&");
                    b = a + b + this.G.callback + "=" + g;
                    if (-1 !== a.indexOf(f.w.Vc + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch"))
                        b += "&platform=JS&logversion=2.0&sdkversion=" + f.w.qu,
                            b += "&appname=" + f.w.Jm;
                    b += "&csid=" + this.eea();
                    if (c = this.G.sz) {
                        var l = [], m;
                        for (m in c)
                            c.hasOwnProperty(m) && (l.push(m + "=" + c[m]),
                                b += "&" + m + "=" + encodeURIComponent(c[m]));
                        k.pI = l.join("&")
                    }
                    h.src = d ? b + "&rereq=true" : b;
                    f.Ka.Xa.bM || (f.Ka.Xa.bM = document.getElementsByTagName("head")[0]);
                    f.Ka.Xa.bM.appendChild(h)
                }
            },
            eea: function() {
                var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
                return function(b, c) {
                    var d = [], e;
                    c = c || a.length;
                    if (b)
                        for (e = 0; e < b; e++)
                            d[e] = a[0 | Math.random() * c];
                    else {
                        var g;
                        d[8] = d[13] = d[18] = d[23] = "-";
                        d[14] = "4";
                        for (e = 0; 36 > e; e++)
                            d[e] || (g = 0 | 16 * Math.random(),
                                d[e] = a[19 === e ? g & 3 | 8 : g])
                    }
                    return d.join("")
                }
            }()
        });
        window.AMap.Http = {};
        window.AMap.Http.JSONP = f.Ka.Xa;
        f.Ka.XMLHttpRequest = f.Ka.XB.extend({
            send: function(a, b, c) {
                var d = this.vea = new XMLHttpRequest
                    , e = this;
                d.onreadystatechange = function() {
                    4 === d.readyState && 200 === d.status ? e.r("complete", {
                        url: a,
                        data: d.responseText
                    }) : 404 === d.status && (d.abort(),
                        e.r("error", {
                            url: a,
                            data: "404"
                        }))
                }
                ;
                d.open(b || "GET", a);
                "POST" === b && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                d.send(c || void 0)
            },
            abort: function() {
                this.vea.abort()
            }
        });
        f.sh = f.Z.extend({
            B: function(a, b, c, d) {
                this.start = a;
                this.end = b;
                this.transition = c;
                this.precision = d || 0;
                this.Kp = !1;
                return this
            },
            Pj: function(a) {
                this.Ye = +new Date;
                this.frames = 0;
                this.yf = a;
                this.startTime = +new Date;
                this.Kp = !0;
                this.eQ = f.a.cc(this.update, this, !1)
            },
            update: function() {
                this.eQ = f.a.cc(this.update, this, !1);
                this.frames += 1;
                var a = +new Date
                    , b = a - this.startTime
                    , b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.Ye) : null;
                "number" === typeof b && Math.abs(b - this.end) < this.precision && (this.stop(),
                    b = this.end);
                this.Ye = a;
                this.Ol.call(this.yf || this, b)
            },
            stop: function(a) {
                f.a.$f(this.eQ);
                a && this.update();
                this.Kp = !1
            }
        });
        f.sh.Easing = {
            Linear: {
                None: function(a) {
                    return a
                }
            },
            Bounce: {
                In: function(a) {
                    return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
                },
                Out: function(a) {
                    return f.sh.Easing.Bounce.In(1 - a)
                }
            },
            Cubic: {
                In: function(a) {
                    return 1 - a * a * a
                },
                Out: function(a) {
                    a = 1 - a;
                    return 1 - a * a * a
                }
            }
        };
        f.Tb = f.Z.extend({
            ea: [f.ia, f.be, f.nT],
            B: function(a, b) {
                this.O = b;
                this.rl = b.rl;
                this.Li = "";
                this.yh = this.li = this.Eh = !1;
                this.J = a;
                this.e1();
                this.g$();
                this.X("zooms", b, !0);
                this.X("size", b, !0);
                this.X("limitBounds", b);
                this.X("view", b);
                this.X("nolimg", b, !0);
                this.X("mapNumber", b, !0);
                this.X("lang", b, !0);
                this.X("features", b, !0);
                this.X("styleID", b, !0);
                this.X("forceBig", b, !0);
                this.X("mode", b, !0);
                this.X("showBuildingBlock", b, !0);
                this.X("mapStyle", b);
                var c = this.get("mapStyle");
                this.nd = f.w.nd[c] || f.w.nd["default"];
                this.Gy = "#a3ccff";
                this.hu = b.get("skyColor") || "#cce0ff";
                this.X("editEnable", b);
                this.Wb && this.X("style", b, !0);
                this.X("styleUrl", b);
                this.X("hightlight", b, !0);
                this.X("labelzIndex", b, !0);
                f.l.fw && (this.td = new f.D.uh(new w.D.nb({
                    zIndex: b.get("labelzIndex"),
                    visible: !1
                }),this),
                    this.td.type = "\u77e2\u91cf\u6807\u6ce8",
                    b.labelsLayer = this.td.qa,
                    this.td.qa.h("complete", this.tm, this, !0),
                    this.td.qa.h("renderComplete", this.tm, this),
                    this.td.It = this.td.qn = !0);
                this.X("isHotspot", b, !0);
                this.X("layers", b);
                this.X("overlays", b);
                this.X("infos", b, !0);
                this.X("contextmenus", b, !0);
                this.X("controls", b);
                this.X("bounds", b);
                this.X("draw", b);
                this.Sd("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender 3rdpartyDataEnable".split(" "), b);
                this.Sd("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "), b, !0);
                this.get("jogEnable") ? this.rp = !0 : this.rp = !1;
                this.B0();
                this.I0();
                this.E0();
                this.X("resizeEnable", b);
                this.O.map = this;
                c = this.get("size");
                c = c.width * c.height / 65536;
                f.l.kd && 3 < c && (this.nQ = !0);
                this.PU()
            },
            editEnableChanged: function() {
                location.hostname.match(/.amap.com/) && (this.Wb = this.get("editEnable"))
            },
            labelzIndexChanged: function() {
                this.td && this.td.set("zIndex", this.get("labelzIndex"))
            },
            styleChanged: function() {
                this.Ii = !0
            },
            mapStyleChanged: function() {
                if (this.O.ih) {
                    this.Li && (this.set("style", ""),
                        this.lz = this.Li = "");
                    var a = this.get("mapStyle");
                    this.Ii = !0;
                    this.nd = f.w.nd[a] || f.w.nd["default"];
                    this.Tv()
                }
            },
            styleUrlChanged: function() {
                if (this.O.ih) {
                    var a = this.get("styleUrl") || "";
                    if (a !== this.Li) {
                        var b = -1 !== a.indexOf("?isPublic=true")
                            , a = a.substr(0, 46)
                            , c = a.split("amap://styles/")[1];
                        "normal" === c ? (this.Li = "",
                            this.set("nolimg", !1),
                            this.set("style", ""),
                            this.lz = "") : (this.uw = !0,
                            this.set("nolimg", !0),
                            b = new f.Ka.Xa(32 > c.length ? f.w.bc + "://webapi.amap.com/style?name=" + c + "&key=" + f.w.key : f.w.bc + "://webapi.amap.com/v4/map/styles?styleid=" + c + "&s=rsv3&key=" + f.w.key + (b ? "&ispublic=1" : ""),{
                                callback: "callback"
                            }),
                            b.h("complete", function(a) {
                                a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
                                this.uw = !1
                            }, this),
                            b.h("error", function() {
                                this.uw = !1
                            }, this),
                            this.Li = a,
                            this.Tv())
                    }
                }
            },
            fV: function(a) {
                this.J.style.background = a
            },
            resizeEnableChanged: function() {},
            P6: function() {
                var a = this.get("limitBounds")
                    , b = this.get("bounds");
                b.Eb.L > b.Cb.L && (b.Cb.L += 360);
                if (!a.contains(b)) {
                    var c = this.get("center").Db();
                    a.gg() < b.gg() ? c.L = a.Hg().L : (a.Eb.L > b.Eb.L && (c.L += a.Eb.L - b.Eb.L),
                    a.Cb.L < b.Cb.L && (c.L += a.Cb.L - b.Cb.L));
                    a.eg() < b.eg() ? c.N = a.Hg().N : (a.Eb.N > b.Eb.N && (c.N += a.Eb.N - b.Eb.N),
                    a.Cb.N < b.Cb.N && (c.N += a.Cb.N - b.Cb.N));
                    return c
                }
            },
            zE: function() {
                var a = this.fJ;
                this.O.refreshSize();
                var b = this.get("size");
                b && a && !b.yb(a) && (this.fJ = b,
                    this.Op = !0,
                    this.set("display"),
                    this.QU(b),
                this.get("resizeEnable") && this.da("resize", {
                    naa: a,
                    DT: b
                }))
            },
            MO: function() {
                var a = this;
                a.zE();
                a.uE = setTimeout(function() {
                    a.MO()
                }, 200)
            },
            mZ: function() {
                this.uE && (clearTimeout(this.uE),
                    this.uE = null)
            },
            e1: function() {
                this.fJ = this.O.getSize();
                if (f.l.Id || f.l.vW && f.l.Vz || f.l.S$)
                    this.MO();
                else {
                    var a = this;
                    f.A.a6(this.J, function(b) {
                        a.zE(b)
                    })
                }
            },
            g$: function() {
                var a = this.J;
                f.g.xa(a, "amap-container");
                var b = {};
                b.pc = f.g.create("div", a, "amap-maps");
                this.ii = f.g.create("div", a);
                this.ii.style.display = "none";
                b.Nm = f.g.create("div", b.pc, "amap-drags");
                b.D = f.g.create("div", b.Nm, "amap-layers");
                b.C = f.g.create("div", b.Nm, "amap-overlays");
                b.controls = f.g.create("div", a, "amap-controls");
                b.zv = f.g.create("a", a, "amap-logo");
                var c = window.location.host;
                -1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.zv.href = f.l.Y ? "http://m.amap.com" : "http://gaode.com",
                    b.zv.target = "_blank");
                f.g.create("img", b.zv).src = f.l.kd ? this.O.G.logoUrlRetina : this.O.G.logoUrl;
                b.ti = f.g.create("div", a, "amap-copyright");
                b.ti.style.display = "none";
                350 < f.g.av(this.J).width && (b.ti.innerHTML = this.O.G.copyright,
                    b.ti.mT = f.g.create("span", b.ti, "amap-mcode"),
                    this.Tv());
                this.Ga = b
            },
            Tv: function() {
                var a = this.get("layers");
                if (a) {
                    for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
                        var e = a[d].get("mapNumber")
                            , g = a[d].getzIndex();
                        e && g > b && a[d].get("visible") && (c = e,
                            b = g)
                    }
                    this.set("mapNumber", c);
                    a = this.O.getMapStyle();
                    "GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "",
                        this.Ga.ti.style.visibility = "hidden",
                        this.Ga.zv.style.display = "none");
                    c && this.Ga.ti.mT && (this.Ga.ti.mT.innerHTML = "- " + c + "\u53f7",
                        this.Ga.ti.style.visibility = "visible",
                        this.Ga.zv.style.display = "block");
                    return c
                }
            },
            nM: function() {
                f.l.Ij && f.eo && f.eo.flush()
            },
            tm: function() {
                function a() {
                    for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
                        var e = a[c].get("zooms");
                        if (!(a[c].V0 || !e || b > e[1] || b < e[0] || !a[c].get("visible") || a[c].D && a[c].D.Oa && 0 === a[c].D.Oa.length || a[c].D && a[c].D.TH || a[c].D && a[c].D.ya))
                            return !1
                    }
                    return d.td && d.td.get("visible") && !d.td.ya ? !1 : !0
                }
                function b() {
                    var a = {
                        id: d.O.id
                    };
                    f.md.Fd.end(f.extend(a, {
                        key: "rds"
                    }));
                    f.md.Fd.send(f.extend(a, {
                        params: {
                            rs: d.get("baseRender"),
                            viewmode: d.O.getViewMode_(),
                            fd: 0 === d.cA ? 1 : 0,
                            raster: d.O.Rv ? 1 : 0
                        }
                    }));
                    d.O && d.O.Dj && d.O.Dj.wE();
                    d.nM();
                    d.set("display");
                    d.BH = !0
                }
                function c() {
                    f.md.Fd.end({
                        id: d.O.id,
                        key: "rd"
                    });
                    f.a.cc(function() {
                        this.r("complete")
                    }, d);
                    d.O.ya = !0;
                    d.set("display")
                }
                if (!this.VF)
                    if (this.BH)
                        1 === this.ko && 13 === this.get("zoom") && (f.a.Uu.stop(this.ux),
                            f.md.Fd.send({
                                id: this.O.id,
                                params: {
                                    fps: this.ux.Uu,
                                    type: "fps",
                                    rs: this.get("baseRender")
                                }
                            }),
                            this.ko = 2),
                            this.nM();
                    else {
                        var d = this
                            , e = this.O.get("wpoLayer")
                            , g = a();
                        e ? (e.D && e.D.ya && (this.O.ya || c()),
                        g && (this.O.ya || c(),
                            d.O.Ki(e),
                            d.O.set("wpoLayer", void 0),
                            d.O.Rv = d.O.ET = !0,
                            b())) : g && (this.O.ya || c(),
                            b())
                    }
            },
            layersChanged: function() {
                this.Wa = this.Wa || [];
                for (var a = this.get("layers"), b = this.Wa.length - 1; 0 <= b; b -= 1)
                    this.Wa[b] === this.Hc || this.Wa[b] === this.Hn || this.Wa[b].It || this.Wa[b].qa.It || -1 !== f.a.indexOf(a, this.Wa[b].qa) || (this.Wa[b].kf(),
                    this.Wa[b].Yh && this.Wa[b].Yh.kf(),
                        this.Wa[b].qa.H("complete", this.tm, this),
                        this.Wa[b].qa.H("renderComplete", this.tm, this),
                        this.Wa = f.a.pk(this.Wa, b));
                for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) {
                    if (a[b].Hh)
                        -1 === f.a.indexOf(this.Wa, a[b].D) && this.Wa.push(a[b].D);
                    else {
                        var g = this.eh(a[b]);
                        g && (this.Wa.push(g),
                            a[b].Hh = !0,
                            a[b].D = g);
                        a[b].h("complete", this.tm, this, !0);
                        a[b].h("renderComplete", this.tm, this)
                    }
                    a[b].Dn && a[b].get("visible") && !a[b].ty && (c = !0,
                    !1 === a[b].get("detectRetina") && (d = !1),
                        e = a[b].get("textIndex") || e)
                }
                a = f.a.indexOf(this.Wa, this.td);
                c ? (-1 === a && this.Wa.push(this.td),
                    this.td.ga = d && f.l.ga,
                    this.td.zu(this.get("mapStyle") || "normal"),
                    this.td.set("zIndex", e),
                    this.td.set("visible", !0),
                    this.O.ev = !0,
                    this.O.get("isHotspot") ? this.td.Baa() : this.td.KF()) : (this.td && (this.td.set("visible", !1),
                    this.O.ev = !1,
                    this.td.KF()),
                    this.O.ev = !1);
                this.O.isHotspotChanged();
                this.set("display", 0);
                this.Tv()
            },
            isHotspotChanged: function() {
                this.layersChanged()
            },
            controlsChanged: function() {
                var a = this.get("controls"), b, c;
                if (a.add && 0 < a.add.length)
                    for (; 0 < a.add.length; )
                        b = a.add.shift(),
                        (c = b.Go || b.addTo) && c.call(b, this.O, this.Ga.controls);
                else if (a.remove && a.remove.length)
                    for (; 0 < a.remove.length; )
                        b = a.remove.shift(),
                        (c = b.Hp || b.removeFrom) && c.call(b, this.O, this.Ga.controls)
            },
            RP: function() {
                if (!this.VF) {
                    var a = this;
                    this.VP = !1;
                    a.Hc || (a.Hc = new f.D.kc(new w.D.kc,a),
                        a.Hc.Re = 36,
                        a.Hc.Ef = 36,
                        a.Hc.set("zIndex", 120),
                        a.Wa.push(a.Hc),
                        a.Hc.Lu = !0);
                    for (var b = a.get("overlays"), c = [], d = 0; d < a.$b.length; d += 1)
                        -1 === f.a.indexOf(b, a.$b[d].Oc) && (a.$b[d].Oc instanceof w.C.Od || a.$b[d].Oc instanceof w.C.Wj ? a.$b[d].kf() : (a.Hc && a.$b[d]instanceof f.C.eb ? (a.Hc.Qe = f.a.UF(a.Hc.Qe, a.$b[d].K),
                            a.Hc.yU([a.$b[d].K])) : a.Hn && a.Hn.yU([a.$b[d].K]),
                            a.$b[d].K.aa ? (f.g.remove(a.$b[d].K.aa),
                                a.$b[d].K.aa = null) : a.$b[d].K.Ca && (f.g.remove(a.$b[d].K.Ca.qe),
                                f.g.remove(a.$b[d].K.Ca.Ib),
                                a.$b[d].K.Ca = null),
                        a.$b[d].Jj && a.$b[d].Jj.stop(),
                            a.$b[d].Oc.Hh = !1,
                            a.$b[d].Oc.vh.map = null,
                            a.$b[d].Oc.C = null,
                            a.$b[d].Oc = null,
                            a.$b[d].K.V7(),
                            a.$b[d].K = null,
                            a.$b[d].Rn(),
                            a.$b[d].vh = null,
                            a.$b[d].sj(),
                            a.$b[d].map = null),
                            c.push(a.$b[d]));
                    for (d = 0; d < c.length; d += 1)
                        a.$b = f.a.pk(a.$b, f.a.indexOf(a.$b, c[d]));
                    var e = []
                        , g = [];
                    f.a.tca(function(b) {
                        if (!b.Hh && b.Oe) {
                            var c = b.C || a.D6(b);
                            c && (a.$b.push(c),
                                c instanceof f.C.Od || c instanceof f.C.Wj ? c.HT(a) : c instanceof f.C.eb ? e.push(c.K) : g.push(c.K),
                                b.Hh = !0)
                        }
                    }, b);
                    e.length && a.Hc.Fo(e);
                    g.length && (a.Hn || (a.Hn = new f.D.kc(new w.D.kc,a),
                        a.Hn.set("zIndex", 110),
                        a.Wa.push(a.Hn)),
                        a.Hn.Fo(g));
                    a.set("display", 0)
                }
            },
            overlaysChanged: function() {
                this.$b = this.$b || [];
                this.$b.length && this.$b.length !== this.get("overlays").length ? this.RP() : this.VP || (f.a.cc(this.RP, this),
                    this.VP = !0)
            },
            contextmenusChanged: function() {
                var a = this.get("contextmenu");
                if (a) {
                    var b = this;
                    f.ib.load("overlay", function() {
                        b.hz = new f.C.Wj(a,b);
                        b.set("display", 0)
                    })
                }
            },
            infosChanged: function() {
                var a = this.get("infos");
                if (a) {
                    this.xk = this.xk || {};
                    var b, c = this;
                    f.ib.load("overlay", function() {
                        for (var d in a)
                            a.hasOwnProperty(d) && (b = a[d],
                                c.xk[d] = c.xk[d] || new f.C.Od(b,c))
                    })
                }
            },
            D6: function(a) {
                var b = null;
                if (a instanceof w.C.eb)
                    b = new f.C.eb(a,this);
                else if (a instanceof w.C.Wj)
                    b = new f.C.Wj(a,this);
                else if (a instanceof w.C.Od)
                    b = new f.C.Od(a,this);
                else {
                    var c = ["overlay"];
                    "d" === this.get("overlayRender") ? (c.push("dvector"),
                        f.l.Bk ? c.push("svg") : c.push("vml")) : c.push("cvector");
                    if (!this.hea && !f.ib.rv(c)) {
                        var d = this;
                        f.ib.hg(c, function() {
                            this.hea = !0;
                            d.overlaysChanged()
                        });
                        return
                    }
                    a instanceof w.C.Rb ? b = new f.C.Rb(a,this) : a instanceof w.C.Os ? b = new f.C.Os(a,this) : a instanceof w.C.Lb ? b = new f.C.Lb(a,this) : a instanceof w.C.lf ? b = new f.C.lf(a,this) : a instanceof w.C.Zn ? b = new f.C.Rb(a,this) : a instanceof w.C.co && (b = new f.C.Rb(a,this))
                }
                return b
            },
            Ifa: function() {
                function a() {}
                var b = new f.D.kc
                    , c = []
                    , d = new f.W(116.405467,39.907761);
                new f.style.Ge.Ue;
                for (var e = 0; 100 > e; e += 1)
                    for (var g = 0; 100 > g; g += 1) {
                        var h = new f.W(d.L + 0.02 * g,d.N + 0.02 * e)
                            , h = new f.mf({
                            name: "point" + (100 * e + g),
                            map: this,
                            Da: new f.ka.Ve(this.Ob(h))
                        });
                        c[100 * e + g] = h;
                        h.h("hover", a, h)
                    }
                b.Fo(c);
                this.Wa.push(b)
            },
            Ab: function() {},
            Hfa: function(a) {
                var b = new f.D.kc
                    , c = []
                    , c = (new f.UW({
                    map: this
                })).AA(a);
                b.Fo(c);
                this.Wa.push(b);
                this.set("display", 0)
            },
            eh: function(a) {
                a = a.eh(this);
                if (!a)
                    return null;
                if (a.length && "string" == typeof a[0]) {
                    var b = this;
                    f.ib.hg(a, function() {
                        b.layersChanged()
                    })
                } else
                    return a;
                return null
            },
            Pga: function() {
                return this.Ga
            },
            qia: function() {
                this.set("display", 0)
            },
            displayChanged: function(a) {
                this.PU(a)
            },
            PU: function(a) {
                if (a)
                    if (f.a.$f(this.HA),
                        f.l.dh) {
                        var b = this;
                        setTimeout(function() {
                            b.Xb()
                        }, 0)
                    } else
                        this.Xb();
                else
                    this.Js || (this.HA = f.a.cc(this.Xb, this),
                        this.Js = !0)
            },
            Xb: function() {
                if (!this.VF) {
                    this.r("render");
                    this.Js = !1;
                    var a = {};
                    if (this.Wa) {
                        for (var b = [], c = 0, d = this.Wa.length; c < d; c += 1)
                            b.push(this.Wa[c]),
                            this.Wa[c].Yh && b.push(this.Wa[c].Yh);
                        b.sort(function(a, b) {
                            var c = a.get("zIndex")
                                , d = b.get("zIndex");
                            return c > d ? 1 : c === d ? a.hC > b.hC ? 1 : -1 : -1
                        });
                        a.Wa = b;
                        a.size = this.get("size");
                        if (a.size.width && a.size.height) {
                            b = f.l.ga ? Math.min(window.devicePixelRatio || 1, 2) : 1;
                            a.u6 = 15E5 < a.size.width * a.size.height * b * b;
                            a.Y = f.l.Y;
                            a.U = this.O.Kz();
                            a.Q = this.O.view.get("resolution");
                            a.yn = this.get("mapStyle");
                            a.Ii = this.Ii;
                            a.Ec = this.yh;
                            a.ke = this.Eh;
                            a.Pe = this.li;
                            a.xJ = this.li && f.l.Y;
                            a.XV = f.l.Y && this.Eh;
                            a.jB = f.l.Y && this.yh;
                            this.jB = a.jB;
                            a.Ti = a.U.zoom > this.get("targetLevel");
                            a.eaa = !0;
                            a.nQ = this.nQ;
                            for (var b = !1, e, c = !1, d = 0; d < this.Wa.length; d += 1)
                                this.Wa[d].Ng && this.Wa[d].get("visible") && a.U.zoom <= this.Wa[d].get("zooms")[1] && (a.LI = !0),
                                this.Wa[d].Al().kd && (b = !0);
                            for (d = 0; d < this.Wa.length; d += 1)
                                this.Wa[d].qa.lQ && a.LI && (!this.Eh && this.Wa[d].qa.get("visible") && (e = this.Wa[d].qa.lQ(),
                                    e.iha = 1,
                                    e.zoom = a.U.zoom),
                                    c = !0);
                            c ? e && this.fc !== e && (this.fc = e) : this.fc = [];
                            a.fc = this.fc;
                            a.kd = b;
                            a.scale = Math.pow(2, a.U.zoom - a.U.vc);
                            this.Vu = a;
                            if (e = this.Fz())
                                e.Xb(a),
                                    this.Ii = this.vR = !1
                        }
                    }
                }
            },
            Fz: function() {
                if (!this.T || this.T.type !== this.O.view.type)
                    if (this.T = null,
                    "3D" == this.O.view.type) {
                        var a = this;
                        f.ib.load("Map3D", function() {
                            a.T || (a.T = new f.Ia.Mw(a),
                                a.set("display"))
                        })
                    } else
                        this.T = new f.R.canvas.Tb(this);
                return this.T
            },
            Z8: function() {
                var a = [], b = this.get("controls").Pc, c;
                for (c in b)
                    b[c].Br && b[c].Br() && a.push(b[c].Br());
                return a
            },
            destroyChanged: function() {
                this.VF = 1;
                this.P = {};
                this.td && (this.td.qa.H("complete", this.tm, this),
                    this.td.kf(),
                    this.Wa = f.a.pk(this.Wa, f.a.indexOf(this.Wa, this.td)));
                this.U4 && clearTimeout(this.U4);
                this.A4();
                this.B1();
                this.dE && this.dE();
                this.E5();
                this.Rn();
                this.O = this.O.map = null;
                this.J = this.J.oC = null;
                this.sd && (this.sd.stop(),
                    this.sd = null);
                this.je && (this.je.stop(),
                    this.je = null);
                this.yc && (this.yc.stop(),
                    this.yc = null)
            },
            E5: function() {
                var a = this.J;
                this.mZ();
                f.A.c7(a);
                f.g.Uv(a);
                this.ii = null;
                f.g.Fa(a, "amap-container");
                this.Ga = null
            },
            jogEnableChanged: function() {
                this.get("jogEnable") ? this.rp = !0 : this.rp = !1
            },
            drawChanged: function() {
                var a = this, b, c, d = this.get("draw");
                if (d) {
                    this.Dl || (this.Dl = []);
                    b = 0;
                    for (c = this.Dl.length; b < c; b += 1)
                        this.Dl[b].Fba();
                    f.ib.load("interaction", function() {
                        var b = new f.Kea({
                            type: d,
                            D: a.Hn
                        },a);
                        a.Dl.push(b);
                        a.loaded = !0
                    })
                } else if (this.Dl)
                    for (b = 0,
                             c = this.Dl.length; b < c; b += 1)
                        this.Dl[b].Fba(),
                            this.Dl[b].Xfa(),
                            this.H("click", this.Dl[b].aha, this)
            },
            Be: function(a, b) {
                return this.O.view.Be(a, b)
            },
            we: function(a, b) {
                return this.O.view.we(a, b)
            }
        });
        f.Tb.fb({
            B0: function() {
                this.Mt = !1;
                f.l.he && ("3D" === this.O.view.type ? this.EY() : this.CY());
                f.l.Y || this.zY()
            },
            A4: function() {
                f.l.he && ("3D" === this.O.view.type ? this.H1() : this.G1());
                f.l.Y || this.C1()
            },
            rotateEnableChanged: function() {
                this.NA = this.get("rotateEnable");
                f.l.he && this.oQ && "3D" !== this.O.view.type && (this.NA ? this.oQ() : this.maa());
                this.rotation = this.NA ? this.get("rotation") : 0;
                this.set("rotation", this.rotation);
                this.set("display")
            },
            zoomEnableChanged: function() {
                this.get("zoomEnable") ? (f.l.he && this.uF && "3D" !== this.O.view.type && this.uF(),
                f.l.Y || this.BY()) : (f.l.he && this.WH && this.WH(),
                f.l.Y || this.F1())
            },
            mousewheelChanged: function() {},
            JH: function(a) {
                a && this.M$(a.Co)
            },
            M$: function(a) {
                this.Mt = a
            },
            NJ: function() {
                this.Mt = !1
            },
            Qg: function(a, b, c) {
                var d, e = {};
                a || (a = window.event);
                var g = f.A.xi(a, this.Ga.pc);
                f.l.he && ("touchend" !== a.type ? this.P.yN = g : g = this.P.yN);
                e.ub = g;
                e.Zd = this.we(g);
                e.ze = this.Dd(e.Zd);
                c || (c = !1 !== this.Mt ? this.Mt ? [this.Mt] : null : this.A_(e.Zd)) && 0 < c.length && c[0].Dm && (d = c[0].Dm,
                    e.Co = c[0]);
                d || (d = this);
                e.Nc = d;
                e.Yea = a.altKey;
                e.ctrlKey = a.ctrlKey;
                e.button = void 0 === a.button ? 0 : a.button;
                !b && a.preventDefault && a.preventDefault();
                return e
            },
            BD: function(a) {
                return a && a !== this && a !== document
            },
            vE: function() {
                if (this.P.vl && this.P && this.P.Ne) {
                    var a = this.P.vl.ub.Sa(this.P.Ne);
                    a.x || a.y ? (this.P.li = !0,
                    this.P.$k || (this.P.wl.r("dragstart", this.P.ul),
                        this.P.$k = !0),
                        this.P.wl.r("dragging", this.P.vl),
                        this.P.Ne = this.P.vl.ub) : this.P.li = !1
                }
            },
            Tca: function(a) {
                for (var b = [], c = 0; c < a.length; c += 1)
                    a[c] && (b = b.concat(a[c]));
                return b
            },
            Dp: function(a, b, c) {
                return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
            },
            A_: function(a) {
                var b = this.Fz();
                if (!b)
                    return null;
                var c, d = this;
                this.Wa.sort(function(a, b) {
                    return a.get("zIndex") > b.get("zIndex") ? -1 : 1
                });
                b.ep(a, this.Wa, function(a) {
                    c = a;
                    c = d.Tca(c)
                }, function() {
                    c = []
                });
                return c
            }
        });
        f.Tb.fb({
            I0: function() {
                this.h("moveend", this.MT, this);
                f.l.dh && (f.l.rB || f.l.Ry) && this.h("zoomend", this.XJ, this);
                this.h("movestart", this.NT, this);
                this.h("zoomstart", this.ST, this);
                this.h("zoomend", this.RT, this);
                this.uC();
                this.ko = 0;
                this.ux = {};
                "undefined" === typeof window.requestAnimationFrame && (this.ko = 2)
            },
            ST: function() {
                2 !== this.ko && 12 === this.get("zoom") && (this.ko = 1,
                    f.a.Uu.start(this.ux));
                this.Eh = !0
            },
            RT: function() {
                1 === this.ko && 13 !== this.get("zoom") && (this.ko = 0,
                    f.a.Uu.cancel(this.ux));
                this.Eh = !1;
                this.set("display")
            },
            B1: function() {
                this.H("moveend", this.MT, this);
                f.l.dh && (f.l.rB || f.l.Ry) && this.H("zoomend", this.XJ, this);
                this.H("movestart", this.NT, this);
                this.H("zoomstart", this.ST, this);
                this.H("zoomend", this.RT, this);
                this.D1()
            },
            MT: function(a) {
                this.li = !1;
                this.QU();
                !a.TS && this.get("limitBounds") ? (a = this.P6()) && !a.yb(this.get("center")) ? this.VA(this.get("zoom"), a, !1, !0) : this.da("moveend") : this.da("moveend");
                this.set("display")
            },
            NT: function() {
                this.li = !0
            },
            dragEnableChanged: function() {
                (this.Mu = this.get("dragEnable")) ? this.tC() : this.cE()
            },
            da: function(a, b) {
                var c;
                b && (c = b.DT ? {
                    type: a,
                    newsize: b.DT,
                    oldsize: b.naa
                } : {
                    type: a,
                    pixel: b.ub,
                    target: this.O,
                    lnglat: b.ze
                });
                this.O.r(a, c)
            },
            uC: function() {
                this.h("click", this.YN);
                this.h("dblclick", this.bO);
                f.l.he && this.pL();
                f.l.Y || this.AY()
            },
            D1: function() {
                this.H("click", this.YN);
                this.H("dblclick", this.bO);
                f.l.he && this.PN();
                f.l.Y || this.E1()
            },
            ay: function(a, b) {
                var c = this.get("targetLevel") || this.get("zoom")
                    , c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1
                    , c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
                c === this.get("zoom") || this.je && this.je.Kp && c === this.je.end || this.Ns(c, !1, a)
            },
            YN: function(a) {
                this.da("click", a)
            },
            bO: function(a) {
                this.get("doubleClickZoom") && this.get("zoomEnable") && this.ay(a.Zd, 1);
                this.da("dblclick", a)
            },
            vfa: function(a) {
                this.ay(a.Xia, a.Yia);
                this.da("touchend", a)
            },
            tC: function() {
                this.Mu && ("3D" === this.O.view.type ? (this.h("dragstart", this.hO),
                    this.h("dragging", this.dO),
                    this.h("dragend", this.fO)) : (this.h("dragstart", this.gO),
                    this.h("dragging", this.cO),
                    this.h("dragend", this.eO)))
            },
            cE: function() {
                this.Mu || ("3D" === this.O.view.type ? (this.H("dragstart", this.hO),
                    this.H("dragging", this.dO),
                    this.H("dragend", this.fO)) : (this.H("dragstart", this.gO),
                    this.H("dragging", this.cO),
                    this.H("dragend", this.eO)))
            },
            gO: function(a) {
                this.JH(a);
                this.yh = !0;
                this.P.sr = a.ub.x;
                this.P.Nu = a.ub.y;
                this.sd && (this.sd.stop(),
                    this.an(!0));
                this.da("dragstart");
                this.da("movestart");
                this.r("movestart", a);
                this.$ca()
            },
            cO: function(a) {
                var b = this.P
                    , c = a.ub.x - b.sr
                    , d = a.ub.y - b.Nu;
                if (d || c) {
                    this.P.li = !0;
                    b.sr = a.ub.x;
                    b.Nu = a.ub.y;
                    a = c;
                    var b = d
                        , e = this.NA ? this.rotation : 0;
                    e && (e *= Math.PI / 180,
                        a = c * Math.cos(e) + Math.sin(e) * d,
                        b = -Math.sin(e) * c + Math.cos(e) * d);
                    a = this.get("centerCoords").Sa((new f.I(a,b)).bd(this.Q));
                    (b = this.IQ(a)) && (d = Math.round(this.Be(b).Sa(this.Be(a)).y));
                    this.Bn(this.Ga.Nm, c, d);
                    a.x = (a.x + f.a.Ya) % f.a.Ya;
                    this.set("centerCoords", a, !0);
                    this.set("center", this.Dd(a), !0);
                    this.rp && (this.Ye ? (a = new Date,
                        this.oo = 100 < a - this.Ye ? new f.I(0,0) : new f.I(c,d),
                        this.Ye = a) : this.Ye = new Date);
                    this.da("dragging");
                    this.da("mapmove")
                } else
                    this.P.li = !1,
                        this.oo = null
            },
            Bn: function(a, b, c) {
                if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
                    var d = parseFloat(a.style.top) || 0
                        , e = parseFloat(a.style.left) || 0
                        , g = "";
                    this.rotation && (g = f.g.Pn[f.g.He] + ":rotate(" + this.rotation + "deg);overflow:visible;");
                    a.style.cssText = "position:absolute;top:" + (d + c) + "px;left:" + (e + b) + "px;" + g
                }
            },
            IQ: function(a) {
                var b = this.O.view.WK()
                    , c = this.fJ.height * this.Q / 2;
                return a.y < b.wd + c ? (a.y = b.wd + c,
                    a) : a.y > b.vd - c ? (a.y = b.vd - c,
                    a) : null
            },
            eO: function() {
                this.NJ();
                100 < new Date - this.Ye && (this.oo = null);
                this.P.Ne = null;
                this.yh = !1;
                this.da("dragend");
                if (this.rp && this.oo)
                    if (this.P.li) {
                        var a = this.oo
                            , b = new f.I(0,0);
                        this.sd = new f.sh(a,b,function(a, b, e) {
                                return 600 <= e ? b : a.bd(1 - Math.pow(e / 600, 2)).floor()
                            }
                            ,1);
                        this.sd.Ol = function(a) {
                            if (2 > Math.abs(a.x) && 2 > Math.abs(a.y))
                                this.sd.stop(),
                                    this.r("moveend"),
                                    this.an(),
                                    this.oo = this.Ye = null;
                            else {
                                var b = a.x
                                    , e = a.y
                                    , g = this.NA ? this.rotation : 0;
                                g && (g *= Math.PI / 180,
                                    b = a.x * Math.cos(g) + Math.sin(g) * a.y,
                                    e = -Math.sin(g) * a.x + Math.cos(g) * a.y);
                                b = this.get("centerCoords").Sa((new f.I(b,e)).bd(this.Q));
                                e = this.IQ(b);
                                g = a.y;
                                e && (g = Math.round(this.Be(e).Sa(this.Be(b)).y));
                                this.Bn(this.Ga.Nm, a.x, g);
                                b.x = (b.x + f.a.Ya) % f.a.Ya;
                                this.set("centerCoords", b, !0);
                                this.set("center", this.Dd(b), !0);
                                this.da("mapmove")
                            }
                        }
                        ;
                        this.sd.Pj(this)
                    } else
                        this.r("moveend"),
                            this.an(!0),
                            this.oo = this.Ye = null;
                else
                    this.r("moveend"),
                        this.an(),
                        this.oo = this.Ye = null
            },
            $ca: function() {
                if (!this.P.refresh) {
                    var a = this;
                    this.P.refresh = setInterval(function() {
                        a.set("display", 0)
                    }, f.l.Y ? 400 : 100)
                }
            },
            XJ: function() {
                if (f.l.dh && (f.l.rB || f.l.Ry)) {
                    for (var a = this.Ga.D.childNodes, b = 0; b < a.length; b += 1) {
                        var c = a[b];
                        c instanceof HTMLCanvasElement && (c.width = 0);
                        "amap-e" === c.className && (c.style.height = "0")
                    }
                    for (b = 0; b < this.Wa.length; b += 1)
                        c = this.Wa[b],
                        "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap && (c.Do && (c.Do.width = 0),
                        c.Zq && (c.Zq.width = 0))
                }
            },
            an: function(a) {
                this.P.refresh && (clearInterval(this.P.refresh),
                    this.P.refresh = null);
                a || (this.XJ(),
                    this.set("display", 0))
            },
            QU: function(a) {
                this.set("refresh", a)
            }
        });
        f.Tb.fb({
            setZoomSlow: function(a) {
                this.VA(a, null, !this.get("animateEnable"))
            },
            setPanTo: function(a) {
                this.VA(null, a, !this.get("animateEnable"))
            },
            zoomAndCenterChanged: function(a) {
                var b = a[0];
                b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
                b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
                this.VA(b, a[1], a[2] || !this.get("animateEnable"))
            },
            zoomChanged: function() {
                this.Q = Math.pow(2, 20 - this.get("zoom"));
                this.r("closeOverlays");
                this.set("display", 0)
            },
            rotationChanged: function(a) {
                this.rotation = this.get("rotateEnable") ? this.get("rotation") : 0;
                this.O.r("rotate", {
                    rotation: this.rotation || 0
                });
                !0 !== a && this.set("display", 0)
            },
            pitchChanged: function() {
                this.pitch = this.get("pitchEnable") ? this.get("pitch") : 0;
                this.O.r("pitch", {
                    pitch: this.pitch || 0
                });
                this.set("display", 0)
            },
            centerCoordsChanged: function() {
                this.r("closeOverlays");
                this.set("display", 0)
            }
        });
        f.Tb.HB = f.Z.extend({
            B: function(a) {
                this.od = a;
                this.Bo = ["zooms", "visible", "opacity", "zIndex"];
                this.Lt = !1;
                this.pZ = this.IY();
                this.od.h("zoomend", this.KE, this);
                this.od.h("moveend", this.KE, this);
                this.KE()
            },
            IY: function() {
                for (var a = [[69, 2], [72, 14], [89, 4], [96, 4], [193, 2], [196, 14], [213, 4], [220, 4], [317, 2], [320, 14], [337, 4], [344, 4], [441, 1], [444, 14], [461, 4], [468, 4], [565, 1], [568, 14], [585, 4], [592, 4], [689, 1], [692, 14], [709, 4], [716, 4], [813, 1], [816, 14], [833, 4], [840, 4], [940, 14], [957, 4], [964, 4], [1064, 15], [1081, 4], [1088, 4], [1188, 16], [1205, 4], [1212, 4], [1312, 21], [1336, 4], [1436, 21], [1460, 4], [1560, 21], [1584, 4], [1684, 21], [1708, 4], [1808, 21], [1832, 4], [1932, 21], [1956, 4], [2056, 21], [2080, 4], [2180, 21], [2204, 4], [2304, 21], [2328, 4], [2428, 21], [2452, 4], [2552, 22], [2576, 4], [2676, 22], [2700, 4], [2800, 22], [2824, 4], [2924, 22], [2948, 4], [3048, 22], [3072, 4], [3172, 22], [3196, 4], [3295, 23], [3320, 4], [3418, 24], [3444, 4], [3541, 26], [3568, 4], [3664, 27], [3692, 4], [3788, 27], [3816, 4], [3912, 32], [4036, 32], [4160, 32], [4285, 31], [4394, 4], [4409, 31], [4517, 5], [4531, 33], [4640, 9], [4655, 33], [4764, 12], [4777, 35], [4887, 50], [5009, 1], [5011, 50], [5133, 53], [5257, 53], [5381, 60], [5506, 59], [5631, 58], [5742, 4], [5755, 58], [5859, 2], [5865, 6], [5879, 58], [5977, 8], [5987, 10], [5999, 2], [6002, 59], [6100, 78], [6222, 80], [6344, 82], [6464, 1], [6466, 84], [6586, 88], [6708, 90], [6831, 91], [6955, 91], [7078, 92], [7202, 92], [7327, 91], [7451, 91], [7575, 91], [7698, 92], [7820, 94], [7942, 96], [8065, 97], [8187, 99], [8310, 100], [8435, 99], [8558, 100], [8681, 101], [8805, 101], [8929, 102], [9053, 104], [9179, 3], [9183, 100], [9307, 104], [9435, 101], [9561, 48], [9613, 49], [9663, 1], [9686, 44], [9745, 44], [9810, 33], [9871, 42], [9934, 32], [9997, 40], [10058, 32], [10120, 41], [10181, 30], [10244, 42], [10306, 27], [10369, 3], [10374, 39], [10434, 18], [10501, 37], [10558, 19], [10626, 36], [10683, 18], [10752, 35], [10807, 17], [10880, 32], [10937, 10], [10997, 39], [11061, 9], [11121, 31], [11155, 5], [11186, 5], [11245, 31], [11311, 3], [11370, 29], [11494, 26], [11624, 18], [11748, 17], [11873, 16], [11997, 15], [12123, 13], [12246, 13], [12370, 12], [12498, 1], [12500, 2]], b = [], c = 0, d = a.length; c < d; c++)
                    for (var e = a[c][0], g = e + a[c][1]; e < g; e++)
                        b[e] = 1;
                return b
            },
            h1: function(a, b) {
                var c = parseInt((a - 73) / 0.5)
                    , d = parseInt((b - 3.5) / 0.5);
                return 0 > d || 101 <= d || 0 > c || 124 <= c ? !1 : 1 === this.pZ[124 * d + c]
            },
            pY: function() {
                var a = this.od.O.getBounds();
                if (a) {
                    for (var a = [a.Hg(), a.$u(), a.Yu(), a.yi(), a.hn()], b = 0, c = a.length; b < c; b++)
                        if (this.h1(a[b].Ez(), a[b].Dz()))
                            return !0;
                    return !1
                }
            },
            KE: function() {
                if (!this.iP) {
                    var a = this;
                    a.iP = setTimeout(function() {
                        a.iP = null;
                        a.QZ()
                    }, 0)
                }
            },
            QZ: function() {
                var a = this.G_();
                0 < a.length && 10 <= this.od.get("zoom") && !1 === this.pY() ? this.m5(a) : this.m0(a)
            },
            rZ: function(a) {
                if (a.ty)
                    for (var b = 0, c = this.Bo.length; b < c; b++)
                        a.H(this.Bo[b], a.ty.WD)
            },
            j5: function(a, b) {
                this.rZ(a);
                if (a.ty = b)
                    for (var c = 0, d = this.Bo.length; c < d; c++)
                        a.h(this.Bo[c], b.WD)
            },
            tP: function(a, b) {
                b && (b.s1 = a);
                for (var c = 0, d = a.length; c < d; c++)
                    this.j5(a[c], b)
            },
            G_: function() {
                for (var a = this.od.Wa, b = [], c = 0, d = a.length; c < d; c++)
                    a[c] !== this.sg && a[c].qa instanceof w.D.nb && a[c].qa.tH() && b.push(a[c]);
                return b
            },
            i5: function(a) {
                var b = this;
                a.WD = function() {
                    a.LN || (a.LN = setTimeout(function() {
                        a.LN = null;
                        b.t1(a)
                    }, 0))
                }
            },
            yZ: function(a, b) {
                for (var c = 0, d = this.Bo.length; c < d; c++)
                    a.set(this.Bo[c], b.get(this.Bo[c]))
            },
            t1: function(a) {
                var b = a.s1;
                if (b && b.length)
                    for (var c = 0, d = b.length; c < d; c++) {
                        if (!(b[c]instanceof f.D.uh)) {
                            this.yZ(a, b[c]);
                            break
                        }
                    }
                else
                    console.warn("No moni layers")
            },
            m5: function(a) {
                if (!this.Lt) {
                    this.Lt = !0;
                    this.sg || (this.sg = new f.D.nb(new w.D.nb.HB,this.od),
                        this.sg.Dn = !1,
                        this.sg.It = !0,
                        this.i5(this.sg));
                    var b = this.od.Wa;
                    0 > b.indexOf(this.sg) && b.push(this.sg);
                    this.tP(a, this.sg);
                    this.sg.WD();
                    this.l5();
                    this.od.layersChanged();
                    this.od.O.r("googleTileVisibleChanged", {
                        display: !0
                    })
                }
            },
            zD: function() {
                return this.Lt
            },
            m0: function(a) {
                this.Lt && (this.Lt = !1,
                    this.tP(a, null),
                this.sg && (this.sg.set("visible", !1),
                    a = this.od.Wa,
                    f.a.pk(a, a.indexOf(this.sg)),
                    this.sg.kf(),
                    this.sg.qa.H("complete", this.od.tm, this.od),
                    this.sg = null),
                    this.l0(),
                    this.od.layersChanged(),
                    this.od.O.r("googleTileVisibleChanged", {
                        display: !1
                    }))
            },
            xM: function(a, b, c) {
                if (!a)
                    return null;
                a = f.g.getElementsByClassName(b, c, a);
                return a.length ? a[0] : null
            },
            F_: function(a) {
                var b = this.od.Ga;
                if (b && b.ti) {
                    var c = this.xM(b.ti, "google-copyright", "span");
                    !c && a && (c = f.g.create("span", b.ti, "google-copyright"),
                        c.innerHTML = " - Data &copy; Google");
                    return c
                }
            },
            HP: function(a) {
                var b = this.F_(a);
                b && (b.style.display = a ? "" : "none");
                this.od.Ga && (b = this.xM(this.od.Ga.ti, "amap-mcode", "span")) && (b.style.display = a ? "none" : "")
            },
            l5: function() {
                this.HP(!0)
            },
            l0: function() {
                this.HP(!1)
            }
        });
        f.Tb.fb({
            E0: function() {
                this.get("3rdpartyDataEnable") && (this.SM = new f.Tb.HB(this))
            },
            zD: function() {
                return this.SM && this.SM.zD()
            }
        });
        f.OK = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a, b) {
                this.type = "2D";
                this.map = a;
                this.If(b, !0);
                this.centerChanged();
                a.Sd("zoom center centerCoords scale rotation pitch resolution".split(" "), this);
                this.Sd(["crs", "refresh"], a)
            },
            getResolution: function(a) {
                return this.map.rl.SG(a || this.get("zoom"))
            },
            WK: function() {
                this.jC || this.o7();
                return this.jC
            },
            o7: function() {
                var a;
                if (this.get("center")instanceof f.W) {
                    a = new f.Nd(-180,-85,180,85);
                    var b = this.map.Ob(a.yi());
                    a = this.map.Ob(a.hn());
                    this.jC = {
                        fe: b.x,
                        wd: b.y,
                        Jd: a.x,
                        vd: a.y
                    }
                } else
                    a = this.map.get("limitBounds"),
                        this.jC = {
                            fe: a[0],
                            wd: a[1],
                            Jd: a[2],
                            vd: a[3]
                        }
            },
            Kz: function() {
                var a = this.map
                    , b = this.get("zoom");
                return {
                    zoom: b,
                    zg: this.get("center"),
                    pa: this.zj(),
                    Ua: this.get("centerCoords"),
                    rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
                    $d: a.get("crs"),
                    Q: Math.pow(2, 20 - b),
                    vc: Math.round(b),
                    Xd: Math.pow(2, 20 - Math.round(this.get("zoom")))
                }
            },
            centerChanged: function() {
                this.set("centerCoords", this.map.Ob(this.get("center")), !0)
            },
            centerCoordsChanged: function() {
                var a = this.map
                    , b = this.WK()
                    , c = this.get("centerCoords")
                    , d = a.getSize()
                    , e = this.get("zoom", null, !0)
                    , a = this.get("center", null, !0)
                    , d = d.height * Math.pow(2, 20 - e) / 2;
                a instanceof f.W ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Jd && (c.x = b.Jd);
                c.y < b.wd + d ? c.y = b.wd + d : c.y > b.vd - d && (c.y = b.vd - d);
                this.set("center", this.map.Dd(c), !0)
            }
        });
        f.bC = f.OK.extend({
            zj: function() {
                var a = this.map.get("size")
                    , b = this.get("centerCoords")
                    , c = (this.map.get("rotateEnable") && parseInt(this.get("rotation"))) % 360 || 0
                    , d = this.get("zoom", null, !0)
                    , e = Math.pow(2, 20 - d)
                    , c = Math.PI * c / 180
                    , a = new f.I((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2,(Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2)
                    , e = new f.te(b.Sa(a.bd(e)),b.add(a.bd(e)))
                    , c = this.map.get("targetLevel");
                if (c > d - 1) {
                    var g = Math.pow(2, 20 - c);
                    e.CB = new f.te(b.Sa(a.bd(g)),b.add(a.bd(g)))
                }
                e.pJ = c || d;
                e.Gb = a;
                return e
            },
            Gc: function() {
                var a = this.zj()
                    , b = a.tc.x
                    , c = a.qb.y
                    , a = new f.I(a.qb.x,a.tc.y)
                    , b = new f.I(b,c);
                return new f.Nd(this.map.Dd(a),this.map.Dd(b))
            },
            zoomChanged: function() {},
            Be: function(a, b) {
                this.map.get("size");
                var c = a.Db()
                    , d = this.get("centerCoords")
                    , e = c.Sa(d);
                e.x < -f.a.Ya / 2 ? e.x += f.a.Ya : e.x > f.a.Ya / 2 && (e.x -= f.a.Ya);
                var c = this.map.get("size").As().ec(2)
                    , g = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180
                    , d = e.x * Math.cos(g) - Math.sin(g) * e.y
                    , e = Math.sin(g) * e.x + Math.cos(g) * e.y;
                return c.add((new f.I(d,e)).bd(Math.pow(2, (b || this.get("zoom")) - 20)))
            },
            we: function(a, b) {
                var c = this.map.get("size").As().ec(2)
                    , d = a.Sa(c)
                    , e = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180
                    , c = d.x * Math.cos(e) + Math.sin(e) * d.y
                    , d = -Math.sin(e) * d.x + Math.cos(e) * d.y
                    , c = this.get("centerCoords").add((new f.I(c,d)).bd(Math.pow(2, 20 - (b || this.get("zoom")))));
                c.x = (c.x + 268435456) % 268435456;
                return c
            }
        });
        f.NX = f.OK.extend({
            B: function(a, b) {
                this.Hk = new f.nf;
                this.Pg = new f.nf([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
                arguments.callee.oa.apply(this, arguments);
                this.scale = 1;
                this.type = "3D";
                this.Ot = !0;
                this.MH = f.a.bind(this.MH, this)
            },
            refreshChanged: function() {
                this.Yp()
            },
            zoomChanged: function() {
                this.Yp()
            },
            centerChanged: function() {
                arguments.callee.oa.apply(this, arguments);
                this.Yp()
            },
            centerCoordsChanged: function() {
                arguments.callee.oa.apply(this, arguments);
                this.Yp()
            },
            rotationChanged: function() {
                this.Yp()
            },
            pitchChanged: function(a) {
                this.vh.pitch = Math.min(this.map.get("maxPitch"), Math.max(a, 0));
                this.Yp()
            },
            Yp: function() {
                this.aea() || (this.Zda(),
                    this.W7())
            },
            W7: function() {
                f.a.Ai();
                this.Ot = !1;
                this.TD && clearTimeout(this.TD);
                this.TD = setTimeout(this.MH, 150)
            },
            MH: function() {
                this.TD = null;
                this.Ot = !0
            },
            jha: function() {
                return this.Ot
            },
            Zda: function() {
                var a = this.get("centerCoords")
                    , b = this.get("pitch")
                    , c = this.get("rotation");
                this.map.get("rotateEnable") || (c = 0);
                this.map.get("pitchEnable") || (b = 0);
                a = (new f.nf).oV(-a.x + f.a.Yc.x, -a.y + f.a.Yc.y, 0);
                b = (new f.nf).$I(180 - b, 1, 0, 0);
                c = (new f.nf).$I(c, 0, 0, 1);
                this.M8 = a.ov();
                this.Pg = (new f.nf).oV(0, 0, -this.kl).multiply(b.multiply(c.multiply(a)));
                this.Pg.Fj = this.Pg.ov()
            },
            aea: function(a) {
                a = a || this.get("zoom");
                var b = this.map.get("size")
                    , c = b.width
                    , b = b.height;
                if (!c || !b)
                    return !0;
                this.Qy = c /= b;
                b = b / 2 * Math.pow(2, 20 - a);
                a = (51 - 2 * a) * Math.PI / 180;
                var d = b / Math.tan(a / 2);
                512 > d && (d = 512,
                    a = 2 * Math.atan(b / d));
                this.kl = d;
                this.Gv = this.kl / 8;
                this.tG = 48 * this.kl;
                this.K7 = (this.kl - this.Gv) / (this.tG - this.Gv);
                this.Hk.Hca(a, c, this.Gv, this.tG);
                this.Hk.Fj = this.Hk.ov()
            },
            Kz: function() {
                var a = this.map
                    , b = this.get("zoom");
                a.map.Op && this.Yp();
                return {
                    zoom: b,
                    Qy: this.Qy,
                    top: this.top,
                    zg: this.get("center"),
                    pa: this.zj(),
                    Ua: this.get("centerCoords"),
                    rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
                    pitch: a.get("rotateEnable") && this.get("pitch") || 0,
                    zja: this.get("yaw"),
                    $d: a.get("crs"),
                    Q: Math.pow(2, 20 - b),
                    vc: Math.round(b),
                    Xd: Math.pow(2, 20 - Math.round(this.get("zoom"))),
                    Hk: this.Hk,
                    Pg: this.Pg
                }
            },
            zj: function() {
                var a = this.map.get("size"), b = a.width, a = a.height, c = this.we(new f.I(0,0), !0), d;
                d = 0;
                c = this.we(new f.I(0,d), !0);
                if (55 < this.vh.pitch || !c)
                    for (; !c; )
                        d += b / 64,
                            c = this.we(new f.I(0,d), !0);
                this.top = d / a;
                d = this.we(new f.I(b,d), !0);
                var e = 0
                    , g = this.vh.zoom;
                50 <= this.vh.pitch && 18 <= g && (e = 19.5 < g ? 768 : 18.5 < g ? 512 : 256);
                g = this.we(new f.I(b,a + e), !0);
                e = this.we(new f.I(0,a + e), !0);
                c = [c.Pi(), d.Pi(), g.Pi(), e.Pi(), c.Pi()];
                c = new f.dK(c);
                c.CF = this.we(new f.I(b / 2,a + 256), !0);
                g = this.get("zoom", null, !0);
                b = this.map.get("targetLevel");
                c.pJ = b || g;
                return c
            },
            Gc: function() {
                for (var a = this.zj(), b = [], c = 0; c < a.path.length; c += 1) {
                    var d = this.map.Dd(new f.I(a.path[c][0],a.path[c][1]));
                    b.push(d)
                }
                return new f.dK(b)
            },
            Be: function(a) {
                a = this.zT([a]);
                a = a[0];
                return new f.I(a.x,a.y)
            },
            X8: function(a) {
                var b = this.map.get("size");
                a = new f.km([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
                a.multiply(this.Gv);
                return this.Hk.Fj.Mj(a)
            },
            we: function(a, b) {
                var c = this.map.get("size")
                    , d = a.x / c.width * 2 - 1
                    , e = 1 - a.y / c.height * 2
                    , c = new f.km([d, e, -1, 1]);
                c.multiply(this.Gv);
                c = this.Hk.Fj.Mj(c);
                d = new f.km([d, e, 1, 1]);
                d.multiply(this.tG);
                d = this.Hk.Fj.Mj(d);
                e = this.Pg.Fj;
                c = e.Mj(c).elements;
                d = e.Mj(d).elements;
                e = c[2] / (c[2] - d[2]);
                return 0 > d[2] || 0 > e || b && e > 2.5 * this.K7 ? null : (new f.I(c[0] - e * (c[0] - d[0]),c[1] - e * (c[1] - d[1]))).add(f.a.Yc)
            },
            zT: function(a) {
                for (var b = this.get("center"), c = this.map, d = f.a.Yc.x, e = f.a.Yc.y, g = this.map.get("size"), h = [], k = new f.km([0, 0, 0, 1]), l = k.elements, m = new f.I(0,0), n = 0, p = a.length; n < p; n++) {
                    m.x = a[n].x;
                    m.y = a[n].y;
                    var q = c.Dd(m);
                    -180 > b.L - q.L ? m.x -= 268435456 : 180 < b.L - q.L && (m.x += 268435456);
                    l[0] = m.x - d;
                    l[1] = m.y - e;
                    l[2] = 0;
                    l[3] = 1;
                    q = this.Hk.Mj(this.Pg.Mj(k));
                    q.multiply(1 / q.elements[3]);
                    h.push({
                        x: (q.elements[0] + 1) / 2 * g.width,
                        y: (-q.elements[1] + 1) / 2 * g.height,
                        z: q.elements[2]
                    })
                }
                return h
            }
        });
        f.a.Yc = new f.I(215440491,106744817);
        f.Tb.fb({
            FQ: function(a, b, c) {
                var d = this;
                d.yB ? (clearTimeout(d.yB),
                    d.yB = null) : (d.da("zoomstart", {
                    zoom: a
                }),
                    d.r("zoomstart"));
                d.yB = setTimeout(function() {
                    d.yB = null;
                    d.da("zoomend", {
                        zoom: a
                    });
                    d.da("zoomchange", {
                        zoom: a
                    });
                    d.r("zoomend")
                }, 150);
                d.Ns(a, !0, b, c)
            },
            Ns: function(a, b, c, d) {
                function e(b) {
                    var c = this.we(k);
                    this.set("zoom", b);
                    var d = this.we(k)
                        , c = d && d ? d.Sa(c) : new f.I(0,0);
                    this.set("centerCoords", this.get("centerCoords").Sa(c));
                    c.x && c.y && this.da("mapmove");
                    b === a && Math.floor(a) === a && (this.set("targetLevel", null),
                    g && (this.da("zoomchange"),
                        this.da("zoomend")),
                    h && this.r("moveend"),
                        this.r("zoomend"),
                        this.je = null)
                }
                "3D" !== this.O.view.type && (f.l.Y || f.l.Id) && (b = !0);
                a = a || this.get("zoom");
                a = Math.min(Math.max(a, this.get("zooms")[0]), this.get("zooms")[1]);
                var g = a !== this.get("zoom")
                    , h = !!c;
                this.sd && (this.sd.stop(),
                    this.sd = null);
                c = c || this.get("centerCoords");
                var k = this.Be(c), l;
                this.yc && this.yc.Kp && (this.yc.stop(),
                this.yc.dH && (d = !0),
                this.yc.dv && (l = !0),
                    this.yc = null,
                    this.set("targetLevel", null));
                this.je && this.je.Kp && (this.je.stop(),
                    d = !0,
                this.je.dv && (l = !0),
                    this.je = null,
                    this.set("targetLevel", null));
                g && !d && this.da("zoomstart");
                h && !l && this.da("movestart");
                this.r("zoomstart");
                b ? e.call(this, a) : (this.je = new f.sh(this.get("zoom"),a,null,0.02),
                    this.je.dH = g,
                    this.je.dv = h,
                    this.je.transition = function(a, b, c) {
                        return c >= f.w.Oy ? b : (b - a) * (1 - Math.pow(1 - c / f.w.Oy, 4)) + a
                    }
                    ,
                    this.je.Ol = e,
                    this.je.Pj(this),
                    this.set("targetLevel", a))
            },
            VA: function(a, b, c, d) {
                var e = null;
                a || (a = this.yc ? this.yc.gda : this.get("targetLevel") || this.get("zoom"));
                var e = b ? this.Ob(b) : this.yc ? this.yc.KV : this.get("centerCoords")
                    , g = a !== this.get("zoom")
                    , h = !e.yb(this.get("centerCoords"))
                    , k = b = !1;
                this.je && this.je.Kp && (this.je.stop(),
                    b = !0,
                this.je.dv && (k = !0),
                    this.je = null,
                    this.set("targetLevel", null));
                this.yc && this.yc.Kp && (this.yc.stop(),
                this.yc.dH && (b = !0),
                this.yc.dv && (k = !0),
                    this.yc = null,
                    this.set("targetLevel", null));
                this.sd && (this.sd.stop(),
                    this.sd = null);
                if (g || h) {
                    if (!this.O.view.zj().contains(e) || g && "3D" !== this.O.view.type && (f.l.Y || f.l.Id))
                        c = !0;
                    if (c)
                        g && (b || (this.r("zoomstart"),
                            this.da("zoomstart")),
                            this.set("zoom", a),
                            this.da("zoomchange"),
                            this.da("zoomend"),
                            this.r("zoomend")),
                        h && (k || d || (this.da("movestart"),
                            this.r("movestart")),
                            this.set("centerCoords", e),
                            this.da("mapmove"),
                            this.r("moveend", {
                                TS: d
                            })),
                            this.set("targetLevel", null);
                    else {
                        this.set("targetLevel", a);
                        var l = a - this.get("zoom")
                            , m = e.Sa(this.get("centerCoords"));
                        this.yc = new f.sh(1,0,null,0.001);
                        this.yc.dH = g;
                        this.yc.dv = h;
                        this.yc.KV = e;
                        this.yc.gda = a;
                        this.yc.transition = function(a, b, c) {
                            return Math.pow(1 - Math.min(f.w.Oy, c) / f.w.Oy, 2)
                        }
                        ;
                        this.yc.Ol = function(b) {
                            0.02 > b ? (this.yc && (this.yc.stop(),
                                this.yc = null),
                            g && (this.set("zoom", a),
                                this.da("zoomchange"),
                                this.da("zoomend"),
                                g = !1,
                                this.r("zoomend")),
                            h && (this.set("centerCoords", e),
                                this.r("mapmove"),
                                this.r("moveend", {
                                    TS: d
                                })),
                                this.set("targetLevel", null)) : (g && this.set("zoom", a - l * b),
                            h && (b = e.Sa(m.bd(b)),
                                this.set("centerCoords", b),
                                this.da("mapmove")));
                            this.set("display", 1)
                        }
                        ;
                        this.yc.Pj(this);
                        g && !b && (this.r("zoomstart"),
                            this.da("zoomstart"));
                        !h || k || d || (this.r("movestart"),
                            this.da("movestart"))
                    }
                }
            }
        });
        f.D = {};
        f.D.hc = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a, b) {
                this.qa = a;
                this.Xc = [3, 18];
                this.hC = f.a.Fb(this);
                a && this.Sd(["opacity", "visible", "zIndex", "zooms"], a);
                this.j = b;
                this.X("display", b)
            },
            kf: function() {
                this.Ng && this.KF();
                if (f.Pa && f.Pa.Tn && f.Pa.Tn.length) {
                    var a = f.a.indexOf(f.Pa.Tn, this);
                    -1 !== a && (f.Pa.Tn = f.a.pk(f.Pa.Tn, a))
                }
                if (a = this.ob) {
                    if (a.length)
                        for (var b = 0; b < a.length; b += 1)
                            a[b].parentNode && a[b].parentNode.removeChild(a[b]);
                    else
                        a.parentNode && a.parentNode.removeChild(a);
                    this.ob = null
                }
                this.qa.kf && this.qa.kf();
                this.qa.Hh = !1;
                this.qa.D = null;
                this.Rn();
                this.R && (this.R.or(),
                    this.R = null);
                this.Lk && (this.Lk.or(),
                    this.Lk = null)
            },
            da: function(a, b) {
                this.qa.r(a, b)
            },
            visibleChanged: function() {
                this.set("display", 0)
            },
            zIndexChanged: function() {
                this.set("display", 0)
            },
            ZI: function(a) {
                f.g.Xl(a, this.opacity)
            },
            opacityChanged: function() {
                var a = this.get("opacity");
                this.opacity = Math.min(Math.max(0, a), 1);
                if (a = this.ob)
                    if (a.length)
                        for (var b = 0; b < a.length; b += 1)
                            this.ZI(a[b]);
                    else
                        this.ZI(a)
            },
            GG: function() {
                var a = this.get("bounds");
                if (a) {
                    if (a instanceof f.Nd) {
                        var b = a.yi()
                            , c = a.hn()
                            , d = this.j.Ob(new f.W(180,0)).x
                            , e = this.j.Ob(b)
                            , g = this.j.Ob(c)
                            , h = this.j.get("center");
                        b.L > c.L && (0 < h.L ? g.x += d : e.x -= d);
                        this.F = [e.x, e.y, g.x, g.y]
                    }
                    a instanceof f.te && (this.F = [a.qb.x, a.qb.y, a.tc.x, a.tc.y]);
                    return this.F
                }
                return null
            }
        });
        var zc = function() {
            function a(a) {
                this.dC[f.a.Fb(a)] = a;
                return this
            }
            function b(a) {
                this.dC[f.a.Fb(a)] = null;
                return this
            }
            return function() {
                function c() {
                    var a = c.dC, b, g = [], h;
                    for (h in a)
                        Object.prototype.hasOwnProperty.call(a, h) && g.push(a[h]);
                    for (a = g.length - 1; 0 <= a; a -= 1)
                        h = g[a].apply(this, arguments),
                        void 0 !== h && (b = h);
                    return b
                }
                c.dC = {};
                c.bQ = a;
                c.oia = b;
                return c
            }
        }();
        f.le = f.Z.extend({
            ea: [f.ia],
            B: function(a, b) {
                this.um = a | 0;
                this.Vw = !!b;
                this.count = 0;
                this.ZH = zc();
                this.clear();
                this.Qx = []
            },
            tp: function() {
                return !this.count
            },
            hha: function() {
                return this.count >= this.um
            },
            Oia: function(a) {
                this.um !== a && (this.um = a | 0) && this.LP(this.um)
            },
            Pc: function(a) {
                return !!this.j[a]
            },
            get: function(a, b) {
                var c = this.lM(a);
                return c ? c.value : b
            },
            set: function(a, b) {
                var c = this.lM(a);
                c ? c.value = b : (c = new f.le.ao(a,b),
                    this.j[a] = c,
                    this.fN(c),
                    this.count += 1)
            },
            dm: function(a) {
                this.remove(a)
            },
            remove: function(a) {
                return Object.prototype.hasOwnProperty.call(this.j, a) ? (this.bu(this.j[a]),
                    !0) : !1
            },
            forEach: function(a, b) {
                for (var c = this.ac.next; c !== this.ac; c = c.next)
                    a.call(b, c.value, c.key, this)
            },
            Fn: function(a, b) {
                return Object.prototype.hasOwnProperty.call(this.j, a) ? this.j[a].value : b
            },
            Wha: function() {
                return this.ac.next.value
            },
            Xha: function() {
                return this.ac.mb.value
            },
            shift: function() {
                return this.NO(this.ac.next)
            },
            LQ: function() {
                this.Qx.length = 0
            },
            kT: function(a) {
                this.Qx.push(a)
            },
            push: function(a) {
                a = new f.le.ao("",a);
                0 === this.count ? (this.ac.mb = null,
                    a.mb = this.ac,
                    this.ac.next = a) : (this.mu.next = a,
                    a.mb = this.mu);
                this.count += 1;
                this.mu = a
            },
            sB: function(a) {
                a = new f.le.ao("",a);
                0 === this.count ? (this.ac.mb = null,
                    a.mb = this.ac,
                    this.mu = this.ac.next = a) : (this.ac.next.mb = a,
                    a.next = this.ac.next,
                    a.mb = this.ac,
                    this.ac.next = a);
                this.count += 1
            },
            haa: function() {
                if (this.count) {
                    this.count -= 1;
                    var a = this.ac.next;
                    a.next ? (a.next.mb = this.ac,
                        this.ac.next = a.next) : (this.ac.next = null,
                        this.mu = this.ac.mb = null);
                    a.next = null;
                    a.mb = null;
                    return a.value
                }
                return null
            },
            pop: function() {
                return this.NO(this.ac.mb)
            },
            lM: function(a) {
                if (Object.prototype.hasOwnProperty.call(this.j, a))
                    return a = this.j[a],
                    this.Vw && (a.remove(),
                        this.fN(a)),
                        a
            },
            fN: function(a) {
                this.Vw ? (a.next = this.ac.next,
                    a.mb = this.ac,
                    this.ac.next = a,
                    a.next.mb = a) : (a.mb = this.ac.mb,
                    a.next = this.ac,
                    this.ac.mb = a,
                    a.mb.next = a);
                this.um && this.Z4(this.um)
            },
            Z4: function() {
                var a = this;
                a.ou || (a.ou = setTimeout(function() {
                    a.ou = null;
                    a.LP(a.um)
                }, 0))
            },
            LP: function(a) {
                this.ou && (clearTimeout(this.ou),
                    this.ou = null);
                for (var b = this.Vw ? this.ac.mb : this.ac.next, c = {}, d = 0, e = this.Qx.length; d < e; d++)
                    c[this.Qx[d]] = !0;
                for (; b && this.count > a && (d = this.Vw ? b.mb : b.next,
                b.key && !c[b.key] && (this.bu(b),
                    this.ZH(b.value)),
                    b = d,
                b !== this.ac && b !== this.mu); )
                    ;
            },
            bu: function(a) {
                a.remove();
                delete this.j[a.key];
                this.count -= 1
            },
            NO: function(a) {
                this.ac !== a && this.bu(a);
                return a.value
            },
            clear: function() {
                this.j = {};
                this.ac = new f.le.ao("",null);
                this.ac.mb = this.ac.next = this.ac;
                this.count = 0
            }
        });
        f.le.ao = function(a, b) {
            this.key = a;
            this.value = b
        }
        ;
        f.le.ao.prototype.mb = null;
        f.le.ao.prototype.next = null;
        f.le.ao.prototype.remove = function() {
            this.mb.next = this.next;
            this.next.mb = this.mb;
            this.next = this.mb = null
        }
        ;
        function Ac(a, b, c) {
            this.url = a;
            this.Rc = b;
            this.AG = c;
            this.rj = this.IA = !1
        }
        function Bc(a, b, c) {
            var d = Cc;
            return function() {
                return d.call(this, a, b, c)
            }
        }
        function Cc(a, b, c) {
            a.tga = +new Date;
            a.loaded = b;
            clearTimeout(a.qda);
            var d = a.J$;
            d.Nj.remove(a.url) && d.b1();
            d = a.p$ ? a.Oa : a.za;
            a.Oa = null;
            (c || b || a.AG) && a.Rc(b ? d : null, a);
            a.ZS ? (a.ZS.sj(),
                a.ZS = null) : d && (d.onload = null,
                d.onerror = null,
                d.onabort = null,
                a.za = null)
        }
        f.Jw = f.Z.extend({
            $ea: "assets/image/blank.gif",
            B: function(a, b, c) {
                this.timeout = b || 15E3;
                this.Tl = new f.le(1024);
                this.Nj = new f.le(1024);
                this.SQ = a;
                this.nG = c
            },
            AC: function(a) {
                a && this.Nj.count >= this.SQ && (a = this.Nj.ac.mb.value,
                a.rj && (this.Nj.remove(a.url),
                    this.cL(a)));
                for (; this.Tl.count && !(this.Nj.count >= this.SQ); )
                    this.RZ(this.Tl.shift())
            },
            b1: function() {
                if (!this.GL) {
                    this.GL = !0;
                    var a = this;
                    setTimeout(function() {
                        a.GL = !1;
                        a.AC()
                    }, 0)
                }
            },
            RZ: function(a) {
                var b = document.createElement("img");
                a.O8 && (b.crossOrigin = "anonymous");
                b.src = a.url;
                a.za = b;
                a.J$ = this;
                a.startTime = +new Date;
                a.IA = !0;
                b.complete ? Cc(a, !0) : (this.Nj.set(a.url, a),
                    b.onload = Bc(a, !0),
                    b.onerror = Bc(a, !1, !0),
                    b.onabort = Bc(a, !1),
                    a.qda = setTimeout(Bc(a, !1, !0), this.timeout))
            },
            cL: function(a) {
                a.IA && (Cc(a, !1),
                    a.rj = !0,
                    a.Gfa = !0)
            },
            xha: function(a, b, c) {
                return this.bA(a.url, b, c, !0, a.ja.z + "_" + a.ja.x + "_" + a.ja.y)
            },
            bA: function(a, b, c, d, e) {
                var g = this.Nj.get(a);
                if (g && g.rj)
                    g.rj = !1,
                        g.Rc = b,
                        g.AG = c;
                else {
                    g = new Ac(a,b,c);
                    g.p$ = d;
                    g.key = e;
                    if (this.Tl.get(f.a.Fb(g)))
                        return;
                    this.Tl.set(f.a.Fb(g), g);
                    this.AC(!0)
                }
                return g
            },
            D$: function(a, b, c) {
                var d = this.Nj.get(a);
                if (d && d.rj)
                    d.rj = !1,
                        d.Rc = b,
                        d.AG = c;
                else {
                    d = new Ac(a,b,c);
                    d.O8 = !0;
                    if (this.Tl.get(f.a.Fb(d)))
                        return;
                    this.Tl.set(f.a.Fb(d), d);
                    this.AC(!0)
                }
                return d
            },
            EQ: function(a) {
                a.rj || (a.rj = !0,
                    this.Tl.remove(f.a.Fb(a)))
            },
            clear: function(a) {
                this.Tl.forEach(function(a) {
                    a.rj = !0
                });
                this.Tl.clear();
                if (a)
                    for (; 0 < this.Nj.length; )
                        a = this.Nj.pop(),
                            this.cL(a);
                else
                    this.Nj.forEach(function(a) {
                        a.rj = !0
                    })
            }
        });
        function Dc(a, b, c) {
            this.z = a;
            this.x = b;
            this.y = c
        }
        Dc.prototype.Db = function() {
            return new Dc(this.z,this.x,this.y)
        }
        ;
        Dc.prototype.toString = function() {
            return [this.z, this.x, this.y].join("/")
        }
        ;
        f.nb = function(a) {
            this.ja = a;
            this.key = a.toString()
        }
        ;
        f.di = Dc;
        f.D.nb = f.D.hc.extend({
            B: function(a, b, c, d, e) {
                arguments.callee.oa.apply(this, arguments);
                this.X("tileSize", a);
                this.X("tiles", a);
                this.Sd(["zooms", "type", "detectRetina", "errorUrl"], a);
                this.X("lang", b, !0);
                this.X("mapStyle", b, !0);
                this.X("style", b, !0);
                this.X("features", b, !0);
                var g = "overlayer" === a.get("type");
                this.gi = !g && !f.l.Y;
                if (f.l.Id || f.l.wja)
                    this.gi = !1;
                var h = b.get("size")
                    , h = h.width * h.height / 65536;
                this.ga = f.l.Y && f.l.ga && this.get("detectRetina");
                f.l.kd && f.l.Y && 9 < h && (this.gi = !1);
                this.$g = !g;
                this.ah = !g;
                this.RV = c;
                this.X("reload", a);
                "AMap.TileLayer.Flexible" === a.CLASS_NAME ? this.X("createTile", a) : this.X("tileFun", a);
                this.Wd = d;
                this.xS = e
            },
            langChanged: function() {
                this.set("reload");
                this.qa.Jn()
            },
            mapStyleChanged: function() {
                this.set("reload");
                this.qa.Jn()
            },
            styleChanged: function() {
                this.j.Wb || (this.set("reload"),
                    this.qa.Jn())
            },
            featuresChanged: function() {
                this.set("reload");
                this.qa.Jn()
            },
            reloadChanged: function() {
                this.set("display", 0)
            },
            tileFunChanged: function() {
                var a = this.RV || this.get("tileFun");
                this.lr = function(b, c, d) {
                    var e = a(b.ja.x, b.ja.y, b.ja.z);
                    if (!b.sn || b.sn.rj)
                        b.loaded = !1,
                            b.sn = ("3D" === this.j.O.view.type ? f.Ei.D$ : f.Ei.bA).call(f.Ei, e, function(a) {
                                b.sn = null;
                                a ? c(a) : d()
                            }, !1)
                }
            },
            createTileChanged: function() {
                var a = this.qa.getCreateTile();
                this.lr = function(b, c, d) {
                    a.call(this.q.qa, b.ja.x, b.ja.y, b.ja.z, c, d)
                }
                ;
                this.set("reload")
            },
            Al: function() {
                return {
                    dd: this.get("tileSize"),
                    visible: this.get("visible"),
                    F: this.GG(),
                    Xc: this.get("zooms"),
                    Vy: this.gi,
                    $g: this.$g,
                    ah: this.ah,
                    opacity: this.get("opacity"),
                    lr: this.qa.get("createTile"),
                    zi: this.RV || this.get("tileFun"),
                    kd: this.qa.Dn ? !1 : this.get("detectRetina") && f.l.ga && f.l.Y
                }
            },
            wj: function(a) {
                if (f.R.hd.th)
                    return new f.R.hd.th(this,a)
            }
        });
        f.Ei = new f.Jw(6,null);
        f.D.kc = f.D.hc.extend({
            B: function(a, b) {
                this.gb = Math.min(2, window.devicePixelRatio || 1);
                this.kd = f.l.ga && !a.Mg;
                this.map = b;
                this.$l = 0;
                this.Cj = !1;
                this.Ef = this.Re = 0;
                this.Qe = [];
                arguments.callee.oa.apply(this, arguments);
                this.yp = [];
                this.Af = new f.D.lK;
                a && (this.X("style", a),
                    this.X("cursor", a, !0),
                    this.Xca = a.get("stable") || !1,
                    this.X("dataSources", a),
                    this.X("bubble", a));
                this.X("display", b);
                this.wY()
            },
            Al: function() {
                return {
                    visible: this.get("visible"),
                    Xc: this.get("zooms"),
                    opacity: this.get("opacity"),
                    zIndex: this.get("zIndex"),
                    xu: this.qa.get("alwaysRender") || !1
                }
            },
            dataSourcesChanged: function() {
                var a = this.get("dataSources");
                a && a.length ? "string" === typeof a ? (new f.Ka.Xa(a)).h("complete", function(a) {
                    this.ZT(a.data);
                    this.Um = a.data;
                    this.Cj = !0;
                    this.set("display");
                    this.ya = !0;
                    this.qa.r("complete")
                }, this) : a.length && (this.ZT(a),
                    this.Um = a,
                    this.Cj = !0,
                    this.set("display"),
                    this.ya = !0,
                    this.qa.r("complete")) : this.clear()
            },
            getDatas: function() {
                return this.Um
            },
            Vda: function() {
                if (this.qa.Mg) {
                    var a = this.Mi;
                    this.Re = a.Re;
                    this.Ef = a.Ef
                }
            },
            da: function(a, b) {
                var c = {
                    type: a,
                    data: "mouseout" === a ? this.a1 || null : b.Co.Qa,
                    target: this.qa
                };
                this.a1 = "mouseout" === a ? null : b.Co.Qa;
                this.qa.r(a, c)
            },
            Mb: function(a) {
                this.da(a.type, a)
            },
            wY: function() {
                this.h("click", this.Mb);
                this.h("dblclick", this.Mb);
                this.h("mousedown", this.Mb);
                this.h("mouseup", this.Mb);
                this.h("mouseover", this.Mb);
                this.h("mouseout", this.Mb);
                this.h("touchstart", this.Mb);
                this.h("touchend", this.Mb)
            },
            Dfa: function() {
                this.H("click", this.Mb);
                this.H("dblclick", this.Mb);
                this.H("mousedown", this.Mb);
                this.H("mouseup", this.Mb);
                this.H("mouseover", this.Mb);
                this.H("mouseout", this.Mb);
                this.H("touchstart", this.Mb);
                this.H("touchend", this.Mb)
            },
            styleChanged: function() {
                this.Mi = this.get("style");
                this.Vda();
                this.set("display", 0)
            },
            ZT: function(a) {
                if (a) {
                    this.clear();
                    for (var b = 0; b < a.length; b += 1) {
                        var c = a[b].lnglat;
                        a[b].lnglat = f.a.ra(c);
                        c = this.map.Ob(c);
                        c = new f.mf({
                            name: "point-" + f.a.Fb(this),
                            Da: new f.ka.Ve([c.x, c.y],!0)
                        });
                        c.Dm = this;
                        c.Qa = a[b];
                        this.Jy(c)
                    }
                }
            },
            VR: function(a) {
                if ("geojson" === a)
                    return new f.UW({
                        map: this.map
                    });
                if ("topjson" === a)
                    return new f.Tea({
                        map: this.map
                    });
                if ("subway" === a)
                    return new f.Rea({
                        map: this.map
                    })
            },
            bba: function(a) {
                if (a) {
                    var b = []
                        , b = []
                        , c = {};
                    if (a.rules) {
                        for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
                            for (var g = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1)
                                h[k].fill && (g[k] = new f.style.Ge.mK(h[k].fill)),
                                h[k].stroke && (g[k] = new f.style.Ge.JK(h[k].stroke));
                            h = g;
                            b[d].dB = h;
                            b[d] = new f.style.vX(b[d])
                        }
                        c.rules = b
                    }
                    if (a.symbolizers) {
                        b = a.symbolizers;
                        a = 0;
                        for (d = b.length; a < d; a += 1)
                            b[a].fill && (b[a] = new f.style.Ge.mK(b[a].fill)),
                            b[a].stroke && (b[a] = new f.style.Ge.JK(b[a].stroke));
                        c.dB = b
                    }
                    a = new f.ZB(c)
                } else
                    a = new f.ZB({});
                this.set("style", a);
                return a
            },
            Bfa: function(a, b) {
                if (-1 === f.a.indexOf(a, f.w.cb)) {
                    var c = new f.Ka.Xa(a);
                    c.h("complete", function(c) {
                        c = this.Oa[a] = this.VR(b).AA(c);
                        this.Fo(c);
                        this.da("complete")
                    }, this);
                    c.h("error", this.Ab, this)
                } else
                    (new f.Ka.XMLHttpRequest(a)).h("complete", function(c) {
                        c = eval("(" + c.data + ")");
                        c = this.Oa[a] = this.VR(b).AA(c);
                        this.Fo(c)
                    }, this)
            },
            yba: function(a) {
                a.Oj > this.An && (this.An = a.Oj,
                    this.Sr = this.An / this.map.get("resolution", 20))
            },
            Jy: function(a) {
                this.Af.add(a);
                if (!this.Lu && !this.qa.Mg) {
                    if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
                        a.h("rad", this.yba, this);
                        var b = a.get("radius");
                        b.length && (b = Math.max.apply(null, b));
                        this.An ? b > this.An && (this.An = b,
                            this.Sr = this.An / this.map.get("resolution", 20)) : (this.An = b,
                            this.Sr = this.An / this.map.get("resolution", 20))
                    }
                    b = a.get("strokeWeight") || 0;
                    if (!this.Tr || b > this.Tr)
                        this.Tr = b
                }
                this.Xca || a.X("feature", this, !0)
            },
            Fo: function(a) {
                this.Cj = !0;
                for (var b = 0, c = a.length; b < c; b += 1)
                    this.Jy(a[b])
            },
            clear: function() {
                this.Cj = !0;
                this.Um = [];
                this.Af.clear();
                this.set("display", 0)
            },
            Ig: function(a) {
                var b;
                return 0 > a[0] ? (b = [a[0] + f.a.Ya, a[1], f.a.Ya, a[3]],
                    a = [0, a[1], a[2], a[3]],
                    b = this.Af.Ig(b),
                    a = this.Af.Ig(a),
                    f.extend(b, a)) : a[2] > f.a.Ya ? (b = [a[0], a[1], f.a.Ya, a[3]],
                    a = [0, a[1], a[2] - f.a.Ya, a[3]],
                    b = this.Af.Ig(b),
                    a = this.Af.Ig(a),
                    f.extend(b, a)) : this.Af.Ig(a)
            },
            Mga: function(a) {
                var b, c = this.get("style"), d = a.Zh;
                c instanceof f.ZB || (c = this.bba(c));
                if (d && 0 < d.length)
                    b = c.XQ(d, a);
                else {
                    if (c.$U.length || c.Zh.length)
                        b = c.C7(a);
                    b || (b = a.h9())
                }
                return b
            },
            YG: function(a) {
                function b(a, b) {
                    return a.rk - b.rk
                }
                var c = [], d, e, g, h, k, l = {};
                for (d in a)
                    if (a.hasOwnProperty(d)) {
                        g = a[d];
                        h = g.get("zIndex");
                        for (e in l)
                            if (l.hasOwnProperty(e) && (k = c[l[e]][2],
                            k === h))
                                break;
                        "undefined" === typeof l[h] && (c.push([[], [], h]),
                            l[h] = c.length - 1);
                        h = c[l[h]];
                        h[0].push(g)
                    }
                c.sort(this.Sca);
                a = 0;
                for (d = c.length; a < d; a += 1)
                    c[a][0].sort(b);
                return c
            },
            featureChanged: function(a) {
                this.Cj = !0;
                var b = a.target
                    , c = b.Da;
                0 !== this.Af.m9([f.a.Fb(b)]).length && (this.Af.remove(b, a.Ap),
                c && !a.R7 && this.Af.add(b))
            },
            yU: function(a) {
                this.Cj = !0;
                for (var b, c = 0, d = a.length; c < d; c += 1)
                    b = a[c],
                        b.Da.Ap = null,
                        b.$m(!0),
                        b.bi("feature")
            },
            Sia: function(a, b) {
                return a[1].zIndex === b[1].zIndex ? f.a.Fb(a[1]) - f.a.Fb(b[1]) : a[1].zIndex - b[1].zIndex
            },
            Sca: function(a, b) {
                return a[2] - b[2]
            },
            Kia: function(a) {
                return a.Qga() === f.D.Wea.Pea
            },
            wj: function(a) {
                return this.Lu ? new f.R.ud.ei(this,a) : "c" === this.map.get("overlayRender") && f.R.canvas.ei ? new f.R.canvas.ei(this,a) : f.R.hd.ei && "d" === this.map.get("overlayRender") ? new f.R.hd.ei(this,a) : null
            }
        });
        f.D.kc.fb({
            ql: function(a) {
                return this.Lu ? new f.Ia.ud.ei(this,a) : this.qa.Mg ? new f.Ia.jX(this,a) : new f.Ia.ei(this,a)
            }
        });
        f.D.lK = f.Z.extend({
            B: function() {
                this.clear()
            },
            clear: function() {
                this.Cl = [];
                this.CI = new f.Vg
            },
            add: function(a) {
                var b = f.a.Fb(a)
                    , c = a.Da;
                this.Cl[b] || (this.count += 1,
                    this.Cl[b] = a,
                c && !f.F.yb(c.Gc(), [Infinity, Infinity, -Infinity, -Infinity]) && this.CI.mv(c.Gc(), a))
            },
            Gga: function() {
                return this.Cl
            },
            Ig: function(a) {
                return this.CI.oca(a)
            },
            m9: function(a) {
                var b = a.length, c = [], d;
                for (d = 0; d < b; d += 1)
                    this.Cl[a[d]] && c.push(this.Cl[a[d]]);
                return c
            },
            remove: function(a, b) {
                var c = f.a.Fb(a).toString()
                    , d = a.Da;
                this.Cl[c] && (this.Cl[c] = null,
                d && (c = "undefined" !== typeof b ? b : d.Gc(),
                    this.CI.remove(c, a)))
            }
        });
        f.Vg = f.Z.extend({
            B: function(a) {
                this.qT = "undefined" !== typeof a ? a : 6;
                this.gA = Math.floor(this.qT / 2);
                this.$v = {
                    F: [Infinity, Infinity, -Infinity, -Infinity],
                    hb: []
                };
                this.count = 0
            },
            T6: function(a, b) {
                var c = -1, d = [], e;
                d.push(b);
                var g = b.hb;
                do {
                    -1 !== c && (d.push(g[c]),
                        g = g[c].hb,
                        c = -1);
                    for (var h = g.length - 1; 0 <= h; h -= 1) {
                        var k = g[h];
                        if ("undefined" !== typeof k.vp) {
                            c = -1;
                            break
                        }
                        var l = f.Vg.us(k.F[2] - k.F[0], k.F[3] - k.F[1], k.hb.length + 1)
                            , k = f.Vg.us((k.F[2] > a.F[2] ? k.F[2] : a.F[2]) - (k.F[0] < a.F[0] ? k.F[0] : a.F[0]), (k.F[3] > a.F[3] ? k.F[3] : a.F[3]) - (k.F[1] < a.F[1] ? k.F[1] : a.F[1]), k.hb.length + 2);
                        if (0 > c || Math.abs(k - l) < e)
                            e = Math.abs(k - l),
                                c = h
                    }
                } while (-1 !== c);return d
            },
            mv: function(a, b, c) {
                a = {
                    F: a,
                    vp: b
                };
                "undefined" !== typeof c && (a.type = c);
                this.FS(a, this.$v);
                this.count += 1
            },
            FS: function(a, b) {
                var c;
                if (0 === b.hb.length)
                    b.F = f.F.Db(a.F),
                        b.hb.push(a);
                else {
                    var d = this.T6(a, b)
                        , e = a;
                    do {
                        if (c && "undefined" !== typeof c.hb && 0 === c.hb.length) {
                            var g = c;
                            c = d.pop();
                            for (var h = 0, k = c.hb.length; h < k; h += 1)
                                if (c.hb[h] === g || 0 === c.hb[h].hb.length) {
                                    c.hb.splice(h, 1);
                                    break
                                }
                        } else
                            c = d.pop();
                        g = e instanceof Array;
                        if ("undefined" !== typeof e.vp || "undefined" !== typeof e.hb || g) {
                            if (g) {
                                g = 0;
                                for (h = e.length; g < h; g += 1)
                                    f.F.extend(c.F, e[g].F);
                                c.hb = c.hb.concat(e)
                            } else
                                f.F.extend(c.F, e.F),
                                    c.hb.push(e);
                            c.hb.length <= this.qT ? e = {
                                F: f.F.Db(c.F)
                            } : (e = g = this.A$(c.hb),
                            1 > d.length && (c.hb.push(g[0]),
                                d.push(c),
                                e = g[1]))
                        } else
                            f.F.extend(c.F, e.F),
                                e = {
                                    F: f.F.Db(c.F)
                                }
                    } while (0 < d.length)
                }
            },
            A$: function(a) {
                for (var b = this.eba(a); 0 < a.length; )
                    this.fba(a, b[0], b[1]);
                return b
            },
            eba: function(a) {
                for (var b = a.length - 1, c = 0, d = a.length - 1, e = 0, g = a.length - 2; 0 <= g; g -= 1) {
                    var h = a[g];
                    h.F[0] > a[c].F[0] ? c = g : h.F[2] < a[b].F[1] && (b = g);
                    h.F[1] > a[e].F[1] ? e = g : h.F[3] < a[d].F[3] && (d = g)
                }
                Math.abs(a[b].F[2] - a[c].F[0]) > Math.abs(a[d].F[3] - a[e].F[1]) ? b > c ? (b = a.splice(b, 1)[0],
                    c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0],
                    b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0],
                    c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0],
                    b = a.splice(d, 1)[0]);
                return [{
                    F: f.F.Db(b.F),
                    hb: [b]
                }, {
                    F: f.F.Db(c.F),
                    hb: [c]
                }]
            },
            fba: function(a, b, c) {
                for (var d = f.Vg.us(b.F[2] - b.F[0], b.F[3] - b.F[1], b.hb.length + 1), e = f.Vg.us(c.F[2] - c.F[0], c.F[3] - c.F[1], c.hb.length + 1), g, h, k, l = a.length - 1; 0 <= l; l -= 1) {
                    var m = a[l]
                        , n = [b.F[0] < m.F[0] ? b.F[0] : m.F[0], b.F[2] > m.F[2] ? b.F[2] : m.F[2], b.F[1] < m.F[1] ? b.F[1] : m.F[1], b.F[3] > m.F[3] ? b.F[3] : m.F[3]]
                        , n = Math.abs(f.Vg.us(n[1] - n[0], n[3] - n[2], b.hb.length + 2) - d)
                        , m = [c.F[0] < m.F[0] ? c.F[0] : m.F[0], c.F[2] > m.F[2] ? c.F[2] : m.F[2], c.F[1] < m.F[1] ? c.F[1] : m.F[1], c.F[3] > m.F[3] ? c.F[3] : m.F[3]]
                        , m = Math.abs(f.Vg.us(m[1] - m[0], m[3] - m[2], c.hb.length + 2) - e)
                        , p = Math.abs(m - n);
                    if (!h || !g || p < g)
                        h = l,
                            g = p,
                            k = m < n ? c : b
                }
                d = a.splice(h, 1)[0];
                b.hb.length + a.length + 1 <= this.gA ? (b.hb.push(d),
                    f.F.extend(b.F, d.F)) : c.hb.length + a.length + 1 <= this.gA ? (c.hb.push(d),
                    f.F.extend(c.F, d.F)) : (k.hb.push(d),
                    f.F.extend(k.F, d.F))
            },
            remove: function(a, b) {
                var c = [];
                c[0] = {
                    F: a
                };
                (c[1] = b) || (c[1] = !1);
                c[2] = this.$v;
                this.count -= 1;
                if (!1 === c[1]) {
                    var d = 0
                        , e = [];
                    do
                        d = e.length,
                            e = e.concat(this.BU.apply(this, c));
                    while (d !== e.length);return e
                }
                return this.BU.apply(this, c)
            },
            BU: function(a, b, c) {
                var d = []
                    , e = []
                    , g = [];
                if (!a || !f.F.Me(a.F, c.F))
                    return g;
                a = f.F.Db(a.F);
                var h;
                e.push(c.hb.length);
                d.push(c);
                do {
                    c = d.pop();
                    var k = e.pop() - 1;
                    if ("undefined" !== typeof b)
                        for (; 0 <= k; ) {
                            var l = c.hb[k];
                            if (f.F.Me(a, l.F))
                                if (b && "undefined" !== typeof l.vp && l.vp === b || !b && ("undefined" !== typeof l.vp || f.F.TQ(a, l.F))) {
                                    "undefined" !== typeof l.hb ? (g = this.ps(l, !0, [], l),
                                        c.hb.splice(k, 1)) : g = c.hb.splice(k, 1);
                                    f.Vg.FI(c);
                                    b = void 0;
                                    c.hb.length < this.gA && (h = this.ps(c, !0, [], c));
                                    break
                                } else
                                    "undefined" !== typeof l.hb && (e.push(k),
                                        d.push(c),
                                        c = l,
                                        k = l.hb.length);
                            k -= 1
                        }
                    else if ("undefined" !== typeof h) {
                        c.hb.splice(k + 1, 1);
                        0 < c.hb.length && f.Vg.FI(c);
                        k = 0;
                        for (l = h.length; k < l; k += 1)
                            this.FS(h[k], c);
                        h.length = 0;
                        0 === d.length && 1 >= c.hb.length ? (h = this.ps(c, !0, h, c),
                            c.hb.length = 0,
                            d.push(c),
                            e.push(1)) : 0 < d.length && c.hb.length < this.gA ? (h = this.ps(c, !0, h, c),
                            c.hb.length = 0) : h = void 0
                    } else
                        f.Vg.FI(c)
                } while (0 < d.length);return g
            },
            search: function(a, b) {
                return this.ps({
                    F: a
                }, !1, [], this.$v, b)
            },
            oca: function(a, b) {
                return this.ps({
                    F: a
                }, !1, [], this.$v, b, !0)
            },
            ps: function(a, b, c, d, e, g) {
                var h = {}
                    , k = [];
                if (!f.F.Me(a.F, d.F))
                    return c;
                k.push(d.hb);
                do {
                    d = k.pop();
                    for (var l = d.length - 1; 0 <= l; l -= 1) {
                        var m = d[l];
                        if (f.F.Me(a.F, m.F))
                            if ("undefined" !== typeof m.hb)
                                k.push(m.hb);
                            else if ("undefined" !== typeof m.vp)
                                if (b)
                                    c.push(m);
                                else if ("undefined" === typeof e || m.type === e)
                                    m = m.vp,
                                        "undefined" !== typeof g ? h[f.a.Fb(m)] = m : c.push(m)
                    }
                } while (0 < k.length);return "undefined" !== typeof g ? h : c
            }
        });
        f.Vg.FI = function(a) {
            var b = a.hb.length
                , c = a.F;
            if (0 === b)
                f.F.empty(c);
            else {
                var d = a.hb[0].F;
                c[0] = d[0];
                c[2] = d[2];
                c[1] = d[1];
                c[3] = d[3];
                for (d = 1; d < b; d += 1)
                    f.F.extend(c, a.hb[d].F)
            }
        }
        ;
        f.Vg.us = function(a, b, c) {
            var d = (a + b) / 2;
            a *= b;
            return a * c / (a / (d * d))
        }
        ;
        f.C = f.C || {};
        f.C.Pf = f.Z.extend({
            ea: [f.ia, f.be],
            Paa: ["position", "visible", "clickable", "bubble"],
            B: function(a, b) {
                this.map = b;
                this.Sd(this.Paa, a);
                this.X("zIndex", a);
                this.X("draggable", a);
                f.l.he && this.DY();
                f.l.Y || this.uC();
                this.Oc = a;
                this.Oc.C = this
            },
            draggableChanged: function() {
                this.get("draggable") ? this.tC() : this.cE()
            },
            da: function(a, b) {
                var c;
                c = b ? {
                    type: a,
                    pixel: b.ub,
                    target: this.Oc,
                    lnglat: b.ze
                } : {
                    type: a
                };
                this.Oc && this.Oc.r(a, c)
            },
            Mb: function(a) {
                ("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !== a.type || this.get("clickable")) && this.da(a.type, a)
            },
            sC: function() {
                this.h("click", this.Mb);
                this.h("rightclick", this.Mb);
                this.h("longclick", this.Mb);
                this.h("longpress", this.Mb);
                this.h("dblclick", this.Mb)
            },
            NP: function() {
                this.H("click", this.Mb);
                this.H("rightclick", this.Mb);
                this.H("longclick", this.Mb);
                this.H("longpress", this.Mb);
                this.H("dblclick", this.Mb)
            },
            uC: function() {
                this.get("clickable") && this.sC();
                this.h("mousemove", this.Mb);
                this.h("mouseout", this.Mb);
                this.h("mouseover", this.Mb);
                this.h("mousedown", this.Mb);
                this.h("mouseup", this.Mb)
            },
            Efa: function() {
                this.NP();
                this.H("mousemove", this.Mb);
                this.H("mouseout", this.Mb);
                this.H("mouseover", this.Mb);
                this.H("mousedown", this.Mb);
                this.H("mouseup", this.Mb)
            },
            clickableChanged: function() {
                this.get("clickable") ? this.sC() : this.NP()
            },
            DY: function() {
                this.get("clickable") && this.sC();
                this.h("touchstart", this.Mb, this);
                this.h("touchmove", this.Mb, this);
                this.h("touchend", this.Mb, this)
            },
            tC: function() {
                this.h("dragstart", this.vo);
                this.h("dragging", this.to);
                this.h("dragend", this.uo)
            },
            vo: function(a) {
                this.map.JH(a);
                this.Ne = a.ub;
                this.bT = a.Zd;
                this.aT = a.ze;
                this.da("dragstart", a)
            },
            to: function(a) {
                var b = this.map.O.view.type;
                if ("2D" == b) {
                    var c = a.ub.Sa(this.Ne)
                        , b = c.x
                        , c = c.y;
                    this.Ne = a.ub;
                    var d = this.map.get("rotation") * Math.PI / 180
                        , e = b * Math.cos(d) + Math.sin(d) * c
                        , b = -Math.sin(d) * b + Math.cos(d) * c;
                    this.Bn(new f.I(e,b));
                    this.da("dragging", a)
                } else
                    "3D" == b && a.Zd && (c = a.ub.Sa(this.Ne),
                        b = c.x,
                        c = c.y,
                        e = a.Zd.Sa(this.bT),
                        a.ze.Sa(this.aT),
                        this.Ne = a.ub,
                    "function" === typeof this.Dv && this.Dv(b, c, e),
                        this.bT = a.Zd,
                        this.aT = a.ze,
                        this.da("dragging", a))
            },
            uo: function(a) {
                this.map.NJ();
                this.da("dragend", a)
            },
            cE: function() {
                this.H("dragstart", this.vo);
                this.H("dragging", this.to);
                this.H("dragend", this.uo)
            },
            eD: function(a) {
                var b, c, d = [];
                if (a)
                    for (b = 0,
                             c = a.length; b < c; b += 1)
                        d.push(this.fD(a[b]));
                return d
            },
            fD: function(a) {
                a = this.map.Ob(a);
                return [a.x, a.y]
            },
            se: function(a) {
                var b = this.K.Za || this.map.get("centerCoords")
                    , c = Math.pow(2, 20 - this.map.get("zoom"));
                return [(a[0] - b.x) / c, (a[1] - b.y) / c]
            }
        });
        f.C.eb = f.C.Pf.extend({
            pI: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),
            e6: {
                AMAP_ANIMATION_NONE: !1,
                AMAP_ANIMATION_DROP: f.sh.Easing.Bounce,
                AMAP_ANIMATION_BOUNCE: f.sh.Easing.Cubic
            },
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.Sd(this.pI, a);
                this.X("move", a);
                this.F6();
                this.Jo();
                this.set("AnimationOffset", new f.I(0,0), !0);
                this.X("raiseOnDrag", a);
                this.X("animation", a)
            },
            xD: function(a, b, c) {
                if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
                    var d = this;
                    this.Jj = new f.sh;
                    this.Jj.transition = function(c, g, h) {
                        if ("AMAP_ANIMATION_NONE" === d.get("animation"))
                            return 0;
                        if (a && 600 <= h)
                            return d.Jj.stop(),
                                0;
                        c = 0 === Math.floor(h / 600) % 2 ? "Out" : "In";
                        "out" === b ? c = "Out" : "in" === b && (c = "In");
                        return d.e6[d.get("animation")][c](h % 600 / 600)
                    }
                    ;
                    c = c || 40;
                    this.Jj.Ol = function(a) {
                        d.set("AnimationOffset", d.eE.add(new f.I(0,-1 * c * a)))
                    }
                    ;
                    this.eE = new f.I(0,0);
                    this.Jj.Pj()
                }
            },
            AnimationOffsetChanged: function() {
                this.positionChanged()
            },
            VO: function() {
                this.Jj && (this.Jj.stop(),
                    this.set("AnimationOffset", this.eE));
                this.set("AnimationOffset", new f.I(0,-40));
                if (this.Ls)
                    this.Ls.set("position", this.get("position"));
                else {
                    var a = new w.C.eb({
                        zIndex: this.get("zIndex") - 1,
                        icon: new w.C.Ue({
                            image: f.w.cb + "/theme/v1.3/dragCross.png",
                            size: new f.sc(14,11)
                        }),
                        offset: new f.I(-4,-5),
                        position: this.get("position")
                    });
                    a.na = !0;
                    this.Ls = a
                }
                this.Ls.setMap(this.map.O)
            },
            cM: function() {
                this.set("animation", "AMAP_ANIMATION_DROP", !0);
                this.xD(!0, "in");
                this.Ls.setMap(null)
            },
            animationChanged: function() {
                this.Jj && (this.Jj.stop(),
                    this.set("AnimationOffset", this.eE),
                    this.Jj = null);
                var a = this.get("animation");
                a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.xD(!0, "in", 100) : this.xD())
            },
            yh: function() {
                this.Ls && this.Ls.set("position", this.get("position"))
            },
            raiseOnDragChanged: function() {
                this.get("raiseOnDrag") ? (this.h("dragstart", this.VO, this),
                    this.h("dragging", this.yh, this),
                    this.h("dragend", this.cM, this)) : (this.H("dragstart", this.VO, this),
                    this.H("dragging", this.yh, this),
                    this.H("dragend", this.cM, this))
            },
            Bn: function(a) {
                var b = this.get("position");
                a = this.map.Ob(b).add(a.bd(Math.pow(2, 20 - this.map.get("zoom"))));
                b instanceof f.W ? this.set("position", this.map.Dd(a)) : this.set("position", a)
            },
            Dv: function(a, b) {
                var c = this.get("position")
                    , c = this.map.Gl(c)
                    , c = this.map.Rm(new f.I(c.x + a,c.y + b));
                this.set("position", c)
            },
            F6: function() {
                var a = this.get("content")
                    , b = this.get("shadow")
                    , c = this.get("offset")
                    , d = this.get("label")
                    , a = a ? this.sQ(a, c) : this.zF(this.get("icon"), c);
                this.set("contentDom", a, !0);
                b && (b = this.xQ(b, c),
                    this.set("shadowDom", b, !0));
                d && d.content && this.set("labelDom", this.uQ(d.content), !0)
            },
            uQ: function(a) {
                var b = document.createElement("div");
                b.className = "amap-marker-label";
                b.innerHTML = a;
                return b
            },
            Jo: function() {
                var a = this.get("position");
                if (this.map && a && !this.K) {
                    var b = this.map
                        , a = this.map.Ob(a)
                        , a = this.K = new f.mf({
                        name: "marker-" + f.a.Fb(this),
                        map: b,
                        Da: new f.ka.Ve([a.x, a.y])
                    });
                    a.Dm = this;
                    this.X("coords", a, !0);
                    a.Sd("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
                }
            },
            getParams: function() {
                return {
                    zIndex: this.get("zIndex"),
                    Ny: this.get("angle"),
                    cg: this.get("contentDom"),
                    $S: this.get("labelDom"),
                    qV: this.get("shadowDom"),
                    opacity: this.get("opacity"),
                    title: this.get("title"),
                    label: this.get("label"),
                    bK: this.get("AnimationOffset"),
                    verticalAlign: this.get("verticalAlign"),
                    textAlign: this.get("textAlign"),
                    offset: this.get("offset"),
                    WS: this.get("isTop"),
                    shape: this.get("shape"),
                    visible: this.get("visible")
                }
            },
            offsetChanged: function() {
                if (this.K && this.K.aa) {
                    var a = this.map.O.view.type;
                    "2D" == a ? (a = this.map.Ob(this.get("position")),
                        a = a.Sa(this.K.la).ec(Math.pow(2, 20 - this.map.get("zoom"))),
                    this.K.aa && (this.K.aa.Vt && this.K.aa.parentNode !== this.K.aa.Vt ? this.map.set("display") : (this.K.aa.style.left = Math.round(a.x) + this.get("offset").x + this.get("AnimationOffset").x + "px",
                        this.K.aa.style.top = Math.round(a.y) + this.get("offset").y + this.get("AnimationOffset").y + "px"))) : "3D" == a && (a = this.get("position"),
                        a = this.map.Gl(a),
                    this.K.aa && (this.K.aa.Vt && this.K.aa.parentNode !== this.K.aa.Vt ? this.map.set("display") : (this.K.aa.style.left = Math.round(a.x) + this.get("offset").x + this.get("AnimationOffset").x + "px",
                        this.K.aa.style.top = Math.round(a.y) + this.get("offset").y + this.get("AnimationOffset").y + "px")))
                } else
                    this.map.set("display")
            },
            positionChanged: function() {
                if (this.K) {
                    var a = this.map.Ob(this.get("position"));
                    this.set("coords", [a.x, a.y]);
                    this.map && (this.K.qX = !0,
                        this.offsetChanged())
                }
            },
            textAlignChanged: function() {
                this.iL()
            },
            verticalAlignChanged: function() {
                this.iL()
            },
            iL: function() {
                this.K && (this.K.dg = !0,
                this.map && (this.map.Hc.Bj = !0,
                    this.map.set("display")))
            },
            contentChanged: function() {
                if (this.K) {
                    this.map.Hc.Bj = !0;
                    -1 === f.a.indexOf(this.map.Hc.Qe, this.K) && this.map.Hc.Qe.push(this.K);
                    this.K.aa && this.K.aa.removeChild(this.get("contentDom"));
                    var a = this.get("content")
                        , b = this.get("offset")
                        , a = this.sQ(a, b);
                    this.set("contentDom", a);
                    this.K.aa && (f.l.Lg && f.a.iepngFix(a),
                        this.K.aa.appendChild(a),
                        this.K.cg = a);
                    this.map && this.map.set("display")
                }
            },
            iconChanged: function() {
                if (this.K && this.K.aa && !this.get("content")) {
                    this.map.Hc.Bj = !0;
                    -1 === f.a.indexOf(this.map.Hc.Qe, this.K) && this.map.Hc.Qe.push(this.K);
                    this.K.aa && this.get("contentDom") && this.K.aa.removeChild(this.get("contentDom"));
                    var a = this.get("icon")
                        , b = this.get("offset")
                        , a = this.zF(a, b);
                    this.set("contentDom", a);
                    this.K.aa ? (f.l.Lg && f.a.iepngFix(a),
                        this.K.aa.appendChild(a),
                        this.K.cg = a) : this.map && this.map.set("display")
                }
            },
            shadowChanged: function() {
                if (this.K && this.K.aa) {
                    var a = this.get("shadowDom");
                    this.K.aa && a && a.parentNode === this.K.aa && this.K.aa.removeChild(a);
                    if (a = this.get("shadow")) {
                        var b = this.get("offset")
                            , a = this.xQ(a, b);
                        this.set("shadowDom", a);
                        this.K.aa && this.K.aa.appendChild(a)
                    }
                }
            },
            titleChanged: function() {
                this.K && this.K.cg && "string" === typeof this.get("title") && this.K.cg && this.get("title") && (this.K.cg.title = this.get("title"))
            },
            labelChanged: function() {
                if (this.K && this.K.aa) {
                    var a = this.get("label")
                        , b = this.K.aa;
                    if (b && a && a.hasOwnProperty("content")) {
                        this.get("labelDom") && b.removeChild(this.get("labelDom"));
                        var c = "";
                        if (a.content) {
                            var c = this.uQ(a.content)
                                , d = 0
                                , e = 0;
                            a.offset && (d = a.offset.y + "px",
                                e = a.offset.x + "px");
                            c.style.top = d;
                            c.style.left = e;
                            b.appendChild(c)
                        }
                        this.set("labelDom", c)
                    }
                }
            },
            isTopChanged: function() {
                var a = this.map.Hc.iB
                    , b = this.get("isTop")
                    , c = this.get("zIndex");
                a ? a === this ? this.K && this.K.aa && (this.K.aa.style.zIndex = b ? this.map.Hc.$l + 10 : c,
                    this.map.Hc.iB = b ? this : null) : (a.K && a.K.aa && (a.K.aa.style.zIndex = b ? a.get("zIndex") : this.map.Hc.$l + 10),
                this.K && this.K.aa && (this.K.aa.style.zIndex = b ? this.map.Hc.$l + 10 : c),
                    this.map.Hc.iB = b ? this : a) : (this.map.Hc.iB = this,
                this.K && this.K.aa && (this.K.aa.style.zIndex = b ? this.map.Hc.$l + 10 : c))
            },
            visibleChanged: function() {
                this.K && this.K.aa && (this.get("visible") ? this.K.aa.style.display = "block" : this.K.aa.style.display = "none")
            },
            angleChanged: function() {
                if (this.K && this.K.aa) {
                    var a = {
                        x: -1 * this.get("offset").x,
                        y: -1 * this.get("offset").y
                    };
                    f.g.rotate(this.K.aa, this.get("angle") || 0, a)
                }
            },
            zIndexChanged: function() {
                var a = this.get("zIndex");
                if (a > this.map.Hc.$l) {
                    this.map.Hc.$l = a;
                    var b = this.map.Hc.iB;
                    b && b.K && b.K.aa && (b.K.aa.style.zIndex = a + 10)
                }
                this.K && this.K.aa && (this.K.aa.style.zIndex = this.get("isTop") ? this.map.Hc.$l + 10 : this.get("zIndex"))
            },
            opacityChanged: function() {
                var a = this.get("contentDom")
                    , b = this.get("shadowDom");
                a && f.g.Xl(a, this.get("opacity"));
                b && f.g.Xl(b, this.get("opacity"))
            },
            sQ: function(a) {
                var b;
                b = document.createElement("div");
                b.className = "amap-marker-content";
                "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a,
                b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
                f.g.Xl(b, this.get("opacity"));
                return b
            },
            zF: function(a) {
                var b, c = 0, d = 0, e, g, h, k;
                a ? ("string" === typeof a ? (b = a,
                    k = !0) : (b = a.get("image"),
                    d = a.get("size"),
                    e = a.get("imageSize"),
                    c = d.width,
                    d = d.height,
                e && (g = e.width,
                    h = e.height)),
                c || (c = 0),
                d || (d = 0),
                    a = "string" !== typeof a ? a.get("imageOffset") : {
                        x: 0,
                        y: 0
                    }) : (b = f.w.ig + "/mark_bs.png",
                    a = {
                        x: 0,
                        y: 0
                    },
                    c = 19,
                    d = 33,
                    g = 19,
                    h = 33);
                e = document.createElement("div");
                e.className = "amap-icon";
                e.style.position = "absolute";
                k && !f.l.Id && (e.style.overflow = "inherit");
                c && (e.style.width = c + "px");
                d && (e.style.height = d + "px");
                c = document.createElement("img");
                c.src = b;
                g && h && (c.style.width = g + "px",
                    c.style.height = h + "px");
                c.style.top = a.y + "px";
                c.style.left = a.x + "px";
                f.l.Id && k || e.appendChild(c);
                f.g.Xl(f.l.Id && k ? c : e, this.get("opacity"));
                return f.l.Id && k ? c : e
            },
            xQ: function(a, b) {
                var c = this.zF(a, b);
                c.style.zIndex = -1;
                return c
            },
            moveChanged: function() {
                var a = this.get("move");
                if (!1 === a)
                    return this.bda();
                void 0 !== a && ("pause" === a.action ? this.dba() : "[object Array]" === Object.prototype.toString.call(a.ze) ? a.ze && ("resume" === a.action && this.Nx ? this.moveTo(a.ze[a.ze.dl || 0], a.speed, a.lb) : (this.Nx && this.r("movestop"),
                    a.ze.dl = 0,
                    this.set("position", a.ze[0]),
                    this.baa(a.ze, a.speed, a.lb, a.V6))) : this.moveTo(a.ze, a.speed, a.lb, !0))
            },
            moveTo: function(a, b, c, d) {
                var e = this.get("position");
                a.Sa(e);
                var g = Math.round(a.Eg(e) / 1E3 / b * 36E5);
                if (0 === g)
                    return this.r("moveend");
                this.jg && (this.jg.stop(),
                    this.jg = null);
                this.jg = new f.sh(e,a);
                c = c || function(a) {
                    return a
                }
                ;
                this.jg.transition = function(a, b, d) {
                    if (d >= g)
                        return b;
                    var e = (b.L - a.L) * c(d / g) + a.L;
                    a = (b.N - a.N) * c(d / g) + a.N;
                    return new f.W(e,a)
                }
                ;
                this.jg.Ol = function(b) {
                    this.set("position", b);
                    d && this.Oc.r("moving", {
                        passedPath: [this.jg.start, this.get("position")]
                    });
                    this.r("moving");
                    b.yb(a) && (this.jg && (this.jg.stop(),
                        this.jg = null),
                        this.Oc.r("moveend"),
                        this.r("moveend"))
                }
                ;
                this.get("autoRotation") && !f.l.Id && (b = "2D" == (this.map.O.view.type || "2D") ? this.y_(e, a) : this.z_(e, a),
                    this.set("angle", b));
                this.jg.Pj(this)
            },
            bda: function() {
                this.jg && (this.jg.stop(),
                    this.jg = null,
                    this.r("movestop"))
            },
            dba: function() {
                this.jg && (this.jg.stop(),
                    this.jg = null,
                    this.r("movepause"))
            },
            baa: function(a, b, c, d) {
                function e() {
                    var b = a.slice(0, a.dl || 0);
                    b.push(this.get("position"));
                    this.Oc.r("moving", {
                        passedPath: b
                    })
                }
                function g() {
                    a.dl < a.length - 1 ? (a.dl += 1,
                        this.moveTo(a[a.dl], b, c)) : (this.da("movealong"),
                        d ? (a.dl = 0,
                            this.set("position", a[0]),
                            this.moveTo(a[a.dl], b, c)) : this.r("movestop"))
                }
                var h = Math.min(a.dl || 0, a.length - 1);
                this.Nx || (this.Nx = !0,
                    this.h("moving", e, this),
                    this.h("moveend", g, this),
                    this.h("movestop", function l() {
                        this.Nx = !1;
                        this.H("moveend", g, this);
                        this.H("moving", e, this);
                        this.H("movestop", l, this)
                    }, this));
                this.moveTo(a[h], b, c)
            },
            z_: function(a, b) {
                var c = this.map
                    , d = c.Gl(a)
                    , c = c.Gl(b)
                    , e = 0;
                c.Eg(d);
                var g = c.y - d.y
                    , h = c.x - d.x;
                0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)),
                    0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
                return f.a.df(180 * e / Math.PI, 1)
            },
            y_: function(a, b) {
                var c = this.map
                    , d = c.Ob(a)
                    , c = c.Ob(b)
                    , e = 0;
                c.Eg(d);
                var g = c.y - d.y
                    , h = c.x - d.x;
                0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)),
                    0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
                return f.a.df(180 * e / Math.PI, 1)
            }
        });
        f.C.Wj = f.C.Pf.extend({
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.X("items", a, !0);
                this.X("content", a, !0);
                this.X("resolution", b);
                this.X("centerCoords", b);
                this.yu = a
            },
            HT: function(a) {
                this.Le();
                this.Ds();
                this.Vj();
                this.bi("resolution");
                this.bi("centerCoords");
                this.bi("render");
                this.X("resolution", a);
                this.X("centerCoords", a);
                this.X("render", a);
                this.map.h("movestart", this.ej, this);
                this.map.h("mapmove", this.ej, this);
                this.map.h("zoomstart", this.ej, this);
                this.map.h("click", this.ej, this);
                this.map.h("closeOverlays", this.ej, this);
                this.map.h("rotate", this.ej, this)
            },
            ej: function() {
                this.yu.map && this.yu.close()
            },
            mapChanged: function() {},
            positionChanged: function() {
                this.Vj()
            },
            renderChanged: function() {
                this.Vj()
            },
            Le: function() {
                this.J && (this.J.parentNode && this.J.parentNode.removeChild(this.J),
                    this.J = null);
                var a = f.g.create("div", null, "amap-menu");
                f.A.h(a, "mousedown", function(a) {
                    f.A.stopPropagation(a)
                }, this);
                this.J = a;
                this.map.Ga.C.appendChild(this.J)
            },
            Ds: function() {
                var a = this
                    , b = this.J;
                b.innerHTML = "";
                var c = this.get("content");
                if ("object" === typeof c)
                    b.appendChild(c);
                else if ("string" === typeof c)
                    b.innerHTML = c;
                else if ((c = this.get("items")) && c.length) {
                    var d = f.g.create("ul", b, "amap-menu-outer");
                    c.sort(function(a, b) {
                        return isNaN(a.rA) || isNaN(b.rA) ? 0 : a.rA - b.rA
                    });
                    for (b = 0; b < c.length; b += 1)
                        (function(b) {
                                var c = b.bW
                                    , h = b.lb
                                    , k = f.g.create("li", d);
                                k.innerHTML = c;
                                f.A.h(k, "click", function() {
                                    h.call(k);
                                    a.yu.close()
                                }, k)
                            }
                        )(c[b])
                } else
                    this.J.innerHTML = ""
            },
            Vj: function() {
                var a = this.map
                    , b = this.J;
                a && b && (this.map.get("zoom"),
                    b = this.get("position"),
                    b = a.Gl(b),
                    a = b.y,
                    b = b.x,
                    this.J.style.right = "",
                    this.J.style.bottom = "",
                    this.J.style.left = b + "px",
                    this.J.style.top = a + "px")
            },
            kf: function() {
                this.J && (this.map.H("click", this.cfa, this),
                    this.map.Ga.C.removeChild(this.J),
                    this.yu.Hh = !1,
                    this.J = this.yu.vh.map = null,
                    this.map.H("movestart", this.ej, this),
                    this.map.H("zoomstart", this.ej, this),
                    this.map.H("click", this.ej, this),
                    this.map.H("closeOverlays", this.ej, this),
                    this.map.H("rotate", this.ej, this))
            },
            visibleChanged: function() {
                this.J && (this.get("visible") ? this.J.style.display = "block" : this.J.style.display = "none")
            },
            itemsChanged: function() {
                this.J && this.Ds()
            }
        });
        f.C.Od = f.C.Pf.extend({
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.Sd("content contentDom position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "), a);
                this.X("retainWhenClose", a, !0);
                a.X("toBeClose", this);
                this.Fh = a
            },
            HT: function(a) {
                this.s7 || (this.Le(),
                    this.Ds());
                this.bi("resolution");
                this.bi("centerCoords");
                this.bi("render");
                this.X("resolution", a);
                this.X("centerCoords", a);
                this.X("render", a);
                this.map = a;
                a.Ga.C.appendChild(this.Ib);
                this.RJ();
                this.Vj();
                this.hL();
                this.s7 = !0;
                this.k7();
                this.Oc.r("onAdd", {
                    type: "onAdd",
                    target: this.Oc
                })
            },
            Le: function() {
                var a = f.g.create("div");
                a.className = "amap-info";
                var b = f.g.create("div", a)
                    , c = f.g.create("div", a)
                    , d = f.g.create("div", c);
                a.style.position = "absolute";
                c.style.position = "absolute";
                c.style.bottom = "0px";
                c.style.left = "0px";
                b.style.position = "absolute";
                this.Ib = a;
                this.qe = c;
                this.cJ = b;
                this.bg = d;
                this.set("contentDom", this.bg, !0)
            },
            Ds: function() {
                var a = this.get("contentU");
                if (a) {
                    var b = this.get("isCustom")
                        , c = this.bg
                        , d = this.cJ;
                    c.innerHTML = "";
                    var e = null;
                    if (b) {
                        if ("string" === typeof a)
                            c.innerHTML = a;
                        else if (a instanceof Array)
                            for (e = 0; e < a.length; e += 1)
                                c.appendChild(a[e]);
                        else
                            c.appendChild(a);
                        e = c;
                        d.parentNode && d.parentNode.removeChild(d)
                    } else {
                        e = d = f.g.create("div", c, "amap-info-content amap-info-outer");
                        "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
                        this.t7 = d;
                        a = f.g.create("a", this.bg, "amap-info-close");
                        a.innerHTML = "\u00d7";
                        this.JF = a;
                        a.href = "javascript: void(0)";
                        f.l.he && (f.A.h(a, "touchstart", function(a) {
                            f.A.stop(a)
                        }, this),
                            f.A.h(a, "touchend", function(a) {
                                f.A.stop(a);
                                this.Fh.close()
                            }, this),
                            f.A.h(a, "click", function(a) {
                                f.A.stop(a);
                                this.Fh.close()
                            }, this));
                        f.l.Y || (f.A.h(a, "mousedown", function(a) {
                            f.A.stop(a)
                        }, this),
                            f.A.h(a, "click", function(a) {
                                f.A.stop(a);
                                this.Fh.close()
                            }, this));
                        if (a = this.get("size", !0))
                            0 !== a.width && (d.style.width = a.width + "px"),
                            0 !== a.height && (d.style.height = a.height + "px");
                        a = f.g.create("div", c, "amap-info-sharp");
                        a.style.height = "23px";
                        if (f.l.Lg || f.l.op)
                            a.style.marginLeft = c.childNodes[0].offsetWidth / 2 - 5;
                        this.cJ.style.display = "block"
                    }
                    f.A.ada(e)
                }
            },
            RJ: function() {
                var a = this.get("isCustom")
                    , b = this.get("showShadow");
                if (!a && b) {
                    var a = this.cJ
                        , b = f.g.av(this.bg)
                        , c = b.height - 23
                        , d = b.width;
                    if (f.l.Lg || f.l.op)
                        c = this.bg.childNodes[0].offsetHeight,
                            d = this.bg.childNodes[0].offsetWidth + 26;
                    b = "background-image:url(" + f.w.cb + (f.l.Lg ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
                    a.innerHTML = "";
                    var e = [], g;
                    g = e[1] = {};
                    g.height = 0.5 * c + 4;
                    g.width = d;
                    g.offsetX = 400;
                    g.offsetY = 16;
                    g.top = -g.height - 10 - 15;
                    g.left = 23;
                    g = e[2] = {};
                    g.height = e[1].height;
                    g.width = e[1].height;
                    g.offsetX = 1075 - g.width;
                    g.offsetY = e[1].offsetY;
                    g.top = e[1].top;
                    g.left = 23 + e[1].width;
                    g = e[3] = {};
                    g.height = 10;
                    g.width = 22;
                    g.offsetX = 30;
                    g.offsetY = 445;
                    g.top = -25;
                    g.left = 23 + (f.l.op || f.l.Lg ? 5 : 0);
                    g = e[4] = {};
                    g.height = 10;
                    g.width = d / 2 - 15 - e[3].left - e[3].width;
                    g.offsetX = 132;
                    g.offsetY = 445;
                    g.top = -25;
                    g.left = e[3].left + e[3].width;
                    g = e[5] = {};
                    g.height = 10;
                    g.width = 70;
                    g.offsetX = 80;
                    g.offsetY = 445;
                    g.top = -25;
                    g.left = e[4].left + e[4].width;
                    g = e[6] = {};
                    g.height = 10;
                    g.width = d - e[5].left - e[5].width;
                    g.offsetX = 132;
                    g.offsetY = 445;
                    g.top = -25;
                    g.left = e[5].left + e[5].width;
                    g = e[7] = {};
                    g.height = 10;
                    g.width = 30;
                    g.offsetX = 621;
                    g.offsetY = 445;
                    g.top = -25;
                    g.left = d;
                    g = e[8] = {};
                    g.height = 15;
                    g.width = 70;
                    g.offsetX = 47;
                    g.offsetY = 470;
                    g.top = -15;
                    g.left = d / 2 - 15;
                    for (c = 1; 8 >= c; c += 1)
                        d = f.g.create("div", a),
                            g = [],
                            g.push("position:absolute;"),
                            g.push(b),
                            g.push("top:" + e[c].top + "px;"),
                            g.push("left:" + e[c].left + "px;"),
                            g.push("width:" + e[c].width + "px;"),
                            g.push("height:" + e[c].height + "px;"),
                            g.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"),
                            d.style.cssText = g.join("")
                }
            },
            fja: function() {},
            Vj: function() {
                var a = this.map
                    , b = this.Ib
                    , c = this.get("position");
                if (a && b && c) {
                    b = a.Gl(c);
                    a.get("size");
                    c = f.g.av(this.bg);
                    if (f.l.Lg || f.l.op)
                        c.width = this.bg.childNodes[0].offsetWidth + 14;
                    a = this.get("offset");
                    c = this.get("isCustom") ? c.width / 2 : (c.width - 30) / 2;
                    this.Ib.style.left = Math.round(b.x - c + (a.x || 0)) + "px";
                    this.Ib.style.top = Math.round(b.y + (a.y || 0)) + "px";
                    b = this.t7;
                    if (this.JF && b.childNodes[0]) {
                        for (c = a = 0; c < b.childNodes.length; c += 1)
                            a += b.childNodes[0].clientHeight || 0;
                        a > (this.get("size").height || b.clientHeight) ? this.JF.style.right = "20px" : this.JF.style.right = "5px"
                    }
                }
            },
            vZ: function() {
                var a = new f.I(2 - this.bg.offsetWidth / 2,2 - this.bg.offsetHeight)
                    , b = this.get("offset") || new f.I(0,0);
                this.get("isCustom") || (a = a.add(new f.I(0,-23)));
                return a.add(b)
            },
            hL: function() {
                if (this.get("position") && this.get("autoMove") && this.bg) {
                    var a = this.map
                        , b = new f.sc(this.bg.offsetWidth,this.bg.offsetHeight);
                    a.Gl(this.get("position"));
                    for (var c = a.Gl(this.get("position")).add(this.vZ()), d = c.add(b.As()), e = a.get("size"), g = a.Z8(), h = 0, k = 0, l = 0; l < g.length; l += 1) {
                        var m = g[l]
                            , n = 0
                            , p = 0;
                        0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h),
                            p = m[0] - (c.y + k),
                        0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.gg() - m[1] - (d.x + h),
                            p = m[0] - (c.y + k),
                        0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.gg() - m[1] - (d.x + h),
                            p = e.eg() - m[2] - (d.y + k),
                        0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h),
                            p = e.eg() - m[2] - (d.y + k),
                        0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
                    }
                    c = c.add(new f.I(h,k));
                    d = d.add(new f.I(h,k));
                    l = g = 0;
                    0 > c.x || b.gg() > e.gg() ? g = 20 - c.x : e.gg() < d.x && (g = e.gg() - d.x - 25);
                    0 > c.y || b.eg() > e.eg() ? l = 5 - c.y : e.eg() < d.y && (l = e.eg() - d.y - 15);
                    g += h;
                    l += k;
                    (g || l) && a.O.panBy(g, l)
                }
            },
            k7: function() {
                this.get("closeWhenClickMap") && (this.map.h("clickstart", this.$N, this, !1),
                    this.map.h("clickend", this.ZN, this, !1))
            },
            $N: function() {
                this.Fh.Hh && this.Fh.getIsOpen() && (this.Fh.hB = !0)
            },
            ZN: function() {
                this.Fh.Hh && (this.Fh.hB && this.Fh.close(),
                    this.Fh.hB = !1)
            },
            kf: function() {
                this.Ib && (this.Fh.hB = !1,
                this.get("closeWhenClickMap") && (this.map.H("clickstart", this.$N, this),
                    this.map.H("clickend", this.ZN, this)),
                    this.get("retainWhenClose") ? this.map.ii.appendChild(this.Ib) : (this.Ib.parentNode === this.map.Ga.C && this.map.Ga.C.removeChild(this.Ib),
                        this.Fh.C = null),
                    this.map = null,
                    this.Fh.Hh = !1,
                    this.Oc.r("close", {
                        type: "close",
                        target: this.Oc
                    }))
            },
            kfa: function() {
                if (!this.get("isCustom"))
                    return this.bg.offsetWidth;
                for (var a = this.Rf, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b === c; )
                    a = b,
                        b = a.firstChild,
                        c = a.lastChild;
                a = f.g.Hd(a, "width");
                return a = parseInt(a.replace("px", ""), 10)
            },
            renderChanged: function() {
                this.Vj()
            },
            positionChanged: function() {
                this.map && this.Ib && (this.Vj(),
                    this.hL())
            },
            offsetChanged: function() {
                this.positionChanged()
            },
            contentChanged: function() {
                this.Ds();
                this.RJ();
                this.Vj()
            },
            sizeChanged: function() {
                this.Ds();
                this.RJ();
                this.Vj()
            }
        });
        f.ka = {};
        f.ka.$n = f.Z.extend({
            ea: [f.ia, f.be],
            B: function() {},
            Db: function() {
                return new this.B(this.Na)
            },
            EG: function() {
                return this.Na
            },
            setCoords: function(a) {
                this.yca(a)
            },
            yca: function(a) {
                this.Ap = this.Gc();
                this.Ke = null;
                if (f.ka.Rb && this instanceof f.ka.Rb) {
                    var b = a.length;
                    this.kg = Array(b);
                    for (var c, d, e = 0; e < b; e += 1)
                        if (c = a[e],
                            d = new f.ka.AK(c),
                            this.kg[e] = d,
                        0 === e) {
                            if (0 === c.length)
                                break;
                            d.nn(c) || c.reverse()
                        } else
                            0 !== c.length && d.nn(c) && c.reverse()
                } else
                    this.Na = a
            }
        });
        f.ka.zd = f.extend({}, {
            iq: "point",
            LB: "linestring",
            yK: "linearring",
            Nw: "polygon",
            SB: "multipoint",
            RB: "multilinestring",
            Lw: "multipolygon",
            Iea: "geometrycollection"
        });
        f.mf = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a) {
                a = a || {};
                a.Gt && (this.Gt = a.Gt);
                a.yD && (this.yD = a.yD);
                a.nN && (this.nN = a.nN);
                this.map = a.map;
                this.rk = a.aD || f.a.Fb(this);
                this.name = a.name || "";
                this.dg = !1;
                this.set("visible", !0, !0);
                this.XI(a.Da);
                this.Zh = a.dB;
                this.style = a.style
            },
            V7: function() {
                this.style = this.Zh = this.Dm = this.fT = this.Da = this.name = this.map = null;
                this.Rn();
                this.sj()
            },
            I9: function() {
                return this.Zh
            },
            Jca: function(a) {
                this.Zh = a;
                this.zIndex = this.Zh[0].rh || this.zIndex
            },
            Iga: function() {
                return this.Da
            },
            XI: function(a) {
                a && (this.Da = a,
                    this.X("coords", a, !0),
                this.Gt || this.yD) && (a.X("radius", this),
                    a.X("center", this),
                    a.X("resolution", this),
                    a.X("strokeWeight", this))
            },
            setStyle: function(a) {
                this.Jca(a);
                this.$m()
            },
            coordsChanged: function() {
                this.$m()
            },
            radiusChanged: function() {
                this.Da.Ap = this.Da.Gc();
                this.Da.Ke = null;
                this.$m()
            },
            $m: function(a) {
                this.set("feature", {
                    target: this,
                    R7: a,
                    Ap: this.Da.Ap || this.Da.Gc(),
                    faa: this.Da.Gc()
                });
                this.Da.Ap = this.Da.Gc()
            },
            visibleChanged: function() {
                this.$m()
            },
            Vga: function(a) {
                for (var b = 0; b < this.Zh.length; b += 1) {
                    var c = this.Zh[b];
                    if (a.yb(c.jr(this)))
                        return c
                }
            },
            h9: function() {
                var a = this.Da
                    , b = [];
                a.fg() === f.ka.zd.Nw || a.fg() === f.ka.zd.Lw ? b.push(new f.style.ld.Rb({
                    fillColor: "#78cdd1",
                    $c: 0.2,
                    strokeColor: "#122e29",
                    Va: 0.5,
                    Qb: 1
                })) : a.fg() === f.ka.zd.LB || a.fg() === f.ka.zd.yK || a.fg() === f.ka.zd.RB ? b.push(new f.style.ld.zK({
                    color: "#888888",
                    width: 1,
                    zIndex: 10
                })) : a.fg() !== f.ka.zd.iq && a.fg() !== f.ka.zd.SB || b.push(new f.style.ld.Ue({
                    url: f.w.cb + "/theme/v1.3/markers/0.png",
                    width: 36,
                    height: 36,
                    rotation: 0,
                    xja: -12,
                    yja: -36,
                    zIndex: 100
                }));
                return b
            }
        });
        f.mf.Eea = "geometry";
        f.ka.Ve = f.ka.$n.extend({
            B: function(a, b) {
                this.Na = a;
                this.Mg = b;
                this.Ke = null
            },
            Gc: function() {
                if (!this.Ke) {
                    var a = this.Na[0]
                        , b = this.Na[1];
                    if (this.Mg)
                        this.Ke = [a, b, a, b];
                    else {
                        var c = this.get("radius")
                            , d = this.get("resolution") * this.get("strokeWeight") || 0
                            , c = c ? c / Math.cos(Math.PI * this.get("center").N / 180) : 0;
                        this.Ke = [a - c - d, b - c - d, a + c + d, b + c + d]
                    }
                }
                return this.Ke
            },
            fg: function() {
                return f.ka.zd.iq
            }
        });
        f.R = {
            canvas: {},
            hd: {},
            Fe: {},
            ud: {}
        };
        f.R.hc = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a, b) {
                this.q = a;
                this.Mg = a.qa.Mg;
                this.T = b;
                this.j = b.j;
                this.X("display", b)
            },
            or: function() {
                this.Wr && this.Wr();
                this.Rn();
                this.j = this.T = this.q = null
            },
            ep: function(a, b) {
                var c = this.zoom
                    , d = []
                    , e = this.q;
                if (Math.floor(c) !== c)
                    b(d, e);
                else {
                    c = [a.x, a.y];
                    if (e.Bj) {
                        for (var g = e.Qe, h = !0, k = [], l = 0; l < g.length; l += 1) {
                            var m = g[l].cg;
                            if (m)
                                if (m.parentNode && m.parentNode.parentNode && this.T && m.parentNode.parentNode !== this.T.ii && "none" !== m.parentNode.style.display) {
                                    var n = f.g.Bz(m)
                                        , m = n[0]
                                        , n = n[1];
                                    if (m && n) {
                                        var p = Math.max(Math.abs(g[l].get("offset").x), Math.abs(g[l].get("offset").y)) + Math.max(m, n);
                                        e.Re = Math.max(e.Re, p);
                                        e.Ef = Math.max(e.Ef, p);
                                        g[l].width = m;
                                        g[l].height = n
                                    } else
                                        h = !1,
                                            k.push(g[l])
                                } else
                                    h = !1,
                                        k.push(g[l])
                        }
                        h ? (e.Bj = !1,
                            e.Qe = []) : e.Qe = k
                    }
                    g = Math.max(e.Re, e.Tr || 0) * this.Q;
                    h = Math.max(e.Ef, e.Tr || 0) * this.Q;
                    k = 0;
                    e.Sr && (k = e.Sr / Math.cos(Math.PI * this.j.get("center").N / 180));
                    h = Math.max(h, k || 0);
                    g = Math.max(g, k || 0);
                    if (g = e.Ig([c[0] - g, c[1] - h, c[0] + g, c[1] + h])) {
                        for (var q in g)
                            if (g.hasOwnProperty(q) && (h = g[q],
                            h.get("visible") && !h.get("noSelect")))
                                if (l = h.Da,
                                l instanceof f.ka.Ve)
                                    if (this.Mg) {
                                        k = this.q.Mi;
                                        k instanceof Array && (k = "number" === typeof h.Qa.style && k[h.Qa.style] ? k[h.Qa.style] : k[0]);
                                        var n = k.size.width * this.Q
                                            , p = k.size.height * this.Q
                                            , r = k.anchor.x * this.Q
                                            , t = k.anchor.y * this.Q
                                            , n = f.F.vF([[c[0] - n + r, c[1] - p + t], [c[0] + r, c[1] + t]]);
                                        f.F.Tc(n, l.Na) && d.push(h)
                                    } else if ("undefined" !== typeof l.get("radius"))
                                        k = l.Na,
                                            k = new f.I(k[0],k[1]),
                                            m = new f.I(c[0],c[1]),
                                            l = l.get("radius"),
                                        m.Eg(k) * Math.cos(h.get("center").N * Math.PI / 180) <= l / this.Ml * Math.pow(2, 20 - this.zoom) && d.push(h);
                                    else {
                                        if (k = h.get("params"),
                                            k.visible) {
                                            l = l.Na;
                                            r = k.Ny % 360;
                                            m = [c[0], c[1]];
                                            if (r) {
                                                var n = (c[0] - l[0]) / this.Q
                                                    , p = (c[1] - l[1]) / this.Q
                                                    , t = Math.PI * r / 180
                                                    , r = Math.cos(-t)
                                                    , t = Math.sin(-t)
                                                    , u = n * t + p * r;
                                                m[0] = l[0] + (n * r - p * t) * this.Q;
                                                m[1] = l[1] + u * this.Q
                                            }
                                            n = h.width * this.Q;
                                            p = h.height * this.Q;
                                            r = k.offset.x * this.Q;
                                            t = k.offset.y * this.Q;
                                            n = f.F.vF([[m[0] - n - r, m[1] - p - t], [m[0] - r, m[1] - t]]);
                                            l[0]instanceof Array || (l = [l]);
                                            for (p = l.length - 1; 0 <= p; p -= 1)
                                                if (f.F.Tc(n, l[p])) {
                                                    k.shape ? this.pv(h, m, l) && d.push(h) : d.push(h);
                                                    break
                                                }
                                        }
                                    }
                                else
                                    l.Tc ? l.Tc(c) && d.push(h) : l.qr && 1.8 * l.qr(c) <= h.get("strokeWeight") * this.Q && d.push(h);
                        this.Mg ? d.sort(function(a, b) {
                            return a.rk > b.rk ? -1 : 1
                        }) : d.sort(function(a, b) {
                            return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.rk > b.rk ? -1 : 1
                        });
                        b(d, e)
                    } else
                        b([], e)
                }
            },
            pv: function(a, b, c) {
                var d = (b[0] - c[0][0]) / this.Q;
                b = (b[1] - c[0][1]) / this.Q;
                a = a.get("params");
                c = a.offset;
                var d = [d - c.x, b - c.y], e;
                a = a.shape;
                if ("circle" === a.G.type) {
                    if (b = a.G.coords[0],
                        c = a.G.coords[1],
                    Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.G.coords[2])
                        return !0
                } else {
                    if ("poly" === a.G.type)
                        return e = a.G.coords,
                            e = this.bz(e),
                            f.zc.Tc(d, e);
                    if ("rect" === a.G.type)
                        return e = a.G.coords,
                            a = e[0],
                            b = e[1],
                            c = e[2],
                            e = e[3],
                            e = [[a, b], [c, b], [c, e], [a, e]],
                            f.zc.Tc(d, e)
                }
                return !1
            },
            bz: function(a) {
                for (var b = [], c = 0; c / 2 < a.length / 2; c += 2)
                    b.push([a[c], a[c + 1]]);
                return b
            },
            LR: function(a, b, c, d, e, g, h) {
                var k = ["position:absolute;"];
                k.push("top:" + Math.round(c) + "px;");
                k.push("left:" + Math.round(b) + "px;");
                k.push("width:" + Math.round(d) + "px;");
                k.push("height:" + Math.round(e) + "px;");
                1 > g && ("opacity"in a.style ? (k.push("opacity"),
                    k.push(":"),
                    k.push(g),
                    k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="),
                    k.push(Math.ceil(100 * g)),
                    k.push(")';")) : (k.push("filter:alpha(opacity="),
                    k.push(Math.ceil(100 * g)),
                    k.push(");")));
                k.push("z-index:" + h + ";");
                f.g.gV(a, k.join(""))
            }
        });
        f.R.Tb = f.Z.extend({
            ea: [f.ia, f.be],
            B: function(a) {
                this.j = a;
                this.ii = a.ii;
                this.J = a.Ga.D;
                this.X("display", a);
                this.X("rotateEnable", a);
                this.X("style", a);
                this.X("hightlight", a)
            },
            YH: function(a) {
                this.nd = a || f.a.Ho("ff" + this.j.nd.slice(1))
            },
            ep: function(a, b, c, d) {
                function e(a, d) {
                    a.length && (h[f.a.indexOf(b, d)] = a);
                    k -= 1;
                    0 >= k && (c(h),
                        k = 0)
                }
                for (var g = b.length, h = [], k = 0, l, m = [], n = 0; n < g; n += 1)
                    l = b[n],
                    l instanceof f.D.kc && l.get("visible") && (m.push(this.hp(l)),
                        k += 1);
                for (g = 0; g < m.length; g += 1)
                    m[g].ep(a, e, d)
            }
        });
        f.aR = {
            xf: function(a, b) {
                for (var c = [], d = 0, e = a.length; d < e; d += 2) {
                    var g = 0
                        , g = "str" === b ? f.a.df(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : f.a.df(parseInt(a.substr(d, 2), 16) / 255, 3);
                    c.push(g)
                }
                c.push(c.shift());
                return "str" === b ? "rgba(" + c.join(",") + ")" : c
            },
            Taa: function(a, b, c) {
                if (b[c])
                    console.log("customType repeat!!", c);
                else {
                    var d = {};
                    d.visible = void 0 === a.visible ? !0 : a.visible;
                    d.Qca = void 0 === a.showLabel ? !0 : a.showLabel;
                    d.Ok = void 0 === a.showIcon ? !0 : a.showIcon;
                    if (void 0 !== a.color) {
                        var e = ""
                            , g = "";
                        a.color && (e = this.xf(a.color, "str"),
                            g = this.xf(a.color));
                        d.color = {
                            canvas: e,
                            Fe: g
                        }
                    } else
                        d.opacity = a.opacity;
                    void 0 !== a.fillColor ? (g = e = "",
                    a.fillColor && (e = this.xf(a.fillColor, "str"),
                        g = this.xf(a.fillColor)),
                        d.fillColor = {
                            canvas: e,
                            Fe: g
                        }) : d.$c = a.fillOpacity;
                    void 0 !== a.strokeColor ? (g = e = "",
                    a.strokeColor && (e = this.xf(a.strokeColor, "str"),
                        g = this.xf(a.strokeColor)),
                        d.strokeColor = {
                            canvas: e,
                            Fe: g
                        }) : d.Va = a.strokeOpacity;
                    void 0 !== a.textFillColor ? (g = e = "",
                    a.textFillColor && (e = this.xf(a.textFillColor, "str"),
                        g = this.xf(a.textFillColor)),
                        d.jda = {
                            canvas: e,
                            Fe: g
                        }) : d.kda = a.textFillOpacity;
                    void 0 !== a.textStrokeColor ? (g = e = "",
                    a.textStrokeColor && (e = this.xf(a.textStrokeColor, "str"),
                        g = this.xf(a.textStrokeColor)),
                        d.lda = {
                            canvas: e,
                            Fe: g
                        }) : d.mda = a.textStrokeOpacity;
                    void 0 !== a.backgroundColor ? (g = e = "",
                    a.backgroundColor && (e = this.xf(a.backgroundColor, "str"),
                        g = this.xf(a.backgroundColor)),
                        d.backgroundColor = {
                            canvas: e,
                            Fe: g
                        }) : d.p6 = a.backgroundOpacity;
                    a.texture && (d.qc = f.w.bc + "://" + a.texture);
                    b[c] = d
                }
            },
            $T: function(a, b, c) {
                if (a)
                    for (var d in a)
                        if (a.hasOwnProperty(d)) {
                            var e = a[d]
                                , g = d;
                            c && (g = c + ":" + d);
                            e.subType ? this.$T(e.subType, b, g) : this.Taa(e, b, g)
                        }
            },
            styleChanged: function() {
                if (this.j.O.ih) {
                    var a = {};
                    this.$T(this.j.get("style"), a);
                    this.Iu = a;
                    var a = this.Iu["regions:land"], b = this.Iu.water, c = this.Iu.sky, d, e, g;
                    if (a) {
                        var h = "";
                        if (a.visible) {
                            var k = this.dp(f.a.TU(this.j.nd.substr(1)), a.opacity, a.color);
                            k && (h = k,
                                d = this.yr(f.a.ms(this.j.nd.substr(1)), a.opacity, a.color))
                        }
                        this.j.lz = h
                    }
                    b && b.visible && (e = this.yr(f.a.ms(this.j.Gy.substr(1)), b.opacity, b.color));
                    c && c.visible && (g = this.yr(f.a.ms(this.j.hu.substr(1)), void 0, c.color));
                    this.YH && this.YH(d, e, g);
                    this.jW ? this.jW(this.Iu) : this.set("display")
                }
            },
            dp: function(a, b, c) {
                if (a) {
                    if (void 0 !== b)
                        return a = a.split(","),
                            a[3] = f.a.df(parseFloat(b), 3) + ")",
                            a.join(",");
                    if (c)
                        return c.canvas
                }
                return a
            },
            yr: function(a, b, c) {
                if (a) {
                    if (void 0 !== b)
                        return [a[0], a[1], a[2], f.a.df(parseFloat(b), 3)];
                    if (c)
                        return c.Fe
                }
                return a
            },
            Hz: function(a) {
                return this.Iu[a]
            },
            wi: function(a, b, c, d) {
                var e = null
                    , g = a;
                d = d ? this.dp : this.yr;
                if (e = this.Hz(b))
                    if (e.visible) {
                        var g = 1
                            , h = "";
                        if (c)
                            if (e.fillColor || e.$c)
                                g = e.$c,
                                    h = e.fillColor;
                            else {
                                if (e.color || e.opacity)
                                    g = e.opacity,
                                        h = e.color
                            }
                        else if (e.strokeColor || e.Va)
                            g = e.Va,
                                h = e.strokeColor;
                        else if (e.color || e.opacity)
                            g = e.opacity,
                                h = e.color;
                        g = d(a, g, h)
                    } else
                        g = "";
                this.Gr === b && (g = this.gp(g || a));
                return g
            },
            fn: function(a, b, c) {
                c = c ? this.dp : this.yr;
                var d = null
                    , e = a;
                (d = this.Hz(b)) && (e = d.visible ? c(a, d.opacity, d.color) : "");
                this.Gr === b && (e = this.gp(e || a));
                return e
            },
            xr: function(a, b, c, d) {
                var e = a
                    , g = b
                    , h = c
                    , k = !0
                    , l = !0
                    , m = 1
                    , n = this.Hz(d);
                n && (n.visible && n.Qca ? (e = this.dp(a, n.kda, n.jda),
                    g = this.dp(b, n.mda, n.lda),
                    h = this.dp(c, n.p6, n.backgroundColor),
                    k = n.Ok) : (l = k = !1,
                    e = g = h = ""));
                this.Gr === d && (e = this.gp(e || a),
                    g = this.gp(g || b),
                    h = this.gp(h || c),
                    m = 1 - 1.6 * this.Fr,
                    l = k = !0);
                return [e, g, h, k, l, m]
            },
            ap: function(a, b, c, d) {
                var e = null
                    , g = a
                    , h = b;
                d = d ? this.dp : this.yr;
                if (e = this.Hz(c))
                    e.visible ? (g = d(a, e.$c, e.fillColor),
                        h = d(b, e.Va, e.strokeColor)) : g = h = "";
                this.Gr === c && (b = h || b,
                    g = this.gp(g || a),
                    h = this.gp(b));
                return [g, h]
            }
        };
        f.R.Tb.fb(f.aR);
        f.R.canvas.Tb = f.R.Tb.extend({
            B: function(a) {
                arguments.callee.oa.apply(this, arguments);
                this.type = "2D"
            },
            hp: function(a) {
                if (!a.R) {
                    var b = a.wj(this);
                    b && !b.A7 && (a.R = b)
                }
                return a.R
            },
            Xb: function(a) {
                var b = this.j.lz || this.j.nd;
                this.EI !== b && this.j.O.ih && (this.j.fV(b),
                    this.EI = b);
                this.j.Ga.Nm.style.cssText = "";
                for (var c = a.Wa, b = a.U, d = a.size.width, e = a.size.height, g = 0; g < c.length; g += 1) {
                    var h = c[g]
                        , k = this.hp(h)
                        , l = c[g].Al();
                    if (k && k.q)
                        if (!l.visible || l.Xc[0] > b.zoom || l.Xc[1] < b.zoom || h.ty || h.Oa && 0 === h.Oa.length) {
                            if (k = k.Jg())
                                if (k.length)
                                    for (l = 0; l < k.length; l += 1)
                                        k[l].parentNode === this.J && this.J.removeChild(k[l]);
                                else
                                    k.parentNode === this.J && this.J.removeChild(k)
                        } else {
                            k.Xb(a, l);
                            var h = k.Jg(), m, n, p = k.transform;
                            if (!p || !h || k.qn && !this.j.O.ya)
                                c[g].Fi && (h.parentNode !== this.J || f.l.dh) && (this.J.appendChild(h),
                                    c[g].ob = h);
                            else {
                                c[g].ob = h;
                                h.length || (h = [h],
                                    p = [p]);
                                for (var q = 0; q < h.length; q += 1) {
                                    m = h[q];
                                    n = p[q];
                                    var r = n.translate.x
                                        , t = n.translate.y;
                                    c[g].Yz || (r = f.a.df(r, 2),
                                        t = f.a.df(t, 2));
                                    var u = n.scale;
                                    1E-5 > Math.abs(r) && (r = 0);
                                    1E-5 > Math.abs(t) && (t = 0);
                                    var x = [];
                                    x.push("position:absolute");
                                    x.push("z-index:" + (n.rh || c[g].get("zIndex")));
                                    c[g].Lu ? (x.push("top:" + Math.floor(e / 2 + t) + "px"),
                                        x.push("left:" + Math.floor(d / 2 + r) + "px")) : m.RS ? (x.push("height:" + m.height * u + "px"),
                                        x.push("width:" + m.width * u + "px"),
                                        x.push("top:" + (e / 2 - t * u) + "px"),
                                        x.push("left:" + (d / 2 - r * u) + "px")) : (1 !== u && (x.push(f.g.Pn[f.g.He] + "-origin:" + r + "px " + t + "px"),
                                        x.push(f.g.Pn[f.g.He] + ":scale3d(" + u + "," + u + ",1)")),
                                        x.push("top:" + Math.floor(e / 2 - t) + "px"),
                                        x.push("left:" + Math.floor(d / 2 - r) + "px"),
                                    k.Qh && (x.push("height:" + m.height + "px"),
                                        x.push("width:" + m.width + "px")));
                                    k.Yz || 1 === l.opacity || "number" !== typeof l.opacity || x.push(f.g.SR(m, l.opacity));
                                    (m.parentNode !== this.J || f.l.dh) && this.J.appendChild(m);
                                    f.g.gV(m, x.join(";"))
                                }
                            }
                        }
                }
                a = this.j.Ga.Nm;
                h = this.j.Ga.D;
                c = this.j.Ga.C;
                f.g.He && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[f.g.He + "Origin"] = d / 2 + "px " + e / 2 + "px",
                    a.style[f.g.He] = "rotate(" + b.rotation + "deg)",
                    a.style.overflow = "visible",
                    h.style.overflow = "visible",
                    c.style.overflow = "visible") : (a.style.cssText = "",
                    h.style.cssText = "-webkit-transform: translateZ(0);",
                    c.style.cssText = "");
                this.j.Op = !1
            }
        });
        f.R.th = f.R.hc.extend({
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.X("reload", a, !0);
                var c = a.qa.get("cacheSize");
                if (this.j && this.j.O) {
                    var d = this.j.O.get("tileCacheSize");
                    d && 0 < d && (c = d)
                }
                this.Ba = new f.le(c);
                var e = this;
                this.Ba.ZH.bQ(function(a) {
                    e.pt(a)
                });
                this.Vb = 1;
                this.Xk = 50;
                this.jL = !0;
                this.q.Ba = this.Ba;
                this.Ei = new f.Jw(6,null,a.nG);
                new f.Jw(5,null,a.nG)
            },
            Wr: function() {
                this.clear();
                this.Ba.clear();
                this.Yb && (this.Yb.H("tiles", this.LT, this),
                    this.Yb.H("ack", this.KT, this),
                    this.Yb.H("disable", this.JT, this),
                    this.Yb = null);
                this.Qh && f.A.H(this.sa, "webglcontextlost", this.Iv, this);
                this.j.H("zoomend", this.Lh, this);
                this.j.H("moveend", this.Lh, this)
            },
            reloadChanged: function() {
                this.q && (this.q.ya = !1);
                this.Ba.clear();
                this.reload = !0;
                this.set("display")
            },
            xn: function(a, b, c) {
                function d(b) {
                    a.loaded = !0;
                    e.q && (a.status = "loaded",
                        a.za = !0,
                        a.mc = b,
                        e.set("display", 0),
                    "function" === typeof c && c())
                }
                var e = this;
                a.status = "loading";
                e.Ba.set(a.key, a);
                this.q.lr && this.q.lr.call(this, a, d, function() {
                    a.loaded = !0;
                    e.q && (a.status = "loaded",
                        a.za = !0,
                    "function" === typeof c && c())
                })
            },
            YV: function(a, b, c, d) {
                var e = [];
                c = c || 18;
                b = Math.pow(2, b - c);
                for (var g = 0; g < a.length; g += 1) {
                    var h = a[g].ja
                        , k = Math.floor(h.x / b)
                        , h = Math.floor(h.y / b);
                    d ? (k = c + "/" + k + "/" + h,
                        h = this.Ba.get(k)) : (h = new f.di(c,k,h),
                        k = h + "",
                        h = new f.nb(h));
                    !e[k] && h && (e.push(h),
                        e[k] = 1)
                }
                return e
            },
            Il: function(a) {
                for (var b = a.length - 1; 0 <= b; b -= 1) {
                    var c = a[b];
                    if (c.length)
                        if (this.Ng) {
                            if (this.j.uw)
                                break;
                            var d = c[0].ja.z;
                            18 < d && (c = this.YV(c, d));
                            this.Pp(c, this.Qh ? 1 : 0);
                            for (var e = 0, g = 0; e < c.length; )
                                this.IH(c.slice(50 * g, 50 * g + 50), d),
                                    e += 50,
                                    g += 1
                        } else {
                            var h = this
                                , d = function() {
                                var a = c.length;
                                return function() {
                                    if (0 === --a) {
                                        var b = {
                                            id: h.j.O.id,
                                            key: "rb",
                                            index: 0
                                        };
                                        f.md.Fd.end(b);
                                        f.md.Fd.end(f.extend(b, {
                                            index: 1
                                        }))
                                    }
                                }
                            }();
                            this.Pp(c);
                            this.Jl += c.length;
                            for (e = c.length - 1; 0 <= e; e -= 1)
                                this.xn(c[e], this.Ei, d)
                        }
                }
            },
            jn: function(a, b) {
                var c = this.Ba.get(a + "");
                c || b || (c = new f.nb(a.Db()));
                return c
            },
            ts: function(a, b) {
                return this.dd * Math.pow(2, a - b)
            },
            pt: function(a) {
                a.sn && this.Ei.EQ(a.sn);
                a.IA = !1;
                a.loaded = !1
            },
            Mo: function(a, b) {
                var c = this.kb
                    , d = a.tc.x
                    , e = a.tc.y
                    , g = a.qb.x
                    , h = a.qb.y;
                new f.I(0,0);
                var k = this.ts(20, c);
                b && (g = Math.max(b[0], g) - b[0],
                    h = Math.max(b[1], h) - b[1],
                    d = Math.min(b[2], d) - b[0],
                    e = Math.min(b[3], e) - b[1],
                    new f.I(Math.floor(b[0] / k),Math.floor(b[1] / k)));
                d /= k;
                e /= k;
                d = {
                    Jd: 0 === d % 1 ? d - 1 : Math.floor(d),
                    vd: 0 === e % 1 ? e - 1 : Math.floor(e),
                    fe: Math.floor(g / k),
                    wd: Math.floor(h / k)
                };
                d.DI = d.Jd - d.fe + 1;
                d.sU = d.vd - d.wd + 1;
                d.z = c;
                d.Q = this.Q * Math.pow(2, this.zoom - c);
                d.ZG = Math.ceil(d.DI / 2);
                return d
            },
            pp: function(a, b, c) {
                return b < a.fe || b > a.Jd || c < a.wd || c > a.vd ? !1 : !0
            },
            Pp: function(a, b) {
                if (a.length) {
                    var c = this.Ua.ec(this.dd << 20 - a[0].ja.z)
                        , d = Math.floor(c.x)
                        , e = Math.floor(c.y);
                    a.sort(function(a, c) {
                        var k = a.ja
                            , l = c.ja
                            , m = k.x - d
                            , k = k.y - e
                            , n = l.x - d
                            , l = l.y - e;
                        return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
                    })
                }
            },
            clear: function() {
                this.Ei.clear()
            },
            Jk: function(a, b) {
                this.vf = !1;
                this.clear();
                this.ah = b.ah;
                this.$g = b.$g;
                this.dd = b.dd;
                var c = a.U;
                this.$d = b.$d || a.U.$d;
                this.zg = c.zg;
                this.size = a.size;
                this.rotation = c.rotation;
                this.Ua = c.Ua;
                this.pa = a.U.pa;
                this.zoom && (this.qA = c.zoom > this.zoom ? "in" : c.zoom < this.zoom ? "out" : !1);
                this.ke = a.ke;
                this.Pe = a.Pe;
                this.zoom = c.zoom;
                this.vc = c.vc;
                this.kb = !1 === this.Ng && !this.q.xS && this.q.ga ? this.vc + 1 : this.vc;
                this.Wd && this.kb > this.Wd && (this.kb = this.Wd);
                this.Q = c.Q;
                this.Xd = c.Xd;
                c = a.U.pa;
                this.Ae = this.Mo(c, b.F);
                this.Qk = c.CB ? this.Mo(c.CB, b.F) : null;
                var d = this.Ae, e = this.pa.pJ, g = null, g = e < this.zoom && this.Qk ? this.Qk : d, h = [], k = [], l, m = [], n = [], p = [], q = new f.di(0,0,0), r, t = this.zoom, n = this.pm || "", u = {}, x = {}, v, s, A, y, z, X;
                this.rc = 1E6 * Math.random() << 0;
                for (r = n.length - 1; 0 <= r; r -= 1)
                    if (l = n[r],
                        !(l.nq < b.opacity))
                        if (q.z = l.ja.z,
                            q.x = l.ja.x,
                            q.y = l.ja.y,
                        q.z === this.kb)
                            u[q + ""] |= 16;
                        else if (q.z < this.kb) {
                            if (u[q + ""] |= 64,
                                this.ah)
                                for (y = this.kb - q.z,
                                         v = Math.max(d.fe, q.x << y),
                                         t = Math.min(d.Jd, (q.x + 1 << y) - 1),
                                         s = Math.max(d.wd, q.y << y),
                                         A = Math.min(d.vd, (q.y + 1 << y) - 1),
                                         q.z = this.kb,
                                         y = v; y <= t; y += 1)
                                    for (q.x = y,
                                             z = s; z <= A; z += 1)
                                        q.y = z,
                                            X = q + "",
                                            u[X] |= 32,
                                            x[X] = x[X] ? Math.max(l.ja.z, x[X]) : l.ja.z
                        } else if (this.$g)
                            for (v = 1; q.z >= this.kb; ) {
                                u[q + ""] |= v;
                                v = q.x >> 1;
                                s = q.y >> 1;
                                t = v << 1;
                                A = s << 1;
                                l = 0;
                                for (y = 2; 0 < y; y -= 1)
                                    for (q.x = t + y,
                                             z = 2; 0 < z; z -= 1)
                                        q.y = A + z,
                                        u[q + ""] & 5 && (l += 1);
                                q.z -= 1;
                                q.x = v;
                                q.y = s;
                                v = 4 === l ? 4 : 2
                            }
                n = [];
                q.z = this.kb;
                r = !0;
                this.Ba.LQ();
                for (y = g.fe; y <= g.Jd; y += 1)
                    for (q.x = y,
                             z = g.wd; z <= g.vd; z += 1)
                        q.y = z,
                            this.Ba.kT("" + q),
                            l = this.jn(q),
                            v = !1,
                            l.za ? (l.rc = this.rc,
                            this.pp(d, y, z) && (n.push(l),
                            this.gi && (l.Vb !== this.Vb || 1 > l.nq) && (v = !0))) : (r = !1,
                            this.pp(d, y, z) && (v = !0),
                            l.status || this.vc !== e || this.Qk && !this.pp(this.Qk, y, z) || m.push(l)),
                        v && p.push(l);
                r ? (this.Tu || (this.Tu = !0),
                this.q.ya || (l = {
                    key: "rb",
                    index: 1,
                    id: this.j.O.id
                },
                this.q.qn && (l.key = "rl"),
                    f.md.Fd.end(l),
                    f.md.Fd.push({
                        key: "ftc",
                        fm: n.length,
                        id: this.j.O.id
                    }))) : this.q.ya = !1;
                this.vf = r;
                n.length && this.Tu && (h.push(n),
                    n.vf = r);
                k.push(m);
                e = !1;
                if (this.$g) {
                    p = p.slice(0);
                    g = [];
                    for (r = p.length - 1; 0 <= r; r -= 1)
                        l = p[r],
                        u[l.key] & 4 || g.push(l);
                    l = b.Xc[1];
                    for (t = this.kb + 1; p.length && t <= l; t += 1) {
                        n = [];
                        m = p;
                        p = [];
                        q.z = t;
                        for (r = m.length - 1; 0 <= r; r -= 1)
                            if (y = m[r],
                                v = u[y.key],
                            v & 7)
                                for (v = y.ja.x << 1,
                                         s = y.ja.y << 1,
                                         y = 1; 0 <= y; y -= 1)
                                    for (q.x = v + y,
                                             z = 1; 0 <= z; z -= 1)
                                        q.y = s + z,
                                            X = q + "",
                                            A = this.Ba.Fn(X),
                                            u[X] & 5 && A && A.za ? (A.Rt = !0,
                                                A.rc = this.rc,
                                                n.push(A)) : p.push(new f.nb(q.Db(),""));
                        n.length && (e = !0,
                            h.push(n))
                    }
                    p = g
                }
                if (!e && this.ah)
                    for (y = !h.length || this.Qh ? b.Xc[0] : Math.max(b.Xc[0], this.kb - 2),
                             Math.max(y, this.kb - this.j1),
                             t = this.kb - 1; p.length && t >= y; t -= 1) {
                        n = [];
                        z = {};
                        m = p;
                        p = [];
                        for (r = m.length - 1; 0 <= r; r -= 1)
                            l = m[r],
                                q.z = t,
                                q.x = l.ja.x >> 1,
                                q.y = l.ja.y >> 1,
                                l = this.jn(q),
                            z[l.key] || (z[l.key] = 1,
                                v = !1,
                                l.za && (!this.r3 || u[l.key] & 64) ? (q.x = Math.min(d.Jd, Math.max(d.fe, q.x << this.kb - t)),
                                    q.y = Math.min(d.vd, Math.max(d.wd, q.y << this.kb - t)),
                                    q.z = this.kb,
                                    X = q + "",
                                    "number" === typeof x[X] && l.ja.z > x[X] ? v = !0 : l.Rt = !0,
                                    l.rc = this.rc,
                                    n.push(l)) : v = !0,
                            v && p.push(l));
                        n.length && h.push(n)
                    }
                this.wp = this.Jl = 0;
                this.Il(k, c);
                this.$h = h;
                this.q.set("tiles", h)
            },
            pba: function() {
                if (!this.Ng) {
                    for (var a = this.Ae.Jd + 1, b = this.Ae.vd + 1, c = this.Ae.fe - 1, d = this.Ae.wd - 1, e, g = [], h = c; h <= a; h += 1)
                        for (var k = d; k <= b; k += 1)
                            if (h === c || h === a || k === d || k === b)
                                e = new f.di(this.vc,h,k),
                                this.Ba.Fn(void 0) || (e = this.jn(e),
                                    g.push(e));
                    this.Il([g])
                }
            }
        });
        f.R.hd.th = f.R.th.extend({
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.Xk = 120;
                this.Ng = !1;
                this.Le();
                this.Wd = a.Wd
            },
            Jg: function() {
                return this.ob
            },
            Le: function() {
                this.ob = document.createElement("div");
                this.ob.className = this.q.qa.get("className") || "amap-layer";
                this.Zo = document.createDocumentFragment()
            },
            Jp: function(a) {
                var b = Math.pow(2, a.U.zoom - this.Ld)
                    , c = a.U.Ua.Sa(this.tn).ec(this.mh);
                this.transform = {
                    translate: this.transform.translate.add(c),
                    scale: b,
                    rotate: 0
                };
                this.Ua = a.U.Ua
            },
            sF: function(a, b) {
                if (!this.la || 3E4 < Math.abs(this.Ua.x - this.la.x) / this.Q || 3E4 < Math.abs(this.Ua.y - this.la.y) / this.Q)
                    this.la = this.Ua;
                this.Ld = this.vc;
                this.mh = this.Xd;
                this.lh = !1;
                this.currentTime = +new Date;
                this.TJ = b.TJ;
                var c = this.Ae;
                this.gi = this.Xk && b.Vy;
                var d = this.$h
                    , e = 256 * c.DI
                    , c = 256 * c.sU;
                this.ke = this.zoom << 0 !== this.zoom;
                var g = this.Ua.Sa(this.la);
                g.x < -f.a.Ya / 2 && (g.x += f.a.Ya);
                g.x > f.a.Ya / 2 && (g.x -= f.a.Ya);
                this.DF = g.ec(this.Xd);
                return [d, e, c, b]
            },
            js: function(a, b) {
                var c = this.sF(a, b);
                this.Kn.apply(this, c);
                this.Ed(a);
                this.vf && !this.q.ya && (c = this.q,
                    f.md.Fd.end({
                        id: this.j.O.id,
                        key: "rb",
                        index: 2
                    }),
                    c.ya = !0,
                    c.Fc ? c.da("renderComplete") : (c.Fc = !0,
                        c.da("complete")))
            },
            Xb: function(a, b) {
                this.Ti = a.Ti;
                this.Pe = a.Pe;
                this.Jk(a, b);
                this.tn && f.l.dh && (a.ke || a.Pe) ? this.Jp(a, b) : this.js(a, b);
                this.tn = this.Ua;
                this.lh && this.set("display", 0)
            },
            Ip: function() {
                for (var a = this.ob.childNodes, b = a.length - 1; 0 <= b; b -= 1)
                    a[b] && a[b].Vb !== this.Vb && this.ob.removeChild(a[b])
            },
            zA: function(a, b) {
                return a.wd === b.wd && a.fe === b.fe && a.vd === b.vd && a.Jd === b.Jd
            },
            Kn: function(a) {
                var b = this.Vb;
                this.Vb += 1;
                var c = !1, d, e, g;
                e = !1;
                var h = [];
                this.la.x - this.Ua.x < -f.a.Ya / 2 ? this.la = new f.I(this.la.x + f.a.Ya,this.la.y) : this.la.x - this.Ua.x > f.a.Ya / 2 && (this.la = new f.I(this.la.x - f.a.Ya,this.la.y));
                for (d = a.length - 1; 0 <= d; d -= 1)
                    if (g = a[d],
                        g.length) {
                        e = g[0].ja.z;
                        for (var k, l, m = this.ts(this.vc, e), n = g.length - 1; 0 <= n; n -= 1) {
                            l = g[n];
                            this.MU(l);
                            if (!l.Jc && this.la === l.la && l.Ld === this.Ld) {
                                var p = l.mc;
                                if (p && p.parentNode === this.ob && 1 === l.nq) {
                                    h.push(l);
                                    p.Vb = this.Vb;
                                    l.Vb = this.Vb;
                                    continue
                                }
                            }
                            l.la = this.la;
                            l.Ld = this.Ld;
                            k = l.ja;
                            var c = !0
                                , q = (new f.I((k.x << 20 - e) * this.dd,(k.y << 20 - e) * this.dd)).Sa(this.la)
                                , q = q.ec(this.Xd);
                            q.x = Math.floor(q.x);
                            q.y = Math.floor(q.y);
                            var r = 1;
                            if (!l.dM || this.jL && l.Vb !== b)
                                l.dM = this.currentTime;
                            this.gi && !l.Rt ? (p = Math.max(0, Math.abs(k.z - this.zoom) - 1),
                                r = Math.min(1, (this.currentTime - l.dM) / (1 / Math.pow(1.32, p) * this.Xk)),
                            1 !== r && (this.lh = !0)) : l.Rt = !1;
                            l.Vb = this.Vb;
                            l.nq = r;
                            l.za ? (p = l.mc,
                            !p && l.Jc && l.Jc.mc && (p = l.Jc.mc),
                            0 !== r && p && (this.LR(p, q.x, q.y, m, m, r, k.z),
                            p.parentNode !== this.ob && (f.l.Lg && "overlayer" === this.q.get("type") && (p.style.display = "none"),
                                this.Zo.appendChild(p)),
                                p.Vb = this.Vb,
                                l.vc = this.vc,
                                h.push(l))) : l.rc = null
                        }
                        e = !0
                    }
                1 < a.length && (this.lh = !0);
                this.pm = h;
                this.Ip();
                this.ob.appendChild(this.Zo);
                return c || !e
            },
            MU: function() {},
            Ed: function() {
                this.transform = {
                    translate: this.DF,
                    scale: Math.pow(2, this.zoom - this.vc),
                    rotate: 0
                }
            }
        });
        window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.TF = function(a, b, c, d, e) {
                "undefined" === typeof e && (e = [10, 10]);
                this.moveTo(a, b);
                var g = c - a
                    , h = d - b
                    , k = Math.floor(Math.sqrt(g * g + h * h));
                d = g / k;
                c = h / k;
                e.CH = 0;
                for (var l = [], g = this.mz, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1)
                    e.CH += e[q],
                        l[q] = {
                            hG: e[q] * d,
                            iG: e[q] * c,
                            Og: h += e[q]
                        },
                        g -= e[q],
                    0 > g && !p && (m = q,
                        n = -g,
                        p = !0);
                for (p = 0; n + p <= k; )
                    n < e[m] ? (g = n * d,
                        h = n * c) : (g = l[m].hG,
                        h = l[m].iG),
                        a += g,
                        b += h,
                        this.ew ? this.moveTo(a, b) : this.lineTo(a, b),
                        p += n,
                        this.ew = !this.ew,
                        n = e[(m + 1) % e.length],
                        m = (m + 1) % e.length;
                k -= p;
                a += k * d;
                b += k * c;
                this.ew ? this.moveTo(a, b) : this.lineTo(a, b);
                this.mz = (this.mz + p + k) % e.CH
            }
                ,
                window.CanvasRenderingContext2D.prototype.H7 = function(a, b, c, d) {
                    "undefined" === typeof d && (d = [10, 10]);
                    var e = 2 * Math.PI * c
                        , g = 0 >= d ? e : Math.round(e / (d[0] + d[1]))
                        , h = (d[0] + d[1]) / e * 2 * Math.PI;
                    d = d[0] / e * 2 * Math.PI;
                    for (e = 0; e < g; e += 1)
                        this.beginPath(),
                            this.arc(a, b, c, e * h, e * h + d),
                            this.stroke()
                }
        );
        f.R.ud.ei = f.R.th.extend({
            B: function(a, b) {
                arguments.callee.oa.apply(this, arguments);
                this.Le()
            },
            VG: function() {
                return this.bb.oJ
            },
            Jg: function() {
                return this.ob
            },
            Le: function() {
                this.ob = document.createElement("div");
                this.ob.className = "amap-markers";
                this.bb = new f.R.ud.kc(this.ob);
                this.bb.q = this.q;
                this.T.J.appendChild(this.ob)
            },
            Sn: function(a, b) {
                this.Zo = b.Zo;
                this.Or = b;
                this.$d = a.U.$d;
                this.Q = a.U.Q;
                this.zoom = a.U.zoom;
                this.size = a.size;
                this.pa = a.U.pa;
                this.Ml = a.Q;
                this.Za = a.U.Ua;
                this.zg = a.U.zg;
                var c = !1;
                if (!this.la || 3E4 < Math.abs(this.Za.x - this.la.x) / this.Q || 3E4 < Math.abs(this.Za.y - this.la.y) / this.Q)
                    c = !0;
                if (c || this.zoom << 0 !== this.zoom || this.Ld !== this.zoom)
                    this.la = this.Za,
                        this.Ld = this.zoom
            },
            kn: function(a) {
                var b = a.U.pa.Gb.y * this.Q;
                a = a.U.pa.Gb.x * this.Q;
                return [this.Za.x - a, this.Za.y - b, this.Za.x + a, this.Za.y + b]
            },
            Ip: function() {
                if (this.Gf && this.Gf)
                    for (var a in this.Gf)
                        if (this.Gf.hasOwnProperty(a)) {
                            var b = this.Gf[a];
                            b.rc !== this.rc && b.aa && this.T.ii.appendChild(b.aa)
                        }
            },
            Xb: function(a, b) {
                this.rc = 1E6 * Math.random() << 0;
                this.Sn(a, b);
                this.U = a.U;
                this.size = a.size;
                var c = this.q;
                this.dd = 256;
                var d, e;
                e = this.kn(a);
                var g = 0;
                c.Bj && (g = 50 * this.Q);
                e[0] -= this.q.Re * this.Q + g;
                e[1] -= this.q.Ef * this.Q + g;
                e[2] += this.q.Re * this.Q + g;
                e[3] += this.q.Ef * this.Q + g;
                c = c.Ig(e);
                for (d in c)
                    c.hasOwnProperty(d) && (c[d].rc = this.rc,
                        c[d].fT = this);
                this.Ip(c);
                this.Sn.call(this.bb, a, b);
                this.bb.Xv(c);
                this.Gf = c;
                this.Ed(a)
            },
            Ed: function() {
                var a = Math.pow(2, this.zoom - this.vc);
                this.transform = {
                    translate: this.la.Sa(this.Za).ec(this.Q),
                    scale: a,
                    rotate: 0
                }
            }
        });
        f.R.ud.kc = f.Z.extend({
            B: function(a) {
                this.Uh = a
            },
            Xv: function(a, b) {
                var c = document.createDocumentFragment(), d = b && b.pH ? null : {}, e = !0, g;
                for (g in a)
                    if (a.hasOwnProperty(g)) {
                        var h = a[g], k, l = h.get("params");
                        if (h.aa)
                            k = h.aa;
                        else {
                            k = f.g.create("div");
                            k.className = "amap-marker";
                            var m = l.cg
                                , n = l.qV;
                            m && k.appendChild(m);
                            n && k.appendChild(n);
                            h.aa = k;
                            h.cg = m;
                            if (n = l.title)
                                m.title = n;
                            this.q.Bj = !0;
                            -1 === f.a.indexOf(this.q.Qe, h) && this.q.Qe.push(h);
                            h.dg = !0
                        }
                        var m = l.offset
                            , n = m.x
                            , p = m.y
                            , q = l.textAlign
                            , r = l.verticalAlign
                            , m = !1;
                        if ("left" !== q || "top" !== r)
                            if (k.parentNode !== this.Uh && d && (m = !0,
                                d[g] = h,
                                e = !1),
                                !m) {
                                var t = f.g.Bz(h.cg)
                                    , u = t[0]
                                    , t = t[1];
                                switch (q) {
                                    case "center":
                                        n -= u / 2;
                                        break;
                                    case "right":
                                        n -= u
                                }
                                switch (r) {
                                    case "middle":
                                        p -= t / 2;
                                        break;
                                    case "bottom":
                                        p -= t
                                }
                            }
                        if (h.dg)
                            u = [],
                                r = this.Jh(h.Da.Na),
                                h.la = this.la,
                                t = l.bK,
                                q = Math.round(r[1] + p + t.y),
                                r = Math.round(r[0] + n + t.x),
                                u.push("top:" + q + "px"),
                                u.push("left:" + r + "px"),
                                u.push("z-index:" + (l.WS ? this.q.$l + 10 : l.zIndex)),
                            f.l.Id || u.push(f.g.bS(k, l.Ny, {
                                x: -n,
                                y: -p
                            })),
                                u.push("display:" + (l.visible ? "block" : "none") + ";"),
                                k.style.cssText = u.join(";"),
                            (n = l.label) && n.content && (l = l.$S,
                                r = q = 0,
                            n.offset && (q = n.offset.y + "px",
                                r = n.offset.x + "px"),
                                l.style.top = q,
                                l.style.left = r,
                                k.appendChild(l));
                        else if (h.qX || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Uh || h.la !== this.la)
                            r = this.Jh(h.Da.Na),
                                h.la = this.la,
                                t = l.bK,
                                q = Math.round(r[1] + p + t.y),
                                r = Math.round(r[0] + n + t.x),
                                k.style.top = q + "px",
                                k.style.left = r + "px";
                        h.zoom = this.zoom;
                        k.parentNode !== this.Uh && (f.l.Lg && f.a.iepngFix(k),
                            c.appendChild(k),
                            h.dg = m);
                        k.Vt = this.Uh
                    }
                this.Uh.appendChild(c);
                e || this.Xv(d, {
                    pH: !0
                })
            },
            Jh: function(a) {
                return [(a[0] - this.la.x) / this.Q, (a[1] - this.la.y) / this.Q]
            }
        });
        var vc = f.w
            , Ec = f.l
            , Vb = f.Z.Uo
            , Fc = f.hba
            , ea = document
            , Gc = !0
            , Hc = [];
        Ec.he && Hc.push("touch");
        Ec.Y || Hc.push("mouse");
        Ec.fw && (Hc.push("vectorlayer", "overlay"),
            Ec.Yl ? Hc.push("wgl") : Hc.push("cmng", "cgl"));
        if (Fc) {
            var Ic = []
                , Jc = Fc.split(",");
            for (oc = 0; oc < Jc.length; oc += 1) {
                var Kc = Jc[oc];
                Vb[Kc] && Ic.push.apply(Ic, Vb[Kc]);
                Ic.push(Kc)
            }
            Hc = Hc.concat(Ic)
        }
        Hc.push("sync");
        if (Ec.Ij) {
            var Lc = !0
                , Mc = []
                , Nc = [];
            try {
                oc = 0;
                for (var Oc = Hc.length; oc < Oc; oc++) {
                    var Pc = JSON.parse(localStorage.getItem("_AMap_" + Hc[oc]));
                    if (Pc.version === vc.Ug)
                        Mc.push(Pc.script),
                        Pc.css && Nc.push(Pc.css);
                    else {
                        Mc = void 0;
                        Lc = !1;
                        break
                    }
                }
            } catch (Qc) {
                Mc = Nc = void 0,
                    Lc = !1
            }
            if (Lc)
                try {
                    Nc.length && Rc(),
                        eval(Mc.join(";"))
                } catch (Sc) {
                    Gc = !1
                }
            else
                Gc = !1
        } else
            Gc = !1;
        Gc || (vc.yv = !1,
            Tc());
        function Tc() {
            for (var a = vc.cb + "/maps/modules?v=" + vc.qu + "&key=" + vc.key + "&vrs=" + vc.Ug + "&m=" + Hc.join(","), b = ea.getElementsByTagName("script"), c, d = 0; d < b.length; d += 1)
                if (0 === b[d].src.indexOf(vc.cb + "/maps?")) {
                    c = b[d];
                    break
                }
            vc.Rc || c && c.async ? Uc(a) : (ea.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'),
                setTimeout(function() {
                    ea.getElementById("amap_plus_js") || Uc(a)
                }, 1))
        }
        function Uc(a) {
            var b = ea.createElement("script");
            b.charset = "utf-8";
            b.src = a;
            (a = ea.head || ea.getElementsByTagName("head")[0] || ea.body) && a.appendChild(b)
        }
        function Rc() {
            var a = Nc.join("\n")
                , b = ea.createElement("style");
            b.type = "text/css";
            -1 === vc.cb.indexOf("webapi.amap.com") && (a = a.replace(eval("/webapi.amap.com/gi"), vc.cb.split("://")[1]));
            "https" === vc.bc && (a = a.replace(eval("/http:/gi"), "https:"));
            if (b.styleSheet) {
                var c = function() {
                    try {
                        b.styleSheet.cssText = a
                    } catch (c) {}
                };
                b.styleSheet.disabled ? setTimeout(c, 10) : c()
            } else
                b.appendChild(ea.createTextNode(a));
            c = ea.head || ea.getElementsByTagName("head")[0];
            2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
        }
        ;
    }
)(["6cb85da518029607d421917b7ddeb94a", [118.344933, 29.188757, 120.721945, 30.566516, 120.153576, 30.287459], "http://webapi.amap.com", 1, "1.4.2", null, "330100", "", true, false, false, true, "1573564791-20190807-1", false])
