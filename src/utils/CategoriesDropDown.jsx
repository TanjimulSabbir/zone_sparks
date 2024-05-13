import { GoChevronRight } from "react-icons/go";
import "../style/categoryDropDown.css"

export default function CategoriesDropDown() {
    return (
        <ul className="custom-category__main">
            <li className="dropMenu">
                <a href="/product/?c=mensfashion-e60be09c-e677-46e7-afc8-ecc6a10b30fb"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M246.17,57.9,198.09,29.65h0A11.9,11.9,0,0,0,192,28H160a12,12,0,0,0-12,12,20,20,0,0,1-40,0A12,12,0,0,0,96,28H64a11.9,11.9,0,0,0-6.07,1.66h0L9.83,57.9A20.18,20.18,0,0,0,2,84l17.9,36.8A19.62,19.62,0,0,0,37.67,132H52v76a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V132h14.32a19.64,19.64,0,0,0,17.75-11.17L254,84A20.18,20.18,0,0,0,246.17,57.9ZM40.37,108,25.16,76.73,52,61v47ZM180,204H76V52h9.67a44,44,0,0,0,84.68,0H180Zm35.62-96H204V61l26.83,15.76Z"></path></svg><span>Men's Fashion</span></a> <GoChevronRight />

            </li>

            <li className="dropMenu"><a href="/product/?c=womensfashion-c29dbcaf-1e6e-4422-9020-31dd64b17493"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M218.38,208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193,82.56c.06-.09.12-.18.17-.27a20,20,0,0,0,0-20.58c-.14-.24-.3-.48-.46-.71L172,31.44V12a12,12,0,0,0-24,0V31l-4.38,5.47a20,20,0,0,1-31.24,0L108,31V12a12,12,0,0,0-24,0V31.44L63.31,61c-.16.23-.32.47-.46.71a20,20,0,0,0,0,20.58c0,.09.11.18.17.27l19.31,30.32L37.79,207.75c-.06.12-.11.25-.17.37A20,20,0,0,0,56,236H200a20,20,0,0,0,18.39-27.88ZM128,68a43.75,43.75,0,0,0,31.21-13l12,17.1L153.42,100H102.58L84.82,72.12l12-17.1A43.75,43.75,0,0,0,128,68ZM62.31,212l41.31-88h48.76l41.31,88Z"></path></svg><span>Women’s Fashion</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=mombaby-e023180a-a56e-4a10-8a46-5b68b17b1000"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M92,144a16,16,0,1,1,16-16A16,16,0,0,1,92,144Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,112Zm-14.4,49.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84.1,84.1,0,0,0-78.08-83.77c-9.31,14.09-9.89,27-9.92,27.83a4,4,0,0,0,8-.06,12,12,0,0,1,24,0,28,28,0,0,1-56,0c0-.65.1-11.19,5.52-24.92A84,84,0,1,0,212,128Z"></path></svg><span>Mom &amp; Baby</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=healthbeauty-481da272-5f7d-4fd1-96a6-ae3f7a417fca"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M232.76,137.88a28.66,28.66,0,0,0-12-5.39C236.19,114.94,244,97.37,244,80c0-28.67-23.09-52-51.46-52A51.77,51.77,0,0,0,156,42.85,51.77,51.77,0,0,0,119.46,28C91.09,28,68,51.33,68,80c0,10.15,2.72,20.3,8.22,30.7a35.9,35.9,0,0,0-11.73,7.84L43,140H20A20,20,0,0,0,0,160v40a20,20,0,0,0,20,20H120a11.89,11.89,0,0,0,2.91-.36l64-16a11.4,11.4,0,0,0,1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61,28.61,0,0,0,4.57-48.32ZM119.46,52A27.18,27.18,0,0,1,144.9,68.56a12,12,0,0,0,22.2,0A27.18,27.18,0,0,1,192.54,52C207.42,52,220,64.82,220,80c0,18.06-15,38.84-43.38,60.19L172,141.26c0-.42,0-.84,0-1.26a32,32,0,0,0-32-32H102.71C95.42,97.76,92,88.77,92,80,92,64.82,104.58,52,119.46,52ZM24,164H36v32H24Zm193.68.61-37.51,16L118.52,196H60V157l21.46-21.46A11.93,11.93,0,0,1,89.94,132H140a8,8,0,0,1,0,16H112a12,12,0,0,0,0,24h32a12.19,12.19,0,0,0,2.69-.3l67-15.41.47-.12a4.61,4.61,0,0,1,5.82,4.44A4.58,4.58,0,0,1,217.68,164.61Z"></path></svg><span>Health &amp; Beauty</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=electronicdevices-1d92bfaf-96c8-425f-9d79-32d9222e3f2e"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M192,20H64A20,20,0,0,0,44,40V216a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V40A20,20,0,0,0,192,20Zm-4,192H68V44H188ZM112,76a16,16,0,1,1,16,16A16,16,0,0,1,112,76Zm16,120a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,196Zm0-64a20,20,0,1,1-20,20A20,20,0,0,1,128,132Z"></path></svg><span>Electronic Devices</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=gadgets-2cc63e96-3082-4d1f-a78d-0f4ef3effb95"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M156,224a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,224ZM128,116a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm99.53,40.7-12.36,55.63a19.9,19.9,0,0,1-12.88,14.53A20.16,20.16,0,0,1,195.6,228a19.87,19.87,0,0,1-12.29-4.27L157.17,204H98.83L72.69,223.74A19.87,19.87,0,0,1,60.4,228a20.16,20.16,0,0,1-6.69-1.15,19.9,19.9,0,0,1-12.88-14.53L28.47,156.7a20.1,20.1,0,0,1,4.16-17.14l27.83-33.4A127,127,0,0,1,69.11,69.7c13.27-33.25,37-54.1,46.64-61.52a20,20,0,0,1,24.5,0c9.6,7.42,33.37,28.27,46.64,61.52a127,127,0,0,1,8.65,36.46l27.83,33.4A20.1,20.1,0,0,1,227.53,156.7ZM101.79,180h52.42c19.51-35.7,23-69.78,10.39-101.4C154.4,53,136.2,35.9,128,29.12,119.8,35.9,101.6,53,91.4,78.6,78.78,110.22,82.28,144.3,101.79,180Zm-22.55,8.72a168,168,0,0,1-16.92-47.3l-10,12,10.58,47.64Zm124.43-35.31-10-12a168,168,0,0,1-16.92,47.3l16.33,12.33Z"></path></svg><span>Gadgets</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=homeappliances-8e1b91a5-58ff-4e1b-8c43-304bae5bdcb6"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M216,36H140V24a12,12,0,0,0-24,0V36H40A20,20,0,0,0,20,56V176a20,20,0,0,0,20,20H71l-16.4,20.5a12,12,0,0,0,18.74,15l28.4-35.5h52.46l28.4,35.5a12,12,0,0,0,18.74-15L185,196h31a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36Zm-4,136H44V60H212Z"></path></svg><span>Home Appliances</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=foodbeverage-bfeac401-5bcd-40fc-8d71-c33cf6db1a7b"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M212,86.7a84,84,0,0,0-168,0A28,28,0,0,0,56,140h1l60.54,106a12,12,0,0,0,20.84,0L199,140h1a28,28,0,0,0,12-53.3ZM128,215.81,84.68,140h26.07L141,193Zm26.86-47L138.39,140h32.93ZM200,116H56a4,4,0,0,1,0-8A12,12,0,0,0,68,96V88a60,60,0,0,1,120,0v8a12,12,0,0,0,12,12,4,4,0,0,1,0,8Z"></path></svg><span>Food &amp; Beverage</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=sportsoutdoor-5e98494a-b09b-4723-bcb6-99b961c962cf"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM60,177.28A83.59,83.59,0,0,1,44.87,140H75.14A83.1,83.1,0,0,1,60,177.28ZM44.87,116A83.59,83.59,0,0,1,60,78.72,83.1,83.1,0,0,1,75.14,116ZM116,211.13a83.63,83.63,0,0,1-39-16.46A106.94,106.94,0,0,0,99.34,140H116ZM116,116H99.34A106.94,106.94,0,0,0,77,61.33a83.63,83.63,0,0,1,39-16.46Zm80-37.28A83.59,83.59,0,0,1,211.13,116H180.86A83.1,83.1,0,0,1,196,78.72ZM140,211.13V140h16.66A106.94,106.94,0,0,0,179,194.67,83.63,83.63,0,0,1,140,211.13ZM156.66,116H140V44.87a83.63,83.63,0,0,1,39,16.46A106.94,106.94,0,0,0,156.66,116ZM196,177.28A83.1,83.1,0,0,1,180.86,140h30.27A83.59,83.59,0,0,1,196,177.28Z"></path></svg><span>Sports &amp; Outdoor</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=musicalinstruments-15688f58-a053-457a-b139-09f32f8e3593"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M92.49,187.5a12,12,0,1,1-17,17l-24-24a12,12,0,0,1,17-17ZM112,120a24,24,0,1,0,24,24A24,24,0,0,0,112,120ZM252.49,60.48a12,12,0,0,1-14.12,2.12L182,119a73.13,73.13,0,0,1,5.36,18.68c2.51,17.58-2.2,33.35-13.27,44.42a46.11,46.11,0,0,1-15.73,10.29,4.32,4.32,0,0,0-2.39,4c-.53,15.61-6.16,29.22-16.28,39.34C129,246.37,114.5,252,98.13,252a76.73,76.73,0,0,1-10.77-.78c-19.47-2.78-38.73-12.85-54.23-28.35S7.56,188.11,4.78,168.64c-3-20.75,2.56-39.34,15.55-52.33C30.45,106.19,44.06,100.56,59.67,100a4.32,4.32,0,0,0,4-2.39A46.11,46.11,0,0,1,73.93,81.91C85,70.84,100.77,66.13,118.35,68.64A73.13,73.13,0,0,1,137,74L193.4,17.63A12,12,0,0,1,212.49,3.51l40,40A12,12,0,0,1,252.49,60.48ZM221,46,210,35,191,54l11,11Zm-74.31,63.28C135.53,98.09,121.39,92,109.34,92c-7.29,0-13.81,2.21-18.44,6.85A22.16,22.16,0,0,0,86,106.47,28.23,28.23,0,0,1,60.48,124h0c-6.57.22-15.93,2-23.18,9.26-7.52,7.52-10.63,18.87-8.76,32,2.05,14.37,9.71,28.81,21.56,40.66s26.29,19.51,40.66,21.56c13.09,1.87,24.44-1.24,32-8.76,7.25-7.25,9-16.61,9.26-23.18A28.23,28.23,0,0,1,149.53,170a22.16,22.16,0,0,0,7.59-4.94C169.43,152.79,164.67,127.23,146.72,109.28ZM169,98.07,185,82,174,71,157.93,87c2,1.67,3.9,3.42,5.76,5.27S167.29,96.09,169,98.07Z"></path></svg><span>Musical Instruments</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=bookslibrary-7eec06de-696d-447f-91e2-2526af1cf40c"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z"></path></svg><span>Books Library</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=fabricshometextile-0a2ac640-5415-4536-9e2b-e196c0efd9d0"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M236,104a36,36,0,0,0-48-33.94V56a36,36,0,0,0-60-26.8A36,36,0,0,0,70.06,68H56a36,36,0,0,0-26.8,60A36,36,0,0,0,68,185.94V200a36,36,0,0,0,60,26.8A36,36,0,0,0,185.94,188H200a36,36,0,0,0,26.8-60A35.82,35.82,0,0,0,236,104ZM200,92a12,12,0,0,1,0,24H188V104A12,12,0,0,1,200,92ZM152,44a12,12,0,0,1,12,12v48a12,12,0,0,1-12,12H140V56A12,12,0,0,1,152,44ZM92,56a12,12,0,0,1,24,0V68H104A12,12,0,0,1,92,56ZM56,92h48a12,12,0,0,1,12,12v12H56a12,12,0,0,1,0-24Zm0,72a12,12,0,0,1,0-24H68v12A12,12,0,0,1,56,164Zm48,48a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h12v60A12,12,0,0,1,104,212Zm60-12a12,12,0,0,1-24,0V188h12A12,12,0,0,1,164,200Zm36-36H152a12,12,0,0,1-12-12V140h60a12,12,0,0,1,0,24Z"></path></svg><span>Fabrics &amp; Home Textile</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=handicraft-a9c40216-0dc2-4d8a-8aef-8ebd93efab69"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M200,144H129l21.24-21.25a60.11,60.11,0,0,0,24,5.22,51.69,51.69,0,0,0,27-7.54c24-14.57,37-47.79,34.54-88.87a12,12,0,0,0-11.27-11.27c-41.09-2.41-74.31,10.49-88.87,34.54-9.24,15.24-10,33.4-2.33,51L120,119l-11.14-11.13c4.94-12.89,4-26.12-2.76-37.36C95,52.25,70.12,42.4,39.49,44.21A12,12,0,0,0,28.21,55.48c-1.8,30.64,8,55.54,26.32,66.61a40.27,40.27,0,0,0,21,5.9,45.58,45.58,0,0,0,16.31-3.13L103,136l-8,8H56a12,12,0,0,0,0,24h7.27l11.63,52.34A19.89,19.89,0,0,0,94.42,236h67.17a19.88,19.88,0,0,0,19.52-15.66L192.74,168H200a12,12,0,0,0,0-24ZM156.1,67.26C164.8,52.89,185.29,44.5,212,44c-.48,26.69-8.87,47.18-23.25,55.89-9.43,5.71-20.45,5.48-32-.62C150.61,87.71,150.39,76.69,156.1,67.26ZM85.51,101.5c-5.23,2.53-12,4-18.54.07-8.47-5.13-13.81-17.48-14.8-33.4,15.93,1,28.27,6.32,33.4,14.79C89.51,89.48,88,96.27,85.51,101.5ZM158.38,212H97.62l-9.77-44h80.31Z"></path></svg><span>Handicraft</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=medicalequipments-a6c05d6a-49c7-40d1-9632-fe495ab53576"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M71.76,140H31.7a12,12,0,1,1,0-24H65.33L77.78,97.34a12,12,0,0,1,20,0l22,33,6-9a12,12,0,0,1,10-5.34h24a12,12,0,1,1,0,24h-17.6l-12.46,18.66a12,12,0,0,1-20,0l-22-33-6,9A12,12,0,0,1,71.76,140ZM177.91,28c-20.12,0-38,7.93-50.07,21.56C115.74,35.93,97.89,28,77.76,28A66,66,0,0,0,12.07,86.68,12,12,0,0,0,36,89.32,42,42,0,0,1,77.76,52c17.83,0,32.75,9.4,38.95,24.54a12,12,0,0,0,22.25,0C145.16,61.4,160.08,52,177.91,52A42.08,42.08,0,0,1,220,94c0,29.42-25.86,57.77-47.56,76.36a329,329,0,0,1-44.58,31.81c-10.87-6.45-35.37-22-56.51-42.73a12,12,0,1,0-16.84,17.12c30.39,29.81,66.15,49.2,67.66,50a12.06,12.06,0,0,0,11.39,0C138,224.14,244,166.34,244,94A66.12,66.12,0,0,0,177.91,28Z"></path></svg><span>Medical Equipments</span></a> <GoChevronRight /></li><li className="dropMenu"><a href="/product/?c=zonesparksspecial-93feefb6-19b4-43c4-ba1c-7a050d9c3a4a"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M243,96.05a20,20,0,0,0-17.26-13.72l-57-4.93-22.3-53.14h0a20,20,0,0,0-36.82,0L87.29,77.4l-57,4.93A20,20,0,0,0,18.87,117.4l43.32,37.8-13,56.24A20,20,0,0,0,79,233.1l49-29.76,49,29.76a20,20,0,0,0,29.8-21.66l-13-56.24,43.32-37.8A20,20,0,0,0,243,96.05Zm-66.75,42.62a20,20,0,0,0-6.35,19.63l11.39,49.32-42.94-26.08a19.9,19.9,0,0,0-20.7,0L74.71,207.62,86.1,158.3a20,20,0,0,0-6.35-19.63L41.66,105.44,91.8,101.1a19.92,19.92,0,0,0,16.69-12.19L128,42.42l19.51,46.49A19.92,19.92,0,0,0,164.2,101.1l50.14,4.34Z"></path></svg><span>Zone Sparks Special</span></a> <GoChevronRight /></li>
        </ul>
    )
}
