function updatePerson(id, person) {
    const people = [];
    const index = people.findIndex(p => p.id === id);
    if (index !== -1) {
        people[index] = { ...people[index], ...person, id: id };
        return true;
    }
    return false;
}
