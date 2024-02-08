# Schema

## Users
* ID (int PK unique)
* Email (str)
* Password (hashed-str)
* Session (one -> many)
* Videos (one -> many)
* Audio (one -> many)
* Notes (join table)

## Session
* ID (int PK unique)
* CreatedAt (DateTime)
* Activities (one -> many)

## Activity
* ID (int PK unique)
* Category (str - list)
* Notes (str opt.)

## Audio
* ID (int PK unique)
* Location (?)
* Notes (str opt.)

## Video
* ID (int PK unique)
* Location (?)
* Notes (str opt.)
