const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      this.print([i]);
    }
  },

  add: function (text) {
    this.items.unshift({
      text: text,
      completed: false,
    });
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    let x = "[x]";
    let o = "[]";
    if (this.items[index].completed === true) {
      console.log(`${x} ${this.items[index].text}`);
    } else {
      console.log(`${o} ${this.items[index].text}`);
    }
  },

  complete: function (index) {
    this.items[index].completed = true;
    this.printAll();
  },
};

// // Вывести список на экран
todoList.printAll();

// // Добавить новое дело
todoList.add("Сделать зарядку");

// // Удалить первый элемент
todoList.remove(1);

// Делает статус [х] в списке
todoList.complete(1);

// // Показывать один элемент списка
todoList.print(0);

// Статус [х] или []
todoList.complete(1);
