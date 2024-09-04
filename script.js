let question;

        let answer;

let choice = prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math');

    switch(choice) {
        case '1':
            question = "რა არის typeof(5)?";
            answer = "number NUMBER NumBeR";
            break;
        case '2':
            question = "შეიძლება თუ არა let-ის რედეკლალირება";
            answer = "Yes yes YeS";
            break;
        case '3':
            question = "რას აბრუნებს console.log(Math.floor(2.1))";
            answer = "ori ORI oRi";
            break;
        default:
            console.log('არასწორი არჩევანი');
            break;
}

if (question) {
    let userAnswer = prompt(question);

    if (answer.toLowerCase().includes(userAnswer.toLowerCase())) {
        console.log('თქვენი პასუხი სწორი იყო!');


    } else {
        console.log('სამწუხაროდ ვერ გამოიცანით');
    }
}
