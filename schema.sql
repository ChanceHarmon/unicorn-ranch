DROP TABLE IF EXISTS stable;

CREATE TABLE stable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255),
  favorite_food VARCHAR(255),
  current_location VARCHAR(255)
);

INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Sparkles', 'purple', 'carrots', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Sally', 'pink', 'peaches', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Sam', 'blue', 'candy', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Ben', 'purple', 'ceral', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Spark', 'plum', 'crackers', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Tom', 'green', 'cherries', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Spot', 'light-blue', 'cantoloupe', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Adam', 'green', 'steak', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Brook', 'chartruse', 'lucky-charms', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Lena', 'purple', 'almonds', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Brad', 'sky-blue', 'ramen', 'barn');
INSERT INTO stable (name, color, favorite_food, current_location) VALUES ('Rosey', 'pink', 'pop-corn', 'barn');
