
const contact = (() =>{
    
    
    function mainContent(){
        return(_textBox());

    }
    
    function _textBox(){
        let box = document.createElement("div");
        box.className = "text-box";

        let title = document.createElement("h1");
        title.textContent = "How to reach us";
        let contacts = document.createElement("p");
        contacts.textContent = "number - 123456789       number - 987654321";
        let location = document.createElement("p");
        location.textContent = " location: haverest mountain";

        box.appendChild(title);
        box.appendChild(contacts);
        box.appendChild(location);

        return box;

    }

   



    

    return{
        main:mainContent,
    }
})();



export default contact;