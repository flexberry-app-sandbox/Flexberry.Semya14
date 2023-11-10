docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semya14-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t semya14-java/app ../../..
