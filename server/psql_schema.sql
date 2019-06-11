DROP DATABASE IF EXISTS "sdc";

CREATE DATABASE "sdc";

CREATE TABLE "reviews" (
    "uuid" int4 NOT NULL,
    "rid" SERIAL NOT NULL,
    "customerName" text NOT NULL,
    "starRating" int4 NOT NULL,
    "date" timestamp NOT NULL DEFAULT now(),
    "reviewTitle" text NOT NULL,
    "review" text,
    "helpfulYes" int4 NOT NULL DEFAULT 0,
    "helpfulNo" int4 NOT NULL DEFAULT 0,
    PRIMARY KEY ("rid")
);