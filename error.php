<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Error | peldax.com</title>
        <meta charset="UTF-8">
        <meta name="author" content="Václav Pelíšek">
        <meta name="description" content="Václav Pelíšek\'s personal page">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="václav, pelíšek, pelda, peldax, personal, page">
        <meta name="robots" content="index, follow">
        <link href="/favicon.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/development/stylesheet.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="container">
            <div id="buttons">
                <a id ="hbutton" href="http://www.peldax.com">
                    <div id="arrow"></div>
                    <p>Home</p>
                </a>
            </div>
            <div id="content-div">
                <?php
                $errorcode = $_SERVER["REDIRECT_STATUS"];
                if ($errorcode < 400)
                {
                    header("Location: /");
                    return;
                }
                echo "<h1>Oups! Something went wrong (code {$errorcode})</h1>";?>
                <p>Please use <a class="redirect" href="/">this</a> link to redirect.</p>
            </div>
            <div id="footer">
                <p>©Václav Pelíšek, 2016</p>
            </div>
        </div>
    </body>
</html>