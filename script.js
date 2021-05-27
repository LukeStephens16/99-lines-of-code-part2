document.addEventListener("DOMContentLoaded", function () {


    let button = document.getElementById('button');

    button.addEventListener("click", function () {

        var friends = ['Jackson', 'Jack', 'Morgan', 'Kaleb', 'Prim'];

        for (let f = 0; f < friends.length; f++) {

            let div = document.createElement('div');
            let heading = document.createElement('h3');

            document.body.appendChild(div);
            div.className = 'friend';
            heading.innerHTML = friends[f];
            div.appendChild(heading);



            for (var i = 99; i > 0; i--) {


                if (i === 1) {
                    let p = document.createElement('p')
                    p.innerHTML = (i + ' line of code in the file, ' + i + ' line of code; ' + friends[f] + ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file.');
                    div.appendChild(p)
                } else {
                    let p = document.createElement('p')
                    p.innerHTML = (i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.');
                    div.appendChild(p)
                };
            };
        };
    });

})

