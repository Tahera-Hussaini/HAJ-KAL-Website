const menuBtn=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false")}));

document.querySelectorAll("[data-order]").forEach(btn=>{
  btn.addEventListener("click",e=>{
    e.preventDefault();
    const card=btn.closest(".product-card");
    const name=card.dataset.name, ref=card.dataset.ref;
    const text=`سلام هاج کالا! می‌خواهم این محصول را سفارش بدهم.\nمحصول: ${name}\nشماره محصول: ${ref}\nلطفاً قیمت، سایز، رنگ و موجودی را برایم بفرستید.`;
    window.open("https://wa.me/93794740238?text="+encodeURIComponent(text),"_blank","noopener");
  });
});

document.querySelector("#contactForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.querySelector("#name").value.trim();
  const phone=document.querySelector("#phone").value.trim();
  const message=document.querySelector("#message").value.trim();
  const text=`سلام هاج کالا!\nنام: ${name}\nشماره تماس: ${phone}\nپیام: ${message}`;
  window.open("https://wa.me/93794740238?text="+encodeURIComponent(text),"_blank","noopener");
});

const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
