# Description
1. Each user gets a plot that is X by X pixels
2. When they are assigned a plot whos center is X * 1.Y units from the most recently created plot (or a plot of the users choosing if they have a request) and X * 1.Y or more units away from every other plot
	1. If there is no valid spaces X * 1.Y from the most recent plot try again X * 1.Y + n away where n starts at 1 and increases until there is a valid space and the plot is placed there
3. When you load the site you start at the center of a random plot, you can move about the space where pixels exist with WASD or arrow keys
4. If you have a plot there is a plot edit page where you can edit any pixels in your plot
5. Any user can edit any pixels that exist between plots but not within another users plot. They can change 1 pixel every Z hours
6. There is a chat only visible/useable to signed in users
7. To sign up you need to request to join, and for a request to be accepted more than half of current users have to vote to accept them
8. A user can have multiple plots, but each request must be approved by vote, having multiple plots doesn't mean multiple votes
9. Every plot is a link to another website (those links are part of the user request process)
	1. If somebody wants to join but doesn't have a website that is allowed, on click of there plot a message that user themselves can set will appear that explains if the website is in progress, they don't want to make one but want to have a plot, etc. They can choose font, font color, normal text editor stuff, really allow for creative expression here
10. There at the beginning is 1 public park near the initial plot(s) that is 4X by 4X pixels, same rules as other public land, any registered user can edit any garden square it's just a large amount of empty public land


# Implementation
Whole thing should run on docker 
Redis BE via Valkey
- Key will be X_Y on the grid
- Value will be hex value of that specific grid
- User data will be stored as a hash with user as key and plot coordinates, current WIP plot state, last time edited public land, and email within the hash.
For Auth look into
- https://github.com/cornflourblue/dotnet-5-signup-verification-api
- https://api.goauthentik.io/
Use valkey-go in a go BE for valkey.
- https://github.com/valkey-io/valkey-go
For main grid
- https://www.syncfusion.com/javascript-ui-controls/js-heatmap-chart

# Containers
There should be a VPS between Valkey, Authentic, and FE and a port forwarding connecting the FE to the WWW (plot.al.net)
### Valkey
- All grid data stored as K/V K=X_Y (grid cords) V=hex of that cord, null/false/undefined if unedited 
- User data stored as hash K=username V={plot_coordinates: {x: \[0, 100\], y: \[0, 100\]} plot_wip => {}, email: x@x.x, lastPublicEdit: 1761143647, lastPlotEdit: 1761143647, 
### Authentic
- Run authentik container, use its APIs
### FE
- 
