const translations = {
    ko: {
        nav: {
            home: "홈",
            about: "소개",
            menu: "메뉴",
            reservation: "예약",
            contact: "문의"
        },
        hero: {
            welcome: "파더스 레스토랑에 오신 것을 환영합니다",
            subtitle: "프랑크푸르트에서 만나는 정통 한식의 진수",
            description: "전통의 맛과 현대적 감각이 조화를 이루는 파더스 레스토랑에서 특별한 한식 여행을 경험하세요. 정성과 품격이 담긴 우리의 요리가 여러분을 기다립니다.",
            reserve: "예약하기",
            menu: "메뉴 보기"
        },
        about: {
            title: "파더스 레스토랑 이야기",
            description: "파더스 레스토랑은 한식의 전통을 지키면서도 현대적 감각을 더해 새로운 미식 경험을 선사합니다. 우리의 자랑스러운 시그니처 메뉴인 감자탕은 진한 육수와 부드러운 돼지고기의 완벽한 조화를, 치즈 돈까스는 바삭한 튀김과 고소한 치즈의 환상적인 만남을 선보입니다. 매 순간 정성을 다해 준비하는 우리의 요리에서 한식의 진정한 맛과 품격을 경험하실 수 있습니다."
        },
        reservation: {
            title: "예약"
        },
        contact: {
            title: "문의하기",
            description: "특별한 날을 위한 예약이나 궁금하신 점이 있으시다면 언제든 문의해 주세요. 최선을 다해 답변 드리겠습니다.",
            name: "이름",
            email: "이메일",
            message: "메시지",
            submit: "보내기"
        },
        alerts: {
            success: "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변 드리겠습니다.",
            error: "문의 전송에 실패했습니다. 다시 시도해주세요.",
            networkError: "네트워크 오류가 발생했습니다."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            menu: "Menu",
            reservation: "Reservation",
            contact: "Contact"
        },
        hero: {
            welcome: "Welcome to Fathers Restaurant",
            subtitle: "Authentic Korean Culinary Excellence in Frankfurt",
            description: "Embark on a unique culinary journey where time-honored Korean traditions meet contemporary elegance. Our carefully crafted dishes await to delight your senses."
        },
        about: {
            title: "Our Story",
            description: "At Fathers Restaurant, we honor Korean culinary traditions while embracing modern innovation to create an extraordinary dining experience. Our pride lies in our signature dishes: the Gamjatang, featuring a rich, hearty broth perfectly balanced with tender pork, and our Cheese Donkatsu, a delightful fusion of crispy cutlet and melted cheese. Every dish we serve is a testament to our commitment to authentic flavors and culinary excellence, prepared with unwavering dedication and care."
        },
        reservation: {
            title: "Reservation"
        },
        contact: {
            title: "Contact Us",
            description: "Whether you're planning a special occasion or have any questions, we're here to help. Don't hesitate to reach out to us.",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Send"
        },
        alerts: {
            success: "Your inquiry has been successfully submitted. We'll respond to you shortly.",
            error: "Failed to send inquiry. Please try again.",
            networkError: "A network error occurred."
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            menu: "Speisekarte",
            reservation: "Reservierung",
            contact: "Kontakt"
        },
        hero: {
            welcome: "Willkommen im Fathers Restaurant",
            subtitle: "Authentische koreanische Kochkunst in Frankfurt",
            description: "Begeben Sie sich auf eine einzigartige kulinarische Reise, bei der traditionelle koreanische Küche auf zeitgenössische Eleganz trifft. Unsere sorgfältig zubereiteten Gerichte warten darauf, Ihre Sinne zu verzaubern."
        },
        about: {
            title: "Unsere Geschichte",
            description: "Im Fathers Restaurant bewahren wir die koreanischen Kochtraditionen und verbinden sie mit modernen Innovationen, um ein außergewöhnliches Esserlebnis zu schaffen. Unser Stolz liegt in unseren Signature Dishes: dem Gamjatang mit seiner reichhaltigen, herzhaften Brühe und zartem Schweinefleisch, sowie unserem Cheese Donkatsu, einer köstlichen Fusion aus knusprigem Schnitzel und geschmolzenem Käse. Jedes unserer Gerichte zeugt von unserem Engagement für authentische Aromen und kulinarische Exzellenz, zubereitet mit unerschütterlicher Hingabe und Sorgfalt."
        },
        reservation: {
            title: "Reservierung"
        },
        contact: {
            title: "Kontakt",
            description: "Ob Sie einen besonderen Anlass planen oder Fragen haben, wir sind für Sie da. Zögern Sie nicht, uns zu kontaktieren.",
            name: "Name",
            email: "E-Mail",
            message: "Nachricht",
            submit: "Senden"
        },
        alerts: {
            success: "Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden.",
            error: "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
            networkError: "Ein Netzwerkfehler ist aufgetreten."
        }
    }
};

let currentLang = 'ko';

function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
    document.documentElement.lang = lang;
}

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

document.addEventListener('DOMContentLoaded', () => {
    currentLang = 'ko';
    document.documentElement.lang = currentLang;
    updateContent();
});