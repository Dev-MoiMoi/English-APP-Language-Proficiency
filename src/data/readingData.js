// ─────────────────────────────────────────────
// READING MODULE DATA  (from Reading.docx and user confirmation)
// Each level has: title, intro, stories[], 
// each story: title, text, image, questions[], answerKey[]
// ─────────────────────────────────────────────

import imgTimetable from '../assets/Reading/A2 LEVEL/IMG_9699.PNG';
import imgNoticeboard from '../assets/Reading/B1 LEVEL/IMG_9698.PNG';
import imgTravelGuide from '../assets/Reading/B1 LEVEL/IMG_9700.PNG';

export const READING_DATA = {
  A1: {
    levelLabel: 'A1 – Beginner',
    intro: 'Read short and simple stories, dialogues, and texts specially written for beginner learners. These texts use basic words and short sentences to help you understand everyday situations.',
    stories: [
      {
        title: 'The Death of Charlie Huff',
        text: `The night before, we drove down in my brother’s old Toyota. The heater was broken, so in November, the windscreen fogged up. My brother watched for cars. I watched for signposts.
The funeral was on Thursday. I wore a navy jumper and my good coat. My mother said the Huff men bought new black suits, though they looked shiny and cheap. She had brought them ham sandwiches and a basket of fruit. They ate the sandwiches.

Charlie Huff, who had died aged seventy, did not eat sandwiches. He ate two big dinners a day: meat, potatoes, and onion gravy, along with whole packets of biscuits. He drank Lucozade and Guinness. He ate fruit once a year at the Strawberry Fair in Stradbally. When my brother and I were kids, we sometimes stayed over in the Huff house, and we ate mini pizzas and chips. At home, we asked our mother why we couldn’t have chips for tea. She said we had home‑cut chips on Saturdays. I said it was unfair, and that we should eat like the Huffs.

I sat in the back, my mother in front and my brother drove. The river had burst its banks and flooded Charlie’s fields. I remembered the welcome sign we had once made for our townland; a bridge, rushing water and a trout. Charlie Huff pulled it up and threw it in the river. I was twelve at the time; my brother ten. My brother told him we were joking. Charlie stared at us.

“We were messing,” I said.
He kept staring. “There’ll be no messing around here.”

Charlie had a crest on his lorry; a hound on a red field. In school, Gemma Huff said it was the Huff crest. The teacher showed her a different one in a book; three lions on amber. She said it was the crest of the O’Heachach family, the Gaelic name for Huff. The next wet morning, Charlie parked his lorry across the school gates. The teachers had to park on the road.

We arrived at the house as the men carried the coffin to the hearse.
I said, “Sorry for your troubles,” to the family. I felt embarrassed. I no longer knew them.
We followed the cars to the church.

At the end, Charlie lay in a bed by the range, yellow‑skinned, staring at the ceiling. Before he passed, his sister, Margaret, visited him from Boston.
“Cha,” she said, holding his hand. “Cha.”
This was all she could say. He said nothing.
As we followed the hearse over the bumpy roads, my mother began to cry.

“What’s wrong?” I asked.
“He was such a handsome man,” she said.
“So?”
“So, he got old... I remember when they built the house. We were the only two houses on the lane. You and the Huff girls picked berries. You were so small.”
She covered her face.
“Your grandfather came home this way,” she said.
She meant after he died in the nursing home, twenty years ago. There was a flood then too.
“Sorry,” I said.
I had not expected this. I felt sad for her, for everyone.

We parked beside the village technical school. My brother and I had attended there. Our uncles too. The school was open seventy‑five years. Charlie had attended for three. A row of boys sat on the wall in front. Maroon jumpers stretched at their broad shoulders. It surprised me that the school was open. The bank was open too. But the world did not stop for the death of Charlie Huff.

In church, our neighbours sat at the front. My father sang with the choir. Father Conor said Charlie was known as “Cha”. He said Cha was loved and respected. That he liked tractors and cattle. That he enjoyed a few pints and fun. I could not remember the fun. There was a crowd because the family was big and kind. Charlie was a hard man. But here he sounded like a rogue. Maybe he was. I don’t know.

The Huff women followed the hearse in the undertaker’s car. The men walked behind, down the road then up the long hill to the graveyard. Mist turned to drizzle. The family had no umbrellas.
At the graveyard, Father Conor rushed the blessing. Suit trousers got wet. Rainwater filled shoes and socks. Trucks rattled past and it was difficult to hear. People were unsure if they should go to the hotel for sandwiches. In the car park, my brother swerved to avoid a dog and broke the headlight of a white Range Rover.

As the last of the mourners left the graveside, the dog got in. He jumped up on a woman in heels. The woman slipped in the mud and hurt her foot. Shocked, she was silent for a moment, then cried. The sky opened and I looked to the heavens. For the last time, maybe the first, I felt Charlie Huff smile.`,
        questions: [
          // Task 1: Recall
          { q: "What vehicle did the narrator’s brother drive to the funeral?", options: ["Ford truck", "Old Toyota", "White Range Rover", "School bus"], answer: 1 },
          { q: "What problem did the car have during the trip?", options: ["Broken radio", "Flat tire", "Broken heater", "Broken headlight"], answer: 2 },
          { q: "How old was Charlie Huff when he died?", options: ["Sixty", "Sixty-five", "Seventy", "Seventy-five"], answer: 2 },
          { q: "What kind of food did Charlie Huff usually eat?", options: ["Salads and fruits", "Meat, potatoes, and onion gravy", "Fish and rice", "Bread and soup"], answer: 1 },
          { q: "What drink did Charlie Huff often consume?", options: ["Milk and water", "Juice and tea", "Lucozade and Guinness", "Coffee and soda"], answer: 2 },
          { q: "What did Charlie Huff throw into the river when the boys were young?", options: ["A fishing rod", "A wooden sign", "A welcome sign", "A rope"], answer: 2 },
          { q: "What animal appeared on Charlie Huff’s lorry crest?", options: ["Lion", "Dog (hound)", "Horse", "Bull"], answer: 1 },
          { q: "Who visited Charlie before he passed away?", options: ["His daughter", "His sister Margaret", "His cousin", "His neighbor"], answer: 1 },
          { q: "What nickname was Charlie known by?", options: ["Char", "Chaz", "Cha", "Chief"], answer: 2 },
          { q: "What happened near the end of the story?", options: ["The hearse broke down", "A dog jumped on a woman", "A car ran out of fuel", "A coffin fell"], answer: 1 },
          // Task 2: Comprehension
          { q: "Why did the windscreen fog up during the trip?", options: ["Windows open", "Heater was broken", "Raining heavily", "Car was full"], answer: 1 },
          { q: "How did the narrator feel when speaking to Charlie Huff’s family?", options: ["Angry", "Confident", "Embarrassed", "Excited"], answer: 2 },
          { q: "Why did the narrator’s mother bring sandwiches to the Huff family?", options: ["To celebrate", "To feed mourners", "To show sympathy", "To sell food"], answer: 2 },
          { q: "Why did Charlie Huff pull down the welcome sign made by the boys?", options: ["He liked it", "He thought it was funny", "He disliked messing around", "He wanted to repair it"], answer: 2 },
          { q: "Why did the narrator feel surprised that the school and bank were open?", options: ["Thought they were closed forever", "Expected world to stop for Charlie", "Forgot it was a weekday", "Wanted skip school"], answer: 1 },
          { q: "What made the burial uncomfortable for the mourners?", options: ["Loud music", "Bright sunshine", "Rain and wet clothes", "Strong winds only"], answer: 2 },
          { q: "Why did the narrator’s mother cry during the trip?", options: ["Lost wallet", "Remembered Charlie young", "Disliked funerals", "Angry"], answer: 1 },
          { q: "What accident happened in the car park?", options: ["Car hit tree", "Dog injured", "Range Rover headlight broken", "Hearse stopped"], answer: 2 },
          { q: "What caused the woman in heels to fall?", options: ["Tripped on stone", "Ground cracked", "A dog jumped on her", "Someone pushed her"], answer: 2 },
          { q: "What does the narrator likely mean by feeling Charlie Huff smile at the end?", options: ["Charlie still alive", "Charlie laughing loudly", "Imagined Charlie approving chaos", "Saw ghost"], answer: 2 }
        ],
        answerKey: [1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2],
      },
      {
        title: 'A Good Catch',
        text: `Ken firmly believed that to get ahead in life, one had to prioritise intelligence over morality. To him, the world was divided into two types of people: those who understood how it worked and those who didn’t. The latter were easy to manipulate. He never thought of them as victims—only as people who trusted too easily.

Over the years, he had refined his method into something precise and efficient. Romance scams were not based on luck; they required patience, diligence, and control. He studied his targets carefully, learning their habits, their fears, and, most importantly, their needs. Then he became exactly what they were looking for.

And it worked. Ken had acquired a considerable fortune over the years—more than he could ever need. But money was no longer the main attraction. The thing he relished most was the control: the gradual development of trust, the moment when someone became emotionally reliant on him, and the quiet satisfaction of suddenly vanishing without explanation.

Until one day, something changed. Her name was Elena.

She appeared like many others on a platform he knew well. Her profile was simple but carefully presented. Recently divorced. Independent. Not desperate, but clearly alone. Ken recognised the opportunity immediately. Within a week, she was confiding in him. Within two, she was waiting for his messages.

But there was something different about her. She never rushed. Most people wanted quick emotional connection. Elena didn’t. She responded thoughtfully, listened carefully, but always held something back. One evening, she wrote: “You’re very good with words.” Ken smiled slightly. “Occupational habit,” he replied. “What do you do again?” she asked. “I design skyscrapers.” There was a short pause. Then she answered: “Of course.”

Weeks passed, and he continued building the relationship. Then one evening, she asked: “Have you ever felt guilty?” Ken paused. “About what?” he replied. “About hurting someone,” she wrote. “Everyone hurts someone at some point,” Ken wrote. Then she replied: “Not like you do.” Ken frowned slightly. “You don’t know me that well,” he wrote. Then: “I know exactly who you are, Ken.”

“I’ve spoken to three of them.” Ken’s body went still. “The women you disappeared from,” she replied. This wasn’t possible. He had always been careful.

“I was one of them,” she replied. “They all blur together for you, don’t they?” she wrote. “This conversation is being recorded,” she added. “And sent to others.” “To people who understand consequences.”

For the first time in years, Ken felt afraid. He typed quickly: “We can resolve this.” But there was no reply.

A few days later, there was a knock at his door. Slow. Deliberate. Certain. For years, he had entered other people’s lives without warning. Now, someone had entered his. And this time, there was no escape.`,
        questions: [
          { q: "What belief guided Ken’s actions in life?", options: ["Kindness is more important", "Intelligence over morality", "Honesty leads to wealth", "Trust is key"], answer: 1 },
          { q: "How did Ken usually gain the trust of his victims?", options: ["Threatening them", "Expensive gifts", "Becoming who they needed", "Meeting in person"], answer: 2 },
          { q: "What did Ken enjoy most about his scams?", options: ["Expensive items", "Attention", "Control over others", "Traveling"], answer: 2 },
          { q: "What made Elena different from previous targets?", options: ["Sent money quickly", "Trusted him immediately", "Responded slowly and cautiously", "Refused to talk"], answer: 2 },
          { q: "Why did Ken become irritated with Elena?", options: ["Asked too many questions", "Never trusted him fully", "Stopped replying", "Insulted him"], answer: 1 },
          { q: "What clue made Ken feel something was wrong?", options: ["Elena stopped messaging", "Elena forgot his name", "Elena’s strange response about his job", "Asked for money"], answer: 2 },
          { q: "What shocking truth did Elena reveal?", options: ["Police officer", "Former victim", "Knew his family", "Worked with him"], answer: 1 },
          { q: "What did Elena send Ken that caused fear?", options: ["Video", "Letter", "File with evidence", "Photo of apartment"], answer: 2 },
          { q: "How did Ken feel when he realized he was exposed?", options: ["Happy", "Proud", "Calm", "Afraid"], answer: 3 },
          { q: "What does the knock on Ken’s door symbolize?", options: ["Delivery", "New opportunity", "Arrival of consequences", "Friendly visit"], answer: 2 }
        ],
        answerKey: [1, 2, 2, 2, 1, 2, 1, 2, 3, 2],
      },
      {
        title: "A Reporter's Guide to West Africa",
        text: `I have always been interested in the life and history of West Africa. So I decided to take a tour around the three central countries of the region – Senegal, Mali and Cote d’Ivoire.

I contacted a local travel company and they helped me to plan the tour. They booked the flights, booked the hotels, and found a local guide to help me.

Starting in Dakar in Senegal, we planned a trip across the region through Mali and Cote d’Ivoire and back to Dakar – in a few days.

My guide, Moussa, is an expert in the history and culture of these countries. Born in Dakar, he has lived and worked in all 3 countries. Now he helps tourists and travellers.

First I flew to Dakar in Senegal, and arrived at the new international airport. It is very large and impressive. We met in Dakar on the first day, and I stayed overnight in a 4-star hotel. We had dinner in a restaurant by the sea – we ate ‘mafe’ with chicken, and it was very good. Here we could watch the sun go down – it was beautiful.

On Day 2 we went out into the city to learn about Dakar. We learned about a terrible history. We took a small boat and visited the historical centre on Ile Goree, where people stayed before going to America as slaves. After this we went to the IFAN Museum of African Art to see the work of artists from Senegal.

On Day 3 we took a flight to Bamako, the capital of Mali, and stayed in a historic hotel. It was very comfortable and in the centre of the city. We went to the market, the Marche de Medina. We visited a nice restaurant and also listened to Malian music in a club.

On Day 4 we took a plane to Timbuktu, to see the ancient history and culture of Mali. There we visited the Djinguereber Mosque - it is very old, built in 1325. We also visited the Sankore Mosque and the Ethnological Museum, where we could learn more about the history of Mali.

We stayed two nights in a beautiful hotel, made from a traditional house. It is a fascinating city with a very long history.

Back in Bamako, on Day 6 we took a short plane trip to Abidjan where we visited the capital of. The city has beautiful buildings. We visited the big cathedral, Saint-Paul’s cathedral, and a large mosque. We also went to see the National Museum and the Cocody Museum of Art, and the Cote d’Ivoire Museum of Civilisations.

On Day 6, we left Abidjan, and we flew back to Dakar where the trip ended.

We enjoyed this tour of the heart of West African life. If you want to have the chance to visit new places, try new food, and meet new people, then come and take a tour of West Africa.`,
        questions: [
          { q: 'What is the reporter interested in?', options: ['Animals in Africa', "West Africa's life and history", 'New cars', 'Cooking food'], answer: 1 },
          { q: 'How many countries did the reporter visit?', options: ['Two', 'Three', 'Four', 'Five'], answer: 1 },
          { q: 'Who helped the reporter plan the trip?', options: ['A friend', 'A teacher', 'A travel company', 'A chef'], answer: 2 },
          { q: 'What is the guide\'s name?', options: ['Ali', 'Moussa', 'Omar', 'Karim'], answer: 1 },
          { q: 'Where did the trip start?', options: ['Bamako', 'Abidjan', 'Dakar', 'Timbuktu'], answer: 2 },
          { q: 'What did the reporter see on Ile Goree?', options: ['A big market', 'A place where people stayed before slavery', 'A beautiful beach', 'A new airport'], answer: 1 },
          { q: 'What is the capital city of Mali?', options: ['Timbuktu', 'Dakar', 'Bamako', 'Abidjan'], answer: 2 },
          { q: 'What is the name of a very old building in Timbuktu?', options: ['A hotel', 'A museum', 'Djinguereber Mosque', 'A restaurant'], answer: 2 },
          { q: 'What big church did the reporter visit in Abidjan?', options: ['Saint-Paul’s cathedral', 'Saint Peter\'s church', 'The main temple', 'A small chapel'], answer: 0 },
          { q: 'Where did the trip end?', options: ['Abidjan', 'Timbuktu', 'Bamako', 'Dakar'], answer: 3 },
        ],
        answerKey: [1, 1, 2, 1, 2, 1, 2, 2, 0, 3],
      },
      {
        title: 'Daily Life in London',
        text: `People usually start work in the UK at 9 o’clock. Some people have to start earlier if they work in shops, driving buses and trains, or in hotels. Some people work at home – this is more popular than before. If you have a computer you can work at home and still have a job.

In London and other cities most people have to travel a long way to work. Many people travel about 1 hour to get to work. In London most people travel to work by Tube. This is the train that goes under the ground. It is a very big system – 5 million people use the Tube every day. It has more than 240 stations.

Breakfast is important to start the day. Most people have cereals, fruit, or eggs and sometimes bacon. The famous English breakfast is bacon, eggs and toast. But most people eat healthy breakfasts.

Lunch is usually at 1 o’clock. At work, people usually have a sandwich. At the weekend people eat a big roast dinner with the family and friends.

Dinner is usually at 6 or 7 o’clock, but sometimes at 8. At home people cook many different types of food. Or they pay for food that comes from local restaurants – their food comes by motorbike or car from the local restaurant. It’s called a ‘takeaway’. In London people eat traditional food from Britain, but also a lot of food from other countries. The most popular food in UK is Indian food – spicy food like curry. Food from Thailand, China, Spain and Italy is also very popular. Most people have very international dinners.

Young children start school when they are five years old. They go to a Primary school from age 5 to age 11. They go to secondary school when they are 11 years old. A lot of learners go to university – about 50% of all 18 year olds. University courses are three years long.

People start work at 9 and they work until 5 - but sometimes much later. Most people take half an hour or an hour for lunch. But many have a sandwich and eat in the office.

After work, people in London often go out with friends before they go home. They visit the pubs in the city for a drink and a snack before they go home. London is a big city – it takes an hour or more to go home. So people don’t want to go home first and then come back to the city for a movie or a dinner.

Many people go to the cinema in the evening – there are many cinemas to visit. Some people prefer to go to the theatre – there are a lot of theatres in the city. Some show dramas, some show comedies, some show musicals. The city has many, many restaurants and a lot of people like to meet their friends for dinner.`,
        questions: [
          { q: "What time do people usually start work in the UK?", options: ["7 o'clock", "8 o'clock", "9 o'clock", "10 o'clock"], answer: 2 },
          { q: "How do most people travel to work in London?", options: ["By car", "By bus", "By bicycle", "By Tube"], answer: 3 },
          { q: "What do most people eat for breakfast?", options: ["Pizza", "Cereals, fruit, or eggs", "Indian food", "Sandwiches"], answer: 1 },
          { q: "When is lunch usually eaten?", options: ["1 o'clock", "6 o'clock", "8 o'clock", "9 o'clock"], answer: 0 },
          { q: "What is a \"takeaway\" food?", options: ["Food cooked at home.", "Food eaten in a restaurant.", "Food from local restaurants by motorbike or car.", "Food from a supermarket."], answer: 2 },
          { q: "What is the most popular food in the UK mentioned in the article?", options: ["Chinese food", "Italian food", "Indian food (like curry)", "Thai food"], answer: 2 },
          { q: "When do young children start school?", options: ["Age 3", "Age 5", "Age 11", "Age 18"], answer: 1 },
          { q: "How long are university courses usually?", options: ["One year", "Two years", "Three years", "Four years"], answer: 2 },
          { q: "What do people often do after work in London?", options: ["Go shopping", "Go to the gym", "Visit pubs for a drink and a snack", "Go home to cook dinner"], answer: 2 },
          { q: "What can people do in the evening in London?", options: ["Go to the cinema or theatre", "Go to bed early", "Only stay at home", "Only work more"], answer: 0 }
        ],
        answerKey: [2, 3, 1, 0, 2, 2, 1, 2, 2, 0],
      },
      {
        title: 'New Musicians',
        text: `In Dakar young people enjoy making music. Some African artists want to move to Europe or America. They think it is easier to make music there. Perhaps they will make more money. Other artists decide to stay in Africa. Some live abroad for some years and come back.

Jah Moko was a music producer in France for 10 years. He left and came back to live in Senegal. His band, the Jah Moko Family, is based in Dakar. Jah’s music mixes West African Reggae and Afro-Beat. He likes the sound of traditional music too.

The band comes from all over Africa. Some came to start a new life in Senegal because the situation was bad at home. There are nine members from Mali, Benin, Senegal, Central African Republic and France. The band is really international and they sing in many languages, including French and English.

But it is not easy for a young musician. It is difficult to earn money from making music. It costs a lot of money to have a show in a popular venue. Most young musicians don’t have that kind of money. In the past, artists worked for a record company and the record company paid. Now people use the internet and local radio to contact fans directly. Many have other jobs to pay for their music. For example, the guitar player in The Jah Moko Family is an architect during the day and a musician in the evening.

People know the situation is difficult, but some see a good future in African music. They want to help young people with the same dreams and have started small businesses. An example is Mandinko. This started in the Ouakam district in Dakar. The boss is Freeman. He wants to create a cultural space for new African artists.

The stories people tell in the music are also different now. In the past musicians wrote personal stories. Now people write more about problems in society.`,
        questions: [
          { q: "Where do young people in Dakar enjoy making music?", options: ["In Europe", "In America", "In Dakar", "In Asia"], answer: 2 },
          { q: "Where do some African artists want to move?", options: ["To Australia or Canada", "To Europe or America", "To South America", "To other parts of Africa"], answer: 1 },
          { q: "How long was Jah Moko a music producer in France?", options: ["5 years", "10 years", "15 years", "20 years"], answer: 1 },
          { q: "Where is Jah Moko's band based?", options: ["In Paris", "In London", "In Dakar", "In New York"], answer: 2 },
          { q: "What kind of music does Jah Moko mix?", options: ["Pop and Rock", "Jazz and Blues", "West African Reggae and Afro-Beat", "Classical and Folk"], answer: 2 },
          { q: "How many members are in Jah Moko Family?", options: ["Six", "Seven", "Eight", "Nine"], answer: 3 },
          { q: "Is it easy for a young musician to earn money from music?", options: ["Yes, very easy", "No, it is difficult", "Only in Europe", "Only if famous"], answer: 1 },
          { q: "How do musicians contact fans now?", options: ["Through record companies only", "Using the internet and local radio", "By writing letters", "By calling them"], answer: 1 },
          { q: "What is the guitar player's other job?", options: ["Doctor", "Teacher", "Architect", "Chef"], answer: 2 },
          { q: "What kind of stories do musicians write about now?", options: ["Personal stories only", "More about problems in society", "Only love", "Only happiness"], answer: 1 }
        ],
        answerKey: [2, 1, 1, 2, 2, 3, 1, 1, 2, 1],
      },
      {
        title: 'Weather Report',
        text: `Welcome to the weather forecast. Now, let's see what the weather is like today. In the north of the country it's very windy and cold. There is a chance of some rain too, so don't leave home without your umbrella! The temperature is around 10º centigrade. In the east it's rainy all day today, I'm afraid. There may be a thunderstorm in the afternoon. The temperature is a bit higher, at around 13º. In the west and middle of the country the weather is dry, but cloudy. So no rain for you, but it is quite windy and the temperature is just 10º. The south of the country has the best weather today. It's cloudy most of the time but sunny this afternoon. The temperature is around 15º.`,
        questions: [
          { q: "What is the weather like in the north?", options: ["Sunny and hot", "Windy and cold, with rain chance", "Rainy all day", "Dry and cloudy"], answer: 1 },
          { q: "What should you take if you go north?", options: ["Sunglasses", "An umbrella", "A swimsuit", "Shorts"], answer: 1 },
          { q: "What is the temperature in the north?", options: ["13º", "15º", "10º", "20º"], answer: 2 },
          { q: "What is the weather like in the east?", options: ["Sunny", "Dry", "Rainy all day", "Windy"], answer: 2 },
          { q: "What might happen in the east in the afternoon?", options: ["Snowstorm", "Thunderstorm", "Rainbow", "Strong winds"], answer: 1 },
          { q: "What is the temperature in the east?", options: ["10º", "13º", "15º", "5º"], answer: 1 },
          { q: "Is it raining in the west and middle?", options: ["Yes", "No, it is dry", "Only morning", "Only afternoon"], answer: 1 },
          { q: "What is the temperature in the west and middle?", options: ["15º", "13º", "10º", "25º"], answer: 2 },
          { q: "Which part has the \"best weather\"?", options: ["North", "East", "West", "South"], answer: 3 },
          { q: "What is the temperature in the south?", options: ["10º", "13º", "15º", "20º"], answer: 2 }
        ],
        answerKey: [1, 1, 2, 2, 1, 1, 1, 2, 3, 2],
      },
      {
        title: 'Dreams',
        text: `Hold fast to dreams 
For if dreams die 
Life is a broken-winged bird 
That cannot fly. 

Hold fast to dreams 
For when dreams go 
Life is a barren field 
Frozen with snow.`,
        questions: [
          { q: "What does the poem tell you to \"Hold fast to\"?", options: ["Birds", "Snow", "Dreams", "Fields"], answer: 2 },
          { q: "What happens if dreams die?", options: ["Life is a strong bird", "Life is a broken-winged bird", "Life is a flying bird", "Life is a happy bird"], answer: 1 },
          { q: "What cannot the broken-winged bird do?", options: ["Sing", "Eat", "Fly", "Sleep"], answer: 2 },
          { q: "The poem repeats the line, \"Hold fast to ______.\"", options: ["Money", "Friends", "Dreams", "Toys"], answer: 2 },
          { q: "What happens when dreams go?", options: ["Life is a warm field", "Life is a green field", "Life is a barren field", "Life is a big field"], answer: 2 },
          { q: "What is the barren field covered with?", options: ["Flowers", "Water", "Snow", "Grass"], answer: 2 },
          { q: "What feeling does the poem mostly talk about?", options: ["Sadness", "Hope", "Anger", "Fear"], answer: 1 },
          { q: "The poem uses a bird to describe life without ______.", options: ["Food", "Water", "Dreams", "Home"], answer: 2 },
          { q: "What is a \"barren field\" in the poem?", options: ["A field full of plants", "A field with no plants", "A field of snow", "A field with many birds"], answer: 1 },
          { q: "What is the main message?", options: ["Sleep a lot", "Dreams are very important", "Birds cannot fly in winter", "Fields are cold in snow"], answer: 1 }
        ],
        answerKey: [2, 1, 2, 2, 2, 2, 1, 2, 1, 1],
      },
    ],
  },

  A2: {
    levelLabel: 'A2 – Elementary',
    intro: 'These stories and articles use clear sentences, common vocabulary, and straightforward grammar. They are designed for A2 learners and focus on identifying main ideas and understanding key information.',
    stories: [
      {
        title: 'The Survivors',
        text: `In 2091, the sky turned grey and did not change back. The sun was still there, but a thick cloud covered the planet. After the northern reactors exploded during the war, smoke and dust filled the air. Crops died. Animals disappeared. Cities grew silent. Only small groups of people survived.

Mara had once been a history teacher. Now she was the leader of twelve people in an underground parking garage beneath a ruined hospital. The concrete walls protected them from the cold wind. Solar panels on the roof gave them a little power when the light was strong enough.

Food was their biggest problem. Every week, two people went to search the empty city. They looked for cans, medicine, tools—anything useful. It was dangerous. Other survivors were not always friendly.

One morning, it was Mara's turn to go. She left before sunrise with Tomas, a quiet man who had been a nurse. The streets were covered in grey dust. Inside the first store, the shelves were empty. In the second, they found three cans of beans and a bottle of water. Not enough.

"We need more," Tomas said softly. They moved deeper into the district. That was when they saw smoke. Not old smoke. New smoke. Someone else was there.

They followed the smoke carefully and reached a small pharmacy. Inside, a fire burned in a metal container. Around it sat five people—thin, tired, and armed.

One of them stood up. "Stop," he said. Mara raised her hands slowly. "We don't want trouble. We're looking for supplies." The man studied them. "We are too," he said. "There is almost nothing left."

Tomas spoke. "There is an underground water tank near the hospital. It still works. Clean water." The man's eyes changed. Water was more valuable than food.

That afternoon, fifteen people walked back to the hospital garage together. Weeks passed. The sky was still grey. But under the hospital, there was light. There was clean water. There were small green plants growing in boxes.

One evening, Mara stood near the entrance and listened to the quiet sounds of people talking, cooking, and living. They were not just hiding. They were building something.`,
        questions: [
          { q: 'What caused the sky to turn grey in 2091?', options: ['A volcanic eruption', 'A powerful storm', 'Explosions of northern reactors', 'A meteor'], answer: 2 },
          { q: 'Where did Mara and her group live?', options: ['Abandoned school', 'Underground parking garage', 'Mountain cave', 'Supermarket'], answer: 1 },
          { q: 'Why did Mara and Tomas go into the city?', options: ['Find survivors', 'Explore buildings', 'Search for food and supplies', 'Repair machines'], answer: 2 },
          { q: 'What sign showed Mara another group was nearby?', options: ['Footprints', 'Broken windows', 'Fresh smoke', 'Loud voices'], answer: 2 },
          { q: 'Why did Tomas mention the water tank?', options: ['Scare them', 'Convince them to fight', 'Offer cooperation', 'Hide their location'], answer: 2 },
          { q: 'What was Mara’s former job?', options: ['History teacher', 'Nurse', 'Engineer', 'Farmer'], answer: 0 },
          { q: 'How many people were in Mara’s group?', options: ['Five', 'Twelve', 'Fifteen', 'Twenty'], answer: 1 },
          { q: 'What powered the light?', options: ['Wind turbines', 'Solar panels', 'Batteries', 'Gas generator'], answer: 1 },
          { q: 'How were the people in the pharmacy described?', options: ['Strong and happy', 'Tall and rich', 'Thin, tired, and armed', 'Friendly and loud'], answer: 2 },
          { q: 'What was growing at the end?', options: ['Large trees', 'Wheat', 'Small green plants', 'Flowers'], answer: 2 },
        ],
        answerKey: [2, 1, 2, 2, 2, 0, 1, 1, 2, 2],
      },
      {
        title: 'The Guest She Never Met',
        text: `Emma lived alone in an apartment in the city. It was quiet, close to her office, and the perfect size for just one person. Every evening was almost the same. She ate dinner, washed her dishes, and watched TV. Nothing ever changed there, and that made her feel safe.

One morning, Emma noticed something strange. Her cup was on the table. She was sure she had left it by the sink the night before.

Days passed. Small things changed. A chair was not in the right place. A door was not fully closed. Then food started to disappear. She bought bread. The next day, there was less.

One night, Emma woke up and did not move. She heard breathing. It was close. She turned on the light. No one was there.

The next morning, Emma called the police. They came and looked around the apartment. "We don't see a problem," one officer said.

She came home one evening and smelt soap. It was not the soap she used. She left at once and slept at her sister's house.

The next day, she came back with the police. One officer touched the wall near the hallway. It made a strange sound. He pushed. Part of the wall moved.

Behind it was a small room. It was just long enough for a person to lie down in. There was a blanket. Empty food boxes. A cup. It looked like someone had been sleeping there for a long time.

"Someone has been living here," the officer said. The police ran outside. They checked the building. They checked the street. No one was found.

Emma moved away soon after. She does not live alone now. She keeps the lights on at night. Because she knows quiet does not always mean empty.`,
        questions: [
          { q: 'Why did Emma feel safe at first?', options: ['Large and crowded', 'Nothing ever changed', 'Lived with friends', 'Police nearby'], answer: 1 },
          { q: 'What was the first strange thing?', options: ['Missing chair', 'Broken window', 'Cup in different place', 'Door open'], answer: 2 },
          { q: 'What made her afraid one night?', options: ['Loud knocking', 'Shadow', 'Breathing nearby', 'Door open'], answer: 2 },
          { q: 'What made Emma go to her sister’s?', options: ['Loud crash', 'Smell of unfamiliar soap', 'Broken glass', 'Missing chair'], answer: 1 },
          { q: 'What was in the hidden room?', options: ['Weapons', 'Clothes', 'Bed and books', 'Blanket, cup, and food boxes'], answer: 3 },
          { q: 'What was Emma’s routine?', options: ['Party every night', 'Dinner, dishes, and TV', 'Working late', 'Cooking for friends'], answer: 1 },
          { q: 'Where was the hidden room?', options: ['Kitchen', 'Behind a wall', 'Under the floor', 'In the attic'], answer: 1 },
          { q: 'How did the officer open the room?', options: ['Key', 'By pushing the wall', 'Breaking it', 'Voice command'], answer: 1 },
          { q: 'What happened to the person living there?', options: ['Caught by police', 'Left a note', 'Not found', 'Met Emma'], answer: 2 },
          { q: 'Where does Emma live now?', options: ['Same apartment', 'Lived alone', 'Not alone', 'At her sister’s'], answer: 2 },
        ],
        answerKey: [1, 2, 2, 1, 3, 1, 1, 1, 2, 2],
      },
      {
        title: 'The Magician',
        text: `Milo the magician had been amazing audiences for nearly half a century. People loved his shows — the bright lights, the loud music, and, of course, his wonderful magic tricks. He could pull a rabbit from an empty hat, make coins disappear, and even float in the air.

But one evening, something strange happened. Milo stood on the bright stage, ready to do his famous card trick. He said the magic words — "Abracadabra!" — and waved his hand. Nothing happened.

The audience waited. Someone coughed. Milo smiled nervously and tried again. Still nothing. He moved on to his next trick, reaching into his tall black hat. Usually, a white rabbit would appear. But this time — nothing. The hat was empty.

Milo's heart started to beat quickly. He could hear people whispering in the crowd. He tried another trick, and another — but every single one failed. When the show ended, no one clapped.

For days, he practised from morning until night, but his tricks refused to work. His hands shook, his eyes were tired, and his heart was heavy. Maybe his time was over. Maybe the world didn't believe in magic any more.

One grey afternoon, Milo went for a walk in the park. He sat on a bench, thinking about his old shows. Then he noticed a little boy crying nearby.

"Why are you sad?" Milo asked gently. "My balloon flew away," the boy said. "It's gone forever."

Milo smiled softly. He reached into his pocket, took out a small coin, and made it disappear. Then, with a wink, he pulled it from behind the boy's ear. The boy gasped, then laughed with delight.

In that moment, Milo understood. His tricks had stopped working because he had forgotten what real magic was. It wasn't about secret tools or clever moves. Magic was about joy — the joy he gave to others and the joy he felt in return.

That evening, Milo returned to the theatre. The audience waited, curious. He didn't use his old tricks this time. He told stories, made people laugh, and did simple magic with his hands — and his heart. When the show ended, the crowd stood up and clapped loudly.`,
        questions: [
          { q: 'How long was Milo a magician?', options: ['A few months', 'Nearly fifty years', 'Ten years', 'One year'], answer: 1 },
          { q: 'What sign showed something was wrong?', options: ['Lights off', 'Rabbit escaped', 'Card trick failed', 'Audience laughed'], answer: 2 },
          { q: 'Why was Milo sad after practicing?', options: ['Lost tools', 'Tricks didn’t work', 'No audience', 'Forgot lines'], answer: 1 },
          { q: 'What happened to the boy?', options: ['Lost toy', 'Balloon flew away', 'Lost parents', 'Dropped coin'], answer: 1 },
          { q: 'What is the main message?', options: ['Success is money', 'Practice is all', 'Magic is making others happy', 'Tools are priority'], answer: 2 },
          { q: 'What colors were the lights?', options: ['Dim', 'Bright', 'None', 'Flickering'], answer: 1 },
          { q: 'What words did he say?', options: ['Hocus Pocus', 'Open Sesame', 'Abracadabra', 'Alakazam'], answer: 2 },
          { q: 'What happened when the first show ended?', options: ['Loud cheering', 'Everyone left early', 'No one clapped', 'A riot'], answer: 2 },
          { q: 'Where did he go for a walk?', options: ['Forest', 'Park', 'Beach', 'Town'], answer: 1 },
          { q: 'How was the second show different?', options: ['More tools', 'Only card tricks', 'Stories and simple magic', 'No audience'], answer: 2 },
        ],
        answerKey: [1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
      },
      {
        title: 'Thieves Break into Downtown Banks',
        text: `Yesterday afternoon thieves broke into three banks in the centre of Abidjan and escaped with $25 million. This was the biggest robbery in the country's history. Police have not made any comment and the investigation is still ongoing.

According to witnesses, the three banks were attacked at the same time and in the same way. Three identical black vans arrived at 2:30 pm outside the banks, an hour before closing time. A number of armed robbers got out of the vans and walked into each bank. There were five people in each team. It was impossible to identify them on the cameras because everyone was wearing a helmet and black clothing. No one spoke. The robbers made signs to tell the customers to lie on the floor.

In one bank people started to panic and a robber shot into the air to make people quiet. Two people guarded the customers and the bank staff. The others made the managers put all the money from the cashiers into bags. They also forced the managers to open the safe and took jewelry as well as money.

Each raid was very efficient. They took no more than 10 minutes to get in and out of the bank with the money. No one tried to call the police. The bank workers said they were too scared.

As soon as the robbers left, the managers hit the alarm buttons and police arrived minutes later. But it was too late, the robbers had gone. Later police found the three cars on different roads out of town. There was no sign of any of the money.`,
        questions: [
          { q: 'How many banks were hit?', options: ['One', 'Two', 'Three', 'Four'], answer: 2 },
          { q: 'How much money was taken?', options: ['$2.5m', '$10m', '$25m', '$5m'], answer: 2 },
          { q: 'What time did they arrive?', options: ['1:30pm', '2pm', '2:30pm', '3pm'], answer: 2 },
          { q: 'What did they wear?', options: ['Hats', 'Helmets and black clothing', 'Sunglasses', 'Uniforms'], answer: 1 },
          { q: 'Why no calls to police?', options: ['Too happy', 'Too scared', 'No phones', 'Thought it was a game'], answer: 1 },
          { q: 'Where did this happen?', options: ['Dakar', 'Paris', 'Abidjan', 'London'], answer: 2 },
          { q: 'How many people in each team?', options: ['Three', 'Five', 'Ten', 'Two'], answer: 1 },
          { q: 'How long did each raid take?', options: ['5 mins', '10 mins', '20 mins', '1 hour'], answer: 1 },
          { q: 'What else was taken besides money?', options: ['Computers', 'Jewelry', 'Cars', 'Paintings'], answer: 1 },
          { q: 'Where were the vans found?', options: ['Bank parking', 'In the river', 'Roads out of town', 'Never found'], answer: 2 },
        ],
        answerKey: [2, 2, 2, 1, 1, 2, 1, 1, 1, 2],
      },
      {
        title: 'Chris Seydou – ‘The Father of African Fashion’',
        text: `Today, African designs are regularly seen in fashion shows in cities such as Paris, New York and London. Companies that sell sustainable clothing often rely on local African small businesses. But this would not be possible without some pioneers from Africa who brought African fashion to a bigger audience. One of these is Chris Seydou.

Seydou was born in Kati in Mali on 18th May 1949. He grew up in the clothing trade. His mother was an embroiderer, so from his early childhood he was familiar with different cloths and materials. His mother had copies of European fashion magazines and Seydou used to read them. He became fascinated by the photographs of elegant women and their beautiful dresses.

When he was fifteen, he left school and got a job with a local tailor. He wanted to learn more and moved first to Ouagadougou and then to Abidjan in 1969. At that time the city was one of the most important for African fashion. He also changed his name. His original name was Seydou Nourou Doumbia. Chris came from Christian Dior, who inspired him. In 1972 he went to Paris and studied European design and dress styles.

Together with two other African designers he started the International Federation of African Fashion. In Paris his reputation grew and he became well known internationally, especially for the African sensibility of his designs. He adapted and transformed Malian designs. One of the major influences in his work was bogolan, sometimes called mud cloth.

Traditionally, this is made by men. They make squares of cloth and then colour them using a mixture of leaves and water. After that they make patterns on the cloth using a special kind of mud. The patterns are often very complex. Chris Seydou simplified them for the clothes he made. In 1990 Chris Seydou returned to Mali. He came to Bamako and wanted to find out more about the traditions of making bogolan. One of his most popular projects came the same year when he collaborated with a textile company in Bamako. Through Seydou's creations, Mali's cultural treasures became better known throughout the world.`,
        questions: [
          { q: 'What is Chris Seydou called?', options: ['Father of French Fashion', 'Father of African Fashion', 'Father of Mud Cloth', 'Tailor of Mali'], answer: 1 },
          { q: 'Where was he born?', options: ['Paris', 'Abidjan', 'Kati, Mali', 'Dakar'], answer: 2 },
          { q: 'Who inspired the name "Chris"?', options: ['His father', 'Christian Dior', 'A singer', 'Teacher'], answer: 1 },
          { q: 'What is bogolan?', options: ['Silk', 'Wool', 'Mud cloth', 'Cotton'], answer: 2 },
          { q: 'What did he do with bogolan patterns?', options: ['Made them complex', 'Threw them away', 'Simplified them', 'Only used on hats'], answer: 2 },
          { q: 'When was he born?', options: ['1949', '1969', '1972', '1990'], answer: 0 },
          { q: 'What was his mother’s job?', options: ['Tailor', 'Teacher', 'Embroiderer', 'Model'], answer: 2 },
          { q: 'What city was important for fashion in 1969?', options: ['Paris', 'Bamako', 'Abidjan', 'Dakar'], answer: 2 },
          { q: 'What did he study in Paris?', options: ['Cooking', 'European design', 'Music', 'History'], answer: 1 },
          { q: 'Where did he return in 1990?', options: ['France', 'Mali', 'USA', 'Senegal'], answer: 1 },
        ],
        answerKey: [1, 2, 1, 2, 2, 0, 2, 2, 1, 1],
      },
      {
        title: 'Fishing in Senegal',
        text: `Fatima has just got a job. She should be happy, shouldn't she? Fatima lives in a fishing village not far from Dakar. She was born and lived there all her life. Her father was a fisherman. Her grandfather was a fisherman. Everybody in her family made a living from fishing.

Her family's favourite dish is "thieboudienne" — rice with marinated fish. Fatima's favourite fish is thiof. She thinks the best thieboudienne is made using thiof. Nowadays it is very difficult to find thiof when the men go fishing. Sometimes they come back with a smaller fish called "sardinella". But sometimes they come back with very little or nothing.

Some people blame the foreign fishing boats. These boats drag their nets across the ocean floor, catching everything in their way. They catch too much fish. They also damage and destroy the areas where the fish breed. The foreign fishing companies got partnerships with Senegalese business. So now they can catch all the good fish, like thiof and tuna, and export them to Europe and Asia. They also make fishmeal from other kinds of fish, like sardinella.

Fishmeal is not a meal for people. The fishmeal factories process fishes like sardinella into a powder that is used to feed animals in Europe and Asia. Now there is a fishmeal factory in Fatima's village. They need workers. Fatima went there looking for a job. They chose her. She now has a job. Having a job means she will be able to buy food for her family. She should be happy, shouldn't she?`,
        questions: [
          { q: 'What is Fatima’s new job?', options: ['Fisherman', 'Fishmeal factory worker', 'Chef', 'Teacher'], answer: 1 },
          { q: 'Where does she live?', options: ['City center', 'Fishing village near Dakar', 'Inland farm', 'Europe'], answer: 1 },
          { q: 'What is the favorite dish?', options: ['Fish sandwich', 'Fried rice', 'Thieboudienne', 'Sushi'], answer: 2 },
          { q: 'What is her favorite fish?', options: ['Sardinella', 'Tuna', 'Thiof', 'Salmon'], answer: 2 },
          { q: 'What is fishmeal for?', options: ['People', 'Animals in Europe/Asia', 'Fertilizer', 'Fuel'], answer: 1 },
          { q: 'What is the problem with foreign boats?', options: ['Too small', 'They catch too much and damage areas', 'Too loud', 'They don’t export'], answer: 1 },
          { q: 'What smaller fish is often caught now?', options: ['Tuna', 'Sardinella', 'Thiof', 'Cod'], answer: 1 },
          { q: 'Who did foreign companies partner with?', options: ['Fatima', 'Dakar government', 'Senegalese businesses', 'Teachers'], answer: 2 },
          { q: 'What is thiof used for?', options: ['Fishmeal', 'Best thieboudienne', 'Building boats', 'Clothes'], answer: 1 },
          { q: 'Why is Fatima working at the factory?', options: ['She loves factory work', 'To buy food for her family', 'She hated fishing', 'To travel'], answer: 1 },
        ],
        answerKey: [1, 1, 2, 2, 1, 1, 1, 2, 1, 1],
      },
      {
        title: 'My Garden with Walls',
        text: `My house has a small garden. There are high walls around it, but I like it that way. I feel safe and the wind does not blow too hard. 

In my garden, there are many types of flowers. I have red roses, white lilies, and yellow sunflowers. The sunflowers are my favorite because they are tall and look like the sun. Every morning, I water them with my green watering can.

I also have a small tree. In the spring, it has beautiful pink flowers. In the summer, it has green leaves that give me shade. I sit under the tree and read my books. It is very quiet.

Sometimes, birds come to my garden. They sit on the wall and sing. I put seeds on a small table for them. They like to eat the seeds and then fly away.

Last year, I tried to grow vegetables. I planted tomatoes and carrots. The tomatoes were good, but the carrots were very small. I will try again this year in the corner of the garden where the sun is strongest. 

My garden is my favorite place. It is small, but it is mine.`,
        questions: [
          { q: 'What is around the garden?', options: ['Fences', 'High walls', 'Hedges', 'Trees'], answer: 1 },
          { q: 'Why does the narrator like the walls?', options: ['They look nice', 'To hide', 'Feel safe and less wind', 'They are cheap'], answer: 2 },
          { q: 'What is the narrator\'s favorite flower?', options: ['Roses', 'Lilies', 'Sunflowers', 'Daisies'], answer: 2 },
          { q: 'What color is the watering can?', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 2 },
          { q: 'When are there pink flowers on the tree?', options: ['Winter', 'Spring', 'Summer', 'Autumn'], answer: 1 },
          { q: 'What does the tree provide in summer?', options: ['Fruit', 'Shade', 'Wood', 'Flowers'], answer: 1 },
          { q: 'Where do the birds sit?', options: ['In the tree', 'On the roof', 'On the wall', 'On the table'], answer: 2 },
          { q: 'What did the narrator try to grow last year?', options: ['Apple and oranges', 'Potatoes', 'Tomatoes and carrots', 'Corn'], answer: 2 },
          { q: 'What was wrong with the carrots?', options: ['They were bitter', 'They were very small', 'They died', 'Too many'], answer: 1 },
          { q: 'Where will he plant them this year?', options: ['Middle', 'In the shade', 'Strongest sun corner', 'In pots'], answer: 2 },
        ],
        answerKey: [1, 2, 2, 2, 1, 1, 2, 2, 1, 2],
      },
      {
        title: 'Seven Tips for a Tidy Desk',
        text: `Is your desk messy? Here are seven tips to help you stay organized.

1. Throw away trash: Every morning, look for old papers, empty bottles, and food wrappers. Throw them in the bin.

2. Group your items: Put pens in one box and notebooks in another. Use small containers for paperclips and staples.

3. Only keep what you need: If you are working on a report, keep that on your desk. Put other books and papers on a shelf.

4. Use labels: Write the name of each folder on a label. This helps you find things quickly.

5. Clean the surface: Use a wet cloth once a week to wipe your desk. Dust and coffee stains are not good for work.

6. Organize cables: Use tape or clips to keep computer and phone cables tidy. This prevents them from getting tangled.

7. Five-minute rule: At the end of the day, spend five minutes tidying up. This makes the next morning easier.

Try these tips today and see how much better you feel!`,
        questions: [
          { q: 'How many tips are mentioned?', options: ['Five', 'Six', 'Seven', 'Ten'], answer: 2 },
          { q: 'When should you throw trash?', options: ['Every morning', 'Once a month', 'Only Fridays', 'Never'], answer: 0 },
          { q: 'Where should pens go?', options: ['On the floor', 'In a box', 'On a shelf', 'In your pocket'], answer: 1 },
          { q: 'What should you keep on your desk?', options: ['Everything', 'Only what you need for current work', 'Old magazines', 'Food'], answer: 1 },
          { q: 'Why use labels?', options: ['Look pretty', 'Find things quickly', 'Hide mistakes', 'Cover holes'], answer: 1 },
          { q: 'How often should you wipe the surface?', options: ['Daily', 'Weekly', 'Monthly', 'Yearly'], answer: 1 },
          { q: 'What helps with cables?', options: ['Scissors', 'Tape or clips', 'Water', 'Glue'], answer: 1 },
          { q: 'What is the "five-minute rule"?', options: ['Lunch time', 'Morning exercise', 'Tidying at end of day', 'Nap'], answer: 2 },
          { q: 'What items can go in small containers?', options: ['Books', 'Laptops', 'Paperclips and staples', 'Cables'], answer: 2 },
          { q: 'What is the benefit of these tips?', options: ['Make desk bigger', 'Feel better and organized', 'Save money', 'Get a promotion'], answer: 1 },
        ],
        answerKey: [2, 0, 1, 1, 1, 1, 1, 2, 2, 1],
      },
      {
        title: 'A Train Timetable',
        image: imgTimetable,
        text: `Please refer to the train timetable provided below to answer the following questions. Focus on the departure times, destinations, and duration of the journeys.`,
        questions: [
          { q: 'Where is the train going?', options: ['North', 'South', 'East', 'West'], answer: 0 },
          { q: 'What time does the first train leave?', options: ['6am', '7am', '8am', '9am'], answer: 2 },
          { q: 'How often do trains run?', options: ['Every 10 mins', 'Every 20 mins', 'Every hour', 'Twice a day'], answer: 1 },
          { q: 'Is there a train on Sunday?', options: ['Yes', 'No', 'Only morning', 'Only night'], answer: 1 },
          { q: 'Which station is the final stop?', options: ['Central', 'Old Town', 'Airport', 'Docks'], answer: 2 },
          { q: 'How long is the journey to the Airport?', options: ['15 mins', '30 mins', '45 mins', '1 hour'], answer: 2 },
          { q: 'Are there peak time charges?', options: ['Yes', 'No', 'Only weekends', 'Only for kids'], answer: 0 },
          { q: 'What platform does the Airport train use?', options: ['1', '2', '3', '4'], answer: 3 },
          { q: 'Can you take a bike?', options: ['Yes, anytime', 'No', 'Only off-peak', 'Charge extra'], answer: 2 },
          { q: 'Where can you buy a ticket?', options: ['Only online', 'Station office or machine', 'On the train', 'At a shop'], answer: 1 },
        ],
        answerKey: [0, 2, 1, 1, 2, 2, 0, 3, 2, 1],
      },
      {
        title: 'Bad Secrets',
        text: `Peter kicked his desk and walked out of the classroom. 'Hey!' shouted Mr Clark, the maths teacher, to Peter's back. 'Detention!' he called, but Peter didn't stop. Peter often walked out of class.

Maria didn't have her sports kit for class again. It was the second time this term. 'I forgot it,' she told the teacher. But it wasn't true.

'What's wrong, Maria?' asked her mother when the school called her. 'Nothing, Mum,' said Maria very quietly. Maria didn't look up. She didn't want to answer any questions. She didn't want her mum to find the dress or the trainers either. Maria didn't want to explain where they came from.

A week later, Peter and Maria were outside the school principal's office. Peter was looking at the wall angrily. She knew why he was here because she was in his class. She saw him kick his desk so hard that it broke. Easy for him, she thought. Money and 'I'm sorry' won't work for me. Her mother was coming because the PE teacher wasn't happy.

Peter and Maria were the only two people in detention on Monday. They were the only two on Tuesday too. On Wednesday, Peter said, 'Hello again' and Maria said, 'See you tomorrow'. They both smiled at that.

On Thursday, Maria saw bruises on Peter's stomach when he pulled his school bag over his head. They looked old. He saw her looking. She looked away. Does Peter have someone he's afraid of? Maria asked herself. Someone could be nice and then change. They could make you do things that you didn't really want to do.

On Friday, she decided not to put her phone on silent. She pushed her jumper higher on her arms. For the first time in two months, you could see the bruises. It was time to start talking. It was time to get help. She didn't say anything, but she hoped Peter would see her arms and hear the silent question. 'You too?'

That night she went to talk to her mother in the kitchen. 'Mum? There's a boy at school and ... I saw something. A bad secret – like I think someone is hurting him.' Her mother said, 'Bad secrets are only bad until you tell someone. This boy needs to tell someone. An adult he trusts.'

Maria took a deep breath. She took her phone out of her bag and opened up the messages. 'Mum?' she said finally, 'I have to tell you something …'`,
        questions: [
          { q: 'Why did Peter get detention?', options: ['Late for class', 'Kicked his desk', 'No homework', 'Shouted at teacher'], answer: 1 },
          { q: 'Why did Maria have no sports kit?', options: ['Forgot it', 'Hated sports', 'Lied to teacher - different reason', 'Lost it'], answer: 2 },
          { q: 'What did the mother find on the bed?', options: ['Bag', 'Sports kit', 'New dress', 'Trainers'], answer: 1 },
          { q: 'Why hide the dress and trainers?', options: ['They were dirty', 'Didn’t want to explain where they came from', 'Mother hated them', 'Too expensive'], answer: 1 },
          { q: 'What did Peter do to the desk?', options: ['Broke it', 'Drew on it', 'Cleaned it', 'Fixed it'], answer: 0 },
          { q: 'How did Maria feel about Peter’s talk with principal?', options: ['Same for her', 'Money and sorry wouldn’t work for her', 'Happy for him', 'Didn’t care'], answer: 1 },
          { q: 'What did they do in detention on Tuesday?', options: ['Shouted', 'Ignored each other', 'Looked at each other', 'Played'], answer: 2 },
          { q: 'What did Maria see on Peter’s stomach?', options: ['Tattoo', 'Old bruises', 'Drawing', 'Scar'], answer: 1 },
          { q: 'What was her phone plan on Friday?', options: ['Silent', 'Turn off', 'Not silent, to show messages', 'Text Peter'], answer: 2 },
          { q: 'What did the mother say about secrets?', options: ['Keep them', 'Only bad until you tell someone', 'Your fault', 'Only for kids'], answer: 1 },
        ],
        answerKey: [1, 2, 1, 1, 0, 1, 2, 1, 2, 1],
      },
    ],
  },

  B1: {
    levelLabel: 'B1 – Intermediate',
    intro: 'Short stories and guides for intermediate learners. These texts cover everyday topics and focus on checking understanding of main ideas, details, and vocabulary.',
    stories: [
      {
        title: 'Alien Languages',
        text: `“It’s definitely an alien language,” Alison confirmed. The General nodded silently. Alison was standing inside a secret military base. There was computer equipment everywhere. Two soldiers with guns were by the door.

Alison was an expert linguist. As soon as the satellites had received the strange signal, the military had brought her to the base. “This is a matter of extreme importance to the whole planet,” said the General. “It’s the President’s top priority. We need to understand what that message says.”

Alison and her team worked day and night. At first, progress was slow. Then, they began to make breakthroughs. They learned the unusual grammar. One by one, the words began to make sense.

A few weeks later, Alison reported to the General. “We’ve finished the translation,” she said timidly. “It says —”
“Stop right there,” the General interrupted. “You should tell the President, not me.”

The next day, the President arrived with advisors and journalists. “Is it a message of war?” she asked.
“No,” said Alison. The journalists cheered. “Then it is a message of peace!”
“No,” said Alison. The applause died down.
“Well, what does it say?”
Alison took a deep breath. “The local services will not collect rubbish bins that are too full.”`,
        questions: [
          { q: 'Where is Alison?', options: ['Lab', 'Military base', 'Press conference', 'Spaceship'], answer: 1 },
          { q: 'What is her job?', options: ['General', 'Engineer', 'Linguist', 'Journalist'], answer: 2 },
          { q: 'Why was she brought there?', options: ['Lecture', 'Fix computers', 'Decode signal', 'Interview'], answer: 2 },
          { q: 'How important was the message?', options: ['Small task', 'Extreme importance/top priority', 'Slow work', 'Didn\'t care'], answer: 1 },
          { q: 'What did she ask for?', options: ['Equipment', 'Big office', 'Past researchers', 'Time'], answer: 2 },
          { q: 'How did they translate it?', options: ['Dictionary', 'Understanding grammar and words', 'Aliens helped', 'Computer'], answer: 1 },
          { q: 'Why did General stop her?', options: ['He knew', 'President should hear first', 'Didn\'t believe', 'He wanted to do it'], answer: 1 },
          { q: 'Who came the next day?', options: ['General only', 'President and journalists', 'Linguists', 'Family'], answer: 1 },
          { q: 'What was the first question?', options: ['Peace?', 'War?', 'How long?', 'What says?'], answer: 1 },
          { q: 'What did it say?', options: ['Greetings', 'Peace', 'Rubbish bins too full', 'Invasion'], answer: 2 },
        ],
        answerKey: [1, 2, 2, 1, 2, 1, 1, 1, 1, 2],
      },
      {
        title: 'A Cosmic Understanding',
        text: `Clare was a dedicated astronomer. One night, she spotted a huge meteor getting closer to Earth. “It’s coming right at us!” she exclaimed. She emailed her colleagues, but no response. She phoned fifty times until one picked up. “You’re always saying things like this,” said the colleague. “And you’re always wrong. We don’t believe you.”

Clare decided to build a rocket. “I’ll save everyone!” During the day she worked on her rocket. At night, she planned. Finally, launch day. She soared into space and flew towards the meteor.

“Wait a minute,” she said, looking through the window. She felt foolish. It wasn’t a meteor. It was the Space Guard, a famous satellite that stopped working years ago. “At least I can do something useful.” She went out in her suit and fixed the satellite.

Feeling embarrassed, she returned to Earth. When she landed, her colleagues were there. “I’m sorry,” she began. “I thought there was a meteor, but —”

“We’re sorry for not listening,” said her colleague. “We’re lucky you fixed the Space Guard. It immediately identified the real meteor you told us about. It was only one hour away! Its automatic systems destroyed it. You saved everyone!”
Clare crossed her arms. “Next time, pick up the phone!”`,
        questions: [
          { q: 'What was Clare’s job?', options: ['Rocket scientist', 'General', 'Astronomer', 'Operator'], answer: 2 },
          { q: 'What did she spot?', options: ['Planet', 'Huge meteor', 'UFO', 'Satellite'], answer: 1 },
          { q: 'How did colleagues react?', options: ['Believed her', 'Promised to call', 'Didn’t believe her', 'Helped build rocket'], answer: 2 },
          { q: 'What did she decide to do?', options: ['Give up', 'Ask others', 'Build rocket herself', 'Call President'], answer: 2 },
          { q: 'What was the plan?', options: ['Warn world', 'Destroy meteor', 'Build shield', 'Convince others'], answer: 1 },
          { q: 'What was the "meteor" actually?', options: ['Asteroid', 'Alien ship', 'Broken satellite', 'Star'], answer: 2 },
          { q: 'What did she do then?', options: ['Returned to Earth', 'Fixed satellite', 'Hid mistake', 'Called home'], answer: 1 },
          { q: 'How did she feel returning?', options: ['Proud', 'Embarrassed', 'Excited', 'Angry'], answer: 1 },
          { q: 'What did the satellite do?', options: ['Fell', 'Identified real meteor', 'Took photos', 'Broke again'], answer: 1 },
          { q: 'How was meteor destroyed?', options: ['Clare hitting it', 'Automatic systems', 'Another rocket', 'It missed'], answer: 1 },
        ],
        answerKey: [2, 1, 2, 2, 1, 2, 1, 1, 1, 1],
      },
    ],
  },

  B2: {
    levelLabel: 'B2 – Upper-Intermediate',
    intro: 'Read engaging stories and articles with more complex ideas, varied vocabulary, and detailed narratives. Topics include social issues and psychological themes.',
    stories: [
      {
        title: 'The Hole in the Wall',
        text: `Joanna Paresi was the last one left in a family of market traders. She lived at the foot of mountains where stone fruit grew. Her family were the only ones who knew about a hidden valley. The fruit turned silver when ripe and was very popular. Joanna dreamed of selling it in the capital city.

The journey took four months. When she arrived, she had to pay taxes and fees. She spent all her money on tests and was forced to sell her beautiful family stall. Finally, she was allowed to sell, but the fruit had turned white and lost its taste. No one bought it. She sold it to a pig farmer for almost nothing. She had lost everything.

Wandering the streets, she saw her family stall for sale at a price she couldn't afford. She fell asleep in a corner. When she woke, there was a hole in the wall. She threw her old, holey boot into it. A penny flew back out. She threw the other boot, and got three pennies. She threw her belt and got ten.

She bought useless things from traders and threw them into the hole at night. Soon she had enough for new clothes and her family stall back. She bought fine things to throw in: silk, wool, spices. Gold and silver coins poured out. She had more money than she ever needed. 

She wondered what the hole would give if she threw all the money in. She swung the bag of coins into the hole. Five coins bounced back; the rest were gone. Nothing else came back. She used the last five coins for the tax to leave the city. She walked home happy, with empty pockets but a full heart. She sold her story to travelers, asking for only a coin or food. She learned that wisdom is the greatest reward.`,
        questions: [
          { q: 'Why did Joanna go to the capital?', options: ['Escape home', 'Earn more money', 'Forced', 'Sell stall'], answer: 1 },
          { q: 'What characterizes stone fruit?', options: ['Always silver', 'Black to silver when ripe', 'Only for pigs', 'Grow in winter'], answer: 1 },
          { q: 'Why did she sell her stall?', options: ['Hated it', 'Pay for tests and survival', 'Too heavy', 'It was broken'], answer: 1 },
          { q: 'What happened to the first fruits?', options: ['Stolen', 'Turned white/lost taste', 'Sold for gold', 'Eaten by birds'], answer: 1 },
          { q: 'What does the hole represent?', options: ['Treasure', 'Opportunity/temptation', 'Danger', 'Punishment'], answer: 1 },
          { q: 'What did the hole give for a boot?', options: ['Gold', 'Penny', 'New boot', 'Nothing'], answer: 1 },
          { q: 'Why did she lose her money at the end?', options: ['Stolen', 'Miscounted', 'Greed/Risked all', 'Taxi cost'], answer: 2 },
          { q: 'What was the greatest reward?', options: ['Gold', 'Stall', 'Wisdom', 'Boots'], answer: 2 },
          { q: 'What did she do on the way home?', options: ['Cried', 'Sold her story', 'Found more gold', 'Ran'], answer: 1 },
          { q: 'How many coins bounced back?', options: ['None', 'Five', 'Ten', 'All'], answer: 1 },
        ],
        answerKey: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
      },
      {
        title: 'The Green Wars',
        text: `Plan 1: Guerrilla gardening. At 3am, Janey and the narrator "borrow" a truck and cover the high street with grass. They are caught. Narrator gets 150 hours service; Janey 300. Janey starts planning more.

Plan 2: The bamboo forest. During the town festival, they cover the high street with soil and fast-growing bamboo seeds. It grows taller than the mayor before being cut down. Janey gets 6 months in prison. Narrator goes to university to study Agriculture and Wildlife.

Plan 3: The vertical farm. Narrator presents a professional plan for a vertical farm in an old car park. Council rejects it to build luxury apartments. Janey is out of prison and thinks the narrator is an idiot for abandoning the "message."

Plan 4: Guerrilla gardening 2.0. They target a poor, neglected neighborhood. They plant vegetable gardens in front of every house and put grass over broken pavements for kids. Residents form a human chain to protect the gardens from the council. It’s on the national news.

Plan 5: The right place to fight. Narrator is in prison. They work on the prison farm. Narrator realizes half the streets now have gardens because politicians don't want to upset happy voters. Narrator plans to run for Mayor next year.`,
        questions: [
          { q: 'What was Janey’s first plan?', options: ['Bamboo', 'Cover high street with grass', 'Roof farm', 'Vegetables'], answer: 1 },
          { q: 'Why were they punished?', options: ['Theft', 'Damaging public property/vandalism', 'Pollution', 'Noise'], answer: 1 },
          { q: 'What did they plant in Plan 2?', options: ['Flowers', 'Corn', 'Bamboo', 'Trees'], answer: 2 },
          { q: 'Where did they plant in Plan 4?', options: ['Town Hall', 'Shopping center', 'Poor neighborhood', 'School'], answer: 2 },
          { q: 'How did residents react in Plan 4?', options: ['Angry', 'Joined council', 'Protected gardens (human chain)', 'Left'], answer: 2 },
          { q: 'What did narrator study?', options: ['Law', 'Engineers then Agriculture', 'Arts', 'Music'], answer: 1 },
          { q: 'Why reject the vertical farm?', options: ['Expensive', 'Luxury apartments preferred', 'No profit', 'Fear of plants'], answer: 1 },
          { q: 'What was the finishing touch in Plan 4?', options: ['Statue', 'Sign "Please Walk on the Grass"', 'Fence', 'Lights'], answer: 1 },
          { q: 'What is the final plan?', options: ['More bamboo', 'Move', 'Run for Mayor', 'Prison farm forever'], answer: 2 },
          { q: 'How many streets did they "strike" in Plan 4-5?', options: ['One', 'Five', 'Thirteen', 'All'], answer: 2 },
        ],
        answerKey: [1, 1, 2, 2, 2, 1, 1, 1, 2, 2],
      },
    ],
  },

  C1: {
    levelLabel: 'C1 – Advanced',
    intro: 'Advanced texts for proficient learners. These passages use sophisticated vocabulary and complex structures to explore deeper themes and implicit meanings.',
    stories: [
      {
        title: 'Horror Film Clichés',
        text: `Horror is one of the most conventional genres. Trope used too much becomes a cliché.
1. The Basement: Dark, damp, where evil hides. Always creepy.
2. No Phone Coverage: To maintain suspense in the age of mobiles. Or the battery dies.
3. Abandoned Places: Hospitals, houses, ghost towns. Quiet and scary.
4. The Hitchhiker: Giving a ride at night in the rain always ends badly.
5. The Final Girl: Innocence to resourcefulness. The last one standing almost always wins.`,
        questions: [
          { q: 'What is a trope that is used too much?', options: ['Metaphor', 'Cliché', 'Symbol', 'Plot'], answer: 1 },
          { q: 'What is special about the basement?', options: ['Bright', 'Where evil hides/dark', 'Warm', 'Big windows'], answer: 1 },
          { q: 'How do films deal with mobile phones?', options: ['They use them for help', 'No coverage or dead battery', 'GPS tracking', 'Video calls'], answer: 1 },
          { q: 'Why are abandoned places scary?', options: ['Loud', 'Quiet and lonely', 'Too clean', 'Full of people'], answer: 1 },
          { q: 'What happens to the "Last Girl"?', options: ['She dies first', 'Becomes toughest/resourceful', 'Runs away', 'Calls police'], answer: 1 },
          { q: 'What was popular in late 20th century?', options: ['Hitchhikers', 'The Final Girl', 'Robots', 'Space'], answer: 1 },
          { q: 'Why is the hitchhiker a problem?', options: ['Car breaks', 'Ends badly for hero', 'Costs money', 'Takes too long'], answer: 1 },
          { q: 'What does "jump out of our skin" mean?', options: ['Get cold', 'Very scared/startled', 'Run fast', 'Laugh'], answer: 1 },
          { q: 'What reaches the basement?', options: ['Elevator', 'Narrow staircase', 'Ladder', 'Window'], answer: 1 },
          { q: 'What does the text say about silence?', options: ['It is nice', 'It can be very scary', 'It is boring', 'It is loud'], answer: 1 },
        ],
        answerKey: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
      {
        title: 'How Humans Evolved Language',
        text: `Linguistics maps the history of 5,000+ languages (e.g., Indo-European origins in 3000 BC). But evolutionary biology looks at *how* we developed the capacity.
A. Brain complexity: Chimps vs Humans. Grammar (structural rules) and abstract thought.
B. Physical changes: Brain size isn't everything. Mouth, throat, and tongue development (100k years ago allowed complex sounds).
C. Intelligence vs Language: pro-language vs grammar. Cave paintings (100k-50k years ago) show civilization emergence.
D. Genetics: FOXP2 mutation (200k-100k years ago) connected to speech control. Monkeys have similar gene without mutation. Our DNA might hold the answers.`,
        questions: [
          { q: 'How many languages exist today?', options: ['500', '1,000', '5,000+', '10,000'], answer: 2 },
          { q: 'What group includes English?', options: ['Sino-Tibetan', 'Indo-European', 'Afro-Asiatic', 'Uralic'], answer: 1 },
          { q: 'What makes human language unique?', options: ['Loudness', 'Complexity/Grammar/Abstract thought', 'Speed', 'Pitch'], answer: 1 },
          { q: 'What physical development happened 100k years ago?', options: ['Walking', 'Mouth/throat/tongue for sounds', 'Hands', 'Eyes'], answer: 1 },
          { q: 'What is the "protolanguage" comparison?', options: ['Monkey sounds', 'Children learning to speak', 'Computer code', 'Writing'], answer: 1 },
          { q: 'What evidence of civilization appears 100k-50k years ago?', options: ['Skyscrapers', 'Cave paintings', 'Guns', 'Boats'], answer: 1 },
          { q: 'What is brain size mentioned for?', options: ['It is the only factor', 'Size isn\'t everything; function matters', 'Bigger is always smarter', 'Small brains are better'], answer: 1 },
          { q: 'What is the gene mutation mentioned?', options: ['X-gene', 'FOXP2 (implied connection to speech control)', 'Growth gene', 'Sleep gene'], answer: 1 },
          { q: 'When did the gene mutation occur?', options: ['Last year', '200k-100k years ago', '50k years ago', '1m years ago'], answer: 1 },
          { q: 'What might hold the answers in the future?', options: ['Books', 'DNA', 'The Moon', 'Computers'], answer: 1 },
        ],
        answerKey: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      },
    ],
  },
};
