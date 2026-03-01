globalThis.name = "Global";
const obj = {
  name: "Gaurav",
  show(){  //this = obj
    console.log(this.name); //Gaurav
    function normal(){
      console.log(this.name);
    }
    normal(); 

    const arrow = ()=>{ //this = obj
      console.log(this.name);
    }
    arrow();
  }
}

obj.show();



