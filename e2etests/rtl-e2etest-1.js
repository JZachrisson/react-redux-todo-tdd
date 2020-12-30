const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';
    browser.url('http://localhost:3000/');
    browser.$('.todo-input').setValue(todoText);
    browser.elementClick('.todo-submit');
    const actual = browser.$('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});
