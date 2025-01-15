export { posts }
import { v4 as uuidv4 } from 'https://esm.sh/uuid';

console.log();

const posts = [

    {   
        //0
        postId: uuidv4(),
        postImage: "./images/image-1.jpg",
        postTitle: "My First Adventure in Assassin's Creed II",
        postDate: "MARCH 12, 2023",
        postPreviewContent: "I finally started playing Assassin's Creed II, and it's been an amazing journey through Renaissance Italy. The story of Ezio Auditore is gripping, and the parkour mechanics are unlike anything I've experienced before.",
        postContent: `<div class="gaming-journey">
  <h3>What I Love About Assassin's Creed II</h3>
  <p>The open-world design of this game is breathtaking. Italy's cities feel alive, and the historical accuracy adds depth to the experience. The story of Ezio’s transformation from a vengeful youth to a legendary assassin is emotionally impactful.</p>
  <p>The game’s stealth and combat mechanics are a lot of fun, and the fluidity of parkour movement makes it one of the best action games I've ever played.</p>

  <h3>My Favorite Moments</h3>
  <p>There’s a moment early in the game where Ezio starts taking on larger missions that really set the tone for the rest of the adventure. The game keeps surprising me with new mechanics and epic plot twists. I can’t wait to see how the story unfolds.</p>
</div>`
    },
    {   
        //1
        postId: uuidv4(),
        postImage: "./images/image-2.jpg",
        postTitle: "Exploring the Depths of Subnautica",
        postDate: "MARCH 15, 2023",
        postPreviewContent: "Subnautica has truly been an unforgettable experience. The underwater world is vast and mysterious, full of life and danger. I’ve spent hours just exploring its depths.",
        postContent: `<div class="gaming-journey">
  <h3>Why Subnautica Is So Addictive</h3>
  <p>From the moment you crash-land on an alien ocean planet, Subnautica grabs you with its atmosphere. The ocean is both beautiful and terrifying, and the sense of isolation is palpable. Managing your resources while trying to survive adds an element of challenge that keeps me coming back.</p>
  <p>The game does an excellent job of building tension with its various underwater creatures, especially the deeper you go. Encountering new biomes and discovering secrets feels rewarding every time.</p>

  <h3>My Favorite Discoveries</h3>
  <p>Exploring the Lost River and finding the Sea Emperor Leviathan was one of the most nerve-wracking and thrilling moments of my gaming life. The world-building in Subnautica is second to none.</p>
</div>`
    },
    {   
        //2
        postId: uuidv4(),
        postImage: "./images/image-3.jpg",
        postTitle: "Far Cry 3: A Journey into Madness",
        postDate: "MARCH 18, 2023",
        postPreviewContent: "Far Cry 3’s insane story and chaotic gameplay have kept me hooked. I’m loving every moment of it, from the brutal combat to the eccentric characters.",
        postContent: `<div class="gaming-journey">
  <h3>The Madness of Vaas</h3>
  <p>Far Cry 3 is the definition of chaos. The island is filled with danger at every corner, and then there’s Vaas, who completely steals the show. His personality is wild, and his unpredictable behavior adds so much depth to the narrative.</p>
  <p>The game’s open-world design allows for tons of exploration and combat, and it’s easy to lose yourself in the chaos of trying to survive. Each new area I unlock has its own set of challenges, and it’s always satisfying to take down enemy bases.</p>

  <h3>Memorable Moments</h3>
  <p>The first time I fought against a herd of animals was intense. Watching the chaos unfold as I tried to outsmart them was a blast. The unpredictability of the world makes every encounter feel unique.</p>
</div>`
    },
    {   
        //3
        postId: uuidv4(),
        postImage: "./images/image-4.jpg",
        postTitle: "Dishonored: Stealth and Strategy",
        postDate: "MARCH 20, 2023",
        postPreviewContent: "Dishonored has been a great mix of stealth, action, and narrative. The ability to choose how to approach situations makes it incredibly rewarding.",
        postContent: `<div class="gaming-journey">
  <h3>Stealth at Its Finest</h3>
  <p>Dishonored is a game that rewards creativity. Whether I choose to use stealth to sneak past enemies or go in guns blazing, the game provides a satisfying experience either way. The blink ability is fantastic, and it makes traversal and combat feel fluid and dynamic.</p>
  <p>Every decision I make in the game has consequences, making it feel truly immersive. The story is gripping, and I can’t wait to see what happens next with Corvo’s journey.</p>

  <h3>My Favorite Missions</h3>
  <p>The mission where I had to infiltrate Lady Boyle’s estate was a standout moment. There were multiple ways to approach it, and I spent hours trying different strategies to see which one would work best.</p>
</div>`
    },
    {   
        //4
        postId: uuidv4(),
        postImage: "./images/image-5.jpg",
        postTitle: "Batman: Arkham Origins – The Dark Knight’s Early Days",
        postDate: "MARCH 22, 2023",
        postPreviewContent: "Batman: Arkham Origins gives a fantastic origin story for the Dark Knight. I’m enjoying learning about the early days of Batman’s crime-fighting career.",
        postContent: `<div class="gaming-journey">
  <h3>The Origins of the Bat</h3>
  <p>The Arkham Origins story is an excellent look into Batman’s early days as a crimefighter. It’s fascinating to see a younger, less refined Batman as he faces off against iconic villains. The game’s combat system feels fluid, and the world-building is top-notch.</p>
  <p>I especially love the detective mode and how Batman uses his skills to solve crimes. The story also does a great job of showing the development of his relationship with Gotham City and its criminals.</p>

  <h3>Memorable Boss Fights</h3>
  <p>The fight against Deathstroke is one of the most satisfying boss battles I’ve had in a while. It’s a pure test of skill, and the choreography of the fight is incredible.</p>
</div>`
    },
    {   
        //5
        postId: uuidv4(),
        postImage: "./images/image-6.jpg",
        postTitle: "Dark Souls: A Tough but Rewarding Journey",
        postDate: "MARCH 25, 2023",
        postPreviewContent: "Dark Souls is brutal, but every victory feels earned. I’m enjoying the challenge and the satisfaction that comes from overcoming tough enemies.",
        postContent: `<div class="gaming-journey">
  <h3>Why Dark Souls is So Addictive</h3>
  <p>Dark Souls is known for its punishing difficulty, but it’s also one of the most rewarding games I’ve played. Every death feels like a lesson, and each time I make it past a tough section, I feel accomplished. The world is dark and atmospheric, and the lore is fascinating.</p>
  <p>The intricate level design and interconnected world make exploration feel like a real adventure. Every corner hides a new challenge, and the game’s combat system is deep and satisfying.</p>

  <h3>My Favorite Boss Battles</h3>
  <p>The first time I defeated the Bell Gargoyles was a huge moment for me. The tension and the sense of accomplishment after that fight were incredible. It’s a game that makes you feel every triumph.</p>
</div>`
    },
    {   
        //6
        postId: uuidv4(),
        postImage: "./images/image-7.jpeg",
        postTitle: "Age of Mythology: Reliving the Glory of Ancient Civilizations",
        postDate: "MARCH 28, 2023",
        postPreviewContent: "Age of Mythology brings ancient civilizations to life. I’ve spent hours building armies, summoning gods, and battling mythological creatures.",
        postContent: `<div class="gaming-journey">
  <h3>The Appeal of Age of Mythology</h3>
  <p>Age of Mythology is one of the best real-time strategy games I’ve ever played. The game’s setting in ancient civilizations, combined with the addition of mythology, makes it both unique and engaging. I love playing as the Greeks and summoning powerful gods to aid me in battle.</p>
  <p>The game’s strategic depth is incredible, and the battles are always tense and exciting. The mythological creatures, like the Minotaur and the Cyclops, add a fun twist to the gameplay.</p>

  <h3>My Favorite Civilization</h3>
  <p>The Egyptians are my favorite civilization to play. Their unique units and god powers make them incredibly versatile, and I’ve had a lot of success with their strategies.</p>
</div>`
    },
    {   
        //7
        postId: uuidv4(),
        postImage: "./images/image-8.jpg",
        postTitle: "GTA San Andreas: A True Classic",
        postDate: "MARCH 30, 2023",
        postPreviewContent: "GTA San Andreas has been one of my all-time favorite games. The freedom it offers, combined with its rich story, makes it a classic in my eyes.",
        postContent: `<div class="gaming-journey">
  <h3>The Charm of San Andreas</h3>
  <p>GTA San Andreas is a game that defined an entire generation. The massive open world, combined with the ability to do almost anything, makes it incredibly fun to explore. From street races to gang wars, it’s packed with content.</p>
  <p>The story of CJ’s rise from humble beginnings to becoming a leader in the Grove Street gang is compelling, and the game’s humor and memorable characters add to the charm.</p>

  <h3>Favorite Activities</h3>
  <p>I spend hours just cruising around the streets of San Andreas, taking part in random activities like bike races or stealing cars. The freedom this game offers is unmatched.</p>
</div>`
    },
]
