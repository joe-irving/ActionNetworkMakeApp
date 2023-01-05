# Action Network

Action Network' API is split into a few key areas:

## Actions and events

### List Actions

List actions of a particular type.

## List Events

Lists events. If you do not specify an event campaign then all event where the group is a primary sponsor will be return. If an event campaign is selected, all events within that event campaign will be returned, including those which do not have the group as a primary sponsor.

### Get Action

Gets an individual action. The action type and action id are mappable.

### Get Event

Gets an individual event. Where the event is part of an event campaign and the group is **not** the primary sponsor, then event campaign is required.

### Update action

this dynamically takes fields from RPCs depending on the action chosen. An RPC is also used to list the first 75 of the resource type for people to pick to modify.

### Update event

Like update action but with Event campaign option.

### Create action

very similar to update action. Additionally allows type on advocacy campaigns. Allows for creation of events

### Watch events and watch action

can be filtered with action network oData filters. Can watch for new or updated actions

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

This module uses the record helpers. This means in one POST request actions can be recorded or taken.

NOTE: People will always be subscribed if they are **new** to the list unless the advanced option of "Do not subscribe activist if new to list?" is ticked.

That option will do 2 extra API called to make sure the person who takes action is not subscribed.

#### Limitations by action

Action Type | Action Taken Type | User interface actions | API Actions | Deduplicated | Autoresponse | Notes
------------:|:-------------------|:------------------------|:-------------|:-----|:-----|:---
Events | Attendances | Yes | Yes | Yes | Yes | Some events only sit as children to an event campaign
Fundraising Pages | Donations | No | Yes | No | No |
Advocacy Campaigns | Outreaches | No | Yes | No | No 
Petitions | Signatures | Yes | Yes | Yes | Yes
Forms | Sumissions | Yes | Yes | Yes | Yes

#### Tags

Adding and removing tags can only be for tags that already exists. The list should be available via RPC.

#### Background processing

To save on response time, you can set this to process in the background. Use if you do not need the response info.

### Update Action Taken

Update the information in an action taken. There are only 3 types of actions that allow for information to be updated, despite what is in the Action Network documentation.

Action Type | Action Taken Type | Notes
------------:|-------------------:|:------------------------
Fundraising Pages | Donations | Recipients are added when updated, you cannot change any recipients added when the donation was created
Advocacy Campaigns | Outreaches | 
Petitions | Signatures |

Action Network documentation states it is possible to change referrer data but that has not been possible in practice.

### Get Action Taken

* Gets Action taken (by action type, action and action taken ID).
* Gets associated person
* Gets associated action

Returns as one collection

### Instant action triggers for:

* Submissions
* Signatures
* Attendances
* Outreaches

The all action webhook as purposefully not been set up as it is far too unpredictable in volume for Make.

Go to Details > API & Sync in the menu to create webhooks with the address you are given. Make sure the action type matches up.

## People

### Create person

Creates a new person. People are duplicated by email and phone number. Used the person signup helper.

### Update person

Updates a person based on ID, Email or phone number. ID is faster as only one request. Background processing available for when response data is not needed.

### List people

Lists people that fit into a specific filter. Allows for writing custom queries using the oData standard, but also use of a simple filter that is easier to use for the user.

### Get person

Retreives a single person resource by ID, email or phone number. 

If selected, this module can retrive the first page of attendances, submissions, signatures, outreaches, donations and taggings for the person. That means a max of 25 embedded resources for the person. Also returned will be the actual total in a collection called "Totals" in case only that info is needed.

### Watch people

Watches people by modified date (new or updated). Created date corresponds to when that person first took action on action network, not in the group.

Works very similarly to list people

## Emails (messages)

Currently action network only deals with emails on the API, and not mobile messages.

### Create message

Creates a new message (email)

### Get message

Get's a message. If targeting > 0 then it is ready to send

### Send message

to send a message imediately

### Schedule message

To send message in future

### Stop send or cancel schedule

Need a message ID and will stop and ongoing to future sends from happening

### List wrappers

lists available email wrappers

### Get Wrappers

Gets an individual email wrapper

## Others

### List custom fields

FOr lookup as a reference if needed

### List Queries

### Get Queries

### List lists

Lists all reports and message target lists.

### Get list

Get an individual list by ID

### List items

Gets the items (person IDs) in a specific list

### Get Item


Return a single item in a list by its ID.

### Embed codes

Documentation can be found on the [oEmbed page](https://actionnetwork.org/oembed).