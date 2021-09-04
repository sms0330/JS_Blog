import React, { Component } from 'react';
import FormErrors from './FormErrors';

export default class NewPostForm extends Component {
  state = { 
  
    // Initially, no file is selected 
    selectedFile: null
  }; 
   
  // On file select (from the pop up) 
  onFileChange = event => { 
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 
   
  // On file upload (click the upload button) 
  onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
   
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
   
    // Request made to the backend api 
    // Send formData object 
    fetch(`http://localhost:3000/api/v1/uploads`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', JSON.stringify(response))); 
  }; 
  
  fileData = () => { 
    if (this.state.selectedFile) { 
        
      return ( 
        <div> 
          <h2>File Details:</h2> 
          <p>File Name: {this.state.selectedFile.name}</p> 
          <p>File Type: {this.state.selectedFile.type}</p> 
          <p> 
            Last Modified:{" "} 
            {this.state.selectedFile.lastModifiedDate.toDateString()} 
          </p> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <br /> 
          <h4>Choose before Pressing the Upload button</h4> 
        </div> 
      ); 
    } 
  }; 

  render() {
    return (
      <form className="ui form" onSubmit={this.props.createPost}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <FormErrors errors={this.props.errors} formField="title" />
          <input
            type="text"
            onChange={e => {
              this.props.onChange({ title: e.target.value });
            }}
            value={this.props.post.title}
            name="title"
            id="title"
            placeholder="Please Enter Title"
          />
        </div>
        <div className="field">
          <label htmlFor="body">Body</label>
          <FormErrors errors={this.props.errors} formField="body" />
          <textarea
            type="text"
            onChange={e => {
              this.props.onChange({ body: e.target.value });
            }}
            value={this.props.post.body}
            name="body"
            id="body"
            placeholder="Please write your opinion."
          />
        </div>
        <div className="field">
          <label htmlFor="tags">Tags</label>
          <FormErrors errors={this.props.errors} formField="tags" />
          <div className="ui right labeled left icon input">
            <i className="tags icon"></i>
            <input
              type="text"
              onChange={e => {
                this.props.onChange({ tags: e.target.value });
              }}
              value={this.props.post.tags}
              name="tags"
              id="tags"
              placeholder="Enter tags"
            />
            <i className="ui tag label">Add Tag</i>
          </div>
        </div>

        <div className="field">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={this.onFileChange}
            name="image"
            id="image"
          />
          {this.fileData()} 
        </div>
        <button  onClick={this.onFileUpload} className="ui primary button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
