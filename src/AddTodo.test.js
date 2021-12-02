import { getByPlaceholderText, getByRole, getByText, render, screen, mount } from '@testing-library/react';
import AddTodo from './components/AddTodo';
import ReactDOM from "react-dom"
import userEvent from '@testing-library/user-event';

import "@testing-library/jest-dom"
import TodoList from './components/TodoLists/TodoList/TodoList';
import TodoLists from './components/TodoLists/TodoLists';
import WebNavbar from './components/WebNavbar'
import App from './components/App'

it("AddTodo renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddTodo></AddTodo>, div)
})

it("TodoList renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App name={"rona"} details={'dfsdfg'}></App>, div)
})

it("TodoLists renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoLists></TodoLists>, div)
})

it("WebNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WebNavbar></WebNavbar>, div)
})

test('is disable input works correctly', () => {
  render(<AddTodo />);
  const linkElement = screen.getByTestId("add_info");
  expect(linkElement).toBeInTheDocument();
});


test('is name div works correctly on AddTodo Component', () => {
  render(<AddTodo />);
  const linkElement = screen.getByTestId("name");
  expect(linkElement).toBeInTheDocument();
});

test('is details div works correctly on AddTodo Component', () => {
  render(<AddTodo />);
  const linkElement = screen.getByTestId("details");
  expect(linkElement).toBeInTheDocument();
});

test('is AddTodo button works correctly ', () => {
  const { getByRole } = render(<AddTodo />)

  const isButtonThere = getByRole('button', { name: /Add Todo/i })

})

test('is form works correctly', () => {
  const { getByRole } = render(<AddTodo />)

  const linkElement = screen.getByTestId("name_input");
  userEvent.type(linkElement, 'deneme name')

  const linkElement2 = screen.getByTestId("details_input");
  userEvent.type(linkElement2, 'deneme details')

  userEvent.click(getByRole('button', { name: /Add Todo/i }))

  const linkElement3 = screen.getByTestId("error");
  expect(linkElement3).toBeInTheDocument();
})



/* test('is Todo cards works correctly', () => {
    render(<TodoList name={"rona"} details={'dfsdfg'} />);
    const linkElement = screen.getByTestId("todolist-card");
    expect(linkElement).toBeInTheDocument();


  const wrapper = mount(<TodoList name={'michaelangelo'} />);

  expect(wrapper.find('Typography').text()).toEqual('michaelangelo');
})
 */


/* test('form renders correctly', () => {
    const { getByPlaceholderText } = render(<AddTodo />)
  act(() => {
    ReactDOM.render(<AddTodo />, container);
  });
  expect(getByPlaceholderText(/Fill The Form To Add A Todo../i)).toBeInTheDocument()
}) */