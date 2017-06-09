{

	"users": {

		"jdawg":{
			"_id": "sa38y7tuahgds9saf25r",
			"name": "johnny",
			"username": "jdawg",
			"email": "jdiddy@gmail.com",
			"password": "password",
			"occupation": "Illustrator",
			"location": "san francisco,",
			"groups": ["352twrgdy4asga2221ga"],
			"posts": ["39utiajnjskfgnajksg"]
		},
		"snazzyazzy":{
			"_id": "813249y9ueirjwngkamd",
			"name": "aaron",
			"username": "snazzyazzy",
			"email": "aazazzy@gmail.com",
			"password": "password",
			"occupation": "Illustrator",
			"location": "san francisco,",
			"groups": ["352twrgdy4asga2221ga"],
			"posts": ["910u5ijtjidgkalkklg"]
		}

	},

	"groups": {

		"tacotuesday":{
			"_id": "352twrgdy4asga2221ga",
			"name": "tacotuesday",
			"heroImage": "http://aasdasdasdas",
			"logo": "http://aksfmkasfakfa",
			"nextMeet": "23rd June 2017, 10:12:14 AM",
			"location": "san francisco",
			"password": "password",

			"admins": [
				"813249y9ueirjwngkamd"
			],
			"users": [ 
				"813249y9ueirjwngkamd",
				"sa38y7tuahgds9saf25r"
			],
			"posts": [
				"813249y9ueirjwngkamd",
				"sa38y7tuahgds9saf25r"
			]			
		}

	},

	"posts": [

		{	
			"_id": "39utiajnjskfgnajksg",
			"user_id": "813249y9ueirjwngkamd",
			"group_id": "352twrgdy4asga2221ga",
			"title": "Taco Time",
			"body": "Let's get some god damn tacos",
			"image": "http://asdasdasdasda",
			"likes": 1,
			"createdAt": "23rd June 2017, 10:11:15 AM",
			"updatedAt": "23rd June 2017, 10:12:14 AM"
		},
		{	
			"_id": "910u5ijtjidgkalkklg",
			"user_id": "sa38y7tuahgds9saf25r",
			"group_id": "352twrgdy4asga2221ga",
			"title": "Taco Taco Burrito",
			"body": "Yes Tacos",
			"image": "http://asdasdasdasda",
			"likes": 1,
			"createdAt": "23rd June 2017, 10:51:15 AM"
		}

	]

}