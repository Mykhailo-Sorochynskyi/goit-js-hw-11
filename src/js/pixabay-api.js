export function fetchImages(userInput) {
  const keyApi = '46450573-9b5e41256c0ad0f1dd9121c30';
  let url = `https://pixabay.com/api/?key=${keyApi}&q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
}
