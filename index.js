  names=['Michael','Igni','Francisca']
  const eventName= 'surprise'
  function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    }
    return messages;
  }

function countDown(pinteger){
    while(pinteger>=0){
    console.log(pinteger);
    pinteger--;
  }
}

countDown(10);
