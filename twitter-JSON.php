<?php 

require 'functions.php';

$user = $_GET['user'];

$tweets = getTweetsFromJSON($user);
echo '<ul>';
foreach($tweets as $tweet) {
	echo '<li>';
	echo '<img src="'.$tweet->user->profile_image_url.'" />';
	echo $tweet->text;
	echo '<div class="date">'.$tweet->created_at.'</div>';
	echo '<div style="clear:both;"></div>';
	echo '</li>';
}
echo '</ul>';
