'use strict'

if (!window.location.href.includes('?lang=')) {
  window.location.href = window.location.href + '?lang=en'
}

const lang = window.location.href.match(/\?lang=(en|hu)/) ? window.location.href.match(/\?lang=(en|hu)/)[1] : 'en'

const getContent = async () => {
  let content
  const response = await fetch('i18n.json')
  await response.json().then(data => (content = data[0]))

  for (const item of Object.keys(content)) {
    if (!item.includes('ul-')) {
      document.getElementById(item).innerText = content[item][lang]
    } else {
      document.getElementById(item).innerHTML = `${content[item][lang].map(el => `<li>${el}</li>`).join('')}`
    }
  }
}
getContent()