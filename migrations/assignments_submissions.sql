CREATE TABLE assignments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  content VARCHAR(255),
  day DATE,
  chapter INTEGER,
  duration VARCHAR(255)
);

CREATE TABLE assignment_submissions (
  id SERIAL PRIMARY KEY NOT NULL,
  assignment_id INTEGER NOT NULL REFERENCES assignments(id),
  student_id INTEGER NOT NULL REFERENCES students(id),
  duration VARCHAR(255),
  submission_date DATE
);