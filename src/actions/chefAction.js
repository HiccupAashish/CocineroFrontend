import { createBrowserHistory } from "history";

const history=createBrowserHistory()

export const CreateChef =  ({name,email,password}) => {
	return (dispatch) => {
		fetch("http://localhost:3000/api/v2/chefs", {
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ 
                chef:{
                    name:name,
                    email:email,
					password:password
                }  })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
                    console.log(JSON.stringify(data.chef))
					localStorage.setItem("chef", JSON.parse(data.chef));
					history.push("/chef/login")
					window.location.reload();
				}
			});
	};
};

export const upadateChefData=(updatechefInfo)=>{
	return(dispatch)=>{
		fetch(`http://localhost:3000/api/v2/chefs/${JSON.parse(localStorage.chef).id}`,{
			method:"PUT",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.chef_token}`

			},
			body: JSON.stringify({ 
				chef:{
					name:updatechefInfo.name,
					address: updatechefInfo.address,
					bio1: updatechefInfo.bio,
					bio2: updatechefInfo.foodbio,
					img1: updatechefInfo.imageUrl[0],
					img2: updatechefInfo.imageUrl[1],
					img3: updatechefInfo.imageUrl[2],
					lat: updatechefInfo.coordinates.lat,
					lng: updatechefInfo.coordinates.lng,
			    } 	})  })
			.then((res)=>res.json())
			.then((data)=>{
				console.log(data)
			})  
    }
}


export const logInChef =  ({email,password}) => {
	return (dispatch) => {
		fetch("http://localhost:3000/api/v2/chef/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ 
                admin:{
                    email:email,
                    password:password
                }  })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
                    console.log(data)
					localStorage.setItem("chef", JSON.stringify(data.chef.data.attributes));
					localStorage.setItem("chef_token", data.jwt);
					console.log(localStorage.chef)
					// dispatch(loginUser(data.user.data.attributes));
					history.push("/")
					window.location.reload();	
				}
			});
	};
};

export const createLike=(id)=>{
	return(dispatch)=>{
		fetch(`http://localhost:3000/likes`,{
			method:"POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				like: {
				chef_id:id
			}
			})
		})
			.then((res)=>res.json())
			.then((data)=> {
				console.log(data)
			})
	}
}