export default function Home() {

  function sendEmail() {
    const form = document.querySelector('#form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;

      fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })  
      }).then((response) =>{
        console.log(response)
        alert('Email sent!')
      }).catch((err) => {
        console.log(err)
        alert('Error sending email!')
      })    
    })
  }
  return (
    <div>
      <form id="form">
        <input id="name" placeholder="Seu nome" />
        <br /><br />
        <input id="email" placeholder="Seu email" />
        <br /><br />
        <textarea id="message" placeholder="Digite sua mensagem" />
        <button onClick={sendEmail}>Enviar</button>
      </form>
    </div>
  )
}
