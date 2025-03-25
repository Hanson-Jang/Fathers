// 다국어 지원을 위한 번역 데이터 객체
const translations = {
    ja: {
        menu: {
            title: "ランチメニュー",
            main: "メインメニュー",
            description: {
                intro: "フランクフルトで味わう韓国料理の真髄",
                experience: "伝統の味と現代的なセンスが調和するファーザーズレストランで、特別な韓国料理の旅をお楽しみください。",
                waiting: "心を込めて作り上げた料理が皆様をお待ちしております。",
                signature: "自慢のシグネチャーメニューである豚骨スープは濃厚なスープと柔らかい豚肉の完璧なハーモニーを、\nチーズとんかつはサクサクの衣とコクのあるチーズの素晴らしい出会いを演出します。",
                promise: "一瞬一瞬、真心を込めて準備させていただきます。",
                hours: "月曜日-金曜日：11:45 - 14:30、18:00 - 21:00\n土曜日：11:45 - 14:30"
            },
            details: {
                friedChicken: "厳選された鶏肉を特製衣で二度揚げし、外はカリッと中はジューシーに仕上げたプレミアムチキン。特製の衣には、コーンスターチと小麦粉をブレンドし、ハーブとスパイスを加えて風味豊かに仕上げています。二度揚げ製法により、外はカリカリ、中はジューシーな食感を実現しました。",
                yangnyeomChicken: "新鮮な鶏肉を二度揚げでカリッと仕上げ、特製コチュジャンベースの甘辛いタレをからめた韓国を代表するチキン料理。コチュジャン、蜂蜜、醤油、にんにくなどを絶妙なバランスで配合したソースは、伝統的なレシピを現代風にアレンジした自慢の一品です。"
            },
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
            description: {
                intro: "在法兰克福体验韩式美食的精髓",
                experience: "在Fathers餐厅体验特别的韩式美食之旅，这里传统风味与现代感性完美融合。",
                waiting: "我们精心制作的菜品正等待着您。",
                signature: "我们引以为傲的招牌菜展现完美和谐：浓郁高汤与嫩滑猪肉的土豆汤，\n以及外酥内嫩、芝士醇香的炸猪排。",
                promise: "我们将以最大的诚意准备每一刻。",
                hours: "周一至周五：11:45 - 14:30，18:00 - 21:00\n周六：11:45 - 14:30"
            },
            details: {
                friedChicken: "精选鸡肉使用特制面衣双重油炸，外酥内嫩的高级炸鸡。特制面衣采用玉米淀粉和面粉的独特配比，并添加精选香料，赋予炸鸡层次丰富的风味。采用双重油炸工艺，确保外皮金黄酥脆，同时锁住肉汁，口感完美。",
                yangnyeomChicken: "将新鲜鸡肉双重油炸至酥脆，然后裹上以特制辣椒酱为基底的甜辣酱料，是韩国具有代表性的炸鸡料理。酱料由韩式辣椒酱、蜂蜜、酱油和大蒜等食材精心调制，完美平衡了甜辣口味，是传统配方的现代演绎。",
                maneulChicken: "使用特制蒜蓉酱料腌制的韩式炸鸡，蒜香浓郁与酥脆口感完美融合。新鲜鸡肉经过双重油炸，外皮金黄酥脆，搭配自制蒜蓉酱料，风味独特。",
                ganjangChicken: "以特制酱油调味的韩式炸鸡，完美平衡甜咸口味。鸡肉经过双重油炸确保酥脆，最后淋上招牌酱油基底酱料。",
                paDak: "韩国代表性炸鸡料理，酥脆炸鸡配以新鲜韭葱丝，为美食增添清爽口感和风味。",
                sujeDonkkas: "精选猪肉制作的高级炸猪排，采用手工面包糠裹粉炸至金黄酥脆。以多汁嫩滑的肉质和清新口感著称。",
                sujeCheeseDonkkas: "手工制作的芝士猪排，外皮酥脆，内里包裹柔滑芝士，口感层次丰富。",
                sagolJamppong: "以浓郁骨汤为基底的辣味面条汤，配以丰富的海鲜和蔬菜，是一道健康的韩式融合料理。",
                sagolJamppongbap: "一碗美味的辣味骨汤配以松软米饭，内含丰富海鲜和蔬菜，让您一次享受到丰富的美味。",
                jeyukDeopBap: "甜辣炒猪肉配以蒸米饭，与各种蔬菜完美搭配，口感和谐。",
                ojingeoDeopBap: "新鲜鱿鱼以甜辣酱料炒制，配以米饭，以弹牙的口感和丰富的味道著称。",
                bulgogi: "韩国代表性料理，以特制酱油腌制的薄切牛肉与蔬菜一起炒制，口感细腻，味道和谐。",
                sogogiGukbap: "传统韩式米饭汤，以嫩滑牛肉和浓郁骨汤熬制，口感醇厚，营养丰富。",
                sundaeGukbap: "传统健康的韩式料理，软糯血肠配以浓郁汤汁，以其深厚的味道和丰富的营养著称。",
                ppyeoHaejangguk: "传统韩式汤品，以猪脊骨在浓郁骨汤中慢炖，口感醇厚，营养丰富。",
                kimchiJjigae: "韩国代表性炖品，以发酵泡菜和五花肉为主料，完美平衡辛香与浓郁的味道。"
            },
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
            title: "파더스의 특별한 메뉴",
            main: "메인 메뉴",
            description: {
                intro: "프랑크푸르트에서 만나는 한식의 진수",
                experience: "전통의 맛과 현대적 감각이 조화를 이루는 파더스 레스토랑에서 특별한 한식 여행을 경험하세요.",
                waiting: "정성과 품격이 담긴 우리의 요리가 여러분을 기다립니다.",
                signature: "우리의 자랑스러운 시그니처 메뉴인 감자탕은 진한 육수와 부드러운 돼지고기의 완벽한 조화를,\n치즈 돈까스는 바삭한 튀김과 고소한 치즈의 환상적인 만남을 선보입니다.",
                promise: "매 순간 정성을 다해 준비하겠습니다.",
                hours: "월요일-금요일: 11:45 AM - 2:30 PM, 6:00 PM - 9:00 PM\n토요일: 11:45 AM - 2:30 PM"
            },
            details: {
                friedChicken: "엄선된 닭고기를 특제 반죽으로 두 번 튀겨 더욱 바삭하고 육즙이 가득한 프리미엄 치킨",
                yangnyeomChicken: "신선한 닭고기를 두 번 튀겨 바삭하게 만든 후, 특제 고추장 베이스의 매콤달콤한 양념 소스로 맛을 낸 한국의 대표적인 치킨 요리",
                maneulChicken: "신선한 마늘을 갈아 만든 특제 소스로 풍부한 마늘향과 감칠맛이 어우러진 치킨",
                ganjangChicken: "특제 간장 소스로 맛을 낸 치킨으로, 깊은 감칠맛과 은은한 단맛이 조화를 이루는 한국의 대표적인 치킨 요리",
                paDak: "얇게 채썬 대파의 아삭한 식감과 치킨의 바삭함이 어우러져 한층 더 풍부한 맛을 선사하는 특별 메뉴",
                sujeDonkkas: "엄선된 국내산 돼지고기를 특제 빵가루로 바삭하게 튀겨낸 프리미엄 돈까스로, 부드러운 육질과 바삭한 식감이 조화를 이루는 대표 메뉴",
                sujeCheeseDonkkas: "고급 모짜렐라 치즈를 듬뿍 넣어 더욱 부드럽고 고소한 맛이 특징인 프리미엄 치즈 돈까스로, 특제 소스와 함께 즐기는 파더스의 시그니처 메뉴",
                maneulChicken: "신선한 닭고기를 특제 마늘 소스로 맛을 낸 한국식 치킨 요리로, 알싸한 마늘의 풍미와 바삭한 식감이 조화를 이루는 메뉴",
                ganjangChicken: "특제 간장 소스로 맛을 낸 한국식 치킨으로, 달콤하면서도 짭조름한 맛이 일품인 메뉴",
                paDak: "바삭하게 튀긴 치킨 위에 아삭한 파채를 듬뿍 올려 신선한 맛을 더한 한국의 대표적인 치킨 요리",
                sujeDonkkas: "엄선된 돼지고기를 수제 빵가루로 바삭하게 튀겨낸 프리미엄 돈까스로, 육즙이 가득하고 담백한 맛이 특징",
                sujeCheeseDonkkas: "부드러운 치즈를 함유한 수제 돈까스로, 바삭한 튀김옷 안에서 녹아나는 치즈의 고소함이 일품",
                sagolJamppong: "진한 사골 육수를 베이스로 한 매콤한 짬뽕으로, 신선한 해산물과 채소가 푸짐하게 들어간 건강한 한식 메뉴",
                sagolJamppongbap: "진한 사골 육수의 짬뽕에 고슬고슬한 밥을 곁들인 메뉴로, 풍부한 해산물과 채소의 맛을 즐길 수 있는 한 그릇 식사",
                jeyukDeopBap: "매콤달콤하게 양념된 제육볶음을 고슬고슬한 밥과 함께 즐기는 메뉴로, 다양한 채소와 함께 조화로운 맛을 선사",
                ojingeoDeopBap: "신선한 오징어를 매콤달콤하게 볶아 밥과 함께 즐기는 메뉴로, 쫄깃한 식감과 풍부한 맛이 특징",
                bulgogi: "엄선된 소고기를 특제 간장 소스에 재워 부드럽게 볶아낸 한국의 대표적인 메뉴로, 채소와 함께 조화로운 맛을 즐길 수 있는 요리",
                sogogiGukbap: "진한 사골 육수에 부드러운 소고기를 넣어 끓인 국밥으로, 깊은 맛과 영양이 가득한 전통 한식",
                sundaeGukbap: "부드러운 순대와 진한 국물이 어우러진 전통 한식으로, 깊은 맛과 풍부한 영양이 특징인 건강식",
                ppyeoHaejangguk: "진한 사골 육수에 부드러운 돼지 등뼈를 넣어 푹 고아낸 해장국으로, 깊은 맛과 영양이 가득한 전통 한식",
                kimchiJjigae: "숙성된 김치와 삼겹살을 넣어 깊은 맛을 낸 찌개로, 매콤하고 깊은 맛이 일품인 한국의 대표적인 찌개 요리"
            },
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
            title: "Fathers Special Menu",
            main: "Main Dishes",
            description: {
                intro: "The Essence of Korean Cuisine in Frankfurt",
                experience: "Experience a special Korean culinary journey at Fathers Restaurant, where traditional flavors meet modern sensibility.",
                waiting: "Our dishes, crafted with dedication and elegance, await you.",
                signature: "Our proud signature dishes showcase perfect harmony: the rich broth and tender pork in Gamjatang,\nand the crispy coating with savory cheese in our Cheese Donkatsu.",
                promise: "We prepare every moment with utmost dedication.",
                hours: "Monday-Friday: 11:45 AM - 2:30 PM, 6:00 PM - 9:00 PM\nSaturday: 11:45 AM - 2:30 PM"
            },
            details: {
                friedChicken: "Premium chicken made by double-frying selected chicken in special batter for extra crispiness while maintaining juicy meat inside. Our signature batter combines cornstarch and flour with a blend of herbs and spices for enhanced flavor. The double-frying technique ensures a perfectly crispy exterior while sealing in the natural juices.",
                yangnyeomChicken: "A signature Korean chicken dish made by double-frying fresh chicken until crispy, then coating it with our special sweet and spicy gochujang-based sauce. Our unique sauce combines Korean red pepper paste, honey, soy sauce, and garlic in perfect harmony, offering a modern twist on traditional flavors.",
                maneulChicken: "A Korean-style chicken dish seasoned with our special garlic sauce, creating a perfect harmony between the pungent garlic flavor and crispy texture. Fresh chicken is double-fried until golden and then generously coated with our house-made garlic sauce.",
                ganjangChicken: "Korean-style chicken seasoned with our special soy sauce, offering a perfect balance of sweet and savory flavors. The chicken is double-fried for crispiness and then glazed with our signature soy-based sauce.",
                paDak: "A representative Korean chicken dish featuring crispy fried chicken topped with fresh julienned green onions, adding a refreshing crunch and flavor to the dish.",
                sujeDonkkas: "Premium pork cutlet made with carefully selected pork, breaded with handmade breadcrumbs and fried until perfectly crispy. Known for its juicy meat and clean taste.",
                sujeCheeseDonkkas: "Handmade pork cutlet filled with soft cheese, creating a perfect combination of crispy coating and melting cheese inside.",
                sagolJamppong: "A spicy noodle soup based on rich bone broth, generously filled with fresh seafood and vegetables, offering a healthy Korean fusion dish.",
                sagolJamppongbap: "A hearty meal featuring spicy bone broth soup with fluffy rice, abundant with seafood and vegetables, allowing you to enjoy rich flavors in one bowl.",
                jeyukDeopBap: "Sweet and spicy stir-fried pork served over steamed rice, offering a harmonious blend of flavors with various vegetables.",
                ojingeoDeopBap: "Fresh squid stir-fried in a sweet and spicy sauce served over rice, known for its chewy texture and rich flavors.",
                bulgogi: "A representative Korean dish of thinly sliced beef marinated in special soy sauce and stir-fried until tender, served with vegetables for a harmonious taste.",
                sogogiGukbap: "A traditional Korean rice soup made with tender beef in rich bone broth, offering deep flavors and abundant nutrition.",
                sundaeGukbap: "A traditional healthy Korean dish combining soft blood sausage with rich broth, known for its deep flavors and rich nutrition.",
                ppyeoHaejangguk: "A traditional Korean soup made by slow-cooking tender pork backbone in rich bone broth, packed with deep flavors and nutrition.",
                kimchiJjigae: "A representative Korean stew made with aged kimchi and pork belly, offering a perfect balance of spicy and deep flavors."
            },
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
            title: "Fathers Spezialmenü",
            main: "Hauptgerichte",
            description: {
                intro: "Die Essenz der koreanischen Küche in Frankfurt",
                experience: "Erleben Sie eine besondere koreanische Kulinarische Reise im Fathers Restaurant, wo traditionelle Aromen auf moderne Sensibilität treffen.",
                waiting: "Unsere mit Hingabe und Eleganz zubereiteten Gerichte warten auf Sie.",
                signature: "Unsere stolzen Signature Dishes präsentieren perfekte Harmonie: die reichhaltige Brühe und zartes Schweinefleisch im Gamjatang,\nund die knusprige Panade mit würzigem Käse in unserem Cheese Donkatsu.",
                promise: "Wir bereiten jeden Moment mit größter Sorgfalt zu.",
                hours: "Montag-Freitag: 11:45 - 14:30 Uhr, 18:00 - 21:00 Uhr\nSamstag: 11:45 - 14:30 Uhr"
            },
            details: {
                friedChicken: "Premium-Hähnchen, das in spezieller Panade doppelt frittiert wird, um extra Knusprigkeit bei saftigem Fleisch zu erreichen. Unsere einzigartige Panade kombiniert Maisstärke und Mehl mit erlesenen Kräutern und Gewürzen für einen reichhaltigen Geschmack. Die spezielle Doppel-Frittiertechnik garantiert eine perfekt knusprige Kruste bei saftigem Fleisch.",
                yangnyeomChicken: "Ein typisch koreanisches Hähnchengericht, bei dem frisches Hähnchen knusprig doppelt frittiert und dann mit unserer speziellen süß-scharfen Gochujang-Sauce überzogen wird. Unsere hausgemachte Sauce vereint koreanische rote Paprikapaste, Honig, Sojasauce und Knoblauch in perfekter Harmonie - eine moderne Interpretation traditioneller Aromen.",
                maneulChicken: "Ein koreanisches Hähnchengericht, das mit unserer speziellen Knoblauchsauce gewürzt wird und eine perfekte Harmonie zwischen würzigem Knoblaucharoma und knuspriger Textur schafft. Frisches Hähnchen wird goldbraun doppelt frittiert und dann großzügig mit unserer hausgemachten Knoblauchsauce überzogen.",
                ganjangChicken: "Koreanisches Hähnchen, das mit unserer speziellen Sojasauce gewürzt wird und eine perfekte Balance zwischen süßen und herzhaften Aromen bietet. Das Hähnchen wird für extra Knusprigkeit doppelt frittiert und dann mit unserer Signature-Sojasauce glasiert.",
                paDak: "Ein repräsentatives koreanisches Hähnchengericht mit knusprig frittiertem Hähnchen, das mit frisch juliennegeschnittenen Frühlingszwiebeln garniert wird und dem Gericht einen erfrischenden Biss und Geschmack verleiht.",
                sujeDonkkas: "Premium-Schweineschnitzel aus sorgfältig ausgewähltem Schweinefleisch, paniert mit hausgemachtem Paniermehl und perfekt knusprig frittiert. Bekannt für sein saftiges Fleisch und seinen reinen Geschmack.",
                sujeCheeseDonkkas: "Handgemachtes Schweineschnitzel gefüllt mit weichem Käse, das eine perfekte Kombination aus knuspriger Panade und schmelzendem Käse im Inneren schafft.",
                sagolJamppong: "Eine scharfe Nudelsuppe auf Basis einer reichhaltigen Knochenbrühe, großzügig gefüllt mit frischen Meeresfrüchten und Gemüse, die ein gesundes koreanisches Fusionsgericht bietet.",
                sagolJamppongbap: "Eine herzhafte Mahlzeit mit scharfer Knochenbrühsuppe und fluffigem Reis, reich an Meeresfrüchten und Gemüse, die es Ihnen ermöglicht, reichhaltige Aromen in einer Schüssel zu genießen.",
                jeyukDeopBap: "Süß-scharf gebratenes Schweinefleisch serviert auf gedämpftem Reis, das eine harmonische Mischung von Aromen mit verschiedenem Gemüse bietet.",
                ojingeoDeopBap: "Frischer Tintenfisch in süß-scharfer Sauce gebraten und auf Reis serviert, bekannt für seine bissfeste Textur und reichhaltigen Aromen.",
                bulgogi: "Ein repräsentatives koreanisches Gericht aus dünn geschnittenem Rindfleisch, mariniert in spezieller Sojasauce und zart gebraten, serviert mit Gemüse für einen harmonischen Geschmack.",
                sogogiGukbap: "Eine traditionelle koreanische Reissuppe mit zartem Rindfleisch in reichhaltiger Knochenbrühe, die tiefe Aromen und reichhaltige Nährstoffe bietet.",
                sundaeGukbap: "Ein traditionelles gesundes koreanisches Gericht, das weiche Blutwurst mit reichhaltiger Brühe kombiniert, bekannt für seine tiefen Aromen und reichhaltige Nährstoffe.",
                ppyeoHaejangguk: "Eine traditionelle koreanische Suppe, die durch langsames Kochen von zartem Schweinerückgrat in reichhaltiger Knochenbrühe zubereitet wird, voller tiefer Aromen und Nährstoffe.",
                kimchiJjigae: "Ein repräsentativer koreanischer Eintopf aus gereiftem Kimchi und Schweinebauch, der eine perfekte Balance zwischen scharfen und tiefen Aromen bietet."
            },
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

// DOM 요소 캐시
let translationElements;

// 페이지 내용 업데이트 함수
function updateContent() {
    // 첫 실행시에만 DOM 요소를 캐시
    if (!translationElements) {
        translationElements = Array.from(document.querySelectorAll('[data-lang]')).map(element => ({
            element,
            key: element.getAttribute('data-lang').split('.'),
            isInput: element.tagName === 'INPUT' || element.tagName === 'TEXTAREA'
        }));
    }

    const t = translations[currentLang];
    translationElements.forEach(({ element, key, isInput }) => {
        let value = t;
        for (const k of key) {
            value = value?.[k];
            if (!value) break;
        }
        
        if (value) {
            if (isInput) {
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