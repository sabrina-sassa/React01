import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
         <form class="row g-3 position-absolute top-50 start-50 translate-middle"  >
      <div class="row g-3">
        <div class="col">
        <label for="inputFirstName4" class="form-label">First Name : </label>
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
        </div>
        <div class="col">
        <label for="inputLastName4" class="form-label">Last Name : </label>
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email : </label>
        <input type="email" class="form-control" id="inputEmail4"/>
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Password : </label>
        <input type="password" class="form-control" id="inputPassword4"/>
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address : </label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">City : </label>
        <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State : </label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>.1.</option>
          <option>.2.</option>
          <option>.3.</option>
          <option>.4.</option>

        </select>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck"/>
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    </div>
  );
}

export default App;
