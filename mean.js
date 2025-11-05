// ===================
// INDEX (index.html)
// ===================
const jobTypes = {
  "Davlat ishlar": [
    "Qorovul",
    "Bugalter",
    "O‘qituvchi",
    "Hamshira",
    "Shifokor",
    "Arxivchi",
    "Kutubxonachi",
    "Kadrlar bo‘limi mutaxassisi",
    "Kotiba",
    "Maktab direktori",
    "Direktor o‘rinbosari",
    "Metodist",
    "Tarbiyachi",
    "Bog‘cha hamshirasi",
    "Sanitarka",
    "Haydovchi (davlat tashkiloti uchun)",
    "Texnik xizmat ko‘rsatuvchi xodim",
    "Elektrik",
    "Santexnik",
    "Qo‘riqlash xizmati xodimi",
    "Ichki ishlar xodimi",
    "Harbiy xizmatchi",
    "Davlat soliq inspektori",
    "Bojxona inspektori",
    "Sud kotibi",
    "Prokuratura xodimi",
    "Hokimiyat mutaxassisi",
    "Arxitektura bo‘limi xodimi",
    "Yer resurslari inspektori",
    "Pochta xodimi",
    "Statistika boshqarmasi mutaxassisi",
    "Moliya bo‘limi inspektori",
    "Ijtimoiy ta’minot bo‘limi xodimi",
    "Ekologiya inspektori",
    "Suv xo‘jaligi muhandisi",
    "Qishloq xo‘jaligi inspektori",
    "Yo‘l nazoratchisi",
    "Transport boshqarmasi xodimi",
    "Farmatsevt (davlat dorixonasi)",
    "Kutubxona mudiri",
    "Madaniyat markazi xodimi",
    "Sport murabbiyi",
    "Xavfsizlik inspektori",
    "Oliy ta’lim o‘qituvchisi",
    "Ilmiy xodim",
    "Texnik kotib",
    "Axborot xizmati mutaxassisi",
    "Matbuot kotibi",
    "Davlat televideniye xodimi",
    "Davlat arxivchi",
    "Bozor nazoratchisi",
    "Davlat tibbiyot laboratoriya xodimi"
  ],

  "Kampaniyalar": [
    "Marketing mutaxassisi",
    "Web dizayner",
    "Frontend dasturchi",
    "SMM mutaxassisi",
    "Backend dasturchi",
    "Grafik dizayner",
    "Kontent menedjer",
    "Copywriter",
    "SEO mutaxassisi",
    "Loyiha menejeri",
    "IT mutaxassisi",
    "HR mutaxassisi",
    "Ofis menejeri",
    "Sotuv bo‘limi rahbari",
    "Call-markaz operatori",
    "Mijozlar bilan ishlash mutaxassisi",
    "Kassir",
    "Hisobchi",
    "Brend menejeri",
    "Reklama bo‘limi xodimi"
  ],

  "Kunlik ishlar": [
    "Qurilish yordamchisi",
    "Kuryer",
    "Tozalovchi",
    "Yuk tashuvchi",
    "Sotuvchi yordamchisi",
    "Bozor sotuvchisi",
    "Sartarosh yordamchisi",
    "Bog‘bon",
    "Uy tozalovchi",
    "Oshxona yordamschisi",
    "Go‘sht qirquvchi",
    "Qadoqlovchi",
    "Zavod ishchisi",
    "Quruvchi",
    "Bo‘yoqchi yordamchisi",
    "Qurilishda suv tashuvchi",
    "Payvandchi yordamchisi"
  ],

  "Haftalik ishlar": [
    "Sotuvchi",
    "Sartarosh yordamchisi",
    "Ofitsiant",
    "Barista",
    "Go‘zallik saloni yordamchisi",
    "Tikuvchi",
    "Qandolatchi yordamchisi",
    "Kafelar tozalovchisi",
    "Mini-market kassiri",
    "Go‘shtchi yordamchisi",
    "Nonvoy yordamchisi",
    "Avtomoyka xodimi",
    "Servis markazi yordamchisi",
    "Sport zal administrator yordamchisi"
  ],

  "Oylik ishlar": [
    "Ofis xodimi",
    "Hisobchi",
    "HR menejer",
    "Kassir",
    "IT texnik",
    "Grafik dizayner",
    "Marketing mutaxassisi",
    "Sotuv menejeri",
    "Reception xodimi",
    "Loyiha boshqaruvchisi",
    "Bank xodimi",
    "Sug‘urta agenti",
    "Notarius yordamchisi",
    "Tibbiyot registratori",
    "Farmatsevt",
    "Logistika mutaxassisi",
    "Haydovchi",
    "Xavfsizlik xodimi",
    "Ofis tozalovchi",
    "Texnik xizmat ko‘rsatuvchi xodim"
  ]
};


function showJobs(category) {
  const modal = document.getElementById("jobModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = category;

  const jobs = jobTypes[category];

  if (!jobs || jobs.length === 0) {
    modalBody.innerHTML = "<p>Bu turdagi ishlar hozircha yo‘q.</p>";
  } else {
    modalBody.innerHTML = jobs.map(job => `
      <div class="job-item">${job}</div>
    `).join("");
  }

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("jobModal").classList.remove("show");
}

window.onclick = (e) => {
  const modal = document.getElementById("jobModal");
  if (e.target === modal) closeModal();
};













// ===================
// ISHLAR (ishlar.html)
// ===================
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '❤️' : '♡';
  });
});


// ===================
// ROYHARDAN OTISH (royhatdan.otish.html)
// ===================
const postJobBtn = document.getElementById("postJobBtn");
const hireBtn = document.getElementById("hireBtn");
const jobForm = document.getElementById("jobForm");
const hireForm = document.getElementById("hireForm");

postJobBtn.addEventListener("click", () => {
  postJobBtn.classList.add("active");
  hireBtn.classList.remove("active");
  jobForm.classList.add("active");
  hireForm.classList.remove("active");
});

hireBtn.addEventListener("click", () => {
  hireBtn.classList.add("active");
  postJobBtn.classList.remove("active");
  hireForm.classList.add("active");
  jobForm.classList.remove("active");
});








// ===================
// BIZHAQIMZDA (biz.haqimizda.html)
// ===================


























