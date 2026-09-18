
const searchInput = document.querySelector(".search-input");

const searchBtn = document.querySelector(".search-btn");

const searchResults = document.querySelector(".search-results");

const medicalItems = [

    {

        name: "اورژانس",

        description: "تجهیزات پزشکی بخش اورژانس",

        link: "emergency/emergency.html"

    },

    {

        name: "مانیتور علائم حیاتی",

        description: "دستگاه پایش علائم حیاتی بیمار",

        link: "emergency/emergency.html"

    },

    {

        name: "ICU",

        description: "بخش مراقبت‌های ویژه",

        link: "icu/icu.html"

    },

    {

        name: "ونتیلاتور",

        description: "دستگاه کمک به تنفس بیماران",

        link: "icu/icu.html"

    },

    {

        name: "CCU",

        description: "بخش مراقبت‌های ویژه قلب",

        link: "ccu/ccu.html"

    },

    {

        name: "رادیولوژی",

        description: "بخش تصویربرداری پزشکی",

        link: "radiology/radiology.html"

    },

    {

        name: "MRI",

        description: "دستگاه تصویربرداری تشدید مغناطیسی",

        link: "radiology/radiology.html"

    },

    {

        name: "CT Scan",

        description: "دستگاه تصویربرداری مقطعی",

        link: "radiology/radiology.html"

    },

    {

        name: "اتاق عمل",

        description: "تجهیزات پزشکی اتاق عمل",

        link: "operating-room/operating-room.html"

    },

    {

        name: "آزمایشگاه",

        description: "تجهیزات پزشکی آزمایشگاه",

        link: "laboratory/laboratory.html"

    }

];

function searchMedicalItems() {

    const searchText = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (searchText === "") {

        return;

    }

    const results = medicalItems.filter(function(item) {

        return (

            item.name.toLowerCase().includes(searchText) ||

            item.description.toLowerCase().includes(searchText)

        );

    });

    if (results.length === 0) {

        searchResults.innerHTML = `

            <div class="search-result">

                <h4>نتیجه‌ای پیدا نشد</h4>

                <p>لطفاً نام بخش یا دستگاه دیگری را جستجو کنید.</p>

            </div>

        `;

        return;

    }

    results.forEach(function(item) {

        searchResults.innerHTML += `

            <a href="${item.link}" class="search-result">

                <h4>${item.name}</h4>

                <p>${item.description}</p>

            </a>

        `;

    });

}

searchBtn.addEventListener("click", searchMedicalItems);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchMedicalItems();

    }

});