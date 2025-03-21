// 다국어 지원을 위한 번역 데이터 객체
const translations = {
    ja: {
        menu: {
            title: "ランチメニュー",
            main: "メインメニュー",
            items: {
                friedChicken: "フライドチキン",
                yangnyeomChicken: "ヤンニョムチキン",
                maneulChicken: "マヌルチキン",
                ganjangChicken: "カンジャンチキン",
                paDak: "パダッ",
                sujeDonkkas: "スジェドンカス",
                sujeCheeseDonkkas: "スジェチーズドンカス",
                sagolJamppong: "サゴルチャンポン",
                sagolJamppongbap: "サゴルチャンポン定食",
                jeyukDeopBap: "テユッドッパプ",
                ojingeoDeopBap: "オジンオドッパプ",
                bulgogi: "プルコギ",
                sogogiGukbap: "ソゴギクッパプ",
                sundaeGukbap: "スンデクッパプ",
                ppyeoHaejangguk: "ピョヘジャンクッ",
                kimchiJjigae: "サムギョプサルキムチチゲ"
            },
            descriptions: {
                friedChicken: "チリソース付きの韓国式フライドチキン",
                yangnyeomChicken: "チリソースで味付けした韓国式フライドチキン",
                maneulChicken: "ニンニクソースで味付けした韓国式フライドチキン",
                ganjangChicken: "醤油ソースで味付けした韓国式フライドチキン",
                paDak: "千切りネギを添えた韓国式フライドチキン",
                sujeDonkkas: "ライス、野菜、スイートチリディップ付きの韓国式手作りポークカツレツ",
                sujeCheeseDonkkas: "ライス、野菜、スイートチリディップ付きのチーズ入り韓国式手作りポークカツレツ",
                sagolJamppong: "シーフード、豚肉、新鮮な野菜入りの辛い麺料理",
                sagolJamppongbap: "ライス付きのシーフード、豚肉、新鮮な野菜入りの辛いスープ",
                jeyukDeopBap: "ライス付きの辛味付け豚肉と新鮮な野菜の炒め物",
                ojingeoDeopBap: "ライス付きの辛味付けイカと新鮮な野菜の炒め物",
                bulgogi: "ライス付きの特製韓国醤油ソースで味付けした牛肉と新鮮な野菜の炒め物",
                sogogiGukbap: "ライス付きの辛い牛肉スープ",
                sundaeGukbap: "ライスとチリスパイス付きのスンデ（豚の腸に様々な具材を詰めて蒸した韓国式ソーセージ）入りスープ",
                ppyeoHaejangguk: "ライス付きの豚バックボーン入り辛いスープ",
                kimchiJjigae: "ライス付きの発酵キムチと豚肉入り辛い鍋料理"
            },
            allergens: "アレルギー情報：(1) 小麦、(2) 甲殻類、(3) 卵、(4) 魚、(5) ピーナッツ、(6) 大豆、(8) ナッツ類、(11) ごま、(14) 軟体動物",
            note: "ファーザーズでは、丁寧に作られた骨スープのみを使用しています。"
        }
    },
    zh: {
        menu: {
            title: "午餐菜单",
            main: "主菜",
            items: {
                friedChicken: "炸鸡",
                yangnyeomChicken: "韩式辣酱炸鸡",
                maneulChicken: "蒜香炸鸡",
                ganjangChicken: "酱油炸鸡",
                paDak: "葱丝炸鸡",
                sujeDonkkas: "手工炸猪排",
                sujeCheeseDonkkas: "手工芝士炸猪排",
                sagolJamppong: "骨汤辣海鲜面",
                sagolJamppongbap: "骨汤辣海鲜饭",
                jeyukDeopBap: "辣炒五花肉盖饭",
                ojingeoDeopBap: "辣炒鱿鱼盖饭",
                bulgogi: "韩式烤牛肉",
                sogogiGukbap: "牛肉汤饭",
                sundaeGukbap: "血肠汤饭",
                ppyeoHaejangguk: "猪骨解酒汤",
                kimchiJjigae: "五花肉泡菜汤"
            },
            descriptions: {
                friedChicken: "配辣酱的韩式炸鸡",
                yangnyeomChicken: "裹辣酱的韩式炸鸡",
                maneulChicken: "裹蒜香酱的韩式炸鸡",
                ganjangChicken: "裹酱油的韩式炸鸡",
                paDak: "配葱丝的韩式炸鸡",
                sujeDonkkas: "配米饭、蔬菜和甜辣酱的韩式手工炸猪排",
                sujeCheeseDonkkas: "配米饭、蔬菜和甜辣酱的韩式手工芝士炸猪排",
                sagolJamppong: "海鲜、猪肉丝和新鲜蔬菜的辣面条汤",
                sagolJamppongbap: "配米饭的海鲜、猪肉丝和新鲜蔬菜的辣汤",
                jeyukDeopBap: "配米饭的辣炒猪肉和新鲜蔬菜",
                ojingeoDeopBap: "配米饭的辣炒鱿鱼和新鲜蔬菜",
                bulgogi: "配米饭的特制韩式酱油腌制牛肉和新鲜蔬菜",
                sogogiGukbap: "配米饭的辣牛肉汤",
                sundaeGukbap: "配米饭和辣椒粉的血肠（韩式猪肠灌制多种配料蒸制而成的香肠）汤",
                ppyeoHaejangguk: "配米饭的辣猪骨汤",
                kimchiJjigae: "配米饭的发酵泡菜和猪肉辣汤"
            },
            allergens: "过敏原信息：(1) 小麦、(2) 甲壳类、(3) 鸡蛋、(4) 鱼类、(5) 花生、(6) 大豆、(8) 坚果、(11) 芝麻、(14) 软体动物",
            note: "Fathers餐厅只使用精心熬制的骨汤。"
        }
    },
    ko: {
        menu: {
            title: "점심 메뉴",
            main: "메인 메뉴",
            items: {
                friedChicken: "후라이드 치킨",
                yangnyeomChicken: "양념 치킨",
                maneulChicken: "마늘 치킨",
                ganjangChicken: "간장 치킨",
                paDak: "파닭",
                sujeDonkkas: "수제 돈까스",
                sujeCheeseDonkkas: "수제 치즈 돈까스",
                sagolJamppong: "사골 짬뽕",
                sagolJamppongbap: "사골 짬뽕밥",
                jeyukDeopBap: "제육덮밥",
                ojingeoDeopBap: "오징어덮밥",
                bulgogi: "불고기",
                sogogiGukbap: "소고기국밥",
                sundaeGukbap: "순대국밥",
                ppyeoHaejangguk: "뼈해장국",
                kimchiJjigae: "삼겹살 김치찌개"
            },
            descriptions: {
                friedChicken: "치킨 소스가 곁들여진 한국식 후라이드 치킨",
                yangnyeomChicken: "매콤한 양념 소스를 입힌 한국식 후라이드 치킨",
                maneulChicken: "마늘 소스를 입힌 한국식 후라이드 치킨",
                ganjangChicken: "달콤한 간장 소스를 입힌 한국식 후라이드 치킨",
                paDak: "파채가 곁들여진 한국식 후라이드 치킨",
                sujeDonkkas: "밥, 채소, 달콤한 칠리 소스가 곁들여진 한국식 수제 돈까스",
                sujeCheeseDonkkas: "치즈가 들어간 한국식 수제 돈까스, 밥, 채소, 달콤한 칠리 소스 제공",
                sagolJamppong: "해산물, 돼지고기, 신선한 채소가 들어간 매운 면 요리",
                sagolJamppongbap: "해산물, 돼지고기, 신선한 채소가 들어간 매운 국물 요리, 밥 제공",
                jeyukDeopBap: "매콤하게 양념된 돼지고기와 신선한 채소 볶음, 밥 제공",
                ojingeoDeopBap: "매콤하게 양념된 오징어와 신선한 채소 볶음, 밥 제공",
                bulgogi: "특제 간장 소스로 양념한 소고기와 신선한 채소 볶음, 밥 제공",
                sogogiGukbap: "매운 소고기 국물 요리, 밥 제공",
                sundaeGukbap: "순대(돼지 내장에 여러 재료를 넣어 만든 한국식 순대)가 들어간 국물 요리, 밥과 고춧가루 제공",
                ppyeoHaejangguk: "매운 돼지 등뼈 국물 요리, 밥 제공",
                kimchiJjigae: "숙성된 김치와 삼겹살이 들어간 매운 찌개, 밥 제공"
            },
            allergens: "알레르기 정보: (1) 밀, (2) 갑각류, (3) 계란, (4) 생선, (5) 땅콩, (6) 대두, (8) 견과류, (11) 참깨, (14) 연체동물",
            note: "파더스는 정성을 담아 직접 고운 사골 국물만 사용합니다."
        },
        // ... 기존 번역 유지 ...
    },
    en: {
        menu: {
            title: "Lunch Menu",
            main: "Main Dishes",
            items: {
                friedChicken: "Fried Chicken",
                yangnyeomChicken: "Yangnyeom Chicken",
                maneulChicken: "Maneul Chicken",
                ganjangChicken: "Ganjang Chicken",
                paDak: "PaDak",
                sujeDonkkas: "Suje Donkkas",
                sujeCheeseDonkkas: "Suje Cheese Donkkas",
                sagolJamppong: "Sagol Jamppong",
                sagolJamppongbap: "Sagol Jamppongbap",
                jeyukDeopBap: "Jeyuk DeopBap",
                ojingeoDeopBap: "Ojingeo DeopBap",
                bulgogi: "Bulgogi",
                sogogiGukbap: "Sogogi Gukbap",
                sundaeGukbap: "Sundae Gukbap",
                ppyeoHaejangguk: "Ppyeo Haejangguk",
                kimchiJjigae: "Samgyeopsal Kimchi Jjigae"
            },
            descriptions: {
                friedChicken: "Korean style double fried chicken served with chilli sauce",
                yangnyeomChicken: "Korean style double fried chicken coated with chilli sauce",
                maneulChicken: "Korean style double fried chicken coated with soy garlic sauce",
                ganjangChicken: "Korean style double fried chicken seasoned with soy sauce",
                paDak: "Korean style double fried chicken served with leek julienne",
                sujeDonkkas: "Korean style pork cutlet served with rice, vegetables and sweet chilli dip",
                sujeCheeseDonkkas: "Korean style pork cutlet with cheese served with rice, vegetables and sweet chilli dip",
                sagolJamppong: "Spicy noodle soup with seafood, stripes of pork meat and fresh vegetables",
                sagolJamppongbap: "Spicy soup with seafood, stripes of pork meat and fresh vegetables served with rice",
                jeyukDeopBap: "Spicy marinated pork meat fried with fresh vegetables served with rice",
                ojingeoDeopBap: "Spicy marinated squid fried with fresh vegetables served with rice",
                bulgogi: "Beef meat with fresh vegetables marinated in a special Korean soy sauce and fried served with rice",
                sogogiGukbap: "Spicy soup with beef meat served with rice",
                sundaeGukbap: "Soup with Sundae (a type of blood sausage in Korean cuisine made by steaming pig's intestines stuffed with various ingredients) served with rice and chilli spices",
                ppyeoHaejangguk: "Spicy soup with pork backbone served with rice",
                kimchiJjigae: "Spicy stew with fermented Kimchi and pork meat served with rice"
            },
            allergens: "Allergens: (1) Wheat, (2) Crustaceans, (3) Eggs, (4) Fish, (5) Peanuts, (6) Soybeans, (8) Nuts, (11) Sesame, (14) Molluscs",
            note: "At Fathers, we take pride in using only our carefully prepared bone broth."
        },
        // ... 기존 번역 유지 ...
    },
    de: {
        menu: {
            title: "Mittagessen",
            main: "Hauptgerichte",
            items: {
                friedChicken: "Fried Chicken",
                yangnyeomChicken: "Yangnyeom Chicken",
                maneulChicken: "Maneul Chicken",
                ganjangChicken: "Ganjang Chicken",
                paDak: "PaDak",
                sujeDonkkas: "Suje Donkkas",
                sujeCheeseDonkkas: "Suje Cheese Donkkas",
                sagolJamppong: "Sagol Jamppong",
                sagolJamppongbap: "Sagol Jamppongbap",
                jeyukDeopBap: "Jeyuk DeopBap",
                ojingeoDeopBap: "Ojingeo DeopBap",
                bulgogi: "Bulgogi",
                sogogiGukbap: "Sogogi Gukbap",
                sundaeGukbap: "Sundae Gukbap",
                ppyeoHaejangguk: "Ppyeo Haejangguk",
                kimchiJjigae: "Samgyeopsal Kimchi Jjigae"
            },
            descriptions: {
                friedChicken: "Frittiertes Hähnchen, dazu Chilisoße",
                yangnyeomChicken: "Frittiertes Hähnchen in scharfer Chilisoße",
                maneulChicken: "Frittiertes Hähnchen in Knoblauchsoße",
                ganjangChicken: "Frittiertes Hähnchen in süßlicher Sojasoße",
                paDak: "Frittiertes Hähnchen, dazu Lauchjulienne",
                sujeDonkkas: "Hausgemachte Schnitzel aus Schweinefleisch nach koreanischer Art, dazu Reis, Gemüse und süßlicher Chili Dip",
                sujeCheeseDonkkas: "Hausgemachte Schnitzel aus Schweinefleisch nach koreanischer Art mit Käse, dazu Reis, Gemüse und süßlicher Chili Dip",
                sagolJamppong: "Scharfe Nudel Suppe mit Meeresfrüchten, Schweinefleischstreifen und frischem Gemüse",
                sagolJamppongbap: "Scharfe Suppe mit Meeresfrüchten, Schweinefleischstreifen und frischem Gemüse, dazu Reis",
                jeyukDeopBap: "Scharf mariniertes Schweinefleisch gebraten mit frischem Gemüse, dazu Reis",
                ojingeoDeopBap: "Scharf marinierter Tintenfisch gebraten mit frischem Gemüse, dazu Reis",
                bulgogi: "Rindfleisch mit frischem Gemüse mariniert in einer speziellen koreanischen Sojasoße und gebraten, dazu Reis",
                sogogiGukbap: "Scharfe Suppe mit Rindfleisch, dazu Reis",
                sundaeGukbap: "Suppe mit Sundae (eine Art blonde Wurst in der koreanischen Küche, die durch das Dämpfen von Schweinedärmen mit verschiedenen Zutaten hergestellt wird), dazu Reis und Chili Gewürz",
                ppyeoHaejangguk: "Scharfe Suppe mit Schweinerückgrat, dazu Reis",
                kimchiJjigae: "Scharfer Eintopf mit fermentiertem Kimchi und Schweinefleisch, dazu Reis"
            },
            allergens: "Allergene: (1) Weizen, (2) Krustentiere, (3) Eier, (4) Fisch, (5) Erdnüsse, (6) Sojabohnen, (8) Nüsse, (11) Sesam, (14) Weichtiere",
            note: "Bei Fathers verwenden wir nur sorgfältig zubereitete Knochenbrühe."
        },
        // ... 기존 번역 유지 ...
    }
};

// 현재 선택된 언어 (기본값: 한국어)
let currentLang = 'ko';

// 언어 전환 함수
function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
    document.documentElement.lang = lang;
}

// 페이지 내용 업데이트 함수
function updateContent() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const keys = key.split('.');
        let value = t;
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', value);
            } else {
                element.textContent = value;
            }
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    currentLang = 'ko';
    document.documentElement.lang = currentLang;
    updateContent();
});