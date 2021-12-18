-- Table: public.encripts

-- DROP TABLE IF EXISTS public.encripts;

CREATE TABLE IF NOT EXISTS public.encripts
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    encripted_name character varying COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT '2021-12-18 15:08:28.006845'::timestamp without time zone,
    updated_at timestamp without time zone DEFAULT '2021-12-18 15:08:28.006845'::timestamp without time zone,
    CONSTRAINT "PK_6b5af2d6ae9e09e50d06973e772" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.encripts
    OWNER to postgres;