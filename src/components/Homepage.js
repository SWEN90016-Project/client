// import AuthPage from "./AuthPage";

function Homepage() {
  return (
    <div className="h-screen bg-red-400">
      <h1>Welcome to the Online Language Research Tool </h1>
      <div class="columns-1"></div>
      <body>
        <p>Latest Research</p>

        <ul class="list-decimal">
          <li class="indent-8"> Research 1</li>
          <li class="indent-8">Research 2</li>
          <li class="indent-8">Research 3</li>
        </ul>
      </body>
    </div>
  );
}

export default Homepage;
