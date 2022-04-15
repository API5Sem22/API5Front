const baseApi = 'https:datawarriors-back.herokuapp.com/';
export default {
  getSingleUser(value) {
    this.messages = [];
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    // GET request using fetch with error handling
    fetch(`${baseApi}usuarios/${value}`, { headers })
      .then(async response => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

      })
      .catch(error => {
        this.messages.push('Algo deu errado, tente novamente. Caso o erro persista contate o admin');
        console.log(error);
      });
  }
}