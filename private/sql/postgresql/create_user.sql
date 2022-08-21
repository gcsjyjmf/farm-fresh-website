-- For PostgreSql
CREATE USER appuser with password 'teamwork2022';
GRANT ALL PRIVILEGES ON database "web_team_work" TO appuser;
GRANT SELECT,INSERT,UPDATE ON ALL TABLES IN SCHEMA public TO appuser;
