//jshint esversion:6

module.exports = getDate;

function getDate() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}


/* FOR MORE THAN ONE FUNCTION TO BE EXPORTED

//jshint esverion:6

module.exports.getDate = getDate;
function getDate() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}


module.exports.getDay = getDay;
function getDay() {
    let today = new Date();
    let options = {
        weekday: "long",
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
} 

AND IT IS CALLED LIKE SO IN app.js;
INSTEAD OF:
app.get("/", function (req, res) {

    let day = date();
    res.render("list", {
        listTitle: day,newListItems: items}); //list is shortened from list.ejs

});

WE HAVE:
app.get("/", function (req, res) {

    let day = date.getDate();
    res.render("list", {
        listTitle: day,newListItems: items}); //list is shortened from list.ejs

});




WE CAN REFACTOR LIKE THIS:

module.exports.getDate = getDate;

var getDate = function(){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

                OR
                module.exports.getDate = function() {
                    let today = new Date();
                    let options = {
                        weekday: "long",
                        day: "numeric",
                        month: "long"
                    };
                    return today.toLocaleDateString("en-US", options);
                }

                        OR
                        exports.getDate = function () {
                            const today = new Date();
                            const options = {
                                weekday: "long",
                                day: "numeric",
                                month: "long"
                            };
                            return today.toLocaleDateString("en-US", options);
                        }


    All lets can be changed to const since there is no change coming to the variables
*/