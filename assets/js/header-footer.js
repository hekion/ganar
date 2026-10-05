document.addEventListener('DOMContentLoaded', () => {
    // 1. グローバルヘッダー & サイドメニューの描画
    const headerElement = document.getElementById('global-header');
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="fixed top-0 left-0 w-full z-50 bg-[#050a14]/80 backdrop-blur-xl border-b border-[#00f0ff]/20 h-20 md:h-24 transition-all duration-300">
                <div class="max-w-[1700px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
                    <!-- ロゴ -->
                    <div class="h-9 md:h-11 transition-transform duration-300 hover:scale-105">
                        <a href="index.html" class="block h-full">
                            <img src="assets/images/logo/ganar.png" alt="GANAR" class="h-full w-auto object-contain">
                        </a>
                    </div>

                    <!-- サイバーハンバーガーボタン (PC・スマホ共通) -->
                    <button id="menu-btn" class="relative group flex items-center gap-3 bg-[#0a1428]/80 border border-[#00f0ff]/30 px-4 py-2.5 rounded-lg hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300" aria-label="Toggle Menu">
                        <span class="font-teko text-xl tracking-widest uppercase text-white group-hover:text-[#00f0ff] transition-colors">Menu</span>
                        <div class="w-6 flex flex-col items-end gap-1.5">
                            <span id="burger-line-1" class="block w-6 h-[2px] bg-[#00f0ff] transition-transform duration-300"></span>
                            <span id="burger-line-2" class="block w-4 h-[2px] bg-white group-hover:w-6 transition-all duration-300"></span>
                            <span id="burger-line-3" class="block w-6 h-[2px] bg-[#00f0ff] transition-transform duration-300"></span>
                        </div>
                    </button>
                </div>
            </header>

            <!-- 背景オーバーレイ -->
            <div id="overlay" class="fixed inset-0 bg-black/80 backdrop-blur-md z-[55] opacity-0 pointer-events-none transition-opacity duration-300"></div>

            <!-- サイドスライドメニュー -->
            <nav id="side-nav" class="fixed top-0 right-0 w-[320px] md:w-[420px] h-full z-[60] translate-x-full transition-transform duration-500 cubic-bezier(0.77, 0, 0.175, 1) flex flex-col justify-between p-8 md:p-12 overflow-y-auto">
                <div>
                    <!-- メニューヘッダー -->
                    <div class="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
                        <img src="assets/images/logo/ganar.png" alt="GANAR" class="h-8 w-auto">
                        <button id="close-btn" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all text-xl">✕</button>
                    </div>

                    <!-- メニューリスト -->
                    <ul class="space-y-6 font-teko text-3xl tracking-wider">
                        <li><a href="index.html" class="nav-link-item block text-white">HOME <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">ホーム</span></a></li>
                        <li><a href="news.html" class="nav-link-item block text-white">NEWS <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">ニュース</span></a></li>
                        <li><a href="about.html" class="nav-link-item block text-white">ABOUT <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">チームについて</span></a></li>
                        <li><a href="members.html" class="nav-link-item block text-white">MEMBERS <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">メンバー紹介</span></a></li>
                        <li><a href="fanclub.html" class="nav-link-item block text-white">FANCLUB <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">ファンクラブ</span></a></li>
                        <li><a href="recruit.html" class="nav-link-item block text-[#ffeb3b]">RECRUIT <span class="text-xs font-sans text-[#ffeb3b]/70 block tracking-widest font-normal">メンバー募集</span></a></li>
                        <li><a href="contact.html" class="nav-link-item block text-white">CONTACT <span class="text-xs font-sans text-gray-400 block tracking-widest font-normal">お問い合わせ</span></a></li>
                    </ul>
                </div>

                <!-- メニュー下部フッター情報 -->
                <div class="pt-8 border-t border-white/10 text-xs text-gray-400 font-sans">
                    <p class="mb-4">GANAR Official Web Site</p>
                    <div class="flex gap-4">
                        <a href="https://x.com/GANAR_games" target="_blank" class="text-gray-400 hover:text-[#00f0ff] transition-colors">X (Twitter)</a>
                        <a href="https://www.instagram.com/ganar_games" target="_blank" class="text-gray-400 hover:text-[#00f0ff] transition-colors">Instagram</a>
                        <a href="https://youtube.com/@ganar_esports" target="_blank" class="text-gray-400 hover:text-[#00f0ff] transition-colors">YouTube</a>
                    </div>
                </div>
            </nav>
        `;
    }

    // 2. グローバルフッターの描画
    const footerElement = document.getElementById('global-footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="bg-[#02050b] text-white py-16 px-6 border-t border-[#00f0ff]/20 relative overflow-hidden font-sans">
                <div class="max-w-[1200px] mx-auto flex flex-col items-center">
                    <!-- GANAR ロゴ -->
                    <div class="h-12 mb-10 transition-transform hover:scale-105">
                        <img src="assets/images/logo/ganar.png" alt="GANAR" class="h-full w-auto object-contain">
                    </div>

                    <!-- メインメニュー (ABOUT 〜 RECRUIT) -->
                    <nav class="mb-10">
                        <ul class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 font-teko text-2xl tracking-widest uppercase text-gray-200">
                            <li><a href="about.html" class="hover:text-[#00f0ff] transition-colors">ABOUT</a></li>
                            <li><a href="news.html" class="hover:text-[#00f0ff] transition-colors">NEWS</a></li>
                            <li><a href="members.html" class="hover:text-[#00f0ff] transition-colors">MEMBERS</a></li>
                            <li><a href="fanclub.html" class="hover:text-[#00f0ff] transition-colors">FANCLUB</a></li>
                            <li><a href="recruit.html" class="hover:text-[#ffeb3b] transition-colors">RECRUIT</a></li>
                        </ul>
                    </nav>

                    <!-- SNSアイコン -->
                    <div class="flex items-center gap-6 mb-12">
                        <a href="https://x.com/GANAR_games" target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00f0ff] hover:border-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/ganar_games" target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00f0ff] hover:border-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://youtube.com/@ganar_esports" target="_blank" rel="noopener noreferrer" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00f0ff] hover:border-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>

                    <!-- サブリンク（SNSアイコンの下に配置） -->
                    <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-medium text-gray-400 mb-10">
                        <a href="operation.html" class="hover:text-white transition-colors">運営情報</a>
                        <span class="text-gray-700">|</span>
                        <a href="term.html" class="hover:text-white transition-colors">利用規約</a>
                        <span class="text-gray-700">|</span>
                        <a href="policy.html" class="hover:text-white transition-colors">プライバシーポリシー</a>
                        <span class="text-gray-700">|</span>
                        <a href="contact.html" class="hover:text-white transition-colors">お問い合わせ</a>
                    </div>

                    <!-- 著作権表示（HEKIONロゴ） -->
                    <div class="pt-8 border-t border-white/10 flex items-center justify-center gap-3 text-gray-500 text-xs tracking-wider">
                        <span>©</span>
                        <a href="https://hekion.github.io/hekion/" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-105">
                            <img src="assets/images/logo/hekion.png" alt="HEKION" class="h-5 w-auto opacity-70 hover:opacity-100">
                        </a>
                        <span>All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        `;
    }

    // 3. サイドメニュー開閉イベントの制御
    setTimeout(() => {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const overlay = document.getElementById('overlay');
        const sideNav = document.getElementById('side-nav');

        function toggleMenu() {
            if (!sideNav || !overlay) return;
            const isOpen = !sideNav.classList.contains('translate-x-full');
            if (isOpen) {
                sideNav.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            } else {
                sideNav.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            }
        }

        if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);
    }, 50);
});
