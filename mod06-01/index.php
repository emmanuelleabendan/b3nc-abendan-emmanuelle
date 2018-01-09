<?php

	// echo "Welcome to php programming!";

	// phpinfo();

	// $name = "Emmanuelle Abendan";

	// print "Good evening, $name!";

	// echo "Today is " . date("l, F j, Y") . ".";
?>

<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">

	<title>Welcome to PHP programming!</title>
</head>
<body>

	<?php
		// $msg = "Welcome to PHP programming!";
		// echo "$msg";

		// $username = 'Jane Smith';
		// echo $username;
		// echo '<br />';
		// $username = 'John Doe';
		// $current_user = $username;
		// echo $current_user;

		// echo 'Buzz Lightyear once said: "You\'re a toy!"<br />';

		// echo 'You deleted C:\\*.*<br />';

		// echo 'You deleted C:\*.*<br />';

		// echo "This will not expand: \n a newline";

		// $number1 = 150;
		// $number2 = 33.5;

		// $sum = $number1 + $number2;
		// $product = $number1 * $number2;
		// $difference = $number1 - $number2;
		// $quotient = $number1 / $number2;

		// echo "Sum is: $sum" . '<br/>';
		// echo "Product is: $product" . '<br/>';
		// echo "Difference is: $difference" . '<br/>';
		// echo "Quotient is: $quotient" . '<br/>';

		$team = array('Kato', 'Shem', 'Angeli', 'Ali', 'Carmela');
		$colors = array('red', 'green', 'blue');
		$fruits = array('mango', 'apple', 'orange');

		for($ctr=0; $ctr<count($team); $ctr++) {
			echo $team[$ctr] . '<br />';
		}

		for($ctr=0; $ctr<count($colors); $ctr++) {
			echo $colors[$ctr] . '<br />';
		}

		for($ctr=0; $ctr<count($fruits); $ctr++) {
			echo $fruits[$ctr] . '<br />';
		}

		//DEFINE CONSTANT

		define("USER_NAME", "Juan Dela Cruz");

		// USER_NAME = "JOHn Smith"; - syntax error since its a constant

		$current_user = USER_NAME;
		echo $current_user;

	?>

</body>
</html>