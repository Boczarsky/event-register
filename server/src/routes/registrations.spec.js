const { validateRegisterData } = require('./registrations');

test('should pass for correct data', () => {
    const data = {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        eventDate: new Date()
    }
    const valid = validateRegisterData(data);
    expect(valid.passes()).toBe(true);
});

test('should fail if data not provided', () => {
    const valid = validateRegisterData({});
    expect(valid.fails()).toBe(true);
})

test('should fail if email is in incorrect form', () => {
    const data = {
        firstName: "Jane",
        lastName: "Doe",
        email: "incorrect-form",
        eventDate: new Date()
    }
    const valid = validateRegisterData(data);
    expect(valid.fails()).toBe(true);
})

test('should fail if eventDate is incorrect', () => {
    const data = {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        eventDate: "incorrect"
    }
    const valid = validateRegisterData(data);
    expect(valid.fails()).toBe(true);
})