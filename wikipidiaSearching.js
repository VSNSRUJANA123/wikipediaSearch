let inputID = document.getElementById("inputID");
let resultCont = document.getElementById("resultCont");
let spinnerID = document.getElementById("spinnerID");

function createAppendsearchResults(result) {
    let {
        title,
        link,
        description
    } = result;
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("result-item");
    let titlelink = document.createElement("a");
    titlelink.classList.add("result-title");
    titlelink.href = link;
    titlelink.textContent = title;
    titlelink.target = "_blank";
    containerDiv.appendChild(titlelink);
    let breakE1 = document.createElement("br");
    containerDiv.appendChild(breakE1);
    let linkE1 = document.createElement("a");
    linkE1.classList.add("result-url");
    linkE1.href = link;
    linkE1.target = "_blank";
    linkE1.textContent = link;
    containerDiv.appendChild(linkE1);
    let linkBreak = document.createElement("br");
    containerDiv.appendChild(linkBreak);
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    containerDiv.appendChild(descriptionEl);
    resultCont.appendChild(containerDiv);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
        createAppendsearchResults(result);
        spinnerID.classList.add("d-none");
    }
}
let searchWikipedia = (event) => {
    if (event.key === "Enter") {
        resultCont.textContent = "";
        spinnerID.classList.toggle("d-none");
        let searchInput = inputID.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
inputID.addEventListener("keydown", searchWikipedia);