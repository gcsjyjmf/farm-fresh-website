-- For MySql
-- The following people have worked on this file:
-- Lei Li
CREATE
USER 'appuser'@'localhost' IDENTIFIED BY 'teamwork2022';

GRANT INSERT,
UPDATE,
DELETE,
SELECT
ON web_team_work.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

-- create appuser2, if appuser does not work, try appuser2
GRANT USAGE ON *.* TO 'appuser2'@'localhost' IDENTIFIED BY 'teamwork2022';
GRANT ALL PRIVILEGES ON demo.* TO 'appuser2'@'localhost';
FLUSH PRIVILEGES;