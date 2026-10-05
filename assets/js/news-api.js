const GAS_URL = "https://script.google.com/macros/s/AKfycbyVJp-zqYfROpOGgh9Oqmvtx8FxG78fRm07eWfxeHpQVgSrHGxDADtDVlXqb_6nvplPRw/exec";

function getStableDriveUrl(url) {
    if (!url) return 'assets/images/logo/ganar.png';
    const idMatch = url.match(/[-\w]{25,}(?!.*[-\w]{25,})/);
    if (idMatch) {
        return `https://drive.google.com/thumbnail?id=${idMatch[0]}&sz=s1000`;
    }
    return url;
}

async function fetchNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    try {
        const response = await fetch(GAS_URL);
        let data = await response.json();
        data.sort((a, b) => Number(b.id) - Number(a.id));
        const latestNews = data.slice(0, 3);
        
        container.innerHTML = '';
        latestNews.forEach(item => {
            const date = new Date(item.date);
            const dateString = isNaN(date) ? item.date : `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
            const card = document.createElement('a');
            card.href = `news-detail.html?id=${item.id}`;
            card.className = "cyber-card group rounded-xl overflow-hidden flex flex-col";
            const imageUrl = getStableDriveUrl(item.imageUrl);

            card.innerHTML = `
                <div class="aspect-video w-full bg-black/50 overflow-hidden relative border-b border-white/5">
                    <img src="${imageUrl}" alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='assets/images/logo/ganar.png'" referrerpolicy="no-referrer">
                    <span class="absolute top-3 left-3 bg-[#050a14]/90 backdrop-blur-md text-[#00f0ff] border border-[#00f0ff]/40 text-[11px] font-bold px-3 py-1 rounded font-chakra tracking-wider">${item.category}</span>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <span class="text-xs font-bold tracking-widest text-gray-400 font-chakra block mb-2">${dateString}</span>
                        <h3 class="text-lg md:text-xl font-bold leading-snug text-white group-hover:text-[#00f0ff] transition-colors line-clamp-2">${item.title}</h3>
                    </div>
                    <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-end font-teko text-xl text-[#00f0ff] tracking-widest uppercase">
                        Read More <span class="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p class="text-gray-400 font-sans text-center col-span-full py-10">ニュースの読み込みに失敗しました。</p>';
    }
}

document.addEventListener('DOMContentLoaded', fetchNews);
