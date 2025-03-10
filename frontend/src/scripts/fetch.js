export default async function fetchData(){
    console.log("Called")
    const url = "http://localhost:3000/books"
  
    try{
      const content = await fetch(url)
      const data = await content.json();
          console.log('Dados recebidos:', data);
        return data
    }catch(error){
      console.error(error)
    }
  }
