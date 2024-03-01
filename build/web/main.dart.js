// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const back_button = flutter_sdk.src__material__back_button;
  const basic = flutter_sdk.src__widgets__basic;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors$ = flutter_sdk.src__painting__colors;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const text_button = flutter_sdk.src__material__text_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_value]: 700,
        [FontWeight_index]: 6
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294962158
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294954450
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293892762
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293227379
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293874512
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294198070
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293212469
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292030255
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4291176488
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290190364
      });
    },
    get C5() {
      return C[5] = dart.constMap(core.int, ui.Color, [50, C[6] || CT.C6, 100, C[7] || CT.C7, 200, C[8] || CT.C8, 300, C[9] || CT.C9, 400, C[10] || CT.C10, 500, C[11] || CT.C11, 600, C[12] || CT.C12, 700, C[13] || CT.C13, 800, C[14] || CT.C14, 900, C[15] || CT.C15]);
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4294198070,
        [ColorSwatch__swatch]: C[5] || CT.C5
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[3] || CT.C3,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[4] || CT.C4,
        [TextStyle_inherit]: true
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[2] || CT.C2,
        [Text_textSpan]: null,
        [Text_data]: "Sign In"
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(17).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({title: "Log in Page", theme: theme_data.ThemeData.new({colorSchemeSeed: colors.Colors.indigo, useMaterial3: true, brightness: ui.Brightness.light}), darkTheme: theme_data.ThemeData.new({colorSchemeSeed: colors.Colors.blue, useMaterial3: true, brightness: ui.Brightness.dark}), debugShowCheckedModeBanner: false});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var title$ = dart.privateName(main, "MyHomePage.title");
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let title = opts && 'title' in opts ? opts.title : null;
      return new main.MyHomePage.new({key: key, title: title});
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.addTypeCaches(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(framework.State$(main.MyHomePage), [])
  }));
  dart.setLibraryUri(main.MyHomePage, I[0]);
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_value = dart.privateName(ui, "FontWeight.value");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var Color_value = dart.privateName(ui, "Color.value");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title), leading: new back_button.BackButton.new({color: colors.Colors.red})}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([C[1] || CT.C1, new basic.SizedBox.new({height: 20}), new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({filled: true, fillColor: colors.Colors.white})}), new basic.SizedBox.new({height: 20}), new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({filled: true, fillColor: colors.Colors.white})}), new basic.SizedBox.new({height: 20}), new text_button.TextButton.new({style: text_button.TextButton.styleFrom({backgroundColor: colors.Colors.red}), onPressed: null, child: new text.Text.new("Log In", {style: new text_style.TextStyle.new({color: colors.Colors.white})})}), new basic.SizedBox.new({height: 20}), new text.Text.new("OR", {style: new text_style.TextStyle.new({color: colors.Colors.white})}), new basic.SizedBox.new({height: 20}), new text_button.TextButton.new({style: text_button.TextButton.styleFrom({backgroundColor: colors.Colors.indigo}), onPressed: null, child: new text.Text.new("Facebook Login", {style: new text_style.TextStyle.new({color: colors.Colors.white})})})])})});
    }
    static ['_#new#tearOff']() {
      return new main._MyHomePageState.new();
    }
  };
  (main._MyHomePageState.new = function() {
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.addTypeCaches(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, I[0]);
  main.main = function main$0() {
    binding.runApp(C[16] || CT.C16);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;UC7C4B;AACxB,YAAO,iCACE,sBACA,2CACmB,oCACV,kBACS,kCAEd,2CACe,kCACV,kBACS,kDAEG;IAEhC;;;QAlBmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;;IAyBX;;;;;;;;;;;;AAGsB;IAAkB;;;QAL7B;QAAmB;;AAArC,mDAAkB,GAAG;;EAAuB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWxB;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAO,6BACV,uCACO,6BAGZ,gCACO,uCAQH,gCAAiB,MACrB,0CACc,iDACF,iBACU,yBAElB,gCAAiB,MACrB,0CACc,iDACF,iBACU,yBAGtB,gCAAiB,MACjB,uCACoB,mDAAkC,gCACzC,aACJ,kBACL,kBACO,qCACS,2BAIpB,gCAAiB,MACjB,kBACE,cACO,qCACS,yBAGd,gCAAiB,MACrB,uCACoB,mDAAkC,mCACzC,aACJ,kBACL,0BACO,qCACS;IAO9B;;;;;;;;EACF;;;;;;;;;AArGuB,IAArB;EACF;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
