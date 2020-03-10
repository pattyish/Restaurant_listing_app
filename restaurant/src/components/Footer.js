import React, { Component } from "react";
import FooterBottom from "./footetBottom";
class Footer extends Component {
  render() {
    return (
        <>
      <div className="row footer-style" id="contact-us">
            <div className="col-md-5 footer-address">
              <h2>Contact us</h2>
              <ul>
                  <li>Telephone : +250 788 000 000</li>
                  <li>Email : patrickishimwe16@gmail.com</li>
                  <li>Address : kimihurura, kigali</li>
              </ul>

            </div>
            <div className="col-md-7 footer-feedback">
                <form >
                    <div className="form-inline">
                    <input type="text" className="form-control" placeholder="Name"/>&nbsp;&nbsp;
                    <input type="text" className="form-control" placeholder="Email"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <textarea className="form-control" ></textarea>
                    </div>
                    <button type="submit" className=" btn footer-submit-button">Submit</button>
                </form>
            </div>
        </div>
        <FooterBottom/>
        </>
    );
  }
}

export default Footer;
