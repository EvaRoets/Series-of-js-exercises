const body = document.body;
body.classList.add("holygrail-container");
body.style.display = "grid";
body.style.gridTemplateColumns = "1fr";
body.style.gridTemplateRows = "1fr auto 1fr";
body.style.gridTemplateAreas = '"header" "holygrailBody" "footer"';
body.style.fontFamily = "Arial, serif";
body.style.color = "white";

const divHeader = document.createElement("div");
divHeader.classList.add("header");
body.appendChild(divHeader);

const header = document.createElement("header");
header.innerText = "Holy Grail - DOM manipulation";
header.style.gridArea = "header";
header.style.backgroundColor = "#ffc996";
header.style.fontSize = "25px";
header.style.textAlign = "center";
header.style.padding = "10px";
divHeader.appendChild(header);

const holygrailBody = document.createElement("div");
holygrailBody.classList.add("holygrailBody");
holygrailBody.style.display = "grid";
holygrailBody.style.gridArea = "holygrailBody";
holygrailBody.style.gridTemplateColumns = "1fr 3fr 1fr";
holygrailBody.style.gridTemplateRows = "1fr";
holygrailBody.style.gridTemplateAreas = '"holygrailNav" "main" "aside"';
holygrailBody.style.fontSize = "12px";
holygrailBody.style.paddingTop = "10px";
holygrailBody.style.paddingBottom = "10px";
body.appendChild(holygrailBody);

const holygrailNav = document.createElement("nav");
holygrailNav.classList.add("holygrailNav");
holygrailNav.style.backgroundColor = "#ff749c"
holygrailNav.style.padding = "10px";
holygrailBody.appendChild(holygrailNav);

const listNav = document.createElement("ul");
holygrailNav.appendChild(listNav);

const listItem1Nav = document.createElement("li");
listNav.appendChild(listItem1Nav);

const link1 = document.createElement("a");
link1.innerText = "The Turkish Angora";
link1.href = "https://en.wikipedia.org/wiki/Turkish_Angora";
listItem1Nav.appendChild(link1);

const listItem2Nav = document.createElement("li");
listNav.appendChild(listItem2Nav);

const link2 = document.createElement("a");
link2.innerText = "Bob The Bengal";
link2.href = "https://www.instagram.com/bobcatbengal/";
listItem2Nav.appendChild(link2);

const main = document.createElement("main");
main.classList.add("holygrail-content");
main.style.backgroundColor = "#ff8474";
main.style.textAlign = "justify";
main.style.padding = "10px";
holygrailBody.appendChild(main);

const h1 = document.createElement("h1");
h1.innerText = "Ocicat";
main.appendChild(h1);

const h2= document.createElement("h2");
h2.innerText = "Panther munchkin turkish angora puma";
main.appendChild(h2);

const paragraph1 = document.createElement("p");
paragraph1.innerText = "Cat ipsum dolor sit amet, kitty. Sphynx bobcat bengal. Lion grimalkin yet manx tiger and cougar munchkin, for bengal. Malkin bobcat british shorthair yet abyssinian and bengal savannah. Bobcat grimalkin yet manx for himalayan birman grimalkin tabby. Mouser american shorthair. Balinese . Thai ocicat so leopard and ragdoll. Russian blue malkin for cornish rex but malkin devonshire rex bobcat. Cheetah sphynx savannah for ocicat."
main.appendChild(paragraph1);

const paragraph2 = document.createElement("p");
paragraph2.innerText = "Munchkin munchkin for cornish rex. American shorthair ocelot. British shorthair bengal.Tomcat ocicat maine coon but tiger but ragdoll grimalkin tiger. Singapura bombay malkin. Bengal tabby so tabby turkish angora for jaguar and ocelot. Ocelot."
main.appendChild(paragraph2);

const paragraph3 = document.createElement("p");
paragraph3.innerText = "Russian blue cheetah and balinese . Kitten tiger manx. Tabby mouser leopard. American shorthair. Tiger tiger."
main.appendChild(paragraph3);

const aside = document.createElement("aside");
aside.classList.add("holyGrailAds");
aside.style.backgroundColor = "#ff749c"
aside.style.padding = "10px";
holygrailBody.appendChild(aside);

const imgSide = document.createElement("img");
imgSide.src = "ocicat.png";
imgSide.alt = "Ocicat";
imgSide.style.width = "200px";
imgSide.style.height = "auto";
imgSide.style.justifyContent = "center";
imgSide.style.alignItems = "center";
aside.appendChild(imgSide);

const divFooter = document.createElement("div");
divFooter.classList.add("footer");
body.appendChild(divFooter);

const footer = document.createElement("footer")
footer.innerHTML = "&#174; Eva Roets 2021";
footer.style.gridArea = "footer";
footer.style.backgroundColor = "#ffc996";
footer.style.textAlign = "center";
footer.style.fontSize = "12px";
footer.style.padding = "10px";
divFooter.appendChild(footer);

const buttonBox = document.createElement("div")
buttonBox.style.display = "flex";
buttonBox.style.flexWrap = "wrap";
buttonBox.style.flexDirection = "column";
buttonBox.style.alignContent = "center";
paragraph3.insertAdjacentElement("afterend", buttonBox);

const button1 = document.createElement("button")
button1.setAttribute("id", "button1");
button1.innerHTML = "Create new section"
button1.style.textAlign = "center"
button1.style.marginLeft = "10px auto 10px auto"
button1.style.padding = "10px"
buttonBox.appendChild(button1)

const button2 = document.createElement("button")
button2.setAttribute("id", "button2");
button2.innerHTML = "Create an alert box"
button2.style.textAlign = "center"
button2.style.margin = "10px auto 10px auto"
button2.style.padding = "10px"
buttonBox.appendChild(button2)

document.getElementById("button1").addEventListener("click", () => {
    let section = document.createElement("section")
    section.innerHTML = "This is a <b>new section</b>, created by clicking the above button."
    button1.insertAdjacentElement("afterend", section);

});

document.getElementById("button2").addEventListener("click", () => {
    alert ("Howdy, you made this alert box appear out of thin air!");
});




