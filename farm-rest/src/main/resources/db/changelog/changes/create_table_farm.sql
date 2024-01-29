CREATE TABLE IF NOT EXISTS farm
(
    id character varying(10) PRIMARY KEY NOT NULL,
    address character varying(200),
    city character varying(50),
    name character varying(50),
    postal_code integer,
    state character varying(2),
    latitude double precision,
    longitude double precision,
    total_animal integer DEFAULT 0
);