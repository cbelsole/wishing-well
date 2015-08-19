#Collections:
##Bid:
```json
{
  "amount": 0,
  "charityId": "some charity ID",
  "status": ["active", "rejected", "pending"],
  "userId": "some user ID",
  "wish": "Some wish"
}
```
##Charities
```json
{
  "name": "Charity name"
}
```

#Routes
```
/
/users/:id
/bids
/charities
```

#Pages
```
/ - home page
/users/:id - User page with list of user's bids
/bids - list of all bids
/charities - list of available charities
```
