const keybindsVK = {
  Stage: 81, // Light stage modifier
  Tone1: 49, // Siren tone 1
  Tone2: 50, // Siren tone 2
  Tone3: 51, // Siren tone 3
  Tone4: 52, // Siren tone 4
  Tone5: 53, // Random siren tone every 5 seconds
  Tone6: 54, // Auxiliary siren (tone 1)
}

const keybindsControls = {
  Horn: [13, 51] // Horn
}

const sirenTones = {
  tone1: 'VEHICLES_HORNS_SIREN_1', // Siren tone 1
  tone2: 'VEHICLES_HORNS_SIREN_2', // Siren tone 2
  tone3: 'VEHICLES_HORNS_POLICE_WARNING', // Siren tone 3
  tone4: 'VEHICLES_HORNS_AMBULANCE_WARNING', // Siren tone 4
  aux: 'VEHICLES_HORNS_SIREN_1', // Auxiliary Siren
  horn: 'SIRENS_AIRHORN' // Horn
}

const keyTimeout = 350 // Milliseconds

let wasSent = false
let wasSentInterval = setInterval(() => {
  wasSent = false
}, keyTimeout)

mp.events.add('tick', () => {
  for (const [key, keyCode] of Object.entries(keybindsVK)) {
    const isKeyDown = mp.keys.isDown(keyCode)
    const isControlDown = mp.keys.isDown(17)
    if (isKeyDown && !isControlDown) {
      if (!wasSent) {
        mp.events.call(`input${key}`)
        wasSent = true
      }
    } else if (isKeyDown && isControlDown) {
      if (!wasSent) {
        mp.events.call(`inputWithModif${key}`)
        wasSent = true
      }
    }
 }

for (const [key, [keyCode1, keyCode2]] of Object.entries(keybindsControls)) {
const isKeyDown1 = mp.keys.isDown(keyCode1)
const isKeyDown2 = mp.keys.isDown(keyCode2)
if (isKeyDown1 && isKeyDown2) {
if (!wasSent) {
mp.events.call(input${key})
wasSent = true
     }
   }
}

const currentTime = Date.now()
if (currentTime - lastSirenToneTime >= 5000) {
lastSirenToneTime = currentTime
mp.events.call(input${sirenTones.tone5})
}
})

mp.events.add('inputHorn', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.horn, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone1', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.tone1, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone2', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.tone2, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone3', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.tone3, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone4', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.tone4, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone5', () => {
const randomToneIndex = Math.floor(Math.random() * 4) + 1
const randomToneKey = tone${randomToneIndex}
const randomTone = sirenTones[randomToneKey]
mp.game.audio.playSoundFrontend(-1, randomTone, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputTone6', () => {
mp.game.audio.playSoundFrontend(-1, sirenTones.aux, 'SIRENS_SWITCHES_SHORTSOUNDSET')
})

mp.events.add('inputWithModifTone1', () => {
mp.game.graphics.notify('Tone 1 with modifier pressed')
})

mp.events.add('inputWithModifTone2', () => {
mp.game.graphics.notify('Tone 2 with modifier pressed')
})

mp.events.add('inputWithModifTone3', () => {
mp.game.graphics.notify('Tone 3 with modifier pressed')
})

mp.events.add('inputWithModifTone4', () => {
mp.game.graphics.notify('Tone 4 with modifier pressed')
})

mp.events.add('inputWithModifTone5', () => {
mp.game.graphics.notify('Tone 5 with modifier pressed')
})

mp.events.add('inputWithModifTone6', () => {
mp.game.graphics.notify('Auxiliary siren with modifier pressed')
})
