//TODO create here header , nav , footer , main content get from home,contact,menu
//TODO first run of the website shows the home main
import home from "./home";
import menu from "./menu";
import contact from "./contant";
const website = (() =>{

    const contentDiv = document.querySelector("#content");
    const pageContent = document.createElement("div");
    const page = document.createElement("div");
    let currentPage = "";

    //initialize website
    function _init (){
        //append all the needed elements into content
        contentDiv.appendChild(_header());
        contentDiv.appendChild(_page());
        tabClick("Home");
        
        //add here the nav
        //main
        //footer

    }

    function _header(){
        
        let header = document.createElement("header");
        let h1 = document.createElement("h1");
        h1.textContent = "your Resturant";
        header.appendChild(h1);
        return header;
        
    }

    function _page(){
        
        page.className ="page";
        page.appendChild(_nav());
        //add navbar
        
        pageContent.className = "page-content";


        page.appendChild(pageContent);
        return page;
    }

    
    function _nav(){
        
        let tabs = document.createElement("div");
        tabs.className = "tab";



        let homeBtn = document.createElement("button");
        homeBtn.className = "tablinks";
        homeBtn.textContent = "Home";
        homeBtn.onclick = function() {
            tabClick(homeBtn.textContent);
        }
        let menuBtn = document.createElement("button");
        menuBtn.className = "tablinks";
        menuBtn.textContent = "Menu";
        menuBtn.onclick = function() {
            tabClick(menuBtn.textContent);
        }

        let contactBtn = document.createElement("button");
        contactBtn.className = "tablinks";
        contactBtn.textContent = "Contacts";
        contactBtn.onclick = function() {
            tabClick(contactBtn.textContent);
        }

        tabs.appendChild(homeBtn);
        tabs.appendChild(menuBtn);
        tabs.appendChild(contactBtn);
        return tabs;
    
        
    }

    function tabClick(elementId){
        
        switch(elementId){
            case "Home":
               _deletePageContent(elementId) ? pageContent.appendChild(home.main()) :  false;
                currentPage = "Home"; 
                pageContent.style.overflow = "hidden";
                break;
            case "Menu":
               
                _deletePageContent(elementId) ? pageContent.appendChild(menu.main()) :  false;
                pageContent.style.overflow = "scroll";
                currentPage = "Menu"; 
                break;
            case "Contacts":
                _deletePageContent(elementId) ? pageContent.appendChild(contact.main()) : false;
                currentPage = "Contacts"; 
                pageContent.style.overflow = "hidden";
                break;
        }

        
       
       
       //pageContent.parentElement.replaceChild(temp,pageContent);
    }

    function _deletePageContent(name){

        if(currentPage !== name){
            console.log("erasing");
            while(pageContent.firstChild){
                pageContent.firstChild.remove();
            }
            return true;
        }

        return false;
        
        
    }

    
    

    

    
    
      


     



    return{
        init:_init,
    }
})();

export default website;

