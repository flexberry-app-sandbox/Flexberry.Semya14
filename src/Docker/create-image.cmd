docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semya14/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t semya14/app ../..
