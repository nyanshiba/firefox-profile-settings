// https://support.mozilla.org/bm/questions/965842

// enable userChrome
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Enabling Fission https://wiki.mozilla.org/Project_Fission
user_pref("fission.autostart", true);
user_pref("gfx.webrender.all", true);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1592293
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true); // default: false
user_pref("gfx.text.subpixel-position.force-disabled", true); // default: false

// change user agent
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0
// https://docs.microsoft.com/en-us/microsoft-edge/web-platform/user-agent-string
// https://support.mozilla.org/en-US/kb/how-reset-default-user-agent-firefox
// user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36");

// enable color management
// https://developer.mozilla.org/ja/docs/Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
user_pref("gfx.color_management.mode", 2);
user_pref("gfx.color_management.display_profile", "C:\\Windows\\System32\\spool\\drivers\\color\\sRGB Color Space Profile.icm");
//user_pref("gfx.color_management.display_profile", "C:\\Users\\sbn\\Pictures\\icc\\DCI-P3-D65.icc");
//user_pref("gfx.color_management.display_profile", "C:\\Users\\sbn\\Pictures\\icc\\DisplayP3Compat-v4.icc");
user_pref("gfx.color_management.enablev4", true);

// nvdec
// Firefox 82で修正？ https://bugzilla.mozilla.org/show_bug.cgi?id=1570046
// https://www.reddit.com/r/firefox/comments/dx5rml/is_there_any_way_to_stop_the_crash_guard_from/
user_pref("media.hardware-video-decoding.force-enabled", true); // defalut: false
user_pref("media.wmf.vp9.enabled", true); // default: false trueでは↓が3になってしまう
user_pref("gfx.crash-guard.status.wmfvpxvideo", 0); // クラッシュガードが無効化～はこれが3の場合

// DirectWrite
user_pref("layers.acceleration.disabled", false);            // default: false
user_pref("layers.acceleration.force-enabled", true);        // default: false
user_pref("gfx.direct2d.disabled", false);                   // default: false
user_pref("gfx.direct2d.force-enabled", true);               // default: false

user_pref("gfx.font_rendering.cleartype.always_use_for_content", true);    // default: false
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", -1);     // default: -1
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", -1);       // default: -1
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);        // default: -1
user_pref("gfx.font_rendering.directwrite.enabled", true);                 // default: true
user_pref("gfx.use_text_smoothing_setting", true);                         // default: false 

user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", -1);   // default: -1 0-100 文字の濃さ gammaと一緒に調整が必要
user_pref("gfx.font_rendering.cleartype_params.gamma", -1);   // default: -1 1000 ~ 3000 フォントによって効果がマチマチ
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 15);   // default: 15
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");   // default: Arial,Consolas,Courier New,Microsoft Sans Serif,Segoe UI,Tahoma,Trebuchet MS,Verdana
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);   // default: true
// WindowsのClearTypeの設定と重複するので、Firefoxでは弄らずそちらで調整するべき https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/cleartype-registry-settings
// \HKEY_CURRENT_USER\SOFTWARE\Microsoft\Avalon.Graphics\DISPLAY1

// picture-in-picture
// https://fossies.org/linux/www/firefox-84.0.2.source.tar.xz/firefox-84.0.2/toolkit/components/pictureinpicture/PictureInPicture.jsm
user_pref("media.videocontrols.picture-in-picture.allow-multiple", true); // multiple pip

// disable zooming with Ctrl+mouse wheel (for Logicool MX Master 3)
// https://support.mozilla.org/en-US/questions/1253302
user_pref("mousewheel.with_control.action", 1); // default: 3

// Windowsの設定に関わらず常にダークモードにする
user_pref("ui.systemUsesDarkTheme", 1);

// Disable ServiceWorker about:serviceworkersでunregisterしてから無効化
user_pref("dom.serviceWorkers.enabled", false);

// Firefox Options
// about:preferences#general
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
user_pref("browser.display.use_document_fonts", 1); // userContent.cssを優先する
user_pref("font.name.monospace.ja", "Consolas");
user_pref("font.name.sans-serif.ja", "BIZ UDPゴシック");
user_pref("font.name.serif.ja", "BIZ UDP明朝");
user_pref("general.autoScroll", false);
user_pref("general.smoothScroll", true);
user_pref("network.trr.mode", 5);

// about:preferences#containers
user_pref("privacy.userContext.enabled", true); // Enable Multi-Account Containers https://support.mozilla.org/ja/kb/containers
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

// about:preferences#home
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.startup.homepage", "about:blank");

// about:preferences#search
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");

// about:preferences#privacy
// https://hg.mozilla.org/mozilla-central/file/tip/browser/components/preferences/tests/browser_contentblocking.js
// CAT_PREF
user_pref("browser.contentblocking.category", "strict"); // default: (empty)
// STRICT_PREF
//user_pref("browser.contentblocking.features.strict", "tp,tpPrivate,cookieBehavior5,cookieBehaviorPBM5,cm,fp,stp,lvl2,rp,ocsp"); // default: (empty)
    /* TP_PREF
    user_pref("privacy.trackingprotection.enabled", true); // default: false
    // TP_PBM_PREF
    user_pref("privacy.trackingprotection.pbmode.enabled", true); // default: true
    // NCB_PREF
    // http://kb.mozillazine.org/Network.cookie.cookieBehavior
    // 0: all accept, 1: allow only first-party 2: all denyed, 3: third-party(previous visit) allowed, 4: Only reject trackers, 5: Reject (known) trackers and partition third-party storage.  1 or 2, 5 を同時に設定したいが、5を優先する
    // https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning
    // https://github.com/privacytools/privacytools.io/issues/1704#issuecomment-820931105 FPI(privacy.firstparty.isolate)では1が推奨されるが、dFPIに移行してdeprecatedなので5を使いましょう
    user_pref("network.cookie.cookieBehavior", 5); // default: 4
    // NCBP_PREF
    user_pref("network.cookie.cookieBehavior.pbmode", 5); // default: 5
    // FP_PREF
    user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // default: true
    // STP_PREF
    user_pref("privacy.trackingprotection.socialtracking.enabled", true); // default: false
    // CM_PREF
    user_pref("privacy.trackingprotection.cryptomining.enabled", true); // default: true
    // LEVEL2_PREF
    user_pref("privacy.annotate_channels.strict_list.enabled", true); // default: false
    // REFERRER_PREF
    user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); // default: false
    // OCSP_PREF
    user_pref("privacy.partition.network_state.ocsp_cache", true); // default: false
    // PREF_TEST_NOTIFICATIONS
    user_pref("browser.safebrowsing.test-notifications.enabled", ""); // default: (empty)
    */
    // FPI_PREF
    // https://github.com/arkenfox/user.js [WARNING] Replaced with network partitioning (FF85+) and TCP (2701),
    user_pref("privacy.firstparty.isolate", false); // default: false
// https://github.com/arkenfox/user.js/issues/1051#issuecomment-768656662 move from FPI to dFPI · Issue #1051
user_pref("privacy.partition.network_state", true); // default: true

user_pref("privacy.donottrackheader.enabled", false); // 既知のトラッカーをブロックする設定時のみ 逆に追跡されるのを避けて完全に無効化したい人はChromeを使うべし

user_pref("signon.autofillForms", false); // default: true ログイン情報とパスワードを自動入力しない

// 履歴を消去
user_pref("privacy.cpd.cache", false); // キャッシュ(タブ）
user_pref("privacy.cpd.offlineApps", true); // ウェブサイトのオフライン作業用データ

user_pref("privacy.history.custom", true); // 記憶させる履歴を詳細設定する
user_pref("places.history.enabled", false); // 表示したページとファイルのダウンロード履歴を残す
user_pref("browser.formfill.enable", true); // 検索やフォームの入力履歴を記憶させる(clearOnShutdownで消す)

user_pref("privacy.sanitize.sanitizeOnShutdown", true); // Firefoxの終了時に履歴を消去する
user_pref("privacy.clearOnShutdown.cache", true); // キャッシュ(タブではない)
user_pref("privacy.clearOnShutdown.cookies", false); // Cookie(ログイン状態)
user_pref("privacy.clearOnShutdown.downloads", true); // ダウンロードの履歴
user_pref("privacy.clearOnShutdown.formdata", true); // 検索やフォームの入力履歴
user_pref("privacy.clearOnShutdown.history", false); // 表示したページと(タブ)
user_pref("privacy.clearOnShutdown.offlineApps", false); // ウェブサイトのオフライン作業用データ
// user_pref("privacy.clearOnShutdown.openWindows", false); // 開いているウィンドウ？効いてない
user_pref("privacy.clearOnShutdown.sessions", true); // セッション(ログイン状態はCookie)
user_pref("privacy.clearOnShutdown.siteSettings", false); // サイトの設定

user_pref("media.autoplay.default", 5);
// https://developer.mozilla.org/ja/docs/Web/Media/Autoplay_guide
user_pref("media.autoplay.allow-extension-background-pages", false); // default: false
user_pref("media.autoplay.block-webaudio", true); // default: false
user_pref("media.autoplay.block-event.enabled", true); // default: false
//user_pref("media.block-autoplay-until-in-foreground", true); // default: true
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);

user_pref("datareporting.healthreport.uploadEnabled", true); // default: true
user_pref("app.shield.optoutstudies.enabled", true); // default: true

// https://github.com/milgradesec/firefox-settings#readme
// Disable OCSP checks
user_pref("security.OCSP.enabled", 0); // default: 1
user_pref("security.OCSP.require", false); // default: false

// Enforce CRLite revocation checks
// https://blog.mozilla.org/security/2020/01/09/crlite-part-1-all-web-pki-revocations-compressed/
user_pref("security.pki.crlite_mode", 2); // default: 1

// about:preferences#sync
user_pref("services.sync.declinedEngines", "addons,history,forms");

// Customize Firefox
user_pref("browser.theme.dark-toolbar-theme", true);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"personal-bookmarks\",\"downloads-button\",\"fxa-toolbar-menu-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"alltabs-button\",\"tabbrowser-tabs\"],\"PersonalToolbar\":[]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"profiler-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":17,\"newElementCount\":3}");
