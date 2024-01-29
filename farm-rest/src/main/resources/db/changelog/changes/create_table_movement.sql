CREATE TABLE IF NOT EXISTS movement
(
    company character varying(50),
    reason character varying(100),
    origin_farm_id character varying(10),
    dest_farm_id character varying(10),
    species character varying(50),
    items_moved integer,
    movement_date date
);