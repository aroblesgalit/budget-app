// BUDGET CONTROLLER
var budgetController = (function() {

    // Expense function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Income function constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // Data structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

})();




// UI CONTROLLER
var UIController = (function() {

    // Object to store all css strings 
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    // Method to get input data
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // Set up event listeners
    var setupEventListeners = function() {

        // Receives the strings from the UI CONTROLLER
        var DOM = UICtrl.getDOMstrings();
    
        // When the CHECK MARK button is clicked
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // When the ENTER key is pressed
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });

    };

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    };
    
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();











