const userSocialMedias = {
  github: 'Jessica-Niide',
  youtube: '',
  facebook: 'jessica.niide',
  instagram: 'jessicaniide',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const socialMedia = li.getAttribute('class')
    li.children[0].href = `https://${socialMedia}.com/${userSocialMedias[socialMedia]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userPhoto.src = data.avatar_url
      userName.textContent = data.name
      userGithub.href = data.url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}
getGithubProfileInfos()

const cardContent = document.querySelector('.content')

function getFunInfos() {
  const jokesApi = 'https://geek-jokes.sameerkumar.website/api?format=json'
  fetch(jokesApi)
    .then(response => response.json())
    .then(data => (funUserBio.textContent = data.joke))
}

getFunInfos()

function flipCard() {
  cardContent.classList.toggle('flipped')
}

flipBack.addEventListener('click', flipCard)
flipFront.addEventListener('click', flipCard)
