SELECT t2.id,t2.name,t1.name AS parent_name FROM users t1 RIGHT JOIN users t2 ON t1.id = t2.parent_id;