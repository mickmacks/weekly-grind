{

	"users": {
		"jdawg":{
			"name": "johnny",
			"username": "jdawg",
			"email": "jdiddy@gmail.com",
			"password": "password"
		},
		"snazzyazzy":{
			"name": "aaron",
			"username": "snazzyazzy",
			"email": "aazazzy@gmail.com",
			"password": "password"
		}
	},

	"groups": {
		"tacotuesday":{
			"name": "tacotuesday",
			"location": "san francisco",
			"password": "password",
			"members": {

				// TODO: look up reference data syntax for 30 mins
				"jdawg": true,
				"snazzyazzy": true
			}
		}
	},

	"posts": [
		{
			"username": "snazzyazzy",
			"group": "tacotuesday",
			"title": "Taco Time",
			"body": "Let's get some god damn tacos",
			"createdAt": "23rd June 2017, 10:11:15 AM",
			"updatedAt": "23rd June 2017, 10:12:14 AM"
		},
		{
			"username": "johnny",
			"group": "tacotuesday",
			"title": "Heck Yes Tacos",
			"body": "Yes, let's get tacos",
			"createdAt": "23rd June 2017, 10:51:15 AM"
		}
	]

}