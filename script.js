$(document).ready(function() {
  var quoteList = [
     {
    author: "Jang Gang",
    source: "Season 1 Episode 1",
    quote: "I shall retrieve his soul."
  },
  {
    author: "Geon's mother",
    source: "Season 1 Episode 1",
    quote: "No! You were the one who turned my son into a soul shifter."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 1",
    quote: "If word gets out that I used forbidden sorcery, we will both be doomed."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 1",
    quote: "A crack forms when the bodies clash with the souls they carry, which causes them to lose energy."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 1",
    quote: "I guess I should stop shifting souls."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 1",
    quote: "The alchemy of souls. That is forbidden sorcery."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "The energy of the sky rules the wind, clouds, and rain. This energy reached the ground and created a huge form of energy. A country was built around Lake Gyeongcheondaeho, a lake that embodied that energy."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "Humans who had the power to control this great energy were called mages."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "This story is about the mages of Daeho, a place that does not exist in both history books or maps."
  },
  {
    author: "Naksu",
    source: "Season 1 Episode 1",
    quote: "They call me Naksu, for wherever I go, heads fall to the ground. A beautiful name, is it not?"
  },
  {
    author: "Heo Yeom",
    source: "Season 1 Episode 1",
    quote: "This mark shows that her soul has left the body. Remember this mark. When someone tries to switch bodies, it leaves a blue bruise like this right on top of their heart."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "She seems to have tried, but I think she failed."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "This proves that her soul has escaped her body, but we found no signs of her soul having entered another body."
  },
  {
    author: "Heo Yeom",
    source: "Season 1 Episode 1",
    quote: "She may have been an assassin who killed people like it was nothing, but she was still human. She must have had a story of her own."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "Word will spread about the alchemy of souls."
  },
  {
    author: "Heo Yeom",
    source: "Season 1 Episode 1",
    quote: "Has it been 20 years since we have seen a soul shifter?"
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "You seem awfully excited to start rumors."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "Now that I have learned a big lesson, I would like to end it and leave."
  },
  {
    author: "Monk Ho-Yeong",
    source: "Season 1 Episode 1",
    quote: "No one in this world will teach you spells because of your father."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "I will find my own master. Someone extremely powerful and skilled."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 1",
    quote: "I should not switch bodies too soon. Let us stay as Mu-deok for now."
  },
  {
    author: "Ju-Wol",
    source: "Season 1 Episode 1",
    quote: "And they are called the Four Seasons. The daughter of the Jin family who has the vitality of spring: Jin Cho-yeon. The heir of the Park family who has the energy of a hot summer: Park Dang-gu. The genius of the Seo family who is as noble as the sunset in fall: Seo Yul. Then there is Jang Uk, the successor of the Jang family who is as dazzling as the winter snow."
  },
  {
    author: "Ju-Wol",
    source: "Season 1 Episode 1",
    quote: "The Jin, Park, Seo, and Jang family. They are the most well-known mage families in Daeho. Their children are known as the Four Seasons."
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 1",
    quote: "You flick energy with a blade just like how you flick water. A single strike is enough to kill someone."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "Yes, she aimed at my vital point in just one go. But why did she roll off then? "
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "You cannot even take out your own father's sword. How do you expect to learn spells?"
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 1",
    quote: "No one in Daeho will be able to go against your father and open your gate of energy. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "Why would he decide my own fate?"
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "I will find someone myself. A master who will open my gate of energy and teach me how to practice spells. Then I will take out that sword and break it in two."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "I knew the moment I saw you. You are my master."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 1",
    quote: "The soul shifter Naksu, the Shadow Assassin, I have been searching for someone who can break this spell to call my master. I want you to be my master."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 2",
    quote: "I have blocked his gate of energy. He will not be able to learn any spells while he is alive."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 2",
    quote: "I forbid anyone from opening his gate of energy!"
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "And finally, I have met the master who will change my fate. I knew the moment I saw you. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "I am planning to save you. You will not get caught if you stay by my side."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "How should you address me if you want to lie low? Young Master"
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 2",
    quote: "Only those of Songrim can break the barrier."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "We could form a beautiful relationship where we benefit from each other."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "How merciless. After all, I helped you."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Sorry that I am so merciless for such a cute face."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "I thought you were pretending to be clumsy."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Taking sides? Are you seriously that childish?"
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "Why are you talking casually in this situation?"
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 2",
    quote: "The alchemy of souls, a type of sorcery, has one weakness. There is a gap between the body and the soul. The evil energy seeps out from it. And Gwigu can detect that. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Uk, feign ignorance even if I get caught."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "Stay right by my side. No one here will let that thing attack me."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "I see. How evil. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "By the way, you have the habit of glaring at others. Keep doing that, and you will get caught."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Anyone who came that close to me died in my hands."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "But what kind of an heirloom is this fragile?"
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Then open his gate of energy for him. He desperately wants it. You are his friends. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Then he is already being punished for his entire lifetime."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "The people I have met so far only wanted me dead. You are the first person who tried to save me."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "Even if we meet again and come this close to each other, I will spare you."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "I am betting everything on you. So I hope you will survive. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "He ingested poison. His heart will stop in six hours. It will be too late by the time you find out and concoct an antidote. There is only one way to save him. Open his gate of energy. Or else, he will die. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "Mu-deok. Both of us could have died. You are… You are really crazy. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 2",
    quote: "So you survived, my pupil. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 2",
    quote: "That is right. I almost died thanks to you. My crazy master."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 3",
    quote: "Believe what you wish to believe."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 3",
    quote: "See? He is your son. A son you are willing to protect even at the risk of your own life."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 3",
    quote: "I am merely trying to keep him safe."
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 3",
    quote: "Not only does his birth make no sense, but it never should have happened either. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "She did not poison me. I poisoned myself. Please help. Mu-deok risked her life to do what I asked."
  },
  {
    author: "Seo Yul",
    source: "Season 1 Episode 3",
    quote: "She risked her life for him even though they only just met. It is strange."
  },
  {
    author: "Seo Yul",
    source: "Season 1 Episode 3",
    quote: "She easily deceives people. She did not speak even though she was tortured. "
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 3",
    quote: "There is more to her than meets the eye."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "The people of Songrim are too nice. If this is how they torture people… "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "I am the only person who is safe enough to come this close to you."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "All my life, no one ever seemed to know how desperate I was. No one has ever risked their lives for me like you did. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "People think I got kicked out every time, but I was the one who left."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "The moment I get my energy back and become Naksu again, we will no longer be master and pupil. Because then, you should no longer have a reason to protect me, nor should I have a reason to go easy on you. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "I, Jang Uk, your pupil, will serve and protect my master, Mu-deok, with all my heart. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "If you master your spells, you will neither feel cold on ice nor hot walking on fire. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "In order to become the best mage, you must go through several steps."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "First is Jipsu, the ability to gather the energy of water. Second is Ryusu, the ability to gain energy from the flow of water. Then comes Chisu, the ability to control the energy in the atmosphere. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "I did not feel motivated to do so. As you already know, I need to feel motivated in order to do something."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "I am a quick learner. I will quickly master Jipsu. How long does it take?"
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "He was a genius who only took a year to master Jipsu."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "If he took a year, I will do it in six months. No, I will do it in three months. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "I am determined, so do not discourage me."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 3",
    quote: "Please do not resent me for that."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "It is normal to pick on the weak. That is how the world works."
  },
  {
    author: "Maidservant Kim Do-Joo",
    source: "Season 1 Episode 3",
    quote: "This wine was made with spring water from a volcanic island in Southern Daeho. It is dark wine, the best wine you can find in Daeho. This is a rare delicacy."
  },
  {
    author: "Jin Ho-Gyeong",
    source: "Season 1 Episode 3",
    quote: "You will have to take your sister's place and become the leader that guards Jinyowon for the family. Find a man who will support your cause."
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 3",
    quote: "If he is not busy, he normally sleeps early and wakes up early too. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "I lived a harsh life, so I learned a few moves just to keep myself safe. "
  },
  {
    author: "Heo Yeom",
    source: "Season 1 Episode 3",
    quote: "Your mother, Do-hwa, was extremely kind-hearted. Always remember that and ignore what everyone else says."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "So be careful who you fall for. Only I get to come this close."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 3",
    quote: "Fine. I will only allow it to you."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "What? Why does that require effort? "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 3",
    quote: "Why not? It makes no sense. Come on. Humor me. "
  },
  {
    author: "Jang Gang",
    source: "Season 1 Episode 3",
    quote: "His existence will bring chaos. He should not attract attention or challenge anyone. We must make people think that he is nothing special."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 4",
    quote: "I was abandoned from the moment I was born. And this is not my first time getting kicked out. It does not faze me. "
  },
  {
    author: "Heo Yeom",
    source: "Season 1 Episode 4",
    quote: "The alchemy of souls was not a type of sorcery from the start. You can only perform this once you have mastered Jipsu, Ryusu, Chisu, and ultimately, Hwansu. "
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 4",
    quote: "Hwansu is the godlike power of changing water to fire and vice versa. Is it not? Humans cannot reach that level. Right? "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 4",
    quote: "I want to unsheathe it and show them. Is that an act of stupidity?"
  },
  {
    author: "Park Dang-Gu",
    source: "Season 1 Episode 4",
    quote: "I see. You are going to give him some medicine before nitpicking at him."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 4",
    quote: "I am sure you expected me to grovel in humiliation. Going against you would be an act of stupidity. However, there is someone who sees it as one of vigor. So I shall try. "
  },
  {
    author: "Go Won",
    source: "Season 1 Episode 4",
    quote: "Then what? Should I just leave? You should have stopped me before I started. "
  },
  {
    author: "Jin Mu",
    source: "Season 1 Episode 4",
    quote: "I am the Assistant Gwanju. I would appreciate it if you showed more respect."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 4",
    quote: "You are intelligent and pick up things quickly."
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 4",
    quote: "Just stay a clueless Young Master of the Jang family. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 4",
    quote: "Did he scold you again? I thought you were used to being scolded… "
  },
  {
    author: "Maidservant Kim Do-Joo",
    source: "Season 1 Episode 4",
    quote: "Why did you not dodge his blade? Was it because you needed another reason to kick him out?"
  },
  {
    author: "Maidservant Kim Do-Joo",
    source: "Season 1 Episode 4",
    quote: "Breaking his heart must be more painful than getting stabbed."
  },
  {
    author: "Seo Yul",
    source: "Season 1 Episode 4",
    quote: "You have put him in danger once again."
  },
  {
    author: "Jin Mu",
    source: "Season 1 Episode 5",
    quote: "I will give you power. Will you come with me?"
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 5",
    quote: "I do not know if I toughened up to survive or if I survived because I was tough. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 5",
    quote: "This is a place so rugged and remote that even echoes cannot be heard. Hence the name, Danhyanggok."
  },
  {
    author: "King Go Soon",
    source: "Season 1 Episode 5",
    quote: "A crack has formed and damaged the stability and peace that had existed between the royal family and mages. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 5",
    quote: "A small amount of energy created immense strength."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 5",
    quote: "Who are you to stop me from enjoying my peace?"
  },
  {
    author: "Jang Uk & Master Lee",
    source: "Season 1 Episode 5",
    quote: "(Jang Uk) Once I put my mind to something, I tend to learn very fast. (Master Lee) I like you even more now."
  },
  {
    author: "Gil-Ju",
    source: "Season 1 Episode 5",
    quote: "She has no blue mark. Is she really not Naksu?"
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 5",
    quote: "Relieve yourself of everything you have wanted to say but could not, thinking it might make you seem petty. "
  },
  {
    author: "Go Won & Mu-deok",
    source: "Season 1 Episode 5",
    quote: "(Go Won) Are you offering to be a verbal outhouse of sorts? (Mu-deok) Goodness, that would be too grand of a title for me."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 5",
    quote: "Mu-deok is like a bird's egg. She needs to be embraced."
  },
  {
    author: "Jang Uk & Master Lee",
    source: "Season 1 Episode 5",
    quote: "(Jang Uk) Is that level even possible for a human being to master? (Master Lee) Of course. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 5",
    quote: "If I ever happen to get caught by them, do not try to save me."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 5",
    quote: "I wanted to do nothing, but I feel motivated to climb this tree."
  },
  {
    author: "Seo Yul",
    source: "Season 1 Episode 6",
    quote: "I could not ask her why. The moment she sliced my sincerity in half, I could no longer cherish our memories together. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 6",
    quote: "That is the type of girl she is. She does not easily like or feel shy in front of others."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 6",
    quote: "I did not know my pupil was this possessive. Fine. My one and only pupil will be you who spews nonsense first thing in the morning. Happy? "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 6",
    quote: "No, thank you. I do not want to climb such a special tree with just anyone. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 6",
    quote: "Have I ever listened to anyone? Tell him I am doing the very opposite and being reckless. "
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 6",
    quote: "I would not hesitate to stab you with a sword if that could get you back on your feet."
  },
  {
    author: "Master Lee",
    source: "Season 1 Episode 6",
    quote: "Is he trying to run before learning to walk?"
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 6",
    quote: "Yes, I do. I truly want to. I will get married at all costs. Wait up. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 6",
    quote: "Yes. That is what I believed all my life. I do not want to deny it now. So… I will not sit still. Do not stop me no matter what I do."
  },
  {
    author: "Master Lee",
    source: "Season 1 Episode 7",
    quote: "Eventually, that boundless power ended up causing chaos. In order to possess the unmelting ice that produced the Soul Ejector, the battle of mages turned into bloodshed, and Daeho became a living hell.  "
  },
  {
    author: "Go Won",
    source: "Season 1 Episode 7",
    quote: "Yul is always so calm, but he can be a scatterbrain when he is startled too."
  },
  {
    author: "The Mirror of Longing",
    source: "Season 1 Episode 7",
    quote: "That is right. I am an illusion. An illusion that reflects who you are. Humans are incapable of seeing themselves with their own eyes. The only way is to see themselves through a mirror. So the perception you have about yourself is nothing but an illusion.The same goes for how others perceive you. They only see what they want to see and create an illusion that suits them."
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 7",
    quote: "If there is nothing to reflect, a mirror becomes useless. "
  },
  {
    author: "Park Jin",
    source: "Season 1 Episode 7",
    quote: "When you have a lot to protect, you sometimes have no choice but to be heartless. "
  },
  {
    author: "Jang Uk",
    source: "Season 1 Episode 7",
    quote: "The mirror I saw inside Jinyowon told me that people only see what they wish to see. That it is an illusion. All my life, I tried so hard to prove to everyone that I was my father's son. But… you told me I was not. Though it hurt, it got rid of my illusion."
  },
  {
    author: "Mu-deok / Naksu & Jang Uk",
    source: "Season 1 Episode 8",
    quote: "(Mu-deok / Naksu) Your master is neither strong enough to pull you up nor support you from the bottom. (Jang Uk) You were never like that to begin with. You always pushed me to my death. But whenever you did that, I found myself on a whole new level. Keep doing that and stay by my side."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 8",
    quote: "First, do not do anything and just defend. If you make the first move with your current skills, you will die. You must only attack him when he loses his focus."
  },
  {
    author: "Mu-deok / Naksu",
    source: "Season 1 Episode 9",
    quote: "The reason you get lost when you have a lot on your mind is that you are focused on too many things. When that happens, just try to focus on one thing."
  }
  ];

// var quoteRandomize = '';
// var quoteMain = '';
// var quoteAuthor = '';
// var quoteSource = '';
  
  function quoteGenerate() {  
    var quoteRandomize = Math.floor(Math.random() * quoteList.length);
    var quoteMain = quoteList[quoteRandomize].quote;
    var quoteAuthor = quoteList[quoteRandomize].author;
    var quoteSource = quoteList[quoteRandomize].source;
    
    $("#quote").text(quoteMain);
    $("#author").text(quoteAuthor);
    $("#source").text(quoteSource);
  };
  
  /**** Quote Limit Test ****/
  // function quoteTweet() {   
  //   if((quoteMain + quoteAuthor).length > 140 ){
  //     alert("no");
  //   } else {
  //     quoteTweet();
  //   }
  //   window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
  // };
  
  $(".tweet").on("click", function() {
    window.open("https://twitter.com/home/?status=" + "\"" + $("#quote").text() + "\"" + " - " + $("#author").text(), '_blank');
    });
  
  // $(".tweet").on("click", function() {
  //  quoteTweet();
  // });

  $("#new-quote").on("click", function() {
    quoteGenerate();
  });
  // quoteTweet();
  quoteGenerate();
});
