var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
console.log('here are the topics we learned through prework:');
function listTopics()
{for (var x = 0; x < topics.length; x++)
{console.log(topics[x]);}};

function selectTopic()
{if (randomTopic === 'HTML') {console.log("lets study HTML");
} else if (randomTopic === 'CSS') {console.log("lets study CSS!");
} else if (randomTopic === 'Git') {console.log("lets study Git!");
} else if (randomTopic === 'Javascript') {console.log("lets study Javascript");
} else {console.log('please try again!');}}
listTopics();
console.log('which topic should we study first?');
selectTopic();