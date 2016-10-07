import React, { Component } from "react";

export default class Modal extends Component {
	render() {
		return (
			<div class="modal fade" id="contactUsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  	<div class="modal-dialog" role="document">
			    	<div class="modal-content" id="contact-us-modal-content">

			      		<div class="modal-header">
			        		<button type="button" class="close" id="close-modal-button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        		<p class="text-center"><img id="modal-logo" src={require("../img/scm-logo-small.png")} /></p>
			        		<h4 class="modal-title text-center" id="myModalLabel">Contact Us</h4>

			        		<hr id="blue-horizontal-rule" />

			        		<p class="text-center" id="myModalDescription">Please get in touch with your enquiry, and one of our team will get back to you as soon as possible.</p>
			      		</div>

			      		<div class="modal-body" id="modal-body">
			      			<form method="post" action="../php/mailer.php">
							  <div class="form-group">
							    <label class="form-label-white" for="name-input">Full Name:</label>
							    <input type="text" name="name" class="form-control" id="name-input" requried />
							  </div>

							  <div class="form-group">
							    <label class="form-label-white" for="email">Email:</label>
							    <input type="email" name="email" class="form-control" id="email" required />
							  </div>

							  <div class="form-group">
							    <label class="form-label-white" for="number">Telephone:</label>
							    <input type="number" name="telephone-number" class="form-control" id="number" required/>
							  </div>

							  <div class="form-group">
								  <label class="form-label-white" for="enquiry">Enquiry:</label>
								  <textarea name="message" class="form-control" rows="5" id="enquiry" required></textarea>
							  </div>
				      		  <div class="modal-footer" id="modal-footer">
				        		  <button type="submit" id="send-enquiry-button" class="btn" data-dismiss="modal">Send Enquiry</button>
				      		  </div>
				      	   </form>	
				      	</div>
			    	</div>
			  	</div>
			</div>
		);
	}
}