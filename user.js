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

// WindowsのClearTypeの設定と重複するので、Firefoxでは弄らずそちらで調整するべき
// https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/cleartype-registry-settings
// \HKEY_CURRENT_USER\SOFTWARE\Microsoft\Avalon.Graphics\DISPLAY1
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);     // default: -1
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 200);   // default: -1 0-100 文字の濃さ gammaと一緒に調整が必要
user_pref("gfx.font_rendering.cleartype_params.gamma", 2200);   // default: -1 1000 ~ 3000 フォントによって効果がマチマチ
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);       // default: -1

user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);

user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);   // default: true

// picture-in-picture
// https://fossies.org/linux/www/firefox-84.0.2.source.tar.xz/firefox-84.0.2/toolkit/components/pictureinpicture/PictureInPicture.jsm
// 複数のPiP
user_pref("media.videocontrols.picture-in-picture.allow-multiple", true); // default: true
// PiPのミュートボタン
user_pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", true); // default: false

// フルスクリーン時のアニメーションを無効化
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default: 200 200	
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default: 200 200
user_pref("full-screen-api.warning.timeout", 0); // default: 3000

// disable zooming with Ctrl+mouse wheel (for Logicool MX Master 3)
// https://support.mozilla.org/en-US/questions/1253302
user_pref("mousewheel.with_control.action", 1); // default: 3

// Windowsの設定に関わらず常にダークモードにする
user_pref("ui.systemUsesDarkTheme", 1);
// DevToolsもダークモードにする
user_pref("devtools.theme", "dark");

// DevToolsでCanIUse
user_pref("devtools.inspector.compatibility.enabled", true); // default: false

// ServiceWorkerはTwitter生活に必要 about:serviceworkersで確認
user_pref("dom.serviceWorkers.enabled", true); // default: true
// https://github.com/arkenfox/user.js 2710: enable state partitioning of service workers [FF96+]
// https://bugzilla.mozilla.org/show_bug.cgi?id=1731999
user_pref("privacy.partition.serviceWorkers", true); // default: false

// https://github.com/milgradesec/firefox-settings#readme
// Disable weak ciphersuites
// https://clienttest.ssllabs.com/ssltest/viewMyClient.html
//security.ssl3.deprecated.rsa_des_ede3_sha, true
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false); // default: false
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false); // default: false
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false); // default: true
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false); // default: true
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false); // default: true
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false); // default: true
user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // default: true
user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // default: true
user_pref("security.ssl3.rsa_aes_128_sha", false); // default: true
//user_pref("security.ssl3.rsa_aes_256_sha", true); // default: true しばしば見られないサイトがあるので有効のまま

// Enable Encrypted Client Hello (ECH/ESNI) & Type65 RR
// https://blog.mozilla.org/security/2021/01/07/encrypted-client-hello-the-future-of-esni-in-firefox/
user_pref("network.dns.echconfig.enabled", true); // default: false
user_pref("network.dns.http3_echconfig.enabled", true); // default: false
user_pref("network.dns.use_https_rr_as_altsvc", true); // default: true
//user_pref("network.http.http3.support_version1", true); // default: true
user_pref("network.http.altsvc.enabled", true); // default: true
//user_pref("network.http.altsvc.oe", false); // default: false
// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l10609
user_pref("network.dns.force_waiting_https_rr", true); // default: false
user_pref("network.dns.use_https_rr_for_speculative_connection", true); // default: false

// HTTP/3をデフォルトにしてRTTの影響を少しでも減らしつつ、HTTP/2等との互換性を保つ？設定
// https://kb.mozillazine.org/Network.http.version
user_pref("network.http.proxy.version", "3"); // default: 1.1
// Chromium同様に https://cloudflare-quic.com/ への初回接続がHTTP/3になっていれば動作している
user_pref("network.http.version", "3"); // default: 1.1
// 現状"2"でHTTP/2をデフォルトにした方が速い場合も多いので、早めにフォールバックさせる
// https://hg.mozilla.org/releases/mozilla-release/rev/b3b6307b6f157d436b4bb204f645e45f4bb38499
user_pref("network.http.http3.backup_timer_delay", 10) // default: 100
user_pref("network.dns.httpssvc.http3_fast_fallback_timeout", 5) // default: 50
//user_pref("network.http.http3.parallel_fallback_conn_limit", 32) // default: 32

//user_pref("security.tls.version.fallback-limit", 4) // default: 4
//user_pref("security.tls.version.max", 4) // default: 4
// https://github.com/mozilla/policy-templates/issues/541#issuecomment-927193462
//user_pref("security.tls.version.min", 3) // default: 3 無視される
user_pref("security.tls.enable_post_handshake_auth", true) // default: false


// Disable Javascript on PDF files
user_pref("pdfjs.enableScripting", false); // default: true

// FirefoxのPDFビューワ(PDF.js)でPDFを横スクロール表示
// https://qiita.com/maechi/items/d6bbac331a9dd6e6a2de#pdfjspdfjs-22228の修正
// https://github.com/mozilla/pdf.js/blob/master/extensions/chromium/preferences_schema.json
user_pref("pdfjs.scrollModeOnLoad", 1); // default: -1
user_pref("pdfjs.spreadModeOnLoad", 1); // default: -1
user_pref("pdfjs.defaultZoomValue", "page-actual"); // default: ""
user_pref("pdfjs.disablefontface", true); // default: false
user_pref("pdfjs.textLayerMode", 2); // default: 1
user_pref("pdfjs.externalLinkTarget", 2); // default: 0

// open in new tab when use search box Ctrl - Kをデフォルトにする代わり
// Alt - Enterで新規タブを開けばよい
// https://support.mozilla.org/ja/questions/1308485
user_pref("browser.urlbar.openintab", false); // default: false
user_pref("browser.search.openintab", false); // default: false

// Firefox Options
// about:preferences#general
// タブをCtrl - Shift - Tabで切り替えられない不具合の原因
user_pref("browser.ctrlTab.recentlyUsedOrder", false); // default: undefined
user_pref("browser.ctrlTab.sortByRecentlyUsed", false); // default: undefined

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
user_pref("browser.search.widget.inNavBar", false);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

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

// https://github.com/arkenfox/user.js /* 2803: set third-party cookies to session-only
user_pref("network.cookie.thirdparty.sessionOnly", true); // default: false

// Annotate trackers using the strict list. If set to false, the basic list will be used instead.
user_pref("privacy.annotate_channels.strict_list.enabled", true); // default: @IS_EARLY_BETA_OR_EARLIER@

// Storage Access APIは自動で行わずプロンプトを起動(調査) https://developer.mozilla.org/ja/docs/Web/API/Document/requestStorageAccess
user_pref("dom.storage_access.auto_grants", false); // default: true
//user_pref("dom.storage_access.enabled", true); // default: true

// TCP, Total Cookie Protection (cookie jar)
// https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/
// https://hg.mozilla.org/mozilla-central/rev/269b4d7154ecb808f710ff0a2cc625be41242bd1
// https://hg.mozilla.org/mozilla-central/file/tip/browser/components/BrowserGlue.jsm#l1771
user_pref("privacy.restrict3rdpartystorage.rollout.preferences.TCPToggleInStandard", true); // default: false
user_pref("privacy.restrict3rdpartystorage.rollout.enabledByDefault", true); // default: false
user_pref("browser.privacySegmentation.enabled", true); // default: false
user_pref("browser.privacySegmentation.preferences.show", true); // default: false

// https://hacks.mozilla.org/2020/08/changes-to-samesite-cookie-behavior/
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
// SameSite=Lax by default
user_pref("network.cookie.sameSite.laxByDefault", true); // default: @IS_EARLY_BETA_OR_EARLIER@
// SameSite=None; Secure
user_pref("network.cookie.sameSite.noneRequiresSecure", true); // default: @IS_EARLY_BETA_OR_EARLIER@
// Schemeful Same-Site
user_pref("network.cookie.sameSite.schemeful", true); // default: @IS_EARLY_BETA_OR_EARLIER@

// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/all.js#l1900
//user_pref("network.cookie.maxNumber", 3000); // default: 3000
// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l11385
//user_pref("privacy.documentCookies.maxage", 0); // default: 0

// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l9786
user_pref("network.cookie.lifetimePolicy", 0); // default: 0, 2: as sessionOnly

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

// アドレスバー
user_pref("browser.urlbar.autoFill", false);
user_pref("keyword.enabled", false);
// https://github.com/arkenfox/user.js
 /*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
 user_pref("browser.urlbar.trimURLs", false); // default: true

user_pref("browser.fixup.alternate.enabled", false); // default: true
user_pref("browser.fixup.alternate.prefix", ""); // default: www.
user_pref("browser.fixup.alternate.protocol", ""); // default: https
user_pref("browser.fixup.alternate.suffix", ""); // default: .com

user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.searches", false);
// アドレスバーに広告を表示しない
user_pref("browser.urlbar.suggest.topsites", true);
user_pref("browser.urlbar.quicksuggest.sponsoredIndex", -1);
user_pref("browser.urlbar.sponsoredTopSites", false);
// アドレスバーのURLコピー時にURLデコードする
user_pref("browser.urlbar.decodeURLsOnCopy", true); // default: false

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

// HTTPS-Only Mode
user_pref("dom.security.https_only_mode", true); // default: false
user_pref("dom.security.https_only_mode_pbm", true); // default: false
// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l3336
user_pref("dom.security.https_only_fire_http_request_background_timer_ms", 1000); // default: 3000
// https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l3387
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true); // default: false
// Mixed Contentを拒否・httpsに書き換えを試みる
user_pref("dom.block_download_insecure", true); // default: true
user_pref("security.mixed_content.block_active_content", true); // default: true
user_pref("security.mixed_content.block_display_content", true); // default: false
user_pref("security.mixed_content.block_object_subrequest", true); // default: false
user_pref("security.mixed_content.upgrade_display_content", true); // default: false
// HTTPS-First Mode https://blog.mozilla.org/security/2021/08/10/firefox-91-introduces-https-by-default-in-private-browsing/
user_pref("dom.security.https_first", true); // default: false
user_pref("dom.security.https_first_pbm", true); // default: true 

// about:preferences#sync
user_pref("services.sync.declinedEngines", "addons,history,forms");

// Customize Firefox
user_pref("browser.theme.dark-toolbar-theme", true);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"urlbar-container\",\"personal-bookmarks\",\"downloads-button\",\"fxa-toolbar-menu-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"alltabs-button\",\"tabbrowser-tabs\"],\"PersonalToolbar\":[]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"profiler-button\"],\"dirtyAreaCache\":[\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\"],\"currentVersion\":17,\"newElementCount\":3}");
