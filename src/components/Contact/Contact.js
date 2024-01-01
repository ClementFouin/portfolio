export default function Contact() {
  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const formData = new FormData(e.target);

    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    fetch('http://localhost:3200/api/contact/send/', {
      method: "POST",
      body: JSON.stringify(object),
      headers: { 'Content-Type': 'application/json' }
    });  

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
  }

 

  return (
    <div>
      <h1>Me Contacter</h1>
     <form method="post" onSubmit={handleSubmit}>
       <input type="text" name="name"/>
       <input type="text" name="surname"/>
       <input type="email" name="email"/>
       <input type="tel" name="phone"/>
       <input type="text" name="subject"/>
       <textarea name="message"></textarea>
       <button type="submit">Envoyer</button>
     </form>
    </div>
    
  );
}