# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


export default function App(){
 return (
  <>
 <form className="new-item-form">
    <div className=" form-row">
      <label> New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
 </form>

    <h1 className = "header">Todo List</h1>
    <ul className="list">
      <li>
        <lable>
          <input type="checkbox">Item 1</input>
          <button className="btn btn-danger">Remove</button>
        </lable>
      </li>
      <li>
  <lable>
    <input type="checkbox">Item 2</input>
    <button className="btn btn-danger">Remove</button>
  </lable>
</li>
    </ul>
    </>
 )
}