(function (t) {
  function e(e) {
    for (
      var i, s, r = e[0], l = e[1], c = e[2], d = 0, h = [];
      d < r.length;
      d++
    )
      (s = r[d]), o[s] && h.push(o[s][0]), (o[s] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    u && u(e);
    while (h.length) h.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], i = !0, r = 1; r < n.length; r++) {
        var l = n[r];
        0 !== o[l] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var i = {},
  o = {
    app: 0,
  },
  a = [];
  function s(e) {
    if (i[e]) return i[e].exports;
    var n = (i[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = t),
  (s.c = i),
  (s.d = function (t, e, n) {
    s.o(t, e) ||
      Object.defineProperty(t, e, {
        enumerable: !0,
        get: n,
      });
  }),
  (s.r = function (t) {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module",
      }),
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
  }),
  (s.t = function (t, e) {
    if ((1 & e && (t = s(t)), 8 & e)) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (
      (s.r(n),
      Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t,
      }),
      2 & e && "string" != typeof t)
    )
      for (var i in t)
        s.d(
          n,
          i,
          function (e) {
            return t[e];
          }.bind(null, i)
        );
    return n;
  }),
  (s.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t["default"];
          }
        : function () {
            return t;
          };
    return s.d(e, "a", e), e;
  }),
  (s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (s.p = "/wuhoushrine/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var u = l;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("cd49");
  },
  "034d": function (t, e, n) {
    "use strict";
    var i = n("e5f3"),
      o = n.n(i);
    o.a;
  },
  "107e": function (t, e, n) {
    "use strict";
    var i = n("b2cb"),
      o = n.n(i);
    o.a;
  },
  1174: function (t, e, n) {},
  "1cf4": function (t, e, n) {
    "use strict";
    var i = n("c1fa"),
      o = n.n(i);
    o.a;
  },
  "1ee7": function (t, e, n) {
    "use strict";
    var i = n("3718"),
      o = n.n(i);
    o.a;
  },
  2395: function (t, e, n) {},
  "27bd": function (t, e, n) {},
  2888: function (t, e, n) {},
  "36eb": function (t, e, n) {
    "use strict";
    var i = n("b838"),
      o = n.n(i);
    o.a;
  },
  3718: function (t, e, n) {},
  3783: function (t, e, n) {},
  "382a": function (t, e, n) {
    "use strict";
    var i = n("27bd"),
      o = n.n(i);
    o.a;
  },
  "3fbc": function (t, e, n) {},
  "42dd": function (t, e, n) {
    "use strict";
    var i = n("c805"),
      o = n.n(i);
    o.a;
  },
  "43ea": function (t, e, n) {
    "use strict";
    var i = n("5701"),
      o = n.n(i);
    o.a;
  },
  "44fb": function (t, e, n) {
    "use strict";
    var i = n("8601"),
      o = n.n(i);
    o.a;
  },
  "471d": function (t, e, n) {},
  4993: function (t, e, n) {},
  "4daf": function (t, e, n) {
    "use strict";
    var i = n("4993"),
      o = n.n(i);
    o.a;
  },
  "51d3": function (t, e, n) {
    "use strict";
    var i = n("b6eb"),
      o = n.n(i);
    o.a;
  },
  "54c3": function (t, e, n) {
    "use strict";
    var i = n("471d"),
      o = n.n(i);
    o.a;
  },
  "55be": function (t, e, n) {
    "use strict";
    var i = n("b066"),
      o = n.n(i);
    o.a;
  },
  5701: function (t, e, n) {},
  "7c55": function (t, e, n) {
    "use strict";
    var i = n("2395"),
      o = n.n(i);
    o.a;
  },
  8601: function (t, e, n) {},
  b066: function (t, e, n) {},
  b2cb: function (t, e, n) {},
  b6eb: function (t, e, n) {},
  b838: function (t, e, n) {},
  b8ad: function (t, e, n) {
    "use strict";
    var i = n("1174"),
      o = n.n(i);
    o.a;
  },
  bb39: function (t, e, n) {
    "use strict";
    var i = n("bf8c"),
      o = n.n(i);
    o.a;
  },
  bf8c: function (t, e, n) {},
  c1fa: function (t, e, n) {},
  c805: function (t, e, n) {},
  cd49: function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var i,
      o = n("2b0e"),
      a = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            attrs: {
              id: "app",
            },
          },
          [n("home")],
          1
        );
      },
      s = [],
      r = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "container",
          },
          [
            t.homeSceneViewing
              ? n("home-scene", {
                  class: {
                    hide: !t.homeSceneViewing,
                  },
                })
              : t._e(),
            n("main-scene", {
              ref: "mainScene",
              class: {
                hide: !t.mainSceneViewing,
              },
            }),
            t.introVideoViewing ? n("video-intro") : t._e(),
            t.endVideoViewing ? n("video-end") : t._e(),
            t.hotspotViewing
              ? n("hotspot", {
                  class: {
                    hide: !t.hotspotViewing,
                  },
                  attrs: {
                    hotspot: t.hotspot,
                  },
                })
              : t._e(),
            n("app-footer"),
          ],
          1
        );
      },
      l = [],
      c = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          {
            attrs: {
              appear: "",
              name: "custom-classes-transition",
              "enter-active-class": "animated zoomIn",
              "leave-active-class": "animated zoomOut",
            },
          },
          [
            n(
              "div",
              {
                staticClass: "hotspot-modal",
                on: {
                  click: function (e) {
                    return t.onClose();
                  },
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "hotspot-container",
                  },
                  [
                    n("button", {
                      staticClass: "button-back bg-hotspot-back",
                      on: {
                        click: function (e) {
                          return t.onClose();
                        },
                      },
                    }),
                    n("button", {
                      staticClass: "button-audio",
                      class: t.audioPlaying
                        ? "bg-hotspot-audio-pause"
                        : "bg-hotspot-audio-play",
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.triggerAudio();
                        },
                      },
                    }),
                    0 == t.index
                      ? n("section", {
                          staticClass: "top",
                          style: {
                            "background-image":
                              "url(" + t.content.preview + ")",
                            cursor: "pointer",
                          },
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.showModal(!0);
                            },
                          },
                        })
                      : t._e(),
                    1 == t.index
                      ? n(
                          "section",
                          {
                            staticClass: "top",
                          },
                          [
                            n("iframe", {
                              staticStyle: {
                                width: "100%",
                                height: "100%",
                              },
                              attrs: {
                                src: t.content.modelUrl,
                                frameborder: "0",
                              },
                            }),
                          ]
                        )
                      : t._e(),
                    0 == t.content.type
                      ? n(
                          "div",
                          {
                            staticClass: "modal",
                            class: t.modalShow ? "modalShow" : "modalHide",
                            on: {
                              click: function (e) {
                                return t.showModal(!1);
                              },
                            },
                          },
                          [
                            n("picture-slider", {
                              attrs: {
                                imgs: t.content.imageList,
                              },
                              on: {
                                hide: function (e) {
                                  return t.showModal(!1);
                                },
                              },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    n(
                      "div",
                      {
                        staticClass: "bottom",
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "article",
                          },
                          [
                            n(
                              "h1",
                              {
                                staticClass: "title",
                              },
                              [t._v(" " + t._s(t.content.title) + " ")]
                            ),
                            n(
                              "div",
                              {
                                staticClass: "content",
                              },
                              [n("p", [t._v(t._s(t.content.description))])]
                            ),
                          ]
                        ),
                      ]
                    ),
                    n(
                      "div",
                      {
                        staticClass: "buttons",
                      },
                      [
                        t.contentTypes.img
                          ? n("span", [
                              n("button", {
                                staticClass: "button-tab bg-picture",
                                class: {
                                  "bg-picture-active": 0 == t.index,
                                },
                                on: {
                                  click: function (e) {
                                    return e.stopPropagation(), t.tab(0);
                                  },
                                },
                              }),
                              t._v(
                                "\n                    " +
                                  t._s(t.$t("Hotspot.btnPicture")) +
                                  "\n                "
                              ),
                            ])
                          : t._e(),
                        t.contentTypes.model
                          ? n("span", [
                              n("button", {
                                staticClass: "button-tab bg-model",
                                class: {
                                  "bg-model-active": 1 == t.index,
                                },
                                on: {
                                  click: function (e) {
                                    return e.stopPropagation(), t.tab(1);
                                  },
                                },
                              }),
                              t._v(
                                "\n                    " +
                                  t._s(t.$t("Hotspot.btnModel")) +
                                  "\n                "
                              ),
                            ])
                          : t._e(),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      u = [],
      d =
        (n("ac6a"),
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "container",
              on: {
                click: function (e) {
                  return e.stopPropagation(), t.$emit("hide");
                },
              },
            },
            [
              n(
                "ul",
                {
                  staticClass: "list",
                },
                t._l(t.imgs, function (e, i) {
                  return n("li", {
                    key: i,
                    class: {
                      transparent: t.viewIndex != i,
                      "list-item": !0,
                    },
                    style: {
                      "background-image": "url(" + e.url + ")",
                    },
                    attrs: {
                      title: e.title,
                    },
                    on: {
                      click: function (t) {
                        t.stopPropagation();
                      },
                    },
                  });
                }),
                0
              ),
              n("button", {
                staticClass: "buttons buttons-left bg-left",
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.prev();
                  },
                },
              }),
              n("button", {
                staticClass: "buttons buttons-right bg-right",
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.next();
                  },
                },
              }),
            ]
          );
        }),
      h = [],
      p = {
        props: {
          imgs: Array,
        },
        data: function () {
          return {
            viewIndex: 0,
          };
        },
        created: function () {},
        methods: {
          next: function (t) {
            this.viewIndex =
              (this.viewIndex + this.imgs.length + 1) % this.imgs.length;
          },
          prev: function (t) {
            this.viewIndex =
              (this.viewIndex + this.imgs.length - 1) % this.imgs.length;
          },
        },
      },
      m = p,
      f = (n("43ea"), n("2877")),
      g = Object(f["a"])(m, d, h, !1, null, "766bfdf0", null),
      v = g.exports,
      w = {
        components: {
          PictureSlider: v,
        },
        props: {
          hotspot: {},
        },
        data: function () {
          return {
            index: 0,
            modalShow: !1,
            audioPlaying: !0,
            contentTypes: {
              img: !1,
              model: !1,
            },
            content: null,
          };
        },
        created: function () {
          var t = this;
          (this.contents = this.hotspot.contents),
            (this.content = this.contents[this.index]),
            this.contents.forEach(function (e) {
              0 == e.type && (t.contentTypes.img = !0),
                1 == e.type && (t.contentTypes.model = !0);
            }),
            this.$Bus.$on("audio.play", this.onAudioPlay);
        },
        methods: {
          onClose: function () {
            this.$Bus.$emit("hotspot.close", this.hotspot.hotspotId);
          },
          onAudioPlay: function () {
            this.audioPlaying = !0;
          },
          triggerAudio: function () {
            (this.audioPlaying = !this.audioPlaying),
              this.$Bus.$emit("audio.trigger", this.audioPlaying),
              console.log(
                "热点音频".concat(this.audioPlaying ? "播放中" : "暂停中")
              );
          },
          tab: function (t) {
            (this.index = t), (this.content = this.contents[this.index]);
          },
          showModal: function (t) {
            this.modalShow = t;
          },
        },
      },
      y = w,
      b = (n("b8ad"), Object(f["a"])(y, c, u, !1, null, "69e28299", null)),
      x = b.exports,
      C = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          {
            attrs: {
              appear: "",
              name: "custom-classes-transition",
              "enter-active-class": "animated fadeIn",
              "leave-active-class": "animated fadeOut",
            },
          },
          [
            n(
              "div",
              {
                staticClass: "canvas-2d",
                style: {
                  zIndex: t.show ? 2 : 0,
                },
              },
              [
                t.isExperience
                  ? t._e()
                  : [
                      n(
                        "div",
                        {
                          staticClass: "canvas-2d-wrapper",
                          staticStyle: {
                            "min-width": "1024px",
                            height: "100%",
                          },
                        },
                        [
                          n("canvas", {
                            attrs: {
                              id: "canvasBuild",
                              width: "1200",
                              height: "1173",
                            },
                          }),
                        ]
                      ),
                      n("logo"),
                    ],
              ],
              2
            ),
          ]
        );
      },
      M = [],
      S = n("5a89"),
      E = n("d225"),
      T = n("b0b4"),
      D = {
        initial: {
          vs: "\n\t\t\tattribute vec3 position;\n\n\t\t\tvoid main(void) {\n\t\t\t\t\n\t\t\t\tgl_Position = vec4(position.xy,0.0,1.0);\n\t\t\n\t\t\t}\n\t\t",
          fs: "\n\t\t\t#ifdef GL_ES\n                precision highp float;\n            #endif\n\t\n\t\t\tuniform vec2 iResolution;\n\t\t\t\t\n\t\t\tvoid main(void) {\n\t\t\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n\t\t\t\tvec2 uv = gl_FragCoord.xy / iResolution.xy;\t\n\t\t\n\t\t\t\n\t\t\t\tgl_FragColor = vec4( uv, 1.0, 1.0);\n\t\t\t\t\t\t\n\t\t\t}\n\t\t",
        },
        background: {
          vs: "\n\t\t\tattribute vec3 position;\n\n\t\t\tvoid main(void) {\n\t\t\t\t\n\t\t\t\tgl_Position = vec4(position.xy,0.0,1.0);\n\t\t\n\t\t\t}\n\t\t",
          fs: "\n\t\t\t#ifdef GL_ES\n                precision highp float;\n            #endif\n\t\n\t\t\tuniform vec2 iResolution;\n\t\t\t\n\t\t\tuniform highp sampler2D iChannel0;\n\t\t\tuniform highp sampler2D iChannel1;\n\t\t\tuniform float progress;\n\t\t\t\n\t\t\tvoid main(void) {\n\t\t\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n\t\t\t\tvec2 uv = gl_FragCoord.xy / iResolution.xy;\t\n\t\t\n\t\t\t\tvec4 color = texture2D( iChannel0, uv );\t\n\t\t\t\tfloat colorGrad = texture2D( iChannel1, uv ).r;\n\n\t\t\t\tcolor.rgb *= color.a;\n\t\t\t\tgl_FragColor = color * smoothstep( colorGrad - 1.0 / 24.0, colorGrad, (progress * (1.0 + 1.0 / 24.0) - 1.0 / 24.0) );\t\t\t\n\t\t\t}\n\t\t",
        },
        loader: {
          vs: "\n\t\t\tattribute vec3 position;\n\n\t\t\tvoid main(void) {\n\t\t\t\t\n\t\t\t\tgl_Position = vec4(position.xy,0.0,1.0);\n\t\t\n\t\t\t}\n\t\t",
          fs: "\n\t\t\t#ifdef GL_ES\n                precision highp float;\n            #endif\n\t\n\t\t\tuniform vec2 iResolution;\n\t\t\t\n\t\t\tuniform highp sampler2D iChannel0;\n\t\t\tuniform highp sampler2D iChannel1;\n\t\t\tuniform float progress;\n\t\t\t\n\t\t\tvoid main(void) {\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec2 uv0 = gl_FragCoord.xy / iResolution.xy;\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec2 uv1 = vec2(smoothstep( 0.5 - 0.5 * progress, 0.5 + 0.5 * progress, uv0.x), uv0.y );\n\t\t\t\t\n\t\t\t\tvec4 color0 = texture2D(iChannel0, uv0);\n\t\t\t\tvec4 color1 = texture2D(iChannel1, uv1);\t\t\n\t\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, color1.a * color0.a); //color1.a * color0.a);\n\t\t\t\t\t\t\n\t\t\t}\n\t\t",
        },
        logo: {
          vs: "\n\t\t\tattribute vec3 position;\n\n\t\t\tvoid main(void) {\n\t\t\t\t\n\t\t\t\tgl_Position = vec4(position.xy,0.0,1.0);\n\t\t\n\t\t\t}\n\t\t",
          fs: "\n\t\t\t#ifdef GL_ES\n                precision highp float;\n            #endif\n\t\n\t\t\tuniform vec2 iResolution;\n\t\t\t\n\t\t\tuniform highp sampler2D iChannel0;\n\t\t\tuniform highp sampler2D iChannel1;\n\t\t\tuniform float progress;\n\t\t\t\n\t\t\tvoid main(void) {\n\t\t\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n\t\t\t\t\n\t\t\t\tvec2 uv = gl_FragCoord.xy / iResolution.xy;\t\n\t\n\t\t\t\t\n\t\t\t\tvec4 color = texture2D(iChannel0, uv).rgba;\n\t\t\t\tvec4 colorGrad = texture2D(iChannel1, uv).rgba;\n\n\t\t\t\tbool filled = progress >= colorGrad.b;\n\t\t\t\tbool erased = colorGrad.a >= 0.0 && colorGrad.a <= progress;\n\t\t\t\t\t\n\t\t\t\t//color.rgb *= color.a;\n\t\t\t\tgl_FragColor = color * (filled && !erased ? 1.0 : 0.0);\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t}\n\t\t",
        },
      },
      V = n("cffa"),
      P = (function () {
        function t(e, n, i) {
          var o = this;
          Object(E["a"])(this, t);
          var a = D[n];
          if (!a) throw new Error("".concat(n, " is not found"));
          (this.canvas = e),
            (this.scene = new S["Scene"]()),
            (this.camera = new S["PerspectiveCamera"](75, 2, 0.1, 1e3)),
            (this.renderer = new S["WebGLRenderer"]({
              canvas: e,
              alpha: !0,
              premultipliedAlpha: !0,
            })),
            this.renderer.setPixelRatio(window.devicePixelRatio || 1),
            (this.planeGeomertry = new S["PlaneBufferGeometry"](2, 2)),
            (this.material = new S["RawShaderMaterial"]({
              uniforms: {
                iResolution: new S["Uniform"](
                  new S["Vector2"](this.canvas.width, this.canvas.height)
                ),
                progress: {
                  value: 1,
                },
              },
              transparent: !0,
              vertexShader: a.vs,
              fragmentShader: a.fs,
            })),
            i.forEach(function (t, e) {
              (o.material.uniforms["iChannel".concat(e)] = {
                value: t,
              }),
                (t.minFilter = S["NearestFilter"]);
            }),
            (this.renderingObject = new S["Mesh"](
              this.planeGeomertry,
              this.material
            )),
            this.init();
        }
        return (
          Object(T["a"])(t, [
            {
              key: "init",
              value: function () {
                return (
                  this.scene.add(this.renderingObject), this.render(), this
                );
              },
            },
            {
              key: "render",
              value: function () {
                return this.renderer.render(this.scene, this.camera), this;
              },
            },
            {
              key: "resize",
              value: function (t, e) {
                return (
                  this.setUniformsValue("iResolution", new S["Vector2"](t, e)),
                  this.render(),
                  this
                );
              },
            },
            {
              key: "setUniformsValue",
              value: function (t, e) {
                return (this.material.uniforms[t].value = e), this;
              },
            },
            {
              key: "getUniformsValue",
              value: function (t) {
                return this.material.uniforms[t].value;
              },
            },
            {
              key: "getUniform",
              value: function (t) {
                return this.material.uniforms[t];
              },
            },
          ]),
          t
        );
      })(),
      O = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "logo",
          },
          [
            n(
              "transition",
              {
                attrs: {
                  appear: "",
                  name: "custom-classes-transition",
                  "enter-active-class": "animated fadeIn",
                  "leave-active-class": "animated fadeOut",
                },
              },
              [
                t.readyExperence
                  ? n("span", {
                      staticClass: "seal",
                    })
                  : t._e(),
              ]
            ),
            t.readyLogo
              ? [
                  t._m(0),
                  t._m(1),
                  n(
                    "transition",
                    {
                      attrs: {
                        appear: "",
                        name: "custom-classes-transition",
                        "enter-active-class": "animated fadeIn",
                        "leave-active-class": "animated fadeOut",
                      },
                    },
                    [
                      n(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.readyExperence,
                              expression: "readyExperence",
                            },
                          ],
                          staticClass: "btn-startExperience",
                          on: {
                            click: function (e) {
                              return e.stopPropagation(), t.startExperence();
                            },
                          },
                        },
                        [
                          n("span", [
                            t._v(
                              t._s(
                                t.loading
                                  ? t.$t("Logo.btnStartExperience.loading")
                                  : t.$t("Logo.btnStartExperience.loaded")
                              )
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]
              : t._e(),
            n("progress-bar"),
          ],
          2
        );
      },
      k = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "canvas-words-1",
            },
            [
              n("canvas", {
                attrs: {
                  id: "canvas-words-1",
                  width: "1156",
                  height: "280",
                },
              }),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "canvas-words-2",
            },
            [
              n("canvas", {
                attrs: {
                  id: "canvas-words-2",
                  width: "900",
                  height: "90",
                },
              }),
            ]
          );
        },
      ],
      I = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "progress-bar",
            class: {
              hide: t.hide,
            },
          },
          [
            n("h4", [t._v(t._s(t.progressText))]),
            n("canvas", {
              attrs: {
                id: "canvasProgress",
                width: 600,
                height: 40,
              },
            }),
          ]
        );
      },
      _ = [],
      L = (n("6b54"), n("7514"), n("9ab4")),
      B = (n("63d9"), n("682a")),
      F = [
        "point_dimian.json",
        "point_huiling.json",
        "point_liubei.json",
        "point_other.json",
        "point_qianmen.json",
        "point_zhugeliang.json",
      ],
      j = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.manager = e),
            (n.matrixAutoUpdate = !1),
            (n.hovering = !1),
            (n.progress = 0),
            (n.duration = 2e3),
            (n.initDensity = 0.2),
            (n.hoverDensity = 0.84),
            (n.hoverStay = 2e3),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.build = function (t, e) {
            (this.geometry = t),
              (this.material = e),
              (this.animHoveOn = new B["Tween"](
                this.material.uniforms["progress"]
              )
                .easing(B["Easing"].Quadratic.Out)
                .to(
                  {
                    value: 1,
                  },
                  this.duration
                )),
              (this.animHoverOnDensity = new B["Tween"](
                this.material.uniforms["density"]
              ).to(
                {
                  value: this.hoverDensity,
                },
                this.duration
              )),
              (this.animHoverOff = new B["Tween"](
                this.material.uniforms["progress"]
              )
                .easing(B["Easing"].Quadratic.Out)
                .to(
                  {
                    value: 0,
                  },
                  this.duration
                )),
              (this.animHoverOffDensity = new B["Tween"](
                this.material.uniforms["density"]
              ).to(
                {
                  value: this.initDensity,
                },
                this.duration
              ));
          }),
          (e.prototype.dispose = function () {
            this.geometry.dispose(),
              (this.geometry = null),
              this.material.dispose(),
              (this.material = null),
              this.parent && this.parent.remove(this);
          }),
          (e.prototype.hoverOn = function () {
            this.animHoveOn &&
              (this.animHoverOff &&
                this.manager.transitions.remove(this.animHoverOff),
              this.manager.transitions.remove(this.animHoverOffDensity),
              (this.animHoveOn = new B["Tween"](
                this.material.uniforms["progress"]
              )
                .easing(B["Easing"].Quadratic.Out)
                .to(
                  {
                    value: 1,
                  },
                  this.duration
                )
                .start()),
              (this.animHoverOnDensity = new B["Tween"](
                this.material.uniforms["density"]
              )
                .easing(B["Easing"].Quadratic.Out)
                .to(
                  {
                    value: this.hoverDensity,
                  },
                  this.duration
                )
                .start()),
              this.manager.transitions.add(this.animHoveOn),
              this.manager.transitions.add(this.animHoverOnDensity));
          }),
          (e.prototype.hoverOff = function (t) {
            var e = this;
            if (this.animHoverOff)
              var n = setTimeout(
                function () {
                  (e.animHoverOff = new B["Tween"](
                    e.material.uniforms["progress"]
                  )
                    .easing(B["Easing"].Quadratic.Out)
                    .to(
                      {
                        value: 0,
                      },
                      e.duration
                    )
                    .start()),
                    (e.animHoverOffDensity = new B["Tween"](
                      e.material.uniforms["density"]
                    )
                      .easing(B["Easing"].Quadratic.Out)
                      .to(
                        {
                          value: e.initDensity,
                        },
                        e.duration
                      )
                      .start()),
                    e.manager.transitions.add(e.animHoverOff),
                    e.manager.transitions.add(e.animHoverOffDensity),
                    clearTimeout(n);
                },
                t ? 0 : this.hoverStay
              );
          }),
          e
        );
      })(S["Points"]),
      A = j,
      $ = {
        vs: "\n        #define PI2 6.2831\n                    \n        uniform float time; \n        uniform float progress;\n\n        uniform float initAmplitude;\n        uniform float hoverAmplitude;\n\n        uniform float initHeight;\n        uniform float hoverHeight;\n\n        uniform float density;\n\n        uniform float pointSize;\n        uniform float densityMinDistance;\n        uniform float densityMaxDistance;\n                \n        uniform vec3 pointColor;\n        uniform vec3 fogColor;\n        uniform float fogBaseStrength;\n        uniform float fogHeightStrength;\n\n        attribute float aRanking;\n\n        varying highp vec3 vColor;\n\n\n        // vec3 hash33(vec3 p3) {\n        //     p3 = fract(p3 * vec3(.1031, .1030, .0973));\n        //     p3 += dot(p3, p3.yxz+19.19);\n        //     return fract((p3.xxy + p3.yxx)*p3.zyx);\n        // }\n        \n        // const mat4 m = mat4( 0.00,  0.80,  0.60, -0.4,\n        //                     -0.80,  0.36, -0.48, -0.5,\n        //                     -0.60, -0.48,  0.64,  0.2,\n        //                      0.40,  0.30,  0.20,  0.4);\n        \n        // vec3 octaves(vec4 p) {\n        //     vec4 q = m * p;\n        //     vec4 f  = 0.5000*sin( q );\n        //     q = m*q*2.01;\n        //     f += 0.2500*sin( q );\n        //     q = m*q*2.02;\n        //     f += 0.1250*sin( q );\n        //     q = m*q*2.03;\n        //     f += 0.0625*sin( q );\n        //     return f.xyz;\n        // }\n\n\n        vec3 hash33(vec3 p3) {\n            p3 = fract(p3 * vec3(.1031, .1030, .0973));\n            p3 += dot(p3, p3.yxz+19.19);\n            return fract((p3.xxy + p3.yxx)*p3.zyx);\n        }\n\n        const mat4 m = mat4( 0.00,  0.80,  0.60, -0.4,\n                -0.80,  0.36, -0.48, -0.5,\n                -0.60, -0.48,  0.64,  0.2,\n                0.40,  0.30,  0.20,  0.4);\n\n        vec3 octaves(vec4 p) {\n            vec4 q = m * p;\n            vec4 f  = 0.5000*sin( q );\n            q = m*q*2.01;\n            f += 0.2500*sin( q );\n            q = m*q*2.02;\n            f += 0.1250*sin( q );\n            q = m*q*2.03;\n            f += 0.0625*sin( q );\n            return f.xyz;\n        }\n           \n\n    \n  \n        void introEffect( inout vec3 position, float random )\n        {\n            vec3 noise = octaves( vec4( vec3(random * 40.-20.), time * .2 + random * PI2 * 10.) );\n            float height = smoothstep( 0.0, 10.0, position.y);\n            \n            vec3 positionStart = position + noise * initAmplitude;\n\n            float progressNoise = smoothstep( 0.2, 0.8, progress );\n            position = mix( positionStart, position, progressNoise ) + noise * hoverAmplitude;\n\n            float progressY = smoothstep( height , 1.0, progress );\n            position.y = mix( positionStart.y * initHeight, position.y * hoverHeight, progressY );\n\n            \n        }\n       \n\n        \n\n        void main(void) {\n            \n            vec4 pos = vec4(position, 1.0);\n            vec4 worldPosition = modelMatrix  * pos;\n                \n            introEffect(worldPosition.xyz, aRanking);\n            \n\n            float show = 1.0;\n            show = 1.0 - clamp( 1.0, 0.0,pow( smoothstep( densityMinDistance, densityMaxDistance, length(worldPosition.xyz - cameraPosition) ), 0.6 ) );\n            show *= density;\n            \n            vec3 rayDirection = worldPosition.xyz - cameraPosition;\n            float distance = length(rayDirection) ;\n            rayDirection *= ( 1. / distance);\n            float fog = fogBaseStrength * (1.0 - exp( -distance * rayDirection.y * fogHeightStrength)) / rayDirection.y;\n            vColor.xyz =  mix(pointColor/255., fogColor/255., min( fog, 1.));\n            \n            \n            if( aRanking > show )\n            {\n                gl_Position = vec4(100.,0.,0.,1.0);\n            }\n            else\n            {\n                gl_Position = projectionMatrix * viewMatrix * worldPosition;\n            }\n            gl_PointSize = pointSize / gl_Position.w ;\n            \n            \n            \n            \n            \n        }",
        fs: "\n        #ifdef GL_ES\n            precision mediump float;\n        #endif\n        \n\n        varying highp vec3 vColor;\n        \n        void main(void) {\n            gl_FragColor = vec4(vColor, 1.);\n        }\n    ",
        uniforms: {
          time: {
            value: 0,
          },
          progress: {
            value: 0,
          },
          initAmplitude: {
            value: 30,
          },
          hoverAmplitude: {
            value: 0,
          },
          initHeight: {
            value: 0,
          },
          hoverHeight: {
            value: 0.9,
          },
          density: {
            value: 0.1,
          },
          pointSize: {
            value: 16.17,
          },
          densityMinDistance: {
            value: 80,
          },
          densityMaxDistance: {
            value: 200,
          },
          pointColor: {
            value: new S["Color"](12, 28, 35),
          },
          fogColor: {
            value: new S["Color"](215, 243, 247),
          },
          fogBaseStrength: {
            value: 0.05,
          },
          fogHeightStrength: {
            value: 0.038,
          },
        },
      },
      H = "point_dimian.json",
      z = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.manager = e),
            n.manager.scene.add(n),
            (n.aabb = new S["Box3"]()),
            (n.material = new S["ShaderMaterial"]({
              uniforms: S["UniformsUtils"].clone($.uniforms),
              vertexShader: $.vs,
              fragmentShader: $.fs,
              skinning: !1,
              morphTargets: !1,
              morphNormals: !1,
            })),
            (n.ground = null),
            n.build(),
            (n.animFadeIn = new B["Tween"](n.material.uniforms["density"])
              .to(
                {
                  value: 1,
                },
                1e3
              )
              .onStart(function () {
                n.visible = !0;
              })
              .onUpdate(function (t) {
                n.children.forEach(function (e) {
                  var n = e;
                  n.material.uniforms["density"].value = t.value;
                }),
                  (n.ground.material.uniforms["density"].value = t.value);
              })),
            (n.animFadeOut = new B["Tween"](n.material.uniforms["density"])
              .to(
                {
                  value: 0,
                },
                1e3
              )
              .onComplete(function () {
                n.visible = !1;
              })
              .onUpdate(function (t) {
                n.children.forEach(function (e) {
                  var n = e;
                  n.material.uniforms["density"].value = t.value;
                }),
                  (n.ground.material.uniforms["density"].value = t.value);
              })),
            (n.manualInteraction = !1),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.build = function () {
            var t = this;
            F.forEach(function (e) {
              t.manager.loader.addRequest(
                "\n            minimap/normal/" + e,
                "json",
                function (n) {
                  for (
                    var i = new Float32Array(n.data.aPos),
                      o = i.length,
                      a = new Float32Array(o),
                      s = 0;
                    s < o;
                    s++
                  )
                    a[s] = s / o;
                  var r = new S["BufferGeometry"]();
                  r.addAttribute("position", new S["BufferAttribute"](i, 3)),
                    r.addAttribute("aRanking", new S["BufferAttribute"](a, 1)),
                    r.computeBoundingBox(),
                    t.aabb.union(r.boundingBox);
                  var l = t.material.clone();
                  if (e == H) t.buildGround(r, l);
                  else {
                    var c = new A(t.manager);
                    c.build(r, l),
                      c.updateMatrix(),
                      r.boundingBox.applyMatrix4(c.matrix),
                      t.add(c);
                  }
                }
              );
            });
          }),
          (e.prototype.buildGround = function (t, e) {
            (e.uniforms["initAmplitude"].value = 16.34),
              (e.uniforms["progress"].value = 0),
              (e.uniforms["density"].value = 0.14),
              (e.uniforms["initHeight"].value = 0),
              (e.uniforms["hoverHeight"].value = 0),
              (this.ground = new A(this.manager)),
              this.ground.build(t, e),
              this.manager.scene.add(this.ground);
          }),
          (e.prototype.update = function (t) {
            var e = this;
            this.ground &&
              (this.ground.material.uniforms.time.value =
                this.manager.clock.getElapsedTime()),
              this.children.forEach(function (t) {
                var n = t,
                  i = e.manager.raycaster.ray.intersectsBox(
                    n.geometry.boundingBox
                  );
                i != n.hovering &&
                  e.manualInteraction &&
                  (i
                    ? (n.hoverOn(), (n.hovering = !0))
                    : (n.hoverOff(), (n.hovering = !1))),
                  (n.material.uniforms.time.value =
                    e.manager.clock.getElapsedTime());
              });
          }),
          (e.prototype.setVisible = function (t, e, n) {
            (this.manualInteraction = !1),
              t
                ? (this.manager.transitions.remove(this.animFadeOut),
                  this.animFadeOut
                    .to(
                      {
                        value: 1,
                      },
                      e || 1e3
                    )
                    .delay(n || 0),
                  this.manager.transitions.add(this.animFadeIn.start()))
                : (this.manager.transitions.remove(this.animFadeIn),
                  this.animFadeOut
                    .to(
                      {
                        value: 0,
                      },
                      e || 1e3
                    )
                    .delay(n || 0),
                  this.manager.transitions.add(this.animFadeOut.start()));
          }),
          (e.prototype.onTraveling = function () {
            (this.manualInteraction = !1),
              this.children.forEach(function (t) {
                var e = t;
                e.hoverOn();
              });
          }),
          (e.prototype.reset = function () {
            this.setVisible(!0),
              (this.manualInteraction = !1),
              this.children.forEach(function (t) {
                var e = t;
                (e.material.uniforms["progress"].value = 0),
                  (e.material.uniforms["initAmplitude"].value = 30),
                  (e.material.uniforms["initHeight"].value = 0),
                  e.hoverOff(!0);
              });
          }),
          (e.prototype.playGreete = function () {
            var t = this;
            this.children.forEach(function (t) {
              var e = t;
              (e.material.uniforms["initAmplitude"].value = 30),
                (e.material.uniforms["initHeight"].value = 0),
                e.hoverOn();
            });
            var e = setTimeout(function () {
              t.children.forEach(function (t) {
                var e = t;
                (e.material.uniforms["initAmplitude"].value = 0.23),
                  (e.material.uniforms["initHeight"].value = 1),
                  e.hoverOff(!0);
              }),
                clearTimeout(e);
            }, 2500);
          }),
          e
        );
      })(S["Points"]),
      N = z,
      U = (n("5df3"), n("6397")),
      R = n.n(U),
      q =
        (n("673e"),
        (function (t) {
          function e(e, n) {
            var i = t.call(this) || this;
            return (
              (i.camera = e),
              (i.domElement = n),
              (i.enabled = !0),
              (i.target = new S["Vector3"](0, 0, 0)),
              (i.lookVector = new S["Vector3"]()),
              (i.aimFrom = i.camera.position),
              (i.lat = 0),
              (i.latMin = -40),
              (i.latMax = 40),
              (i.lon = 0),
              (i.phi = 0),
              (i.theta = 0),
              (i.lookSpeed = 0.05),
              (i.rotationAcc = new S["Vector2"]()),
              (i.rotationSpeed = new S["Vector2"]()),
              (i.rotationHistory = []),
              (i.rotationDifference = new S["Vector2"]()),
              (i.pointerDragOn = !1),
              (i.pointer = new S["Vector3"](0, 0, -1)),
              (i.pointerDragStart = new S["Vector3"](0, 0, -1)),
              (i.pointerDown = !1),
              (i.pointerDownPosition = new S["Vector2"]()),
              (i.couldBeClickToMove = !1),
              (i.controller = null),
              i
            );
          }
          return (
            L["a"](e, t),
            (e.prototype.bindEvents = function () {
              var t = this;
              this.domElement.addEventListener(
                "mousemove",
                this.onMouseMove.bind(this)
              ),
                this.domElement.addEventListener(
                  "mousedown",
                  this.onMouseDown.bind(this)
                ),
                this.domElement.addEventListener(
                  "mouseup",
                  this.onMouseUp.bind(this)
                ),
                this.domElement.addEventListener("mouseover", function (e) {
                  return t.pointerDragOn && 0 === e.which && t.onMouseUp(e);
                }),
                this.domElement.addEventListener(
                  "touchstart",
                  this.onTouchStart.bind(this)
                ),
                this.domElement.addEventListener(
                  "touchmove",
                  this.onTouchMove.bind(this)
                ),
                this.domElement.addEventListener(
                  "touchend",
                  this.onTouchEnd.bind(this)
                ),
                this.domElement.addEventListener(
                  "mousewheel",
                  this.onMouseWheel.bind(this)
                ),
                this.domElement.addEventListener(
                  "DOMMouseScroll",
                  this.onMouseWheel.bind(this)
                ),
                this.domElement.addEventListener("contextmenu", function (t) {
                  return t.preventDefault();
                }),
                document.addEventListener("keydown", this.onKeyDown.bind(this)),
                document.addEventListener("keyup", this.onKeyUp.bind(this));
            }),
            (e.prototype.lookAt = function (t) {
              var e = this.camera.position.clone().sub(t),
                n = Math.atan(e.z / e.x);
              (n += e.x < 0 ? Math.PI : 0),
                (n += e.x > 0 && e.z < 0 ? 2 * Math.PI : 0),
                (this.lon = S["Math"].radToDeg(n) + 180);
              var i = Math.sqrt(e.x * e.x + e.z * e.z),
                o = Math.atan(e.y / i);
              this.lat = -S["Math"].radToDeg(o);
            }),
            (e.prototype.startRotationFrom = function (t, e) {
              this.updatePointer(t, e),
                (this.pointerDragOn = !0),
                this.pointerDragStart.copy(this.pointer),
                (this.rotationHistory = []),
                this.rotationSpeed.set(0, 0);
            }),
            (e.prototype.onTouchStart = function (t) {
              this.enabled &&
                (t.preventDefault(),
                t.stopPropagation(),
                (this.couldBeClickToMove = !0),
                (this.pointerDown = !0),
                this.pointerDownPosition.set(
                  t.touches[0].clientX,
                  t.touches[0].clientY
                ),
                this.startRotationFrom(
                  t.changedTouches[0].clientX,
                  t.changedTouches[0].clientY
                ));
            }),
            (e.prototype.onMouseDown = function (t) {
              if (this.enabled)
                switch ((t.preventDefault(), t.stopPropagation(), t.button)) {
                  case 0:
                    this.startRotationFrom(t.clientX, t.clientY),
                      (this.couldBeClickToMove = !0),
                      (this.pointerDown = !0),
                      this.pointerDownPosition.set(t.clientX, t.clientY);
                    break;
                  case 2:
                }
            }),
            (e.prototype.updateRotation = function () {
              if (this.enabled && this.pointerDragOn) {
                var t = new S["Vector3"](
                    this.pointerDragStart.x,
                    this.pointerDragStart.y,
                    1
                  ).unproject(this.camera),
                  e = new S["Vector3"](
                    this.pointer.x,
                    this.pointer.y,
                    1
                  ).unproject(this.camera),
                  n = Math.sqrt(t.x * t.x + t.z * t.z),
                  i = Math.sqrt(e.x * e.x + e.z * e.z),
                  o = Math.atan2(t.y, n),
                  a = Math.atan2(e.y, i);
                (this.rotationDifference.y = S["Math"].radToDeg(o - a)),
                  (t.y = 0),
                  (e.y = 0);
                var s = Math.acos(t.dot(e) / t.length() / e.length());
                isNaN(s) ||
                  ((this.rotationDifference.x = S["Math"].radToDeg(s)),
                  this.pointerDragStart.x < this.pointer.x &&
                    (this.rotationDifference.x *= -1)),
                  this.pointerDragStart.copy(this.pointer);
              }
            }),
            (e.prototype.onMouseMove = function (t) {
              this.updatePointer(t.clientX, t.clientY),
                Math.abs(t.clientX - this.pointerDownPosition.x) +
                  Math.abs(t.clientY - this.pointerDownPosition.y) >
                  10 && (this.couldBeClickToMove = !1);
            }),
            (e.prototype.onTouchMove = function (t) {
              this.updatePointer(t.touches[0].clientX, t.touches[0].clientY),
                Math.abs(t.touches[0].clientX - this.pointerDownPosition.x) +
                  Math.abs(t.touches[0].clientY - this.pointerDownPosition.y) >
                  10 && (this.couldBeClickToMove = !1);
            }),
            (e.prototype.updatePointer = function (t, e) {
              (this.pointer.x = (t / window.innerWidth) * 2 - 1),
                (this.pointer.y = (-e / window.innerHeight) * 2 + 1);
            }),
            (e.prototype.endRotation = function () {
              if (
                ((this.pointerDragOn = !1),
                !this.controller || !this.controller.isMoving)
              ) {
                var t = this.rotationHistory.length,
                  e = this.rotationHistory
                    .reduce(function (t, e) {
                      return t.add(e);
                    }, new S["Vector2"](0))
                    .divideScalar(t);
                this.rotationSpeed.set(30 * e.x, 30 * e.y);
              }
            }),
            (e.prototype.onTouchEnd = function (t) {
              this.enabled &&
                (t.preventDefault(),
                t.stopPropagation(),
                this.endRotation(),
                (this.pointerDown = !1),
                this.couldBeClickToMove && this.controller.moveToDirection());
            }),
            (e.prototype.onMouseUp = function (t) {
              this.enabled &&
                (t.preventDefault(),
                t.stopPropagation(),
                this.endRotation(),
                (this.pointerDown = !1),
                this.couldBeClickToMove && this.controller.moveToDirection());
            }),
            (e.prototype.update = function (t) {
              if (this.enabled) {
                for (
                  this.updateRotation(),
                    this.rotationHistory.push(this.rotationDifference.clone());
                  this.rotationHistory.length > 5;

                )
                  this.rotationHistory.shift();
                (this.lon += this.rotationDifference.x),
                  (this.lat += this.rotationDifference.y),
                  this.rotationDifference.set(0, 0),
                  (this.rotationSpeed.x =
                    0.91 * this.rotationSpeed.x + 4.5 * this.rotationAcc.x),
                  (this.rotationSpeed.y =
                    0.91 * this.rotationSpeed.y + 4.5 * this.rotationAcc.y),
                  (this.lon += this.rotationSpeed.x * t),
                  (this.lat += this.rotationSpeed.y * t),
                  (this.lat = Math.max(
                    this.latMin,
                    Math.min(this.latMax, this.lat)
                  )),
                  (this.phi = S["Math"].degToRad(90 - this.lat)),
                  (this.theta = S["Math"].degToRad(this.lon)),
                  (this.lookVector.x =
                    Math.sin(this.phi) * Math.cos(this.theta)),
                  (this.lookVector.y = Math.cos(this.phi)),
                  (this.lookVector.z =
                    Math.sin(this.phi) * Math.sin(this.theta)),
                  this.target.copy(this.lookVector).add(this.aimFrom),
                  this.camera.lookAt(this.target);
              }
            }),
            (e.prototype.onMouseWheel = function (t) {
              if (this.enabled) {
                var e =
                  void 0 !== t["wheelDelta"]
                    ? t["wheelDelta"]
                    : void 0 !== t.detail && -t.detail;
                this.flyDirection(new S["Vector3"](0, 0, -e).normalize());
              }
            }),
            (e.prototype.onKeyDown = function (t) {
              !this.enabled ||
                t.metaKey ||
                t.ctrlKey ||
                (t.preventDefault(), this.handleKeyDown(t.which));
            }),
            (e.prototype.handleKeyDown = function (t) {
              switch (t) {
                case 38:
                case 87:
                  this.flyDirection(new S["Vector3"](0, 0, -1));
                  break;
                case 40:
                case 83:
                  this.flyDirection(new S["Vector3"](0, 0, 1));
                  break;
                case 65:
                  this.flyDirection(new S["Vector3"](-1, 0, 0));
                  break;
                case 68:
                  this.flyDirection(new S["Vector3"](1, 0, 0));
                  break;
                case 37:
                case 74:
                  this.rotationAcc.x = -1;
                  break;
                case 39:
                case 76:
                  this.rotationAcc.x = 1;
                  break;
                case 73:
                  this.rotationAcc.y = 1;
                  break;
                case 75:
                  this.rotationAcc.y = -1;
                  break;
              }
            }),
            (e.prototype.onKeyUp = function (t) {
              this.enabled &&
                (t.preventDefault(),
                t.stopPropagation(),
                this.handleKeyUp(t.which));
            }),
            (e.prototype.handleKeyUp = function (t) {
              switch (t) {
                case 37:
                case 74:
                  this.rotationAcc.x = 0;
                  break;
                case 39:
                case 76:
                  this.rotationAcc.x = 0;
                  break;
                case 73:
                  this.rotationAcc.y = 0;
                  break;
                case 75:
                  this.rotationAcc.y = 0;
              }
            }),
            (e.prototype.reset = function () {
              this.stop();
            }),
            (e.prototype.stop = function () {
              this.rotationAcc.set(0, 0), this.rotationSpeed.set(0, 0);
            }),
            (e.prototype.flyDirection = function (t) {
              if (this.controller && !this.controller.isMoving) {
                var e = new S["Vector3"]();
                this.camera.getWorldDirection(e),
                  1 == t.x &&
                    e
                      .applyAxisAngle(new S["Vector3"](0, 1, 0), -Math.PI / 2)
                      .normalize(),
                  -1 == t.x &&
                    e
                      .applyAxisAngle(new S["Vector3"](0, 1, 0), Math.PI / 2)
                      .normalize(),
                  1 == t.z &&
                    e
                      .applyAxisAngle(new S["Vector3"](0, 1, 0), Math.PI)
                      .normalize(),
                  this.controller.moveToDirection(e);
              }
            }),
            e
          );
        })(S["EventDispatcher"])),
      W = q,
      G =
        (new S["Vector3"](0, 1, 0),
        new S["Vector3"](1, 0, 0),
        (function () {
          function t(t, e) {
            (this.camera = t),
              (this.domElement = e),
              (this.enabled = !0),
              (this.rotation = new S["Vector2"]()),
              (this.screenPosition = new S["Vector2"]()),
              (this.lookAtTarget = new S["Vector3"]()),
              this.domElement.addEventListener(
                "mousemove",
                this.onMouseMove.bind(this)
              );
          }
          return (
            (t.prototype.update = function (t) {
              this.enabled &&
                (this.rotation.lerp(this.screenPosition, 0.03),
                (this.camera.rotation.y = 0.05 * -this.rotation.x),
                (this.camera.rotation.x = 0.02 * this.rotation.y - 0.5));
            }),
            (t.prototype.onMouseMove = function (t) {
              this.screenPosition.set(
                (t.clientX / window.innerWidth) * 2 - 1,
                (-t.clientY / window.innerHeight) * 2 + 1
              );
            }),
            t
          );
        })()),
      Z = G,
      Q = (function () {
        function t(t, e) {
          (this.camera = t),
            (this.manager = e),
            (this.frustum = new S["Frustum"]()),
            (this.frustumMatrix = new S["Matrix4"]()),
            (this.orbitControls = new R.a(
              this.camera,
              this.manager.renderer.domElement
            )),
            (this.panoControls = new W(
              this.camera,
              this.manager.renderer.domElement
            )),
            (this.greetControls = new Z(
              this.camera,
              this.manager.renderer.domElement
            )),
            (window["cameraController"] = this),
            (this.worldDirection = new S["Vector3"](0, 0, -1)),
            (this.worldPosition = new S["Vector3"](0, 0, 0)),
            (this.animPositionDutation = 7e3),
            (this.animPosition = new B["Tween"]({
              value: 0,
            })
              .delay(700)
              .easing(B["Easing"].Sinusoidal.Out)),
            (this.animRotationDutation = 6500),
            (this.animRotation = new B["Tween"]({
              value: 0,
            })
              .delay(800)
              .easing(B["Easing"].Sinusoidal.Out));
        }
        return (
          (t.prototype.init = function () {
            this.camera.position.set(0, 20, 50),
              (this.orbitControls.enabled = !1),
              (this.panoControls.enabled = !1),
              this.panoControls.bindEvents(),
              (this.greetControls.enabled = !1),
              this.reset();
          }),
          (t.prototype.reset = function () {
            this.camera.position.set(
              24.99624072843848,
              40.48893850255398,
              96.79653019074968
            ),
              this.camera.quaternion.set(
                -0.2728312078206973,
                0.018713127203850374,
                0.005307942093589542,
                0.9618652590982184
              ),
              this.tabMode(3);
          }),
          (t.prototype.update = function (t) {
            this.frustumMatrix.multiplyMatrices(
              this.camera.projectionMatrix,
              this.camera.matrixWorldInverse
            ),
              this.frustum.setFromMatrix(this.frustumMatrix),
              this.camera.getWorldDirection(this.worldDirection),
              this.camera.getWorldPosition(this.worldPosition),
              this.panoControls.update(t),
              this.greetControls.update(t);
          }),
          (t.prototype.tabMode = function (t) {
            switch (t) {
              case 0:
                (this.orbitControls.enabled = !0),
                  (this.panoControls.enabled = !1),
                  (this.greetControls.enabled = !1);
                break;
              case 1:
                (this.orbitControls.enabled = !1),
                  (this.greetControls.enabled = !1),
                  (this.panoControls.enabled = !0),
                  this.camera.getWorldDirection(this.worldDirection),
                  this.camera.getWorldPosition(this.worldPosition),
                  this.panoControls.lookAt(
                    this.worldPosition.clone().add(this.worldDirection)
                  );
                break;
              case 3:
                (this.orbitControls.enabled = !1),
                  (this.panoControls.enabled = !1),
                  (this.greetControls.enabled = !0);
                break;
              default:
                (this.orbitControls.enabled = !1),
                  (this.panoControls.enabled = !1);
                break;
            }
          }),
          (t.prototype.moveToGuidepost = function (t) {
            var e = this;
            (this.panoControls.enabled = !1), (this.greetControls.enabled = !1);
            var n = t.cameraGuidePoisition,
              i = new S["Matrix4"]().lookAt(
                t.cameraGuidePoisition,
                t.cameraGuidePivot,
                new S["Vector3"](0, 1, 0)
              ),
              o = new S["Quaternion"]().setFromRotationMatrix(i),
              a = this.camera.position.clone(),
              s = this.camera.quaternion.clone(),
              r = new Promise(function (t, i) {
                e.animPosition
                  .to(
                    {
                      value: 1,
                    },
                    e.animPositionDutation
                  )
                  .start()
                  .onUpdate(function (t) {
                    e.camera.position.lerpVectors(a, n, t.value);
                  })
                  .onComplete(function (e) {
                    (e.value = 0), t();
                  }),
                  e.manager.transitions.add(e.animPosition);
              }),
              l = new Promise(function (t, n) {
                e.animRotation
                  .to(
                    {
                      value: 1,
                    },
                    e.animRotationDutation
                  )
                  .start()
                  .onUpdate(function (t) {
                    S["Quaternion"].slerp(s, o, e.camera.quaternion, t.value);
                  })
                  .onComplete(function (e) {
                    (e.value = 0), t();
                  }),
                  e.manager.transitions.add(e.animRotation);
              });
            return Promise.all([r, l]);
          }),
          t
        );
      })(),
      X = Q;
    (function (t) {
      t[(t["Pano"] = 0)] = "Pano";
    })(i || (i = {}));
    var Y,
      K = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.hotspotId = e.id),
            (n.flow = e.flow),
            (n.title = e.title),
            (n.sceneId = e.sceneId),
            n.initDom(),
            (n.position2D = new S["Vector3"]()),
            n.position.copy(e.position),
            (n.contents = e.contents),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.initDom = function () {
            var t = document.createElement("div");
            (t.className = "hotspot"),
              t.addEventListener("click", this.onClick.bind(this), !1),
              (t.style.opacity = "0");
            var e = document.createElement("div");
            (e.className = "img"),
              (e.innerHTML =
                '\n            <svg viewBox="0 0 100 100"><circle fill="#820000" cx="50" cy="50" r="50"/><g><path fill="#FFFFFF" d="M64.5,30.5H36c-3.3,0-6,2.7-6,6v28.5c0,3.3,2.7,6,6,6h28.5c3.3,0,6-2.7,6-6V36.4 C70.4,33.1,67.8,30.5,64.5,30.5z M67.2,45.1l-0.4,19.8c0,1.3-1,2.3-2.3,2.3H45.8c0.2-5.9,2.5-11.3,6.7-15.5 C56.4,47.7,61.6,45.4,67.2,45.1z M42.8,62.2c-0.3,1.6-0.5,3.3-0.6,5l-6.2,0c-1.3,0-2.3-1-2.3-2.3v-5.6c0.1,0,0.1-0.1,0.2-0.1\n                        c2.8-2.3,7-2.3,9.8,0c-0.3,0.8-0.5,1.6-0.7,2.5L42.8,62.2L42.8,62.2z M66.8,41.5c-6.4,0.4-12.3,3.1-16.9,7.7\n                        c-1.9,1.9-3.6,4.2-4.8,6.6c-1.9-1.3-4.1-2-6.4-2c-1.8,0-3.5,0.4-5,1.2V36.4c0-1.3,1-2.3,2.3-2.3h28.5c1.3,0,2.3,1,2.3,2.3V41.5z"/>\n                    <path fill="#FFFFFF" d="M41.6,36.2L41.6,36.2c-3,0-5.5,2.5-5.5,5.5c0,3,2.5,5.5,5.5,5.5c3,0,5.5-2.5,5.5-5.5\n                        C47.1,38.6,44.6,36.2,41.6,36.2z M43.8,41.6c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2c0-1.2,0.9-2.2,2.1-2.2h0.1\n                        C42.8,39.4,43.8,40.4,43.8,41.6z"/>\n                </g>\n            <svg>\n            ');
            var n = document.createElement("span");
            (n.className = "text"),
              (n.innerText = this.title),
              t.appendChild(n),
              t.appendChild(e),
              document.body.appendChild(t),
              (this.dom = t),
              (this.visible = !1);
          }),
          (e.prototype.update = function (t) {
            if (this.controller) {
              var e = this.controller.manager.camera,
                n = this.controller.manager.cameraController.frustum;
              this.position2D.copy(this.position).project(e),
                (this.dom.style.transform =
                  "translate( " +
                  0.5 *
                    (document.body.offsetWidth * this.position2D.x -
                      this.dom.offsetWidth) +
                  "px, \n                                                  " +
                  -0.5 *
                    (document.body.offsetHeight * this.position2D.y +
                      this.dom.offsetHeight) +
                  "px )"),
                this.setVisible(this.visible && n.containsPoint(this.position));
            }
          }),
          (e.prototype.setVisible = function (t) {
            (this.dom.style.opacity = t ? "1" : "0"),
              (this.dom.style.pointerEvents = t ? "auto" : "none");
          }),
          (e.prototype.onClick = function (t) {
            this.controller && this.controller.onHotspotClick(this);
          }),
          e
        );
      })(S["Object3D"]),
      J = K;
    (function (t) {
      (t[(t["Image"] = 0)] = "Image"), (t[(t["Model"] = 1)] = "Model");
    })(Y || (Y = {}));
    var tt,
      et = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.hotspotId = e.id),
            (n.title = e.title),
            (n.sign = e.sign),
            (n.targetFlow = e.targetFlow),
            n.initDom(),
            (n.position2D = new S["Vector3"]()),
            n.position.copy(e.position),
            (n.cameraGuidePoisition = new S["Vector3"]().copy(
              e.cameraGuide.posture.pos
            )),
            (n.cameraGuidePivot = new S["Vector3"]().copy(
              e.cameraGuide.posture.pivot
            )),
            (n.visible = !1),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.initDom = function () {
            var t = document.createElement("div");
            (t.className = "guidepost"), (t.style.opacity = "0");
            var e = document.createElement("img");
            e.addEventListener("click", this.onClick.bind(this), !1),
              (e.className = "img"),
              e.setAttribute("src", this.sign),
              t.appendChild(e),
              document.body.appendChild(t),
              (this.dom = t);
          }),
          (e.prototype.update = function (t) {
            if (this.controller) {
              var e = this.controller.manager.camera,
                n = this.controller.manager.cameraController.frustum;
              this.position2D.copy(this.position).project(e),
                (this.dom.style.transform =
                  "translate( " +
                  0.5 *
                    (document.body.offsetWidth * this.position2D.x -
                      this.dom.offsetWidth) +
                  "px, \n                                                  " +
                  -0.5 *
                    (document.body.offsetHeight * this.position2D.y +
                      this.dom.offsetHeight) +
                  "px )"),
                this.setVisible(this.visible && n.containsPoint(this.position));
            }
          }),
          (e.prototype.setVisible = function (t) {
            (this.dom.style.opacity = t ? "1" : "0"),
              (this.dom.style.pointerEvents = t ? "auto" : "none");
          }),
          (e.prototype.onClick = function (t) {
            this.controller && this.controller.onGuidePostClick(this);
          }),
          e
        );
      })(S["Object3D"]),
      nt = et;
    (function (t) {
      t[(t["Image"] = 0)] = "Image";
    })(tt || (tt = {}));
    var it,
      ot,
      at,
      st,
      rt,
      lt,
      ct,
      ut,
      dt,
      ht,
      pt,
      mt = (function () {
        function t(t) {
          (this.manager = t),
            (this.guideposts = []),
            (this.hotspots = []),
            (this.fileLoader = new S["FileLoader"]().setResponseType("json"));
        }
        return (
          (t.prototype.init = function () {
            var t = this;
            this.fileLoader.load(
              "hotspots/hotspots-" + this.manager.app.lang + ".json",
              function (e) {
                e.guideposts.forEach(function (e, n) {
                  t.addGuidepost(new nt(e));
                }),
                  e.hotspots.forEach(function (e) {
                    t.addHotspot(new J(e));
                  });
              }
            );
          }),
          (t.prototype.update = function (t) {
            this.hotspots.forEach(function (e) {
              e.update(t);
            }),
              this.guideposts.forEach(function (e) {
                e.update(t);
              });
          }),
          (t.prototype.addGuidepost = function (t) {
            this.manager.scene.add(t),
              this.guideposts.push(t),
              (t.controller = this);
          }),
          (t.prototype.addHotspot = function (t) {
            this.manager.scene.add(t),
              this.hotspots.push(t),
              (t.controller = this);
          }),
          (t.prototype.onHotspotClick = function (t) {
            this.manager.app.openHotspot(t);
          }),
          (t.prototype.onGuidePostClick = function (t) {
            var e = t.targetFlow;
            this.manager.app.openFlow(e);
          }),
          (t.prototype.openFlow = function (t) {
            var e = this,
              n = setTimeout(function () {
                e.guideposts.forEach(function (e) {
                  e.visible = t.hotspotId == e.hotspotId;
                }),
                  clearTimeout(n);
              }, 500);
          }),
          (t.prototype.closeFlow = function (t) {}),
          (t.prototype.onEnterScene = function (t) {
            this.hotspots.forEach(function (e) {
              e.visible = e.flow == t.targetFlow;
            }),
              this.guideposts.forEach(function (t) {
                t.visible = !1;
              });
          }),
          (t.prototype.reset = function () {
            this.hotspots.forEach(function (t) {
              return (t.visible = !1);
            }),
              this.guideposts.forEach(function (t) {
                return (t.visible = !1);
              });
          }),
          (t.prototype.showAllGuideposts = function (t) {
            this.guideposts.forEach(function (e) {
              e.visible = t;
            });
          }),
          t
        );
      })(),
      ft = mt,
      gt = (n("34ef"), n("fa1c")),
      vt = (function () {
        function t() {
          var t = this;
          gt["load"]("proto/dam.proto", function (e, n) {
            if (e) throw e;
            t.dam = n;
          }),
            gt["load"]("proto/vision.proto", function (e, n) {
              if (e) throw e;
              t.modeldata = n;
            });
        }
        return t;
      })(),
      wt = new vt(),
      yt = {
        vs: "\n\t\t\n\t\t\tvarying vec2 vUv;\n\t\t\t\n\t\t\tvoid main(void) {\t\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);\n\t\t\t\tvUv = uv;\n\t\t\t\t\n\t\t\t}\n\t\t",
        fs: "\n\t\t\tuniform sampler2D map;\n\t\t\tuniform float u_alphatest;\n\t\t\tuniform float opacity;\n\t\t\tvarying vec2 vUv;\n\t\t\t\n\t\t\tfloat hash12(vec2 p) {\n\t\t\t\tvec3 p3  = fract(vec3(p.xyx) * 443.8975);\n\t\t\t    p3 += dot(p3, p3.yzx + 1.5);\n\t\t\t    return fract((p3.x + p3.y) * p3.z);\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tvoid main(void) {\t\t\t\n\t\t\t\tif(u_alphatest < 1. && hash12(vUv) > u_alphatest) {\n\t\t\t\t\tdiscard;\n\t\t\t\t}\n\t\t    \tvec4 diffuse = texture2D(map,vUv);    \t\n\t\t        gl_FragColor = vec4(diffuse.rgb, opacity);\n\t\t\t}\n        ",
        uniforms: {
          map: new S["Uniform"](null),
          u_alphatest: new S["Uniform"](1),
          opacity: new S["Uniform"](1),
        },
      },
      bt = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (
            (i.manager = e),
            i.buildGeometry(n.model),
            i.buildMaterial(n.texture),
            i.manager.scene.add(i),
            i
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.buildGeometry = function (t) {
            var e = this;
            this.manager.loader.addRequest(t, "arraybuffer", function (t) {
              var n = new Uint8Array(t.data),
                i = wt.dam.lookupType("binary_mesh").decode(n, n.length),
                o = [],
                a = [],
                s = [];
              i.chunk.forEach(function (t, e) {
                (o = o.concat(t.vertices.xyz)),
                  (a = a.concat(t.vertices.uv)),
                  (s = s.concat(t.faces.faces));
              }),
                (e.geometry = new S["BufferGeometry"]()),
                e.geometry.addAttribute(
                  "position",
                  new S["BufferAttribute"](new Float32Array(o), 3)
                ),
                e.geometry.addAttribute(
                  "uv",
                  new S["BufferAttribute"](new Float32Array(a), 2)
                ),
                e.geometry.setIndex(s);
            });
          }),
          (e.prototype.buildMaterial = function (t) {
            var e = this,
              n = new S["Texture"]();
            (n.image = new Image()),
              (n.image.src = t),
              (n.magFilter = S["NearestFilter"]),
              (this.material = new S["ShaderMaterial"]({
                vertexShader: yt.vs,
                fragmentShader: yt.fs,
                uniforms: S["UniformsUtils"].clone(yt.uniforms),
                skinning: !1,
                morphTargets: !1,
                side: S["DoubleSide"],
              })),
              (n.image.onload = function () {
                (n.needsUpdate = !0),
                  (e.material.uniforms.map.value = n),
                  (e.material.needsUpdate = !0);
              }),
              (this.animFadeIn = new B["Tween"](
                this.material.uniforms.u_alphatest
              )
                .to(
                  {
                    value: 1,
                  },
                  500
                )
                .onStart(function () {
                  e.visible = !0;
                })),
              (this.animFadeOut = new B["Tween"](
                this.material.uniforms.u_alphatest
              )
                .to(
                  {
                    value: 0,
                  },
                  500
                )
                .onComplete(function (t) {
                  e.visible = !1;
                }));
          }),
          (e.prototype.setVisible = function (t, e, n) {
            t
              ? (this.manager.transitions.remove(this.animFadeOut),
                this.animFadeIn
                  .to(
                    {
                      value: 1,
                    },
                    e || 500
                  )
                  .delay(n || 0),
                this.manager.transitions.add(this.animFadeIn.start()))
              : (this.manager.transitions.remove(this.animFadeIn),
                this.animFadeOut
                  .to(
                    {
                      value: 0,
                    },
                    e || 500
                  )
                  .delay(n || 0),
                this.manager.transitions.add(this.animFadeOut.start()));
          }),
          e
        );
      })(S["Mesh"]),
      xt = bt,
      Ct =
        (n("55dd"),
        n("f400"),
        n("a481"),
        (function (t) {
          function e(e, n, i) {
            var o = t.call(this) || this;
            (o.manager = e),
              (o.collection = n),
              o.buildGeometry(),
              o.buildMaterial(),
              o.position.set(i.puck.x, i.puck.z, -i.puck.y),
              o.updateMatrix(),
              o.updateMatrixWorld(!0),
              (o.panoId = o.decodeId(i.uuid)),
              (o.visibles = [].concat(i.visibles)),
              (o.score = 0),
              (o.visible = !1),
              (o.neighbourMap = new Map()),
              (o.panoPosition = new S["Vector3"](
                i.pose.translation.x,
                i.pose.translation.z,
                -i.pose.translation.y
              ));
            var a = new S["Quaternion"]()
              .set(
                i.pose.rotation.x,
                i.pose.rotation.z,
                -i.pose.rotation.y,
                i.pose.rotation.w
              )
              .multiply(
                new S["Quaternion"]().setFromAxisAngle(
                  new S["Vector3"](0, 1, 0),
                  S["Math"].degToRad(90)
                )
              );
            return (
              (o.panoMatrix = new S["Matrix4"]().makeRotationFromQuaternion(a)),
              (o.animFadeIn = new B["Tween"](o.material)
                .to(
                  {
                    opacity: 1,
                  },
                  500
                )
                .onStart(function () {
                  o.visible = !0;
                })),
              (o.animFadeOut = new B["Tween"](o.material)
                .to(
                  {
                    opacity: 0,
                  },
                  500
                )
                .onComplete(function () {
                  o.visible = !1;
                })),
              o
            );
          }
          return (
            L["a"](e, t),
            (e.prototype.buildGeometry = function () {
              (this.geometry = new S["CircleBufferGeometry"](0.3, 20)),
                this.geometry.rotateX(-Math.PI / 2),
                this.geometry.computeBoundingBox();
            }),
            (e.prototype.buildMaterial = function () {
              var t = new S["TextureLoader"]().load("image/pointBasic.png");
              (this.material = new S["MeshBasicMaterial"]({
                color: 16777215,
                transparent: !0,
                opacity: 0.6,
                map: t,
                depthWrite: !1,
                depthTest: !1,
              })),
                (this.renderOrder = 101);
            }),
            (e.prototype.decodeId = function (t) {
              for (var e = "", n = 0; n < t.length; n++)
                e += "%" + t[n].toString(16);
              return decodeURIComponent(e).replace(/\-/g, "");
            }),
            (e.prototype.hoverOn = function () {
              this.setVisible(!0);
            }),
            (e.prototype.hoverOff = function () {
              this.setVisible(!1);
            }),
            (e.prototype.setVisible = function (t, e, n) {
              t
                ? (this.manager.transitions.remove(this.animFadeOut),
                  this.animFadeIn
                    .to(
                      {
                        opacity: 1,
                      },
                      e || 500
                    )
                    .delay(n || 0),
                  this.manager.transitions.add(this.animFadeIn.start()))
                : (this.manager.transitions.remove(this.animFadeIn),
                  this.animFadeOut
                    .to(
                      {
                        opacity: 0,
                      },
                      e || 500
                    )
                    .delay(n || 0),
                  this.manager.transitions.add(this.animFadeOut.start()));
            }),
            (e.prototype.findNeighourPanos = function () {
              return (
                this.collection.setNeighbour(this, this, !1),
                this.collection.neighbourMap[this.panoId]
              );
            }),
            e
          );
        })(S["Mesh"])),
      Mt = Ct,
      St = (function () {
        function t(t, e, n) {
          var i = this;
          (this.controller = t),
            (this.scene = e),
            (this.pointsList = []),
            (this.pointsMap = new Map()),
            (this.neighbourMap = new Map()),
            (this.descriptorUrl = n.descriptor),
            (this.imagesFolderUrl = n.images),
            this.controller.manager.loader.addRequest(
              this.descriptorUrl,
              "arraybuffer",
              function (t) {
                var e = wt.modeldata
                  .lookupType("NavigationInfo")
                  .decode(new Uint8Array(t.data));
                e.sweepLocations.forEach(function (t) {
                  i.addPanoPoint(new Mt(i.controller.manager, i, t));
                }),
                  i.buildPointsNeighbouring(i.scene.mesh);
              }
            );
        }
        return (
          (t.prototype.addPanoPoint = function (t) {
            this.scene.add(t),
              this.pointsMap.set(t.panoId, t),
              this.pointsList.push(t);
          }),
          (t.prototype.buildPointsNeighbouring = function (t) {
            var e = this,
              n = new S["Raycaster"]();
            (n.far = 50),
              this.pointsList.forEach(function (t) {
                e.neighbourMap.set(t.panoId, t.neighbourMap),
                  t.visibles.forEach(function (n) {
                    t.neighbourMap.set(e.pointsList[n].panoId, !0);
                  });
              });
          }),
          (t.prototype.findRankedByScore = function (t, e, n, i) {
            var o = this.sortByScore(e, n);
            return !o || 0 === o.length || t >= o.length ? null : (o[t], o[t]);
          }),
          (t.prototype.sortByScore = function (t, e) {
            var n = this.fliterAll(this.pointsList, t);
            return 0 == n.length
              ? null
              : (n = n
                  .map(function (t) {
                    return (
                      (t.score = e.reduce(function (e, n) {
                        return e + n(t);
                      }, 0)),
                      t
                    );
                  })
                  .sort(function (t, e) {
                    return e.score - t.score;
                  }));
          }),
          (t.prototype.fliterAll = function (t, e) {
            return t.filter(function (t) {
              return e.every(function (e) {
                return e(t);
              });
            });
          }),
          (t.prototype.setNeighbour = function (t, e, n) {
            return (
              this.neighbourMap[t.panoId][e.panoId] ||
                (this.neighbourMap[t.panoId] = {}),
              this.neighbourMap[e.panoId] || (this.neighbourMap[e.panoId] = {}),
              (this.neighbourMap[t.panoId][t.panoId] = !0),
              (this.neighbourMap[e.panoId][e.panoId] = !0),
              (this.neighbourMap[t.panoId][e.panoId] = n),
              (this.neighbourMap[e.panoId][t.panoId] = n),
              this.neighbourMap[t.panoId]
            );
          }),
          t
        );
      })(),
      Et = St,
      Tt = {
        vertexShader:
          "\n\n        uniform vec3 pano0Position;\n        uniform mat4 pano0Matrix;\n        uniform vec3 pano1Position;\n        uniform mat4 pano1Matrix;\n\n        varying vec2 vUv;\n        varying vec3 vWorldPosition0;\n        varying vec3 vWorldPosition1;\n\n        void main() {\n\n            vec4 worldPosition = modelMatrix * vec4(position.xyz, 1.0);\n            vec3 positionLocalToPanoCenter0 = position.xyz - pano0Position;\n            vWorldPosition0 = (vec4(positionLocalToPanoCenter0, 1.0) * pano0Matrix).xyz;\n            vWorldPosition0.x *= -1.0;\n\n            vec3 positionLocalToPanoCenter1 = position.xyz - pano1Position;\n            vWorldPosition1 = (vec4(positionLocalToPanoCenter1, 1.0) * pano1Matrix).xyz;\n            vWorldPosition1.x *= -1.0;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n        }\n    ",
        fragmentShader:
          "\n\n        uniform float opacity;\n        uniform float progress;\n        uniform vec3 pano0Position;\n        uniform samplerCube pano0Map;\n        uniform vec3 pano1Position;\n        uniform samplerCube pano1Map;\n\n        varying vec2 vUv;\n        varying vec3 vWorldPosition0;\n        varying vec3 vWorldPosition1;\n\n        void main() {\n            vec4 colorFromPano0 = textureCube( pano0Map, vWorldPosition0.xyz );\n            vec4 colorFromPano1 = textureCube( pano1Map, vWorldPosition1.xyz );\n\n            vec4 colorFromPanos = mix(colorFromPano0, colorFromPano1, progress);\n            float whiteness = 1.0 - smoothstep(0.1, 0.2, opacity);\n            colorFromPanos = mix(colorFromPanos, vec4(0.5, 0.5, 0.5, 1.0), whiteness);\n\n            gl_FragColor = vec4(colorFromPanos.rgb, opacity);\n        }\n    ",
        uniforms: {
          opacity: {
            type: "f",
            value: 0,
          },
          progress: {
            type: "f",
            value: 0,
          },
          pano0Map: {
            type: "t",
            value: null,
          },
          pano0Position: {
            type: "v3",
            value: new S["Vector3"](),
          },
          pano0Matrix: {
            type: "m4",
            value: new S["Matrix4"](),
          },
          pano1Map: {
            type: "t",
            value: null,
          },
          pano1Position: {
            type: "v3",
            value: new S["Vector3"](),
          },
          pano1Matrix: {
            type: "m4",
            value: new S["Matrix4"](),
          },
        },
      },
      Dt = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (
            (i.scene = e),
            i.buildGeometry(n),
            i.buildMaterial(),
            i.updateMatrix(),
            i.updateMatrixWorld(),
            i.scene.add(i),
            (i.animFadeIn = new B["Tween"](i.material.uniforms.opacity)
              .to(
                {
                  value: 1,
                },
                1e3
              )
              .delay(600)
              .onStart(function () {
                i.visible = !0;
              })),
            (i.animFadeOut = new B["Tween"](i.material.uniforms.opacity)
              .to(
                {
                  value: 0,
                },
                1e3
              )
              .delay(600)
              .onComplete(function (t) {
                i.visible = !1;
              })),
            i
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.buildGeometry = function (t) {
            (this.geometry = new S["BoxBufferGeometry"](
              t.size.x,
              t.size.y,
              t.size.z
            )),
              this.geometry.translate(t.offset.x, t.offset.y, t.offset.z),
              this.geometry.computeBoundingBox();
          }),
          (e.prototype.buildMaterial = function () {
            (this.material = new S["ShaderMaterial"]({
              vertexShader: Tt.vertexShader,
              fragmentShader: Tt.fragmentShader,
              uniforms: S["UniformsUtils"].clone(Tt.uniforms),
              transparent: !0,
              side: S["BackSide"],
              depthTest: !1,
              depthWrite: !1,
            })),
              (this.renderOrder = 100);
          }),
          (e.prototype.setView0 = function (t, e) {
            (this.material.uniforms["pano0Map"].value = e),
              (this.material.uniforms["pano0Position"].value =
                t.panoPosition.clone()),
              (this.material.uniforms["pano0Matrix"].value =
                t.panoMatrix.clone());
          }),
          (e.prototype.setView1 = function (t, e) {
            (this.material.uniforms["pano1Map"].value = e),
              (this.material.uniforms["pano1Position"].value =
                t.panoPosition.clone()),
              (this.material.uniforms["pano1Matrix"].value =
                t.panoMatrix.clone());
          }),
          (e.prototype.setVisible = function (t, e, n) {
            t
              ? (this.scene.contoller.manager.transitions.remove(
                  this.animFadeOut
                ),
                this.animFadeIn
                  .to(
                    {
                      value: 1,
                    },
                    e || 600
                  )
                  .delay(n || 0),
                this.scene.contoller.manager.transitions.add(
                  this.animFadeIn.start()
                ))
              : (this.scene.contoller.manager.transitions.remove(
                  this.animFadeIn
                ),
                this.animFadeOut
                  .to(
                    {
                      value: 0,
                    },
                    e || 600
                  )
                  .delay(n || 0),
                this.scene.contoller.manager.transitions.add(
                  this.animFadeOut.start()
                ));
          }),
          e
        );
      })(S["Mesh"]),
      Vt = Dt,
      Pt = (function (t) {
        function e(e, n) {
          var i = t.call(this) || this;
          return (
            (i.contoller = e),
            (i.sceneId = n.id),
            (i.flow = n.flow),
            n.mesh && i.createMesh(n.mesh),
            (i.points = new Et(e, i, n.pano)),
            (i.beginIndex = n.begin),
            i.position.copy(n.transform.translation),
            i.rotation.set(
              S["Math"].degToRad(n.transform.rotation.x),
              S["Math"].degToRad(n.transform.rotation.y),
              S["Math"].degToRad(n.transform.rotation.z)
            ),
            i.scale.copy(n.transform.scale),
            i.updateMatrix(),
            i.updateWorldMatrix(!0, !0),
            (i.viewbox = new Vt(i, n.pano.viewbox)),
            i.contoller.manager.scene.add(i),
            (i.floor = new S["Plane"](new S["Vector3"](0, 1, 0), 0)),
            i
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.update = function (t) {
            this.visible;
          }),
          (e.prototype.createMesh = function (t) {
            (this.mesh = new xt(this.contoller.manager, t)),
              this.mesh.setVisible(!1);
          }),
          (e.prototype.onEnter = function (t, e) {
            (this.visible = !0),
              this.mesh.setVisible(!0),
              this.viewbox.setView0(e, t),
              this.viewbox.setView1(e, t),
              this.viewbox.setVisible(!0, 1e3, 750),
              this.points.pointsList.forEach(function (t) {
                t.setVisible(!1, 0, 0);
              });
          }),
          (e.prototype.onExit = function () {
            this.mesh && this.mesh.setVisible(!1),
              this.points.pointsList.forEach(function (t) {
                t.setVisible(!1);
              }),
              this.viewbox.setVisible(!1, 100);
          }),
          (e.prototype.onMoveToPoint = function (t, e, n) {
            var i = this;
            this.viewbox.setView1(e, t),
              this.contoller.manager.transitions.add(
                new B["Tween"](this.viewbox.material.uniforms.progress)
                  .onComplete(function () {
                    (i.viewbox.material.uniforms.progress.value = 0),
                      i.viewbox.setView0(e, t);
                  })
                  .easing(B["Easing"].Quadratic.InOut)
                  .to(
                    {
                      value: 1,
                    },
                    n || 1e3
                  )
                  .start()
              );
          }),
          (e.prototype.directionWorldToLocal = function (t) {
            return this.worldToLocal(t.clone()), t.normalize();
          }),
          (e.prototype.updatePointsVisible = function (t) {
            this.points.pointsList.forEach(function (t) {
              t.setVisible(!1);
            });
          }),
          (e.prototype.getEntryPoint = function () {
            return this.points.pointsList[this.beginIndex];
          }),
          e
        );
      })(S["Object3D"]),
      Ot = Pt,
      kt = (function () {
        function t() {
          (this.textureLoader = new S["CubeTextureLoader"]()),
            (this.textures = []),
            (this.textureLoader = new S["CubeTextureLoader"]());
        }
        return (
          (t.prototype.setPath = function (t) {
            this.textureLoader.setPath(t);
          }),
          (t.prototype.getTextureForPoint = function (t) {
            var e = this;
            return new Promise(function (n, i) {
              e.textureLoader.load(e.getUrls(t.panoId), function (t) {
                n(t), e.textures.push(t);
              });
            });
          }),
          (t.prototype.disposeAllTexture = function () {
            this.textures.forEach(function (t) {
              t.dispose();
            });
          }),
          (t.prototype.getUrls = function (t) {
            var e = [];
            return (
              e.push(t + "_skybox2.jpg"),
              e.push(t + "_skybox4.jpg"),
              e.push(t + "_skybox0.jpg"),
              e.push(t + "_skybox5.jpg"),
              e.push(t + "_skybox1.jpg"),
              e.push(t + "_skybox3.jpg"),
              e
            );
          }),
          t
        );
      })(),
      It = kt,
      _t = {
        filterFunctions: {
          inDirection: function (t, e, n) {
            return function (i) {
              var o = i.position.clone().sub(t).normalize();
              return o.dot(e) > n;
            };
          },
          inFloorDirection: function (t, e, n) {
            return function (i) {
              var o = i.floorPosition.clone().sub(t).normalize();
              return o.dot(e) > n;
            };
          },
          inPanoDirection: function (t, e, n) {
            return (
              (n = n || 0.75),
              function (i) {
                var o = i
                  .getWorldPosition(new S["Vector3"]())
                  .setY(i.panoPosition.y)
                  .clone()
                  .sub(t)
                  .normalize();
                return o.dot(e) > n;
              }
            );
          },
          atFloor: function (t) {
            return function (e) {
              return !t || e.floor === t;
            };
          },
          not: function (t) {
            return function (e) {
              return e !== t;
            };
          },
          notIn: function (t) {
            return function (e) {
              return -1 === t.indexOf(e);
            };
          },
          isLoaded: function () {
            return function (t) {
              return t.isLoaded();
            };
          },
          isNotLoaded: function () {
            return function (t) {
              return !t.isLoaded();
            };
          },
          isCloseEnoughTo: function (t, e) {
            return function (n) {
              return t.distanceTo(n.floorPosition) < e;
            };
          },
          hasMinimumHeightDifferenceTo: function (t, e) {
            return function (n) {
              return Math.abs(n.position.y - t.y) > e;
            };
          },
          isNotBehindNormal: function (t, e) {
            var n = new S["Vector3"]();
            return (
              (e = e.clone()),
              function (i) {
                var o = n.copy(i.position).sub(t).normalize();
                return o.dot(e) > 0;
              }
            );
          },
          isNeighbourPanoTo: function (t) {
            return function (e) {
              var n = !t || !t.neighbourMap || t.neighbourMap.get(e.panoId);
              return n;
            };
          },
          isNeighbourOfNeighbourTo: function (t) {
            return function (e) {
              return (
                !!t.neighbourPanos[e.id] ||
                t.neighbourUUIDs.some(function (n) {
                  var i = t.model.panos.get(n);
                  return !!i && i.neighbourPanos[e.id];
                })
              );
            };
          },
          isNotRecentlyFailed: function (t) {
            return function (e) {
              return Date.now() - e.failedLoadingAt > t;
            };
          },
          isOnVisibleFloor: function () {
            return function (t) {
              return !t.floor.hidden;
            };
          },
          isPanoAligned: function () {
            return function (t) {
              return !0;
            };
          },
        },
        scortFuntion: {
          distanceToPoint: function (t) {
            return function (e, n) {
              return e.position.distanceTo(t) - n.position.distanceTo(t);
            };
          },
          floorDistanceToPoint: function (t) {
            return function (e, n) {
              return (
                e.floorPosition.distanceTo(t) - n.floorPosition.distanceTo(t)
              );
            };
          },
          choose: function (t) {
            return function (e, n) {
              return t.id === e.id ? -1 : t.id === n.id ? 1 : 0;
            };
          },
        },
        scoreJudges: {
          distance: function (t, e) {
            return (
              (e = e || -1),
              function (n) {
                return t ? t.position.distanceTo(n.position) * e : 0;
              }
            );
          },
          distanceSquared: function (t, e) {
            return (
              (e = e || -1),
              function (n) {
                return t ? t.position.distanceToSquared(n.position) * e : 0;
              }
            );
          },
          direction: function (t, e) {
            return function (n) {
              var i = n
                .getWorldPosition(new S["Vector3"]())
                .clone()
                .sub(t)
                .normalize();
              return 10 * i.dot(e);
            };
          },
          angle: function (t, e) {
            return function (n) {
              var i = n.position.clone().sub(t).normalize();
              return -30 * i.angleTo(e);
            };
          },
          inFieldOfView: function (t, e) {
            return function (n) {
              var i = n.position.clone().sub(t).normalize();
              return i.dot(e) > 0.75 ? 10 : -1;
            };
          },
          optionality: function (t) {
            return function (e) {
              var n = e.neighbourUUIDs.filter(function (e) {
                return !(e in t.neighbourUUIDs) && e !== t.id;
              });
              return 3 * n.length;
            };
          },
          penalizeHeightDifferenceUnder: function (t, e) {
            return function (n) {
              return t.y - n.position.y < e ? -20 : 0;
            };
          },
        },
      },
      Lt = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.controller = e),
            n.buildTextures(),
            n.buildGeometry(),
            n.buildMaterial(),
            n.controller.manager.scene.add(n),
            (n.animFadeIn = new B["Tween"](n.material)
              .to(
                {
                  opacity: 1,
                },
                500
              )
              .onStart(function () {
                n.visible = !0;
              })),
            (n.animFadeOut = new B["Tween"](n.material)
              .to(
                {
                  opacity: 0,
                },
                500
              )
              .onComplete(function () {
                n.visible = !1;
              })),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.buildTextures = function () {
            var t = this;
            (this.textureBasic = new S["Texture"]()),
              (this.textureBasic.image = new Image()),
              (this.textureBasic.image.src = "image/reticule.png"),
              (this.textureBasic.image.onload = function () {
                t.textureBasic.needsUpdate = !0;
              }),
              (this.textureNormal = new S["Texture"]()),
              (this.textureNormal.image = new Image()),
              (this.textureNormal.image.src = "image/pointBasic.png"),
              (this.textureNormal.image.onload = function () {
                t.textureBasic.needsUpdate = !0;
              }),
              (this.textureActive = new S["Texture"]()),
              (this.textureActive.image = new Image()),
              (this.textureActive.image.src = "image/pointActive.png"),
              (this.textureActive.image.onload = function () {
                t.textureBasic.needsUpdate = !0;
              });
          }),
          (e.prototype.buildGeometry = function () {
            (this.geometry = new S["CircleBufferGeometry"](0.3, 20)),
              this.geometry.rotateX(-Math.PI / 2);
          }),
          (e.prototype.buildMaterial = function () {
            this.material = new S["MeshBasicMaterial"]({
              transparent: !0,
              color: 16777215,
              map: this.textureNormal,
            });
          }),
          (e.prototype.setVisible = function (t) {
            t
              ? (this.controller.manager.transitions.remove(this.animFadeOut),
                this.controller.manager.transitions.add(
                  this.animFadeIn.start()
                ))
              : (this.controller.manager.transitions.remove(this.animFadeIn),
                this.controller.manager.transitions.add(
                  this.animFadeOut.start()
                ));
          }),
          e
        );
      })(S["Mesh"]),
      Bt = Lt,
      Ft = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.manager = e),
            (n.scenes = []),
            (n.fileLoader = new S["FileLoader"]().setResponseType("json")),
            (n.textureLoader = new It()),
            (n.pointer = new Bt(n)),
            (n.activeScene = null),
            (n.activePoint = null),
            (n.cameraWorldPosition = n.manager.cameraController.worldPosition),
            (n.cameraWorldDirection =
              n.manager.cameraController.worldDirection),
            (n.isMoving = !1),
            (n.raycaster = new S["Raycaster"]()),
            (n.intersection = new S["Vector3"]()),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.init = function () {
            var t = this;
            this.fileLoader.load("panoramas/panoScenes.json", function (e) {
              e.panoScenes.forEach(function (e) {
                var n = new Ot(t, e);
                (n.visible = !1), t.addPanoScene(n);
              });
            }),
              (this.pointer.visible = !1);
          }),
          (e.prototype.reset = function () {
            this.activeScene && this.outScene();
          }),
          (e.prototype.update = function (t) {
            this.activeScene &&
              (this.manager.raycaster.ray.intersectPlane(
                this.activeScene.floor,
                this.intersection
              ),
              this.pointer.position.copy(this.intersection),
              this.cameraWorldDirection.x,
              this.updateMinimap(
                this.cameraWorldPosition,
                this.cameraWorldDirection
              ));
          }),
          (e.prototype.updateMinimap = function (t, e) {
            this.manager.app.dispatchEvent({
              type: "minimap.update",
              data: {
                position: t,
                direction: e,
              },
            });
          }),
          (e.prototype.addPanoScene = function (t) {
            this.scenes.push(t);
          }),
          (e.prototype.findSceneByFlow = function (t) {
            return this.scenes.find(function (e) {
              return e.flow == t;
            });
          }),
          (e.prototype.active = function () {
            this.manager.cameraController.panoControls.controller = this;
          }),
          (e.prototype.dormant = function () {
            this.manager.cameraController.panoControls.controller = null;
          }),
          (e.prototype.enterScene = function (t) {
            var e = this;
            return new Promise(function (n, i) {
              e.textureLoader.setPath(t.points.imagesFolderUrl + "high/"),
                (e.activeScene = t);
              var o = t.getEntryPoint();
              e.textureLoader.getTextureForPoint(o).then(function (t) {
                e.activeScene.onEnter(t, o);
                var i = o.panoPosition.clone();
                e.activeScene.localToWorld(i),
                  e.manager.transitions.add(
                    new B["Tween"](e.manager.camera.position)
                      .to(
                        {
                          x: i.x,
                          y: i.y,
                          z: i.z,
                        },
                        1e3
                      )
                      .delay(100)
                      .easing(B["Easing"].Quadratic.InOut)
                      .start()
                      .onComplete(function () {
                        (e.activePoint = o),
                          e.pointer.setVisible(!0),
                          e.activeScene.updatePointsVisible(e.activePoint),
                          e.active(),
                          n();
                      })
                  );
              });
            });
          }),
          (e.prototype.outScene = function () {
            this.dormant(),
              this.activeScene.onExit(),
              (this.activeScene = null),
              (this.activePoint = null),
              this.textureLoader.disposeAllTexture();
          }),
          (e.prototype.getPointerDirection = function () {
            var t = new S["Vector3"](0, 0, 1);
            return (
              t
                .unproject(this.manager.camera)
                .sub(this.manager.camera.position)
                .normalize(),
              t
            );
          }),
          (e.prototype.moveToDirection = function (t) {
            if (
              ((t = t || this.getPointerDirection()),
              this.activeScene && !this.isMoving)
            ) {
              var e = this.findClosestTargetInDirection(t);
              e ? this.moveToPoint(e) : this.collide(t);
            }
          }),
          (e.prototype.findClosestTargetInDirection = function (t) {
            var e = null;
            return (
              this.activeScene &&
                this.activePoint &&
                (e = this.activeScene.points.findRankedByScore(
                  0,
                  [
                    _t.filterFunctions.inPanoDirection(
                      this.cameraWorldPosition,
                      t
                    ),
                    _t.filterFunctions.isNeighbourPanoTo(this.activePoint),
                    _t.filterFunctions.not(this.activePoint),
                  ],
                  [
                    _t.scoreJudges.distanceSquared(this.activePoint),
                    _t.scoreJudges.direction(this.cameraWorldPosition, t),
                  ],
                  e
                )),
              e
            );
          }),
          (e.prototype.moveToPoint = function (t) {
            var e = this;
            this.isMoving ||
              ((this.isMoving = !0),
              this.textureLoader.getTextureForPoint(t).then(function (n) {
                var i = t.panoPosition.clone();
                e.activeScene.localToWorld(i);
                var o =
                  750 +
                  150 * Math.min(e.manager.camera.position.distanceTo(i), 5);
                e.activeScene.onMoveToPoint(n, t, o),
                  e.manager.transitions.add(
                    new B["Tween"](e.manager.camera.position)
                      .to(
                        {
                          x: i.x,
                          y: i.y,
                          z: i.z,
                        },
                        o
                      )
                      .easing(B["Easing"].Quadratic.InOut)
                      .start()
                      .onComplete(function () {
                        (e.activePoint = t),
                          (e.isMoving = !1),
                          e.activeScene.updatePointsVisible(e.activePoint);
                      })
                  );
              }));
          }),
          (e.prototype.collide = function (t) {}),
          (e.prototype.onMove = function (t) {
            var e = t.data,
              n = new S["Vector3"]();
            e.ray.intersectPlane(this.activeScene.floor, n),
              this.activeScene.worldToLocal(n);
            var i = n.sub(this.activePoint.panoPosition).normalize();
            this.moveToDirection(i);
          }),
          e
        );
      })(S["EventDispatcher"]),
      jt = Ft,
      At = (function (t) {
        function e(e, n, i) {
          var o = t.call(this) || this;
          return (
            (o.app = e),
            (window["THREE"] = S),
            (o.renderer = new S["WebGLRenderer"]({
              canvas: n,
              antialias: !0,
            })),
            o.renderer.setPixelRatio(window.devicePixelRatio || 1),
            (o.camera = new S["PerspectiveCamera"](
              60,
              n.width / n.height,
              0.1,
              1e3
            )),
            (o.scene = new S["Scene"]()),
            (o.loader = i),
            (o._pause = !0),
            (o.clock = new S["Clock"]()),
            (o.raycaster = new S["Raycaster"]()),
            (o.transitions = new B["Group"]()),
            (o.pointCloud = new N(o)),
            (o.cameraController = new X(o.camera, o)),
            (o.hotspotController = new ft(o)),
            (o.panoSceneController = new jt(o)),
            (o.ndc = new S["Vector2"]()),
            (o.mousePosition = new S["Vector2"]()),
            o
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.init = function () {
            var t = [],
              e = new S["TextureLoader"]().setPath("skybox/");
            [
              "px.jpg",
              "nx.jpg",
              "py.jpg",
              "ny.jpg",
              "pz.jpg",
              "nz.jpg",
            ].forEach(function (n) {
              t.push(
                new S["MeshBasicMaterial"]({
                  map: e.load(n),
                  side: S["BackSide"],
                })
              );
            });
            var n = new S["Mesh"](new S["BoxGeometry"](1e3, 1e3, 1e3), t);
            n.scale.set(1, 1, -1),
              n.rotateY(Math.PI / 2),
              this.scene.add(n),
              this.cameraController.init(),
              this.hotspotController.init(),
              this.panoSceneController.init(),
              this.onWindowResize(),
              this.bindEvents();
          }),
          (e.prototype.findGuidpostById = function (t) {
            return this.hotspotController.guideposts.find(function (e) {
              return e.hotspotId == t;
            });
          }),
          (e.prototype.openFlow = function (t) {
            var e = this,
              n = this.panoSceneController.findSceneByFlow(t.targetFlow);
            return (
              this.pointCloud.onTraveling(),
              this.hotspotController.openFlow(t),
              new Promise(function (i, o) {
                n
                  ? (e.pointCloud.setVisible(!1, 1e3, 5e3),
                    n.mesh && n.mesh.setVisible(!0, 1e3, 5e3),
                    e.cameraController.moveToGuidepost(t).then(function () {
                      e.cameraController.tabMode(1),
                        e.panoSceneController.enterScene(n).then(function () {
                          e.hotspotController.onEnterScene(t),
                            e.app.onEnterPanoScene(t.targetFlow);
                        }),
                        i();
                    }))
                  : e.cameraController.moveToGuidepost(t).then(function () {
                      i();
                    });
              })
            );
          }),
          (e.prototype.closeFlow = function (t) {
            var e = this.panoSceneController.findSceneByFlow(t.targetFlow);
            e && this.panoSceneController.outScene(),
              this.cameraController.reset(),
              this.panoSceneController.reset(),
              this.hotspotController.hotspots.forEach(function (t) {
                return (t.visible = !1);
              }),
              this.hotspotController.guideposts.forEach(function (t) {
                return (t.visible = !0);
              }),
              this.pointCloud.setVisible(!0),
              (this.pointCloud.manualInteraction = !0);
          }),
          (e.prototype.findHotspotById = function (t) {
            return this.hotspotController.hotspots.find(function (e) {
              return e.hotspotId == t;
            });
          }),
          (e.prototype.reset = function () {
            this.pointCloud.reset(),
              this.cameraController.reset(),
              this.hotspotController.reset(),
              this.panoSceneController.reset();
          }),
          (e.prototype.beginTravel = function () {
            var t = this;
            console.log("beginTravel");
            var e = setTimeout(function () {
              (t.pointCloud.manualInteraction = !0),
                t.pointCloud.playGreete(),
                t.hotspotController.showAllGuideposts(!0),
                clearTimeout(e);
            }, 1e3);
          }),
          (e.prototype.start = function () {
            this.render(0), (this._pause = !1);
          }),
          (e.prototype.render = function (t) {
            if (!this._pause) {
              var e = this.clock.getDelta();
              this.transitions.update(t),
                this.pointCloud.update(e),
                this.cameraController.update(e),
                this.hotspotController.update(e),
                this.panoSceneController.update(e),
                this.dispatchEvent({
                  type: "update",
                  message: t,
                }),
                this.renderer.render(this.scene, this.camera);
            }
            window.requestAnimationFrame(this.render.bind(this));
          }),
          (e.prototype.bindEvents = function () {
            window.addEventListener(
              "resize",
              this.onWindowResize.bind(this),
              !1
            );
          }),
          (e.prototype.dispatchMouseEvent = function (t) {
            var e = this.ndc,
              n = this.mousePosition;
            e.set(
              (t.clientX / window.innerWidth) * 2 - 1,
              (-t.clientY / window.innerHeight) * 2 + 1
            ),
              n.set(t.clientX, t.clientY),
              this.raycaster.setFromCamera(e, this.camera),
              this.scene.dispatchEvent({
                type: t.type,
                data: {
                  screenPosition: n,
                  activeCamera: this.camera,
                  raycaster: this.raycaster,
                  ndc: e,
                },
              });
          }),
          (e.prototype.dispatchTouchEvent = function (t) {
            var e = this.ndc,
              n = this.mousePosition;
            e.set(
              (t.touches[0].clientX / window.innerWidth) * 2 - 1,
              (-t.changedTouches[0].clientY / window.innerHeight) * 2 + 1
            ),
              n.set(t.touches[0].clientX, t.changedTouches[0].clientY),
              this.raycaster.setFromCamera(e, this.camera),
              this.scene.dispatchEvent({
                type: t.type,
                data: {
                  screenPosition: n,
                  activeCamera: this.camera,
                  raycaster: this.raycaster,
                  ndc: e,
                },
              });
          }),
          (e.prototype.onWindowResize = function () {
            (this.camera.aspect = window.innerWidth / window.innerHeight),
              this.camera.updateProjectionMatrix(),
              this.renderer.setSize(window.innerWidth, window.innerHeight);
          }),
          e
        );
      })(S["EventDispatcher"]),
      $t = At,
      Ht = {
        data: function () {
          return {
            hide: !1,
            progressText: "00",
          };
        },
        created: function () {
          this.$Bus.$on("load.progress", this.onLoadingProgress),
            this.$Bus.$on("load.complete", this.onLoadingComplete);
        },
        mounted: function () {
          var t = new S["TextureLoader"](),
            e = t.load("images/loader-bar/bar.png"),
            n = t.load("images/loader-bar/mask.png");
          it = new P(this.$el.querySelector("#canvasProgress"), "loader", [
            e,
            n,
          ]).setUniformsValue("progress", 0);
        },
        methods: {
          onLoadingProgress: function (t) {
            (this.progressText = Math.min(
              100,
              Math.max(0, parseInt(100 * t))
            ).toString()),
              V["a"]
                .to(it.getUniform("progress"), 0.8, {
                  value: t,
                })
                .eventCallback("onUpdate", function () {
                  it.render();
                });
          },
          onLoadingComplete: function () {
            this.hide = !0;
          },
        },
      },
      zt = Ht,
      Nt = (n("55be"), Object(f["a"])(zt, I, _, !1, null, "317e5e0f", null)),
      Ut = Nt.exports,
      Rt = {
        components: {
          ProgressBar: Ut,
        },
        data: function () {
          return {
            readyLogo: !0,
            readyExperence: !1,
            loading: !1,
            animLogo1: null,
            animLogo2: null,
          };
        },
        created: function () {
          this.$Bus.$on("load.start", this.onLoadingStart),
            this.$Bus.$on("load.complete", this.onLoadingComplete);
        },
        mounted: function () {
          var t = this;
          window.Logo = this;
          var e = new S["TextureLoader"](),
            n = e.load("images/logo/whc-wz-a.png"),
            i = e.load("images/logo/whc-wz.jpg"),
            o = e.load("images/logo/whc-pi-a.png"),
            a = e.load("images/logo/whc-pi.jpg"),
            s = new P(this.$el.querySelector("#canvas-words-1"), "logo", [
              n,
              i,
            ]).setUniformsValue("progress", 0),
            r = new P(this.$el.querySelector("#canvas-words-2"), "logo", [
              o,
              a,
            ]).setUniformsValue("progress", 0);
          (this.animLogo1 = V["b"]
            .to(s.getUniform("progress"), 5, {
              value: 0.99,
              delay: 0,
              paused: !0,
              ease: Sine.easeOut,
            })
            .eventCallback("onUpdate", function (t) {
              s.render();
            })),
            (this.animLogo2 = V["b"]
              .to(r.getUniform("progress"), 3, {
                value: 0.8,
                delay: 3,
                paused: !0,
              })
              .eventCallback("onUpdate", function (t) {
                r.render();
              })
              .eventCallback("onComplete", function (e) {
                t.readyExperence = !0;
              }));
        },
        methods: {
          onLoadingStart: function () {},
          onLoadingComplete: function () {
            (this.readyLogo = !0),
              this.animLogo1 && this.animLogo1.play(),
              this.animLogo2 && this.animLogo2.play();
          },
          startExperence: function () {
            this.$Bus.$emit("startExperence");
          },
        },
      },
      qt = Rt,
      Wt =
        (n("034d"),
        n("e606"),
        Object(f["a"])(qt, O, k, !1, null, "5ab61c5a", null)),
      Gt = Wt.exports,
      Zt = {
        components: {
          Logo: Gt,
        },
        props: {
          start: Boolean,
        },
        data: function () {
          return {
            show: !0,
            isVideo: !1,
            isExperience: !1,
          };
        },
        created: function () {
          this.$Bus.$on("load.start", this.onLoadStart),
            this.$Bus.$on("load.complete", this.onLoadComplete);
        },
        mounted: function () {
          window.testComponent = this;
          var t = this.$el.querySelector("#canvasBuild");
          (t.width = window.innerWidth), (t.height = window.innerHeight);
          var e = new S["TextureLoader"]().load("images/home-bg.png"),
            n = new S["TextureLoader"]().load("images/mask-preloader-half.jpg"),
            i = new P(this.$el.querySelector("#canvasBuild"), "background", [
              e,
              n,
            ]).setUniformsValue("progress", 0);
          (ot = TweenMax.to(i.getUniform("progress"), 2, {
            value: 1,
            paused: !1,
            ease: Sine.easeIn,
          }).eventCallback("onUpdate", function (t) {
            i.render();
          })),
            this.playGreet();
        },
        methods: {
          playGreet: function () {
            ot.play();
          },
          onLoadStart: function () {},
          onLoadComplete: function () {},
        },
      },
      Qt = Zt,
      Xt = (n("107e"), Object(f["a"])(Qt, C, M, !1, null, "21c7c69e", null)),
      Yt = Xt.exports,
      Kt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "canvas-3d",
            class: {
              modal: t.showGreete,
            },
          },
          [
            n("canvas", {
              staticStyle: {
                width: "100%",
                height: "100%",
              },
              attrs: {
                id: "canvasScene",
              },
            }),
            t.showGreete
              ? n("greete", {
                  on: {
                    beginTravel: function (e) {
                      return t.beginTravel();
                    },
                  },
                })
              : t._e(),
            n(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showSceneUI,
                    expression: "showSceneUI",
                  },
                ],
                staticClass: "buttons",
              },
              [
                n(
                  "button",
                  {
                    staticClass: "button btn-arrow-left",
                    on: {
                      click: function (e) {
                        return e.stopPropagation(), t.onExsitPanoScene();
                      },
                    },
                  },
                  [n("span", [t._v(t._s(t.$t("MainScene.btnBack")))])]
                ),
              ]
            ),
            n("button", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSceneUI,
                  expression: "showSceneUI",
                },
              ],
              staticClass: "button-menu",
              on: {
                click: function (e) {
                  return t.toogleDescription();
                },
              },
            }),
            n("button", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSceneUI,
                  expression: "showSceneUI",
                },
              ],
              staticClass: "button-audio",
              class: t.audioPlaying
                ? "bg-hotspot-audio-pause"
                : "bg-hotspot-audio-play",
              on: {
                click: function (e) {
                  return e.stopPropagation(), t.triggerAudio();
                },
              },
            }),
            n(
              "div",
              {
                staticClass: "scene-description",
                class: {
                  hide: !t.showDescription,
                },
              },
              [t._v("\n        " + t._s(t.sceneDescription.content) + "\n    ")]
            ),
            t.showTips ? n("tips") : t._e(),
            t.showBtnMore
              ? n(
                  "button",
                  {
                    staticClass: "btn-rectangle left",
                    on: {
                      click: function (e) {
                        return t.setAdditionVisible(!0);
                      },
                    },
                  },
                  [t._v(t._s(t.$t("MainScene.btnMore")))]
                )
              : t._e(),
            t.showBtnMore
              ? n(
                  "button",
                  {
                    staticClass: "btn-rectangle right",
                    on: {
                      click: function (e) {
                        return t.endTravel();
                      },
                    },
                  },
                  [t._v(t._s(t.$t("MainScene.btnStop")))]
                )
              : t._e(),
            t.showAddition
              ? n("addition", {
                  on: {
                    hide: function (e) {
                      return t.setAdditionVisible(!1);
                    },
                  },
                })
              : t._e(),
            t.showSceneUI
              ? n("minimap", {
                  attrs: {
                    flow: t.flow,
                  },
                })
              : t._e(),
          ],
          1
        );
      },
      Jt = [],
      te = {
        en: {
          LiuBeiDian: {
            title: "Hanzhaolie Temple",
            content:
              'Liu Bei was given the posthumous title Emperor Zhaolie. Since Liu Bei was the founding ruler of the state of Shu Han and forefather of the Shu Han regime, and because he was notable for his staunchness, benevolence, ability to truly understand others and treat them with sincerity, unwavering conviction and ultimate ascension as a state founder, thus the character zhao, or "prominence," is used to describe and commend his virtues. At the same time, to serenade his loyalty to the Han dynasty, his declaration as a descendant of the Han imperial family, his proclaimed responsibility to restore the Han dynasty, his "achievement in bringing peace to the people" and his "upholding of moral values and dedication to his aspiration," the character lie, or "prominence," is used to describe and commend the feats accomplished throughout his life.',
          },
          WuHouCi: {
            title: "Temple of Marquis Wu (Hall of Zhuge Liang)",
            content:
              'Pass the Hall of Liu Bei and go down one flight of steps is the Temple of Marquis Wu. Why is it one flight of steps lower? This is a manifestation of the caste mentality of feudal society, differentiating the superiority of the lord and the inferiority of the vassal. The Temple of Marquis Wu is a shrine built to commemorate Zhuge Liang, the Chancellor and Marquis of Wu District of the Shu Han state of the Three Kingdoms period. During his lifetime Zhuge Liang was named "Marquis of Wu District" and was given the posthumous title "Marquis Zhongwu," thus the shrine constructed to venerate him is called “Wuhou Shrine” or "Temple of Marquis Wu".',
          },
        },
        zh: {
          LiuBeiDian: {
            title: "汉昭烈庙",
            content:
              "汉昭烈帝是刘备的谥号。由于刘备是蜀汉的开国皇帝，建立了蜀汉政权，弘毅宽厚，知人待士，百折不挠，终成帝业，因此用“昭”字赞扬他的品德。同时歌颂他对汉朝的忠诚，生前以汉室宗亲自称，并以恢复汉室为己任，“有功安民”、“秉德遵业”，所以用“烈”字赞扬他一生的功绩。",
          },
          WuHouCi: {
            title: "武侯祠（诸葛亮殿）",
            content:
              "经刘备殿，低一个台阶，就是武侯祠。为什么要低一个台阶呢？这是当时封建社会君尊臣卑等级观念的体现。武侯祠是纪念三国时蜀汉丞相武乡侯诸葛亮的祠堂，诸葛亮生前封“武乡侯”，死后谥号“忠武”，故纪念他的祠堂称作“武侯祠”。",
          },
        },
      },
      ee = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          {
            attrs: {
              appear: "",
              name: "custom-classes-transition",
              "enter-active-class": "animated slideInUp",
              "leave-active-class": "animated zoomOut",
            },
          },
          [
            n(
              "div",
              {
                staticClass: "tips",
                style: {
                  "background-image": "url(" + t.$t("Tips.tipUrl") + ")",
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "buttons",
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass: "active travel",
                        on: {
                          click: function (e) {
                            return e.stopPropagation(), t.$emit("beginTravel");
                          },
                        },
                      },
                      [t._v(t._s(t.$t("Tips.btnStartTravel")))]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      ne = [],
      ie = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1090 85",
            },
          },
          [
            n("path", {
              attrs: {
                d: "M73.39,32.27V81.41H84.32V93.14H73.39v16.48H58.7V93.14H24.15V81.31A272.62,272.62,0,0,0,44.27,55.94,161.15,161.15,0,0,0,58.46,32.27Zm-35,49.14H58.7V53a108.33,108.33,0,0,1-6.86,10.89Q47.37,70.32,38.43,81.41Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M94.51,109.62V32.27h26.72q41.19,0,41.19,37.7,0,17.93-11.53,28.79t-29.76,10.86ZM111,45.75V96.14h9q11.73,0,18.42-7t6.69-18.93q0-11.53-7-18t-18.17-6.47Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M240.92,109.62H223l-5.8-17.73H189l-5.69,17.73H165.47l28.31-77.35h19.38ZM213.26,79.16l-8.79-26.82a29.24,29.24,0,0,1-1.2-6.74h-.45a28.35,28.35,0,0,1-1.35,6.54l-8.84,27Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M312.38,104.43Q301.05,111,284.52,111q-18.48,0-29.16-10.39T244.67,72.17q0-18.29,11.76-29.74t31-11.46A61,61,0,0,1,309,34.47V50.1q-9-5.25-22-5.25-11.19,0-18.13,7.29T262,71.37q0,12.13,6.26,18.93t17.11,6.79a24.08,24.08,0,0,0,10.53-2V79.21H280.27V66h32.11Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M373.55,109.62H327.76V32.27h44V45.75H344.24V64h25.57V77.41H344.24V96.14h29.31Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M479.76,109.62h-11l-7.88-21.14H428.7l-7.43,21.14h-11l29.42-77.24h10.67Zm-22-29.87L446.1,47.64a37.26,37.26,0,0,1-1.19-5.39h-.25a29.58,29.58,0,0,1-1.25,5.39L431.84,79.75Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M519.25,64.14a11.4,11.4,0,0,0-6.73-1.74q-5.68,0-9.37,5.31t-3.69,14v27.92h-9.77V54.47h9.77V65.69h.2q4.18-12.16,14.46-12.17a13.75,13.75,0,0,1,5.13.75Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M558.35,109.07a18.11,18.11,0,0,1-8.63,1.75q-14.81,0-14.81-16.41V62.55h-9.47V54.47h9.47V41.21l9.73-3.09V54.47h13.71v8.08H544.64V92.67q0,5.43,1.84,7.77t6.13,2.35a9.26,9.26,0,0,0,5.74-1.85Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M566.82,97.7A26.63,26.63,0,0,0,582.73,103q11.41,0,11.42-7.48a6.54,6.54,0,0,0-2.49-5.26q-2.5-2.07-10.13-4.91-9.16-3.69-11.91-7.31a14.06,14.06,0,0,1-2.75-8.75,13.72,13.72,0,0,1,6.21-11.74q6.21-4.43,15.29-4.42a34.45,34.45,0,0,1,13.06,2.45V65a25.27,25.27,0,0,0-14-4,13,13,0,0,0-7.63,2.05,6.26,6.26,0,0,0-2.94,5.38A6.43,6.43,0,0,0,579,73.62q2.12,1.84,9.4,4.73,9.21,3.45,12.46,7.14a13.33,13.33,0,0,1,3.24,9.12,13.83,13.83,0,0,1-6.21,11.94q-6.2,4.36-16.08,4.37a32.68,32.68,0,0,1-15-3.25Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M699.11,99.15a37.32,37.32,0,0,1-27.77,11.72q-12.17,0-19.32-6t-7.16-16.43q0-15.76,17.95-23.49-9-6.82-9-16.2,0-8.09,5.63-12.89t14.81-4.82q8.63,0,14,4.57a14.87,14.87,0,0,1,5.36,11.89q0,12-14.66,17.95,11.12,4.29,21.09,19.5,8.73-12,8.73-28.33a27.48,27.48,0,0,0-1-7.43h9.27a30,30,0,0,1,.75,7.19,54.41,54.41,0,0,1-3.41,18.27,67.22,67.22,0,0,1-9.5,17.68q4.14,5.63,7,7.7a10.63,10.63,0,0,0,6.46,2.07,19.92,19.92,0,0,0,7.08-1.6v8.73a24.24,24.24,0,0,1-8.68,1.6,16.51,16.51,0,0,1-8.45-2.2Q704.5,106.48,699.11,99.15Zm-4.59-7q-6.18-9.67-11.41-14.59a39.89,39.89,0,0,0-13.27-8q-8.13,3.28-11.62,7.65a16.87,16.87,0,0,0-3.49,10.85,13,13,0,0,0,4.64,10.59q4.64,3.87,12.07,3.87A29.91,29.91,0,0,0,694.52,92.17ZM671.59,61.4Q684.51,57,684.5,48.34a9,9,0,0,0-2.94-7.06,10.58,10.58,0,0,0-7.28-2.62,11.63,11.63,0,0,0-8.23,2.82,9.56,9.56,0,0,0-3,7.36Q663,56.72,671.59,61.4Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M820.58,106.43q-8.52,4.48-21.39,4.49-16.61,0-26.53-10.55t-9.92-27.9q0-18.64,11.17-30t28.37-11.37q11.07,0,18.3,3.15V44.65a36.92,36.92,0,0,0-18.2-4.59q-12.92,0-21,8.6t-8.13,23.21q0,13.86,7.58,22T800.63,102a37.44,37.44,0,0,0,20-5.19Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M880.32,109.62h-9.83v-8.68h-.2q-5.53,10-17,10-19.59,0-19.6-23.44v-33h9.68V86q0,16.81,12.86,16.81a12.79,12.79,0,0,0,10.32-4.71,17.92,17.92,0,0,0,3.94-11.9V54.47h9.83Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M897.67,109.62V28h9.77v81.63Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M951.37,109.07a18.09,18.09,0,0,1-8.63,1.75q-14.81,0-14.8-16.41V62.55h-9.48V54.47h9.48V41.21l9.72-3.09V54.47h13.71v8.08H937.66V92.67q0,5.43,1.84,7.77t6.14,2.35a9.25,9.25,0,0,0,5.73-1.85Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M1008.47,109.62h-9.83v-8.68h-.2q-5.54,10-17,10-19.61,0-19.6-23.44v-33h9.68V86q0,16.81,12.86,16.81a12.79,12.79,0,0,0,10.32-4.71,17.92,17.92,0,0,0,3.94-11.9V54.47h9.83Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M1055.44,64.14a11.46,11.46,0,0,0-6.74-1.74q-5.67,0-9.37,5.31t-3.69,14v27.92h-9.77V54.47h9.77V65.69h.2q4.19-12.16,14.46-12.17a13.84,13.84,0,0,1,5.14.75Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
            n("path", {
              attrs: {
                d: "M1108.34,84.54h-38.59q.24,8.82,4.83,13.64T1087.4,103a27.27,27.27,0,0,0,17-5.94v8.73q-7.28,5.13-19.29,5.14t-18.68-7.58q-6.71-7.59-6.7-21,0-12.66,7.35-20.89a23.53,23.53,0,0,1,18.28-8.23q10.82,0,16.9,7t6.08,19.47Zm-9.77-7.83q0-7.48-3.54-11.57t-9.82-4.09a13.7,13.7,0,0,0-10.1,4.34,20.12,20.12,0,0,0-5.36,11.32Z",
                transform: "translate(-24.15 -27.99)",
              },
            }),
          ]
        );
      },
      oe = [],
      ae = {},
      se = Object(f["a"])(ae, ie, oe, !1, null, null, null),
      re = se.exports,
      le = {
        components: {
          IconFdage: re,
        },
      },
      ce = le,
      ue = (n("1ee7"), Object(f["a"])(ce, ee, ne, !1, null, "1017465a", null)),
      de = ue.exports,
      he = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "minmap",
            style: {
              "background-image": "url(" + t.map.src + ")",
            },
          },
          [
            n(
              "span",
              {
                staticClass: "curr",
                style: {
                  left: t.position.x + "px",
                  top: t.position.y + "px",
                },
              },
              [
                n(
                  "span",
                  {
                    staticClass: "view-point",
                  },
                  [
                    n(
                      "svg",
                      {
                        staticClass: "view-range",
                        style: {
                          color: "#fff",
                          transform:
                            "translate(-50%, -50%) rotateZ(" +
                            t.rotation +
                            "deg)",
                        },
                        attrs: {
                          viewBox: "0 0 50 50",
                        },
                      },
                      [
                        n("circle", {
                          attrs: {
                            cx: "25",
                            cy: "25",
                            r: "12.5",
                            "stroke-width": "25",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      pe = [],
      me = (n("c5f6"), new S["Vector3"](0, 0, -1)),
      fe = [
        {
          src: "images/mini-map/lbd.png",
          flow: 7,
        },
        {
          src: "images/mini-map/zgld.png",
          flow: 8,
        },
      ],
      ge = {
        props: {
          flow: Number,
        },
        data: function () {
          return {
            map: {},
            position: {
              x: 0,
              y: 0,
            },
            rotation: -90,
          };
        },
        created: function () {
          this.map = 7 == this.flow ? fe[0] : fe[1];
        },
        mounted: function () {
          this.$Bus.$on("minimap.update", this.onUpdate);
        },
        methods: {
          onUpdate: function (t) {
            var e = t.position,
              n = t.direction;
            (n.y = 0),
              n.normalize(),
              (this.rotation =
                n.x > 0
                  ? S["Math"].radToDeg(n.angleTo(me))
                  : -S["Math"].radToDeg(n.angleTo(me))),
              (this.position = this.getTransform(e, this.flow));
          },
          getTransform: function (t, e) {
            switch (e) {
              case 7:
                return {
                  x: 9 * t.x - 274,
                  y: 8 * t.z + 5,
                };
              case 8:
                return {
                  x: 9 * t.x - 274,
                  y: 8 * t.z + 260,
                };
            }
          },
        },
      },
      ve = ge,
      we = (n("382a"), Object(f["a"])(ve, he, pe, !1, null, "757a15fa", null)),
      ye = we.exports,
      be = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "transition",
          {
            attrs: {
              appear: "",
              name: "custom-classes-transition",
              "enter-active-class": "animated zoomIn",
              "leave-active-class": "animated zoomOut",
            },
          },
          [
            n(
              "div",
              {
                staticClass: "addition",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "menu",
                  },
                  [
                    n(
                      "button",
                      {
                        staticClass: "bg-normal",
                        on: {
                          click: function (e) {
                            return t.$emit("hide");
                          },
                        },
                      },
                      [t._v(t._s(t.$t("Addition.menu.itemBack")))]
                    ),
                    n(
                      "button",
                      {
                        class: 1 == t.index ? "bg-active" : "bg-normal",
                        on: {
                          click: function (e) {
                            return t.tab(1);
                          },
                        },
                      },
                      [t._v(t._s(t.$t("Addition.menu.item1")))]
                    ),
                    n(
                      "button",
                      {
                        class: 2 == t.index ? "bg-active" : "bg-normal",
                        on: {
                          click: function (e) {
                            return t.tab(2);
                          },
                        },
                      },
                      [t._v(t._s(t.$t("Addition.menu.item2")))]
                    ),
                    n(
                      "button",
                      {
                        class: 3 == t.index ? "bg-active" : "bg-normal",
                        on: {
                          click: function (e) {
                            return t.tab(3);
                          },
                        },
                      },
                      [t._v(t._s(t.$t("Addition.menu.item3")))]
                    ),
                  ]
                ),
                n(
                  "div",
                  {
                    staticClass: "content",
                  },
                  [
                    n(
                      "transition",
                      {
                        attrs: {
                          appear: "",
                          name: "custom-classes-transition",
                          "enter-active-class": "animated fadeIn",
                          "leave-active-class": "animated fadeOut",
                        },
                      },
                      [
                        1 == t.index
                          ? n("relic-details", {
                              attrs: {
                                resources: t.resource.RelicDetails,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    n(
                      "transition",
                      {
                        attrs: {
                          appear: "",
                          name: "custom-classes-transition",
                          "enter-active-class": "animated fadeIn",
                          "leave-active-class": "animated fadeOut",
                        },
                      },
                      [
                        2 == t.index
                          ? n("new-vs-old", {
                              attrs: {
                                resources: t.resource.NewVsOld,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    n(
                      "transition",
                      {
                        attrs: {
                          appear: "",
                          name: "custom-classes-transition",
                          "enter-active-class": "animated fadeIn",
                          "leave-active-class": "animated fadeOut",
                        },
                      },
                      [
                        3 == t.index
                          ? n("sanguo-map", {
                              attrs: {
                                resources: t.resource.Map,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]
        );
      },
      xe = [],
      Ce = {
        zh: {
          NewVsOld: [
            {
              title: "汉昭烈庙中轴线",
              descrition: "",
              preview: "addition/NewVsOld/1/preview.jpg",
              images: {
                old: "addition/NewVsOld/1/old.jpg",
                new: "addition/NewVsOld/1/new.jpg",
              },
            },
            {
              title: "红墙夹道",
              descrition: "",
              preview: "addition/NewVsOld/2/preview.jpg",
              images: {
                old: "addition/NewVsOld/2/old.jpg",
                new: "addition/NewVsOld/2/new.jpg",
              },
            },
            {
              title: "三国文化陈列室",
              descrition: "",
              preview: "addition/NewVsOld/3/preview.jpg",
              images: {
                old: "addition/NewVsOld/3/old.jpg",
                new: "addition/NewVsOld/3/new.jpg",
              },
            },
            {
              title: "惠陵大门",
              descrition: "",
              preview: "addition/NewVsOld/4/preview.jpg",
              images: {
                old: "addition/NewVsOld/4/old.jpg",
                new: "addition/NewVsOld/4/new.jpg",
              },
            },
            {
              title: "惠陵外景",
              descrition: "",
              preview: "addition/NewVsOld/5/preview.jpg",
              images: {
                old: "addition/NewVsOld/5/old.jpg",
                new: "addition/NewVsOld/5/new.jpg",
              },
            },
            {
              title: "惠陵享殿",
              descrition: "",
              preview: "addition/NewVsOld/6/preview.jpg",
              images: {
                old: "addition/NewVsOld/6/old.jpg",
                new: "addition/NewVsOld/6/new.jpg",
              },
            },
            {
              title: "刘备殿",
              descrition: "",
              preview: "addition/NewVsOld/7/preview.jpg",
              images: {
                old: "addition/NewVsOld/7/old.jpg",
                new: "addition/NewVsOld/7/new.jpg",
              },
            },
            {
              title: "唐碑",
              descrition: "",
              preview: "addition/NewVsOld/8/preview.jpg",
              images: {
                old: "addition/NewVsOld/8/old.jpg",
                new: "addition/NewVsOld/8/new.jpg",
              },
            },
            {
              title: "武侯祠大门",
              descrition: "",
              preview: "addition/NewVsOld/9/preview.jpg",
              images: {
                old: "addition/NewVsOld/9/old.jpg",
                new: "addition/NewVsOld/9/new.jpg",
              },
            },
            {
              title: "诸葛亮殿",
              descrition: "",
              preview: "addition/NewVsOld/10/preview.jpg",
              images: {
                old: "addition/NewVsOld/10/old.jpg",
                new: "addition/NewVsOld/10/new.jpg",
              },
            },
            {
              title: "武侯祠过厅",
              descrition: "",
              preview: "addition/NewVsOld/11/preview.jpg",
              images: {
                old: "addition/NewVsOld/11/old.jpg",
                new: "addition/NewVsOld/11/new.jpg",
              },
            },
          ],
          RelicDetails: [
            {
              title: "惠陵古砖",
              preview: "addition/RelicDetails/1/preview.jpg",
              images: [
                "addition/RelicDetails/1/1.jpg",
                "addition/RelicDetails/1/2.jpg",
                "addition/RelicDetails/1/3.jpg",
              ],
            },
            {
              title: "静远堂殿顶之装饰",
              preview: "addition/RelicDetails/2/preview.jpg",
              images: [
                "addition/RelicDetails/2/1.jpg",
                "addition/RelicDetails/2/2.jpg",
                "addition/RelicDetails/2/3.jpg",
              ],
            },
            {
              title: "三足铁鼎",
              preview: "addition/RelicDetails/3/preview.jpg",
              images: [
                "addition/RelicDetails/3/1.jpg",
                "addition/RelicDetails/3/2.jpg",
                "addition/RelicDetails/3/3.jpg",
              ],
            },
            {
              title: "双龙抱口九龙铁鼎",
              preview: "addition/RelicDetails/4/preview.jpg",
              images: [
                "addition/RelicDetails/4/1.jpg",
                "addition/RelicDetails/4/2.jpg",
                "addition/RelicDetails/4/3.jpg",
              ],
            },
            {
              title: "双人耳鼎",
              preview: "addition/RelicDetails/5/preview.jpg",
              images: [
                "addition/RelicDetails/5/1.jpg",
                "addition/RelicDetails/5/2.jpg",
                "addition/RelicDetails/5/3.jpg",
              ],
            },
          ],
          Map: {
            description:
              "  <p>三国指魏、蜀、吴三国。</p>\n                            <p> 魏国，又称曹魏，220年曹丕称帝，定都洛阳，265年司马炎代替魏建立晋。</p>\n                            <p> 蜀国以汉为国号，史称蜀汉，221年刘备称帝，定都成都，263年曹魏灭蜀。</p>\n                            <p> 吴国，又名孙吴，222年孙权建国，229年称帝，定都建业（今江苏南京），280年西晋灭吴。</p>",
            map: {
              Wei: {
                leader: "曹丕",
                name: "曹魏（定都洛阳）",
                year: "公元220-265",
              },
              Shu: {
                leader: "刘备",
                name: "蜀汉（定都成都）",
                year: "公元221-263",
              },
              Wu: {
                leader: "孙吴",
                name: "孙权（定都建业）",
                year: "公元229-280",
              },
            },
          },
        },
        en: {
          NewVsOld: [
            {
              title: "The central axis of The Hanzhaolie Temple",
              descrition: "",
              preview: "addition/NewVsOld/1/preview.jpg",
              images: {
                old: "addition/NewVsOld/1/old.jpg",
                new: "addition/NewVsOld/1/new.jpg",
              },
            },
            {
              title: "The red wall lane",
              descrition: "",
              preview: "addition/NewVsOld/2/preview.jpg",
              images: {
                old: "addition/NewVsOld/2/old.jpg",
                new: "addition/NewVsOld/2/new.jpg",
              },
            },
            {
              title:
                "The exhibition room for The Three Kingdoms period culture",
              descrition: "",
              preview: "addition/NewVsOld/3/preview.jpg",
              images: {
                old: "addition/NewVsOld/3/old.jpg",
                new: "addition/NewVsOld/3/new.jpg",
              },
            },
            {
              title: "The Hui Mausoleum gate",
              descrition: "",
              preview: "addition/NewVsOld/4/preview.jpg",
              images: {
                old: "addition/NewVsOld/4/old.jpg",
                new: "addition/NewVsOld/4/new.jpg",
              },
            },
            {
              title: "The Hui Mausoleum",
              descrition: "",
              preview: "addition/NewVsOld/5/preview.jpg",
              images: {
                old: "addition/NewVsOld/5/old.jpg",
                new: "addition/NewVsOld/5/new.jpg",
              },
            },
            {
              title: "The Hui Mausoleum fruition hall",
              descrition: "",
              preview: "addition/NewVsOld/6/preview.jpg",
              images: {
                old: "addition/NewVsOld/6/old.jpg",
                new: "addition/NewVsOld/6/new.jpg",
              },
            },
            {
              title: "The Hall of Liu Bei",
              descrition: "",
              preview: "addition/NewVsOld/7/preview.jpg",
              images: {
                old: "addition/NewVsOld/7/old.jpg",
                new: "addition/NewVsOld/7/new.jpg",
              },
            },
            {
              title: "The Tang Stele",
              descrition: "",
              preview: "addition/NewVsOld/8/preview.jpg",
              images: {
                old: "addition/NewVsOld/8/old.jpg",
                new: "addition/NewVsOld/8/new.jpg",
              },
            },
            {
              title: "The Temple gate of Marquis Wu",
              descrition: "",
              preview: "addition/NewVsOld/9/preview.jpg",
              images: {
                old: "addition/NewVsOld/9/old.jpg",
                new: "addition/NewVsOld/9/new.jpg",
              },
            },
            {
              title: "The Hall of Zhuge Liang",
              descrition: "",
              preview: "addition/NewVsOld/10/preview.jpg",
              images: {
                old: "addition/NewVsOld/10/old.jpg",
                new: "addition/NewVsOld/10/new.jpg",
              },
            },
            {
              title: "The Temple cross-beam of Marquis Wu",
              descrition: "",
              preview: "addition/NewVsOld/11/preview.jpg",
              images: {
                old: "addition/NewVsOld/11/old.jpg",
                new: "addition/NewVsOld/11/new.jpg",
              },
            },
          ],
          RelicDetails: [
            {
              title: "Brick Exterior Wall of the Mausoleum ",
              preview: "addition/RelicDetails/1/preview-en.png",
              images: [
                "addition/RelicDetails/1/1.jpg",
                "addition/RelicDetails/1/2.jpg",
                "addition/RelicDetails/1/3.jpg",
              ],
            },
            {
              title: "Statues in the Jingyuan Hall",
              preview: "addition/RelicDetails/2/preview-en.png",
              images: [
                "addition/RelicDetails/2/1.jpg",
                "addition/RelicDetails/2/2.jpg",
                "addition/RelicDetails/2/3.jpg",
              ],
            },
            {
              title: "Cloud-embossed, Double-eared, Three-legged Iron Ding",
              preview: "addition/RelicDetails/3/preview-en.png",
              images: [
                "addition/RelicDetails/3/1.jpg",
                "addition/RelicDetails/3/2.jpg",
                "addition/RelicDetails/3/3.jpg",
              ],
            },
            {
              title:
                "Nine Dragon-embossed Iron Ding with Two Dragon-shaped Ears",
              preview: "addition/RelicDetails/4/preview-en.png",
              images: [
                "addition/RelicDetails/4/1.jpg",
                "addition/RelicDetails/4/2.jpg",
                "addition/RelicDetails/4/3.jpg",
              ],
            },
            {
              title: "Warrior-eared Ding",
              preview: "addition/RelicDetails/5/preview-en.png",
              images: [
                "addition/RelicDetails/5/1.jpg",
                "addition/RelicDetails/5/2.jpg",
                "addition/RelicDetails/5/3.jpg",
              ],
            },
          ],
          Map: {
            description:
              "  <p>The Three Kingdoms refer to the Wei, the Shu and the Wu.</p>\n                            <p>The Wei, also known as Caowei, was proclaimed in 220 AD by Cao Pi, had its capital city in Luoyang, and was replaced in 265 AD by the Jin proclaimed by Sima Yan. </p>\n                            <p>The Shu, officially the Han and also called Shuhan by historians, was proclaimed in 221 AD by Liu Bei, had its capital city in Chengdu, and was annihilated by Caowei in 263 AD.</p>\n                            <p>The Wu, also known as Sunwu, was first established in 222 AD by Sun Quan who made himself emperor in 229 AD. It has the capital city in Jianye (now Nanjing, Jiangsu) and was annihilated by the Western Jin.</p>",
            map: {
              Wei: {
                leader: "Cao Pi",
                name: "Caowei (capital city Luoyang)",
                year: "Duration: 220-265 AD",
              },
              Shu: {
                leader: "Liu Bei",
                name: "Shuhan (capital city Chengdu)",
                year: "Duration: 221-263 AD",
              },
              Wu: {
                leader: "Sun Quan",
                name: "Sunwu (capital city Jianye)",
                year: "Duration: 229-280 AD",
              },
            },
          },
        },
      },
      Me = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "new-vs-old",
          },
          [
            n(
              "div",
              {
                staticClass: "description",
              },
              [
                n("div", {
                  staticClass: "border",
                  staticStyle: {
                    left: "0",
                    top: "0",
                    transform: "translate(-50%,-70%)",
                  },
                }),
                n("div", {
                  staticClass: "border",
                  staticStyle: {
                    left: "100%",
                    top: "100%",
                    transform: "translate(-50%,-50%) scale(-1,-1)",
                  },
                }),
                n("h1", [t._v(t._s(t.$t("Addition.NewVsOld.smriti")))]),
                n("p", [t._v(t._s(t.$t("Addition.NewVsOld.description")))]),
              ]
            ),
            n(
              "div",
              {
                staticClass: "title",
              },
              [
                n("p", [
                  t._v(
                    t._s(t.resources[t.activeIndex].title) +
                      t._s(t.$t("Addition.NewVsOld.title"))
                  ),
                ]),
              ]
            ),
            n(
              "div",
              {
                staticClass: "main",
                on: {
                  mousemove: function (e) {
                    return t.onMouseMove(e);
                  },
                  touchmove: function (e) {
                    return t.onTouchMove(e);
                  },
                  mouseup: function (e) {
                    return t.onMouseUp();
                  },
                  touchend: function (e) {
                    return t.onTouchEnd();
                  },
                },
              },
              [
                n(
                  "div",
                  {
                    staticClass: "drag",
                    style: {
                      left: t.dragState.x + "px",
                    },
                    on: {
                      mousedown: function (e) {
                        return t.onMouseDown(e);
                      },
                      touchstart: function (e) {
                        return t.onTouchStart(e);
                      },
                    },
                  },
                  [
                    n("span", {
                      staticClass: "ring blink",
                      staticStyle: {
                        width: "90px",
                        height: "90px",
                        "animation-delay": "30ms",
                      },
                    }),
                    n("span", {
                      staticClass: "ring blink",
                      staticStyle: {
                        width: "66px",
                        height: "66px",
                        "animation-delay": "",
                      },
                    }),
                  ]
                ),
                n("div", {
                  staticClass: "main-item new",
                  style: {
                    "background-image":
                      "url(" + t.resources[t.activeIndex].images.new + ")",
                    width: t.dragState.x + "px",
                  },
                }),
                n("div", {
                  staticClass: "main-item old",
                  style: {
                    "background-image":
                      "url(" + t.resources[t.activeIndex].images.old + ")",
                    width: t.dragState.max - t.dragState.x + "px",
                  },
                }),
              ]
            ),
            n(
              "div",
              {
                staticClass: "preview",
              },
              [
                n("button", {
                  staticClass: "pre-btn left",
                  on: {
                    click: function (e) {
                      return t.next();
                    },
                  },
                }),
                n(
                  "div",
                  {
                    staticClass: "pre-viewport",
                  },
                  [
                    n(
                      "ul",
                      {
                        staticClass: "pre-list",
                        style: {
                          transform:
                            "translateX(" + -180 * t.activeIndex + "px)",
                        },
                      },
                      t._l(t.resources, function (e, i) {
                        return n(
                          "li",
                          {
                            key: i,
                            staticClass: "pre-item",
                            class: {
                              active: t.activeIndex == i,
                            },
                            style: {
                              transform: "translateX(1px)",
                              "background-image": "url(" + e.preview + ")",
                            },
                            on: {
                              click: function (e) {
                                return t.tab(i);
                              },
                            },
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "mask",
                              },
                              [
                                t._v(
                                  "\n                       " + t._s(e.title)
                                ),
                                n("br"),
                                t._v(
                                  "\n                        " +
                                    t._s(t.$t("Addition.NewVsOld.title")) +
                                    "\n                   "
                                ),
                              ]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                  ]
                ),
                n("button", {
                  staticClass: "pre-btn right",
                  on: {
                    click: function (e) {
                      return t.prev();
                    },
                  },
                }),
              ]
            ),
          ]
        );
      },
      Se = [],
      Ee = {
        props: {
          resources: Array,
        },
        data: function () {
          return {
            activeIndex: 0,
            halfLength: Math.ceil(Ce.NewVsOld / 2),
            dragState: {
              max: 600,
              x: 300,
              mousedown: !1,
              mouseMoveStartX: 0,
              touch: !1,
              touchMoveStartX: 0,
            },
          };
        },
        mounted: function () {
          document.addEventListener("mouseup", this.onMouseUp),
            document.addEventListener("mouseleave", this.onMouseUp);
        },
        methods: {
          prev: function () {
            var t = this.resources.length;
            this.activeIndex != t &&
              (this.activeIndex = (this.activeIndex + t + 1) % t);
          },
          next: function () {
            var t = this.resources.length;
            0 != this.activeIndex &&
              (this.activeIndex = (this.activeIndex + t - 1) % t);
          },
          tab: function (t) {
            this.activeIndex = t;
          },
          onMouseDown: function (t) {
            (this.dragState.mousedown = !0),
              (this.dragState.mouseMoveStartX = t.clientX),
              (document.body.style.cursor = "e-resize");
          },
          onTouchStart: function (t) {
            (this.dragState.touch = !0),
              (this.dragState.touchMoveStartX = t.touches[0].clientX);
          },
          onMouseMove: function (t) {
            if (this.dragState.mousedown) {
              var e = t.clientX - this.dragState.mouseMoveStartX;
              (this.dragState.x = Math.min(
                Math.max(this.dragState.x + e, 0),
                this.dragState.max
              )),
                (this.dragState.mouseMoveStartX = t.clientX);
            }
          },
          onTouchMove: function (t) {
            if (this.dragState.touch) {
              var e = t.touches[0].clientX - this.dragState.touchMoveStartX;
              (this.dragState.x = Math.min(
                Math.max(this.dragState.x + e, 0),
                this.dragState.max
              )),
                (this.dragState.touchMoveStartX = t.touches[0].clientX);
            }
          },
          onMouseUp: function () {
            (this.dragState.mousedown = !1),
              (document.body.style.cursor = "auto");
          },
          onTouchEnd: function () {
            this.dragState.touch = !1;
          },
        },
      },
      Te = Ee,
      De = (n("bb39"), Object(f["a"])(Te, Me, Se, !1, null, "90d704ce", null)),
      Ve = De.exports,
      Pe = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "relic-details",
          },
          [
            n(
              "div",
              {
                staticClass: "title",
              },
              [n("p", [t._v(t._s(t.$t("Addition.Relics.title")))])]
            ),
            n(
              "ul",
              {
                staticClass: "pre-list",
              },
              t._l(t.resources, function (e, i) {
                return n("li", {
                  key: i,
                  staticClass: "pre-item",
                  style: {
                    "background-image": "url(" + e.preview + ")",
                    transform:
                      "translateX(" +
                      200 *
                        (Math.abs(i - t.activeIndex) >= 3
                          ? -5 * Math.sign(i - t.activeIndex) +
                            i -
                            t.activeIndex
                          : i - t.activeIndex) +
                      "px)\n                            scale(" +
                      (1 -
                        0.2 *
                          Math.abs(
                            Math.abs(i - t.activeIndex) >= 3
                              ? -5 * Math.sign(i - t.activeIndex) +
                                  i -
                                  t.activeIndex
                              : i - t.activeIndex
                          )) +
                      ") ",
                    "z-index":
                      "" +
                      (3 -
                        Math.abs(
                          Math.abs(i - t.activeIndex) >= 3
                            ? -5 * Math.sign(i - t.activeIndex) +
                                i -
                                t.activeIndex
                            : i - t.activeIndex
                        )),
                    opacity:
                      "" +
                      (1 -
                        Math.abs(
                          0.3 *
                            (Math.abs(i - t.activeIndex) >= 3
                              ? -5 * Math.sign(i - t.activeIndex) +
                                i -
                                t.activeIndex
                              : i - t.activeIndex)
                        )),
                    filter:
                      "blur(" +
                      Math.abs(
                        1 *
                          (Math.abs(i - t.activeIndex) >= 3
                            ? -5 * Math.sign(i - t.activeIndex) +
                              i -
                              t.activeIndex
                            : i - t.activeIndex)
                      ) +
                      "px)",
                  },
                  on: {
                    mouseover: function (e) {
                      return t.tab(i);
                    },
                    click: function (e) {
                      return t.showDetail(!0);
                    },
                  },
                });
              }),
              0
            ),
            n(
              "div",
              {
                staticClass: "modal",
                class: {
                  hide: !t.subList.show,
                },
                on: {
                  click: function (e) {
                    return t.showDetail(!1);
                  },
                },
              },
              [
                n(
                  "ul",
                  {
                    staticClass: "detail-list",
                  },
                  [
                    n("button", {
                      staticClass: "detail-btn left",
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.subTab(-1);
                        },
                      },
                    }),
                    t._l(t.resources[t.activeIndex].images, function (e, i) {
                      return n("li", {
                        key: i,
                        staticClass: "detail-item",
                        class: {
                          hide: t.subList.index != i,
                        },
                        style: {
                          "background-image": "url(" + e + ")",
                        },
                      });
                    }),
                    n("button", {
                      staticClass: "detail-btn right",
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.subTab(1);
                        },
                      },
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]
        );
      },
      Oe = [],
      ke = {
        props: {
          resources: Array,
        },
        data: function () {
          return {
            activeIndex: 3,
            halfLength: Math.floor(this.resources.length / 2),
            subList: {
              show: !1,
              index: 0,
            },
          };
        },
        created: function () {},
        methods: {
          tab: function (t) {
            console.log(Math.abs(this.activeIndex - t)), (this.activeIndex = t);
          },
          showDetail: function (t) {
            this.subList.show = t;
          },
          subTab: function (t) {
            var e = this.resources[this.activeIndex].images.length;
            this.subList.index = (this.subList.index + e + t) % e;
          },
        },
      },
      Ie = ke,
      _e = (n("51d3"), Object(f["a"])(Ie, Pe, Oe, !1, null, "be4d7102", null)),
      Le = _e.exports,
      Be = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "sanguo-map",
          },
          [
            n(
              "div",
              {
                staticClass: "title",
              },
              [n("p", [t._v(t._s(t.$t("Addition.Map.title")))])]
            ),
            n(
              "div",
              {
                staticClass: "description",
              },
              [
                n("div", {
                  staticClass: "border",
                  staticStyle: {
                    left: "0",
                    top: "0",
                    transform: "translate(-50%,-70%)",
                  },
                }),
                n("div", {
                  staticClass: "border",
                  staticStyle: {
                    left: "100%",
                    top: "100%",
                    transform: "translate(-50%,-50%) scale(-1,-1)",
                  },
                }),
                n("div", {
                  domProps: {
                    innerHTML: t._s(t.resources.description),
                  },
                }),
              ]
            ),
            n(
              "div",
              {
                staticClass: "map-container",
              },
              [
                n(
                  "div",
                  {
                    staticClass: "map",
                  },
                  [
                    n("img", {
                      attrs: {
                        src: "addition/SanguoMap/total.png",
                        height: "100%",
                      },
                    }),
                    n("img", {
                      staticClass: "patial wei",
                      class: {
                        active: 0 == t.selectedIndex,
                      },
                      attrs: {
                        src: "addition/SanguoMap/wei.png",
                        height: "100%",
                      },
                      on: {
                        mouseenter: function (e) {
                          return t.onMouseEnter(0);
                        },
                        mouseleave: function (e) {
                          return t.onMouseOut();
                        },
                      },
                    }),
                    n("img", {
                      staticClass: "patial shu",
                      class: {
                        active: 1 == t.selectedIndex,
                      },
                      attrs: {
                        src: "addition/SanguoMap/shu.png",
                        height: "100%",
                      },
                      on: {
                        mouseenter: function (e) {
                          return t.onMouseEnter(1);
                        },
                        mouseleave: function (e) {
                          return t.onMouseOut();
                        },
                      },
                    }),
                    n("img", {
                      staticClass: "patial wu",
                      class: {
                        active: 2 == t.selectedIndex,
                      },
                      attrs: {
                        src: "addition/SanguoMap/wu.png",
                        height: "100%",
                      },
                      on: {
                        mouseenter: function (e) {
                          return t.onMouseEnter(2);
                        },
                        mouseleave: function (e) {
                          return t.onMouseOut();
                        },
                      },
                    }),
                  ]
                ),
                n(
                  "div",
                  {
                    staticClass: "info",
                  },
                  [
                    n(
                      "div",
                      {
                        staticClass: "lines",
                      },
                      [
                        n(
                          "svg",
                          {
                            attrs: {
                              viewBox: "0 0 1000 400",
                            },
                          },
                          [
                            n("path", {
                              staticClass: "path path-wei",
                              attrs: {
                                d: "M 431 183 l 0 -80 l 320 0",
                              },
                            }),
                            n("path", {
                              staticClass: "path path-shu",
                              attrs: {
                                d: "M 360 235 l 260 0",
                              },
                            }),
                            n("path", {
                              staticClass: "path path-wu",
                              attrs: {
                                d: "M 493 210 l 0 160 l 325 0",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    n(
                      "div",
                      {
                        staticClass: " intro wei",
                        on: {
                          mouseenter: function (e) {
                            return t.onMouseEnter(0);
                          },
                          mouseleave: function (e) {
                            return t.onMouseOut();
                          },
                        },
                      },
                      [
                        n("div", [t._v(t._s(t.resources.map.Wei.leader))]),
                        n(
                          "div",
                          {
                            staticClass: "name",
                            class: {
                              active: 0 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Wei.name))]
                        ),
                        n(
                          "div",
                          {
                            staticClass: "time",
                            class: {
                              active: 0 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Wei.year))]
                        ),
                      ]
                    ),
                    n(
                      "div",
                      {
                        staticClass: " intro shu",
                        on: {
                          mouseenter: function (e) {
                            return t.onMouseEnter(1);
                          },
                          mouseleave: function (e) {
                            return t.onMouseOut();
                          },
                        },
                      },
                      [
                        n("div", [t._v(t._s(t.resources.map.Shu.leader))]),
                        n(
                          "div",
                          {
                            staticClass: "name",
                            class: {
                              active: 1 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Shu.name))]
                        ),
                        n(
                          "div",
                          {
                            staticClass: "time",
                            class: {
                              active: 1 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Shu.year))]
                        ),
                      ]
                    ),
                    n(
                      "div",
                      {
                        staticClass: " intro wu",
                        on: {
                          mouseenter: function (e) {
                            return t.onMouseEnter(2);
                          },
                          mouseleave: function (e) {
                            return t.onMouseOut();
                          },
                        },
                      },
                      [
                        n("div", [t._v(t._s(t.resources.map.Wu.leader))]),
                        n(
                          "div",
                          {
                            staticClass: "name",
                            class: {
                              active: 2 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Wu.name))]
                        ),
                        n(
                          "div",
                          {
                            staticClass: "time",
                            class: {
                              active: 2 == t.selectedIndex,
                            },
                          },
                          [t._v(t._s(t.resources.map.Wu.year))]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      Fe = [],
      je = {
        props: {
          resources: Object,
        },
        data: function () {
          return {
            selectedIndex: -1,
          };
        },
        methods: {
          onMouseEnter: function (t) {
            this.selectedIndex = t;
          },
          onMouseOut: function () {
            this.selectedIndex = -1;
          },
        },
      },
      Ae = je,
      $e = (n("44fb"), Object(f["a"])(Ae, Be, Fe, !1, null, "2ea361d9", null)),
      He = $e.exports,
      ze = {
        components: {
          NewVsOld: Ve,
          RelicDetails: Le,
          SanguoMap: He,
        },
        data: function () {
          return {
            index: 1,
            resource: Ce[localStorage.getItem("wuhouci-lang")] || Ce["zh"],
          };
        },
        created: function () {
          this.$Bus.$on("lang.change", this.onLangChange);
        },
        methods: {
          tab: function (t) {
            this.index = t;
          },
          onLangChange: function (t) {
            this.resource = Ce[t];
          },
        },
      },
      Ne = ze,
      Ue = (n("1cf4"), Object(f["a"])(Ne, be, xe, !1, null, "c6025840", null)),
      Re = Ue.exports,
      qe = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("ul", [
          n("li", [t._m(0), n("p", [t._v(t._s(t.$t("Tips.tipArrow")))])]),
          n("li", [t._m(1), n("p", [t._v(t._s(t.$t("Tips.tipFingger")))])]),
        ]);
      },
      We = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n(
              "div",
              {
                staticClass: "key-line",
              },
              [
                n("span", {
                  staticClass: "keys up is-active",
                }),
              ]
            ),
            n(
              "div",
              {
                staticClass: "key-line",
              },
              [
                n("span", {
                  staticClass: "keys left",
                }),
                n("span", {
                  staticClass: "keys down is-active",
                }),
                n("span", {
                  staticClass: "keys right",
                }),
              ]
            ),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("span", {
              staticClass: "mouse",
            }),
          ]);
        },
      ],
      Ge = {
        components: {
          IconFdage: re,
        },
      },
      Ze = Ge,
      Qe = (n("d235"), Object(f["a"])(Ze, qe, We, !1, null, "19b50d09", null)),
      Xe = Qe.exports,
      Ye = {
        components: {
          Greete: de,
          Minimap: ye,
          Addition: Re,
          Tips: Xe,
        },
        data: function () {
          return {
            showGreete: !0,
            showSceneUI: !1,
            showBtnMore: !1,
            showAddition: !1,
            showDescription: !1,
            showTips: !1,
            flow: 0,
            audioPlaying: !0,
            sceneDescription: {},
          };
        },
        created: function () {
          var t = this;
          this.$Bus.$on("startExperence", this.onStartExperence),
            this.$Bus.$on("panoScene.enter", this.onEnterPanoScene),
            this.$Bus.$on("flow.open", this.onOpenFlow),
            this.$Bus.$on("flow.close", this.onCloseFlow),
            this.$Bus.$on("audio.play", this.onAudioPlay),
            document.addEventListener("mousedown", function () {
              t.showTips = !1;
            });
        },
        methods: {
          onStartExperence: function () {
            (this.showGreete = !0), (this.showBtnMore = !1);
          },
          beginTravel: function () {
            this.$Bus.$emit("beginTravel"),
              (this.showGreete = !1),
              (this.showBtnMore = !0);
          },
          endTravel: function () {
            this.$Bus.$emit("endTravel"),
              (this.showGreete = !1),
              (this.showBtnMore = !0);
          },
          setAdditionVisible: function (t) {
            (this.showAddition = t),
              document.body
                .querySelectorAll(".guidepost")
                .forEach(function (e) {
                  e.style.zIndex = t ? 0 : 2;
                });
          },
          onOpenFlow: function (t) {
            this.showBtnMore = !1;
          },
          onCloseFlow: function () {
            this.showBtnMore = !0;
          },
          onEnterPanoScene: function (t) {
            (this.showSceneUI = !0), (this.flow = t), (this.showTips = !0);
            var e = te[localStorage.getItem("wuhouci-lang") || "zh"];
            switch (this.flow) {
              case 7:
                (this.sceneDescription = e.LiuBeiDian),
                  console.log(this.sceneDescription);
                break;
              case 8:
                this.sceneDescription = e.WuHouCi;
                break;
            }
          },
          onExsitPanoScene: function () {
            (this.showSceneUI = !1),
              this.$Bus.$emit("mainScene.back", this.flow);
          },
          onAudioPlay: function () {
            this.audioPlaying = !0;
          },
          triggerAudio: function () {
            (this.audioPlaying = !this.audioPlaying),
              this.$Bus.$emit("audio.trigger", this.audioPlaying),
              console.log(
                "热点音频".concat(this.audioPlaying ? "播放中" : "暂停中")
              );
          },
          toogleDescription: function () {
            this.showDescription = !this.showDescription;
          },
        },
      },
      Ke = Ye,
      Je = (n("36eb"), Object(f["a"])(Ke, Kt, Jt, !1, null, "07889370", null)),
      tn = Je.exports,
      en = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "app-footer",
          },
          [
            n(
              "div",
              {
                staticClass: "left",
              },
              [
                n(
                  "span",
                  {
                    staticClass: "icon-button",
                    on: {
                      click: function (e) {
                        return t.switchMuted();
                      },
                    },
                  },
                  [
                    n("span", {
                      staticClass: "icon",
                      class: t.muted ? "sound-off" : "sound-on",
                    }),
                    t._v(
                      "\n            " +
                        t._s(t.$t("Footer.btnSound")) +
                        "\n        "
                    ),
                  ]
                ),
                n(
                  "span",
                  {
                    staticClass: "icon-button",
                    on: {
                      click: function (e) {
                        return t.switchLanguage();
                      },
                    },
                  },
                  [
                    n("span", {
                      staticClass: "icon",
                      class: "lang-" + t.lang,
                    }),
                    t._v(
                      "\n            " +
                        t._s(t.$t("Footer.btnLang")) +
                        "\n        "
                    ),
                  ]
                ),
              ]
            ),
            n(
              "div",
              {
                staticClass: "right",
              },
              [
                n(
                  "a",
                  {
                    staticClass: "icon-fdage",
                    attrs: {
                      target: "_blank",
                      href: "http://4dage.com/",
                    },
                  },
                  [n("span", [n("icon-fdage")], 1)]
                ),
              ]
            ),
          ]
        );
      },
      nn = [],
      on = {
        components: {
          IconFdage: re,
        },
        data: function () {
          return {
            muted: !1,
            lang: localStorage.getItem("wuhouci-lang") || "zh",
          };
        },
        created: function () {},
        methods: {
          switchMuted: function () {
            (this.muted = !this.muted),
              this.$Bus.$emit("audio.muted", this.muted);
          },
          switchLanguage: function () {
            "zh" == this.lang ? (this.lang = "en") : (this.lang = "zh"),
              this.$Bus.$emit("lang.change", this.lang);
          },
        },
      },
      an = on,
      sn = (n("42dd"), Object(f["a"])(an, en, nn, !1, null, "56ff86b0", null)),
      rn = sn.exports,
      ln = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isShow
          ? n(
              "div",
              {
                staticClass: "video-intro",
                class: {
                  mask: t.isMask,
                },
              },
              [
                n("canvas", {
                  attrs: {
                    id: "canvas",
                    width: "1920",
                    height: "1173",
                  },
                }),
                n(
                  "video",
                  {
                    attrs: {
                      id: "video",
                      name: "media",
                      controls: "",
                      crossorigin: "anonymous",
                    },
                  },
                  [
                    n("source", {
                      attrs: {
                        src: t.src,
                        type: "video/mp4",
                      },
                    }),
                  ]
                ),
                n(
                  "button",
                  {
                    staticClass: "btn-skip",
                    on: {
                      click: function (e) {
                        return t.onVideoComplete();
                      },
                    },
                  },
                  [t._v(t._s(t.$t("Video.btnSkip")))]
                ),
              ]
            )
          : t._e();
      },
      cn = [],
      un = {
        data: function () {
          return {
            src: "video/intro-".concat(
              localStorage.getItem("wuhouci-lang") || "zh",
              ".mp4"
            ),
            isShow: !0,
            isMask: !0,
          };
        },
        created: function () {
          this.$Bus.$on("audio.muted", this.onAudioMuted);
        },
        mounted: function () {
          var t = this;
          at = this.$el.querySelector("#video");
          var e = new S["VideoTexture"](at);
          (e.minFilter = S["NearestFilter"]),
            (st = new P(this.$el.querySelector("#canvas"), "background", [
              e,
              new S["TextureLoader"]().load("images/mask-preloader-half.jpg"),
            ]).setUniformsValue("progress", 0));
          var n = function t() {
            st.render(), requestAnimationFrame(t);
          };
          (rt = TweenMax.to(
            {
              value: 0,
            },
            2,
            {
              value: 1,
              paused: !0,
              ease: Sine.easeIn,
            }
          )
            .eventCallback("onStart", function () {
              at.play();
            })
            .eventCallback(
              "onUpdate",
              function (t) {
                st.setUniformsValue("progress", t.ratio);
              },
              ["{self}"]
            )
            .eventCallback("onComplete", function () {
              t.isMask = !1;
            })),
            (lt = TweenMax.to(
              {
                value: 0,
              },
              2,
              {
                value: 1,
                paused: !0,
                ease: Sine.easeIn,
              }
            )
              .eventCallback(
                "onUpdate",
                function (t) {
                  st.setUniformsValue("progress", 1 - t.ratio),
                    (at.volume = 1 - t.ratio);
                },
                ["{self}"]
              )
              .eventCallback("onComplete", function () {
                t.$Bus.$emit("introVideo.complete");
              })),
            at.addEventListener(
              "ended",
              function () {
                t.onVideoComplete();
              },
              !1
            ),
            n(),
            this.play();
        },
        methods: {
          play: function () {
            rt.play();
          },
          onVideoComplete: function () {
            lt.play();
          },
          onAudioMuted: function (t) {
            at.muted = t;
          },
        },
      },
      dn = un,
      hn = (n("54c3"), Object(f["a"])(dn, ln, cn, !1, null, "158ed092", null)),
      pn = hn.exports,
      mn = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "video-end",
          },
          [
            n(
              "transition",
              {
                attrs: {
                  appear: "",
                  name: "custom-classes-transition",
                  "enter-active-class": "animated fadeIn",
                  "leave-active-class": "animated fadeOut",
                },
              },
              [
                t.isEnd
                  ? n(
                      "div",
                      {
                        staticClass: "ending",
                      },
                      [
                        n("div", {
                          staticClass: "tips",
                          style: {
                            "background-image":
                              "url(" + t.$t("End.tipTitleUrl") + ")",
                          },
                        }),
                        n("div", {
                          staticClass: "tips-content",
                          style: {
                            "background-image":
                              "url(" + t.$t("End.tipContentUrl") + ")",
                          },
                        }),
                      ]
                    )
                  : t._e(),
              ]
            ),
            n(
              "transition",
              {
                attrs: {
                  appear: "",
                  name: "custom-classes-transition",
                  "enter-active-class": "animated fadeIn",
                  "leave-active-class": "animated fadeOut",
                },
              },
              [
                t.isEnd
                  ? n("button", {
                      staticClass: "btn-again",
                      on: {
                        click: function (e) {
                          return t.tralvelAgain();
                        },
                      },
                    })
                  : t._e(),
              ]
            ),
            t.isEnd
              ? t._e()
              : n("div", [
                  n("canvas", {
                    attrs: {
                      id: "canvas",
                      width: "1920",
                      height: "1173",
                    },
                  }),
                  n(
                    "video",
                    {
                      attrs: {
                        id: "video",
                        autoplay: "",
                        name: "media",
                        controls: "",
                        crossorigin: "anonymous",
                      },
                    },
                    [
                      n("source", {
                        attrs: {
                          src: t.src,
                          type: "video/mp4",
                        },
                      }),
                    ]
                  ),
                  n(
                    "button",
                    {
                      staticClass: "btn-skip",
                      on: {
                        click: function (e) {
                          return t.onVideoComplete();
                        },
                      },
                    },
                    [t._v(t._s(t.$t("Video.btnSkip")))]
                  ),
                ]),
          ],
          1
        );
      },
      fn = [],
      gn = {
        data: function () {
          return {
            src: "video/end-".concat(
              localStorage.getItem("wuhouci-lang") || "zh",
              ".mp4"
            ),
            isEnd: !1,
          };
        },
        created: function () {
          this.$Bus.$on("audio.muted", this.onAudioMuted);
        },
        mounted: function () {
          var t = this;
          ct = this.$el.querySelector("#video");
          var e = new S["VideoTexture"](ct);
          (e.minFilter = S["NearestFilter"]),
            (ut = new P(this.$el.querySelector("#canvas"), "background", [
              e,
              new S["TextureLoader"]().load("images/mask-preloader-half.jpg"),
            ]).setUniformsValue("progress", 0));
          var n = function t() {
            ut.render(), requestAnimationFrame(t);
          };
          (dt = TweenMax.to(
            {
              value: 0,
            },
            2,
            {
              value: 1,
              paused: !0,
              ease: Sine.easeIn,
            }
          )
            .eventCallback("onStart", function () {
              ct.play();
            })
            .eventCallback(
              "onUpdate",
              function (t) {
                ut.setUniformsValue("progress", t.ratio);
              },
              ["{self}"]
            )
            .eventCallback("onComplete", function () {
              t.isMask = !1;
            })),
            (ht = TweenMax.to(
              {
                value: 0,
              },
              2,
              {
                value: 1,
                paused: !0,
                ease: Sine.easeIn,
              }
            )
              .eventCallback(
                "onUpdate",
                function (t) {
                  ut.setUniformsValue("progress", 1 - t.ratio),
                    (ct.volume = 1 - t.ratio);
                },
                ["{self}"]
              )
              .eventCallback("onComplete", function () {
                t.$Bus.$emit("endVideo.complete"), (t.isEnd = !0);
              })),
            ct.addEventListener(
              "ended",
              function () {
                t.onVideoComplete();
              },
              !1
            ),
            n(),
            this.play();
        },
        methods: {
          play: function () {
            dt.play();
          },
          onVideoComplete: function () {
            ht.play();
          },
          tralvelAgain: function () {
            this.$Bus.$emit("travelAgain");
          },
          onAudioMuted: function (t) {
            ct.muted = t;
          },
        },
      },
      vn = gn,
      wn = (n("e91a"), Object(f["a"])(vn, mn, fn, !1, null, "4ddacfbc", null)),
      yn = wn.exports,
      bn = (function () {
        function t() {
          var t = this;
          (this.timeOutMillisecond = 5e3),
            (this.worker = new Worker("worker/worker.js")),
            this.worker.addEventListener(
              "message",
              function (e) {
                if (
                  t.timeOutHandle &&
                  (clearTimeout(t.timeOutHandle), (t.timeOutHandle = 0)) &&
                  e.data.msg &&
                  "error" == e.data.msg
                )
                  return t.callBack && t.callBack(e.data), void (t.used = !1);
                (t.used = !1), t.callBack && t.callBack(e.data);
              },
              !1
            ),
            (this.used = !1),
            (this.timeOutHandle = 0);
        }
        return (
          (t.prototype.createWorker = function () {
            var t = this;
            (this.worker = new Worker("worker/worker.js")),
              this.worker.addEventListener(
                "message",
                function (e) {
                  if (
                    t.timeOutHandle &&
                    (clearTimeout(t.timeOutHandle), (t.timeOutHandle = 0)) &&
                    e.data.msg &&
                    "error" == e.data.msg
                  )
                    return t.callBack && t.callBack(e.data), void (t.used = !1);
                  (t.used = !1), t.callBack(e.data);
                },
                !1
              );
          }),
          (t.prototype.runRequest = function (t, e) {
            var n = this;
            this.used ||
              ((this.callBack = e),
              (this.timeOutHandle = window.setTimeout(function () {
                n.worker.terminate(),
                  n.callBack &&
                    n.callBack({
                      msg: "error",
                      data: "noData",
                    }),
                  (n.used = !1),
                  n.createWorker();
              }, this.timeOutMillisecond)),
              this.worker.postMessage({
                cmd: "loadData",
                url: t.url,
                responseType: t.responseType,
              }),
              (this.used = !0));
          }),
          t
        );
      })(),
      xn = bn,
      Cn = (function () {
        function t(t, e, n, i) {
          (this.url = t),
            (this.responseType = e),
            (this.callBack = n),
            (this.loaded = !1),
            (this.requseted = !1),
            (this.failedTimes = 0),
            (this.retryCount = i || 0);
        }
        return (
          (t.prototype.noNeedForLoad = function () {
            return this.loaded || this.failedTimes > this.retryCount;
          }),
          t
        );
      })(),
      Mn = Cn,
      Sn = "../",
      En = (function (t) {
        function e() {
          var e = t.call(this) || this;
          (e.MAX_SIMULTANEOUS_REQUEST = 1),
            (e.loadQueue = []),
            (e.loadWorkers = []);
          for (var n = 0; n < e.MAX_SIMULTANEOUS_REQUEST; n++)
            e.loadWorkers.push(new xn());
          return (e.numOfTotal = 0), (e.numOfDone = 0), e;
        }
        return (
          L["a"](e, t),
          (e.prototype.addRequest = function (t, e, n) {
            this.loadQueue.push(new Mn("" + Sn.trim() + t.trim(), e, n)),
              this.numOfTotal++;
          }),
          (e.prototype.start = function () {
            this.handleRequests(),
              this.dispatchEvent({
                type: "start",
              });
          }),
          (e.prototype.handleRequests = function () {
            var t = this;
            if (0 != this.loadQueue.length)
              for (
                var e = function (e) {
                    n.loadQueue[e].noNeedForLoad() ||
                      n.handleRequest(n.loadQueue[e], function (n) {
                        t.loadQueue[e].callBack && t.loadQueue[e].callBack(n),
                          "success" == n.msg
                            ? ((t.loadQueue[e].loaded = !0), t.numOfDone++)
                            : (t.loadQueue[e].failedTimes++,
                              console.warn("retry load " + t.loadQueue[e].url)),
                          t.handleRequests(),
                          t.dispatchEvent({
                            type: "progress",
                            data: {
                              loaded: t.numOfDone,
                              total: t.numOfTotal,
                            },
                          }),
                          t.numOfDone == t.numOfTotal &&
                            t.dispatchEvent({
                              type: "complete",
                            });
                      });
                  },
                  n = this,
                  i = 0;
                i < this.loadQueue.length;
                i++
              )
                e(i);
          }),
          (e.prototype.handleRequest = function (t, e) {
            for (
              var n = Math.min(this.loadQueue.length, this.loadWorkers.length),
                i = 0;
              i < n;
              i++
            ) {
              var o = this.loadWorkers[i];
              if (!o.used) {
                o.runRequest(t, e);
                break;
              }
            }
          }),
          e
        );
      })(S["EventDispatcher"]),
      Tn = En;
    (function (t) {
      (t[(t["Intro"] = 0)] = "Intro"),
        (t[(t["DaMen"] = 1)] = "DaMen"),
        (t[(t["TangBei"] = 2)] = "TangBei"),
        (t[(t["MingBei"] = 3)] = "MingBei"),
        (t[(t["ChuShiBiao"] = 4)] = "ChuShiBiao"),
        (t[(t["WenChenLang"] = 5)] = "WenChenLang"),
        (t[(t["WuJiangLang"] = 6)] = "WuJiangLang"),
        (t[(t["HanZhaoLieMiao"] = 7)] = "HanZhaoLieMiao"),
        (t[(t["WuHouCi"] = 8)] = "WuHouCi"),
        (t[(t["HuiLing"] = 9)] = "HuiLing");
    })(pt || (pt = {}));
    var Dn = pt,
      Vn = (function () {
        function t(t) {
          var e = this;
          (this.resources = new Map()),
            (this.app = t),
            (this.listener = new S["AudioListener"]()),
            (this.source = new S["Audio"](this.listener)),
            (this.bgSource = new S["Audio"](this.listener)),
            (this.bgAudio = new Audio()),
            (this.loader = new S["AudioLoader"]()),
            (this.transition = this.app.tweens),
            (this.transFadeIn = new B["Tween"](this.source.gain.gain)
              .to(
                {
                  value: 1,
                },
                1e3
              )
              .onStart(function () {
                e.source.play();
              })),
            (this.transFadeOut = new B["Tween"](this.source.gain.gain)
              .to(
                {
                  value: 0,
                },
                1e3
              )
              .onComplete(function () {
                e.source.pause();
              })),
            (this.index = -1);
        }
        return (
          (t.prototype.init = function () {
            this.resources.set(
              Dn.Intro,
              "audio/hotspot/Intro/" + (this.app.lang || "zh") + ".mp3"
            ),
              this.resources.set(
                Dn.DaMen,
                "audio/hotspot/DaMen/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.TangBei,
                "audio/hotspot/TangBei/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.ChuShiBiao,
                "audio/hotspot/ChuShiBiao/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.WenChenLang,
                "audio/hotspot/WenChenLang/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.WuJiangLang,
                "audio/hotspot/WenChenLang/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.HanZhaoLieMiao,
                "audio/hotspot/LiuBeiDian/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.WuHouCi,
                "audio/hotspot/WuHouCi/" + (this.app.lang || "zh") + ".mp3"
              ),
              this.resources.set(
                Dn.HuiLing,
                "audio/hotspot/HuiLing/" + (this.app.lang || "zh") + ".mp3"
              ),
              (this.bgSource.loop = !0),
              (this.bgSource.gain.gain.value = 0.12),
              (this.bgAudio.src = "audio/background/background.mp3"),
              (this.bgAudio.crossOrigin = "anonymous"),
              (this.bgAudio.autoplay = !1),
              (this.bgAudio.loop = !0),
              (this.bgAudio.muted = !0),
              (this.bgAudio.id = "a"),
              document.body.appendChild(this.bgAudio),
              this.bgSource.setMediaElementSource(this.bgAudio);
          }),
          (t.prototype.reset = function () {
            this.bgAudio.pause(), this.stopAudio();
          }),
          (t.prototype.start = function () {
            var t = this;
            console.log("BgPlaying"),
              this.listener.context.resume().then(function () {
                (t.bgAudio.currentTime = 0),
                  t.bgAudio.play(),
                  (t.bgAudio.muted = !1);
              });
          }),
          (t.prototype.playFlowAudio = function (t) {
            var e = this.resources.get(t);
            return this.playAudio(e);
          }),
          (t.prototype.playAudio = function (t) {
            var e = this;
            return new Promise(function (n, i) {
              t
                ? e.loader.load(
                    t,
                    function (t) {
                      e.listener.context.resume().then(function () {
                        e.source.setBuffer(t),
                          (e.source.offset = 0),
                          e.source.play(),
                          n();
                      });
                    },
                    null,
                    null
                  )
                : i("未找到音频");
            });
          }),
          (t.prototype.stopAudio = function () {
            this.source.isPlaying && this.source.pause(),
              (this.source.buffer = null);
          }),
          (t.prototype.trigger = function (t) {
            t
              ? (this.transition.remove(this.transFadeOut),
                this.transition.add(this.transFadeIn.start()))
              : (this.transition.remove(this.transFadeIn),
                this.transition.add(this.transFadeOut.start()));
          }),
          (t.prototype.muted = function (t) {
            t
              ? this.transition.add(
                  new B["Tween"](this.listener.gain.gain)
                    .to(
                      {
                        value: 0,
                      },
                      500
                    )
                    .start()
                )
              : this.transition.add(
                  new B["Tween"](this.listener.gain.gain)
                    .to(
                      {
                        value: 1,
                      },
                      500
                    )
                    .start()
                );
          }),
          t
        );
      })(),
      Pn = Vn,
      On = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.lang = localStorage.getItem("wuhouci-lang") || "zh"),
            (n.tweens = new B["Group"]()),
            (n.loader = new Tn()),
            (n.glManager = new $t(n, e, n.loader)),
            (n.audioManager = new Pn(n)),
            n
          );
        }
        return (
          L["a"](e, t),
          (e.prototype.init = function () {
            this.glManager.init(),
              this.audioManager.init(),
              this.bindEvents(),
              this.mainLoop(0);
          }),
          (e.prototype.bindEvents = function () {}),
          (e.prototype.mainLoop = function (t) {
            this.tweens.update(t),
              window.requestAnimationFrame(this.mainLoop.bind(this));
          }),
          (e.prototype.beginTravel = function () {
            var t = this;
            this.glManager.beginTravel();
            var e = setTimeout(function () {
              t.audioManager.playFlowAudio(Dn.Intro), clearTimeout(e);
            }, 1e3);
          }),
          (e.prototype.reset = function () {
            this.glManager.reset(),
              this.audioManager.reset(),
              console.log("reset");
          }),
          (e.prototype.openFlow = function (t) {
            var e = this,
              n = this.glManager.hotspotController.guideposts.find(function (
                e
              ) {
                return e.targetFlow == t;
              });
            this.audioManager.stopAudio(),
              this.audioManager.playFlowAudio(n.targetFlow),
              this.glManager.openFlow(n).then(function () {
                if (t != Dn.HanZhaoLieMiao && t != Dn.WuHouCi) {
                  var n = e.glManager.hotspotController.hotspots.find(function (
                    e
                  ) {
                    return e.flow == t;
                  });
                  e.openHotspot(n);
                }
              }),
              this.dispatchEvent({
                type: "flow.open",
                data: t,
              }),
              this.dispatchEvent({
                type: "guidepost.open",
                guidepost: n,
              }),
              console.log("openFlow" + t);
          }),
          (e.prototype.closeFlow = function (t) {
            var e = this.glManager.hotspotController.guideposts.find(function (
              e
            ) {
              return e.targetFlow == t;
            });
            this.glManager.closeFlow(e),
              this.audioManager.stopAudio(),
              this.dispatchEvent({
                type: "flow.close",
              }),
              this.dispatchEvent({
                type: "guidepost.close",
                guidepost: e,
              });
          }),
          (e.prototype.openHotspot = function (t) {
            this.dispatchEvent({
              type: "hotspot.open",
              data: t,
            }),
              console.log("openHotspot:" + t.title);
          }),
          (e.prototype.closeHotspot = function (t) {
            var e = this.glManager.findHotspotById(t);
            if (e.flow == Dn.HanZhaoLieMiao || e.flow == Dn.WuHouCi);
            else {
              var n = this.glManager.hotspotController.guideposts.find(
                function (t) {
                  return t.targetFlow == e.flow;
                }
              );
              this.closeFlow(n.hotspotId);
            }
          }),
          (e.prototype.onEnterPanoScene = function (t) {
            this.dispatchEvent({
              type: "panoScene.enter",
              data: t,
            });
          }),
          (e.prototype.onExsitPanoScene = function () {
            this.dispatchEvent({
              type: "panoScene.exsit",
            });
          }),
          e
        );
      })(S["EventDispatcher"]),
      kn = On,
      In =
        ((function () {
          function t(t) {
            for (var e in ((this.stats = new window["Stats"]()),
            (this.rootDom = t),
            t.appendChild(this.stats.dom),
            (this.gui = new window["dat"]["GUI"]()),
            (this.EasyEnum = {}),
            (this.EasySpeedEnum = {
              In: "In",
              Out: "Out",
              InOut: "InOut",
            }),
            B["Easing"]))
              this.EasyEnum[e] = e;
          }
          (t.prototype.generateUIControls = function (t) {
            var e = this;
            t.addEventListener("update", function (t) {
              e.stats.update();
            }),
              this.generateSceneHelper(t),
              this.generatePointCloudUI(t),
              this.generateCameraControllerUI(t),
              this.generateHotspotControllerUI(t);
          }),
            (t.prototype.generateSceneHelper = function (t) {
              var e = this.gui,
                n = e.addFolder("场景"),
                i = new S["GridHelper"](1e3, 100);
              t.scene.add(i);
              var o = new S["AxesHelper"](50);
              t.scene.add(o),
                n.add(i, "visible", "网格"),
                n.add(o, "visible", "坐标轴");
            }),
            (t.prototype.generatePointCloudUI = function (t) {
              if (t.pointCloud) {
                var e = t.pointCloud,
                  n = (t.pointCloud.material, new S["Group"]());
                (n.visible = !1),
                  t.scene.add(n),
                  e.children.forEach(function (t) {
                    var e = t,
                      i = new S["BoxHelper"](e, new S["Color"](255));
                    n.add(i);
                    var o = new S["Mesh"](
                      new S["SphereBufferGeometry"](0.5, 30),
                      new S["MeshBasicMaterial"]({
                        color: 16711680,
                        wireframe: !0,
                      })
                    );
                    e.geometry.boundingBox.getCenter(o.position), n.add(o);
                  });
                var i = {
                    pointSize: u("pointSize"),
                    pointColor: u("pointColor"),
                    fogColor: u("fogColor"),
                    fogBaseStrength: u("fogBaseStrength"),
                    fogHeightStrength: u("fogHeightStrength"),
                    duration: p("duration"),
                    initDensity: p("initDensity"),
                    hoverDensity: p("hoverDensity"),
                    initHeight: u("initHeight"),
                    initAmplitude: u("initAmplitude"),
                    hoverHeight: u("hoverHeight"),
                    hoverAmplitude: u("hoverAmplitude"),
                  },
                  o = this.gui.addFolder("粒子");
                o.add(n, "visible", "包围盒");
                var a = this.gui.addFolder("地面");
                a.add(
                  e.ground.material.uniforms.density,
                  "value",
                  "密度",
                  0,
                  1,
                  0.01
                ),
                  a.add(
                    e.ground.material.uniforms.initAmplitude,
                    "value",
                    "噪声强度",
                    0,
                    200,
                    0.01
                  );
                var s = o.addFolder("静态属性");
                s
                  .add(i, "pointSize", "大小", 0.01, 80, 0.01)
                  .onChange(function (t) {
                    d("pointSize", t);
                  }),
                  s
                    .addColor(i, "pointColor", "粒子颜色")
                    .onChange(function (t) {
                      h("pointColor", t);
                    }),
                  s.addColor(i, "fogColor", "雾颜色").onChange(function (t) {
                    h("fogColor", t);
                  }),
                  s
                    .add(i, "fogBaseStrength", "基本强度", 0, 0.01, 1e-4)
                    .onChange(function (t) {
                      d("fogBaseStrength", t);
                    }),
                  s
                    .add(i, "fogHeightStrength", "高度衰减率", 0, 1, 0.001)
                    .onChange(function (t) {
                      d("fogHeightStrength", t);
                    });
                var r = o.addFolder("初始状态");
                r
                  .add(i, "initDensity", "密度", 0, 1, 0.01)
                  .onChange(function (t) {
                    m("initDensity", t), d("density", t);
                  }),
                  r
                    .add(i, "initHeight", "高度", 0, 1, 0.01)
                    .onChange(function (t) {
                      d("initHeight", t);
                    }),
                  r
                    .add(i, "initAmplitude", "噪声强度", 0, 50, 0.01)
                    .onChange(function (t) {
                      d("initAmplitude", t);
                    });
                var l = o.addFolder("鼠标悬停状态");
                l
                  .add(i, "hoverDensity", "密度", 0, 1, 0.01)
                  .onChange(function (t) {
                    m("hoverDensity", t);
                  }),
                  l
                    .add(i, "hoverHeight", "高度", 0, 1, 0.01)
                    .onChange(function (t) {
                      d("hoverHeight", t);
                    }),
                  l
                    .add(i, "hoverAmplitude", "噪声强度", 0, 50, 0.01)
                    .onChange(function (t) {
                      d("hoverAmplitude", t);
                    });
                var c = o.addFolder("过渡");
                c.add(i, "duration", "时长", 0, 5e3, 200).onChange(function (
                  t
                ) {
                  m("duration", t);
                });
              }
              function u(e) {
                var n = t.pointCloud.children[0];
                return n.material.uniforms[e].value;
              }
              function d(e, n) {
                t.pointCloud.children.forEach(function (t) {
                  var i = t;
                  i.material.uniforms[e].value = n;
                });
              }
              function h(e, n) {
                t.pointCloud.children.forEach(function (t) {
                  var i = t;
                  i.material.uniforms[e].value = new S["Color"](n.r, n.g, n.b);
                });
              }
              function p(e) {
                var n = t.pointCloud.children[0];
                return n[e];
              }
              function m(e, n) {
                t.pointCloud.children.forEach(function (t) {
                  var i = t;
                  i[e] = n;
                });
              }
            }),
            (t.prototype.generateCameraControllerUI = function (t) {
              var e = t.cameraController,
                n = document.createElement("textarea");
              (n.style.position = "fixed"),
                (n.style.top = "0"),
                (n.style.left = "20%"),
                (n.style.width = "500px"),
                (n.style.height = "100px"),
                (n.style.background = "rgba(0,0,0,0.5)"),
                (n.style.padding = "20px 10px"),
                (n.style.color = "#fff"),
                (n.style.pointerEvents = "all"),
                (n.innerText = "相机位置"),
                this.rootDom.appendChild(n);
              var i = new S["Mesh"](
                new S["SphereGeometry"](0.5, 20, 20),
                new S["MeshBasicMaterial"]({
                  wireframe: !0,
                  color: 255,
                })
              );
              i.position.copy(e.orbitControls["target"]),
                t.scene.add(i),
                t.addEventListener("update", function () {
                  i.position.copy(e.orbitControls["target"]),
                    (n.innerText = JSON.stringify({
                      pos: t.camera.position,
                      pivot: e.orbitControls["target"],
                    }));
                });
              var o = {
                  tranlateDuration: 1e3,
                  tranlateDelay: 0,
                  tranlateEase: this.EasyEnum.Circular,
                  tranlateEaseSpeed: this.EasySpeedEnum.Out,
                  rotateDuration: 1e3,
                  rotateDelay: 0,
                  rotateEasy: this.EasyEnum.Circular,
                  rotateEasySpeed: this.EasySpeedEnum.Out,
                  hotSpots: t.hotspotController.guideposts,
                  index: 3,
                  ready: !0,
                  progress: 0,
                  mode: 1,
                  test: function () {
                    var t = this;
                    (e.animPositionDutation = this.tranlateDuration),
                      e.animPosition
                        .delay(this.tranlateDelay)
                        .easing(
                          B["Easing"][this.tranlateEase][this.tranlateEaseSpeed]
                        ),
                      (e.animRotationDutation = this.tranlateDuration),
                      e.animRotation
                        .delay(this.rotateDelay)
                        .easing(
                          B["Easing"][this.rotateEasy][this.rotateEasySpeed]
                        ),
                      this.hotSpots.length &&
                        this.ready &&
                        ((this.ready = !1),
                        e
                          .moveToGuidepost(this.hotSpots[this.index])
                          .then(function () {
                            t.ready = !0;
                          }));
                  },
                  reset: function () {
                    t.reset(), (this.ready = !0);
                  },
                  copy: function () {
                    n.select(), document.execCommand("Copy");
                  },
                },
                a = this.gui.addFolder("相机");
              a.add(o, "tranlateDuration", "平移时长", 500, 1e4, 500),
                a.add(o, "tranlateDelay", "平移延迟", 0, 3e3, 100),
                a.add(o, "tranlateEase", "平移Easy", this.EasyEnum),
                a.add(
                  o,
                  "tranlateEaseSpeed",
                  "平移EasySpeed",
                  this.EasySpeedEnum
                ),
                a.add(o, "rotateDuration", "旋转时长", 500, 1e4, 500),
                a.add(o, "rotateDelay", "旋转延迟", 0, 3e3, 100),
                a.add(o, "rotateEasy", "旋转Easy", this.EasyEnum),
                a.add(
                  o,
                  "rotateEasySpeed",
                  "旋转EasySpeed",
                  this.EasySpeedEnum
                ),
                a
                  .add(o, "index", "选择热点", {
                    唐碑: 0,
                    文臣廊: 1,
                    汉昭烈庙: 2,
                    武侯祠: 3,
                  })
                  .onChange(function (t) {
                    o.ready = !0;
                  }),
                a.add(o, "test", "动画演示"),
                a.add(o, "reset", "重置相机位置"),
                a
                  .add(o, "mode", "相机模式", {
                    轨道视角: 0,
                    位置锁定: 1,
                  })
                  .onChange(function (t) {
                    e.tabMode(Number(t)), (i.visible = 0 == t);
                  }),
                a.add(e.orbitControls["target"], "y", "视点高度", -5, 15, 0.01),
                a.add(o, "copy", "复制");
            }),
            (t.prototype.generateHotspotControllerUI = function (t) {});
        })(),
        {
          components: {
            Hotspot: x,
            HomeScene: Yt,
            MainScene: tn,
            AppFooter: rn,
            VideoIntro: pn,
            VideoEnd: yn,
          },
          data: function () {
            return {
              app: null,
              GUIManager: null,
              homeSceneViewing: !0,
              introVideoViewing: !1,
              endVideoViewing: !1,
              mainSceneViewing: !1,
              hotspotViewing: !1,
              hotspot: {},
            };
          },
          mounted: function () {
            var t = this;
            try {
              (this.app = window["WHC"] =
                new kn(
                  this.$refs["mainScene"].$el.querySelector("#canvasScene")
                )),
                this.app.init(),
                setTimeout(function () {
                  t.app.loader.start(), t.onLoadingStart();
                }, 1e3),
                this.app.loader.addEventListener("start", this.onLoadingStart),
                this.app.loader.addEventListener(
                  "progress",
                  this.onLoadingProgress
                ),
                this.app.loader.addEventListener(
                  "complete",
                  this.onLoadingComplete
                ),
                this.app.addEventListener("hotspot.open", this.onOpenHotspot),
                this.app.addEventListener("audio.play", this.onAudioPlay),
                this.app.addEventListener(
                  "panoScene.enter",
                  this.onEnterPanoScene
                ),
                this.app.addEventListener("minimap.update", function (e) {
                  t.$Bus.$emit("minimap.update", e.data);
                }),
                this.app.addEventListener("flow.open", function (e) {
                  t.$Bus.$emit("flow.open", e.data);
                }),
                this.app.addEventListener("flow.close", function (e) {
                  t.$Bus.$emit("flow.close", e.data);
                }),
                this.$Bus.$on("introVideo.complete", this.onIntoVideoComplete),
                this.$Bus.$on("startExperence", this.onStartExperence),
                this.$Bus.$on("beginTravel", this.beginTravel),
                this.$Bus.$on("endTravel", this.onEndTravel),
                this.$Bus.$on("travelAgain", this.travelAgain),
                this.$Bus.$on("hotspot.close", this.onCloseHotspot),
                this.$Bus.$on("mainScene.back", this.onBack),
                this.$Bus.$on("audio.trigger", this.onAudioTrigger),
                this.$Bus.$on("audio.muted", this.onAudioMuted),
                (window["glManager"] = this.app.glManager);
            } catch (e) {
              throw e;
            }
          },
          methods: {
            onLoadingStart: function () {
              this.$Bus.$emit("load.start");
            },
            onLoadingProgress: function (t) {
              this.$Bus.$emit("load.progress", t.data.loaded / t.data.total);
            },
            onLoadingComplete: function () {
              this.$Bus.$emit("load.complete"),
                this.UIManager &&
                  this.UIManager.generateUIControls(this.app.glManager);
            },
            onStartExperence: function () {
              (this.homeSceneViewing = !1),
                (this.introVideoViewing = !0),
                (this.endVideoViewing = !1),
                (this.mainSceneViewing = !0),
                this.app.glManager.start();
            },
            beginTravel: function () {
              this.app.beginTravel();
            },
            onEndTravel: function () {
              (this.endVideoViewing = !0),
                (this.mainSceneViewing = !1),
                this.app.reset();
            },
            travelAgain: function () {
              this.onStartExperence(), this.$Bus.$emit("startExperence");
            },
            onIntoVideoComplete: function () {
              (this.introVideoViewing = !1), this.app.audioManager.start();
            },
            onEnterPanoScene: function (t) {
              this.$Bus.$emit("panoScene.enter", t.data);
            },
            onExistPanoScene: function () {
              this.$Bus.$emit("panoScene.exsit");
            },
            onBack: function (t) {
              this.app.closeFlow(t);
            },
            onOpenHotspot: function (t) {
              (this.hotspot = t.data), (this.hotspotViewing = !0);
            },
            onCloseHotspot: function (t) {
              this.app.closeHotspot(t), (this.hotspotViewing = !1);
            },
            onAudioTrigger: function (t) {
              this.app.audioManager.trigger(t);
            },
            onAudioMuted: function (t) {
              this.app.audioManager.muted(t);
            },
            onAudioPlay: function () {
              this.$Bus.$emit("audio.play");
            },
          },
        }),
      _n = In,
      Ln = (n("4daf"), Object(f["a"])(_n, r, l, !1, null, "6bd52e00", null)),
      Bn = Ln.exports,
      Fn = o["a"].extend({
        name: "app",
        components: {
          Home: Bn,
        },
        mounted: function () {},
      }),
      jn = Fn,
      An = (n("7c55"), Object(f["a"])(jn, a, s, !1, null, null, null)),
      $n = An.exports,
      Hn = new o["a"](),
      zn = n("a925"),
      Nn = {
        Footer: {
          btnSound: "声音",
          btnLang: "语言",
        },
        Logo: {
          btnStartExperience: {
            loading: "加载中...",
            loaded: "开始体验",
          },
        },
        Video: {
          btnSkip: "跳过",
        },
        Tips: {
          btnStartTravel: "开始旅行",
          tipUrl: "images/intro-tips-zh.png",
          tipArrow: "使用箭头移动",
          tipFingger: "鼠标拖拽转向",
        },
        MainScene: {
          btnBack: "返回",
          btnMore: "文史挖掘",
          btnStop: "结束旅行",
        },
        Hotspot: {
          btnPicture: "多图赏析",
          btnModel: "指尖文物",
        },
        Addition: {
          menu: {
            itemBack: "返回",
            item1: "文物荟萃",
            item2: "新旧对比",
            item3: "三国地图",
          },
          Relics: {
            title: "文物荟萃",
          },
          NewVsOld: {
            title: "新旧对比",
            smriti: "武侯祠传承",
            description:
              "三国文化是中国历史上不可多得和不容忽视的文化遗产，虽然三国历史在中华五千年文明的历史长河中，只是短暂的一瞬，但是那刀光剑影，群雄割据的时代，以及叱咤风云，个性突出的英雄，无不彰显着中华民族传统的忠义、智慧、勇武精神,成都武侯祠正是体现这些传统文化精髓的三国遗迹所在。成都武侯祠历史悠久，如果从刘备下葬惠陵算起，这处三国文化遗迹经过1790多年的历史沉淀，庄严肃穆的庙宇早已成为人们敬仰的三国文化圣地。",
          },
          Map: {
            title: "三国地图",
          },
        },
        End: {
          tipTitleUrl: "images/end-tips-title-zh.png",
          tipContentUrl: "images/end-tips-content-zh.png",
        },
      },
      Un = {
        Footer: {
          btnSound: "Voice",
          btnLang: "Lang",
        },
        Logo: {
          btnStartExperience: {
            loading: "Loading...",
            loaded: "Begin experience",
          },
        },
        Video: {
          btnSkip: "Skip",
        },
        Tips: {
          btnStartTravel: "Start Traveling",
          tipUrl: "images/intro-tips-en.png",
          tipArrow: "Use arrows to navigate",
          tipFingger: "Cultural relics experience from your fingertips",
        },
        MainScene: {
          btnBack: "Back",
          btnMore: "Cultural and Historical Knowldege",
          btnStop: "End of Travel",
        },
        Hotspot: {
          btnPicture: "Many appreciation",
          btnModel: "Fingertip relic",
        },
        Addition: {
          menu: {
            itemBack: "Back",
            item1: "Relics",
            item2: "New vs Old",
            item3: "Map",
          },
          Relics: {
            title: "Important Cultural Relics",
          },
          NewVsOld: {
            title: "",
            smriti: "Heritage of the Wuhou Shrine",
            description:
              "The Three Kingdoms culture constitutes a rare and unignorable cultural heritage in Chinese history. While it is but a fraction of a 5,000-year-old civilization, the era torn by the wars among charismatic history-making warlords and warriors suggests the allegiance, integrity, wisdom and valiance of a great people. In the Wuhou Shrine you can experience the very cultural essence and traditional heritage. A time-honored cultural relic more than 1,790 years old, the shrine has made itself a magnificent, awe-inspiring place well known to people since the entombment of Liu Beis’ remains.",
          },
          Map: {
            title: "The Map of the Three Kingdoms",
          },
        },
        End: {
          tipTitleUrl: "images/end-tips-title-en.png",
          tipContentUrl: "images/end-tips-content-en.png",
        },
      };
    (o["a"].config.productionTip = !1),
      (o["a"].prototype.$Bus = Hn),
      o["a"].use(zn["a"]);
    var Rn = new zn["a"]({
        locale: window.localStorage.getItem("wuhouci-lang") || "zh",
        messages: {
          zh: Nn,
          en: Un,
        },
      }),
      qn = new o["a"]({
        render: function (t) {
          return t($n);
        },
        i18n: Rn,
      }).$mount("#app");
    qn["$Bus"].$on("lang.change", function (t) {
      window.localStorage.setItem("wuhouci-lang", t),
        (Rn.locale = t),
        window.location.reload(),
        console.log("Language Changed:" + t);
    });
  },
  d235: function (t, e, n) {
    "use strict";
    var i = n("3783"),
      o = n.n(i);
    o.a;
  },
  e5f3: function (t, e, n) {},
  e606: function (t, e, n) {
    "use strict";
    var i = n("2888"),
      o = n.n(i);
    o.a;
  },
  e91a: function (t, e, n) {
    "use strict";
    var i = n("3fbc"),
      o = n.n(i);
    o.a;
  },
});
//# sourceMappingURL=app.fa5c72e2.js.map
