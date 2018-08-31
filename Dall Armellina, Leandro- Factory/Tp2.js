// Patrón Factory


function DocumentsFactory(){       
    this.crearDocuments = function(type){
        if (type === "Doc") {
            return Doc();
        }else if (type === "Excel"){
            return Excel();
        }else if (type === "Pdf"){
        	return Pdf();
        };
    }
 
    function Documents(siz,pag,des){
        this.Size =siz;
        this.Pages = pag;
        this.Description = des;
    }
 
    function Doc(){
        return new Documents(1024,45,"Soy un .Doc");
    }
 
    function Excel(){
        return new Documents(4096,58,"Soy un .Excel");
    }

    function Pdf(){
        return new Documents(6666,104,"Soy un .Pdf");
    }
}
 


var factory = new DocumentsFactory();
var document1 = factory.crearDocuments("Pdf");
 


console.log(document1);