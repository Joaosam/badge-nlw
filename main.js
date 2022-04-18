const userSocialMedia = {
  github: 'Joaosam',
  youtube: 'joao99jp',
  instagram: 'jpms_jp',
  facebook: 'joaopedro.mendes.161',
  twitter: 'joaosan_jp'
}

function changeSocialMediaLinks() {
  // Crio um laço buscando as tags filhas do id socialMediaLinks
  for (let li of socialMediaLinks.children) {
    // Acesso as classes de cada filha
    const social = li.getAttribute('class')
    // Acesso o primeiro elemento da respectiva classe e atribuo a rede social e usuário aos links. O "userSocialMedia[social]" faz o seguinte. Olho o objeto userSocialMedia e verifico qual o usuário da rede social em questão.
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubUserInfo() {
  // Acesso a API do github, endpoint users, atribuindo o usuário através do objeto userSocialMedia
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  // Consumo a API
  fetch(url)
    // Caso ok então converto o conteúdo da API para JSON
    .then(responseApi => responseApi.json())
    // Substituo as informações do usuário pelos valores da API através da DOM
    .then(responseApiJson => {
      userName.textContent = responseApiJson.name
      userBio.textContent = responseApiJson.bio
      userLogin.textContent = responseApiJson.login
      userUrlGithub.href = responseApiJson.html_url
      userPhoto.src = responseApiJson.avatar_url
    })
}
getGitHubUserInfo()
