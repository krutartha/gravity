
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
</head>

<body>
    <?php include('./db.php') ?>
    <nav class="navbar navbar-light bg-dark">
        <span class="navbar-brand mb-0 h1 text-white">Gravitational Force Calculator</span>
    </nav>
    <br>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="container">
            <img class="w-25 float-left " src='./assets/sphere.png' id="ball-left">
        </div>
        <div class="container">
            <img id="ball-right" class="w-25 float-right " src='./assets/sphere.png'>
        </div>
        <div class="text-center">
            <img id="ruler"  class = "text-center w-75" src='./assets/ruler.png'>
        </div>
      </div>
    </div>
  </div>
  <form method="post" action="./backend.php">
  <div class="container">
    <div class="card">
      <div class="card-body">
          <label for="customRange2" id="mass1">Mass 1: 5000</label>
          <input type="range" class="custom-range" min="1000" max="10000" id="m1">
        <label for="customRange1" id="mass2">Mass 2: 5000</label>
        <input type="range" class="custom-range" min="1000" max="10000" id="m2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">R</span>
          </div>
          <input type="number" class="form-control" id="radius" placeholder="Enter the distance" aria-label="Username"
            aria-describedby="basic-addon1">
          <button type="button" id="button" class="btn btn-primary">Calculate</button>
          <br>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h6 class="float-left"id="force">Gravitational Force: </h6>
        <button  type="submit" id="addBtn" class="btn btn-primary float-right">Add to Graph</button>

      </div>
    </div>
  </div>
  </form>
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
    <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
    <script src="./app.js" async defer></script>


</body>

</html>
