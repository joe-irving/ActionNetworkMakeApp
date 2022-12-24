# Action Network

Action Network' API is split into a few key areas:

## Actions

### List Actions

List actions of a particular type.

For events, if you do not specify an event campaign then all event where the group is a primary sponsor will be return. If an event campaign is selected, all events within that event campaign will be returned, including those which do not have the group as a primary sponsor.

### Get Action

Gets an individual action. The action type and action id are mappable.

### Update action

this dynamically takes fields from RPCs depending on the action chosen. An RPC is also used to list the first 75 of the resource type for people to pick to modify.

### Create action

very similar to update action. Additionally allows type on advocacy campaigns

## Tags

### Create tagging

creates a new tagging based on a person's email, phone or uniquie ID. If there person does not exist, they are not added to the system and the action will fail.

### List taggings by tag

lists all the taggings by a specific tag. i.e all the people who have been tagged

### List taggings by person

Lists all the taggings by a specific person

### Delete tagging

deletes a taggging of a specific type and ID

### Get tagging

Gets an individual tagging of a person, and chains this will 2 other requests to get:

* The tag in question (i.e. the name of the tag)
* The person associated with the tagging

### Get tag

Individual tags can be only retrived by unique ID, as the oData filtering does not apply for tag resources (see https://actionnetwork.org/docs/v2/#odata).

### List tags

Tags can't be filtered at all by oData "filter" queries, so you can only get all of the tags at once, or limit it to a specifc number of tags as a maximum.

### Create tag

Create a tag with a specific name. If the tag exists, it will simply return the existing tag and not create a new one.

## Action Takers

### List Action takers

Action takers can be filtered by created_date and modified_date

Actions taken can either be assocated with a specific action, or a specific person and type of action.

Like with other person lookups, you can lookup a person based on email, phone number or uniquie ID. Using ID means fewer API calls and is more reliable.

### Take action




