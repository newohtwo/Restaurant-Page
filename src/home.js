

const home = (() =>{
    
    
    function mainContent(){
        let container = document.createElement("div");
        container.className = "main-content";

        container.appendChild(_imgs());
        container.appendChild(_text());
        return container;

    }
    

    function _imgs(){
        let flexContainer = document.createElement("div");
        flexContainer.className = "content-img";

        let img1 = document.createElement("img");
        img1.src = "/imgs/sweet1.jpg";
        img1.className = "img";

        let img2 = document.createElement("img");
        img2.src = "/imgs/sweet2.jpg";
        img2.className = "img";

        flexContainer.appendChild(img1);
        flexContainer.appendChild(img2);
        return flexContainer;

    }

    function _text(){
        let mainText = document.createElement("p");
        mainText.textContent = "some words about food and how we make it, we are the best at make food.";
        return mainText;

    }



    

    return{
        main:mainContent,
    }
})();



export default home;