
const menu = (() =>{
    
    
    function mainContent(){
      return _gridImages();

    }

    function _gridImages(){
        let row = document.createElement("div");
        row.className = "row";

        let column = document.createElement("div");
        column.className = "column";

        let column2 = document.createElement("div");
        column2.className = "column";

        let img = document.createElement("img");
        img.className = "img-grid";
        

        //img2.src = "/imgs/sweet2.jpg";
        for (let index = 1; index <=6; index++) {
            img.src = `/imgs/image${index}.jpeg`;
           
          if((index % 2) == 1) { 
              column.appendChild(img.cloneNode(true));
            }else {
            column2.appendChild(img.cloneNode(true));
            }

        }
        
        row.appendChild(column);
        row.appendChild(column2);

        return row;
    }
    
    
   // column.appendChild(img) : column2.appendChild(img);
   



    

    return{
        main:mainContent,
    }
})();



export default menu;