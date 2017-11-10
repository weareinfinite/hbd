

var utils = {

    getBirthdayPeoples : ()=> {

        let date = new Date();

        let today = date.getDate() + '-' + (date.getMonth() +1)

        console.log(today)

        var birthdayData = bds.find(bd => {

            return (bd.date === today)

        })

        if(birthdayData) {
            return  birthdayData.peoples.map(p => p.name).join(', ')
        }

        return false;

    },
    randomWish : () => {

        let w =[`Happy B'Day ❤ `,`Many Many Happy   Return Of the day  `]

        return utils.pickRandom(w);

    },

    pickRandom: (list) => {

        return list[Math.floor(Math.random() * list.length)];

    },

    getSplitedText: () => {


        if(utils.getBirthdayPeoples()) {

            return utils.randomWish().split('').concat(utils.getBirthdayPeoples().split(''))
        }
        else {
            return utils.pickRandom(quotes).split('')
        }

    }
}


