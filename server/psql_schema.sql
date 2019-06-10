DROP DATABASE IF EXISTS "sdc";

CREATE DATABASE "sdc";

CREATE TABLE "reviews" (
    "uuid" int4,
    "rid" BIGSERIAL,
    "customerName" text,
    "starRating" int4,
    "date" timestamp,
    "reviewTitle" text,
    "review" text,
    "helpfulYes" int4,
    "helpfulNo" int4,
    PRIMARY KEY ("rid")
);