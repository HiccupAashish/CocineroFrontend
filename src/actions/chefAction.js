// import { createBrowserHistory } from "history";
// import { useNavigate } from "react-router";
import { chefdata, storeBookings } from "../components/store/bookingSlice";
import { createBrowserHistory } from "history";
import { getChefs } from "../components/store/chefslice";
import { addComments, addNewCommentToComments, getComments } from "../components/store/commetSlice";
import { useDispatch } from "react-redux";
import { async } from "@firebase/util";
import { Navigate } from "react-router";

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

export const upadateChefData=(name,address,bio1,bio2,images,coordinates,profile)=>{
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
					name:name,
					address:address,
					bio1: bio1,
					bio2: bio2,
					images:images,
					lat: coordinates.lat,
					lng: coordinates.lng,
					avatar:profile
			    } 	})  })
			.then((res)=>res.json())
			.then((data)=>{
				console.log(data)
			})  
    }
}

export const fetchChefs = () => {
	return async (dispatch) => {
	  const fetchHandler = async () => {	
		const res = await fetch(
		  "http://localhost:3000/api/v2/chefs"
		);
		const data = await res.json();
		return data;
	  };
	  try {
		const chefData = await fetchHandler();

		console.log( chefData.chef.data)
		dispatch(getChefs(chefData.chef.data))	
	  } catch (err) {
		alert(err.message)
		
	  }
	};
  };
  


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
					localStorage.setItem("chef", JSON.stringify(data.chef.data.attributes));
					localStorage.setItem("chef_token", data.jwt);
					// history.push("/chef/admin")
					// window.location.reload();	
				}
			});
	};
};


export const deleteComment=(id)=>{
	fetch(`http://localhost:3000/comments/${id}`,{
		method:"DELETE",
		headers:{
			"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.chef_token}`
		},
	})
}

export const addComment= (comment,chef_id)=>{
	return(dispatch)=>{
	    fetch('http://localhost:3000/comments',{
		method:"POST",
		headers:{
			"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.token}`
		},
		body: JSON.stringify({
			comment:{
				comment: comment,
				chef_id: chef_id
			}
		})
	})
		.then((res)=>res.json())
		.then((data)=>{
			console.log(JSON.stringify(data.comment))
			dispatch(addNewCommentToComments(data.comment))
		})
    }
}

export const fetchComments = (id) => {
	return async (dispatch) => {
	  const fetchHandler = async () => {	
		const res = await fetch(
		  `http://localhost:3000/chef/${id}/comments`
		);
		const data = await res.json();
		return data;
	  };
	  try {
		const chefData = await fetchHandler();

	
		dispatch(getComments(chefData))	
	  } catch (err) {
		alert(err.message)
		
	  }
	};
  };
  export const createBooking=(guest,name,price,date,address,userid,chefid)=>{
	return async(dispatch)=>{
		const postBooking= async()=>{
			const res= await fetch('http://localhost:3000/bookings',{
				method: "POST",
				headers:{
					"Content-Type": "application/json",
                     Accept: "application/json",
				    Authorization: `Bearer ${localStorage.token}`

				},
				body: JSON.stringify({
					booking:{
						guest_count:guest,
						user_id:userid,
						chef_id:chefid,
						date:date,
						address:address,
						price:price

					}
				})
			})
			const data = await res.json();
		    return data;
		}
		try{
			const bookingdata=await postBooking()
			console.log(bookingdata)
		}
		catch(err){
			alert(err.message)
		}
		
	}
  }

  export const fetchChefBookings=(id)=>{
	return async (dispatch)=>{
		const fetchHandler = async () => {	
			const res = await fetch(
			  `http://localhost:3000/bookings/${id}/chef`
			,{
				method:"GET",
				headers:{
					"Content-Type": "application/json",
					 Accept: "application/json",
				     Authorization: `Bearer ${localStorage.chef_token}`
                     
				}
			});
			const data = await res.json();
			return data;
		  };
		  try {
			const getbookings = await fetchHandler();
			console.log(getbookings)
			dispatch(storeBookings(getbookings.bookings.data))
		
		  } catch (err) {
			alert(err.message)
			
		  }
	}
  }

  export const acceptBooking=(id)=>{
	return (dispatch)=>{
		fetch(`http://localhost:3000/bookings/${id}`,{
			method:"PATCH",
			headers:{
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.chef_token}`
			},
			body:JSON.stringify({
				booking:{
					status:"Accepted"
				}
			})
		})
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
		})
	}
  }