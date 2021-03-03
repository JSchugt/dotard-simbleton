import { businesses } from "./Business.js";

function getAddressData(element){
    return `
        <div class="Customer">
        <h2 class="compNam">${element.companyName}</h2>
        <div>${element.addressFullStreet}</div>
        <div>${element.addressCity} ${element.addressStateCode}, ${element.addressZipCode}</div>
        </div>`;
}

const getCompany = () => {
    const DOMLocation = document.querySelector("#CustomerAddress");
    let htmlRep = "<section>";
    businesses.forEach(x => {
        htmlRep += getAddressData(x);
    });
    htmlRep += "</section>";
    DOMLocation.innerHTML += htmlRep;

}

getCompany();