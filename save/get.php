<?php
include("_class.php");
$game=new game_class();

if (isset($_GET['name']) && isset($_GET['score'])){$game->insert_score();}

if (isset($_GET['get_score'])) {$game->get_scores();}
?>