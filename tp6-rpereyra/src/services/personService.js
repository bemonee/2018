export default {
  getAll() {
    return new Promise((res, rej) => {
      try {
        setTimeout(() => {
          res(JSON.parse(localStorage.getItem("people")) || []);
        }, 2000);
      } catch (e) {
        rej(e.toString());
      }
    });
  },

  getOne(id) {
    return new Promise((res, rej) => {
      this.getAll()
        .then((persons) => {
          const person = persons.find(person =>
            person.id == id
          );
          res(person);
        })
        .catch((err) => {
          rej(err);
        });
    });
  },

  create(paramPerson) {
    return new Promise((res, rej) => {
      this.getAll()
        .then((persons) => {
          let maxId = Math.max.apply(Math, persons.map(person => person.id));
          if(maxId === -Infinity) {
            maxId = 1;
          } else {
            maxId++;
          }
          paramPerson.id = maxId;
          persons.push(paramPerson);
          try {
            localStorage.setItem("people", JSON.stringify(persons));
            res(true);
          } catch (e) {
            rej(e.toString())
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  },

  update(paramPerson) {
    return new Promise((res, rej) => {
      this.getAll()
        .then((persons) => {
          const personIndex = persons.findIndex(person => person.id === paramPerson.id);
          if (personIndex !== -1) {
            persons[personIndex] = paramPerson;
            try {
              localStorage.setItem("people", JSON.stringify(persons));
              res(true);
            } catch (e) {
              rej(e.toString())
            }
          }
          rej("Person not found.");
        })
        .catch((err) => {
          rej(err);
        });
    });
  },

  delete(personId) {
    return new Promise((res, rej) => {
      this.getAll()
        .then((persons) => {
          const remainingPersons = persons.filter(person =>
            person.id != personId
          );
          try {
            localStorage.setItem("people", JSON.stringify(remainingPersons));
            res(true);
          } catch (e) {
            rej(e.toString())
          }
          rej("Person not found.");
        })
        .catch((err) => {
          rej(err);
        });
    });
  }
}