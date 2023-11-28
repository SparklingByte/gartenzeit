# Gartenzeit App

## Next Things To Do

- show right user information on homepage
- user information on profile page
- API for editing user information
- harvest data on harvest page
- harvest data on homepage
- harvest data on discover page
- functionality for uploading user profile image

## Recently added

- Front-End functionality for creating harvests
- Pages are secured with authentication
- API to remove participation in harvest with `DELETE` on `/api/harvest/[harvestId]/participants`
- API to participate in harvets with `POST` on `/api/harvest/[harvestId]/participants`
- API to get participants of harvest with `GET` on `/api/harvests/[harvestId]/participants`
- API to delete a harvest with `DELETE` on `/api/harvests/[harvestId]`
- API to change data of a harvest with `PUT` on `/api/harvests/[harvestId]`
- API to create a new harvest with `POST` on `/api/harvests`
- API to get all harvests in database (⚠️ just temporarily, will cause performance issues -> maybe pagination) with `GET` on `/api/harvests`
- API to get a single harvest with `GET` on `/api/harvests/[harvestId]`
