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
    intro: 'Read stories, blogs, and guides for intermediate learners. These texts cover everyday topics, social science, and literature with a focus on main ideas and key details.',
    stories: [
      {
        title: 'Alien Languages',
        text: `“It’s definitely an alien language,” Alison confirmed.
The General nodded silently. Alison was standing inside a secret military base. There was computer equipment everywhere. There were two soldiers with guns standing by the door.
Alison was an expert linguist. As soon as the satellites had received the strange signal, the military had brought her to the base.
“This is a matter of extreme importance to the whole planet,” said the General. “It’s the President’s top priority. Name anyone you need, and I’ll get them on your team. We need to understand what that message says.”
Alison gave him a list of researchers she’d worked with in the past. The General left. The soldiers saluted.
Alison and her team worked day and night to decode the alien message. At first, progress was slow. Then, they began to make breakthroughs. They learned to understand the alien language’s unusual grammar. One by one, the words began to make sense.
A few weeks later, Alison reported to the General.
“We’ve finished the translation,” said Alison timidly, looking at her feet. “It says —”
“Stop right there,” the General interrupted. “You should tell the President, not me.”
The next day, the President arrived with an army of advisors, ministers and journalists. She shook hands with everyone, then she sat down behind a large table.
“That’s your cue,” said the General. He pushed Alison forward.
Alison sat down opposite the President. The cameras flashed.
“Alison, the whole world thanks you and your team for your diligent work to determine the meaning of this alien signal,” said the President.
“Thank you,” Alison whispered into the microphone.
“Tell us straight away: is it a message of war?”
“No,” said Alison, without looking up.
The journalists cheered and clapped. “Then it is a message of peace!” she said, smiling.
“No,” said Alison.
The applause died down. The journalists began to murmur.
“Well, what does it say?” said the President at last.
Alison gulped, and took a deep breath.
“The local services will not collect rubbish bins that are too full.”`,
        questions: [
          { q: "Where is Alison when the story begins?", options: ["In a university laboratory", "Inside a secret military base", "At a public press conference", "On a spaceship"], answer: 1 },
          { q: "What is Alison's profession?", options: ["A military general", "A computer engineer", "An expert linguist", "A journalist"], answer: 2 },
          { q: "Why did the military bring Alison to the base?", options: ["To give a lecture", "To help solve computer problems", "To decode a strange signal received by satellites", "To interview the General"], answer: 2 },
          { q: "How important was understanding the alien message to the General?", options: ["It was a small, unimportant task", "It was a matter of extreme importance and the President's top priority", "It was something they could work on slowly", "He didn't care about it"], answer: 1 },
          { q: "What did Alison ask the General for to help with the translation?", options: ["More advanced computer equipment", "A bigger office", "A list of researchers she'd worked with before", "More time"], answer: 2 },
          { q: "How did Alison and her team manage to translate the message?", options: ["They found an alien dictionary", "They made breakthroughs by understanding its grammar and words", "The aliens sent them the translation", "A computer translated it instantly"], answer: 1 },
          { q: "Why did the General tell Alison to stop before she revealed the translation to him?", options: ["He already knew what it said", "He wanted the President to hear it first", "He didn't believe her", "He wanted to translate it himself"], answer: 1 },
          { q: "Who arrived the next day to hear the translation?", options: ["Only the General", "The President with advisors, ministers, and journalists", "Alison's team only", "Other linguists"], answer: 1 },
          { q: "What was the first question the President asked Alison?", options: ["Is it a message of peace?", "Is it a message of war?", "How long did it take?", "What does it say?"], answer: 1 },
          { q: "What did the alien message actually say?", options: ["Greetings from another planet!", "We come in peace.", "The local services will not collect rubbish bins that are too full.", "Prepare for invasion."], answer: 2 }
        ],
        answerKey: [1, 2, 2, 1, 2, 1, 1, 1, 1, 2],
      },
      {
        title: 'A Cosmic Understanding',
        text: `Clare was a dedicated astronomer, but she was never the first to discover something. Then, one night, she spotted a huge meteor that seemed to be getting closer to the Earth.
“It’s coming right at us!” she exclaimed.
She emailed her colleagues about it, but none of them responded. So she started phoning them, but the calls all went to voicemail, and no one called back. Eventually, after calling fifty times, one of her colleagues picked up the phone.
“You’re always saying things like this,” said the other astronomer. “And you’re always wrong. We don’t believe you.”
But Clare knew she was right. And if no one believed her, the Earth would be destroyed.
Clare decided to build a rocket. “I’ll save everyone!” she declared. “Even if they don’t believe me!”
During the day she worked on her rocket. At night, she planned her mission. She would fly to the meteor and destroy it.
Finally, it was the day of the launch. Trembling, Clare climbed into her rocket and soared into space.
She flew towards the meteor. It was exactly where she had predicted.
“Wait a minute,” she said, looking closely through her window.
She felt very foolish. It wasn’t a meteor. It was the Space Guard, a famous satellite that had stopped working years ago.
“Well, now that I’m here, at least I can do something useful,” she said.
Clare put on her suit and went into space with her tools. She flew over to the satellite, and began to work. Eventually, she managed to fix the satellite.
Feeling embarrassed, she started flying back to Earth. She had pestered all her colleagues, and flown to space, but she was wrong. She didn’t look forward to admitting it.
When she landed, all her colleagues were there.
“I’m back,” she said with a sigh. “I have to apologise. I thought there was a meteor, but —”
“We’re sorry for not listening to you,” said the astronomer she’d spoken to on the phone. “We’re lucky that you didn’t give up, and you fixed the Space Guard. The satellite immediately identified the meteor you told us about. It was only one hour away!”
“Fixing the satellite was an excellent plan,” said another astronomer. “Its automatic systems destroyed the meteor quickly. You saved everyone!”
Clare had crossed her arms. “Next time, pick up the phone!” she snapped.`,
        questions: [
          { q: "What was Clare's job?", options: ["A rocket scientist", "A military general", "An astronomer", "A telephone operator"], answer: 2 },
          { q: "What did Clare spot one night that seemed to be getting closer to Earth?", options: ["A new planet", "A huge meteor", "A UFO", "The Space Guard satellite"], answer: 1 },
          { q: "How did Clare's colleagues react when she tried to tell them about the meteor?", options: ["They immediately believed her", "They were busy but promised to call back", "They didn't believe her, saying she was always wrong", "They helped her build a rocket"], answer: 2 },
          { q: "What did Clare decide to do when no one believed her?", options: ["Give up and go home", "Ask a different group of scientists for help", "Build a rocket to destroy the meteor herself", "Call the President directly"], answer: 2 },
          { q: "What was Clare's plan for saving everyone?", options: ["To warn the world about the meteor", "To fly to the meteor and destroy it", "To build a shield around Earth", "To convince her colleagues"], answer: 1 },
          { q: "What did Clare discover the \"meteor\" actually was when she got closer?", options: ["A smaller asteroid", "A new type of alien spacecraft", "The Space Guard, a famous broken satellite", "Just a bright star"], answer: 2 },
          { q: "What did Clare do when she realized her mistake?", options: ["She immediately returned to Earth", "She fixed the broken satellite", "She tried to hide her mistake", "She called her colleagues to tell them"], answer: 1 },
          { q: "How did Clare feel on her way back to Earth?", options: ["Proud and happy", "Excited to tell everyone she saved them", "Embarrassed and not looking forward to admitting her mistake", "Confident that she had done the right thing"], answer: 2 },
          { q: "What surprising information did Clare's colleagues give her when she landed?", options: ["The meteor had indeed been only an hour away", "They were angry she wasted her time", "The Space Guard was still broken", "The meteor was a peace message"], answer: 0 },
          { q: "How was the meteor eventually destroyed?", options: ["Clare destroyed it with her rocket", "Its automatic systems, fixed by Clare, destroyed it", "It missed Earth completely", "Another astronomer's rocket destroyed it"], answer: 1 }
        ],
        answerKey: [2, 1, 2, 2, 1, 2, 1, 1, 0, 1],
      },
      {
        title: 'Strange Gardeners',
        text: `Mr Thomas lived alone in a quiet town. He was a retired spy, so he kept watch over the neighbourhood. He was always looking for anything suspicious.
One day, new neighbours moved in next door. Mr Thomas watched them carefully. At first, they seemed like a normal couple. But soon, he saw them doing something strange.
Every evening, they went into their garden. They were gardening. Even stranger, they were whispering at the same time.
“That’s suspicious,” Mr Thomas thought, watching them from his window. “What are they whispering about? They’re hiding something.”
Mr Thomas decided to investigate. That night, he went into their garden. But he knocked over a spade, and it made a loud noise.
His neighbour opened his bedroom window. “Who’s there?” he said.
“Err… just a cat!” Mr Thomas said, in a moment of confusion.
The next night, he tried to listen through his fence, but he only heard discussions about roses and daisies.
“Code words, surely,” he thought. “I need more information.”
So, the next night, he sent his robotic vacuum cleaner under the fence. He had attached a small camera on top.
The next morning, he turned on his computer to watch the video. But, the camera had fallen off on the other side of the fence. The video showed eight hours of the same rose.
Mr Thomas was losing hope. But then it was all revealed.
That afternoon, he saw lots of vans arrive. Lots of people came out and ran into the neighbours’ house. Then, the neighbours came out with them again, and waited in their garden.
“Finally, the truth!” Mr Thomas exclaimed, watching closely.
The people took a large sign out of the van, and put it in front of the house. It said: “Welcome to the Gardening Show”. They brought out big cameras, and turned them on.
Everyone clapped, and the couple smiled at the cameras.
“They’ve been getting ready to appear on television!” Mr Thomas said to himself, laughing.
When the show came on television, Mr Thomas watched it.
“We like to do gardening in the evening,” said his neighbour, “when it isn’t so hot. But if we need to talk, we always whisper, so that we don’t wake up our neighbour, Mr Thomas. He is very strange!”`,
        questions: [
          { q: "What was Mr. Thomas's previous job?", options: ["A gardener", "A detective", "A retired spy", "A computer programmer"], answer: 2 },
          { q: "Why did Mr. Thomas watch his new neighbors carefully?", options: ["He was lonely", "He was always looking for anything suspicious", "He wanted to make new friends", "He admired their garden"], answer: 1 },
          { q: "What \"strange\" activity did Mr. Thomas observe his neighbors doing every evening?", options: ["They were singing loudly", "They were doing exercises", "They were gardening and whispering", "They were watching television"], answer: 2 },
          { q: "What happened when Mr. Thomas tried to investigate in their garden one night?", options: ["He found a secret tunnel", "He was caught by the neighbors", "He knocked over a spade and his neighbor heard him", "He found hidden treasure"], answer: 2 },
          { q: "What did Mr. Thomas hear when he tried to listen through the fence?", options: ["Secret codes", "Discussions about roses and daisies", "Nothing at all", "The neighbors arguing"], answer: 1 },
          { q: "How did Mr. Thomas try to use his robotic vacuum cleaner?", options: ["To clean his neighbors' garden", "To spy on them with a camera attached", "To deliver a message", "To record their conversations"], answer: 1 },
          { q: "What was the result of Mr. Thomas's robotic vacuum cleaner plan?", options: ["He got a clear video of their secret", "The camera fell off, and the video only showed a rose", "The vacuum cleaner got stuck", "He was discovered by his neighbors"], answer: 1 },
          { q: "What did the vans and people arriving at the neighbors' house signal?", options: ["They were moving out", "They were having a big party", "It was for the \"Gardening Show\"", "They were having a family reunion"], answer: 2 },
          { q: "What was the \"secret\" activity the neighbors were involved in?", options: ["They were spies like Mr. Thomas", "They were preparing to appear on a television gardening show", "They were building a new shed", "They were planning a surprise for Mr. Thomas"], answer: 1 },
          { q: "Why did the neighbors whisper in the garden, according to what they said on television?", options: ["They were hiding a big secret", "They didn't want to wake up Mr. Thomas", "They were practicing lines for the show", "They were shy"], answer: 1 }
        ],
        answerKey: [2, 1, 2, 2, 1, 1, 1, 2, 1, 1],
      },
      {
        title: 'An Olympic blog',
        text: `What an Olympics!
Posted by Helen Nolan on 10 September, 2012 at 21:25
It’s all over! I’ve been writing my blog from London every day during the Olympics and the Paralympics and this is my final post to look back on a wonderful couple of months. Here are some of the things that were the most memorable for me:
The Opening Ceremony
This set the scene for the Games with an amazing show featuring music, dancing, historical figures, fireworks and British humour. A huge number of volunteers practised for months to make everything perfect. The best moment was when the old lady in Buckingham Palace turned round and showed that she was neither a lookalike nor an actor but Her Majesty the Queen. The next best bit was when she jumped out of a helicopter with James Bond (although I think that actually was an actor!).
Team GB
I was very proud of our team as we kept on winning medals and finished in third position in the medal table, which is truly a great result for Great Britain. There were so many incredible sportsmen and women. The ones that stand out for me are Mo Farah, the Somalian-born Londoner who won the 10,000 and 5,000 metres with the whole stadium going crazy, Jessica Ennis, the popular super-athlete from Sheffield who won the heptathlon, and Nicola Adams who won the first female boxing medal in Olympic history for Britain.
The Olympic Stadium crowd
Although the crowd cheered on the British, there was lots of support for athletes of other nationalities too like the wonderful Usain Bolt, from Jamaica, who won the 100 and 200 metres sprint to become the fastest man alive. There was also Oscar Pistorius of South Africa who was the first disabled person to compete in the Olympics. He went on to win two gold medals and a silver in the Paralympics.
New sports
I have really enjoyed being able to watch sports which are not normally shown on television. Before the Olympics I didn’t expect to love watching judo or find myself screaming at the television during a game of wheelchair tennis, but I really got into them. I didn’t know anything about goalball before the Paralympics but it became one of my favourite sports.
The organisation and the atmosphere
It took seven years of planning and 70,000 volunteers to make everything go well. Many people have said that the organisation was not as perfect as that of the Beijing Games, but there was a much better atmosphere which spread out through the whole city. The volunteers were always friendly and helpful and Londoners even began talking to each other, and visitors, on the underground trains!`,
        questions: [
          { q: "What is the main purpose of Helen Nolan's blog post?", options: ["To report on the technical details of the Olympic Games", "To share her personal reflections and most memorable moments from the Olympics and Paralympics", "To criticize the organization of the London Games", "To encourage people to become volunteers for future Olympics"], answer: 1 },
          { q: "What made the Opening Ceremony memorable for Helen?", options: ["Only the music and dancing", "The appearance of historical figures and the Queen's unexpected role with James Bond", "The focus on technology and modern displays", "The large number of foreign visitors"], answer: 1 },
          { q: "How did Team GB perform in the medal table?", options: ["They finished in first position", "They finished in second position", "They finished in third position, which Helen saw as a great result", "They did not win many medals"], answer: 2 },
          { q: "Which of these athletes is highlighted for winning the first female boxing medal for Britain?", options: ["Mo Farah", "Jessica Ennis", "Nicola Adams", "Usain Bolt"], answer: 2 },
          { q: "What was special about Oscar Pistorius's participation in the Olympics?", options: ["He was the fastest runner in the world", "He was the first disabled person to compete in the Olympics", "He won many gold medals in the main Olympics", "He was from Jamaica"], answer: 1 },
          { q: "How did Helen feel about watching \"new sports\" like judo and wheelchair tennis?", options: ["She found them boring and difficult to understand", "She didn't expect to enjoy them but became very engaged", "She only watched them because she had to", "She preferred the traditional Olympic sports"], answer: 1 },
          { q: "What did Helen learn about during the Paralympics?", options: ["A sport called goalball, which became a favorite", "The history of disabled athletes", "How to play wheelchair tennis", "The training of judo athletes"], answer: 0 },
          { q: "How long did it take to plan the London Olympics and Paralympics?", options: ["One year", "Five years", "Seven years", "Ten years"], answer: 2 },
          { q: "What did many people say about the organization compared to the Beijing Games?", options: ["It was much better in London", "It was not as perfect, but the atmosphere in London was better", "It was exactly the same as Beijing", "They did not comment on the organization"], answer: 1 },
          { q: "What positive effect did the Olympics have on Londoners, according to Helen?", options: ["They stopped using the underground trains", "They started talking more to each other and visitors", "They became less friendly", "They only focused on the sports"], answer: 1 }
        ],
        answerKey: [1, 1, 2, 2, 1, 1, 0, 2, 1, 1],
      },
      {
        title: 'Food and Restaurants',
        text: `Are you looking for somewhere special to go this weekend? Do you want to try something new? Check out one of these hot new restaurants.
Last Days of the Raj
A centrally located Indian restaurant, perfect for eating before or after the cinema or a show. In summer enjoy your meal in the beautiful garden. The most popular dishes are lamb and chicken cooked with mild, medium or hot spices. For brave customers there is extra hot!
A Taste of Tuscany
Whether you’d like a great value-for-money lunch or a relaxed evening meal in stylish surroundings, this is the place for you. The chefs have all been trained in Italy and they make both traditional and contemporary dishes. We recommend the pasta and seafood.
Your Local Caff
Remember when cafés served full English breakfasts – sausages, beans, fried bread, bacon and eggs – with a strong cup of tea? Well, this place still does and you can have your breakfast at any time you like during the day while you listen to your favourite tunes from the 1980s.
The Lemon Tree
This pretty restaurant serves healthy food that’s tasty too. Come in for a vegetarian snack at lunchtime or a great fruit smoothie or a cappuccino and a delicious piece of cake in the afternoon. Food is bought from local producers whenever possible.
Cheesy Bites
A restaurant that only serves cheese, but hundreds of cheeses from many countries and in lots of different forms. They serve reasonably priced lunches but dinner can be expensive. Lovely food and a very elegant dining room, looking onto an amazing flower garden.
Fast Best
Fast food doesn’t have to be junk food, as this café proves. Do you fancy a really good hamburger made with the best ingredients, or old-fashioned fish and chips fried to perfection, all on the table in super-quick time? Speed and quality are important here, and the prices aren’t bad either.
The Chocolate Box
The owner of this small café used to cook all kinds of food, but then she realised she preferred desserts to anything else. If you want meat or fish, don’t come here. They only do desserts! Lots of different kinds of sweets. Chocolate lovers will be excited by the range of chocolate cakes.
Musical Chairs
Have you noticed how music improves the taste of your food? This new restaurant has different types of live music every night except Sundays, and excellent food to go with it. Great fish dishes, steak and pizza. Monday is classic rock night, so see you there!`,
        questions: [
          { q: "Which restaurant offers an outdoor eating area during the summer?", options: ["A Taste of Tuscany", "Last Days of the Raj", "Your Local Caff", "The Lemon Tree"], answer: 1 },
          { q: "If you are looking for a restaurant where all the chefs have received their training in Italy, which place should you choose?", options: ["Cheesy Bites", "Musical Chairs", "A Taste of Tuscany", "Fast Best"], answer: 2 },
          { q: "At which restaurant can you enjoy a traditional English breakfast at any time of the day?", options: ["The Chocolate Box", "Your Local Caff", "The Lemon Tree", "Fast Best"], answer: 1 },
          { q: "Which restaurant is described as serving healthy and tasty food, often bought from local producers?", options: ["The Lemon Tree", "Cheesy Bites", "Last Days of the Raj", "Musical Chairs"], answer: 0 },
          { q: "You are a vegetarian looking for a snack during lunchtime. Which restaurant would be a good option?", options: ["Fast Best", "The Chocolate Box", "The Lemon Tree", "Last Days of the Raj"], answer: 2 },
          { q: "Which restaurant specializes in a single type of food, offering hundreds of varieties from different countries?", options: ["A Taste of Tuscany", "Cheesy Bites", "Musical Chairs", "Your Local Caff"], answer: 1 },
          { q: "If you want a quick meal like a hamburger or fish and chips, and value both speed and quality, which restaurant is recommended?", options: ["The Chocolate Box", "Fast Best", "Your Local Caff", "Last Days of the Raj"], answer: 1 },
          { q: "Where would you go if you only wanted to eat desserts, especially if you love chocolate?", options: ["The Lemon Tree", "Cheesy Bites", "The Chocolate Box", "A Taste of Tuscany"], answer: 2 },
          { q: "Which restaurant prides itself on having different types of live music every night except Sundays?", options: ["Your Local Caff", "Last Days of the Raj", "Musical Chairs", "Fast Best"], answer: 2 },
          { q: "You want to try a very spicy Indian dish. Which restaurant should you consider?", options: ["A Taste of Tuscany", "The Lemon Tree", "Last Days of the Raj", "Cheesy Bites"], answer: 2 }
        ],
        answerKey: [1, 2, 1, 0, 2, 1, 1, 2, 2, 2],
      },
      {
        title: 'How to be a safe and smart searcher',
        text: `Several keywords will help to find better results. Use more than one keyword when you are doing a search. If you want to find out about seagulls, for example, search for 'bird seagull' and not just 'seagull' – because seagull might also be the name of just about anything else, from a hotel to a documentary film.
Exact references can help you find what you're looking for. If you are looking for an exact phrase or sentence, e.g. "seagulls are very clever", type it between inverted commas ("") and only exact matches will be shown. This is useful when you want to find something you've already seen but lost.
Avoid common words like 'a' or 'the' in a search. These aren't always helpful and are usually unnecessary.
Remove unwanted results by adding a minus symbol (-). For example, 'seagull -hotel -film' would leave out all references to hotels and films.
Check your spelling. Make sure that you spell every word in the search box correctly. The smallest typing mistakes can bring unwanted results – especially when the mistyped word exists.
Have a filter. It's a good idea to filter your online searches, especially when you are searching for pictures. Ask an adult to help you add a filtering system. There are lots of filtering software options available.
Experiment with different search engines until you find the one that's best for you. Some search engines personalise the results, so check out the option of using a search engine that doesn't do this and you will get different results.
Reliability is very important when you are searching on the internet. Always ask yourself, 'Is this reliable?' Don't make the mistake of believing everything you see. Some websites are unreliable and some information is false. Check your information on other websites before accepting it.`,
        questions: [
          { q: "What is the main advice for using keywords to find better search results?", options: ["Use only one keyword for simplicity", "Use more than one keyword to be more specific", "Always use very long keywords", "Avoid using any keywords"], answer: 1 },
          { q: "Why is it better to search for 'bird seagull' instead of just 'seagull' if you want information about the animal?", options: ["'Seagull' is a common word", "'Seagull' might also be the name of other things like a hotel or a film", "'Bird' is a more important word", "Search engines prefer more words"], answer: 1 },
          { q: "When should you use inverted commas (\" \") in your search?", options: ["To make your search faster", "When you are looking for an exact phrase or sentence", "To remove unwanted results", "To search for common words"], answer: 1 },
          { q: "What does the article say about common words like 'a' or 'the' in a search?", options: ["They are always very helpful", "You should always include them", "They are often unnecessary and not helpful", "They make your search more exact"], answer: 2 },
          { q: "How can you remove unwanted results from your search?", options: ["By typing the word \"remove\" before them", "By adding a plus symbol (+) before them", "By adding a minus symbol (-) before them", "By putting them in inverted commas"], answer: 2 },
          { q: "What is the importance of checking your spelling when searching?", options: ["Correct spelling helps you type faster", "Small typing mistakes can lead to unwanted results", "It makes your search look more professional", "Search engines automatically correct all mistakes"], answer: 1 },
          { q: "What is suggested for filtering online searches, especially for pictures?", options: ["To ask a friend for help", "To avoid using any filter", "To ask an adult to help add a filtering system", "To only use one search engine"], answer: 2 },
          { q: "Why should you \"experiment with different search engines\"?", options: ["Because all search engines give the same results", "To find the one that works best for you", "To learn how to use many different websites", "Some search engines are always broken"], answer: 1 },
          { q: "What is a key question to ask yourself about information found on the internet?", options: ["\"Is this interesting?\"", "\"Is this reliable?\"", "\"Is this new?\"", "\"Is this difficult to read?\""], answer: 1 },
          { q: "What is recommended if you find information on one website?", options: ["Believe it immediately", "Share it with everyone", "Check the information on other websites before accepting it", "Close the internet and stop searching"], answer: 2 }
        ],
        answerKey: [1, 1, 1, 2, 2, 1, 2, 1, 1, 2],
      },
      {
        title: 'Tips for being a super-organised student',
        text: `posted 2 hours ago by Amy
I have always admired students who hand their homework in on time and never forget to do it. Me, on the other hand, … OK, I admit. I’m terrible at getting myself organised!
But lately I’ve started keeping a small study diary. I write down everything I need to do and when it needs to be done by. Then I write a reminder a few days before the date just in case. It’s helping.
So I was wondering, what are your tips for getting organised? Post a comment below. I’m hoping we can all share some tips to teach us all better study skills.
Comments
Hana
Good question, Amy. I always spend about five minutes at the end of the day tidying up the desktop on my computer. I make a backup of important documents. I delete things I don’t need any more and put everything into the correct folder.
Amy
Nice tip, Hana. I think it’s a good idea to do a little bit of tidying up every day. Then it becomes a habit and your desktop is always organised.
Gloria
The most important thing is to start studying a few weeks before the exams and not leave it until the night before! That’s just common sense, I think.
Amy
Thanks, Gloria! I agree.
Lou
Hi, Amy. My tip is to have a big noticeboard in your bedroom, divided into different sections. I’ve got one. It’s a whiteboard. I’ve got a section for each school subject and another one for other stuff. I use board pens to write reminders and I make sure I look at it every day. The best part is when I remove something from the board!
Amy
Great tip, Lou. I’ve got a cork board with pins. I use it in the same way.`,
        questions: [
          { q: "What does Amy admit about herself at the beginning of the post?", options: ["She is excellent at organizing", "She struggles with getting organized", "She always finishes her homework early", "She never forgets to do things"], answer: 1 },
          { q: "What new strategy has Amy started using to help her get organized?", options: ["Using a large wall calendar", "Keeping a small study diary", "Asking friends for help with homework", "Setting alarms on her phone"], answer: 1 },
          { q: "What does Amy write in her study diary?", options: ["Only her class schedule", "Everything she needs to do and when it's due, plus reminders", "Her thoughts and feelings", "Jokes and funny stories"], answer: 1 },
          { q: "What is Hana's main tip for staying organized?", options: ["Cleaning her desk once a week", "Tidying her computer desktop daily and backing up documents", "Buying new software", "Avoiding computers"], answer: 1 },
          { q: "Why does Hana \"delete things I don't need any more\"?", options: ["To make space for new games", "To keep her desktop organized", "Because she doesn't like old documents", "To help her computer run faster"], answer: 1 },
          { q: "What is Gloria's advice for studying?", options: ["To study only the night before exams", "To start studying a few weeks before the exams", "To avoid studying for exams", "To study with friends every day"], answer: 1 },
          { q: "What kind of board does Lou use in her bedroom?", options: ["A chalkboard", "A cork board", "A whiteboard", "A magnetic board"], answer: 2 },
          { q: "How does Lou organize her noticeboard?", options: ["By writing all reminders in one big list", "By dividing it into sections for school subjects and other things", "By only putting pictures on it", "By changing it every day"], answer: 1 },
          { q: "What does Lou find to be \"the best part\" of using her noticeboard?", options: ["Writing new things on it", "Removing something from the board after it's done", "Looking at it every day", "Buying new board pens"], answer: 1 },
          { q: "What does Amy hope to achieve by asking for tips in her blog?", options: ["To find new friends", "To make her blog popular", "To help everyone improve their study skills by sharing advice", "To get help with her own homework"], answer: 2 }
        ],
        answerKey: [1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
      },
      {
        title: 'Travel Guide',
        text: `Learn about the beautiful attractions in San Francisco, Santa Cruz, and Los Angeles. From the Golden Gate Bridge to Disneyland, explore the best of California.`,
        questions: [
          { q: "Which city is described as having a historic marketplace with trendy restaurants, shops, and street performers?", options: ["San Francisco", "Santa Cruz", "Los Angeles", "Hollywood"], answer: 0 },
          { q: "What can you do at Pier 39 in San Francisco?", options: ["Visit a prison", "See a marketplace with shops and restaurants", "Ride a rollercoaster", "Go skateboarding"], answer: 1 },
          { q: "What kind of structure is the Golden Gate Bridge?", options: ["A famous shopping mall", "The largest suspension bridge in the world", "A historic monument", "A theme park"], answer: 1 },
          { q: "Where can visitors see the dark cell blocks that were home to America's most wanted criminals?", options: ["Venice Beach", "Alcatraz Island", "San Francisco", "Hollywood"], answer: 1 },
          { q: "If you enjoy skateboarding, which place is specifically mentioned for you to visit?", options: ["Santa Cruz", "Hollywood", "Venice Beach", "Disneyland"], answer: 2 },
          { q: "In which city can you visit the Santa Cruz Surfing Museum and ride a rollercoaster at the Beach Boardwalk?", options: ["San Francisco", "Santa Cruz", "Los Angeles", "Anaheim"], answer: 1 },
          { q: "What can you do at Madame Tussauds Hollywood?", options: ["Watch a movie", "Meet wax models of famous people", "Ride a rollercoaster", "See live concerts"], answer: 1 },
          { q: "Where can you visit the Grammy Museum and learn about music?", options: ["Hollywood", "Los Angeles", "San Francisco", "Santa Cruz"], answer: 1 },
          { q: "Which location is described as one of the most magical places in the world with hundreds of rides?", options: ["Alcatraz Island", "Hollywood", "Disneyland", "Venice Beach"], answer: 2 },
          { q: "Which two attractions are specifically mentioned as places to ride a rollercoaster?", options: ["San Francisco and Hollywood", "Golden Gate Bridge and Alcatraz Island", "Santa Cruz and Disneyland", "Venice Beach and Los Angeles"], answer: 2 }
        ],
        answerKey: [0, 1, 1, 1, 2, 1, 1, 1, 2, 2],
      },
      {
        title: 'Advertisement',
        text: `Practise understanding real-life announcements. Check out these notices for services, job opportunities, classes, and rentals.`,
        questions: [
          { q: "What kind of service is offered in notice A?", options: ["Guitar lessons", "Computer repair", "Drummer for a band", "Babysitting"], answer: 1 },
          { q: "For whom is the \"DRUMMER WANTED\" notice (B) looking for a musician?", options: ["A classical orchestra", "A recently-formed indie rock band", "A jazz ensemble", "A folk music group"], answer: 1 },
          { q: "What kind of experience is preferred for the babysitter position (C)?", options: ["Someone who lives in a different town", "A student with some experience", "Someone who only works during the day", "Someone who drives"], answer: 1 },
          { q: "How much is the babysitter paid per hour (C)?", options: ["£2.50", "£4.50", "£6.50", "£10.00"], answer: 1 },
          { q: "What details about the lost cat (D) are provided?", options: ["Its name and favorite food", "Its size, color, and temperament (frightened of dogs and teenage boys)", "Its age and breed", "Where it was last seen eating"], answer: 1 },
          { q: "When do the Beginners Zumba classes (E) take place?", options: ["Tuesday and Thursday", "Monday and Wednesday", "Every day", "Only on weekends"], answer: 1 },
          { q: "What is the deadline to book a place for the Zumba classes (E)?", options: ["September 25", "October 1", "The end of the month", "No deadline mentioned"], answer: 0 },
          { q: "What is the monthly rent for the \"Room to let\" (F)?", options: ["£250 including Wi-Fi and bills", "£250 plus bills, including Wi-Fi", "£250 for non-smokers only", "£250 for a single bed"], answer: 1 },
          { q: "Who is the \"Room to let\" (F) suitable for?", options: ["Families with children", "Non-smoking students", "Anyone looking for a house", "People with pets"], answer: 1 },
          { q: "What kind of work is available at EPRESCO supermarkets (G)?", options: ["Full-time management", "Evening and weekend hours, part-time supermarket work", "Office administration", "Delivery driving"], answer: 1 }
        ],
        answerKey: [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      },
    ],
  },

  B2: {
    levelLabel: 'B2 – Upper-Intermediate',
    intro: 'Read engaging stories and articles with more complex ideas, varied vocabulary, and detailed narratives. Topics include social issues, literature, and current events.',
    stories: [
      {
        title: 'The Hole in the Wall',
        text: `Joanna Paresi was the last one left – the last living person in a family who had been market traders for hundreds of years. She was born at the foot of the mountains that stood over her home like giants, and she had lived there all her life. On the highest of those mountains, the stone fruit grew. Late in the year, the fruit fell. Most of it rolled and fell down the mountains and was never seen again. But some rolled down into a small valley, hidden deep in the mountains. Joanna's family were the only people who knew about the valley.
When the stone fruit dropped from the trees, they were black and hard. Over four long months, they slowly turned from black to grey and, at last, to silver. Then their skin would break open easily to show the sweet, sun-coloured fruit inside. 
When they were ripe, the stone fruit were the most popular food in the whole region. On market day, people got up really early and queued for hours to buy them. Joanna's family always had more to sell than anyone else. The fruit had made her family plenty of money over the years, but they were not as wealthy as the market sellers in the distant capital city. Joanna had always wondered why her family never sold the stone fruit there, at the most important market in the country. Her mother said that someone foolish had tried once, and failed.
Nevertheless, as the years passed, Joanna dreamed about trying. The spring after her mother died, she finally prepared for the long, long journey. It would take almost four months to reach the capital city, which left no time to spare … but it could be done.
When the people of the city tasted stone fruit for the first time, ripe just in time for market, she would make her fortune. 

Joanna walked all the way to the capital, pushing a wooden cart full of stone fruit. She carried with her a beautiful wooden market stall that had been in her family for generations. On this stall, she would sell her fruit. When she finally arrived at the city, she was exhausted after months on the road. But her timing could not have been better. The stone fruit were almost ripe. So far, her plan was a success.
Of course, there was a tax to pay to enter the city gates. And there were market fees to pay. Plus, strange, new foods like hers needed to be officially tested and declared safe before they could be sold. The tests were not cheap and they took days to complete.
Joanna spent all her money on the tests and a place to sleep while she waited. To raise more money, she was forced to sell her beautiful family stall. She felt both guilty and sad, but it had to be done. Besides, after she sold the fruit, she could always buy the stall back before she returned home.
Finally, the tests were finished and she was allowed to sell her fruit. She used the last of her cash to rent a cheap ordinary stall. However, while she had been waiting, the perfect, silver stone fruit had turned white. The skin became tough, and their sweet flavour was lost. 
With her boring stall and, worst of all, her overripe fruit, no customers wanted to buy. In the end, she sold all the half-rotten stone fruit to a farmer to feed his pigs. He bought her cart too, and paid her much less than its value. 
She had lost everything.
Joanna left the market in defeat and wandered through the unfamiliar city. Its streets were filled with shops of every kind. In one she saw the beautiful, handmade market stall that her mother had given her. It was for sale at a price she could never afford.
Tears ran down her face, and she ran until she was lost in the backstreets. At last, she lay down in a corner and fell into a sleep of exhaustion and sadness.

When Joanna woke again, it was dark. But there was something even darker on the wall opposite where she was lying: a hole in the wall.
It wasn't a door, because it didn't reach the ground. It wasn't a window either. This was just a hole in the wall. It had … nothing. Just like her.
Joanna was filled with anger, at the market and at herself. She pulled off one of her boots. It was full of holes from her long journey to disaster. She threw it across the street at the hole.
It disappeared into the hole, but there was no sound as it landed. The boot was gone. It was just one more thing she had lost in her foolishness. She laughed hopelessly and closed her eyes on the world. But then she heard a familiar sound.
She opened her eyes again.
Something shiny lay on the ground. It was a single penny. It was enough to buy a meal. It was definitely worth more than her old boot had been.
It must be a joke, she thought. She waited for whoever it was to come out and start laughing at her. But nothing happened. She pulled off her other boot and threw it after the first. She saw it fly through the hole into nothing. But this time, she saw another coin fly back out, then a second and a third.
Joanna leaned forward to pick up the nearest coin. She held it close to her face … It was real!
She picked up the other coins: three pennies. She could buy new boots now. 
She took off her belt and threw it at the hole. In it went – and more coins flew back out. She picked those up too and counted her fortune: ten pennies. Enough for new boots and a simple belt!
Excited, she quickly took off her travelling coat, her jacket and both socks. She threw each one into the hole. 
When the sound of metal falling on stone ended, she was holding a small pile of coins. She counted them, over and over, through the rest of the night.
When dawn came, the hole in the wall had disappeared. Perhaps she had lost her mind along with her fruit, her cart and her mother's stall. 
Fine. She didn't care. She had thirty-eight pennies.
And if you're a good trader, all you need is somewhere to start.

There had probably never been a more unusual trader in the capital than Joanna. She went from shop to shop in her bare feet and undershirt, holding her pile of pennies. From only the cheapest shops, she bought:
a large bag;
a long shirt and a piece of old rope to use as a belt;
a pair of broken wooden shoes;
and, last but not least, all the old, broken or useless things the traders would sell her. 
When she had spent all her money, Joanna returned to the street where she had spent the night. All day she sat there, looking at the empty wall opposite. People walked past her, shaking their heads. Some felt sorry for her. Others wondered what she was doing. But most people didn't pay her any attention.

In the middle of the night, the hole in the wall appeared again. Joanna was happy to learn she hadn't imagined it.
She opened the empty bag in front of the hole. Then, one by one, she threw things into the hole. Even the wooden shoes went in. Only the bag remained. And when the sun rose, the bag was so full she could hardly close it or lift it from the ground.

Joanna bought new clothes – nothing special, just a good hat, shirt and trousers, boots to take her home, a thick coat for winter in the mountains, and a new, bigger bag. She had enough money left to do some shopping at the market that had tried to ruin her. None of the traders recognised the woman who had been selling rotten fruit two days earlier.
After a busy day of trade, she returned to a particular shop. There, with great pleasure, she bought back her mother's stall. And then she went back to her lucky street with all the fine things she had bought at the market: silk carpets, fine wool, bags of spices and more. 
She sat down for one last night, waiting for the hole.
She started with the spices, throwing them into the hole. Then she threw the wool and silk and the other things. A fountain of silver and gold coins poured out of the hole into the bag. When, at last, the coins stopped coming, her bag was filled with more money than she had ever known. She would never need to trade again! 
For a moment, she considered throwing her family stall into the hole as well. She wondered what the hole might pay her. Would the hole reward her for its personal value as well as its price? 
She shook her head. No amount of money would be worth it, not now nor ever again. But then she looked at the little shining mountain of coins and she had a new idea.
The hole had always given back more value than it took. So what about the gold and silver coins? What would the hole give her if she threw all the money in?
What reward could be greater than all the money she had?
Joanna lifted the heavy bag of coins. With shaking arms and legs, she began to swing the bag backwards and forwards, faster and faster … and then she threw it.
The bag opened and the coins flew through the air. Five coins struck the wall and bounced onto the ground by her feet. All the rest fell into the hole and were gone. 
She waited, watching the hole. But this time, nothing came back. 

There was a tax on traders departing the city. Joanna's last five coins were just enough to pay it.
She strode out in her good boots and new clothes. On her back, she carried her mother's stall. She walked all day and slept well at night, happy to be heading for home. As she got further and further away from the capital, the familiar mountains of home slowly rose ahead. 
Her pockets were empty, but her heart was full.
From time to time she met other travellers on the road. When she saw them coming, she put up her stall and sold her story to anyone who wanted to buy it.
She never asked for much in return – just a coin or two if her customer had money, some food or drink if not. And although no one believed her story was true, they believed the lessons it contained. For some the lesson was 'appreciate what you have' or 'greed will mean you lose everything.' For others, it was 'wisdom comes at a price.' 
For Joanna, the last trader in her family, it was the answer to her question: What reward could be greater than all the money she had? Now she knew the answer was wisdom, priceless wisdom.`,
        questions: [
          { q: "Why did Joanna decide to go to the capital city despite the risks?", options: ["She wanted to escape her hometown", "She believed she could earn more money there", "She was forced by other traders", "She wanted to sell her family stall"], answer: 1 },
          { q: "What does Joanna’s failure in the capital mainly suggest about trade and planning?", options: ["Luck is more important than effort", "Experience guarantees success", "External factors can affect even good plans", "Wealth always leads to failure"], answer: 2 },
          { q: "Why did Joanna sell her family stall before selling her fruit?", options: ["She no longer needed it", "She wanted to change her business", "She needed money to survive and complete requirements", "She thought it had no value"], answer: 2 },
          { q: "What is the significance of the hole in the wall?", options: ["It represents a hidden treasure", "It symbolizes opportunity and temptation", "It shows the dangers of the city", "It is a punishment for Joanna"], answer: 1 },
          { q: "How does Joanna’s behavior change after discovering the hole?", options: ["She becomes more cautious", "She avoids taking risks", "She becomes more strategic but also greedy", "She stops trading completely"], answer: 2 },
          { q: "Why does Joanna decide not to throw her family stall into the hole?", options: ["It is too heavy to carry", "She thinks it has no financial value", "She realizes its emotional and personal importance", "She is afraid the hole will disappear"], answer: 2 },
          { q: "What is the main reason Joanna loses all her money in the end?", options: ["The hole stops working", "She miscalculates the value of coins", "Her greed leads her to risk everything", "Someone steals her money"], answer: 2 },
          { q: "What lesson does Joanna personally learn from her experience?", options: ["Money is the most important goal in life", "Wisdom is more valuable than wealth", "Trade is not a reliable profession", "The city is dangerous and unfair"], answer: 1 },
          { q: "Why do people still listen to Joanna’s story even if they don’t believe it is true?", options: ["They feel sorry for her", "They enjoy fictional stories", "They recognize meaningful lessons in it", "They want to give her money"], answer: 2 },
          { q: "What does Joanna’s final situation suggest about her character development?", options: ["She remains unsuccessful and regretful", "She becomes wealthy and powerful", "She gains understanding and inner contentment", "She avoids people and lives alone"], answer: 2 }
        ],
        answerKey: [1, 2, 2, 1, 2, 2, 2, 1, 2, 2],
      },
      {
        title: 'The Green Wars',
        text: `Plan 1: Guerrilla gardening
The time is what the military call 'oh-three-hundred-hours' - three o'clock in the morning. We're in the car park of the sports centre. It's totally empty except for me, my best friend, Janey and an old truck that belongs to the company that put grass on the town football pitch last week.
'What are we doing here?' I ask.
'Here's the plan,' says Janey. 'First, we borrow that truck ...'
'I'm going home,' I say. 'Good night.'
'Then, we drive to the Town Hall. And then we use the grass in the truck to cover the high street from top to bottom, like one great big garden. Ready?'
I think about it for a minute. Then I smile.
'OK,' I say. 'Let's go.'
...
Our new green high street is beautiful. But we don't have long to admire it. The judge says we're guilty of a crime. Several crimes in fact, including theft, vandalism and disturbing the peace. I get sentenced to 150 hours of community service and Janey gets 300 hours because it was her idea.
I stay out of trouble, do 150 hours cleaning graffiti and get back to my studies. Janey is planning how we're going to do our guerrilla gardening better in future. Our mission is to make the whole town green again. Janey's ideas will probably put us both in prison eventually. But someone needs to take urgent action to help the planet. 

Plan 2: The bamboo forest
Every September, our town has a festival. There's a big parade through the city, with crowds of happy people eating junk food and waving little flags. Then everyone goes to the park on the edge of town, where the mayor gives a speech and everyone has fun. 
I'm supposed to be packing my bags to go and study engineering at university, but as soon as everyone has gone to the park, Janey picks me up in another 'borrowed' truck. This one is loaded with soil and, judging by the smell, manure.
'Get in,' she says. 'There's enough soil here to cover the high street from Baker's Lane to Humber Road, right past the new shopping centre.'
When Janey gets an idea, she doesn't let it go easily.
'You're crazy,' I tell her.
'Crazy genius,' she says. 'I've mixed soil, manure and the fastest-growing variety of bamboo seeds you can order online. By the time the festival is over, there'll be a mini forest blocking the road to the supermarket. It really does grow that fast. What do you think?'
Well … why not? I'll be at university next week anyway. 'Let's do it.'
...
Janey was right, bamboo does grow fast. It was knee-high before anyone discovered what we had done. By the time the council found someone to come and cut it down, our bamboo forest had grown taller than the mayor.
It was great, but they took it away. After what we did last year, no one had any doubt about who was responsible. Janey had taken the truck back, but the police traced the seed purchase to her bank account. This time she got six months in prison.
She didn't tell them I'd helped her, so I still went to university. By the time she got out, I'd changed my degree to Agriculture and Wildlife. I figured I should really devote some time to learning about gardening and stuff if Janey and I were going to succeed.

Plan 3: The vertical farm
I'm wearing my smartest business suit. My presentation is ready, and there's a scale model of my idea on the table. On the other side of the table, my three heads of department are ready to evaluate my final-year university project - the vertical farm.
I've seen what happens when we follow Janey's plans to make our town green. Now it's my turn.
'Good morning,' I say. 'During my studies I have specialised in theories of urban farming. After graduating, I want to do something practical with what I've learned.'
I point at the model in front of them. 'This is the high street of my home town. This is the Town Hall, this is our shopping centre and this is an old, multi-level car park which no one has used for the last two years and that is now for sale.'
I start the presentation so that they can see my designs on the big screen while I talk.
'I've designed a vertical farm based on the existing carpark structure. There will be eight floors of fruit and vegetable production. On the roof there will be rain collectors to water the soil, and solar panels to help power the special growing lights.'
The presentation changes to show charts of statistics and financial budgets.
'I will rent the space to small local farmers, and everything will be sold locally for a minimal carbon footprint. Also, the ninth floor will be allotments for any local people who want to grow their own food.'
My audience looks impressed, but I'm not finished yet.
'To prove the project can work, I've talked to local people and farmers, and I've received letters of support and interest from all sides. I also gave this presentation to my bank manager. We have agreed a business loan to cover all costs, as long as I can convince the council to sell me the site.'
I turn off the presentation. 'Are there any questions?'
...
I graduate from university with top marks.
But in the real world that doesn't count for anything.
Instead of accepting my plan, the council decided to sell the site to a property developer who will knock it down and build a load of luxury apartments. The mayor says they will bring new energy to the town. So much for the vertical farm.
Janey kept causing trouble while I was away. Fortunately, she was out of prison when I came back, so I met her for a drink and she showed me her new prison tattoos. 
'You're an idiot for abandoning my strategy,' she tells me. 'Nothing sends our message better than blocking streets with earth and plants.' 
Her latest trip to prison was for doing exactly that, again, whereas I'm a new university graduate with a bright future. 
You'd think I'd have the sense to ignore her, wouldn't you?

Plan 4: Guerrilla gardening 2.0
This time, I agreed to do part of what Janey wanted.
We drive around town, searching for the ideal location. Not in front of the Town Hall or the shopping centre, none of the places Janey thinks will make the biggest statement. I think she's been choosing the wrong targets.
I'm looking for something different. Somewhere on the edge of town would be good. Not the best neighbourhood, but a deprived one, one that the council never invests in. One where the road surface is full of holes, and the pavement looks as if someone smashed it with hammers. I'm looking for somewhere the people don't have cars outside their houses, because no one has the money to own a car.
We find just the place.
One night, we arrive in another 'borrowed' truck and carefully fill the whole street with earth from one pavement to the other - classic Janey, just like all her plans. But this time, we plant vegetable gardens in front of every house. We post leaflets through people's doors with gardening instructions, so the lucky new owners will know what to do. The leaflets also explain how much money you can save if you grow your own food - you'd be surprised.
As a finishing touch, we put grass over those broken old pavements for the kids to play on, complete with a sign reading, 'Please Walk on the Grass'.
When we've finished, we're both covered in soil and completely exhausted. But Janey puts an arm around my shoulders. 
'Not a bad plan, for you!' she says, smiling.
...
The town council is furious, of course. But would you believe that when they finally send people in to take the gardens away, the residents lock arms to form a human chain and refuse to let them through? 
Just as I hoped, the people in this neighbourhood like what we've done to their street!
Later that day, the mayor himself goes to explain to them how what we did is a misuse of public property, and it's a crime. He isn't very pleased when a local TV reporter arrives to record the event. 
The reporter asks him, 'This street hasn't been renovated for 20 years! Why don't you want it to be a place for growing food? Why can't it be a place for children to play and learn?'
It was the lead story on the national evening news and the whole town was thrilled. Well, everyone apart from the mayor, of course.
The night after that, Janey and I strike again - but this time we go in fast and hard. We just leave huge piles of earth at the top of 13 streets, along with spades, seeds and instructions piled on top of them.
People get the idea now, and we can't do all the work ourselves.
We manage three more nights of that before we get caught.

Plan 5: The right place to fight
So here I am, in prison.
It could be worse. It's my first crime, at least as an adult, so even though the plan was mostly my idea, my sentence wasn't too harsh. But Janey has quite a long criminal record now. When I get out of prison, she'll still have a couple of years left. She doesn't blame me though. As far as she's concerned, 'Guerrilla Gardening 2.0' was our most successful operation by far.
We're in separate buildings in prison, but we both work on the prison farm. We want to really make something of it. I start teaching Janey what I learned at university, and soon enough she's learned everything I can teach her. 
When it's time for me to get out of prison, I know I'm leaving the farm in capable hands. 
Janey says, 'Don't you worry. I'll keep things running here until you get yourself sent back in for your next green crime.'
That's not really part of my plan, though.
...
Do you remember those mountains of earth we left blocking streets all over town? Half of them are vegetable gardens now. The council doesn't like it, but we picked our targets well, and if there's one thing all politicians know, it's that they don't want to upset happy voters. 
One thing I've learned is this: 
If you want to win the battle, choose the right battleground.
The old mayor is retiring this year, you see. So the next time I try to re-green my town, I'll be running for election as mayor.
Last year I was a guerrilla gardener. 
Next year I'll be the mayor. And our town will be the greenest place in the country.`,
        questions: [
          { q: "What was Janey’s first plan in Plan 1: Guerrilla Gardening?", options: ["To plant bamboo in the park", "To cover the high street with grass", "To build a farm on the roof", "To grow vegetables in prison"], answer: 1 },
          { q: "Why were the narrator and Janey punished after their first plan?", options: ["They refused to leave the town", "They damaged public property", "They planted too many trees", "They refused to pay taxes"], answer: 1 },
          { q: "What did Janey plant during the town festival in Plan 2?", options: ["Flowers", "Corn", "Bamboo", "Trees"], answer: 2 },
          { q: "What happened to Janey after Plan 2?", options: ["She received a reward", "She moved to another town", "She was sent to prison", "She started a business"], answer: 2 },
          { q: "What was the narrator studying at university after Plan 2?", options: ["Medicine", "Engineering", "Agriculture and Wildlife", "Business"], answer: 2 },
          { q: "What was the narrator’s idea in Plan 3?", options: ["A bamboo forest", "A vertical farm", "A flower garden", "A city park"], answer: 1 },
          { q: "Why did the council reject the narrator’s vertical farm plan?", options: ["It was too expensive", "They preferred luxury apartments", "It was illegal", "It lacked support"], answer: 1 },
          { q: "In Plan 4, where did they create vegetable gardens?", options: ["In front of the Town Hall", "Near the shopping centre", "In a poor neighbourhood", "In the school yard"], answer: 2 },
          { q: "How did the residents react when the council tried to remove the gardens?", options: ["They helped remove them", "They ignored the situation", "They protected the gardens", "They moved away"], answer: 2 },
          { q: "What final plan did the narrator decide on in Plan 5?", options: ["To plant more bamboo", "To move to another city", "To run for mayor", "To build another farm"], answer: 2 }
        ],
        answerKey: [1, 1, 2, 2, 2, 1, 1, 2, 2, 2],
      },
      {
        title: 'I Wandered Lonely as a Cloud',
        text: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed — and gazed — but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
        questions: [
          { q: "What does the simile “lonely as a cloud” suggest about the speaker at the beginning?", options: ["He feels excited about nature", "He feels isolated but observant", "He is afraid of being alone", "He feels powerful and free"], answer: 1 },
          { q: "How does the image of the daffodils change the speaker’s mood?", options: ["From excitement to boredom", "From loneliness to happiness", "From confusion to anger", "From joy to sadness"], answer: 1 },
          { q: "What is the effect of describing the daffodils as a “crowd” and “host”?", options: ["It reduces their importance", "It shows they are controlled", "It emphasizes their number and unity", "It makes them seem threatening"], answer: 2 },
          { q: "Why does the poet compare the daffodils to stars in the Milky Way?", options: ["To suggest they are unreachable", "To show they appear at night", "To describe their scientific nature", "To highlight their brightness and endless arrangement"], answer: 3 },
          { q: "What does the phrase “out-did the sparkling waves in glee” imply?", options: ["The waves are more beautiful than the flowers", "The waves are calmer than the flowers", "The flowers appear more joyful than the waves", "The waves and flowers are equal"], answer: 2 },
          { q: "Why is the speaker described as gazing “but little thought”?", options: ["He did not understand the long-term emotional value of the moment", "He was distracted by something else", "He was too tired to think", "He did not like the view"], answer: 0 },
          { q: "What role does memory play in the final stanza?", options: ["It replaces the need for nature", "It causes regret", "It distorts reality", "It recreates the joy of the original experience"], answer: 3 },
          { q: "How does the phrase “bliss of solitude” contribute to the poem’s meaning?", options: ["It shows solitude is always negative", "It describes loneliness as painful", "It suggests being alone allows reflection and happiness", "It shows the speaker avoids people"], answer: 2 },
          { q: "Which literary device is most dominant throughout the poem?", options: ["Hyperbole", "Irony", "Personification", "Allusion"], answer: 2 },
          { q: "What is the central insight the speaker gains from the experience?", options: ["Beauty is temporary and meaningless", "Emotional richness can come from simple natural experiences", "Nature is more powerful than humans", "Loneliness cannot be avoided"], answer: 1 }
        ],
        answerKey: [1, 1, 2, 3, 2, 0, 3, 2, 2, 1],
      },
      {
        title: 'Table for 3',
        text: `The chef placed the plates on the counter. The steak was perfect. The vegetables were fresh and tender. The smell of the sauce was mouth-watering. Henry picked the plates up and carried them gracefully into the dining room.
There was only one table in the lavishly decorated room. In the corner, a woman was playing soft piano music. The walls were made of glass, and the view of the sea was magnificent.
Henry placed one plate in front of each of the three men, and began to pour the wine.
“So, she’s been elected,” said one man with brown hair. “But without my support, she’s nothing.”
A bald man spoke. “That’s seventeen governments you control now, isn’t it? You sneaky devil!”
“I beg your pardon!” the man replied, offended. “It’s eighteen.”
“You’re catching up with me.”
The men clinked their glasses.
Henry bowed, left the room and returned to the kitchen. He washed his hands, and went to the bathroom. Inside a cubicle, he checked his hidden camera. The device was still working correctly.
Henry was an undercover reporter. For over five years, he had pretended to be a waiter. He’d worked at ten different catering companies. It was all so he could serve dinner to the three men this evening.
Everyone who worked for the company had a strict contract. If they revealed anything they heard, the penalty was extremely harsh. But Henry didn’t care: it was more important to show the world the truth.
He washed his hands again, returned to the kitchen, and helped to prepare the dessert. It was a luxurious tart, made with rare dark chocolate and decorated with gold.
When Henry brought the dessert into the dining room, the three men were laughing.
“I don’t care whether the President believes in climate change,” said a man with curly hair. “I have secret underground homes on every continent. She can burn with everyone else.”
“Underground?” laughed the man with brown hair. “Enjoy your life as a mole. I’ll wave to you from orbit.”
The third man scoffed. “Space? I’m staying right here on Earth. If it’s hot, I’ve got air conditioning. If it’s cold, I’ve got heating. If there’s something I need, I’ve got an army of robots.”
Henry looked at the chocolate tarts. He felt sick. He placed one in front of each man, and poured more wine.
“You know, I feel bad for them sometimes,” said the bald man. “Billions of people, working so hard, for so little. Like our waiter.”
Henry froze.
“Look at this man. Do you realise he’s worked for five years just to be here tonight?”`,
        questions: [
          { q: "What is Henry’s role in the story?", options: ["A chef preparing food for clients", "An undercover reporter observing powerful men", "A security guard for the dining room", "A waiter with a secret mission"], answer: 1 },
          { q: "Why had Henry worked for ten different catering companies over five years?", options: ["To gain cooking experience", "To save money for a personal project", "To gather evidence for his investigation", "To meet influential people"], answer: 2 },
          { q: "What can be inferred about the three men from their conversation?", options: ["They are concerned about environmental issues", "They have immense power and wealth", "They are new to politics", "They dislike technology"], answer: 1 },
          { q: "Why does Henry check the hidden camera in the bathroom?", options: ["To make sure it captures evidence of the men’s conversation", "To record the dessert preparation", "To test its battery", "To spy on other staff members"], answer: 0 },
          { q: "What does the description of the dessert suggest about the setting?", options: ["It is a casual family restaurant", "It is a luxurious and exclusive dining experience", "It is a small café", "It is a government cafeteria"], answer: 1 },
          { q: "How do the men view ordinary people, according to their dialogue?", options: ["With empathy and respect", "With amusement and superiority", "With indifference", "With concern for fairness"], answer: 1 },
          { q: "Which statement best describes Henry’s emotional reaction to the men?", options: ["He is impressed by their wealth", "He is indifferent to their conversation", "He feels disgusted and conflicted", "He wants to join their lifestyle"], answer: 2 },
          { q: "What is the primary purpose of the hidden camera?", options: ["To entertain Henry", "To secretly gather evidence of the men’s attitudes and plans", "To help Henry improve his cooking skills", "To record the dessert presentation"], answer: 1 },
          { q: "How does the dialogue between the men reveal their personality?", options: ["They are modest and humble", "They are arrogant and detached from reality", "They are confused about climate change", "They are worried about their public image"], answer: 1 },
          { q: "Why does the bald man mention Henry at the end?", options: ["To compliment his service skills", "To highlight the irony of Henry’s effort compared to their wealth", "To question his loyalty", "To encourage him to leave"], answer: 1 }
        ],
        answerKey: [1, 2, 1, 0, 1, 1, 2, 1, 1, 1],
      },
      {
        title: 'Sonnet 18',
        text: `Shall I compare thee to a summer’s day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer’s lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature’s changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow’st;
Nor shall death brag thou wander’st in his shade,
When in eternal lines to time thou grow’st:
   So long as men can breathe or eyes can see,
   So long lives this, and this gives life to thee.`,
        questions: [
          { q: "In the opening line, “Shall I compare thee to a summer’s day?” the speaker is:", options: ["Asking if summer is better than the person.", "Considering whether the person is as beautiful as summer.", "Criticizing summer for being too short.", "Telling the person they are part of summer."], answer: 1 },
          { q: "According to the sonnet, summer is sometimes not perfect because:", options: ["It has storms and very hot days.", "It lasts too long and becomes boring.", "People don’t enjoy it enough.", "It is always the same every year."], answer: 0 },
          { q: "The phrase “Rough winds do shake the darling buds of May” suggests that:", options: ["May is the most beautiful month of summer.", "Summer can damage delicate things.", "The speaker dislikes spring.", "Flowers are unimportant in the poem."], answer: 1 },
          { q: "What does “thy eternal summer shall not fade” mean?", options: ["The person will always enjoy the summer season.", "The person’s beauty will last forever in the poem.", "Summer will never end.", "The person will never grow old physically."], answer: 1 },
          { q: "How does the sonnet suggest poetry can grant immortality?", options: ["By recording events in history books.", "By giving eternal life to those who read it.", "By preserving beauty through written lines.", "By controlling the passage of time."], answer: 2 },
          { q: "“Nor shall death brag thou wander’st in his shade” implies that:", options: ["Death will take the person eventually.", "The poem protects the person from being forgotten.", "The person is afraid of dying.", "Death is less powerful in summer"], answer: 1 },
          { q: "“So long as men can breathe or eyes can see” means:", options: ["Only people alive now will remember the poem.", "The poem will last as long as humans exist.", "People need to see summer to enjoy it.", "Human life is too short to appreciate poetry."], answer: 1 },
          { q: "The sonnet compares beauty to summer mainly to show:", options: ["That beauty is temporary and fades quickly.", "That summer is more powerful than humans.", "That the person is stronger than natural forces.", "That nature can replace human beauty."], answer: 0 },
          { q: "Why does the poet say “every fair from fair sometime declines”?", options: ["To remind readers that summer is unpredictable.", "To highlight that all beauty eventually fades naturally.", "To criticize the changing seasons.", "To show that humans are stronger than nature."], answer: 1 },
          { q: "Overall, the tone of the poem is:", options: ["Critical and disappointed.", "Romantic and admiring.", "Neutral and descriptive.", "Sad and mournful."], answer: 1 }
        ],
        answerKey: [1, 0, 1, 1, 2, 1, 1, 0, 1, 1],
      },
      {
        title: 'How flood control projects fail the poor in the Philippines',
        text: `BULACAN - Living in the riverside village of Sipat in the Philippines, Josephine Dela Cruz watches the soil erode with every storm, haunted by the fear that one day the ground will wash away completely and take her family with it.
One night this summer, heavy rains toppled trees and knocked down a bamboo stilt house in their settlement in Bulacan, a densely populated province north of Manila, she said.
Bulacan, among the country's most flood-prone provinces, has had the most flood control projects built in the past three years.
The government has spent more than 500 billion Philippine pesos ($8.5 billion) nationwide to build infrastructure such as dykes, seawalls and layers of large stones known as riprap to control stormwater .
But state investigations have revealed overpriced contracts, unfinished structures and projects mismatched to flood risks, leaving many residents in flood-prone areas still unprotected.
Ferdinand Marcos Jr. formed a commission in September to investigate possible corruption in flood control projects, after thousands of angry Filipinos marched in the streets of Manila on Sept. 21 to demand accountability and transparency from the government.
“We were really disappointed when we heard how big the funds were for flood control, and we were left behind,” said Dela Cruz, who has lived by the Angat River for more than 40 years.
When heavy rains fall, a concrete dam releases water from the Angat reservoir to prevent its overflow, exposing downstream communities like Dela Cruz’s to riverbank erosion.
“A state engineer kept telling us they will build a wall to protect us from disasters… but I hope the government will do something about this soon and not wait for another major storm to hit us,” said Dela Cruz.

Mismatch and corruption
In another settlement along the Angat River in Sipat, residents said they were pleased when construction began in August of this year on a riverbank protection structure to help prevent flooding.  
A month later, they learned the 96-million-peso ($1.650 million) project had been marked completed in 2024 under a different contractor, although they had not seen any work done.
The structure is one of several “ghost” or nonexistent flood control projects in Bulacan under the Department of Public Works and Highways (DPWH) that have been marked completed based on a database made public by the president.
Lawmakers are investigating contractors and government officials who may have been involved in stealing funds meant for flood control projects that failed to materialise.
“I was shocked when I recently learned about this ghost project, and I felt pity for my community," said Oscar Gabriel, chief of Sipat village in Plaridel.
"We were happy that a project like this came to us, but we were tricked and lied to.”
The project remained unfinished as of earlier this month.

Also in Bulacan, some flood control projects were found to be misaligned with actual flood hazard areas, according to an analysis by the Pro-People Engineers and Leaders (Propel), a local NGO that advocates for equitable engineering.
“There’s a sense of misalignment and lack of prioritisation of the DPWH and other agencies of flood hazard areas for flood control projects,” said Jose Antonio Montalban, an engineer and public information officer of Propel.
Propel found flood-prone areas in several towns in Bulacan lacked flood control infrastructure, based on data from Project NOAH (Nationwide Operational Assessment of Hazards), the Philippines' disaster risk reduction and management programme.
According to the group, 411 out of the 668 flood control projects in Bulacan are not located in any identified flood hazard areas.

Failure of infrastructure
With the Philippines’ reliance on hard infrastructure for flood control, Montalban said scientific assessments of water resources and hazards such as consideration of an area's hydrogeographical conditions are necessary.
He said he has seen infrastructure that may have been built without feasibility reports or other needed studies.
Flaws in design and engineering, which can be linked to corruption and lack of proper planning, have led to disastrous scenarios such as collapsing seawalls or dykes, he said.
“The burden is heavy on communities that experienced these disasters. When a flood control structure collapses, the impact on people’s safety is extreme and instantaneous,” the engineer said.

A 2022 study by architecture scholars noted that failure to finish or maintain costly structural flood control projects in the Philippines “renders them ineffective.”
“Therefore, the most effective solutions in mitigating the effects of flooding are mostly non-structural in nature,” the study said.
It suggested a combination of structural and non-structural solutions, such as improving flood forecasting and warning systems and assessing land use and water resources. 

Community-based solutions
Greenpeace Philippines said corruption in flood infrastructure is “crippling the ability of millions of Filipinos to survive in the face of an escalating climate crisis.”
“Every year, millions of Filipinos lose lives, homes, and livelihoods due to more frequent and more intense flooding. Floods have also caused massive economic losses for local governments as well as the national government,” Greenpeace said in a statement on Sept. 8.
Propel is calling for holistic flood risk management that includes community consultations and nature-based solutions.
These solutions include restoring wetlands to absorb excess water, creating water-retention areas and reviving old river channels, as noted in a 2022 case study brief by the Asian Development Bank.
Propel is also proposing a comprehensive drainage master plan to replace the Philippines’ “fragmented” framework on flood risk management.

In Sipat, Gabriel said transparency in public works is critical.
“Flood control infrastructure is nice to have, especially in areas prone to erosion," he said.
"But I hope the national government will inform us of any planned infrastructure in the community and not leave us in the dark,” he said.`,
        questions: [
          { q: "Where does Josephine Dela Cruz live?", options: ["Plaridel", "Manila", "Cebu", "Sipat, Bulacan"], answer: 3 },
          { q: "How much has the Philippine government spent nationwide on flood control in the past three years?", options: ["25 billion pesos", "96 million pesos", "500 billion pesos", "1.47 trillion pesos"], answer: 2 },
          { q: "What type of flood control infrastructure was mentioned in the article?", options: ["Bridges and highways", "Wind turbines and solar panels", "Dykes, seawalls, and riprap", "Canals and aqueducts"], answer: 2 },
          { q: "Why are communities like Sipat still at risk despite these projects?", options: ["Heavy rainfall has decreased", "People refuse to evacuate", "Projects are mostly non-existent, overpriced, or misaligned", "There are no rivers nearby"], answer: 2 },
          { q: "What did the “ghost” projects in Bulacan refer to?", options: ["Projects that used recycled materials", "Projects completed on time", "Community-led initiatives", "Flood control projects that were never built"], answer: 3 },
          { q: "According to Propel, how many flood control projects in Bulacan are not in identified flood hazard areas?", options: ["257 out of 668", "411 out of 668", "668 out of 668", "96 out of 500"], answer: 1 },
          { q: "What is one reason infrastructure fails in the Philippines, according to experts?", options: ["Lack of rainfall", "Excessive use of nature-based solutions", "Flaws in design, engineering, and planning", "Communities do not maintain the infrastructure"], answer: 2 },
          { q: "Which of the following is suggested as an effective non-structural solution?", options: ["Constructing high-rise buildings", "Improving flood forecasting and warning systems", "Building more dykes", "Installing solar panels"], answer: 1 },
          { q: "What community-based solutions are proposed by Propel?", options: ["Restoring wetlands and old river channels", "Expanding highways", "Building luxury resorts", "Constructing shopping malls"], answer: 0 },
          { q: "What is emphasized as critical for successful flood control in communities like Sipat?", options: ["Increasing taxes", "Transparency in public works", "Hiring more contractors", "Avoiding riverbank settlements"], answer: 1 }
        ],
        answerKey: [3, 2, 2, 2, 3, 1, 2, 1, 0, 1],
      },
      {
        title: 'Filipino concern over online disinformation hits record high, report finds',
        text: `MANILA, Philippines — Concern over online mis- and disinformation in the Philippines climbed to a record 67% in early 2025 amid a politically charged midterm election season that saw Vice President Sara Duterte impeached on corruption charges and former president Rodrigo Duterte arrested by the International Criminal Court for crimes against humanity tied to his brutal drug war.
This was the highest level recorded since the country was included in the Reuters Institute Digital News Report (DNR) in 2020. The latest edition, which polled 97,055 respondents across 48 markets in six continents online from mid-January to late February, including 2,014 adult Filipinos, was released on June 17.
This year’s report also highlights how Filipinos have been increasingly turning to podcasts and AI chatbots for news while remaining cautious about fully automated journalism. It also documents rising verification habits, shifting platform preferences, and evolving trust dynamics

Who spreads disinformation?
The four-point rise in concern about mis- and disinformation from 2024 (63%) and 10-point leap from 2020 (57%) place the Philippines nine points above this year’s global average of 58% and seven points above the average for the Asia Pacific region (60%). The steady climb in these concerns over six years underscores a growing sense of public anxiety about the spread of false or misleading content online
Concern was notably higher among Filipino women (70%), those aged 55 and above (76%) followed by 18- to 24-year-olds (70%), as well as among those with higher income (78%), higher education (74%), and those residing in the Visayas (73%).
Unlike the global sample, which identified both politicians and online influencers as playing the biggest role (47% each) in the spread of false or misleading information, Filipinos viewed political actors (55%) as a greater threat than online influencers (48%), activists (38%), journalists (37%), foreign governments (34%), celebrities (33%), and ordinary people (29%). Concern about journalists as a source of false information was five points higher than the global average of 32%.
Filipinos most commonly encountered disinformation on social media, more than on messaging apps, search engines, or through face-to-face conversations. Facebook topped the list at 68%, well above the global average of 49%, followed by TikTok (48%), YouTube (39%), X (27%), and news websites (22%). Across all markets, however, X and Instagram were perceived as bigger disinformation threats than YouTube, a contrast to the Philippine experience.
Concerns about content moderation on social media and video-sharing platforms also persisted. While a third of Filipinos considered current moderation levels sufficient, more than one in four (27%) believed platforms did too little to remove misleading or harmful content, reflecting a public preference for stronger accountability from digital platforms.`,
        questions: [
          { q: "What percentage of Filipinos were concerned about online disinformation in early 2025?", options: ["57%", "63%", "67%", "60%"], answer: 2 },
          { q: "How many adult Filipinos were surveyed for the Reuters Institute Digital News Report?", options: ["2,014", "48", "97,055", "6,000"], answer: 0 },
          { q: "Which groups did Filipinos see as the biggest sources of disinformation?", options: ["Activists and celebrities", "Political actors and online influencers", "Journalists and foreign governments", "Ordinary people and AI chatbots"], answer: 1 },
          { q: "On which platform did Filipinos most commonly encounter disinformation?", options: ["TikTok", "Facebook", "YouTube", "X"], answer: 1 },
          { q: "Which demographic in the Philippines showed the highest concern over online disinformation?", options: ["Women and people aged 55+", "Men aged 18–24", "Residents of Luzon only", "Children under 18"], answer: 0 },
          { q: "How did Filipino concern compare with the global average?", options: ["7 points below global average", "9 points above global average", "Equal to global average", "10 points below global average"], answer: 1 },
          { q: "How did Filipinos perceive journalists in the context of disinformation?", options: ["Less concerning than online influencers", "More concerning than the global average", "The biggest source of disinformation", "Not a source of disinformation"], answer: 1 },
          { q: "What percentage of Filipinos believed social media platforms did too little to remove misleading content?", options: ["33%", "27%", "68%", "48%"], answer: 1 },
          { q: "What new sources of news are Filipinos increasingly using according to the report?", options: ["Television and newspapers", "Podcasts and AI chatbots", "Radio and print media", "Face-to-face interviews"], answer: 1 },
          { q: "How does disinformation on X and Instagram in the Philippines compare to global perception?", options: ["Considered bigger threats than YouTube in the Philippines", "Considered smaller threats than YouTube in the Philippines", "Equally concerning as Facebook", "Not encountered by most Filipinos"], answer: 1 }
        ],
        answerKey: [2, 0, 1, 1, 0, 1, 1, 1, 1, 1],
      },
      {
        title: '“If” by Rudyard Kipling (1895)',
        text: `If you can keep your head when all about you   
    Are losing theirs and blaming it on you,   
If you can trust yourself when all men doubt you,
    But make allowance for their doubting too;   
If you can wait and not be tired by waiting,
    Or being lied about, don’t deal in lies,
Or being hated, don’t give way to hating,
	And yet don’t look too good, nor talk too wise:

If you can dream—and not make dreams your master;   
    If you can think—and not make thoughts your aim;   
If you can meet with Triumph and Disaster
    And treat those two impostors just the same;   
If you can bear to hear the truth you’ve spoken
    Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to, broken,
    And stoop and build ’em up with worn-out tools:

If you can make one heap of all your winnings
    And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
    And never breathe a word about your loss;
If you can force your heart and nerve and sinew
    To serve your turn long after they are gone,   
And so hold on when there is nothing in you
    Except the Will which says to them: ‘Hold on!’

If you can talk with crowds and keep your virtue,   
    Or walk with Kings — nor lose the common touch,
If neither foes nor loving friends can hurt you,
    If all men count with you, but none too much;
If you can fill the unforgiving minute
    With sixty seconds’ worth of distance run,   
Yours is the Earth and everything that’s in it,   
	And—which is more — you’ll be a Man, my son!`,
        questions: [
          { q: "What is the main purpose of Kipling’s poem “If”?", options: ["To tell a fictional story", "To give advice to the poet’s son on how to live well", "To describe natural disasters", "To criticize society"], answer: 1 },
          { q: "What literary form does the poem take?", options: ["Letter", "Narrative essay", "Advice in a paternal tone", "Play script"], answer: 2 },
          { q: "Which phrase shows that the poem teaches about patience?", options: ["If you can dream—and not make dreams your master", "If you can wait and not be tired by waiting", "If you can talk with crowds and keep your virtue", "And risk it on one turn of pitch-and-toss"], answer: 1 },
          { q: "How are Triumph and Disaster described in the poem?", options: ["As enemies", "As impostors", "As friends", "As natural events"], answer: 1 },
          { q: "What quality is emphasized in the lines: “And so hold on when there is nothing in you / Except the Will which says to them: ‘Hold on!’”?", options: ["Luck", "Determination", "Happiness", "Curiosity"], answer: 1 },
          { q: "According to the poem, what should one do when lied about?", options: ["Lie back", "Give way to anger", "Not deal in lies", "Ignore everyone"], answer: 2 },
          { q: "What does the poem suggest about dealing with loss?", options: ["Avoid taking risks", "Complain about your losses", "Start again without complaining", "Focus only on past failures"], answer: 2 },
          { q: "What is meant by “fill the unforgiving minute / With sixty seconds’ worth of distance run”?", options: ["Waste time for reflection", "Make the most of every moment", "Avoid challenges", "Sleep as much as possible"], answer: 1 },
          { q: "Which line indicates the importance of humility?", options: ["And yet don’t look too good, nor talk too wise", "If you can bear to hear the truth you’ve spoken", "If you can dream—and not make dreams your master", "Or walk with Kings — nor lose the common touch"], answer: 0 },
          { q: "What is the ultimate reward mentioned in the poem if one follows the advice?", options: ["Fame and wealth", "The Earth and everything in it, and personal growth into a mature man", "Recognition from politicians", "Avoiding all risks"], answer: 1 }
        ],
        answerKey: [1, 2, 1, 1, 1, 2, 2, 1, 0, 1],
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

  C2: {
    levelLabel: 'C2 – Mastery',
    intro: 'Explore complex literature, academic articles, and professional reports. These materials challenge your analytical skills with deep themes, technical vocabulary, and intricate structures.',
    stories: [
      {
        title: 'True Beauty',
        text: `Steph scrolled through her Instagram feed. There were #blessed yoga photos and #SundayBrunch pictures. Freshly baked bread sat next to coffees with hearts drawn on the top of the milk.
Matt was doing the same. His feed was filled with #buffed gym-selfies and #beachlife holiday shots.
Steph took a photo of her carefully arranged breakfast and flowers. Her eggs and her coffee had gone cold, but the plate looked really cool. The flowers were ones she'd 'borrowed' from her neighbour's garden. Posting the picture on Instagram meant far more people would get to appreciate them.
Steph adjusted the colours on her picture to make the orange juice and the pink roses brighter. As she scrolled through the Instagram filters, TrueBeauty caught her eye. The picture looked perfect with that filter. She posted the photo for her 15k followers to envy. Then she threw the food on her plate into the bin.
Matt had worked out for an hour, and he'd drunk very little water to show off his muscles better. Fake tan hadn't helped, neither had spraying himself with cooking oil. He saw an ad for TrueBeauty: "Pictures as gorgeous as you are. See the real you with TrueBeauty. Available for £0. Because True Beauty comes for free."
He downloaded the app and got the perfect selfie. He posted the photo for his 27k followers and then got in the shower. He washed off the oil, thinking about how it blocked up the sewers, but decided it was "someone else's problem."
Neither Steph nor Matt were expecting the negative comments they got. "Remind me never to get breakfast at your place!" "Ewww, disgusting!"
They looked again at the pictures. Steph's picture showed green-looking eggs with flies crawling on them. The flowers were dead, and the coffee had a horrible grey layer. Matt's picture showed his body covered in a layer of something that looked like dirty butter. It was in his hair and coming out of his nose. And his nails were filthy.
They tried to delete the photos, but it was impossible. Then, they received a message from TrueBeauty:
"I know that each of you really, truly cares about showing yourself as you really are – just as beautiful on the inside as you are on the outside. If you want your pictures to show the real you, it's time to be as beautiful in real life as you are on your social media. P.S. You can't remove the filter or delete the pictures. P.P.S. It automatically gets added to all your photos from now on."
For the next 24 hours, not many people posted photos. Nothing Steph tried worked. Depressed, she wandered past Mrs Robinson's garden. She noticed the smell for the first time. "Heaven!"
"Do you want some help?" Steph asked Mrs Robinson. They spent a couple of hours gardening. Steph enjoyed hearing Mrs Robinson's stories about being an actress.
"Take a picture of us, dear," said Mrs Robinson as Steph was leaving. Steph took a quick selfie of them smiling and sweating. Later, she adjusted the colors, but realized the smiles were beautiful enough.
She posted it with the text: "Me and my neighbour doing the gardening #TrueBeauty #BeautyIsOnTheInside". The picture went online exactly as she had taken it!
Matt saw her photo. He had an idea. He gathered up all the recycling in his flat and offered to take his neighbor's rubbish to the bins. He posted a selfie of him smiling next to the recycling bin. His picture was nothing special, but it was a truly beautiful photo.`,
        questions: [
          { q: "The TrueBeauty app’s effect on Steph and Matt can be interpreted as a critique of:", options: ["The impossibility of maintaining perfect appearances online", "The benefits of technological advancement in photography", "Social media as a tool for building community", "Digital literacy and critical thinking skills"], answer: 0 },
          { q: "How does the story use the juxtaposition of Steph’s and Matt’s online persona versus their real-life actions?", options: ["To show that both appearances and reality are equally valued", "To emphasize the contrast between superficiality and meaningful engagement", "To suggest that social media accurately reflects personality", "To demonstrate that public perception is irrelevant"], answer: 1 },
          { q: "The narrative suggests that social media validation is:", options: ["A reliable indicator of personal worth", "Often misleading and disconnected from genuine human experience", "The ultimate form of personal achievement", "Easily controllable through apps and filters"], answer: 1 },
          { q: "What ethical concern is raised by Matt’s behavior with the cooking oil and its environmental impact?", options: ["Individual negligence contributes to larger societal problems", "Technology solves all environmental issues", "Influencers should not exercise caution online", "Personal health is more important than environmental consequences"], answer: 0 },
          { q: "The turning point in Steph’s attitude occurs when she:", options: ["Realizes her Instagram followers are fickle", "Engages in tangible, helpful activity in real life", "Posts another filtered image successfully", "Deletes her social media accounts permanently"], answer: 1 },
          { q: "Which literary device is primarily used when the TrueBeauty filter ruins the users’ photos?", options: ["Hyperbole to exaggerate social media obsession", "Irony to reveal the gap between expectation and reality", "Metaphor for technological progress", "Allegory for personal identity"], answer: 1 },
          { q: "The story’s depiction of ordinary acts, such as helping neighbors, suggests that:", options: ["Authenticity and kindness can provide greater satisfaction than digital recognition", "Social status is enhanced by public visibility", "Everyday activities are meaningless without social media documentation", "Happiness is independent of personal contribution"], answer: 0 },
          { q: "The story critiques influencer culture by demonstrating that:", options: ["Followers always provide meaningful feedback", "Curated appearances often conceal ethical and practical negligence", "Social media is an inherently positive tool for self-expression", "Online reputation is permanent and flawless"], answer: 1 },
          { q: "How does the author use Steph’s interaction with Mrs Robinson to convey a deeper theme?", options: ["To emphasize social hierarchy and age differences", "To highlight mentorship, connection, and the value of shared effort", "To show that gardening is more important than technology", "To demonstrate that social media can be used to track community work"], answer: 1 },
          { q: "The story ultimately suggests that true beauty is:", options: ["Defined by social media metrics and visual perfection", "Rooted in outward appearance and material possessions", "Found in authentic human behavior, effort, and kindness", "Best maintained through advanced digital applications"], answer: 2 }
        ],
        answerKey: [0, 1, 1, 0, 1, 1, 0, 1, 1, 2],
      },
      {
        title: "The Devil's in the Details",
        text: `The knock at her front door came just as Victoria was about to open it. She was late to work for the third time this month. She opened the door and forced a smile.
"And how are we today, Victoria?" the man at her door asked. "I bring you an eternity of warmth and best wishes from the wonderful director of my company."
"Who are you? I'm late for work," Victoria said.
"Time!" He clicked his tongue. "That's what they all want. Time or happiness, which one would you like more of?"
"Listen, I'm not interested."
"We've got a special offer on. Twenty-five years of extra life in exchange for eternity. Or, double your happiness for the same price."
"Price?" she repeated.
"Yes, it's a fixed price. We take everything you have – forever."
Thinking about her sister Charlotte's "perfect" life – the award-winning company, the surgeon husband, the expensive house – Victoria often felt jealous. Charlotte's luck had started after a car accident.
"But what if I get run over by a bus tomorrow?" Victoria asked.
"Then you'll have been blissfully happy for that one day. Time or happiness, I can only offer one."
He shook his head when she pressed the lift. "I've tried other companies. Be miserable now, happy for eternity. Much harder sell."
Victoria ran down the stairs. "I don't have time to discuss this!" she called.
He suddenly appeared in front of her, floating in the air. "Then it's happiness!" he said, scratching one of two little horns on his head.
Victoria noticed his horns and panicked. "I'm happy enough, thanks!" she said, running down the stairs with bleeding fingers after catching them on the bricks.
"Are you happy, Victoria? Your boss hates you, you're never on time, you'll find the rent somehow..."
"Money doesn't buy happiness!" she shouted.
"So wise. Twenty-five years extra, then. I won't tell you how long you've got left, people just ruin it for themselves."
"I don't believe in this stuff!"
He jumped off the banister and held out a card. "Neither did your sister. Not until she had her accident. My card if you change your mind."
And he disappeared, leaving Victoria with the card in her hand and her mouth open in shock.`,
        questions: [
          { q: "The visitor at Victoria’s door can best be interpreted as:", options: ["A literal salesman offering impossible deals", "A symbolic figure representing temptation and moral choice", "A random intruder with sinister motives", "Victoria’s subconscious desire for wealth"], answer: 1 },
          { q: "The story juxtaposes Victoria’s life with her sister Charlotte’s to emphasize:", options: ["Sibling rivalry in a literal sense", "How accidents can endanger familial relationships", "The arbitrariness of personal fortune and success", "The inevitability of career success for all"], answer: 2 },
          { q: "What does the visitor’s dialogue about “time or happiness” suggest thematically?", options: ["People always make rational choices when offered bargains", "True happiness is separate from external circumstances", "Material wealth is the ultimate measure of life’s value", "Eternity is less desirable than a short, fulfilling life"], answer: 1 },
          { q: "Victoria’s response to the visitor reflects which of the following traits?", options: ["Pragmatism, resilience, and independence", "Passive acceptance of external forces", "Greed masked as humor", "Naivety and dependence on others"], answer: 0 },
          { q: "The story’s tone can best be described as:", options: ["Lighthearted and whimsical with underlying moral commentary", "Dark, horror-driven, and suspenseful throughout", "Strictly comedic with no serious undertones", "Tragic and fatalistic without any humor"], answer: 0 },
          { q: "Which literary device is most prominent when the visitor slides down the banister?", options: ["Magical realism to highlight the surreal nature of choice", "Hyperbole to exaggerate mundane difficulties", "Foreshadowing of future events", "Allegory of workplace struggles"], answer: 0 },
          { q: "The story critiques societal values by showing:", options: ["Material possessions define self-worth", "Success is guaranteed through effort alone", "Time management is the key to universal satisfaction", "External appearances and wealth are insufficient for happiness"], answer: 3 },
          { q: "How does Victoria’s interaction with the visitor advance the story’s philosophical theme?", options: ["By illustrating the futility of human choice", "By forcing her to confront the difference between desire and fulfillment", "By showing that true happiness must be externally validated", "By emphasizing competition with her sister"], answer: 1 },
          { q: "The narrative suggests that happiness:", options: ["Is entirely dependent on love and relationships", "Can be found through moral reflection and personal resilience", "Requires material security and professional success", "Is unpredictable and cannot be influenced"], answer: 1 },
          { q: "The ending, where Victoria is left with the card, implies:", options: ["She will inevitably fail to find satisfaction", "She is trapped into making a future deal with the visitor", "She retains autonomy and may choose happiness on her own terms", "Her life is predetermined by external forces"], answer: 2 }
        ],
        answerKey: [1, 2, 1, 0, 0, 0, 3, 1, 1, 2],
      },
      {
        title: "Journalism, Media, and Tech Trends 2025",
        text: `News organisations are braced for multiple challenges in 2025 that will likely include further attacks from hostile politicians and economic headwinds. Changes to search will become a major grievance as AI interfaces start to generate ‘story like’ answers to news queries.
Despite these difficulties, many publishers remain optimistic about business prospects. 'Trump unleashed' could lead to a surge in web traffic and subscriptions. However, re-engaging audiences that have fallen out of the habit of consuming news is a key challenge.
Just 41% of editors and CEOs say they are confident about the prospects for journalism, though 56% are confident about their own business prospects. Around 74% are worried about a potential decline in referral traffic from search engines.
In response, publishers are building relationships with AI platforms such as ChatGPT and Perplexity. With consumer attention switching to video, move publisher effort is planned for YouTube, TikTok, and Instagram.
Subscription and membership remain the biggest revenue focus (77%), ahead of display (69%). Use of AI continues to increase, with 87% of newsrooms being fully or somewhat transformed by Gen AI. Publishers are exploring AI summaries, audio conversion, and translation features to increase engagement.`,
        questions: [
          { q: "According to the report, what is one major challenge news organizations face in 2025?", options: ["Declining influence of AI-generated content", "Loss of visibility due to AI-driven platforms and changes to search", "A reduction in political polarization", "Oversaturation of print media"], answer: 1 },
          { q: "How do news organizations view their business prospects compared to journalism itself?", options: ["Less confident about business but optimistic about journalism", "Equally confident in both journalism and business", "More confident about business than the prospects for journalism", "Pessimistic about both business and journalism"], answer: 2 },
          { q: "Which platform has seen a worsening perception among publishers due to politicization?", options: ["TikTok", "Instagram", "X/Twitter", "Bluesky"], answer: 2 },
          { q: "What is the primary revenue focus for most publishers according to the survey?", options: ["Events and donations", "Subscription and membership", "Affiliate revenue", "Native advertising"], answer: 1 },
          { q: "How are publishers planning to use AI in 2025?", options: ["Only for back-end automation and workflow management", "To transform newsrooms, personalise formats, and create AI-driven content", "To replace journalists entirely", "Only for chatbots and voice interfaces"], answer: 1 },
          { q: "Which strategy is highlighted as a way to reduce churn among subscribers?", options: ["Increasing reliance on display advertising", "Bundling new products into ‘all-access’ subscriptions", "Limiting AI-generated content", "Outsourcing editorial work to freelance writers"], answer: 1 },
          { q: "What is a key concern related to the influence of personalities and creators on journalism?", options: ["They increase engagement without affecting traditional news", "They might lead to the loss of editorial stars and overshadow institutional reporting", "They reduce the need for subscription models", "They have no measurable effect on journalism"], answer: 1 },
          { q: "What percentage of respondents expect AI technologies to fully or somewhat transform newsrooms?", options: ["13%", "42%", "60%", "87%"], answer: 3 },
          { q: "Which area is NOT explicitly mentioned as a focus for new product development in 2025?", options: ["Games", "Education", "Health and wellness", "Youth-focused content"], answer: 2 },
          { q: "What is the main advice implied for publishers facing AI-driven and social media changes?", options: ["Maintain traditional methods and ignore new platforms", "Embrace technological change while staying true to core journalistic values", "Focus solely on influencer-driven content", "Rely exclusively on Google and TikTok for traffic"], answer: 1 }
        ],
        answerKey: [1, 2, 2, 1, 1, 1, 1, 3, 2, 1],
      },
      {
        title: "Philippines tops outsourcing index",
        text: `The Philippines ranked No. 1 globally as an outsourcing destination, edging out traditional leader India on the strength of cost competitiveness, English proficiency and workforce capability. On the latest Ataraxis Global Outsourcing Talent Index, the Philippines earned a score of 90.65.
The report cited the country's "strong balance of cost, English, and talent" as key drivers. The Philippines outperformed India in English proficiency (90 vs 60) and ranked No. 28 globally.
In digital infrastructure, the Philippines scored 70, higher than India’s 50, with strong connectivity in Manila, Cebu and Davao. India remains competitive in talent depth (100 vs 90). Both countries were matched in labor cost and business stability.
The report noted a shift in the Philippines' outsourcing profile toward specialized roles such as bookkeepers, data analysts, and healthcare virtual assistants, moving beyond traditional voice-based services.`,
        questions: [
          { q: "Why did the Philippines surpass India as the top outsourcing destination according to the Ataraxis Index?", options: ["It offers the lowest labor cost globally.", "It balances cost, English proficiency, and workforce capability better than India.", "It has deeper talent depth in technical roles than India.", "It is ranked first in global infrastructure."], answer: 1 },
          { q: "How does the Philippines’ English proficiency contribute to its outsourcing competitiveness?", options: ["It ensures seamless communication with international clients and aligns with global business expectations.", "It primarily attracts local clients who value English-speaking staff.", "It allows the Philippines to dominate technical software development.", "It reduces the need for additional training in specialized roles."], answer: 0 },
          { q: "What inference can be made from the Philippines’ shift from voice-based services to specialized roles?", options: ["The country is struggling to maintain traditional call center services.", "There is a strategic move to capture higher-value, skill-intensive outsourcing opportunities.", "Specialized roles are easier to outsource than voice-based work.", "This shift will decrease overall competitiveness in the outsourcing market."], answer: 1 },
          { q: "What does India’s perfect score in talent depth indicate about its outsourcing strengths?", options: ["It dominates cost-sensitive, low-skilled work.", "It is stronger in technical, knowledge-intensive roles than the Philippines.", "It leads in English proficiency globally.", "It has better digital infrastructure than the Philippines."], answer: 1 },
          { q: "How might the Philippines’ higher infrastructure score than India affect outsourcing decisions?", options: ["It allows more reliable connectivity and supports scalable digital operations.", "It guarantees lower labor costs.", "It ensures dominance in technical software engineering roles.", "It offsets weaker English proficiency in global communications."], answer: 0 },
          { q: "What can be concluded about the global outsourcing market from the Philippines overtaking India?", options: ["Cost is the sole determinant of outsourcing success.", "English proficiency, infrastructure, and workforce versatility are increasingly decisive factors.", "India is no longer competitive in any outsourcing sector.", "Outsourcing preferences remain unchanged, favoring traditional leaders."], answer: 1 },
          { q: "Why might the report emphasize that the Philippines is on par with countries like Ireland and Switzerland for English proficiency?", options: ["To highlight its competitive edge in attracting clients seeking high communication standards.", "To show that labor costs are comparable to developed nations.", "To demonstrate superiority in technical digital skills.", "To suggest that outsourcing from the Philippines is risk-free."], answer: 0 },
          { q: "What strategic implication does the evenly matched labor cost and business stability between India and the Philippines have for clients?", options: ["Clients may prioritize workforce skills and infrastructure over cost when choosing a destination.", "Clients will automatically prefer India due to tradition.", "Labor cost differences are irrelevant in global outsourcing decisions.", "Business stability is not a factor in outsourcing decisions."], answer: 0 },
          { q: "How does the report suggest AI and digital tools may influence future outsourcing roles?", options: ["The Philippines will lose competitiveness due to automation.", "Both countries may need to invest in specialized skills to maintain relevance.", "AI will replace the need for English proficiency.", "Technical roles will become less important in outsourcing strategy."], answer: 1 },
          { q: "Based on the report, which combination of factors is most likely to define successful outsourcing destinations in the next five years?", options: ["Cost efficiency and political stability only", "English proficiency, infrastructure, and high-value skill depth", "Tradition, labor abundance, and voice-based service capability", "Market size and government subsidies only"], answer: 1 }
        ],
        answerKey: [1, 0, 1, 1, 0, 1, 0, 0, 1, 1],
      },
      {
        title: "“Ode to a Nightingale”",
        text: `My heart aches, and a drowsy numbness pains
My sense, as though of hemlock I had drunk,
Or emptied some dull opiate to the drains
One minute past, and Lethe-wards had sunk:
'Tis not through envy of thy happy lot,
 But being too happy in thine happiness,—
That thou, light-winged Dryad of the trees
 In some melodious plot
Of beechen green, and shadows numberless,
Singest of summer in full-throated ease.

O, for a draught of vintage! that hath been
Cool'd a long age in the deep-delved earth,
Tasting of Flora and the country green,
Dance, and Provençal song, and sunburnt mirth!
O for a beaker full of the warm South,
Full of the true, the blushful Hippocrene,
With beaded bubbles winking at the brim,
And purple-stained mouth;
That I might drink, and leave the world unseen,
 And with thee fade away into the forest dim:

Fade far away, dissolve, and quite forget
What thou among the leaves hast never known,
The weariness, the fever, and the fret
Here, where men sit and hear each other groan;
Where palsy shakes a few, sad, last gray hairs,
Where youth grows pale, and spectre-thin, and dies;
Where but to think is to be full of sorrow
And leaden-eyed despairs,
Where Beauty cannot keep her lustrous eyes,
Or new Love pine at them beyond to-morrow.`,
        questions: [
          { q: "What is the primary emotional state expressed by the speaker at the beginning of the poem?", options: ["Envy and resentment toward the nightingale", "Drowsy numbness and a sense of escape from reality", "Joy and exhilaration at the beauty of nature", "Anger at the limitations of human life"], answer: 1 },
          { q: "The reference to “hemlock” and “Lethe” suggests that the speaker desires:", options: ["A physical adventure in nature", "A temporary death or oblivion to escape human suffering", "A deep connection with the divine", "To outshine the nightingale in song"], answer: 1 },
          { q: "When Keats calls the nightingale a “light-winged Dryad of the trees,” he emphasizes:", options: ["The bird’s mythical qualities and ethereal beauty", "The nightingale’s ability to solve human problems", "The bird’s connection to mortal suffering", "Its role as a domestic symbol of comfort"], answer: 0 },
          { q: "The speaker’s longing for a “draught of vintage” or “beaker full of the warm South” most likely symbolizes:", options: ["Desire for alcohol and intoxication", "Desire for sensory pleasure and imaginative transcendence", "A literal longing to travel to southern Europe", "Disappointment in the present season"], answer: 1 },
          { q: "How does the poem contrast human experience with the nightingale’s existence?", options: ["Humans are immortal, while the bird’s life is fleeting.", "Humans are trapped in suffering and aging, while the nightingale sings in carefree, eternal beauty.", "Humans enjoy fleeting pleasures, while the bird suffers in silence.", "Humans are more attuned to nature than the nightingale."], answer: 1 },
          { q: "Which theme is most strongly emphasized in these stanzas?", options: ["The inevitability of death and decay", "Human superiority over nature", "The nightingale’s hidden sorrows", "The political turmoil of society"], answer: 0 },
          { q: "What does “leaden-eyed despairs” suggest about the speaker’s perception of human life?", options: ["It is vibrant and full of hope", "It is heavy, depressing, and filled with sorrow", "It is mysterious and unknowable", "It is playful and fleeting"], answer: 1 },
          { q: "The speaker’s desire to “fade away into the forest dim” is best interpreted as:", options: ["Literal escape into the woods", "A wish for imaginative or emotional escape from human suffering", "A plan to abandon society permanently", "An urge to physically join the nightingale"], answer: 1 },
          { q: "How does Keats use sensory imagery in this excerpt?", options: ["To emphasize the mechanical nature of modern life", "To create a vivid contrast between the pleasures of nature and human suffering", "To argue for the superiority of civilization", "To describe scientific processes in nature"], answer: 1 },
          { q: "Which literary technique is most prominent in these stanzas?", options: ["Allegory of political events", "Apostrophe and vivid sensory imagery", "Satire of contemporary society", "Dramatic irony about the nightingale’s fate"], answer: 1 }
        ],
        answerKey: [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
      },
      {
        title: "Jabberwocky",
        text: `’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.

“Beware the Jabberwock, my son!
      The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
      The frumious Bandersnatch!”

He took his vorpal sword in hand;
      Long time the manxome foe he sought—
So rested he by the Tumtum tree
      And stood awhile in thought.

And, as in uffish thought he stood,
      The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
      And burbled as it came!

One, two! One, two! And through and through
      The vorpal blade went snicker-snack!
He left it dead, and with its head
      He went galumphing back.

“And hast thou slain the Jabberwock?
      Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!”
      He chortled in his joy.

’Twas brillig, and the slithy toves
      Did gyre and gimble in the wabe:
All mimsy were the borogoves,
      And the mome raths outgrabe.`,
        questions: [
          { q: "What type of poem is “Jabberwocky”?", options: ["Narrative with invented words", "Historical account", "Love poem", "Political satire"], answer: 0 },
          { q: "Who warns the protagonist about the Jabberwock?", options: ["His father", "His friend", "A wizard", "A teacher"], answer: 0 },
          { q: "What weapon does the protagonist use to fight the Jabberwock?", options: ["Bow and arrow", "Vorpal sword", "Magic wand", "Spear"], answer: 1 },
          { q: "Which of the following best describes the Jabberwock?", options: ["Friendly and playful", "Dangerous with biting jaws and claws", "Small and harmless", "Invisible and quiet"], answer: 1 },
          { q: "What does the protagonist do after killing the Jabberwock?", options: ["Hides from the enemy", "Galumphs back with the Jabberwock’s head", "Runs into the forest", "Gives it to the Jubjub bird"], answer: 1 },
          { q: "What is the tone of the poem in the lines “O frabjous day! Callooh! Callay!”?", options: ["Sad and mournful", "Joyful and triumphant", "Angry and frustrated", "Calm and reflective"], answer: 1 },
          { q: "What is repeated at the beginning and end of the poem?", options: ["A battle scene", "The opening stanza about the slithy toves", "A conversation with the father", "The Jabberwock’s roar"], answer: 1 },
          { q: "Which of the following best defines the word “galumphing” in context?", options: ["Walking proudly or triumphantly", "Whispering quietly", "Running away in fear", "Hiding in the trees"], answer: 0 },
          { q: "What literary device is most evident throughout the poem?", options: ["Simile", "Nonsense/Invented language (neologisms)", "Foreshadowing", "Irony"], answer: 1 },
          { q: "What is the protagonist’s attitude toward danger?", options: ["Fearful and hesitant", "Brave and determined", "Ignorant and careless", "Confused and reluctant"], answer: 1 }
        ],
        answerKey: [0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      },
      {
        title: "The Power of Friendship",
        text: `Why do humans form friendships? To share experiences and innermost thoughts, easing the pain of loneliness. We need friends for our psychological well-being.
We identify potential friends by recognizing value and common ground. C.S. Lewis said, "Friendship must be about something." It is about mutual affinity—like attracts like.
Research shows people with close friends are more satisfied with life and less likely to suffer from depression. Strong social connections reduce the risk of mortality and heart conditions. Humans are social animals who need interaction for robust health.
Absence of strong social bonds leads to greater health risks. This is why we should check in with our friends and community regularly.
By developing meaningful relationships, everyone benefits. We fulfill the true purpose of humanity: to help each other and make the world a more connected place.`,
        questions: [
          { q: "What does the passage imply about the relationship between shared interests and the formation of friendships?", options: ["Shared interests are sufficient but not necessary for strong friendships", "Mutual affinity often provides the foundation for meaningful connections", "Only trivial common interests, like food, influence friendships", "Friendships based on shared hobbies are less valuable than familial ties"], answer: 1 },
          { q: "Which of the following best summarizes the evidence used to support the psychological benefits of friendships?", options: ["Anecdotal stories from famous authors", "Peer-reviewed studies and meta-analyses showing improved life satisfaction", "Surveys comparing urban and rural populations", "Historical examples of social communities"], answer: 1 },
          { q: "What can be inferred about the relationship between friendship and physical health?", options: ["Social connections indirectly influence mortality and chronic disease risk", "Friendship is irrelevant to physical health", "Strong social bonds guarantee complete immunity from illness", "Only psychological benefits affect physical health"], answer: 0 },
          { q: "How does the author address the potential consequences of social isolation?", options: ["By presenting statistical evidence linking isolation to health risks", "By emphasizing personal anecdotes without research support", "By suggesting isolation enhances independence", "By noting that isolation primarily affects older adults"], answer: 0 },
          { q: "Why does the author reference C.S. Lewis’s statement, “Friendship must be about something”?", options: ["To highlight that friendships require shared purpose or interests", "To argue that friendship is overrated", "To suggest friendship depends on wealth or status", "To compare Western and Eastern ideas of friendship"], answer: 0 },
          { q: "According to the passage, which factor differentiates casual acquaintances from meaningful friends?", options: ["Their social media presence", "Mutual engagement and shared values or passions", "Geographic proximity", "Financial contributions to each other"], answer: 1 },
          { q: "Which reasoning technique is primarily used to argue for the importance of nurturing friendships?", options: ["Inductive reasoning through statistical studies", "Deductive logic from moral philosophy alone", "Emotional appeal without evidence", "Hypothetical scenarios unrelated to reality"], answer: 0 },
          { q: "What does the passage suggest is the broader societal implication of fostering friendships?", options: ["It increases national GDP", "It contributes to a healthier, happier, and more interconnected society", "It creates dependence on others", "It reduces individual autonomy"], answer: 1 },
          { q: "How does the passage balance the discussion of psychological and physical benefits of friendships?", options: ["By focusing exclusively on mental well-being", "By integrating research evidence to show both are intertwined", "By prioritizing physical health outcomes over social experiences", "By mentioning only anecdotal support for both benefits"], answer: 1 },
          { q: "What is the author’s underlying assumption about human nature?", options: ["Humans are naturally solitary and thrive alone", "Humans are inherently social beings who flourish through connections", "Humans benefit from competition more than companionship", "Humans rely primarily on material wealth for well-being"], answer: 1 }
        ],
        answerKey: [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
      },
      {
        title: "The Potion Master's Apprentice",
        text: `Annabel, the potion master’s apprentice, mixed a sparkling purple potion with yellow stones and animal tongues. When she heard the master wake up, she hid the bowl under the table.
The next morning, the potion master’s dog spoke to her! "There was a bowl under the table. I tried some. And now I can talk!"
Annabel was terrified. When the master came in, the dog barked: "Good morning, master!" The master spat his coffee onto the ceiling in shock.
But he wasn't angry. He realized he could sell the potion. Soon, the shop was busy from dawn till dusk as everyone wanted to talk to their animals. Annabel and the master became wealthy.
One evening, three huge horses with black hair pushed their way into the house. They did not look friendly.
"Which of you knows the recipe?" neighed the first horse loudly.
"Her! Her!" cried the potion master, fleeing out the back door.
Annabel and her dog were cornered. "You work for that man?" the horse asked.
Annabel nodded.
"Not anymore."`,
        questions: [
          { q: "What does the purple liquid with gold flecks most likely symbolize in the story?", options: ["Danger and mystery", "Wealth and prosperity", "Magical potential and creativity", "Routine tasks of the potion master"], answer: 2 },
          { q: "Why does Annabel hide the bowl under the table?", options: ["She wants to surprise the potion master later", "She fears being caught breaking rules", "She wants the potion to finish on its own", "She wants the dog to taste it first"], answer: 1 },
          { q: "How does the author create a sense of humor in the scene with the talking dog?", options: ["Through exaggerated reactions and absurd events", "By describing the dog’s magical origin", "By focusing on Annabel’s inner thoughts only", "Through detailed explanations of potion ingredients"], answer: 0 },
          { q: "What is implied about the potion master’s personality?", options: ["He is strict and unforgiving", "He is opportunistic and business-minded", "He dislikes animals", "He is unaware of magical ingredients"], answer: 1 },
          { q: "Why do townspeople want to talk to animals after Annabel’s potion is discovered?", options: ["To improve their language skills", "To satisfy curiosity, gain control, or spy on others", "To learn magical recipes", "To communicate exclusively with their pets"], answer: 1 },
          { q: "How does the story portray Annabel’s character development?", options: ["From fearful apprentice to resourceful innovator", "From mischievous child to obedient servant", "From quiet observer to antagonist", "From selfish beginner to greedy merchant"], answer: 0 },
          { q: "Which event marks the story’s turning point?", options: ["Annabel mixing the potion for the first time", "The dog begins talking after tasting the potion", "The potion master waking up in the middle of the night", "Annabel selling the potion to townspeople"], answer: 1 },
          { q: "What is the significance of the three horses at the end of the story?", options: ["They symbolize a new magical threat and a challenge for Annabel", "They represent the potion master’s wealth", "They indicate that Annabel will retire", "They are a reward from the townspeople"], answer: 0 },
          { q: "How does the author maintain suspense throughout the story?", options: ["By alternating between magical surprises and immediate consequences", "By revealing all potion effects at the beginning", "By describing only the townspeople’s actions", "By avoiding dialogue entirely"], answer: 0 },
          { q: "Which of the following best describes the story’s tone?", options: ["Light-hearted, whimsical, and adventurous", "Serious, instructional, and cautionary", "Mysterious and eerie without humor", "Tragic and somber"], answer: 0 }
        ],
        answerKey: [2, 1, 0, 1, 1, 0, 1, 0, 0, 0],
      },
    ],
  },
};
