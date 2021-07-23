const body = document.querySelector("body");
body.classList.add("holygrail-container");

const divHeader = document.createElement("div");
divHeader.classList.add("header");

const header = document.createElement("header");
header.innerText = "Holy Grail - DOM manipulation"

const holygrailBody = document.createElement("div");
holygrailBody.classList.add("holygrailBody")

const holygrailNav = document.createElement("nav");
holygrailNav.classList.add("holygrailNav");

const listNav = document.createElement("ul");
const listItemNav = document.createElement("li");

const link1 = document.createElement("a");
link1.innerText = "The Turkish Angora";
link1.href = "https://en.wikipedia.org/wiki/Turkish_Angora";

const link2 = document.createElement("a");
link2.innerText = "Bob The Bengal";
link2.href = "https://www.instagram.com/bobcatbengal/";

const main = document.createElement("main");
main.classList.add("holygrail-content");

const h1Nav = document.createElement("h1");
h1Nav.innerText = "Ocicat";

const h2Nav= document.createElement("h2");
h2Nav.innerText = "Panther munchkin turkish angora puma";

const paragraph1 = document.createElement("p");
paragraph1.innerText = "Cat ipsum dolor sit amet, kitty. Sphynx bobcat bengal. Lion grimalkin yet manx tiger and cougar munchkin, for bengal. Malkin bobcat british shorthair yet abyssinian and bengal savannah. Bobcat grimalkin yet manx for himalayan birman grimalkin tabby. Mouser american shorthair. Balinese . Thai ocicat so leopard and ragdoll. Russian blue malkin for cornish rex but malkin devonshire rex bobcat. Cheetah sphynx savannah for ocicat."

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Munchkin munchkin for cornish rex. American shorthair ocelot. British shorthair bengal.Tomcat ocicat maine coon but tiger but ragdoll grimalkin tiger. Singapura bombay malkin. Bengal tabby so tabby turkish angora for jaguar and ocelot. Ocelot."

const paragraph3 = document.createElement("p");
paragraph3.innerText = "ussian blue cheetah and balinese . Kitten tiger manx. Tabby mouser leopard. American shorthair. Tiger tiger."

const aside = document.createElement("aside");
aside.classList.add("holyGrailAds")

const imgSide = document.createElement("img");
imgSide.scr = "ocicat.png";
imgSide.alt = "Ocicat";
const divFooter = document.createElement("div");
divFooter.classList.add("footer")

const footer = document.createElement("footer")
footer.innerHTML = "&#174; Eva Roets 2021"











