const getSubordinates = function(id1) {
	// Define role and user objects
	const roles = [{
		"Id": 1,
		"Name": "System Administrator",
		"Parent": 0
	}, {
		"Id": 2,
		"Name": "Location Manager",
		"Parent": 1,
	}, {
		"Id": 3,
		"Name": "Supervisor",
		"Parent": 2,
	}, {
		"Id": 4,
		"Name": "Employee",
		"Parent": 3,
	}, {
		"Id": 5,
		"Name": "Trainer",
		"Parent": 3,
	}];

	const users = [{
		"Id": 1,
		"Name": "Adam Admin",
		"Role": 1
	}, {
		"Id": 2,
		"Name": "Emily Employee",
		"Role": 4
	}, {
		"Id": 3,
		"Name": "Sam Supervisor",
		"Role": 3
	}, {
		"Id": 4,
		"Name": "Mary Manager",
		"Role": 2
	}, {
		"Id": 5,
		"Name": "Steve Trainer",
		"Role": 5
	}];

	// initialize initial subordinate array and result array
	let subord = [], 
		result = [];

	// get selected user
	const getUser = function(id2) {
		// filter user based on ID, and destructure to return user object
		let [user] = users.filter(obj => {
  			return obj.Id === id2;
		});
		// Return user
		return user;
	};

	// Get Subordinates for User with specific ID
	const getSubords = function(id2) {
		// get role id
		let usersSelected;
		// Return empty set if user ID is invalid and thus returns an undefined user object
		if(getUser(id2) === undefined) {
			return [];
		}
		let roleId = getUser(id2).Role;
		// get associated subordinate roles
		let rolesSelected = roles.filter(obj => {
			return obj.Parent === roleId;
		});
		// extract role ids
		let roleIdsSelected = rolesSelected.map(r => r.Id);
		// get associate users with those role IDs
		if (roleIdsSelected) {
			usersSelected = users.filter(obj => {
				return roleIdsSelected.includes(obj.Role)
			});
		} else {
			usersSelected = [];
		}

		return usersSelected;
	};

	// get initial list of 1st level subordinates
	subord.push(...getSubords(id1));
	// push this lists to results array
	result.push(...subord);
	// Set a conditional loop against the length of the subordinates array
	while(subord.length) {
		// clear subordinates of subordinates array
		let subordOfSubord = [];
		// Loop through the list and get each user's subordinates, pushing them into subordinates of subordinates array
		subord.forEach(kid => subordOfSubord.push(...getSubords(kid.Id)));
		// push contents of SO of SO array into result
		result.push(...subordOfSubord);
		// subordinates array now contains subordinates of subordinates, then lather-rinse-repeat until this result
		// is an empty array to be picked up by the conditional check...
		subord = subordOfSubord;
	}
	// self explanatory... ;)
	return result;
};

module.exports = { getSubordinates };
