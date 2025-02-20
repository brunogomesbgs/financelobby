# financelobby
To run the container follow the 3 steps:
1 - enter in the folder /back and apply the command docker-compose up --build;
2 - after the containers are running, enter in the Database´s container( run it by the root user: mysql -u root -p , the root user it is bruno) and create an user named "finance_lobby" with the password "finance" (CREATE USER finance_lobby@finance_lobby_db IDENTIFIED BY 'password';) and grant permissions to it(GRANT ALL PRIVILEGES ON finance_lobby_db.* TO 'finance_lobby'@'finance_lobby_db' WITH GRANT OPTION;);
3 - after enter in the Laravel´s container and apply 4 commands: composer install, php artisan key:generate, php artisan migrate and php artisan db:seed(this will generate the first user named "Admin" and password "123456").
