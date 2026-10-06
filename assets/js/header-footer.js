document.addEventListener('DOMContentLoaded', () => {
    // 1. グローバルヘッダー & サイドメニュー
    const headerElement = document.getElementById('global-header');
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="fixed top-0 left-0 w-full z-50 bg-[#070a12]/90 backdrop-blur-md border-b border-white/5 h-20 md:h-24 transition-all duration-300">
                <div class="relative w-full max-w-[1600px] mx-auto h-full px-6 flex items-center justify-center">
                    
                    <!-- ヘッダー中央ロゴ -->
                    <a href="index.html" class="block h-8 md:h-10 transition-opacity hover:opacity-80">
                        <img src="assets/images/logo/ganar.png" alt="GANAR" class="h-full w-auto object-contain">
                    </a>

                    <!-- 右上 トグルボタン（2本線 ⇔ ✕印） -->
                    <button id="menu-toggle-btn" class="zeta-menu-trigger absolute right-6 top-1/2 -translate-y-1/2" aria-label="Toggle Navigation">
                        <div class="zeta-icon-box">
                            <span class="zeta-line zeta-line-1"></span>
                            <span class="zeta-line zeta-line-2"></span>
                        </div>
                    </button>
                </div>
            </header>

            <!-- ZETA DIVISION モチーフ フルスクリーンサイドメニュー -->
            <div id="zeta-side-nav">
                <!-- 1. メニュー背面 透かしg-markロゴ -->
                <img src="assets/images/logo/g-mark.png" alt="" class="zeta-menu-bg-mark">

                <!-- 2. 左側ネオン水色ライン -->
                <div class="zeta-menu-line"></div>

                <!-- 3. 右側縦書きスローガン（位置をHOMEと同じ高さのTopへ） -->
                <div class="zeta-menu-slogan">HAVE FUN AND WIN</div>

                <!-- メニューコンテンツ保持エリア -->
                <div class="zeta-nav-content w-full max-w-[1000px]">

                    <!-- 【中域エリア】メニュー項目 -->
                    <div class="w-full pt-4">
                        <ul class="space-y-7 md:space-y-8">
                            <li class="zeta-nav-item">
                                <a href="index.html" class="zeta-link">
                                    <span>HOME</span>
                                    <span class="zeta-link-sub">ホーム</span>
                                </a>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="about.html" class="zeta-link">
                                    <span>ABOUT</span>
                                    <span class="zeta-link-sub">チームについて</span>
                                </a>
                            </li>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="news.html" class="zeta-link">
                                    <span>NEWS</span>
                                    <span class="zeta-link-sub">ニュース</span>
                                </a>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="members.html" class="zeta-link">
                                    <span>MEMBERS</span>
                                    <span class="zeta-link-sub">メンバー</span>
                                </a>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="fanclub.html" class="zeta-link">
                                    <span>FANCLUB</span>
                                    <span class="zeta-link-sub">ファンクラブ</span>
                                </a>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="recruit.html" class="zeta-link">
                                    <span>RECRUIT</span>
                                    <span class="zeta-link-sub">メンバー募集</span>
                                </a>
                            </li>
                            <li class="zeta-nav-item">
                                <a href="contact.html" class="zeta-link">
                                    <span>CONTACT</span>
                                    <span class="zeta-link-sub">お問い合わせ</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- 【水色SVGアイコン】 -->
                    <div class="w-full flex items-center gap-6 pt-6 md:pt-8 mt-4 border-t border-white/10">
                        <a href="https://x.com/GANAR_games" target="_blank" rel="noopener noreferrer" class="text-[#00f0ff] hover:opacity-80 transition-opacity" aria-label="X">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/ganar_games" target="_blank" rel="noopener noreferrer" class="text-[#00f0ff] hover:opacity-80 transition-opacity" aria-label="Instagram">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://youtube.com/@ganar_esports" target="_blank" rel="noopener noreferrer" class="text-[#00f0ff] hover:opacity-80 transition-opacity" aria-label="YouTube">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>

                    <!-- 【下部余白領域】画面下部 約20%の余白を確保 -->
                    <div class="w-full h-20 md:h-28 shrink-0"></div>
                </div>
            </div>
        `;
    }

    // 2. グローバルフッター
    const footerElement = document.getElementById('global-footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="bg-[#04060c] text-white py-16 px-6 border-t border-white/5 font-sans">
                <div class="max-w-[1200px] mx-auto flex flex-col items-center">
                    <a href="index.html" class="h-10 mb-10 block transition-opacity hover:opacity-80">
                        <img src="assets/images/logo/ganar.png" alt="GANAR" class="h-full w-auto object-contain">
                    </a>

                    <nav class="mb-10">
                        <ul class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 font-en font-bold text-sm tracking-widest uppercase text-gray-300">
                            <li><a href="about.html" class="hover:text-[#00f0ff] transition-colors">ABOUT</a></li>
                            <li><a href="news.html" class="hover:text-[#00f0ff] transition-colors">NEWS</a></li>
                            <li><a href="members.html" class="hover:text-[#00f0ff] transition-colors">MEMBERS</a></li>
                            <li><a href="fanclub.html" class="hover:text-[#00f0ff] transition-colors">FANCLUB</a></li>
                            <li><a href="recruit.html" class="hover:text-[#00f0ff] transition-colors">RECRUIT</a></li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-6 mb-12">
                        <a href="https://x.com/GANAR_games" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/ganar_games" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://youtube.com/@ganar_esports" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>

                    <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-gray-500 mb-10">
                        <a href="operation.html" class="hover:text-white transition-colors">運営情報</a>
                        <span>|</span>
                        <a href="term.html" class="hover:text-white transition-colors">利用規約</a>
                        <span>|</span>
                        <a href="policy.html" class="hover:text-white transition-colors">プライバシーポリシー</a>
                        <span>|</span>
                        <a href="contact.html" class="hover:text-white transition-colors">お問い合わせ</a>
                    </div>

                    <div class="text-center text-gray-600 text-xs tracking-wider font-en">
                        © 2026 GANAR eSports by HEKION All Rights Reserved.
                    </div>
                </div>
            </footer>
        `;
    }

    // 3. トグル切替ロジック
    setTimeout(() => {
        const toggleBtn = document.getElementById('menu-toggle-btn');
        const sideNav = document.getElementById('zeta-side-nav');

        function toggleMenu() {
            if (!sideNav || !toggleBtn) return;
            const isOpen = sideNav.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        function openMenu() {
            if (!sideNav || !toggleBtn) return;
            sideNav.classList.add('active');
            toggleBtn.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            if (!sideNav || !toggleBtn) return;
            sideNav.classList.remove('active');
            toggleBtn.classList.remove('is-active');
            document.body.style.overflow = '';
        }

        if (toggleBtn) toggleBtn.addEventListener('click', toggleMenu);
    }, 50);
});
