<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лаба 1</title>
</head>
<body>
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $n = isset($_POST["n"]) ? (int)$_POST["n"] : 0;
            $x = isset($_POST["x"]) ? (float)$_POST["x"] : 0;

            $sum = 0;

            if ($x <= 1) {
                for ($i = 0; $i < $n + 1; $i++) {
                    $sum += 3.14/2 + pow(-1, $n + 1) * pow($x, 2*$n+1)/(2*$n + 1);
                }
                echo $sum;
            } else {
                echo "x не соответствует условию";
            }
        }
    ?>

    <form method="post">
        <label>Введите число n: </label>
        <input type="text" name="n"><br>
        <label>Введите число x: </label>
        <input type="text" name="x"><br>
        <button type="submit">Отправить</button>
    </form>
</body>
</html>
