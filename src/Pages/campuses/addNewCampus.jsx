import React, {useState} from React;

function addNewStudent() {
    const [campusName, setCampusName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");


    return (

        <div>

            <h1> Add Campus Form </h1>
                <form>
                    <label>
                        Campus Name: 
                            <input type = "text" value = {campusName} onChange = {this.handleChange} />
                    </label>
                    <label>
                        Image URL: 
                    <input type = "text" value = {imageURL} onChange = {this.handleChange} />
                    </label>
                    <label>
                        Description: 
                    <input type = "text" value = {description} onChange = {this.handleChange} />
                    </label>
                    <label>
                        Address: 
                    <input type = "text" value = {address} onChange = {this.handleChange} />
                    </label>
                
        </form>
    </div>

    );
}

export default addNewCampus;
