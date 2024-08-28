const articles = [
    {
        id: 1,
        title: 'Exam Time',
        img: '/img/ExamTime.jpg',
        content: 'It was exam time at school, and Timmy was feeling nervous. His teacher, Mrs. Green, reminded everyone to stay calm and do their best. Timmy took a deep breath and started answering the questions. He remembered to read each question carefully and think about his answers. After the exam, Timmy felt relieved. His friends talked about how they did and shared their thoughts. They decided to celebrate with ice cream. Timmy was happy that the exam was over and enjoyed the fun ice cream party with his friends. They laughed and talked about their favorite flavors. Timmy felt proud of his hard work and looked forward to relaxing and spending time with his friends outside of school.'
    },
    {
        id: 2,
        title: 'Shopping Trip',
        img: '/img/ShoppingTrip.jpg',
        content: 'Today was a special day for Timmy and his mom. They planned a shopping trip to the big supermarket in town. Timmy was very excited because he loved helping his mom pick out fruits and vegetables. As they walked through the aisles, Timmy spotted a bright red apple. “Can we get this, Mom?” he asked. His mom smiled and nodded. They also picked up some bananas, oranges, and a big watermelon. Next, they went to the cereal aisle. Timmy’s eyes lit up when he saw his favorite cereal on the top shelf. With a little help from his mom, he grabbed the box and put it in the cart. “Good job!” his mom said, giving him a thumbs up. After they finished shopping, it was time to pay. Timmy helped his mom place the items on the counter. The cashier smiled and handed Timmy a small sticker as a reward for being such a good helper. Timmy was proud of himself. On the way home, he couldn’t wait to tell his dad about the shopping trip and all the things he helped buy.'
    },
    {
        id: 3,
        title: 'Rainy Day',
        img: '/img/RainyDay.jpg',
        content: 'It was a rainy day, and Timmy couldn’t go outside to play. Instead, he stayed inside and had fun with his toys. Timmy built a tall tower with his blocks and played with his toy cars on the floor. His mom made hot chocolate for him, and they read a story together. The rain tapped gently on the windows, creating a soothing sound. Timmy enjoyed the cozy atmosphere and loved spending time with his mom. They played board games and made paper crafts. By the afternoon, the rain had stopped, and Timmy looked outside at the fresh, wet world. He put on his rain boots and went outside to splash in the puddles. Even though the rain kept him indoors for a while, Timmy ended up having a fun and memorable day.'
    },
    {
        id: 4,
        title: 'School Trip',
        img: '/img/SchoolTrip.jpg',
        content: 'Timmy’s class went on a school trip to the zoo. They saw many amazing animals like lions, elephants, and giraffes. Timmy was excited to see the monkeys swinging from tree to tree. His teacher gave them a map, and they followed it to different animal exhibits. At lunchtime, Timmy and his friends had a picnic near the penguin exhibit. They ate sandwiches and talked about their favorite animals. Timmy was fascinated by the way penguins waddled and played with each other. After lunch, they visited the reptile house and saw snakes and lizards. Timmy learned a lot about the animals and enjoyed the day out of the classroom. By the end of the trip, Timmy was tired but happy, and he couldn’t wait to share his zoo adventure with his family.'
    },
    {
        id: 5,
        title: 'Camping',
        img: '/img/NOphoto.png',
        content: 'Timmy and his family went camping in the woods. They set up their tent and made a campfire. Timmy roasted marshmallows and made s’mores, which were delicious. At night, they sat around the campfire, telling stories and singing songs. Timmy listened to the sounds of the forest, like the chirping of crickets and the rustling of leaves. He loved looking up at the starry sky. The next morning, Timmy and his family went on a hike. They saw beautiful trees, colorful wildflowers, and even spotted a deer. Timmy enjoyed the fresh air and the adventure. When they returned to the campsite, they cooked breakfast over the campfire. Timmy felt happy and refreshed from his camping trip and looked forward to more outdoor adventures in the future.'
    },
    {
        id: 6,
        title: 'No Pets Here',
        img: '/img/NOphoto.png',
        content: 'Timmy visited his friend Lily’s house, but Lily’s mom said, “No pets here.” Timmy was a little disappointed because he loved animals. Instead, Lily and Timmy played games inside. They created their own imaginary pets using toy blocks and stuffed animals. Timmy and Lily made up fun stories about their pretend pets going on exciting adventures. They had a great time playing together and making up new games. Timmy realized that even though there were no real pets, he could still have a lot of fun with his friend. He enjoyed his visit to Lily’s house and was excited to play again next time.'
    },
    {
        id: 7,
        title: 'Sick Day',
        img: '/img/NOphoto.png',
        content: 'Timmy was feeling sick and had to stay home from school. His mom made him a cozy bed on the couch with soft blankets and pillows. She made him some warm soup to help him feel better. Timmy watched his favorite cartoons and read storybooks to pass the time. His mom checked on him regularly and made sure he had everything he needed. After a few days of rest and care, Timmy started to feel better. He was happy to be getting back to his normal activities and looked forward to returning to school to see his friends. Timmy learned that resting and taking care of himself were very important when he was feeling under the weather.'
    },
    {
        id: 8,
        title: 'Football Match',
        img: '/img/NOphoto.png',
        content: 'Timmy’s soccer team had an important match against another team. Timmy was excited and a little nervous. He had practiced hard and was ready for the game. During the match, Timmy ran fast and played with all his energy. His teammates worked together, passing the ball and defending their goal. Timmy made some great plays and even helped score a goal. The game was intense, and Timmy’s team played their best. At the end of the match, they didn’t win, but Timmy was proud of how they played. They congratulated each other and celebrated their effort. Timmy felt happy and learned the value of teamwork and perseverance.'
    },
    {
        id: 9,
        title: 'Back to School',
        img: '/img/NOphoto.png',
        content: 'The first day of school arrived, and Timmy was excited to see his friends again. He wore his new backpack and had a special lunchbox. Timmy met his new teacher, Ms. Clark, and she introduced them to their classroom. They played icebreaker games and talked about their summer vacations. Timmy enjoyed hearing about his friends’ adventures and sharing his own. Ms. Clark explained the class rules and the fun activities they would do. Timmy was happy to be back at school and looked forward to learning new things. He felt excited about the new school year and the opportunities it would bring.'
    },
    {
        id: 10,
        title: 'The Robot',
        img: '/img/NOphoto.png',
        content: 'Timmy received a robot-building kit for his birthday. He was thrilled and started working on it right away. Following the instructions carefully, he assembled all the pieces and built a cool robot. When he turned it on, the robot moved and lit up, which amazed Timmy. He programmed the robot to perform simple tasks like picking up small objects and following a path. Timmy showed his creation to his family, who were impressed by his work. He felt proud of his robot and excited about the possibilities of building more robots in the future. Timmy’s creativity and curiosity led to a fantastic new hobby.'
    },
    {
        id: 11,
        title: 'Nell’s Books',
        img: '/img/NOphoto.png',
        content: 'Nell loved reading books and had a special shelf in her room filled with her favorites. One day, she discovered a new book about a magical adventure. As she read, she was transported to a fantastical world full of exciting characters and adventures. Nell enjoyed the story so much that she wanted to share it with her friends. She invited them over for a book club meeting where they discussed their favorite parts and talked about the characters. Nell was delighted to see her friends enjoying the book and sharing their own reading experiences. The book club became a regular activity, and Nell looked forward to discovering and discussing new stories with her friends.'
    },
    {
        id: 12,
        title: 'Little Monsters',
        img: '/img/NOphoto.png',
        content: 'Timmy and his sister had a fun game with their little toy monsters. They created a story where the monsters went on a magical adventure in a faraway land. Timmy and his sister imagined different challenges for the monsters, like crossing a river or finding hidden treasure. They used their creativity to come up with exciting scenarios and made up fun dialogues for their monsters. Timmy enjoyed using his imagination and playing with his sister. They spent hours creating and exploring new adventures with their little monsters. At the end of the day, Timmy felt happy about the creative play and looked forward to more imaginative games.'
    }
];


export function getArticleById(id) {
    return articles.find(article => article.id === parseInt(id));
}

export default articles;
