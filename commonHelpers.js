import{S as p,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="43344529-efab811219d9ae176ef45ef76",f="https://pixabay.com/api/";async function d(a){const t=`${f}?key=${m}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(t)).json()).hits}catch(s){return console.error("Error searching images:",s),[]}}const g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(a,t){a.innerHTML=h(t),g.refresh()}function h(a){return a.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:n,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
              
                <img class="gallery-image" src="${t}" alt="${o}" width="360" />
               
                  <ul class="gallery-text">
                    <li>
                      <span>Likes</span>
                      <p>${e}</p>
                    </li>
                    <li>
                      <span>Views</span>
                      <p>${r}</p>
                    </li>
                    <li>
                      <span>Comments</span>
                      <p>${n}</p>
                    </li>
                    <li>
                      <span>Downloads</span>
                      <p>${u}</p>
                    </li>
                  </ul>

            </a>
          </li>`).join(" ")}const L=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper ");L.addEventListener("submit",b);async function b(a){a.preventDefault(),l.innerHTML="",c.classList.remove("is-hidden");const t=document.getElementById("input-text").value.trim();if(t!=="")try{const s=await d(t);s.length>0?y(l,s):i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){console.error("Error searching images:",s),i.error({title:"Error",message:"An error occurred while searching for images. Please try again later."})}finally{c.classList.add("is-hidden")}else i.error({title:"Error",message:"Please enter a search term"})}
//# sourceMappingURL=commonHelpers.js.map
