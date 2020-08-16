
let x = document.querySelector('.the_w')


sheet_array = ['Float like a butterfly, sting like a bee. His hands can\'t hit what his eyes can\'t see. Now you see me, now you don\'t.',
    'Service to others is the rent you pay for your room here on earth.',
    'I\'m young; I\'m handsome; I\'m fast. I can\'t possibly be beat.',
    'Don’t count the days; make the days count.',
    'If my mind can conceive it, and my heart can believe it—then I can achieve it.',
    'It\'s hard to be humble when you\'re as great as I am.',
    'It isn’t the mountains ahead to climb that wear you out; it’s the pebble in your shoe.',
    'If you even dream of beating me you\'d better wake up and apologize.',
    'Braggin\' is when a person says something and can’t do it. I do what I say.',
    'I am the greatest, I said that even before I knew I was.',
    'I\'m so mean, I make medicine sick.',
    'I should be a postage stamp. That\'s the only way I\'ll ever get licked.',
    'He who is not courageous enough to take risks will accomplish nothing in life.',
    'A man who views the world the same at 50 as he did at 20 has wasted 30 years of his life.',
    'If they can make penicillin out of moldy bread, they can sure make something out of you.',
    'I shook up the world. Me! Whee!',
    'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.',
    'At home I am a nice guy: but I don’t want the world to know. Humble people, I’ve found, don’t get very far.',
    'A man who has no imagination has no wings.',
    'He’s (Sonny Liston) too ugly to be the world champ. The world champ should be pretty like me!',
    'I am the astronaut of boxing. Joe Louis and Dempsey were just jet pilots. I\'m in a world of my own.',
    'I’ve wrestled with alligators. I’ve tussled with a whale. I done handcuffed lightning. And throw thunder in jail.',
    'Hating people because of their color is wrong. And it doesn\'t matter which color does the hating. It\'s just plain wrong.',
    'It’s not bragging if you can back it up.',
    'It\'s just a job. Grass grows, birds fly, waves pound the sand. I beat people up.',
    'I’m not the greatest, I’m the double greatest.',
    'Live everyday as if it were your last because someday you\'re going to be right.'
]


let rand_num3 = Math.floor(Math.random() * sheet_array.length)



x.innerHTML = sheet_array[rand_num3]