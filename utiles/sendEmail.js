
export async function sendEmail(data) {
  const apiEndpoint = '/api/email';
  console.log("from utils")

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log('from utils', response)
      console.log(response.message)
    })
    .catch((err) => {
      console.log('from utils', err)
      // alert(err);
    });
};