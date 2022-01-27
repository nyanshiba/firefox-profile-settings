// https://support.mozilla.org/bm/questions/965842

// enable userChrome
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// https://www.reddit.com/r/FirefoxCSS/comments/gk93p2/help_in_creating_a_transparent_userchromecss/
user_pref("gfx.webrender.all", false);

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
//user_pref("browser.contentblocking.category", "strict");
user_pref("browser.contentblocking.category", "custom");
user_pref("network.cookie.cookieBehavior", 2);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
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
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("signon.autofillForms", false);

// about:preferences#sync
user_pref("services.sync.declinedEngines", "addons,history,forms");

// Customize Firefox
user_pref("browser.theme.dark-toolbar-theme", true);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"personal-bookmarks\",\"downloads-button\",\"fxa-toolbar-menu-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"alltabs-button\",\"tabbrowser-tabs\"],\"PersonalToolbar\":[]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"profiler-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":17,\"newElementCount\":3}");
