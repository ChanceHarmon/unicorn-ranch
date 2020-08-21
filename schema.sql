DROP TABLE IF EXISTS stable;

CREATE TABLE stable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255),
  favorite_food VARCHAR(255),
  current_location VARCHAR(255)
)
