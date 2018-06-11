var numberOfItemsToAdd = 1000;
var Suites = [];

Suites.push({
    name: 'Angular',
    url: 'todomvc/angular2/index.html',
    version: 'T01 - Create',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('T01: Create ' + numberOfItemsToAdd + ' Items', function (newTodo, contentWindow, contentDocument) {
            var btnAdd = contentDocument.querySelector("#btn-add");
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);
                btnAdd.click();
            }
        })
    ]
});

Suites.push({
    name: 'Angular',
    url: 'todomvc/angular2/index.html',
    version: 'T02 - Update',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
       
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var updateButtons = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < updateButtons.length; i++)
                updateButtons[i].click();
        })
    ]
});

Suites.push({
    name: 'Angular',
    url: 'todomvc/angular2/index.html',
    version: 'T03 - Delete',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
       
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deletedButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deletedButtons.length; i++)
                deletedButtons[i].click();
        })
    ]
});

Suites.push({
    name: 'React',
    url: 'todomvc/react/index.html',
    version: ' T01 - Create',
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.Utils.store = function () {}
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('T01: Create' + numberOfItemsToAdd + ' Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.keyCode = 13; // VK_ENTER
                newTodo.dispatchEvent(keydownEvent);
            }
        })
    ]
});


Suites.push({
    name: 'React',
    url: 'todomvc/react/index.html',
    version: ' T02 - Update',
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.Utils.store = function () {}
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('UpdateAllItems', function (newTodo, contentWindow, contentDocument) {
            var updateButtons = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < updateButtons.length; i++)
                updateButtons[i].click();
                
        }),
    ]
});


Suites.push({
    name: 'React',
    url: 'todomvc/react/index.html',
    version: 'Delete - Delete',
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.Utils.store = function () {}
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        })
    ]
});

Suites.push({
    name: 'Vue',
    url: 'todomvc/vue/index.html',
    version: 'T01 - Create',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('T01: Create' + numberOfItemsToAdd + ' Items', function (newTodo, contentWindow, contentDocument) {
            var app = contentWindow.app;
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = document.createEvent('Event');
                inputEvent.initEvent('input', true, true);
                // failed // app.newTodo = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keyupEvent = document.createEvent('Event');
                keyupEvent.initEvent('keyup', true, true);
                keyupEvent.keyCode = 13; // VK_ENTER
                app.newTodo = 'Something to do ' + i;
                newTodo.dispatchEvent(keyupEvent)
            }
        })
    ]
});

Suites.push({
    name: 'Vue',
    url: 'todomvc/vue/index.html',
    version: 'T02 - Update',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.toggle');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        })
    ]
});

Suites.push({
    name: 'Vue',
    url: 'todomvc/vue/index.html',
    version: 'T03 - Delete',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            var deleteButtons = contentDocument.querySelectorAll('.destroy');
            for (var i = 0; i < deleteButtons.length; i++)
                deleteButtons[i].click();
        })
    ]
});
